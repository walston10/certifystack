-- ============================================
-- FIX EXISTING TABLES - Add Missing Columns and Tables
-- ============================================
-- Run this to add missing columns to your existing tables

-- Create profiles table if it doesn't exist
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  membership_tier TEXT DEFAULT 'free',
  xp_points INTEGER DEFAULT 0,
  study_streak INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on profiles if not already enabled
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles if they don't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'profiles' AND policyname = 'Users can view own profile'
  ) THEN
    CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'profiles' AND policyname = 'Users can insert own profile'
  ) THEN
    CREATE POLICY "Users can insert own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'profiles' AND policyname = 'Users can update own profile'
  ) THEN
    CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
  END IF;
END $$;

-- Create lab_submissions table if it doesn't exist
CREATE TABLE IF NOT EXISTS lab_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lab_id TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  submitted_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, lab_id)
);

-- Enable RLS on lab_submissions if not already enabled
ALTER TABLE lab_submissions ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for lab_submissions if they don't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'lab_submissions' AND policyname = 'Users can view own lab submissions'
  ) THEN
    CREATE POLICY "Users can view own lab submissions" ON lab_submissions FOR SELECT USING (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'lab_submissions' AND policyname = 'Users can insert own lab submissions'
  ) THEN
    CREATE POLICY "Users can insert own lab submissions" ON lab_submissions FOR INSERT WITH CHECK (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'lab_submissions' AND policyname = 'Users can update own lab submissions'
  ) THEN
    CREATE POLICY "Users can update own lab submissions" ON lab_submissions FOR UPDATE USING (auth.uid() = user_id);
  END IF;
END $$;

-- Fix user_progress table
ALTER TABLE user_progress
ADD COLUMN IF NOT EXISTS completed BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS time_spent INTEGER DEFAULT 0;

-- Update existing rows: set completed = true where completed_at is not null
UPDATE user_progress
SET completed = TRUE
WHERE completed_at IS NOT NULL AND completed = FALSE;

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
