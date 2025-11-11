// Temporary test script to check database tables
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function testQueries() {
  console.log('Testing database queries...\n');

  // Get current user
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    console.log('No authenticated user');
    return;
  }
  console.log('User ID:', user.id);
  console.log('Email:', user.email);
  console.log('\n---\n');

  // Test user_progress table
  console.log('Querying user_progress table...');
  const { data: lessons, error: lessonsError } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', user.id);

  if (lessonsError) {
    console.log('Error:', lessonsError.message);
  } else {
    console.log('Total records:', lessons?.length || 0);
    console.log('Completed lessons:', lessons?.filter(l => l.completed).length || 0);
    if (lessons && lessons.length > 0) {
      console.log('Sample record:', lessons[0]);
    }
  }
  console.log('\n---\n');

  // Test profiles table
  console.log('Querying profiles table...');
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (profileError) {
    console.log('Error:', profileError.message);
  } else {
    console.log('Profile:', profile);
  }
  console.log('\n---\n');

  // Test quiz_attempts table
  console.log('Querying quiz_attempts table...');
  const { data: quizzes, error: quizzesError } = await supabase
    .from('quiz_attempts')
    .select('*')
    .eq('user_id', user.id);

  if (quizzesError) {
    console.log('Error:', quizzesError.message);
  } else {
    console.log('Total quizzes:', quizzes?.length || 0);
    if (quizzes && quizzes.length > 0) {
      console.log('Sample quiz:', quizzes[0]);
    }
  }
  console.log('\n---\n');

  // Test lab_submissions table
  console.log('Querying lab_submissions table...');
  const { data: labs, error: labsError } = await supabase
    .from('lab_submissions')
    .select('*')
    .eq('user_id', user.id);

  if (labsError) {
    console.log('Error:', labsError.message);
  } else {
    console.log('Total labs:', labs?.length || 0);
    if (labs && labs.length > 0) {
      console.log('Sample lab:', labs[0]);
    }
  }
}

testQueries().catch(console.error);
