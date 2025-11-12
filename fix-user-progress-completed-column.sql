-- ============================================
-- FIX: Add 'completed' boolean column to user_progress table
-- ============================================
-- This fixes the mismatch between the schema and the code
-- The code expects a 'completed' boolean, but only 'completed_at' timestamp exists

-- Add the completed column as boolean
ALTER TABLE user_progress
ADD COLUMN IF NOT EXISTS completed BOOLEAN DEFAULT FALSE;

-- Update existing rows: set completed = true where completed_at is not null
UPDATE user_progress
SET completed = TRUE
WHERE completed_at IS NOT NULL;

-- Create an index for better query performance
CREATE INDEX IF NOT EXISTS idx_user_progress_completed ON user_progress(user_id, completed);

-- Success message
SELECT 'user_progress table fixed! The completed column has been added.' as message;
