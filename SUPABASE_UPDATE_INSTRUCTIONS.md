# Supabase Database Update Instructions

Your Stripe integration and paywall code is implemented, but you're missing the required database tables!

## What's Missing

You need to run these 2 migration files in your Supabase SQL Editor:

### 1. AI Tutor Usage Table (for rate limiting)
**File:** `supabase/migrations/create_ai_tutor_usage.sql`
- Enables the 3 questions/day limit for free users
- Tracks AI tutor conversations

### 2. Stripe & Course Access Tables (CRITICAL)
**File:** `supabase/migrations/create_stripe_and_access_tables.sql`
- Creates `user_subscriptions` table (for Stripe webhook data)
- Creates `user_access` table (for course access control)
- Enables paywall functionality

## How to Apply These Migrations

### Option 1: Supabase Dashboard (Recommended)

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy and paste the entire contents of each migration file
5. Click **Run** to execute

Run them in this order:
1. First: `create_ai_tutor_usage.sql`
2. Second: `create_stripe_and_access_tables.sql`

### Option 2: Supabase CLI (if you have it installed)

```bash
# If you have Supabase CLI linked to your project
supabase db push
```

## Verify the Tables Were Created

Run this query in the SQL Editor to verify:

```sql
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
AND table_name IN ('user_subscriptions', 'user_access', 'ai_tutor_usage');
```

You should see all 3 tables listed.

## What This Will Enable

Once these tables are created:

✅ **Stripe Webhooks** will work properly
- Subscription events from Stripe will update your database
- User membership_tier will automatically update

✅ **AI Tutor Rate Limiting** will work
- Free users: 3 questions per day
- Premium users: Unlimited questions

✅ **Course Access Queries** will work
- CourseCatalog will show which courses users own
- CourseOverview will display correct access status

## What Still Needs Implementation (Phase 2)

After updating the database, you'll still need to implement:

1. **Content Gating** - Add access checks to lesson viewers, quizzes, exams, labs
2. **Individual Course Purchases** - Implement Stripe checkout for non-subscription purchases
3. **Access Granting Logic** - When users purchase/subscribe, grant them course access in `user_access` table

But first, update Supabase with these migrations! 🚀
