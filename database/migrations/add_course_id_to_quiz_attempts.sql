-- Migration: Add course_id to quiz_attempts table
-- This enables course-aware quiz score tracking
-- Run this in Supabase SQL Editor

-- Step 1: Add course_id column with default value
ALTER TABLE quiz_attempts
ADD COLUMN IF NOT EXISTS course_id text DEFAULT 'network-plus';

-- Step 2: Update existing records to have 'network-plus' as course_id
UPDATE quiz_attempts
SET course_id = 'network-plus'
WHERE course_id IS NULL;

-- Step 3: Make course_id NOT NULL after backfilling
ALTER TABLE quiz_attempts
ALTER COLUMN course_id SET NOT NULL;

-- Step 4: Create index for faster course-based queries
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_course
ON quiz_attempts(course_id);

CREATE INDEX IF NOT EXISTS idx_quiz_attempts_user_course
ON quiz_attempts(user_id, course_id);

-- Step 5: Create composite index for common query pattern
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_user_course_lesson
ON quiz_attempts(user_id, course_id, lesson_id);
