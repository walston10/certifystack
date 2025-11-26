import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import './SolutionViewer.css';

function SolutionViewer() {
  const { courseId, labId, id } = useParams();
  const [content, setContent] = useState('');
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Support both old (id) and new (labId) param names for backward compatibility
  const actualLabId = labId || id;
  const actualCourseId = courseId || 'network-plus'; // Default to network-plus for old URLs

  // Dynamically load course data based on courseId
  useEffect(() => {
    const loadCourseData = async () => {
      setLoading(true);
      try {
        let labsModule, lessonsModule;

        switch (actualCourseId) {
          case 'network-plus':
            labsModule = await import('../courses/network-plus/data/labs');
            lessonsModule = await import('../courses/network-plus/data/lessons');
            break;
          case 'a-plus-core1':
            labsModule = await import('../courses/a-plus-core1/data/labs');
            lessonsModule = await import('../courses/a-plus-core1/data/lessons');
            break;
          case 'a-plus-core2':
            labsModule = await import('../courses/a-plus-core2/data/labs');
            lessonsModule = await import('../courses/a-plus-core2/data/lessons');
            break;
          default:
            labsModule = await import('../courses/network-plus/data/labs');
            lessonsModule = await import('../courses/network-plus/data/lessons');
        }

        // Get labs array - handle different export names
        const labs = labsModule.networkPlusLabs ||
                    labsModule.aPlusCore1Labs ||
                    labsModule.aPlusCore2Labs ||
                    labsModule.default ||
                    [];

        // Get lessons array - handle different export names
        const lessons = lessonsModule.networkPlusLessons ||
                       lessonsModule.aPlusCore1Lessons ||
                       lessonsModule.aPlusCore2Lessons ||
                       lessonsModule.default ||
                       [];

        setCourseData({
          labs,
          lessons
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

  // Get lab and lesson info from loaded course data
  const lab = courseData?.labs?.find(l => l.id === parseInt(actualLabId));
  const lesson = lab && courseData?.lessons ? courseData.lessons.find(l => l.id === lab.lessonId) : null;

  useEffect(() => {
    if (lab) {
      // Load solution content from course-specific directory
      // Use lab.solutionPath if it's a full path, otherwise construct from courseId
      const solutionPath = lab.solutionPath || `/content/${actualCourseId}/solutions/lab-${actualLabId.padStart(2, '0')}-solution.md`;
      fetch(solutionPath)
        .then(res => res.text())
        .then(text => setContent(text))
        .catch(err => {
          console.error('Error loading solution:', err);
          setContent('# Solution not found\n\nThe solution for this lab has not been created yet.');
        });
    }
  }, [actualLabId, lab, actualCourseId]);

  // Show loading state while course data is being fetched
  if (loading) {
    return (
      <div className="solution-viewer">
        <header>
          <Link to="/" className="back">← Dashboard</Link>
        </header>
        <div className="loading-state" style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Loading solution...</h2>
        </div>
      </div>
    );
  }

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
        <Link to={`/course/${actualCourseId}/lab/${lab.id}`} className="back">← Back to Lab</Link>
      </header>

      <div className="solution-header-info">
        <div className="solution-badge">
          <span className="solution-icon">Answer Key</span>
          <span className="solution-label">Answer Key</span>
        </div>
        <h1>{lab.title} - Solution</h1>
        <div className="solution-meta">
          <span className={`difficulty difficulty-${lab.difficulty.toLowerCase()}`}>{lab.difficulty}</span>
          {lesson && <span className="lesson-ref">Lesson {lesson.id}: {lesson.title}</span>}
        </div>
      </div>

      <div className="solution-notice">
        <div className="notice-card">
          <div className="notice-icon">Tip</div>
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
          <h3>Next Steps</h3>
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
        <Link to={`/course/${actualCourseId}/lab/${lab.id}`}>
          <button className="btn-back-lab">← Back to Lab</button>
        </Link>
        <Link to={`/course/${actualCourseId}/lesson/${lab.lessonId}`}>
          <button className="btn-lesson">Back to Lesson {lab.lessonId}</button>
        </Link>
        <Link to="/dashboard">
          <button className="btn-dashboard">Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default SolutionViewer;
