import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, LogOut, User } from 'lucide-react';
import { networkPlusLessons } from '../data/courses/network-plus/lessons';
import { getDomainConfig, getLessonIcon } from '../data/courses/network-plus/domainConfig';
import { useAuth } from '../context/AuthContext';
import { useUserStats } from '../hooks/useUserStats';
import FlashcardPracticeModal from './FlashcardPracticeModal';
import FlashcardStatsWidget from './FlashcardStatsWidget';
import '../styles/Dashboard.css';

function Dashboard() {
  const { user, signOut } = useAuth();
  const { progress, stats, loading, completeLesson } = useUserStats();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const completedLessons = progress.completedLessons || [];
  const completed = completedLessons.length;
  const progressPercent = (completed / networkPlusLessons.length) * 100;
  const daysRemaining = Math.max(0, 30 - Math.floor(completed * (30 / networkPlusLessons.length))); 

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <span className="logo-icon">🚀</span>
          <span>CertifyStack</span>
        </div>
        <nav>
          <div className="user-info">
            <User size={18} />
            <span>{user?.email}</span>
          </div>
          <button className="nav-btn" onClick={signOut}>
            <LogOut size={18} />
            <span>Sign Out</span>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Network+ Certification</h1>
          <p className="hero-subtitle">
            Master networking fundamentals and pass N10-009 in 30 days
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">{networkPlusLessons.length}</span>
              <span className="stat-label">Total Lessons</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{completed}</span>
              <span className="stat-label">Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{daysRemaining}</span>
              <span className="stat-label">Target Days Left</span> {/* Improved label */}
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="progress-section">
        <div className="progress-card">
          <div className="progress-header">
            <h2>Your Progress</h2>
            <span className="progress-percentage">{Math.round(progressPercent)}%</span>
          </div>

          <div className="progress-bar-container">
            <div
              className="progress-bar-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          
          <div className="progress-details">
            <span><strong>{completed}</strong> of <strong>{networkPlusLessons.length}</strong> lessons completed</span>
            <span><strong>{networkPlusLessons.length - completed}</strong> remaining</span>
          </div>
        </div>
        <div className="progress-card practice-card">
          <div className="progress-header">
            <h2>Practice Center</h2>
          </div>
          <div className="practice-card-body">
            <p>Ready to review? Create a custom flashcard session from multiple lessons to test your knowledge.</p>
            <button 
              className="btn-start-practice"
              onClick={() => setIsModalOpen(true)}
            >
              🃏 Start Practice Session
            </button>
          </div>
        </div>
      </section>

      {/* Flashcard Stats Widget */}
      <section className="flashcard-stats-section">
        <FlashcardStatsWidget />
      </section>

      {/* Lessons Grid */}
      <section className="lessons-section">
        <div className="section-header">
          <h2 className="section-title">Course Curriculum</h2>
          <p className="section-subtitle">
            30 comprehensive lessons covering all Network+ N10-009 exam objectives
          </p>
        </div>
        
        <div className="daily-tiles-grid">
          {networkPlusLessons.map(lesson => {
            const isCompleted = completedLessons.includes(lesson.id);
            const isLocked = lesson.locked;
            const domainConfig = getDomainConfig(lesson.domain);
            const IconComponent = getLessonIcon(lesson.id);

            const handleToggleComplete = async (e) => {
              e.stopPropagation();
              if (isCompleted) {
                // Don't allow un-completing lessons for now
                return;
              }
              try {
                await completeLesson(lesson.id);
              } catch (error) {
                console.error('Failed to complete lesson:', error);
              }
            };

            return (
                <div
                    key={lesson.id}
                    className={`daily-tile ${isLocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''}`}
                    style={{
                      '--domain-color': domainConfig.primary,
                      '--domain-glow': domainConfig.glow
                    }}
                >
                    {/* Icon Header */}
                    <div className="tile-icon-section">
                        <div className="lesson-icon" style={{ color: domainConfig.primary }}>
                            <IconComponent size={32} strokeWidth={2} />
                        </div>
                        <input
                            type="checkbox"
                            className="completion-checkbox"
                            checked={isCompleted}
                            onChange={handleToggleComplete}
                            disabled={isLocked}
                        />
                    </div>

                    {/* Lesson Number Badge */}
                    <div className="lesson-number-badge" style={{
                      backgroundColor: `${domainConfig.primary}15`,
                      color: domainConfig.primary
                    }}>
                        Lesson {lesson.id}
                    </div>

                    {/* Content */}
                    <div className="tile-content">
                        <h3 className="day-title">{lesson.title}</h3>
                        <p className="lesson-description" style={{ color: domainConfig.primary }}>
                            {lesson.domain}
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="tile-actions">
                        {isLocked ? (
                            <button className="tile-btn btn-locked" disabled>
                                🔒 Locked
                            </button>
                        ) : (
                            <Link to={`/lesson/${lesson.id}`} className="tile-btn-link">
                                <button
                                    className="tile-btn btn-start"
                                    style={{
                                      background: `linear-gradient(135deg, ${domainConfig.primary}, ${domainConfig.secondary})`,
                                      boxShadow: `0 4px 15px ${domainConfig.glow}`
                                    }}
                                >
                                    <PlayCircle size={18} strokeWidth={2.5} />
                                    <span>{isCompleted ? 'Review Lesson' : 'Start Lesson'}</span>
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            );
          })}
        </div>
      </section>

      <FlashcardPracticeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default Dashboard;