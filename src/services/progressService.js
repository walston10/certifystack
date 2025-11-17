import { supabase } from '../lib/supabase';

// ============================================
// LESSON PROGRESS
// ============================================

/**
 * Mark a lesson as complete and award XP
 */
export async function markLessonComplete(lessonId, timeSpent = 0, courseId = 'network-plus') {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  // Check if lesson was already completed (to avoid double XP)
  let wasAlreadyCompleted = false;
  try {
    const { data: existing } = await supabase
      .from('user_progress')
      .select('completed')
      .eq('user_id', user.id)
      .eq('course_id', courseId)
      .eq('lesson_id', lessonId)
      .maybeSingle();

    wasAlreadyCompleted = existing?.completed === true;
  } catch (error) {
    // If RLS blocks this, assume not completed (will award XP)
    console.warn('Could not check existing completion status:', error);
  }

  // Mark lesson as complete (upsert will create or update)
  const { data, error } = await supabase
    .from('user_progress')
    .upsert({
      user_id: user.id,
      course_id: courseId,
      lesson_id: lessonId,
      completed: true,
      time_spent: timeSpent,
      completion_date: new Date().toISOString(),
    }, {
      onConflict: 'user_id,course_id,lesson_id',
      ignoreDuplicates: false // Always update if exists
    })
    .select();

  if (error) throw error;

  // Award XP only if this is first completion
  if (!wasAlreadyCompleted) {
    const XP_PER_LESSON = 50;

    try {
      // Get current XP
      const { data: profile } = await supabase
        .from('profiles')
        .select('xp_points')
        .eq('id', user.id)
        .single();

      const currentXP = profile?.xp_points || 0;
      const newXP = currentXP + XP_PER_LESSON;

      // Update XP in profile
      const { error: xpError } = await supabase
        .from('profiles')
        .update({ xp_points: newXP })
        .eq('id', user.id);

      if (xpError) console.error('Error awarding XP:', xpError);
    } catch (xpError) {
      console.error('Error awarding XP:', xpError);
    }
  }

  return data;
}

/**
 * Get all completed lessons for current user
 */
export async function getCompletedLessons(courseId = 'network-plus') {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  const { data, error } = await supabase
    .from('user_progress')
    .select('lesson_id')
    .eq('user_id', user.id)
    .eq('course_id', courseId)
    .eq('completed', true);

  if (error) throw error;
  return data.map(item => item.lesson_id);
}

// ============================================
// QUIZ PROGRESS
// ============================================

/**
 * Save quiz score
 */
export async function saveQuizScore(lessonId, score, totalQuestions, courseId = 'network-plus', quizType = 'lesson-quiz', answers = []) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const { data, error} = await supabase
    .from('quiz_attempts')
    .insert({
      user_id: user.id,
      course_id: courseId,
      lesson_id: lessonId,
      quiz_type: quizType,
      score,
      total_questions: totalQuestions,
      answers,
      created_at: new Date().toISOString(),
    })
    .select();

  if (error) throw error;
  return data;
}

/**
 * Get quiz history for a lesson
 */
export async function getQuizHistory(lessonId) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  const { data, error } = await supabase
    .from('quiz_attempts')
    .select('*')
    .eq('user_id', user.id)
    .eq('lesson_id', lessonId)
    .order('attempted_at', { ascending: false });

  if (error) throw error;
  return data;
}

// ============================================
// FLASHCARD PROGRESS
// ============================================

/**
 * Update flashcard progress (for Anki-style system)
 */
export async function updateFlashcardProgress(lessonId, cardId, cardState) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const { data, error } = await supabase
    .from('flashcard_progress')
    .upsert({
      user_id: user.id,
      card_id: cardId,
      state: cardState.state,
      ease: cardState.ease,
      interval: cardState.interval,
      due_date: cardState.dueDate,
      last_reviewed: cardState.lastReviewed,
      repetitions: cardState.repetitions,
      times_hard: cardState.timesHard,
      times_good: cardState.timesGood,
      times_easy: cardState.timesEasy,
    }, {
      onConflict: 'user_id,card_id'
    })
    .select();

  if (error) throw error;
  return data;
}

/**
 * Get flashcard progress for a lesson
 */
export async function getFlashcardProgress(lessonId) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return {};

  // card_id format is "lessonId-cardIndex", so filter by cards that start with "lessonId-"
  const { data, error } = await supabase
    .from('flashcard_progress')
    .select('*')
    .eq('user_id', user.id)
    .like('card_id', `${lessonId}-%`);

  if (error) throw error;

  // Convert to object with card_id as key
  const progressMap = {};
  if (data) {
    data.forEach(item => {
      progressMap[item.card_id] = {
        state: item.state,
        ease: item.ease,
        interval: item.interval,
        dueDate: item.due_date,
        lastReviewed: item.last_reviewed,
        repetitions: item.repetitions,
        timesHard: item.times_hard,
        timesGood: item.times_good,
        timesEasy: item.times_easy,
      };
    });
  }

  return progressMap;
}

