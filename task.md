# Task: Integrate Supabase Progress Tracking

## Context
- React app for Network+ certification learning
- Supabase auth already set up
- Need to save user progress to Supabase instead of localStorage

## Database Schema
Already created these tables in Supabase:
- user_progress
- quiz_attempts  
- flashcard_progress
- study_streaks

## What Needs to be Built

### 1. Progress Service (`src/services/progressService.js`)
Functions to:
- markLessonComplete(lessonId, timeSpent)
- saveQuizScore(lessonId, score, totalQuestions)
- updateFlashcardProgress(flashcardId, confidenceLevel)
- updateStudyStreak()
- getUserProgress() - returns all user data
- getUserStats() - returns computed stats (% complete, avg score, etc)

### 2. Custom Hook (`src/hooks/useUserStats.js`)
React hook that:
- Fetches user progress on mount
- Returns: { progress, stats, loading, error }
- Provides methods to update progress

### 3. Update Components
Modify these to use Supabase:
- Dashboard.jsx - load and display progress
- LessonViewer.jsx - save lesson completion
- QuizActivity.jsx - save quiz scores
- FlashcardActivity.jsx - save card progress

### 4. User Profile/Stats Component (`src/components/UserProfile.jsx`)
Display:
- Username/email
- Lessons completed (X/30)
- Average quiz score
- Study streak
- Sign out button

## Requirements
- Remove all localStorage usage for progress
- Use the existing AuthContext (already created)
- Use existing Supabase client from src/lib/supabase.js
- Handle loading states
- Handle errors gracefully
- Real-time updates when progress changes

## Environment
- REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY in .env
- @supabase/supabase-js already installed

## Don't Change
- Existing auth setup (AuthContext, Login component)
- Database schema (already created)
- Component styling (keep existing CSS)