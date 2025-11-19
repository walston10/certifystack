-- ============================================
-- USER SUBSCRIPTIONS TABLE
-- ============================================
-- Tracks Stripe subscription details for premium users
-- Run this in Supabase SQL Editor

CREATE TABLE IF NOT EXISTS user_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  stripe_customer_id TEXT NOT NULL,
  stripe_subscription_id TEXT NOT NULL,
  status TEXT NOT NULL, -- 'active', 'trialing', 'past_due', 'canceled', 'incomplete'
  price_id TEXT NOT NULL,
  current_period_start TIMESTAMPTZ NOT NULL,
  current_period_end TIMESTAMPTZ NOT NULL,
  trial_end TIMESTAMPTZ, -- Trial end date (if in trial)
  cancel_at_period_end BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id),
  UNIQUE(stripe_subscription_id)
);

-- RLS Policies for user_subscriptions
ALTER TABLE user_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own subscription"
  ON user_subscriptions FOR SELECT
  USING (auth.uid() = user_id);

-- Only service role can insert/update subscriptions (via webhooks)
-- Users cannot directly modify subscription data

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_user_id ON user_subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_stripe_customer ON user_subscriptions(stripe_customer_id);
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_stripe_subscription ON user_subscriptions(stripe_subscription_id);
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_status ON user_subscriptions(status);
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_cancel_at_period_end ON user_subscriptions(cancel_at_period_end);

-- ============================================
-- ADMIN VIEW: Canceled Subscriptions
-- ============================================
-- Query to see who has canceled (useful for analytics)
--
-- Run this to see all users who have canceled:
-- SELECT
--   u.email,
--   s.status,
--   s.cancel_at_period_end,
--   s.current_period_end,
--   s.trial_end,
--   s.updated_at
-- FROM user_subscriptions s
-- JOIN auth.users u ON u.id = s.user_id
-- WHERE s.cancel_at_period_end = true OR s.status = 'canceled'
-- ORDER BY s.updated_at DESC;
