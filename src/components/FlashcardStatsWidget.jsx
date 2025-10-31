import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getGlobalStats, getDueCardsCount } from '../services/flashcardService';
import { getLessonsWithFlashcards } from '../courses/network-plus/flashcards/index';
import '../styles/FlashcardStatsWidget.css';

function FlashcardStatsWidget() {
  const [stats, setStats] = useState({
    currentStreak: 0,
    longestStreak: 0,
    totalCardsStudied: 0,
    totalReviews: 0
  });
  const [dueToday, setDueToday] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        setLoading(true);

        // Load global stats
        const globalStats = await getGlobalStats();
        setStats(globalStats);

        // Calculate total due cards across all lessons
        const lessonsWithFlashcards = getLessonsWithFlashcards();
        const { getFlashcardsByLesson } = require('../courses/network-plus/flashcards/index');

        let totalDue = 0;
        for (const lesson of lessonsWithFlashcards) {
          const cards = getFlashcardsByLesson(lesson.id);
          const dueCount = await getDueCardsCount(lesson.id, cards);
          totalDue += dueCount;
        }

        setDueToday(totalDue);
      } catch (error) {
        console.error('Error loading flashcard stats:', error);
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, []);

  // Calculate total cards available
  const lessonsWithFlashcards = getLessonsWithFlashcards();
  const totalCards = lessonsWithFlashcards.reduce((sum, lesson) => sum + lesson.cardCount, 0);
  const progressPercentage = totalCards > 0 ? (stats.totalCardsStudied / totalCards) * 100 : 0;

  if (loading) {
    return (
      <div className="flashcard-stats-widget">
        <div className="widget-header">
          <span style={{ fontSize: '1.5rem' }}>🃏</span>
          <h2>Flashcard Progress</h2>
        </div>
        <div className="widget-body">
          <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
            Loading stats...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flashcard-stats-widget">
      <div className="widget-header">
        <span style={{ fontSize: '1.5rem' }}>🃏</span>
        <h2>Flashcard Progress</h2>
      </div>

      <div className="widget-body">
        <div className="stats-row">
          <div className="stat-badge streak">
            <span className="badge-icon">🔥</span>
            <div className="badge-content">
              <span className="badge-value">{stats.currentStreak}</span>
              <span className="badge-label">day streak</span>
            </div>
          </div>
          <div className="stat-badge due">
            <span className="badge-icon">📌</span>
            <div className="badge-content">
              <span className="badge-value">{dueToday}</span>
              <span className="badge-label">cards due today</span>
            </div>
          </div>
        </div>

        <div className="progress-section">
          <div className="progress-label">
            <span>Progress: {stats.totalCardsStudied}/{totalCards} cards studied</span>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
          <div className="progress-bar-widget">
            <div
              className="progress-bar-fill-widget"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <div className="weekly-stats">
          <span className="weekly-label">Total reviews: {stats.totalReviews}</span>
        </div>

        {dueToday > 0 && (
          <Link to="/lesson/1?tab=flashcards" className="review-link">
            <button className="btn-start-review">
              Start Review Session
            </button>
          </Link>
        )}

        {dueToday === 0 && stats.totalCardsStudied > 0 && (
          <div className="all-caught-up">
            ✨ You're all caught up! Check back tomorrow.
          </div>
        )}

        {dueToday === 0 && stats.totalCardsStudied === 0 && (
          <Link to="/lesson/1?tab=flashcards" className="review-link">
            <button className="btn-start-review btn-get-started">
              Get Started with Flashcards
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default FlashcardStatsWidget;
