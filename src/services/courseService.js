import { supabase } from '../lib/supabase';

// ============================================
// COURSE MANAGEMENT
// ============================================

/**
 * Get all courses with user's progress
 * @param {string} userId - User ID (optional, will fetch from auth if not provided)
 * @returns {Promise<Array>} Array of courses with progress data
 */
export async function getAllCourses(userId = null) {
  // Get user ID if not provided
  if (!userId) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      // Return courses without progress if not authenticated
      const { data: courses, error } = await supabase
        .from('courses')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;

      return courses.map(course => ({
        ...course,
        progress: 0,
        lessonsCompleted: 0,
      }));
    }
    userId = user.id;
  }

  // Get all courses
  const { data: courses, error: coursesError } = await supabase
    .from('courses')
    .select('*')
    .order('order_index', { ascending: true });

  if (coursesError) throw coursesError;

  // For each course, get user's lesson progress count
  const coursesWithProgress = await Promise.all(
    courses.map(async (course) => {
      try {
        const { count, error: progressError } = await supabase
          .from('user_progress')
          .select('*', { count: 'exact', head: true })
          .eq('user_id', userId)
          .eq('course_id', course.id)
          .eq('completed', true);

        if (progressError) {
          console.error(`Error fetching progress for course ${course.id}:`, progressError);
          return {
            ...course,
            progress: 0,
            lessonsCompleted: 0,
          };
        }

        const lessonsCompleted = count || 0;
        const progress = course.total_lessons > 0
          ? Math.round((lessonsCompleted / course.total_lessons) * 100)
          : 0;

        return {
          ...course,
          progress,
          lessonsCompleted,
        };
      } catch (error) {
        console.error(`Error processing course ${course.id}:`, error);
        return {
          ...course,
          progress: 0,
          lessonsCompleted: 0,
        };
      }
    })
  );

  return coursesWithProgress;
}

/**
 * Get a single course by ID
 * @param {string} courseId - Course ID
 * @returns {Promise<Object>} Course object
 */
export async function getCourse(courseId) {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('id', courseId)
    .single();

  if (error) throw error;
  return data;
}

/**
 * Set user's active course
 * @param {string} userId - User ID
 * @param {string} courseId - Course ID to set as active
 * @returns {Promise<Object>} Updated profile
 */
export async function setActiveCourse(userId, courseId) {
  if (!userId) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');
    userId = user.id;
  }

  // Verify course exists and is available
  const { data: course, error: courseError } = await supabase
    .from('courses')
    .select('*')
    .eq('id', courseId)
    .single();

  if (courseError) throw new Error(`Course ${courseId} not found`);

  if (course.status !== 'available') {
    throw new Error(`Course ${courseId} is not available yet`);
  }

  // Update user's active course
  const { data, error } = await supabase
    .from('profiles')
    .update({ active_course: courseId })
    .eq('id', userId)
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Get user's active course with full details
 * @param {string} userId - User ID (optional)
 * @returns {Promise<Object>} Active course object with details
 */
export async function getActiveCourse(userId = null) {
  if (!userId) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;
    userId = user.id;
  }

  // Get user's active course ID
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('active_course')
    .eq('id', userId)
    .single();

  if (profileError) throw profileError;

  const activeCourseId = profile.active_course || 'network-plus';

  // Get full course details
  const { data: course, error: courseError } = await supabase
    .from('courses')
    .select('*')
    .eq('id', activeCourseId)
    .single();

  if (courseError) throw courseError;

  // Get user's progress for this course
  const { count, error: progressError } = await supabase
    .from('lesson_progress')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userId)
    .eq('course_id', activeCourseId)
    .eq('completed', true);

  if (progressError) {
    console.error('Error fetching progress:', progressError);
    return {
      ...course,
      progress: 0,
      lessonsCompleted: 0,
    };
  }

  const lessonsCompleted = count || 0;
  const progress = course.total_lessons > 0
    ? Math.round((lessonsCompleted / course.total_lessons) * 100)
    : 0;

  return {
    ...course,
    progress,
    lessonsCompleted,
  };
}

/**
 * Get available courses only (for navigation dropdown)
 * @returns {Promise<Array>} Array of available courses
 */
export async function getAvailableCourses() {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('status', 'available')
    .order('order_index', { ascending: true });

  if (error) throw error;
  return data;
}

/**
 * Check if a course is available
 * @param {string} courseId - Course ID
 * @returns {Promise<boolean>} True if course is available
 */
export async function isCourseAvailable(courseId) {
  const { data, error } = await supabase
    .from('courses')
    .select('status')
    .eq('id', courseId)
    .single();

  if (error) return false;
  return data.status === 'available';
}
