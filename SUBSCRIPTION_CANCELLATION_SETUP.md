# Subscription Cancellation Setup Guide

## Overview
This guide explains how the subscription cancellation system works and what you need to do to set it up.

---

## ✅ What's Already Implemented

### 1. **Cancellation API** (✅ Complete)
- **File**: `netlify/functions/stripe-cancel-subscription.js`
- **What it does**: Cancels subscription at period end via Stripe API
- **Database update**: Sets `cancel_at_period_end = true` in `user_subscriptions`

### 2. **Frontend UI** (✅ Complete)
- **File**: `src/pages/AccountPage.jsx`
- **What it shows**:
  - "Premium Trial" badge during trial with end date
  - "Premium (Canceling)" badge if subscription is set to cancel
  - Red "Cancel Subscription" button (only shows if not already canceled)
  - Warning message with cancellation date
  - Different messaging for trial vs paid users

### 3. **Stripe Webhooks** (✅ Complete)
- **File**: `netlify/functions/stripe-webhook.js`
- **Handles these events**:
  - `checkout.session.completed` - Creates subscription record
  - `customer.subscription.updated` - Updates subscription (including cancel_at_period_end)
  - `customer.subscription.deleted` - Downgrades user to free tier
  - `invoice.payment_failed` - Marks subscription as past_due

---

## 🔧 Setup Required

### Step 1: Create Supabase Table

Run this SQL in your **Supabase SQL Editor**:

```sql
-- File: supabase-subscriptions-table.sql
-- This creates the user_subscriptions table

CREATE TABLE IF NOT EXISTS user_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  stripe_customer_id TEXT NOT NULL,
  stripe_subscription_id TEXT NOT NULL,
  status TEXT NOT NULL,
  price_id TEXT NOT NULL,
  current_period_start TIMESTAMPTZ NOT NULL,
  current_period_end TIMESTAMPTZ NOT NULL,
  trial_end TIMESTAMPTZ,
  cancel_at_period_end BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id),
  UNIQUE(stripe_subscription_id)
);

ALTER TABLE user_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own subscription"
  ON user_subscriptions FOR SELECT
  USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_user_subscriptions_user_id ON user_subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_stripe_customer ON user_subscriptions(stripe_customer_id);
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_stripe_subscription ON user_subscriptions(stripe_subscription_id);
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_status ON user_subscriptions(status);
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_cancel_at_period_end ON user_subscriptions(cancel_at_period_end);
```

The complete SQL file is available at: `supabase-subscriptions-table.sql`

### Step 2: Deploy Code

Push your changes to trigger Netlify deployment:

```bash
git add .
git commit -m "Add subscription cancellation feature"
git push origin main
```

### Step 3: Verify Netlify Functions

In **Netlify Dashboard**:
1. Go to **Functions** tab
2. Verify these functions are deployed:
   - `stripe-cancel-subscription`
   - `stripe-webhook`
   - `stripe-portal`

---

## 📊 How to View Canceled Subscriptions

### Option 1: Supabase Dashboard
1. Go to **Supabase → Table Editor**
2. Select `user_subscriptions` table
3. Filter by `cancel_at_period_end = true`

### Option 2: SQL Query (Recommended)
Run this in **Supabase SQL Editor**:

```sql
SELECT
  u.email,
  s.status,
  s.cancel_at_period_end,
  s.current_period_end,
  s.trial_end,
  s.updated_at
FROM user_subscriptions s
JOIN auth.users u ON u.id = s.user_id
WHERE s.cancel_at_period_end = true OR s.status = 'canceled'
ORDER BY s.updated_at DESC;
```

This shows:
- User email
- Current subscription status
- Whether they've requested cancellation
- When their access ends
- When they canceled

### Option 3: Stripe Dashboard
Go to **Stripe Dashboard → Customers**:
- Search for customer
- View subscription details
- See `cancel_at_period_end` status

---

## 🔄 How the Cancellation Flow Works

### User Cancels During Trial:
1. User clicks "Cancel Subscription" button
2. Function calls Stripe API: `cancel_at_period_end = true`
3. User sees: "Your subscription is set to cancel on [trial end date]"
4. User keeps access until trial ends
5. **No charge occurs** ✅
6. At trial end: Stripe sends `customer.subscription.deleted` webhook
7. Webhook downgrades user to `free` tier

