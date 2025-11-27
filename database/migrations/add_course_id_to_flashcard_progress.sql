-- Migration: Add course_id to flashcard_progress table
-- This enables course-aware flashcard progress tracking
-- Run this in Supabase SQL Editor

-- Step 1: Add course_id column with default value
ALTER TABLE flashcard_progress
ADD COLUMN IF NOT EXISTS course_id text DEFAULT 'network-plus';

-- Step 2: Update existing records to have 'network-plus' as course_id
UPDATE flashcard_progress
SET course_id = 'network-plus'
WHERE course_id IS NULL;

-- Step 3: Make course_id NOT NULL after backfilling
ALTER TABLE flashcard_progress
ALTER COLUMN course_id SET NOT NULL;

-- Step 4: Drop old unique constraint (user_id, card_id)
-- Note: The constraint name may vary - check your database
ALTER TABLE flashcard_progress
DROP CONSTRAINT IF EXISTS flashcard_progress_user_id_card_id_key;

-- Step 5: Create new unique constraint including course_id
ALTER TABLE flashcard_progress
ADD CONSTRAINT flashcard_progress_user_id_course_id_card_id_key
UNIQUE (user_id, course_id, card_id);

-- Step 6: Create index for faster course-based queries
CREATE INDEX IF NOT EXISTS idx_flashcard_progress_course
ON flashcard_progress(course_id);

CREATE INDEX IF NOT EXISTS idx_flashcard_progress_user_course
ON flashcard_progress(user_id, course_id);
