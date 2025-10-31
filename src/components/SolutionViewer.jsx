import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { networkPlusLabs } from '../courses/network-plus/data/labs';
import { networkPlusLessons } from '../courses/network-plus/data/lessons';
import './SolutionViewer.css';

function SolutionViewer() {
  const { id } = useParams();
  const [content, setContent] = useState('');
  const lab = networkPlusLabs.find(l => l.id === parseInt(id));
  const lesson = lab ? networkPlusLessons.find(l => l.id === lab.lessonId) : null;

  useEffect(() => {
    if (lab) {
      // Load solution content
      fetch(lab.solutionPath)
        .then(res => res.text())
        .then(text => setContent(text))
        .catch(err => {
          console.error('Error loading solution:', err);
          setContent('# Solution not found\n\nThe solution for this lab has not been created yet.');
        });
    }
  }, [id, lab]);

  if (!lab) {
    return (
      <div className="solution-viewer">
        <header>
          <Link to="/" className="back">← Dashboard</Link>
        </header>
        <div className="solution-not-found">
          <h1>Solution Not Found</h1>
          <p>The solution you're looking for doesn't exist.</p>
          <Link to="/">
            <button className="btn-back">Back to Dashboard</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="solution-viewer">
      <header>
        <Link to={`/lab/${lab.id}`} className="back">← Back to Lab</Link>
      </header>

      <div className="solution-header-info">
        <div className="solution-badge">
          <span className="solution-icon">📝</span>
          <span className="solution-label">Answer Key</span>
        </div>
        <h1>{lab.title} - Solution</h1>
        <div className="solution-meta">
          <span className="difficulty difficulty-{lab.difficulty.toLowerCase()}">{lab.difficulty}</span>
          {lesson && <span className="lesson-ref">Lesson {lesson.id}: {lesson.title}</span>}
        </div>
      </div>

      <div className="solution-notice">
        <div className="notice-card">
          <div className="notice-icon">💡</div>
          <div className="notice-content">
            <h3>How to Use This Solution</h3>
            <p>
              This solution is meant to be a learning tool, not just an answer key.
              Compare your approach with the solution, understand the reasoning behind
              each step, and identify areas where you can improve.
            </p>
            <p>
              <strong>Key Tips:</strong> Focus on understanding WHY each step is important,
              not just copying the solution. If something doesn't make sense, go back to
              the lesson material and review the concepts.
            </p>
          </div>
        </div>
      </div>

      <div className="solution-content">
        <div className="markdown-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({node, children, ...props}) => <h1 {...props}>{children}</h1>,
              h2: ({node, children, ...props}) => <h2 {...props}>{children}</h2>,
              h3: ({node, children, ...props}) => <h3 {...props}>{children}</h3>,
              p: ({node, children, ...props}) => <p {...props}>{children}</p>,
              code: ({node, inline, children, ...props}) =>
                inline ? <code {...props}>{children}</code> : <pre><code {...props}>{children}</code></pre>,
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
      </div>

      <div className="solution-actions">
        <div className="next-steps-card">
          <h3>🎯 Next Steps</h3>
          <p>Now that you've reviewed the solution, consider these next steps:</p>
          <ul>
            <li>Try the lab again from scratch without looking at the solution</li>
            <li>Modify the lab with different requirements to practice variations</li>
            <li>Move on to the next lesson to build on these skills</li>
            <li>Create your own similar lab to reinforce the concepts</li>
          </ul>
        </div>
      </div>

      <div className="footer">
        <Link to={`/lab/${lab.id}`}>
          <button className="btn-back-lab">← Back to Lab</button>
        </Link>
        <Link to={`/lesson/${lab.lessonId}`}>
          <button className="btn-lesson">Back to Lesson {lab.lessonId}</button>
        </Link>
        <Link to="/">
          <button className="btn-dashboard">Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default SolutionViewer;
