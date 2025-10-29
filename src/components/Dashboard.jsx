import { useState } from 'react';
import { Link } from 'react-router-dom';
import { networkPlusLessons } from '../data/courses/network-plus/lessons';
import { useLocalStorage } from '../hooks/useLocalStorage';
import FlashcardPracticeModal from './FlashcardPracticeModal';
import '../styles/Dashboard.css';

function Dashboard() {
  const [completedLessons] = useLocalStorage('completedLessons', []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const completed = completedLessons.length;
  const progress = (completed / networkPlusLessons.length) * 100;
  // Use 30 days total for the "Days to Go" calculation for simplicity
  const daysRemaining = Math.max(0, 30 - Math.floor(completed * (30 / networkPlusLessons.length))); 

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <span className="logo-icon">🚀</span> {/* Updated to a Rocket icon */}
          <span>CertifyStack</span>
        </div>
        <nav>
          <button className="nav-btn">
            🎓 <span>Courses</span> {/* Updated Icon */}
          </button>
          <button className="nav-btn">
            📈 <span>Progress</span> {/* Updated Icon */}
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
            <span className="progress-percentage">{Math.round(progress)}%</span>
          </div>
          
          <div className="progress-bar-container">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${progress}%` }}
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

      {/* Lessons Grid */}
      <section className="lessons-section">
        <div className="section-header">
          <h2 className="section-title">Course Curriculum</h2>
          <p className="section-subtitle">
            30 comprehensive lessons covering all Network+ N10-009 exam objectives
          </p>
        </div>
        
        <div className="lessons-grid">
          {networkPlusLessons.map(lesson => (
            <div 
              key={lesson.id} 
              className={`lesson-card ${lesson.locked ? 'locked' : ''} ${completedLessons.includes(lesson.id) ? 'completed' : ''}`}
            >
              <div className="lesson-header-card">
                <span className="lesson-number">Lesson {lesson.id}</span>
                <span className="lesson-time">⏱ {lesson.time}</span>
              </div>
              
              <h3>{lesson.title}</h3>
              <p className="lesson-domain">⚙️ {lesson.domain}</p>
              
              {lesson.locked ? (
                <button className="lesson-btn btn-locked" disabled>
                  🔒 Locked
                </button>
              ) : (
                <Link to={`/lesson/${lesson.id}`}>
                  <button className="lesson-btn btn-start">
                    {completedLessons.includes(lesson.id) ? 'Review Lesson' : '▶ Start Lesson'}
                  </button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <FlashcardPracticeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default Dashboard;