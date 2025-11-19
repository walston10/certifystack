-- Add missing price_id column to user_subscriptions table
ALTER TABLE user_subscriptions
ADD COLUMN IF NOT EXISTS price_id TEXT NOT NULL DEFAULT 'unknown';

-- Also ensure all other required columns exist
ALTER TABLE user_subscriptions
ADD COLUMN IF NOT EXISTS stripe_customer_id TEXT;

ALTER TABLE user_subscriptions
ADD COLUMN IF NOT EXISTS stripe_subscription_id TEXT;

ALTER TABLE user_subscriptions
ADD COLUMN IF NOT EXISTS status TEXT;

ALTER TABLE user_subscriptions
ADD COLUMN IF NOT EXISTS current_period_start TIMESTAMPTZ;

ALTER TABLE user_subscriptions
ADD COLUMN IF NOT EXISTS current_period_end TIMESTAMPTZ;

ALTER TABLE user_subscriptions
ADD COLUMN IF NOT EXISTS cancel_at_period_end BOOLEAN DEFAULT FALSE;

ALTER TABLE user_subscriptions
ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT NOW();

ALTER TABLE user_subscriptions
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();
