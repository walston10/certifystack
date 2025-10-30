import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getGlobalStats, getTotalDueCards } from '../utils/flashcardStorage';
import { getLessonsWithFlashcards } from '../data/courses/network-plus/flashcards/index';
import '../styles/FlashcardStatsWidget.css';

function FlashcardStatsWidget() {
  const [stats, setStats] = useState({
    currentStreak: 0,
    longestStreak: 0,
    totalCardsStudied: 0,
    totalReviews: 0
  });
  const [dueToday, setDueToday] = useState(0);

  useEffect(() => {
    // Load global stats
    const globalStats = getGlobalStats();
    setStats(globalStats);

    // Calculate total due cards across all lessons
    const lessonsWithFlashcards = getLessonsWithFlashcards();
    const allLessonsCards = {};

    lessonsWithFlashcards.forEach(lesson => {
      const { getFlashcardsByLesson } = require('../data/courses/network-plus/flashcards/index');
      allLessonsCards[lesson.id] = getFlashcardsByLesson(lesson.id);
    });

    const totalDue = getTotalDueCards(allLessonsCards);
    setDueToday(totalDue);
  }, []);

  // Calculate total cards available
  const lessonsWithFlashcards = getLessonsWithFlashcards();
  const totalCards = lessonsWithFlashcards.reduce((sum, lesson) => sum + lesson.cardCount, 0);
  const progressPercentage = totalCards > 0 ? (stats.totalCardsStudied / totalCards) * 100 : 0;

  return (
    <div className="flashcard-stats-widget">
      <div className="widget-header">
        <h2>🃏 Flashcard Stats</h2>
      </div>

      <div className="widget-body">
        <div className="stats-row">
          <div className="stat-badge streak">
            <span className="badge-icon">🔥</span>
            <span className="badge-value">{stats.currentStreak}</span>
            <span className="badge-label">day streak</span>
          </div>
          <div className="stat-badge due">
            <span className="badge-icon">📌</span>
            <span className="badge-value">{dueToday}</span>
            <span className="badge-label">cards due today</span>
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
