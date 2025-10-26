import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { networkPlusLabs } from '../data/courses/network-plus/labs';
import { networkPlusLessons } from '../data/courses/network-plus/lessons';
import './LabViewer.css';

function LabViewer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [showSolutionWarning, setShowSolutionWarning] = useState(false);
  const lab = networkPlusLabs.find(l => l.id === parseInt(id));
  const lesson = lab ? networkPlusLessons.find(l => l.id === lab.lessonId) : null;

  useEffect(() => {
    if (lab) {
      // Load lab content
      fetch(lab.labPath)
        .then(res => res.text())
        .then(text => setContent(text))
        .catch(err => {
          console.error('Error loading lab:', err);
          setContent('# Lab content not found\n\nThis lab has not been created yet.');
        });
    }
  }, [id, lab]);

  if (!lab) {
    return (
      <div className="lab-viewer">
        <header>
          <Link to="/" className="back">← Dashboard</Link>
        </header>
        <div className="lab-not-found">
          <h1>Lab Not Found</h1>
          <p>The lab you're looking for doesn't exist.</p>
          <Link to="/">
            <button className="btn-back">Back to Dashboard</button>
          </Link>
        </div>
      </div>
    );
  }

  const handleMarkComplete = () => {
    // TODO: Implement progress tracking when authentication is added
    alert('Lab marked as complete! (Progress tracking coming soon)');
  };

  const handleViewSolution = () => {
    navigate(`/solution/${lab.id}`);
  };

  return (
    <div className="lab-viewer">
      <header>
        <Link to={`/lesson/${lab.lessonId}`} className="back">← Back to Lesson {lab.lessonId}</Link>
      </header>

      <div className="lab-header-info">
        <div className="lab-badge">
          <span className="lab-icon">🧪</span>
          <span className="lab-label">Hands-On Lab {lab.id}</span>
        </div>
        <h1>{lab.title}</h1>
        <div className="lab-meta">
          <span className="difficulty difficulty-{lab.difficulty.toLowerCase()}">{lab.difficulty}</span>
          <span className="time">⏱️ {lab.estimatedTime}</span>
          <span className="xp">⭐ {lab.xpReward} XP</span>
          {lesson && <span className="lesson-ref">Related: Lesson {lesson.id}</span>}
        </div>
      </div>

      <div className="lab-objectives">
        <div className="objectives-card">
          <h3>🎯 Learning Objectives</h3>
          <ul>
            {lab.objectives.map((obj, idx) => (
              <li key={idx}>{obj}</li>
            ))}
          </ul>
        </div>

        <div className="skills-card">
          <h3>💪 Skills You'll Gain</h3>
          <div className="skill-tags">
            {lab.skillsGained.map((skill, idx) => (
              <span key={idx} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="lab-content">
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
      </div>

      <div className="lab-actions">
        <div className="action-card solution-card">
          <h3>📝 Ready to Check Your Work?</h3>
          <p>Before viewing the solution, make sure you've attempted the lab on your own.</p>
          <button
            className="btn-solution"
            onClick={() => setShowSolutionWarning(true)}
          >
            View Solution
          </button>
        </div>

        <div className="action-card completion-card">
          <h3>✅ Finished the Lab?</h3>
          <p>Mark this lab as complete to track your progress and earn XP.</p>
          <button
            className="btn-complete"
            onClick={handleMarkComplete}
          >
            Mark Complete ({lab.xpReward} XP)
          </button>
        </div>
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

      <div className="footer">
        <Link to={`/lesson/${lab.lessonId}`}>
          <button className="btn-back">← Back to Lesson</button>
        </Link>
        <Link to="/">
          <button className="btn-dashboard">Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default LabViewer;
