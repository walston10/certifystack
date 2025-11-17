import { supabase } from '../lib/supabase';

/**
 * Get course progress breakdown by course
 */
export async function getCourseProgress() {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { success: false, data: [], error: 'Not authenticated' };

    // Get lesson progress
    const { data, error } = await supabase
      .from('user_progress')
      .select('course_id, completed')
      .eq('user_id', user.id);

    if (error) throw error;

    // Get all courses to get actual total_lessons
    const { data: courses, error: coursesError } = await supabase
      .from('courses')
      .select('id, total_lessons');

    if (coursesError) throw coursesError;

    // Create a map of course_id to total_lessons
    const courseTotalsMap = {};
    courses?.forEach(course => {
      courseTotalsMap[course.id] = course.total_lessons || 30;
    });

    // Group by course and calculate stats
    const courseStats = {};

    if (data && data.length > 0) {
      data.forEach(record => {
        if (!courseStats[record.course_id]) {
          courseStats[record.course_id] = {
            course_id: record.course_id,
            completed_lessons: 0,
            total_lessons: courseTotalsMap[record.course_id] || 30,
            progress_pct: 0
          };
        }

        if (record.completed) {
          courseStats[record.course_id].completed_lessons++;
        }
      });

      // Calculate percentages
      Object.values(courseStats).forEach(stats => {
        stats.progress_pct = Math.round((stats.completed_lessons / stats.total_lessons) * 100);
      });
    }

    return { success: true, data: Object.values(courseStats), error: null };
  } catch (error) {
    console.error('Error fetching course progress:', error);
    return { success: false, data: [], error: error.message };
  }
}

/**
 * Get study stats (streak, XP, cards studied)
 */
export async function getStudyStats() {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { success: false, data: null, error: 'Not authenticated' };

    // Get study streak
    const { data: streakData } = await supabase
      .from('study_streaks')
      .select('current_streak')
      .eq('user_id', user.id)
      .single();

    // Get XP points
    const { data: profileData } = await supabase
      .from('profiles')
      .select('xp_points')
      .eq('id', user.id)
      .single();

    // Get flashcard count
    const { count: flashcardCount } = await supabase
      .from('flashcard_progress')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user.id);

    const stats = {
      current_streak: streakData?.current_streak || 0,
      xp_points: profileData?.xp_points || 0,
      cards_studied: flashcardCount || 0
    };

    return { success: true, data: stats, error: null };
  } catch (error) {
    console.error('Error fetching study stats:', error);
    return { success: false, data: null, error: error.message };
  }
}

/**
 * Get quiz performance summary
 */
export async function getQuizPerformance() {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { success: false, data: null, error: 'Not authenticated' };

    const { data, error } = await supabase
      .from('quiz_attempts')
      .select('score, total_questions')
      .eq('user_id', user.id);

    if (error) throw error;

    const stats = {
      quizzes_taken: data?.length || 0,
      avg_score: 0
    };

    if (data && data.length > 0) {
      const totalPercentage = data.reduce((sum, quiz) => {
        return sum + ((quiz.score / quiz.total_questions) * 100);
      }, 0);
      stats.avg_score = Math.round(totalPercentage / data.length);
    }

    return { success: true, data: stats, error: null };
  } catch (error) {
    console.error('Error fetching quiz performance:', error);
    return { success: false, data: null, error: error.message };
  }
}

/**
 * Get practice exam results summary
 */
export async function getExamPerformance() {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { success: false, data: null, error: 'Not authenticated' };

    const { data, error } = await supabase
      .from('exam_attempts')
      .select('passed, percentage')
      .eq('user_id', user.id);

    if (error) throw error;

    const stats = {
      exams_taken: data?.length || 0,
      exams_passed: 0,
      avg_score: 0
    };

    if (data && data.length > 0) {
      stats.exams_passed = data.filter(exam => exam.passed).length;
      const totalPercentage = data.reduce((sum, exam) => sum + exam.percentage, 0);
      stats.avg_score = Math.round(totalPercentage / data.length);
    }

    return { success: true, data: stats, error: null };
  } catch (error) {
    console.error('Error fetching exam performance:', error);
    return { success: false, data: null, error: error.message };
  }
}

/**
 * Get recent activity feed
 */
export async function getRecentActivity(limit = 10) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { success: false, data: [], error: 'Not authenticated' };

    // Get recent lesson completions
    const { data: lessons } = await supabase
      .from('user_progress')
      .select('lesson_id, course_id, completion_date')
      .eq('user_id', user.id)
      .eq('completed', true)
      .order('completion_date', { ascending: false })
      .limit(limit);

    // Get recent quiz attempts
    const { data: quizzes } = await supabase
      .from('quiz_attempts')
      .select('lesson_id, course_id, score, total_questions, created_at')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(limit);

    // Get recent exam attempts
    const { data: exams } = await supabase
      .from('exam_attempts')
      .select('percentage, passed, time_completed')
      .eq('user_id', user.id)
      .order('time_completed', { ascending: false })
      .limit(limit);

    // Combine and format activities
    const activities = [];

    if (lessons) {
      lessons.forEach(lesson => {
        activities.push({
          type: 'lesson',
          lesson_id: lesson.lesson_id,
          course_id: lesson.course_id,
          timestamp: lesson.completion_date
        });
      });
    }

    if (quizzes) {
      quizzes.forEach(quiz => {
        const percentage = Math.round((quiz.score / quiz.total_questions) * 100);
        activities.push({
          type: 'quiz',
          lesson_id: quiz.lesson_id,
          course_id: quiz.course_id,
          score: percentage,
          timestamp: quiz.created_at
        });
      });
    }

    if (exams) {
      exams.forEach(exam => {
        activities.push({
          type: 'exam',
          score: exam.percentage,
          passed: exam.passed,
          timestamp: exam.time_completed
        });
      });
    }

    // Sort by timestamp and limit
    activities.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    const recentActivities = activities.slice(0, limit);

    return { success: true, data: recentActivities, error: null };
  } catch (error) {
    console.error('Error fetching recent activity:', error);
    return { success: false, data: [], error: error.message };
  }
}

/**
 * Format relative time (e.g., "2 hours ago")
 */
export function formatRelativeTime(timestamp) {
  const now = new Date();
  const date = new Date(timestamp);
  const diffMs = now - date;
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSecs < 60) return 'just now';
  if (diffMins < 60) return `${diffMins} minute${diffMins !== 1 ? 's' : ''} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
  if (diffDays < 7) return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;

  // For older dates, show the actual date
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

/**
 * Get course name from course_id
 */
export function getCourseName(courseId) {
  const courseNames = {
    'network-plus': 'Network+',
    'security-plus': 'Security+',
    'a-plus': 'A+',
  };
  return courseNames[courseId] || courseId;
}
