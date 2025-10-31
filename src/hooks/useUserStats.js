import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  getUserProgress,
  getUserStats,
  markLessonComplete,
  saveQuizScore,
  getCompletedLessons,
} from '../services/progressService';

/**
 * Custom hook to manage user progress and stats with Supabase
 */
export function useUserStats() {
  const { user } = useAuth();
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

  // Load user progress
  const loadProgress = useCallback(async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const [progressData, statsData] = await Promise.all([
        getUserProgress(),
        getUserStats()
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
  }, [user]);

  // Load on mount and when user changes
  useEffect(() => {
    loadProgress();
  }, [loadProgress]);

  // Mark lesson complete
  const completeLesson = useCallback(async (lessonId, timeSpent = 0) => {
    try {
      await markLessonComplete(lessonId, timeSpent);
      await loadProgress(); // Reload data
    } catch (err) {
      console.error('Error completing lesson:', err);
      setError(err.message);
      throw err;
    }
  }, [loadProgress]);

  // Save quiz attempt
  const saveQuiz = useCallback(async (lessonId, score, totalQuestions) => {
    try {
      await saveQuizScore(lessonId, score, totalQuestions);
      await loadProgress(); // Reload data
    } catch (err) {
      console.error('Error saving quiz:', err);
      setError(err.message);
      throw err;
    }
  }, [loadProgress]);

  // Refresh progress
  const refresh = useCallback(() => {
    return loadProgress();
  }, [loadProgress]);

  return {
    progress,
    stats,
    loading,
    error,
    completeLesson,
    saveQuiz,
    refresh,
  };
}
