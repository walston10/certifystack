-- Migration: Add active_course to profiles table
-- This enables storing user's currently selected course
-- Run this in Supabase SQL Editor

-- Step 1: Add active_course column with default value
ALTER TABLE profiles
ADD COLUMN IF NOT EXISTS active_course text DEFAULT 'network-plus';

-- Step 2: Update existing records to have 'network-plus' as active_course
UPDATE profiles
SET active_course = 'network-plus'
WHERE active_course IS NULL;

-- Step 3: Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_profiles_active_course
ON profiles(active_course);
