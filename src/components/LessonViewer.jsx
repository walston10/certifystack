import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { supabase } from '../lib/supabase';
import FlashcardActivity from './FlashcardActivity';
import QuizActivity from './QuizActivity';
import ActivityLoader from './activities/ActivityLoader';
import LockedContent from './LockedContent';
import '../styles/LessonViewer.css';

function LessonViewer() {
  const { courseId, lessonId, id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [labContent, setLabContent] = useState('');
  const [isPremium, setIsPremium] = useState(false);
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Support both old (id) and new (lessonId) param names for backward compatibility
  const actualLessonId = lessonId || id;
  const actualCourseId = courseId || 'network-plus'; // Default to network-plus for old URLs

  const [activeTab, setActiveTab] = useState(() => {
    const params = new URLSearchParams(location.search);
    return params.get('tab') || 'content';
  });
  const [showSolutionWarning, setShowSolutionWarning] = useState(false);

  // Dynamically load course data based on courseId
  useEffect(() => {
    const loadCourseData = async () => {
      setLoading(true);
      try {
        let lessonsModule, labsModule, quizzesModule;

        switch (actualCourseId) {
          case 'network-plus':
            lessonsModule = await import('../courses/network-plus/data/lessons');
            labsModule = await import('../courses/network-plus/data/labs');
            quizzesModule = await import('../courses/network-plus/quizzes');
            break;
          case 'a-plus-core1':
            lessonsModule = await import('../courses/a-plus-core1/data/lessons');
            labsModule = await import('../courses/a-plus-core1/data/labs');
            quizzesModule = await import('../courses/a-plus-core1/quizzes');
            break;
          case 'a-plus-core2':
            lessonsModule = await import('../courses/a-plus-core2/data/lessons');
            labsModule = await import('../courses/a-plus-core2/data/labs');
            quizzesModule = await import('../courses/a-plus-core2/quizzes');
            break;
          default:
            // Default to network-plus
            lessonsModule = await import('../courses/network-plus/data/lessons');
            labsModule = await import('../courses/network-plus/data/labs');
            quizzesModule = await import('../courses/network-plus/quizzes');
        }

        // Get lessons array - handle different export names
        const lessons = lessonsModule.networkPlusLessons ||
                       lessonsModule.aPlusCore1Lessons ||
                       lessonsModule.aPlusCore2Lessons ||
                       lessonsModule.default ||
                       [];

        setCourseData({
          lessons,
          getLabByLessonId: labsModule.getLabByLessonId,
          getQuizByLesson: quizzesModule.getQuizByLesson,
          hasQuiz: quizzesModule.hasQuiz
        });
      } catch (err) {
        console.error('Error loading course data:', err);
        setCourseData(null);
      } finally {
        setLoading(false);
      }
    };

    loadCourseData();
  }, [actualCourseId]);

  // Get lesson and lab info from loaded course data
  const lesson = courseData?.lessons?.find(l => l.id === parseInt(actualLessonId));
  const labInfo = courseData?.getLabByLessonId ? courseData.getLabByLessonId(parseInt(actualLessonId)) : null;
  const quizInfo = courseData?.getQuizByLesson ? courseData.getQuizByLesson(parseInt(actualLessonId)) : null;

  // Temporarily hiding Activities tab during development - will re-enable once all activities are complete
  // Original code: const hasActivity = [1, 2, 3].includes(parseInt(actualLessonId));
  const hasActivity = false;

  // Check if content is locked (lesson > 3 and user is not premium)
  const isContentLocked = (lessonNumber) => {
    return lessonNumber > 3 && !isPremium;
  };

  useEffect(() => {
    // Load user's membership tier
    const loadMembershipTier = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          const { data: profile } = await supabase
            .from('profiles')
            .select('membership_tier')
            .eq('id', user.id)
            .single();

          setIsPremium(profile?.membership_tier === 'premium');
        }
      } catch (error) {
        console.error('Error loading membership tier:', error);
      }
    };

    loadMembershipTier();
  }, []);

  useEffect(() => {
    // Load main lesson content from course-specific directory
    fetch(`/content/${actualCourseId}/lessons/lesson-${actualLessonId.padStart(2, '0')}.md`)
      .then(res => res.ok ? res.text() : Promise.reject('Lesson content not found'))
      .then(text => setContent(text))
      .catch(err => console.error('Error loading lesson:', err));

    // If a lab exists for this lesson, pre-fetch its content
    if (labInfo && labInfo.labPath) {
      fetch(labInfo.labPath)
        .then(res => res.ok ? res.text() : Promise.reject('Lab content not found'))
        .then(text => setLabContent(text))
        .catch(err => {
          console.error('Error loading lab content:', err);
          setLabContent('# Lab Content Not Found\n\nThis lab has not been created or linked correctly yet.');
        });
    }

    // Update active tab if URL changes
    const queryParams = new URLSearchParams(location.search);
    const tabFromQuery = queryParams.get('tab');
    if (tabFromQuery) {
      setActiveTab(tabFromQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actualLessonId, labInfo, location.search, actualCourseId]);

  // Activities are now dynamically loaded via ActivityLoader
  // No need for manual switch statement anymore!

  const handleViewSolution = () => {
    navigate(`/course/${actualCourseId}/solution/${labInfo.id}`);
  };

  // Show loading state while course data is being fetched
  if (loading) {
    return (
      <div className="lesson-viewer">
        <header>
          <Link to="/" className="back">← Dashboard</Link>
        </header>
        <div className="loading-state" style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Loading lesson...</h2>
        </div>
      </div>
    );
  }

  // Show error state if lesson not found
  if (!lesson) {
    return (
      <div className="lesson-viewer">
        <header>
          <Link to="/" className="back">← Dashboard</Link>
        </header>
        <div className="error-state" style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Lesson Not Found</h2>
          <p>The lesson you're looking for doesn't exist or hasn't been created yet.</p>
          <Link to={`/course/${actualCourseId}/lessons`}>
            <button className="btn-back">Back to Course</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-viewer">
      <header>
        <Link to="/" className="back">← Dashboard</Link>
      </header>

      <div className="lesson-header-info">
        <h1>Lesson {lesson.id}: {lesson.title}</h1>
        <p className="meta">{lesson.time} • {lesson.domain}</p>
      </div>

      <div className="tabs">
        <button
          className={activeTab === 'content' ? 'active' : ''}
          onClick={() => setActiveTab('content')}
        >
          Content
        </button>

        {labInfo && (
          <button
            className={activeTab === 'lab' ? 'active' : ''}
            onClick={() => setActiveTab('lab')}
          >
            Lab
          </button>
        )}

        {hasActivity && (
          <button
            className={activeTab === 'activity' ? 'active' : ''}
            onClick={() => setActiveTab('activity')}
          >
            Activity
          </button>
        )}

        <button
          className={activeTab === 'flashcards' ? 'active' : ''}
          onClick={() => setActiveTab('flashcards')}
        >
          Flashcards
        </button>

        {quizInfo && (
          <button
            className={activeTab === 'quiz' ? 'active' : ''}
            onClick={() => setActiveTab('quiz')}
          >
            Quiz
          </button>
        )}
      </div>

      <div className="lesson-content">
        {activeTab === 'content' && (
          <>
            <div className="markdown-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  h1: ({node, children, ...props}) => <h1 {...props}>{children}</h1>,
                  h2: ({node, children, ...props}) => <h2 {...props}>{children}</h2>,
                  h3: ({node, children, ...props}) => <h3 {...props}>{children}</h3>,
                  p: ({node, children, ...props}) => <p {...props}>{children}</p>,
                  code: ({node, inline, ...props}) =>
                    inline ? <code {...props} /> : <pre><code {...props} /></pre>,
                  a: ({node, children, ...props}) => <a target="_blank" rel="noopener noreferrer" {...props}>{children}</a>,
                  table: ({node, ...props}) => (
                    <div className="table-wrapper">
                      <table {...props} />
                    </div>
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          </>
        )}

        {activeTab === 'lab' && labInfo && (
          isContentLocked(parseInt(actualLessonId)) ? (
            <LockedContent type="lab" itemNumber={parseInt(actualLessonId)} />
          ) : (
            <div className="lab-content-wrapper">
              <div className="lab-header">
                <h2>{labInfo.title}</h2>
                <div className="lab-meta">
                  <span className={`difficulty difficulty-${labInfo.difficulty.toLowerCase()}`}>
                    {labInfo.difficulty}
                  </span>
                  <span className="time">{labInfo.estimatedTime}</span>
                  <span className="xp">{labInfo.xpReward} XP</span>
                </div>
                <button className="btn-solution" onClick={() => setShowSolutionWarning(true)}>
                  View Solution
                </button>
              </div>
              <div className="markdown-content">
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                  {labContent}
                </ReactMarkdown>
              </div>
            </div>
          )
        )}

        {activeTab === 'activity' && (
          <ActivityLoader courseId={actualCourseId} lessonId={parseInt(actualLessonId)} />
        )}

        {activeTab === 'flashcards' && (
          isContentLocked(parseInt(actualLessonId)) ? (
            <LockedContent type="flashcards" itemNumber={parseInt(actualLessonId)} />
          ) : (
            <FlashcardActivity lessonId={parseInt(actualLessonId)} courseId={actualCourseId} />
          )
        )}

        {activeTab === 'quiz' && (
          isContentLocked(parseInt(actualLessonId)) ? (
            <LockedContent type="quiz" itemNumber={parseInt(actualLessonId)} />
          ) : (
            <QuizActivity lessonId={parseInt(actualLessonId)} courseId={actualCourseId} />
          )
        )}
      </div>

      <div className="footer">
        {courseData?.lessons && parseInt(actualLessonId) < courseData.lessons.length && (
          <Link to={`/course/${actualCourseId}/lesson/${parseInt(actualLessonId) + 1}`}>
            <button className="btn-next">Next Lesson →</button>
          </Link>
        )}
      </div>

      {showSolutionWarning && (
        <div className="modal-overlay" onClick={() => setShowSolutionWarning(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Before You Continue...</h2>
            <p>
              Viewing the solution before attempting the lab yourself will significantly
              reduce the learning value. The best way to learn is by struggling through
              problems and making mistakes.
            </p>
            <p>
              <strong>Have you genuinely attempted this lab?</strong>
            </p>
            <div className="modal-actions">
              <button
                className="btn-cancel"
                onClick={() => setShowSolutionWarning(false)}
              >
                No, Let Me Try First
              </button>
              <button
                className="btn-confirm"
                onClick={handleViewSolution}
              >
                Yes, Show Solution
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LessonViewer;
