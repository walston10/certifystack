# Database Fix Instructions - Stat Tracking Issue

## Problem Summary

The profile page stat tracking wasn't loading because of several database schema issues:

1. **Missing `completed` column** in `user_progress` table
   - The code expects a `completed` boolean column
   - The schema only had `completed_at` timestamp column

2. **Missing `profiles` table**
   - The code queries this table for user XP and membership info
   - Table wasn't defined in the schema

3. **Missing `lab_submissions` table**
   - The code queries this table for lab completion stats
   - Table wasn't defined in the schema

## How to Fix

### Option 1: Run the Comprehensive Fix (Recommended)

1. Go to your Supabase project
2. Navigate to the SQL Editor
3. Copy and paste the contents of `supabase-fix-columns.sql`
4. Click "Run" to execute the SQL

This will:
- Create the `profiles` table if it doesn't exist
- Create the `lab_submissions` table if it doesn't exist
- Add the `completed` boolean column to `user_progress`
- Update existing records to set `completed = true` where data exists
- Set up all necessary RLS (Row Level Security) policies

### Option 2: Quick Fix for Just the Completed Column

If you only want to fix the `completed` column issue:

1. Go to your Supabase project
2. Navigate to the SQL Editor
3. Copy and paste the contents of `fix-user-progress-completed-column.sql`
4. Click "Run" to execute the SQL

### After Running the Fix

1. The profile page should now load user statistics correctly
2. You should see:
   - Lessons completed count
   - XP points and level
   - Quiz scores
   - Lab completion (once you have the lab_submissions table)
   - Study streaks

## Verification

To verify the fix worked:

1. Log in to your application
2. Navigate to the profile page
3. Check that stats are loading (you should see the loading spinner briefly, then stats appear)
4. Open the browser console - there should be no database errors

You can also run this query in Supabase SQL Editor to check:

```sql
-- Check if completed column exists in user_progress
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'user_progress';

-- Check if profiles table exists
SELECT EXISTS (
  SELECT FROM information_schema.tables
  WHERE table_name = 'profiles'
);

-- Check if lab_submissions table exists
SELECT EXISTS (
  SELECT FROM information_schema.tables
  WHERE table_name = 'lab_submissions'
);
```

## Files Updated

- `supabase-schema.sql` - Complete schema with all tables
- `supabase-fix-columns.sql` - Fix script for existing databases
- `fix-user-progress-completed-column.sql` - Quick fix for just the completed column

## Future Deployments

For any new Supabase projects, use the updated `supabase-schema.sql` file which now includes all required tables and columns.
