const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { userId, userEmail, priceId } = JSON.parse(event.body);

    // Validate required fields
    if (!userId || !userEmail) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'userId and userEmail are required' })
      };
    }

    // Use provided priceId or fall back to environment variable
    const finalPriceId = priceId || process.env.STRIPE_PRICE_ID;

    if (!finalPriceId) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'No price ID configured' })
      };
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: finalPriceId,
          quantity: 1,
        },
      ],
      customer_email: userEmail,
      client_reference_id: userId,
      metadata: {
        userId: userId,
      },
      success_url: 'https://certifystack.com/dashboard?success=true',
      cancel_url: 'https://certifystack.com/pricing?canceled=true',
      allow_promotion_codes: true,
      billing_address_collection: 'auto',
      subscription_data: {
        metadata: {
          userId: userId,
        },
      },
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({
        sessionId: session.id,
        url: session.url
      })
    };

  } catch (error) {
    console.error('Stripe checkout error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to create checkout session',
        message: error.message
      })
    };
  }
};
