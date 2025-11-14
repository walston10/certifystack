import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { networkPlusLessons } from '../courses/network-plus/data/lessons';
import { getLabByLessonId } from '../courses/network-plus/data/labs';
import { getQuizByLesson } from '../courses/network-plus/quizzes';
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

  // Support both old (id) and new (lessonId) param names for backward compatibility
  const actualLessonId = lessonId || id;
  const actualCourseId = courseId || 'network-plus'; // Default to network-plus for old URLs

  const [activeTab, setActiveTab] = useState(() => {
    const params = new URLSearchParams(location.search);
    return params.get('tab') || 'content';
  });
  const [showSolutionWarning, setShowSolutionWarning] = useState(false);
  const lesson = networkPlusLessons.find(l => l.id === parseInt(actualLessonId));
  const labInfo = getLabByLessonId(parseInt(actualLessonId));
  const quizInfo = getQuizByLesson(parseInt(actualLessonId));
  const hasActivity = [1, 2].includes(parseInt(actualLessonId));

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
  }, [id, labInfo, location.search]);

  // Activities are now dynamically loaded via ActivityLoader
  // No need for manual switch statement anymore!

  const handleViewSolution = () => {
    navigate(`/solution/${labInfo.id}`);
  };

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
          📖 Content
        </button>

        {labInfo && (
          <button
            className={activeTab === 'lab' ? 'active' : ''}
            onClick={() => setActiveTab('lab')}
          >
            🧪 Lab
          </button>
        )}

        {hasActivity && (
          <button
            className={activeTab === 'activity' ? 'active' : ''}
            onClick={() => setActiveTab('activity')}
          >
            🎮 Activity
          </button>
        )}

        <button
          className={activeTab === 'flashcards' ? 'active' : ''}
          onClick={() => setActiveTab('flashcards')}
        >
          🃏 Flashcards
        </button>
        
        {quizInfo && (
          <button
            className={activeTab === 'quiz' ? 'active' : ''}
            onClick={() => setActiveTab('quiz')}
          >
            ✅ Quiz
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
                  <span className="time">⏱️ {labInfo.estimatedTime}</span>
                  <span className="xp">⭐ {labInfo.xpReward} XP</span>
                </div>
                <button className="btn-solution" onClick={() => setShowSolutionWarning(true)}>
                  📝 View Solution
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
          <ActivityLoader courseId="network-plus" lessonId={parseInt(actualLessonId)} />
        )}

        {activeTab === 'flashcards' && (
          isContentLocked(parseInt(actualLessonId)) ? (
            <LockedContent type="flashcards" itemNumber={parseInt(actualLessonId)} />
          ) : (
            <FlashcardActivity lessonId={parseInt(actualLessonId)} />
          )
        )}

        {activeTab === 'quiz' && (
          isContentLocked(parseInt(actualLessonId)) ? (
            <LockedContent type="quiz" itemNumber={parseInt(actualLessonId)} />
          ) : (
            <QuizActivity lessonId={parseInt(actualLessonId)} />
          )
        )}
      </div>

      <div className="footer">
        {parseInt(actualLessonId) < networkPlusLessons.length && (
          <Link to={`/course/${actualCourseId}/lesson/${parseInt(actualLessonId) + 1}`}>
            <button className="btn-next">Next Lesson →</button>
          </Link>
        )}
      </div>

      {showSolutionWarning && (
        <div className="modal-overlay" onClick={() => setShowSolutionWarning(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>⚠️ Before You Continue...</h2>
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