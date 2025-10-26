import { Link } from 'react-router-dom';
import { networkPlusLessons } from '../data/courses/network-plus/lessons';
import '../styles/Dashboard.css';

function Dashboard() {
  const completed = networkPlusLessons.filter(l => l.completed).length;
  const progress = (completed / networkPlusLessons.length) * 100;
  const daysRemaining = 30 - completed; // Rough estimate

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <span className="logo-icon">⚡</span>
          <span>CertifyStack</span>
        </div>
        <nav>
          <button className="nav-btn">
            📚 <span>Courses</span>
          </button>
          <button className="nav-btn">
            📊 <span>Progress</span>
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
              <span className="stat-label">Days to Go</span>
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
            <span>{completed} of {networkPlusLessons.length} lessons completed</span>
            <span>{networkPlusLessons.length - completed} remaining</span>
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
            <div key={lesson.id} className={`lesson-card ${lesson.locked ? 'locked' : ''}`}>
              <div className="lesson-header-card">
                <span className="lesson-number">Lesson {lesson.id}</span>
                <span className="lesson-time">⏱ {lesson.time}</span>
              </div>
              
              <h3>{lesson.title}</h3>
              <p className="lesson-domain">📂 {lesson.domain}</p>
              
              {lesson.locked ? (
                <button className="lesson-btn btn-locked" disabled>
                  🔒 Locked
                </button>
              ) : (
                <Link to={`/lesson/${lesson.id}`}>
                  <button className="lesson-btn btn-start">
                    ▶ Start Lesson
                  </button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;