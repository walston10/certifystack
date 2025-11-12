-- ============================================
-- SUPABASE DATABASE SCHEMA FOR CERTIFYSTACK
-- ============================================
-- Run this in Supabase SQL Editor to create all tables

-- Enable Row Level Security
-- All tables will have RLS policies for user isolation

-- ============================================
-- TABLE: profiles
-- User profile information
-- ============================================
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  membership_tier TEXT DEFAULT 'free',
  xp_points INTEGER DEFAULT 0,
  study_streak INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS Policies for profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- ============================================
-- TABLE: user_progress
-- Tracks lesson completion and quiz scores
-- ============================================
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id INTEGER NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  time_spent INTEGER DEFAULT 0, -- in seconds
  UNIQUE(user_id, lesson_id)
);

-- RLS Policies for user_progress
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own progress"
  ON user_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress"
  ON user_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON user_progress FOR UPDATE
  USING (auth.uid() = user_id);

-- ============================================
-- TABLE: quiz_attempts
-- Stores quiz results for each lesson
-- ============================================
CREATE TABLE IF NOT EXISTS quiz_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id INTEGER NOT NULL,
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  attempted_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS Policies for quiz_attempts
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own quiz attempts"
  ON quiz_attempts FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own quiz attempts"
  ON quiz_attempts FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- ============================================
-- TABLE: flashcard_progress
-- Stores flashcard state for spaced repetition
-- ============================================
CREATE TABLE IF NOT EXISTS flashcard_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  card_id TEXT NOT NULL, -- Format: "lessonId-cardIndex" e.g., "1-0", "1-1", etc.
  state TEXT DEFAULT 'new', -- 'new', 'learning', 'review'
  ease NUMERIC DEFAULT 2.5,
  interval INTEGER DEFAULT 0,
  repetitions INTEGER DEFAULT 0,
  due_date DATE DEFAULT CURRENT_DATE,
  last_reviewed TIMESTAMPTZ,
  times_hard INTEGER DEFAULT 0,
  times_good INTEGER DEFAULT 0,
  times_easy INTEGER DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, card_id)
);

-- RLS Policies for flashcard_progress
ALTER TABLE flashcard_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own flashcard progress"
  ON flashcard_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own flashcard progress"
  ON flashcard_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own flashcard progress"
  ON flashcard_progress FOR UPDATE
  USING (auth.uid() = user_id);

-- ============================================
-- TABLE: study_streaks
-- Tracks daily study streaks
-- ============================================
CREATE TABLE IF NOT EXISTS study_streaks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  current_streak INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  last_study_date DATE,
  total_cards_studied INTEGER DEFAULT 0,
  total_reviews INTEGER DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id)
);

-- RLS Policies for study_streaks
ALTER TABLE study_streaks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own study streaks"
  ON study_streaks FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own study streaks"
  ON study_streaks FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own study streaks"
  ON study_streaks FOR UPDATE
  USING (auth.uid() = user_id);

-- ============================================
-- TABLE: lab_submissions
-- Tracks lab completion
-- ============================================
CREATE TABLE IF NOT EXISTS lab_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lab_id TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  submitted_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, lab_id)
);

-- RLS Policies for lab_submissions
ALTER TABLE lab_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own lab submissions"
  ON lab_submissions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own lab submissions"
  ON lab_submissions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own lab submissions"
  ON lab_submissions FOR UPDATE
  USING (auth.uid() = user_id);

-- ============================================
-- INDEXES for performance
-- ============================================
CREATE INDEX IF NOT EXISTS idx_profiles_id ON profiles(id);
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_completed ON user_progress(user_id, completed);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_user_id ON quiz_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_flashcard_progress_user_id ON flashcard_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_flashcard_progress_due_date ON flashcard_progress(due_date);
CREATE INDEX IF NOT EXISTS idx_study_streaks_user_id ON study_streaks(user_id);
CREATE INDEX IF NOT EXISTS idx_lab_submissions_user_id ON lab_submissions(user_id);
CREATE INDEX IF NOT EXISTS idx_lab_submissions_completed ON lab_submissions(user_id, completed);

-- ============================================
-- HELPFUL QUERIES (for reference)
-- ============================================

-- Get user's completed lessons
-- SELECT lesson_id, completed_at FROM user_progress WHERE user_id = auth.uid() ORDER BY completed_at DESC;

-- Get user's quiz history
-- SELECT lesson_id, score, total_questions, attempted_at FROM quiz_attempts WHERE user_id = auth.uid() ORDER BY attempted_at DESC;

-- Get user's flashcard stats
-- SELECT COUNT(*) as total_cards, SUM(CASE WHEN state = 'new' THEN 1 ELSE 0 END) as new_cards FROM flashcard_progress WHERE user_id = auth.uid();

-- Get user's current streak
-- SELECT current_streak, longest_streak, total_reviews FROM study_streaks WHERE user_id = auth.uid();
