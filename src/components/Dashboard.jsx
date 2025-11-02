import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, LogOut, User, Lock } from 'lucide-react'; // Added Lock icon
import { networkPlusLessons } from '../courses/network-plus/data/lessons';
import { getDomainConfig, getLessonIcon } from '../courses/network-plus/data/domainConfig';
import { useAuth } from '../context/AuthContext';
import { useUserStats } from '../hooks/useUserStats';
import FlashcardPracticeModal from './FlashcardPracticeModal';
import FlashcardStatsWidget from './FlashcardStatsWidget';
import '../styles/Dashboard.css'; // Your main CSS file

// --- NEW COMPONENT: Focus Bar (Purely visual header element) ---
const FocusBar = () => (
    // The CSS for .focus-bar (fixed position) must be in Dashboard.css
    <div className="focus-bar" /> 
);

// --- NEW COMPONENT: SVG Gradient for Circular Arc ---
// This SVG gradient must be defined once outside the main render loop.
const ProgressGradient = () => (
    // This is the SVG required for the ring-fill stroke gradient
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
        // Function to handle the count-up animation for hero stats
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

        // 1. Run Hero Stat Animations
        animateCounter(totalLessonsRef.current, networkPlusLessons.length);
        animateCounter(completedRef.current, completed);
        animateCounter(daysRemainingRef.current, daysRemaining);

        // 2. Run Circular Progress Arc Animation
        const arcContainer = progressArcRef.current;
        if (arcContainer) {
            const radius = 45; 
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (progressPercentRounded / 100) * circumference;
            
            const ringFill = arcContainer.querySelector('.ring-fill');
            const percentageText = arcContainer.querySelector('.progress-percentage-arc');

            // Set initial state and trigger transition
            ringFill.style.strokeDasharray = circumference;
            ringFill.style.strokeDashoffset = circumference; 

            setTimeout(() => {
                ringFill.style.strokeDashoffset = offset;
            }, 100);
            
            // Animate percentage text inside the circle
            animateCounter(percentageText, progressPercentRounded); 

            // Make sure flat bar also transitions
            const flatBar = document.querySelector('.progress-bar-fill');
            if (flatBar) {
                flatBar.style.width = `${progressPercent}%`;
            }
        }
    }, [completed, daysRemaining, progressPercentRounded, progressPercent]);
    // ----------------------------------------------------------------

    return (
        <>
            <FocusBar />
            <ProgressGradient /> {/* Invisible SVG for the gradient definition */}

            <div className="dashboard">
                {/* Header (Minimal changes for style/logic separation) */}
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
                            {/* Stats now use refs for animated count-up */}
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

                {/* Progress Section (Incorporates Circular Arc) */}
                <section className="progress-section">
                    <div className="progress-card">
                        <div className="progress-header">
                            <h2>Your Progress</h2>
                            
                            {/* NEW: CIRCULAR PROGRESS ARC */}
                            <div className="circular-progress-container" ref={progressArcRef}>
                                <svg className="progress-ring" width="100" height="100">
                                    {/* Background ring */}
                                    <circle className="ring-bg" cx="50" cy="50" r="45"></circle>
                                    {/* Fill ring (stroke is defined by the SVG gradient) */}
                                    <circle className="ring-fill" cx="50" cy="50" r="45"></circle>
                                </svg>
                                {/* Percentage text positioned over the arc, animated by JS */}
                                <span className="progress-percentage-arc">0%</span> 
                            </div>

                        </div>
                        
                        {/* Flat progress bar remains for secondary display */}
                        <div className="progress-bar-container">
                            <div
                                className="progress-bar-fill"
                                style={{ width: `0%` }} /* Set initial width to 0% for animation */
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

                {/* Lessons Grid (Tile Tilt/Glow CSS is in Dashboard.css) */}
                <section className="lessons-section">
                    <div className="section-header">
                        <h2 className="section-title">Course Curriculum</h2>
                        <p className="section-subtitle">
                            30 comprehensive lessons covering all Network+ N10-009 exam objectives
                        </p>
                    </div>
                    
                    <div className="daily-tiles-grid">
                        {networkPlusLessons.map((lesson, index) => {
                            const isCompleted = completedLessons.includes(lesson.id);
                            // LOGIC CHANGE: Lock if the *previous* lesson hasn't been completed.
                            // If index is 0 (first lesson), it is never locked.
                            const previousLessonId = index > 0 ? networkPlusLessons[index - 1].id : null;
                            const isPreviousCompleted = previousLessonId ? completedLessons.includes(previousLessonId) : true;
                            const isLocked = !isPreviousCompleted && index > 0;
                            
                            const domainConfig = getDomainConfig(lesson.domain);
                            const IconComponent = getLessonIcon(lesson.id);

                            const handleToggleComplete = async (e) => {
                                e.stopPropagation();
                                if (isCompleted || isLocked) { 
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
                                        // Domain colors drive the tilt/glow effect colors via CSS variables
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
                                            disabled={isLocked || isCompleted} // Prevent toggling if locked OR already completed
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