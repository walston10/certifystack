# Debug: Mark as Complete Checkbox Not Working

## Problem
When clicking the "mark as complete" checkbox on lesson tiles, nothing happens.

## Root Causes

### Cause 1: Table doesn't exist
The `user_progress` table doesn't exist in the Supabase database yet.

### Cause 2: Missing unique constraint (400 Error)
The table exists but is missing the required unique constraint on `(user_id, course_id, lesson_id)`.
This causes a 400 Bad Request error from Supabase.

## How to Check

1. **Open your browser's Developer Console**:
   - Press `F12` or `Ctrl+Shift+I` (Windows/Linux)
   - Press `Cmd+Option+I` (Mac)

2. **Click on a checkbox** and look for errors in the Console tab

3. **Expected error if table doesn't exist**:
   ```
   Error completing lesson: relation "user_progress" does not exist
   ```
   OR
   ```
   Failed to complete lesson: ...
   ```

## Solution

### Quick Fix (Recommended)

If you're seeing **400 errors** in the console (like the errors you just showed me), use this SQL:

1. Go to your Supabase Dashboard: https://app.supabase.com
2. Select your project
3. Click on "SQL Editor" in the left sidebar
4. Click "New Query"
5. Copy the contents of `fix-user-progress-constraint.sql` and paste it
6. Click "Run"

This will:
- Create the table if it doesn't exist
- Add the `course_id` column if missing
- Remove old/incorrect unique constraints
- Add the correct unique constraint
- Set up RLS policies
- Create performance indexes

### Manual Fix (Alternative)

If you prefer to create the table from scratch, follow these steps:

1. Go to your Supabase Dashboard: https://app.supabase.com
2. Select your project
3. Click on "SQL Editor" in the left sidebar
4. Click "New Query"
5. Paste the following SQL and click "Run":

```sql
-- Create user_progress table
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id TEXT DEFAULT 'network-plus',
  lesson_id INTEGER NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  time_spent INTEGER DEFAULT 0,
  completion_date TIMESTAMPTZ,
  UNIQUE(user_id, course_id, lesson_id)
);

-- Enable Row Level Security
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Create RLS Policies
CREATE POLICY "Users can view own progress"
  ON user_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress"
  ON user_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON user_progress FOR UPDATE
  USING (auth.uid() = user_id);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_completed ON user_progress(user_id, completed);
CREATE INDEX IF NOT EXISTS idx_user_progress_course ON user_progress(user_id, course_id);
```

### Step 2: Test the checkbox

1. Refresh your CertifyStack app
2. Try clicking a checkbox on a lesson tile
3. It should now work and mark the lesson as complete

### Step 3: Verify it worked

1. The checkbox should become checked and disabled
2. In your browser console, you should see no errors
3. Check your Supabase dashboard:
   - Go to "Table Editor"
   - Select "user_progress" table
   - You should see a row with your completed lesson

## Code Flow

When you click the checkbox:

1. **Dashboard.jsx** (line 85) → `onChange={handleToggleComplete}`
2. **Dashboard.jsx** (line 56-66) → Calls `completeLesson(lesson.id)`
3. **useUserStats.js** (line 60-69) → Calls `markLessonComplete(lessonId)`
4. **progressService.js** (line 10-77) → Inserts into `user_progress` table
5. **progressService.js** (line 50-74) → Awards 50 XP to user profile

## If Still Not Working

Check these potential issues:

1. **Table exists but RLS policies are wrong**:
   - The user might not be authenticated
   - Check browser console for "permission denied" errors

2. **Network errors**:
   - Check browser Network tab for failed requests to Supabase

3. **courseId mismatch**:
   - The dashboard might be passing a different courseId
   - Check the URL and make sure you're on `/course/network-plus/...`

## Next Steps After Fix

After verifying the checkbox works:
1. Delete this debug file
2. Test marking several lessons as complete
3. Check your profile page to see if stats are loading correctly
