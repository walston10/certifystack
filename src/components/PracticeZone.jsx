import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, FileCheck, CreditCard, TrendingUp, AlertTriangle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { getExamAttempts } from '../services/examService';
import QuizSelectionModal from './QuizSelectionModal';
import './PracticeZone.css';

function PracticeZone() {
  const navigate = useNavigate();
  const [examAttempts, setExamAttempts] = useState([]);
  const [quizStats, setQuizStats] = useState({ taken: 0, average: 0 });
  const [flashcardStats, setFlashcardStats] = useState({ mastered: 0, learning: 0, new: 0 });
  const [weakAreas, setWeakAreas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);

  useEffect(() => {
    loadAllStats();
  }, []);

  const loadAllStats = async () => {
    try {
      const user = await supabase.auth.getUser();
      if (!user.data.user) return;

      // Load exam attempts
      const { data: exams } = await getExamAttempts(5);
      setExamAttempts(exams || []);

      // Load quiz stats
      const { data: quizAttempts } = await supabase
        .from('quiz_attempts')
        .select('score, lesson_id')
        .eq('user_id', user.data.user.id);

      if (quizAttempts) {
        const avgScore = quizAttempts.length
          ? Math.round(quizAttempts.reduce((sum, q) => sum + q.score, 0) / quizAttempts.length)
          : 0;
        setQuizStats({ taken: quizAttempts.length, average: avgScore });

        // Identify weak areas (quizzes with < 70% score)
        const weak = {};
        quizAttempts.forEach(attempt => {
          if (attempt.score < 70 && !weak[attempt.lesson_id]) {
            weak[attempt.lesson_id] = attempt.score;
          }
        });
        const weakList = Object.entries(weak).map(([lessonId, score]) => ({
          lessonId: parseInt(lessonId),
          score
        }));
        setWeakAreas(weakList.slice(0, 5));
      }

      // Load flashcard stats
      const { data: flashcards, error: flashcardError } = await supabase
        .from('flashcard_progress')
        .select('state, repetitions')
        .eq('user_id', user.data.user.id);

      if (flashcardError) {
        console.warn('Error loading flashcard stats:', flashcardError);
        setFlashcardStats({ mastered: 0, learning: 0, new: 900 });
      } else if (flashcards) {
        const stats = flashcards.reduce(
          (acc, card) => {
            // Use repetitions as mastery indicator: 0 = new, 1-4 = learning, 5+ = mastered
            if (card.repetitions >= 5) acc.mastered++;
            else if (card.repetitions >= 1) acc.learning++;
            else acc.new++;
            return acc;
          },
          { mastered: 0, learning: 0, new: 900 - flashcards.length }
        );
        setFlashcardStats(stats);
      } else {
        setFlashcardStats({ mastered: 0, learning: 0, new: 900 });
      }

      setLoading(false);
    } catch (error) {
      console.error('Error loading practice stats:', error);
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="practice-zone loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="practice-zone">
      {/* Header */}
      <div className="practice-header">
        <div className="header-content">
          <Target size={48} className="header-icon" />
          <div>
            <h1>Practice Zone</h1>
            <p>Test your knowledge and track your progress</p>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <section className="stats-overview">
        <div className="stat-card">
          <div className="stat-icon exam-icon">
            <FileCheck size={32} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{examAttempts.length}</div>
            <div className="stat-label">Practice Exams</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon quiz-icon">
            <Target size={32} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{quizStats.taken}</div>
            <div className="stat-label">Quizzes Taken</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon flashcard-icon">
            <CreditCard size={32} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{flashcardStats.mastered}</div>
            <div className="stat-label">Cards Mastered</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon avg-icon">
            <TrendingUp size={32} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{quizStats.average}%</div>
            <div className="stat-label">Average Score</div>
          </div>
        </div>
      </section>

      {/* Weak Areas Alert */}
      {weakAreas.length > 0 && (
        <section className="weak-areas-alert">
          <AlertTriangle size={24} />
          <div>
            <h3>Focus Areas</h3>
            <p>These lessons need more practice (scored below 70%)</p>
            <div className="weak-areas-list">
              {weakAreas.map(area => (
                <button
                  key={area.lessonId}
                  className="weak-area-btn"
                  onClick={() => navigate(`/lesson/${area.lessonId}`)}
                >
                  Lesson {area.lessonId} - {area.score}%
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Practice Sections */}
      <div className="practice-sections">
        {/* Practice Exams */}
        <section className="practice-section">
          <div className="section-header">
            <h2>📝 Practice Exams</h2>
            <button
              className="btn-take-exam"
              onClick={() => navigate('/practice-exam-setup')}
            >
              Take New Exam
            </button>
          </div>

          <div className="section-content">
            <p className="section-description">
              Full-length simulated exams (90 questions, 90 minutes) matching the real CompTIA Network+ N10-009 exam format.
            </p>

            {examAttempts.length === 0 ? (
              <div className="empty-state">
                <p>No practice exams taken yet.</p>
                <p>Start with your first exam to assess your knowledge!</p>
              </div>
            ) : (
              <div className="attempts-list">
                <h3>Recent Attempts</h3>
                {examAttempts.map((attempt, idx) => (
                  <div key={attempt.id} className="attempt-item">
                    <div className="attempt-info">
                      <span className="attempt-number">Attempt {examAttempts.length - idx}</span>
                      <span className="attempt-date">{formatDate(attempt.created_at)}</span>
                    </div>
                    <div className="attempt-score">
                      <span className={`score ${attempt.passed ? 'passed' : 'failed'}`}>
                        {attempt.percentage}%
                      </span>
                      <span className="score-label">{attempt.passed ? 'Passed' : 'Failed'}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="exam-options">
              <button className="exam-option-btn" onClick={() => navigate('/practice-exam-setup')}>
                <div className="option-title">Full Practice Exam</div>
                <div className="option-details">90 questions • 90 minutes</div>
              </button>
              <button className="exam-option-btn" onClick={() => navigate('/practice-exam-setup')}>
                <div className="option-title">Domain Practice</div>
                <div className="option-details">25 questions • 30 minutes</div>
              </button>
              <button className="exam-option-btn" onClick={() => navigate('/practice-exam-setup')}>
                <div className="option-title">Quick Quiz</div>
                <div className="option-details">15 questions • 15 minutes</div>
              </button>
            </div>
          </div>
        </section>

        {/* Topic Quizzes */}
        <section className="practice-section">
          <div className="section-header">
            <h2>🎯 Topic Quizzes</h2>
            <button
              className="btn-browse-quizzes"
              onClick={() => setIsQuizModalOpen(true)}
            >
              Select a Quiz
            </button>
          </div>

          <div className="section-content">
            <p className="section-description">
              15-question quizzes for each lesson to test your understanding of specific topics.
            </p>

            <div className="quiz-stats">
              <div className="quiz-stat">
                <span className="quiz-stat-label">Quizzes Available</span>
                <span className="quiz-stat-value">30</span>
              </div>
              <div className="quiz-stat">
                <span className="quiz-stat-label">Completed</span>
                <span className="quiz-stat-value">{quizStats.taken}</span>
              </div>
              <div className="quiz-stat">
                <span className="quiz-stat-label">Average Score</span>
                <span className="quiz-stat-value">{quizStats.average}%</span>
              </div>
            </div>

            <button
              className="btn-start-quiz"
              onClick={() => setIsQuizModalOpen(true)}
            >
              Browse All Quizzes
            </button>

            <p className="quiz-info">
              💡 Tip: Complete each lesson before taking its quiz for the best results!
            </p>
          </div>
        </section>

        {/* Flashcards */}
        <section className="practice-section">
          <div className="section-header">
            <h2>🗂️ Flashcards</h2>
            <button
              className="btn-study-flashcards"
              onClick={() => navigate('/practice/flashcards/setup')}
            >
              Study Now
            </button>
          </div>

          <div className="section-content">
            <p className="section-description">
              900 flashcards covering all Network+ exam objectives with spaced repetition learning.
            </p>

            <div className="flashcard-progress">
              <div className="progress-item mastered">
                <div className="progress-label">Mastered</div>
                <div className="progress-value">{flashcardStats.mastered}</div>
              </div>
              <div className="progress-item learning">
                <div className="progress-label">Learning</div>
                <div className="progress-value">{flashcardStats.learning}</div>
              </div>
              <div className="progress-item new">
                <div className="progress-label">New</div>
                <div className="progress-value">{flashcardStats.new}</div>
              </div>
            </div>

            <div className="flashcard-options">
              <button
                className="flashcard-option-btn"
                onClick={() => navigate('/practice/flashcards/setup')}
              >
                Study All Cards
              </button>
              <button
                className="flashcard-option-btn"
                onClick={() => navigate('/practice/flashcards/setup')}
              >
                Study Weak Cards
              </button>
              <button
                className="flashcard-option-btn"
                onClick={() => navigate('/practice/flashcards/setup')}
              >
                Study by Module
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Quiz Selection Modal */}
      <QuizSelectionModal
        isOpen={isQuizModalOpen}
        onClose={() => setIsQuizModalOpen(false)}
      />
    </div>
  );
}

export default PracticeZone;
