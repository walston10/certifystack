import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PlayCircle, LogOut, User, Lock, Target } from 'lucide-react'; // Added Target icon
import { networkPlusLessons } from '../courses/network-plus/data/lessons';
import { getDomainConfig, getLessonIcon } from '../courses/network-plus/data/domainConfig';
import { useAuth } from '../context/AuthContext';
import { useUserStats } from '../hooks/useUserStats';
import FlashcardPracticeModal from './FlashcardPracticeModal';
import FlashcardStatsWidget from './FlashcardStatsWidget';
import DomainPerformanceWidget from './DomainPerformanceWidget';
import '../styles/Dashboard.css';

// --- NEW COMPONENT: Focus Bar (Purely visual header element) ---
const FocusBar = () => (
    <div className="focus-bar" /> 
);

// --- NEW COMPONENT: SVG Gradient for Circular Arc ---
const ProgressGradient = () => (
    <svg width="0" height="0" style={{ position: 'absolute' }}>
      <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: 'var(--accent-cyan)', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'var(--accent-purple)', stopOpacity: 1 }} />
          </linearGradient>
      </defs>
    </svg>
);

function Dashboard() {
    const { user, signOut } = useAuth();
    const { progress, completeLesson } = useUserStats();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    // Refs for the animated stats
    const totalLessonsRef = useRef(null);
    const completedRef = useRef(null);
    const daysRemainingRef = useRef(null);
    const progressArcRef = useRef(null);

    const completedLessons = progress.completedLessons || [];
    const completed = completedLessons.length;
    const progressPercent = (completed / networkPlusLessons.length) * 100;
    const daysRemaining = Math.max(0, 30 - Math.floor(completed * (30 / networkPlusLessons.length)));
    
    const progressPercentRounded = Math.round(progressPercent);

    // --- useEffect for Animations (Runs ONCE after mount) ---
    useEffect(() => {
        const animateCounter = (element, target) => {
            if (!element) return;
            const duration = 1000;
            const start = 0;
            let startTime = null;

            function step(timestamp) {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                const percentage = Math.min(progress / duration, 1);
                const currentValue = Math.round(percentage * (target - start) + start);

                element.textContent = currentValue;

                if (percentage < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    element.textContent = target; 
                }
            }
            window.requestAnimationFrame(step);
        };

        animateCounter(totalLessonsRef.current, networkPlusLessons.length);
        animateCounter(completedRef.current, completed);
        animateCounter(daysRemainingRef.current, daysRemaining);

        const arcContainer = progressArcRef.current;
        if (arcContainer) {
            const radius = 45; 
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (progressPercentRounded / 100) * circumference;
            
            const ringFill = arcContainer.querySelector('.ring-fill');
            const percentageText = arcContainer.querySelector('.progress-percentage-arc');

            ringFill.style.strokeDasharray = circumference;
            ringFill.style.strokeDashoffset = circumference; 

            setTimeout(() => {
                ringFill.style.strokeDashoffset = offset;
            }, 100);
            
            animateCounter(percentageText, progressPercentRounded); 

            const flatBar = document.querySelector('.progress-bar-fill');
            if (flatBar) {
                flatBar.style.width = `${progressPercent}%`;
            }
        }
    }, [completed, daysRemaining, progressPercentRounded, progressPercent]);

    return (
        <>
            <FocusBar />
            <ProgressGradient />

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
                                <span className="stat-value" ref={totalLessonsRef} data-target={networkPlusLessons.length}>0</span>
                                <span className="stat-label">Total Lessons</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value" ref={completedRef} data-target={completed}>0</span>
                                <span className="stat-label">Completed</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value" ref={daysRemainingRef} data-target={daysRemaining}>0</span>
                                <span className="stat-label">Target Days Left</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Progress Section */}
                <section className="progress-section">
                    <div className="progress-card">
                        <div className="progress-header">
                            <h2>Your Progress</h2>
                            
                            <div className="circular-progress-container" ref={progressArcRef}>
                                <svg className="progress-ring" width="100" height="100">
                                    <circle className="ring-bg" cx="50" cy="50" r="45"></circle>
                                    <circle className="ring-fill" cx="50" cy="50" r="45"></circle>
                                </svg>
                                <span className="progress-percentage-arc">0%</span> 
                            </div>
                        </div>
                        
                        <div className="progress-bar-container">
                            <div
                                className="progress-bar-fill"
                                style={{ width: `0%` }}
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

                    {/* NEW: PRACTICE EXAM CARD */}
                    <div className="progress-card exam-card">
                        <div className="progress-header">
                            <h2>Practice Exams</h2>
                        </div>
                        <div className="practice-card-body">
                            <p>Test your knowledge with full-length simulated Network+ exams</p>
                            <div className="exam-types">
                                <div className="exam-type-badge">📝 Full Exam (90 questions)</div>
                                <div className="exam-type-badge">📚 Domain Practice (25 questions)</div>
                                <div className="exam-type-badge">⚡ Quick Quiz (15 questions)</div>
                            </div>
                            <button 
                                className="btn-start-practice"
                                onClick={() => navigate('/practice-exam-setup')}
                                style={{
                                    background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
                                    marginTop: '16px'
                                }}
                            >
                                <Target size={18} />
                                <span>Start Practice Exam</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Flashcard Stats Widget */}
                <section className="flashcard-stats-section">
                    <FlashcardStatsWidget />
                </section>

                {/* Exam Performance Analytics Widget */}
                <section className="exam-analytics-section">
                    <DomainPerformanceWidget />
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
                        {networkPlusLessons.map((lesson) => {
                            const isCompleted = completedLessons.includes(lesson.id);
                            const isLocked = false;

                            const domainConfig = getDomainConfig(lesson.domain);
                            const IconComponent = getLessonIcon(lesson.id);

                            const handleToggleComplete = async (e) => {
                                e.stopPropagation();
                                if (isCompleted) {
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
                                    <div className="tile-icon-section">
                                        <div className="lesson-icon" style={{ color: domainConfig.primary }}>
                                            <IconComponent size={32} strokeWidth={2} />
                                        </div>
                                        <input
                                            type="checkbox"
                                            className="completion-checkbox"
                                            checked={isCompleted}
                                            onChange={handleToggleComplete}
                                            disabled={isCompleted}
                                        />
                                    </div>

                                    <div className="lesson-number-badge" style={{
                                        backgroundColor: `${domainConfig.primary}15`,
                                        color: domainConfig.primary
                                    }}>
                                        Lesson {lesson.id}
                                    </div>

                                    <div className="tile-content">
                                        <h3 className="day-title">{lesson.title}</h3>
                                        <p className="lesson-description" style={{ color: domainConfig.primary }}>
                                            {lesson.domain}
                                        </p>
                                    </div>

                                    <div className="tile-actions">
                                        {isLocked ? (
                                            <button className="tile-btn btn-locked" disabled>
                                                <Lock size={18} /> Locked
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
        </>
    );
}

export default Dashboard;