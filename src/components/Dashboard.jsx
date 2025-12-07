import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PlayCircle, LogOut, User, Lock, AlertCircle, BookOpen } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useUserStats } from '../hooks/useUserStats';
import '../styles/Dashboard.css';

// Default domain config for courses that don't have domainConfig yet
const defaultDomainConfig = {
    primary: '#00d9ff',
    secondary: '#0066ff',
    glow: 'rgba(0, 217, 255, 0.3)'
};

function Dashboard() {
    const { courseId } = useParams();
    const { user, signOut } = useAuth();
    const { progress, completeLesson } = useUserStats();
    const [error, setError] = useState(null);
    const [lessons, setLessons] = useState([]);
    const [courseConfig, setCourseConfig] = useState(null);
    const [loading, setLoading] = useState(true);

    // Default to network-plus for backward compatibility
    const actualCourseId = courseId || 'network-plus';

    // Dynamically load course data based on courseId
    useEffect(() => {
        const loadCourseData = async () => {
            setLoading(true);
            try {
                let lessonsModule, configModule;

                switch (actualCourseId) {
                    case 'network-plus':
                        lessonsModule = await import('../courses/network-plus/data/lessons');
                        configModule = await import('../courses/network-plus/data/domainConfig');
                        break;
                    case 'a-plus-core1':
                        lessonsModule = await import('../courses/a-plus-core1/data/lessons');
                        configModule = null; // No domainConfig yet for A+ courses
                        break;
                    case 'a-plus-core2':
                        lessonsModule = await import('../courses/a-plus-core2/data/lessons');
                        configModule = null; // No domainConfig yet for A+ courses
                        break;
                    case 'security-plus':
                        lessonsModule = await import('../courses/security-plus/data/lessons');
                        configModule = null; // No domainConfig yet for Security+ courses
                        break;
                    default:
                        lessonsModule = await import('../courses/network-plus/data/lessons');
                        configModule = await import('../courses/network-plus/data/domainConfig');
                }

                // Get lessons array - handle different export names
                const loadedLessons = lessonsModule.networkPlusLessons ||
                                     lessonsModule.aPlusCore1Lessons ||
                                     lessonsModule.aPlusCore2Lessons ||
                                     lessonsModule.securityPlusLessons ||
                                     lessonsModule.default ||
                                     [];

                setLessons(loadedLessons);
                setCourseConfig(configModule);
            } catch (err) {
                console.error('Error loading course data:', err);
                setLessons([]);
                setCourseConfig(null);
            } finally {
                setLoading(false);
            }
        };

        loadCourseData();
    }, [actualCourseId]);

    const completedLessons = progress.completedLessons || [];

    // Get course display name and description
    const getCourseInfo = () => {
        switch (actualCourseId) {
            case 'network-plus':
                return {
                    name: 'Network+ N10-009',
                    subtitle: `${lessons.length} comprehensive lessons covering all Network+ N10-009 exam objectives`
                };
            case 'a-plus-core1':
                return {
                    name: 'A+ Core 1 (220-1101)',
                    subtitle: `${lessons.length} lessons covering A+ Core 1 exam objectives`
                };
            case 'a-plus-core2':
                return {
                    name: 'A+ Core 2 (220-1102)',
                    subtitle: `${lessons.length} lessons covering A+ Core 2 exam objectives`
                };
            case 'security-plus':
                return {
                    name: 'Security+ (SY0-701)',
                    subtitle: `${lessons.length} lessons covering Security+ SY0-701 exam objectives`
                };
            default:
                return {
                    name: 'Course Curriculum',
                    subtitle: `${lessons.length} lessons`
                };
        }
    };

    // Get domain config for a lesson
    const getDomainConfigForLesson = (lesson) => {
        if (courseConfig && courseConfig.getDomainConfig) {
            return courseConfig.getDomainConfig(lesson.domain);
        }
        return defaultDomainConfig;
    };

    // Get icon component for a lesson
    const getIconForLesson = (lessonId) => {
        if (courseConfig && courseConfig.getLessonIcon) {
            return courseConfig.getLessonIcon(lessonId);
        }
        return BookOpen; // Default icon
    };

    const courseInfo = getCourseInfo();

    if (loading) {
        return (
            <div className="dashboard">
                <header className="header">
                    <div className="logo">
                        <span className="logo-icon">CertifyStack</span>
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
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                    <h2>Loading course...</h2>
                </div>
            </div>
        );
    }

    if (lessons.length === 0) {
        return (
            <div className="dashboard">
                <header className="header">
                    <div className="logo">
                        <span className="logo-icon">CertifyStack</span>
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
                <section className="lessons-section">
                    <div className="section-header">
                        <h2 className="section-title">{courseInfo.name}</h2>
                        <p className="section-subtitle">
                            Course content is coming soon! Check back later.
                        </p>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="dashboard">
            {/* Header */}
            <header className="header">
                <div className="logo">
                    <span className="logo-icon">CertifyStack</span>
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
                        <h2 className="section-title">{courseInfo.name}</h2>
                        <p className="section-subtitle">
                            {courseInfo.subtitle}
                        </p>
                    </div>

                    <div className="daily-tiles-grid">
                        {lessons.map((lesson) => {
                            const isCompleted = completedLessons.includes(lesson.id);
                            const isLocked = false;

                            const domainConfig = getDomainConfigForLesson(lesson);
                            const IconComponent = getIconForLesson(lesson.id);

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
