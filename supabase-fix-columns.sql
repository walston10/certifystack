-- ============================================
-- FIX EXISTING TABLES - Add Missing Columns
-- ============================================
-- Run this to add missing columns to your existing tables

-- Fix user_progress table
ALTER TABLE user_progress
ADD COLUMN IF NOT EXISTS time_spent INTEGER DEFAULT 0;

-- Fix flashcard_progress table (change lesson_id to card_id)
-- First, check if lesson_id exists and card_id doesn't
DO $$
BEGIN
    -- If lesson_id column exists, we need to migrate data
    IF EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_name = 'flashcard_progress' AND column_name = 'lesson_id'
    ) AND NOT EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_name = 'flashcard_progress' AND column_name = 'card_id'
    ) THEN
        -- Add card_id column
        ALTER TABLE flashcard_progress ADD COLUMN card_id TEXT;

        -- Migrate data: combine lesson_id and card_index into card_id format
        -- Assuming you have a card_index column
        UPDATE flashcard_progress
        SET card_id = CONCAT(lesson_id::TEXT, '-', COALESCE(card_index::TEXT, '0'))
        WHERE card_id IS NULL;

        -- Make card_id NOT NULL after migration
        ALTER TABLE flashcard_progress ALTER COLUMN card_id SET NOT NULL;

        -- Drop lesson_id column
        ALTER TABLE flashcard_progress DROP COLUMN lesson_id;
    END IF;
END $$;

-- Add card_id if it doesn't exist (in case lesson_id didn't exist either)
ALTER TABLE flashcard_progress
ADD COLUMN IF NOT EXISTS card_id TEXT;

-- Make sure all required columns exist
ALTER TABLE flashcard_progress
ADD COLUMN IF NOT EXISTS state TEXT DEFAULT 'new',
ADD COLUMN IF NOT EXISTS ease NUMERIC DEFAULT 2.5,
ADD COLUMN IF NOT EXISTS interval INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS repetitions INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS due_date DATE DEFAULT CURRENT_DATE,
ADD COLUMN IF NOT EXISTS last_reviewed TIMESTAMPTZ,
ADD COLUMN IF NOT EXISTS times_hard INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS times_good INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS times_easy INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();

-- Add unique constraint if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint
        WHERE conname = 'flashcard_progress_user_id_card_id_key'
    ) THEN
        ALTER TABLE flashcard_progress
        ADD CONSTRAINT flashcard_progress_user_id_card_id_key
        UNIQUE (user_id, card_id);
    END IF;
END $$;

-- Ensure study_streaks has all columns
ALTER TABLE study_streaks
ADD COLUMN IF NOT EXISTS current_streak INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS longest_streak INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS last_study_date DATE,
ADD COLUMN IF NOT EXISTS total_cards_studied INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS total_reviews INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();

-- Success message
SELECT 'Tables updated successfully! All columns now match the code requirements.' as message;
