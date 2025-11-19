import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { PlayCircle, LogOut, User, Lock, AlertCircle } from 'lucide-react';
import { networkPlusLessons } from '../courses/network-plus/data/lessons';
import { getDomainConfig, getLessonIcon } from '../courses/network-plus/data/domainConfig';
import { useAuth } from '../context/AuthContext';
import { useUserStats } from '../hooks/useUserStats';
import '../styles/Dashboard.css';

function Dashboard() {
    const { courseId } = useParams();
    const { user, signOut } = useAuth();
    const { progress, completeLesson } = useUserStats();
    const [error, setError] = useState(null);

    // Default to network-plus for backward compatibility
    const actualCourseId = courseId || 'network-plus';

    const completedLessons = progress.completedLessons || [];

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

            {/* Error Banner */}
            {error && (
                <div style={{
                    padding: '16px',
                    margin: '16px',
                    backgroundColor: '#fee',
                    border: '1px solid #fcc',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    color: '#c33'
                }}>
                    <AlertCircle size={24} />
                    <div>
                        <strong>Error:</strong> {error}
                    </div>
                    <button
                        onClick={() => setError(null)}
                        style={{
                            marginLeft: 'auto',
                            padding: '8px 16px',
                            background: 'white',
                            border: '1px solid #c33',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            color: '#c33'
                        }}
                    >
                        Dismiss
                    </button>
                </div>
            )}

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
                                    setError(null); // Clear any previous errors
                                    await completeLesson(lesson.id);
                                } catch (error) {
                                    console.error('Failed to complete lesson:', error);
                                    setError(`Failed to mark lesson ${lesson.id} as complete. ${error.message || 'Please check the console for details.'}`);
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
                                            <Link to={`/course/${actualCourseId}/lesson/${lesson.id}`} className="tile-btn-link">
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

                {/* Support Footer */}
                <div style={{
                    textAlign: 'center',
                    padding: '2rem 1rem',
                    marginTop: '3rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '0.9rem'
                }}>
                    Need help? Contact support at{' '}
                    <a
                        href="mailto:hello@certifystack.com"
                        style={{
                            color: '#00d9ff',
                            textDecoration: 'none',
                            fontWeight: '500'
                        }}
                    >
                        hello@certifystack.com
                    </a>
                </div>
            </div>
    );
}

export default Dashboard;