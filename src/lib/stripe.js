/**
 * Stripe Integration Utilities for CertifyStack
 *
 * These functions call the Netlify serverless functions to interact with Stripe
 */

/**
 * Create a Stripe checkout session and redirect user to payment
 * @param {string} userId - The authenticated user's ID
 * @param {string} userEmail - The user's email address
 * @param {string} priceId - Optional Stripe price ID (uses env default if not provided)
 * @returns {Promise<{sessionId: string, url: string}>}
 */
export async function createCheckoutSession(userId, userEmail, priceId = null) {
  try {
    const response = await fetch('/.netlify/functions/stripe-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        userEmail,
        priceId,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to create checkout session');
    }

    const data = await response.json();

    // Redirect to Stripe checkout
    if (data.url) {
      window.location.href = data.url;
    }

    return data;
  } catch (error) {
    console.error('Checkout error:', error);
    throw error;
  }
}

/**
 * Create a Stripe billing portal session for subscription management
 * @param {string} userId - The authenticated user's ID
 * @returns {Promise<{url: string}>}
 */
export async function createPortalSession(userId) {
  try {
    const response = await fetch('/.netlify/functions/stripe-portal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to create portal session');
    }

    const data = await response.json();

    // Redirect to Stripe portal
    if (data.url) {
      window.location.href = data.url;
    }

    return data;
  } catch (error) {
    console.error('Portal error:', error);
    throw error;
  }
}

/**
 * Test if environment variables are properly configured
 * @returns {Promise<{success: boolean, hasStripeKey: boolean, ...}>}
 */
export async function testEnvironment() {
  try {
    const response = await fetch('/.netlify/functions/test-env');
    return await response.json();
  } catch (error) {
    console.error('Environment test error:', error);
    throw error;
  }
}
