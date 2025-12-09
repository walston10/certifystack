import { useState, useEffect, useCallback, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { getActiveCourse } from '../services/courseService';
import {
  getUserProgress,
  getUserStats,
  markLessonComplete,
  saveQuizScore,
} from '../services/progressService';

/**
 * Custom hook to manage user progress and stats with Supabase
 * @param {string} courseIdParam - Optional courseId, if not provided will use active course
 */
export function useUserStats(courseIdParam = null) {
  const { user } = useAuth();
  const [courseId, setCourseId] = useState(courseIdParam || null);
  const [progress, setProgress] = useState({
    completedLessons: [],
    flashcardStats: {
      currentStreak: 0,
      longestStreak: 0,
      lastStudyDate: null,
      totalCardsStudied: 0,
      totalReviews: 0
    }
  });
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const initialLoadDone = useRef(false);

  // Update courseId when courseIdParam changes (e.g., when context loads)
  useEffect(() => {
    if (courseIdParam && courseIdParam !== courseId) {
      setCourseId(courseIdParam);
    }
  }, [courseIdParam, courseId]);

  // Load active course if not provided
  useEffect(() => {
    const loadActiveCourse = async () => {
      if (!courseIdParam && !courseId) {
        try {
          const course = await getActiveCourse();
          if (course?.id) {
            setCourseId(course.id);
          } else {
            setCourseId('network-plus'); // fallback
          }
        } catch (err) {
          console.error('Error loading active course:', err);
          setCourseId('network-plus'); // fallback on error
        }
      }
    };
    loadActiveCourse();
  }, [courseIdParam, courseId]);

  // Load user progress for the specific course
  const loadProgress = useCallback(async (cId) => {
    const targetCourseId = cId || courseId;
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const [progressData, statsData] = await Promise.all([
        getUserProgress(targetCourseId),
        getUserStats(targetCourseId)
      ]);

      setProgress(progressData);
      setStats(statsData);
      setError(null);
    } catch (err) {
      console.error('Error loading user stats:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [user, courseId]);

  // Load on mount and when user or courseId changes
  useEffect(() => {
    if (user && courseId) {
      loadProgress(courseId);
      initialLoadDone.current = true;
    }
  }, [user, courseId, loadProgress]);

  // Mark lesson complete
  const completeLesson = useCallback(async (lessonId, timeSpent = 0) => {
    try {
      await markLessonComplete(lessonId, timeSpent, courseId);
      await loadProgress(courseId); // Reload data
    } catch (err) {
      console.error('Error completing lesson:', err);
      setError(err.message);
      throw err;
    }
  }, [loadProgress, courseId]);

  // Save quiz attempt
  const saveQuiz = useCallback(async (lessonId, score, totalQuestions) => {
    try {
      await saveQuizScore(lessonId, score, totalQuestions, courseId);
      await loadProgress(courseId); // Reload data
    } catch (err) {
      console.error('Error saving quiz:', err);
      setError(err.message);
      throw err;
    }
  }, [loadProgress, courseId]);

  // Refresh progress
  const refresh = useCallback(() => {
    return loadProgress(courseId);
  }, [loadProgress, courseId]);

  return {
    progress,
    stats,
    loading,
    error,
    courseId,
    completeLesson,
    saveQuiz,
    refresh,
  };
}
