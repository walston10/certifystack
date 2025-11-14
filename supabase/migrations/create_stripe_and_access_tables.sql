-- ============================================
-- STRIPE SUBSCRIPTION AND COURSE ACCESS TABLES
-- ============================================
-- Run this in Supabase SQL Editor to add Stripe webhook support
-- and course access control

-- ============================================
-- TABLE: user_subscriptions
-- Stores Stripe subscription data from webhooks
-- ============================================
CREATE TABLE IF NOT EXISTS user_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  stripe_customer_id TEXT NOT NULL,
  stripe_subscription_id TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL, -- 'active', 'canceled', 'past_due', 'incomplete', etc.
  price_id TEXT NOT NULL,
  current_period_start TIMESTAMPTZ NOT NULL,
  current_period_end TIMESTAMPTZ NOT NULL,
  cancel_at_period_end BOOLEAN DEFAULT FALSE,
  canceled_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS Policies for user_subscriptions
ALTER TABLE user_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own subscriptions"
  ON user_subscriptions FOR SELECT
  USING (auth.uid() = user_id);

-- Service role needs full access for webhooks
CREATE POLICY "Service role has full access to subscriptions"
  ON user_subscriptions FOR ALL
  USING (auth.jwt()->>'role' = 'service_role');

-- ============================================
-- TABLE: user_access
-- Tracks user access to courses (via subscription or purchase)
-- ============================================
CREATE TABLE IF NOT EXISTS user_access (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id TEXT NOT NULL,
  access_type TEXT NOT NULL, -- 'subscription', 'course', 'bundle'
  status TEXT DEFAULT 'active', -- 'active', 'expired', 'canceled'
  granted_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, course_id)
);

-- RLS Policies for user_access
ALTER TABLE user_access ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own access"
  ON user_access FOR SELECT
  USING (auth.uid() = user_id);

-- Service role needs full access for webhooks and admin operations
CREATE POLICY "Service role has full access to user_access"
  ON user_access FOR ALL
  USING (auth.jwt()->>'role' = 'service_role');

-- ============================================
-- INDEXES for performance
-- ============================================
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_user_id
  ON user_subscriptions(user_id);

CREATE INDEX IF NOT EXISTS idx_user_subscriptions_stripe_customer_id
  ON user_subscriptions(stripe_customer_id);

CREATE INDEX IF NOT EXISTS idx_user_subscriptions_stripe_subscription_id
  ON user_subscriptions(stripe_subscription_id);

CREATE INDEX IF NOT EXISTS idx_user_subscriptions_status
  ON user_subscriptions(user_id, status);

CREATE INDEX IF NOT EXISTS idx_user_access_user_id
  ON user_access(user_id);

CREATE INDEX IF NOT EXISTS idx_user_access_course_id
  ON user_access(course_id);

CREATE INDEX IF NOT EXISTS idx_user_access_user_course
  ON user_access(user_id, course_id);

CREATE INDEX IF NOT EXISTS idx_user_access_status
  ON user_access(user_id, status);

-- ============================================
-- HELPFUL QUERIES (for reference)
-- ============================================

-- Check if user has active subscription
-- SELECT * FROM user_subscriptions
-- WHERE user_id = auth.uid()
-- AND status = 'active'
-- AND current_period_end > NOW();

-- Check if user has access to a specific course
-- SELECT * FROM user_access
-- WHERE user_id = auth.uid()
-- AND course_id = 'a-plus'
-- AND status = 'active';

-- Get all courses a user has access to
-- SELECT course_id, access_type, granted_at
-- FROM user_access
-- WHERE user_id = auth.uid()
-- AND status = 'active';
