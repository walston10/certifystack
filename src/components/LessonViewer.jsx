import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { networkPlusLessons } from '../data/courses/network-plus/lessons';
import FlashcardActivity from './FlashcardActivity';
import QuizActivity from './QuizActivity';
import OSIActivity from './OSIActivity';
import TopologyActivity from './TopologyActivity';
import '../styles/LessonViewer.css';

function LessonViewer() {
  const { id } = useParams();
  const [content, setContent] = useState('');
  const [labContent, setLabContent] = useState('');
  const [activeTab, setActiveTab] = useState('content');
  const lesson = networkPlusLessons.find(l => l.id === parseInt(id));

  useEffect(() => {
    // Load main lesson content
    fetch(`/content/network-plus/lesson-${id.padStart(2, '0')}.md`)
      .then(res => res.text())
      .then(text => {
        // Split content and labs
        const labMarker = '## Hands-On Lab:';
        const labIndex = text.indexOf(labMarker);
        
        if (labIndex !== -1) {
          // Extract labs section
          const mainContent = text.substring(0, labIndex);
          const labs = text.substring(labIndex);
          setContent(mainContent);
          setLabContent(labs);
        } else {
          // No labs in this lesson
          setContent(text);
          setLabContent('');
        }
      })
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
        
        {/* Only show Lab tab if lesson has labs */}
        {labContent && (
          <button 
            className={activeTab === 'lab' ? 'active' : ''}
            onClick={() => setActiveTab('lab')}
          >
            🔬 Lab
          </button>
        )}
      </div>

      <div className="lesson-content">
        {activeTab === 'content' && (
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
        )}

        {activeTab === 'activity' && renderActivity()}
        
        {activeTab === 'flashcards' && <FlashcardActivity lessonId={parseInt(id)} />}
        
        {activeTab === 'quiz' && <QuizActivity lessonId={parseInt(id)} />}
        
        {activeTab === 'lab' && labContent && (
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
              {labContent}
            </ReactMarkdown>
          </div>
        )}
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