### User Cancels After Trial (Paying):
1. User clicks "Cancel Subscription" button
2. Function calls Stripe API: `cancel_at_period_end = true`
3. User sees: "Your subscription is set to cancel on [period end date]"
4. User keeps access until billing period ends
5. At period end: Stripe sends `customer.subscription.deleted` webhook
6. Webhook downgrades user to `free` tier

---

## 🚨 Important Notes

### Billing Guarantees
- **Trial cancellations**: User will NOT be charged ✅
- **Paid cancellations**: User keeps access until period ends, then downgrades ✅
- **Stripe handles billing**: Your webhook automatically updates the database

### Database Updates
The `cancel_at_period_end` field is updated in two places:
1. **Immediately**: When user clicks cancel (via `stripe-cancel-subscription` function)
2. **On webhook**: When Stripe confirms the update (via `stripe-webhook` function)

### Webhook Requirement
**Your Stripe webhook MUST be configured** in Stripe Dashboard:
1. Go to **Stripe → Developers → Webhooks**
2. Add endpoint: `https://certifystack.com/.netlify/functions/stripe-webhook`
3. Select events:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_failed`
4. Copy webhook signing secret to Netlify env var: `STRIPE_WEBHOOK_SECRET`

---

## 🐛 Troubleshooting

### User clicks cancel but still shows "Active Premium"
- **Check**: Did webhook fire? View Stripe Dashboard → Developers → Webhooks → Events
- **Check**: Is `cancel_at_period_end` true in Supabase `user_subscriptions` table?
- **Fix**: Reload the page - frontend should update

### User canceled but was still charged
- **Check**: When did they cancel vs when was billing date?
- **Check**: Stripe Dashboard → Customer → Subscription → "Cancels on" date
- **If truly incorrect**: Refund in Stripe Dashboard and investigate webhook logs

### Webhook not firing
- **Check**: Netlify function logs (Netlify Dashboard → Functions → stripe-webhook)
- **Check**: Stripe webhook events (Stripe Dashboard → Developers → Webhooks)
- **Fix**: Verify webhook endpoint URL and signing secret

---

## 📈 Analytics Queries

### Cancellation Rate
```sql
SELECT
  COUNT(*) FILTER (WHERE cancel_at_period_end = true) as canceled_count,
  COUNT(*) as total_subscriptions,
  ROUND(100.0 * COUNT(*) FILTER (WHERE cancel_at_period_end = true) / COUNT(*), 2) as cancellation_rate_pct
FROM user_subscriptions
WHERE status IN ('active', 'trialing');
```

### Trial Cancellations
```sql
SELECT
  COUNT(*) as trial_cancellations
FROM user_subscriptions
WHERE cancel_at_period_end = true
  AND status = 'trialing'
  AND trial_end > NOW();
```

### Churn by Month
```sql
SELECT
  DATE_TRUNC('month', updated_at) as month,
  COUNT(*) as cancellations
FROM user_subscriptions
WHERE cancel_at_period_end = true
GROUP BY month
ORDER BY month DESC;
```

---

## ✅ Testing Checklist

Before going live, test:
- [ ] Create test subscription with trial in Stripe test mode
- [ ] Cancel during trial - verify no charge occurs
- [ ] Verify UI shows "Premium (Canceling)" badge
- [ ] Wait for trial to end (or manually end in Stripe)
- [ ] Verify user downgrades to free tier
- [ ] Check Supabase: status = 'canceled', membership_tier = 'free'
- [ ] Test with real subscription (paid, not trial)
- [ ] Cancel paid subscription
- [ ] Verify access remains until period end
- [ ] Verify downgrade occurs at period end

---

## 🎯 Summary

**Will they automatically not be billed?**
✅ YES - `cancel_at_period_end = true` tells Stripe to stop charging

**Where can you see who canceled?**
✅ Three places:
1. Supabase `user_subscriptions` table
2. Stripe Dashboard → Customers
3. Use SQL queries provided above

**Do you need to add schema to Supabase?**
✅ YES - Run `supabase-subscriptions-table.sql` in Supabase SQL Editor

Everything is ready to go! Just need to run the SQL migration and deploy the code. 🚀
