import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { networkPlusLessons } from '../data/courses/network-plus/lessons';
import { networkPlusLabs } from '../data/courses/network-plus/labs';
import FlashcardActivity from './FlashcardActivity';
import QuizActivity from './QuizActivity';
import OSIActivity from './OSIActivity';
import TopologyActivity from './TopologyActivity';
import '../styles/LessonViewer.css';

function LessonViewer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [activeTab, setActiveTab] = useState('content');
  const lesson = networkPlusLessons.find(l => l.id === parseInt(id));
  const labInfo = networkPlusLabs.find(lab => lab.lessonId === parseInt(id));

  useEffect(() => {
    // Load main lesson content from new lessons/ subdirectory
    fetch(`/content/network-plus/lessons/lesson-${id.padStart(2, '0')}.md`)
      .then(res => res.text())
      .then(text => setContent(text))
      .catch(err => console.error('Error loading lesson:', err));
  }, [id]);

  // Determine which activity component to show based on lesson ID
  const renderActivity = () => {
    const lessonId = parseInt(id);
    
    switch(lessonId) {
      case 1:
        return <OSIActivity />;
      case 2:
        return <TopologyActivity />;
      // Add more cases as you create more lessons
      // case 3:
      //   return <RouterActivity />;
      // case 4:
      //   return <CablingActivity />;
      default:
        return (
          <div className="no-activity">
            <h2>🎮 Activity Coming Soon!</h2>
            <p>An interactive activity for this lesson is under development.</p>
          </div>
        );
    }
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

        <button
          className={activeTab === 'activity' ? 'active' : ''}
          onClick={() => setActiveTab('activity')}
        >
          🎮 Activity
        </button>

        <button
          className={activeTab === 'flashcards' ? 'active' : ''}
          onClick={() => setActiveTab('flashcards')}
        >
          🃏 Flashcards
        </button>

        <button
          className={activeTab === 'quiz' ? 'active' : ''}
          onClick={() => setActiveTab('quiz')}
        >
          ✅ Quiz
        </button>
      </div>

      <div className="lesson-content">
        {activeTab === 'content' && (
          <>
            <div className="markdown-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  h1: ({node, ...props}) => <h1 {...props} />,
                  h2: ({node, ...props}) => <h2 {...props} />,
                  h3: ({node, ...props}) => <h3 {...props} />,
                  p: ({node, ...props}) => <p {...props} />,
                  code: ({node, inline, ...props}) =>
                    inline ? <code {...props} /> : <pre><code {...props} /></pre>,
                  a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" {...props} />,
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

            {/* Lab Callout Section */}
            {labInfo && (
              <div className="lesson-lab-section">
                <div className="lab-callout">
                  <h2>🧪 Hands-On Lab Available</h2>
                  <div className="lab-info">
                    <div className="lab-details">
                      <h3>{labInfo.title}</h3>
                      <div className="lab-meta">
                        <span className={`difficulty difficulty-${labInfo.difficulty.toLowerCase()}`}>
                          {labInfo.difficulty}
                        </span>
                        <span className="time">⏱️ {labInfo.estimatedTime}</span>
                        <span className="xp">⭐ {labInfo.xpReward} XP</span>
                      </div>
                      <p><strong>You'll Practice:</strong></p>
                      <ul>
                        {labInfo.objectives.map((obj, idx) => (
                          <li key={idx}>{obj}</li>
                        ))}
                      </ul>
                    </div>
                    <button
                      className="start-lab-btn"
                      onClick={() => navigate(`/lab/${labInfo.id}`)}
                    >
                      Start Lab →
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {activeTab === 'activity' && renderActivity()}

        {activeTab === 'flashcards' && <FlashcardActivity lessonId={parseInt(id)} />}

        {activeTab === 'quiz' && <QuizActivity lessonId={parseInt(id)} />}
      </div>

      <div className="footer">
        <button className="btn-complete">✓ Mark Complete</button>
        {parseInt(id) < networkPlusLessons.length && (
          <Link to={`/lesson/${parseInt(id) + 1}`}>
            <button className="btn-next">Next Lesson →</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default LessonViewer;