-- ============================================
-- FIX: Ensure user_progress table has correct unique constraint
-- ============================================
-- This fixes the 400 error when marking lessons as complete

-- Step 1: Check if table exists, create if not
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id INTEGER NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  time_spent INTEGER DEFAULT 0
);

-- Step 2: Add course_id column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_progress' AND column_name = 'course_id'
  ) THEN
    ALTER TABLE user_progress ADD COLUMN course_id TEXT DEFAULT 'network-plus';
  END IF;
END $$;

-- Step 3: Drop ALL existing unique constraints on user_progress
DO $$
DECLARE
  constraint_name TEXT;
BEGIN
  FOR constraint_name IN
    SELECT conname
    FROM pg_constraint
    WHERE conrelid = 'user_progress'::regclass
    AND contype = 'u'  -- unique constraints only
  LOOP
    EXECUTE 'ALTER TABLE user_progress DROP CONSTRAINT IF EXISTS ' || quote_ident(constraint_name);
    RAISE NOTICE 'Dropped constraint: %', constraint_name;
  END LOOP;
END $$;

-- Step 4: Create the correct unique constraint
ALTER TABLE user_progress
  ADD CONSTRAINT user_progress_user_id_course_id_lesson_id_key
  UNIQUE (user_id, course_id, lesson_id);

-- Step 5: Enable Row Level Security
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Step 6: Drop existing RLS policies (to avoid conflicts)
DROP POLICY IF EXISTS "Users can view own progress" ON user_progress;
DROP POLICY IF EXISTS "Users can insert own progress" ON user_progress;
DROP POLICY IF EXISTS "Users can update own progress" ON user_progress;

-- Step 7: Create RLS policies
CREATE POLICY "Users can view own progress"
  ON user_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress"
  ON user_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON user_progress FOR UPDATE
  USING (auth.uid() = user_id);

-- Step 8: Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_completed ON user_progress(user_id, completed);
CREATE INDEX IF NOT EXISTS idx_user_progress_course ON user_progress(user_id, course_id);

-- Verify the constraint was created
DO $$
DECLARE
  constraint_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO constraint_count
  FROM pg_constraint
  WHERE conrelid = 'user_progress'::regclass
    AND contype = 'u'
    AND conname = 'user_progress_user_id_course_id_lesson_id_key';

  IF constraint_count > 0 THEN
    RAISE NOTICE 'SUCCESS: Unique constraint created successfully!';
  ELSE
    RAISE WARNING 'WARNING: Unique constraint was not created!';
  END IF;
END $$;
