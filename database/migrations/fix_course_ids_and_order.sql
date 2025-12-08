-- Migration: Fix course IDs and reorder courses
-- This fixes the ID mismatch and sets correct display order
-- Order: A+ Core 1 (1), A+ Core 2 (2), Network+ (3), Security+ (4)
-- Run this in Supabase SQL Editor

-- Step 1: Fix course IDs (remove extra hyphen before number)
-- Update a-plus-core-1 to a-plus-core1
UPDATE courses
SET id = 'a-plus-core1'
WHERE id = 'a-plus-core-1';

-- Update a-plus-core-2 to a-plus-core2
UPDATE courses
SET id = 'a-plus-core2'
WHERE id = 'a-plus-core-2';

-- Step 2: Update order_index for correct display order
-- A+ Core 1 should be first
UPDATE courses SET order_index = 1 WHERE id = 'a-plus-core1';

-- A+ Core 2 should be second
UPDATE courses SET order_index = 2 WHERE id = 'a-plus-core2';

-- Network+ should be third
UPDATE courses SET order_index = 3 WHERE id = 'network-plus';

-- Security+ should be fourth
UPDATE courses SET order_index = 4 WHERE id = 'security-plus';

-- Step 3: Update any profiles referencing old course IDs
UPDATE profiles
SET active_course = 'a-plus-core1'
WHERE active_course = 'a-plus-core-1';

UPDATE profiles
SET active_course = 'a-plus-core2'
WHERE active_course = 'a-plus-core-2';

-- Step 4: Update any user_progress referencing old course IDs
UPDATE user_progress
SET course_id = 'a-plus-core1'
WHERE course_id = 'a-plus-core-1';

UPDATE user_progress
SET course_id = 'a-plus-core2'
WHERE course_id = 'a-plus-core-2';

-- Step 5: Update any flashcard_progress referencing old course IDs
UPDATE flashcard_progress
SET course_id = 'a-plus-core1'
WHERE course_id = 'a-plus-core-1';

UPDATE flashcard_progress
SET course_id = 'a-plus-core2'
WHERE course_id = 'a-plus-core-2';

-- Step 6: Update any quiz_attempts referencing old course IDs (if column exists)
UPDATE quiz_attempts
SET course_id = 'a-plus-core1'
WHERE course_id = 'a-plus-core-1';

UPDATE quiz_attempts
SET course_id = 'a-plus-core2'
WHERE course_id = 'a-plus-core-2';

-- Verify the changes
SELECT id, short_name, order_index, status FROM courses ORDER BY order_index;
