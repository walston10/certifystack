-- ============================================
-- FIX: Add course_id column to user_progress table
-- ============================================
-- This migration adds support for multi-course tracking

-- Add course_id column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_progress' AND column_name = 'course_id'
  ) THEN
    ALTER TABLE user_progress
    ADD COLUMN course_id TEXT DEFAULT 'network-plus';

    -- Drop old unique constraint
    ALTER TABLE user_progress
    DROP CONSTRAINT IF EXISTS user_progress_user_id_lesson_id_key;

    -- Add new unique constraint with course_id
    ALTER TABLE user_progress
    ADD CONSTRAINT user_progress_user_id_course_id_lesson_id_key
    UNIQUE (user_id, course_id, lesson_id);

    RAISE NOTICE 'Successfully added course_id column to user_progress table';
  ELSE
    RAISE NOTICE 'course_id column already exists in user_progress table';
  END IF;
END $$;