/**
 * Get global flashcard stats
 */
export async function getFlashcardStats() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return {
    currentStreak: 0,
    longestStreak: 0,
    lastStudyDate: null,
    totalCardsStudied: 0,
    totalReviews: 0
  };

  const { data, error } = await supabase
    .from('study_streaks')
    .select('*')
    .eq('user_id', user.id)
    .single();

  if (error && error.code !== 'PGRST116') throw error; // PGRST116 = not found

  if (!data) {
    return {
      currentStreak: 0,
      longestStreak: 0,
      lastStudyDate: null,
      totalCardsStudied: 0,
      totalReviews: 0
    };
  }

  return {
    currentStreak: data.current_streak,
    longestStreak: data.longest_streak,
    lastStudyDate: data.last_study_date,
    totalCardsStudied: data.total_cards_studied,
    totalReviews: data.total_reviews
  };
}

/**
 * Update study streak
 */
export async function updateStudyStreak() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const today = new Date().toISOString().split('T')[0];

  // Get current streak data
  const stats = await getFlashcardStats();
  const lastStudy = stats.lastStudyDate;

  let currentStreak = stats.currentStreak;
  let longestStreak = stats.longestStreak;

  if (!lastStudy) {
    // First time studying
    currentStreak = 1;
    longestStreak = 1;
  } else if (lastStudy === today) {
    // Already studied today, no change
    return stats;
  } else {
    const lastDate = new Date(lastStudy);
    const todayDate = new Date(today);
    const diffTime = Math.abs(todayDate - lastDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      // Consecutive day
      currentStreak += 1;
      longestStreak = Math.max(longestStreak, currentStreak);
    } else {
      // Streak broken
      currentStreak = 1;
    }
  }

  const { data, error } = await supabase
    .from('study_streaks')
    .upsert({
      user_id: user.id,
      current_streak: currentStreak,
      longest_streak: longestStreak,
      last_study_date: today,
      total_cards_studied: stats.totalCardsStudied,
      total_reviews: stats.totalReviews + 1,
    }, {
      onConflict: 'user_id'
    })
    .select()
    .single();

  if (error) throw error;
  return {
    currentStreak: data.current_streak,
    longestStreak: data.longest_streak,
    lastStudyDate: data.last_study_date,
    totalCardsStudied: data.total_cards_studied,
    totalReviews: data.total_reviews
  };
}

/**
 * Increment total reviews counter
 */
export async function incrementTotalReviews() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const stats = await getFlashcardStats();

  const { data, error } = await supabase
    .from('study_streaks')
    .upsert({
      user_id: user.id,
      current_streak: stats.currentStreak,
      longest_streak: stats.longestStreak,
      last_study_date: stats.lastStudyDate,
      total_cards_studied: stats.totalCardsStudied,
      total_reviews: stats.totalReviews + 1,
    }, {
      onConflict: 'user_id'
    })
    .select();

  if (error) throw error;
  return data;
}

// ============================================
// USER STATS
// ============================================

/**
 * Get comprehensive user progress
 */
export async function getUserProgress() {
  const completedLessons = await getCompletedLessons();
  const flashcardStats = await getFlashcardStats();

  return {
    completedLessons,
    flashcardStats,
  };
}

/**
 * Get computed user stats
 */
export async function getUserStats() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  // Get completed lessons
  const completedLessons = await getCompletedLessons();
  const totalLessons = 30; // Network+ has 30 lessons
  const percentComplete = (completedLessons.length / totalLessons) * 100;

  // Get quiz scores
  const { data: quizzes, error: quizError } = await supabase
    .from('quiz_attempts')
    .select('score, total_questions')
    .eq('user_id', user.id);

  if (quizError) throw quizError;

  let avgScore = 0;
  if (quizzes && quizzes.length > 0) {
    const totalScore = quizzes.reduce((sum, quiz) => {
      const percentage = (quiz.score / quiz.total_questions) * 100;
      return sum + percentage;
    }, 0);
    avgScore = totalScore / quizzes.length;
  }

  // Get flashcard stats
  const flashcardStats = await getFlashcardStats();

  return {
    lessonsCompleted: completedLessons.length,
    totalLessons,
    percentComplete: Math.round(percentComplete),
    avgQuizScore: Math.round(avgScore),
    quizzesTaken: quizzes?.length || 0,
    currentStreak: flashcardStats.currentStreak,
    longestStreak: flashcardStats.longestStreak,
    totalReviews: flashcardStats.totalReviews,
  };
}
