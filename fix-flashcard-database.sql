-- ============================================
-- FIX FLASHCARD DATABASE ISSUES
-- ============================================
-- This migration adds missing tables and columns needed for the application
-- Run this in Supabase SQL Editor

-- ============================================
-- 1. CREATE COURSES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS courses (
  id text PRIMARY KEY,
  title text NOT NULL,
  short_name text NOT NULL,
  description text,
  total_lessons integer NOT NULL,
  total_flashcards integer,
  exam_code text,
  status text NOT NULL CHECK (status IN ('available', 'coming-soon', 'in-development')),
  order_index integer NOT NULL,
  release_date date,
  icon_emoji text,
  created_at timestamp with time zone DEFAULT now()
);

-- Enable RLS on courses table
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all authenticated users to read courses
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'courses' AND policyname = 'Anyone can view courses'
  ) THEN
    CREATE POLICY "Anyone can view courses" ON courses FOR SELECT USING (true);
  END IF;
END $$;

-- Insert initial course data
INSERT INTO courses (id, title, short_name, description, total_lessons, total_flashcards, exam_code, status, order_index, icon_emoji, release_date) VALUES
('network-plus', 'CompTIA Network+ (N10-009)', 'Network+', 'Master networking fundamentals, protocols, security, and troubleshooting for the CompTIA Network+ certification.', 30, 900, 'N10-009', 'available', 1, '🌐', '2024-11-01'),
('a-plus-core-1', 'CompTIA A+ Core 1 (220-1101)', 'A+ Core 1', 'Hardware, networking, mobile devices, virtualization, and troubleshooting for CompTIA A+ certification.', 30, 800, '220-1101', 'coming-soon', 2, '💻', '2025-01-15'),
('a-plus-core-2', 'CompTIA A+ Core 2 (220-1102)', 'A+ Core 2', 'Operating systems, security, software troubleshooting, and operational procedures for CompTIA A+ certification.', 30, 800, '220-1102', 'coming-soon', 3, '⚙️', '2025-02-15'),
('security-plus', 'CompTIA Security+ (SY0-701)', 'Security+', 'Cybersecurity threats, risk management, cryptography, and security operations for CompTIA Security+ certification.', 30, 900, 'SY0-701', 'coming-soon', 4, '🔒', '2025-03-01')
ON CONFLICT (id) DO NOTHING;

-- Create indexes for courses table
CREATE INDEX IF NOT EXISTS idx_courses_status ON courses(status);
CREATE INDEX IF NOT EXISTS idx_courses_order ON courses(order_index);

-- ============================================
-- 2. ADD ACTIVE_COURSE COLUMN TO PROFILES
-- ============================================
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS active_course text DEFAULT 'network-plus';

-- Create index for active_course
CREATE INDEX IF NOT EXISTS idx_profiles_active_course ON profiles(active_course);

-- ============================================
-- 3. ADD COMPLETION_DATE COLUMN TO USER_PROGRESS
-- ============================================
ALTER TABLE user_progress ADD COLUMN IF NOT EXISTS completion_date TIMESTAMPTZ;

-- Update existing records: set completion_date to completed_at for completed lessons
UPDATE user_progress
SET completion_date = completed_at
WHERE completed = TRUE AND completion_date IS NULL;

-- Create index for completion_date
CREATE INDEX IF NOT EXISTS idx_user_progress_completion_date ON user_progress(user_id, completion_date);

-- ============================================
-- SUCCESS MESSAGE
-- ============================================
SELECT 'Database schema updated successfully! Courses table created, active_course and completion_date columns added.' as message;
