const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase with service role key
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

  try {
    const { userId } = JSON.parse(event.body);

    if (!userId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'userId is required' })
      };
    }

    // Get the user's subscription info from database
    const { data: subscription, error: dbError } = await supabase
      .from('user_subscriptions')
      .select('stripe_subscription_id, stripe_customer_id, status')
      .eq('user_id', userId)
      .single();

    if (dbError || !subscription?.stripe_subscription_id) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'No subscription found for this user' })
      };
    }

    // Cancel the subscription at period end (won't charge after trial)
    const canceledSubscription = await stripe.subscriptions.update(
      subscription.stripe_subscription_id,
      {
        cancel_at_period_end: true,
      }
    );

    // Update database to reflect cancellation status
    await supabase
      .from('user_subscriptions')
      .update({
        cancel_at_period_end: true,
        updated_at: new Date().toISOString()
      })
      .eq('user_id', userId);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({
        success: true,
        message: 'Subscription will be canceled at period end',
        subscription: {
          id: canceledSubscription.id,
          cancel_at_period_end: canceledSubscription.cancel_at_period_end,
          current_period_end: canceledSubscription.current_period_end,
        }
      })
    };

  } catch (error) {
    console.error('Stripe cancellation error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to cancel subscription',
        message: error.message
      })
    };
  }
};
