const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase with service role key to bypass RLS
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  const sig = event.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  // Debug logging
  console.log('Webhook Secret exists:', !!webhookSecret);
  console.log('Webhook Secret length:', webhookSecret?.length);
  console.log('Signature exists:', !!sig);
  console.log('Body type:', typeof event.body);
  console.log('Body length:', event.body?.length);

  let stripeEvent;

  try {
    // Verify webhook signature
    stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      sig,
      webhookSecret
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    console.error('Full error:', err);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: `Webhook Error: ${err.message}` })
    };
  }

  try {
    // Handle the event
    switch (stripeEvent.type) {
      case 'checkout.session.completed': {
        const session = stripeEvent.data.object;
        await handleCheckoutCompleted(session);
        break;
      }

      case 'customer.subscription.updated': {
        const subscription = stripeEvent.data.object;
        await handleSubscriptionUpdated(subscription);
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = stripeEvent.data.object;
        await handleSubscriptionDeleted(subscription);
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = stripeEvent.data.object;
        await handlePaymentFailed(invoice);
        break;
      }

      default:
        console.log(`Unhandled event type: ${stripeEvent.type}`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true })
    };

  } catch (error) {
    console.error('Webhook handler error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Webhook handler failed',
        message: error.message
      })
    };
  }
};

async function handleCheckoutCompleted(session) {
  let userId = session.client_reference_id || session.metadata?.userId;
  const customerId = session.customer;
  const subscriptionId = session.subscription;
  const customerEmail = session.customer_email || session.customer_details?.email;

  // If no userId, try to find user by email from auth.users
  if (!userId && customerEmail) {
    console.log('No userId in session, attempting to find user by email:', customerEmail);
    const { data: authUser, error } = await supabase.auth.admin.listUsers();

    if (!error && authUser?.users) {
      const matchedUser = authUser.users.find(u => u.email === customerEmail);
      if (matchedUser) {
        userId = matchedUser.id;
        console.log('Found user by email:', userId);
      }
    }
  }

  if (!userId) {
    console.error('No userId found in checkout session and could not match by email');
    return;
  }

  // Get subscription details from Stripe
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);

  // Upsert subscription in database
  const { error } = await supabase
    .from('user_subscriptions')
    .upsert({
      user_id: userId,
      stripe_customer_id: customerId,
      stripe_subscription_id: subscriptionId,
      status: subscription.status,
      price_id: subscription.items.data[0].price.id,
      current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
      current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
      cancel_at_period_end: subscription.cancel_at_period_end,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }, {
      onConflict: 'user_id'
    });

  if (error) {
    console.error('Error upserting subscription:', error);
    throw error;
  }

  // Update user profile to premium tier
  await supabase
    .from('profiles')
    .update({
      membership_tier: 'premium',
      updated_at: new Date().toISOString()
    })
    .eq('id', userId);

  console.log(`Subscription created for user ${userId}`);
}

async function handleSubscriptionUpdated(subscription) {
  const userId = subscription.metadata?.userId;
  const subscriptionId = subscription.id;

  // Update subscription status in database
  const { error } = await supabase
    .from('user_subscriptions')
    .update({
      status: subscription.status,
      current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
      current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
      cancel_at_period_end: subscription.cancel_at_period_end,
      updated_at: new Date().toISOString()
    })
    .eq('stripe_subscription_id', subscriptionId);

  if (error) {
    console.error('Error updating subscription:', error);
    throw error;
  }

  // If subscription is active, ensure user is premium
  if (subscription.status === 'active') {
    if (userId) {
      await supabase
        .from('profiles')
        .update({
          membership_tier: 'premium',
          updated_at: new Date().toISOString()
        })
        .eq('id', userId);
    }
  }

  console.log(`Subscription ${subscriptionId} updated to ${subscription.status}`);
}

async function handleSubscriptionDeleted(subscription) {
  const subscriptionId = subscription.id;

  // Get the user_id from our database
  const { data: subData } = await supabase
    .from('user_subscriptions')
    .select('user_id')
    .eq('stripe_subscription_id', subscriptionId)
    .single();

  // Update subscription status to canceled
  const { error } = await supabase
    .from('user_subscriptions')
    .update({
      status: 'canceled',
      cancel_at_period_end: false,
      updated_at: new Date().toISOString()
    })
    .eq('stripe_subscription_id', subscriptionId);

  if (error) {
    console.error('Error canceling subscription:', error);
    throw error;
  }

  // Downgrade user to free tier
  if (subData?.user_id) {
    await supabase
      .from('profiles')
      .update({
        membership_tier: 'free',
        updated_at: new Date().toISOString()
      })
      .eq('id', subData.user_id);
  }

  console.log(`Subscription ${subscriptionId} canceled`);
}

async function handlePaymentFailed(invoice) {
  const subscriptionId = invoice.subscription;
  const customerId = invoice.customer;

  // Update subscription status
  const { error } = await supabase
    .from('user_subscriptions')
    .update({
      status: 'past_due',
      updated_at: new Date().toISOString()
    })
    .eq('stripe_subscription_id', subscriptionId);

  if (error) {
    console.error('Error updating failed payment status:', error);
  }

  console.log(`Payment failed for subscription ${subscriptionId}`);
}
