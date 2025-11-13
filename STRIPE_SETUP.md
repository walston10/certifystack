# Stripe Subscription Integration - Setup & Testing Guide

## Overview
This implementation provides a complete Stripe subscription backend for CertifyStack using Netlify serverless functions.

## Files Created

### Backend Functions (in `/netlify/functions/`)
1. **stripe-checkout.js** - Creates Stripe checkout sessions
2. **stripe-webhook.js** - Handles Stripe webhook events
3. **stripe-portal.js** - Creates billing portal sessions
4. **test-env.js** - Tests environment variable configuration

### Frontend Utilities
1. **src/lib/stripe.js** - Helper functions for frontend integration

### Configuration
1. **package.json** - Updated with Stripe dependencies
2. **netlify.toml** - Already configured correctly

## Environment Variables Required

These must be set in Netlify (Site Settings > Environment Variables):

```
STRIPE_SECRET_KEY=sk_live_... or sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRICE_ID=price_...
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your-service-role-key
```

## Stripe Dashboard Setup

### 1. Get Your API Keys
- Go to: https://dashboard.stripe.com/test/apikeys
- Copy **Secret key** → Set as `STRIPE_SECRET_KEY`

### 2. Create a Product & Price
- Go to: https://dashboard.stripe.com/test/products
- Click "Add product"
- Name: "CertifyStack Premium"
- Pricing: Recurring, Monthly, $X.XX USD
- Copy the **Price ID** (starts with `price_`) → Set as `STRIPE_PRICE_ID`

### 3. Set Up Webhook
- Go to: https://dashboard.stripe.com/test/webhooks
- Click "Add endpoint"
- Endpoint URL: `https://certifystack.com/.netlify/functions/stripe-webhook`
- Listen to events:
  - `checkout.session.completed`
  - `customer.subscription.updated`
  - `customer.subscription.deleted`
  - `invoice.payment_failed`
- Copy **Signing secret** → Set as `STRIPE_WEBHOOK_SECRET`

## Testing Plan

### Phase 1: Environment Verification
```bash
# Test that environment variables are loaded
curl https://certifystack.com/.netlify/functions/test-env
```

Expected response:
```json
{
  "success": true,
  "hasStripeKey": true,
  "hasStripeWebhookSecret": true,
  "hasStripePriceId": true,
  "hasSupabaseUrl": true,
  "hasSupabaseServiceKey": true,
  "timestamp": "2025-01-XX..."
}
```

### Phase 2: Checkout Flow Test
1. **In your React component:**
```javascript
import { createCheckoutSession } from '../lib/stripe';
import { useAuth } from '../context/AuthContext';

function PricingPage() {
  const { user } = useAuth();

  const handleUpgrade = async () => {
    try {
      await createCheckoutSession(user.id, user.email);
      // User will be redirected to Stripe checkout
    } catch (error) {
      console.error('Checkout failed:', error);
      alert('Failed to start checkout. Please try again.');
    }
  };

  return <button onClick={handleUpgrade}>Upgrade to Premium</button>;
}
```

2. **Test the checkout:**
   - Click "Upgrade to Premium"
   - Should redirect to Stripe checkout page
   - Use test card: 4242 4242 4242 4242, any future date, any CVC
   - Complete payment
   - Should redirect back to dashboard with `?success=true`

3. **Verify database update:**
```sql
-- Check user_subscriptions table
SELECT * FROM user_subscriptions WHERE user_id = 'your-test-user-id';

-- Check profiles table
SELECT id, email, membership_tier FROM profiles WHERE id = 'your-test-user-id';
```

Expected: `membership_tier` should be 'premium', subscription record should exist

### Phase 3: Billing Portal Test
```javascript
import { createPortalSession } from '../lib/stripe';

function ProfilePage() {
  const { user } = useAuth();

  const handleManageSubscription = async () => {
    try {
      await createPortalSession(user.id);
      // User will be redirected to Stripe portal
    } catch (error) {
      console.error('Portal failed:', error);
    }
  };

  return <button onClick={handleManageSubscription}>Manage Subscription</button>;
}
```

Test:
- Click "Manage Subscription"
- Should redirect to Stripe billing portal
- User can update payment method, cancel subscription, view invoices

### Phase 4: Webhook Test
Use Stripe CLI to test webhooks locally:
```bash
# Install Stripe CLI: https://stripe.com/docs/stripe-cli
stripe login
stripe listen --forward-to localhost:8888/.netlify/functions/stripe-webhook

# In another terminal, trigger events:
stripe trigger checkout.session.completed
stripe trigger customer.subscription.updated
stripe trigger customer.subscription.deleted
```

Or test in production:
1. Complete a real test checkout
2. Cancel subscription from billing portal
3. Check logs in Netlify Functions dashboard
4. Verify database updates

### Phase 5: Cancellation Flow Test
1. User cancels subscription in billing portal
2. Webhook receives `customer.subscription.deleted` event
3. Verify database:
   - `user_subscriptions.status` = 'canceled'
   - `profiles.membership_tier` = 'free'

### Phase 6: Payment Failure Test
Use Stripe test card that triggers failure:
- Card: 4000 0000 0000 0341
- Complete checkout
- Subscription enters `past_due` status
- Verify database reflects `past_due` status

## Frontend Integration Examples

### Add to Profile Page
```javascript
import { createPortalSession } from '../lib/stripe';
import { useAuth } from '../context/AuthContext';

function UserProfile() {
  const { user } = useAuth();

  return (
    <div>
      <h2>Subscription Management</h2>
      <button onClick={() => createPortalSession(user.id)}>
        Manage Billing
      </button>
    </div>
  );
}
```

### Add to Pricing Page
```javascript
import { createCheckoutSession } from '../lib/stripe';
import { useAuth } from '../context/AuthContext';

function PricingPage() {
  const { user } = useAuth();

  return (
    <div>
      <h2>Premium Plan - $X/month</h2>
      <button onClick={() => createCheckoutSession(user.id, user.email)}>
        Subscribe Now
      </button>
    </div>
  );
}
```

### Handle Success Redirect
```javascript
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function Dashboard() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('success') === 'true') {
      // Show success message
      alert('Welcome to Premium! 🎉');
      // Refresh user subscription status
      window.location.replace('/dashboard');
    }
  }, [searchParams]);

  return <div>Dashboard Content</div>;
}
```

## Troubleshooting

### Function not found
- Verify functions are deployed: Check Netlify Functions dashboard
- Ensure functions directory is correct: `/netlify/functions/`

### Webhook signature verification failed
- Verify `STRIPE_WEBHOOK_SECRET` is correct
- Check that webhook endpoint URL matches exactly: `https://certifystack.com/.netlify/functions/stripe-webhook`

### Database not updating
- Check Netlify function logs for errors
- Verify `SUPABASE_SERVICE_KEY` has proper permissions
- Ensure RLS policies allow service role access

### No subscription found for user
- User must complete checkout first
- Check `user_subscriptions` table for their record
- Verify `user_id` matches between Stripe metadata and database

## Production Checklist

Before going live:
- [ ] Switch to live Stripe keys (not test keys)
- [ ] Update webhook endpoint to use production URL
- [ ] Test complete checkout flow with real card (then refund)
- [ ] Set up Stripe billing portal configuration
- [ ] Configure email receipts in Stripe dashboard
- [ ] Set up tax collection if required
- [ ] Test cancellation and refund flows
- [ ] Monitor webhook logs for first week

## Security Notes

- All Stripe API calls happen server-side (in Netlify functions)
- Webhook signature verification prevents unauthorized requests
- Supabase service key bypasses RLS for admin operations
- Never expose secret keys in frontend code
- All functions include error handling and logging

## Support

For issues:
1. Check Netlify function logs
2. Check Stripe dashboard > Events for webhook delivery
3. Verify environment variables are set correctly
4. Test with `test-env` function first
