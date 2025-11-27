import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import './LabViewer.css';

function LabViewer() {
  const { courseId, labId, id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [showSolutionWarning, setShowSolutionWarning] = useState(false);
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
          lessons,
          getLabById: labsModule.getLabById
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
      // Load lab content from course-specific directory
      // Use lab.labPath if it's a full path, otherwise construct from courseId
      const labPath = lab.labPath || `/content/${actualCourseId}/labs/lab-${actualLabId.padStart(2, '0')}.md`;
      fetch(labPath)
        .then(res => res.text())
        .then(text => setContent(text))
        .catch(err => {
          console.error('Error loading lab:', err);
          setContent('# Lab content not found\n\nThis lab has not been created yet.');
        });
    }
  }, [actualLabId, lab, actualCourseId]);

  // Show loading state while course data is being fetched
  if (loading) {
    return (
      <div className="lab-viewer">
        <header>
          <Link to="/" className="back">← Dashboard</Link>
        </header>
        <div className="loading-state" style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Loading lab...</h2>
        </div>
      </div>
    );
  }

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

  const handleViewSolution = () => {
    navigate(`/course/${actualCourseId}/solution/${lab.id}`);
  };

  return (
    <div className="lab-viewer">
      <header>
        <Link to={`/course/${actualCourseId}/lesson/${lab.lessonId}`} className="back">← Back to Lesson {lab.lessonId}</Link>
      </header>

      <div className="lab-header-info">
        <div className="lab-badge">
          <span className="lab-icon">Lab</span>
          <span className="lab-label">Hands-On Lab {lab.id}</span>
        </div>
        <h1>{lab.title}</h1>
        <div className="lab-meta">
          <span className={`difficulty difficulty-${lab.difficulty.toLowerCase()}`}>{lab.difficulty}</span>
          <span className="time">{lab.estimatedTime}</span>
          {lesson && <span className="lesson-ref">Related: Lesson {lesson.id}</span>}
        </div>
      </div>

      <div className="lab-objectives">
        <div className="objectives-card">
          <h3>Learning Objectives</h3>
          <ul>
            {lab.objectives.map((obj, idx) => (
              <li key={idx}>{obj}</li>
            ))}
          </ul>
        </div>

        <div className="skills-card">
          <h3>Skills You'll Gain</h3>
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
      </div>

      <div className="lab-actions">
        <div className="action-card solution-card">
          <h3>Ready to Check Your Work?</h3>
          <p>Before viewing the solution, make sure you've attempted the lab on your own.</p>
          <button
            className="btn-solution"
            onClick={() => setShowSolutionWarning(true)}
          >
            View Solution
          </button>
        </div>
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

      <div className="footer">
        <Link to={`/course/${actualCourseId}/lesson/${lab.lessonId}`}>
          <button className="btn-back">← Back to Lesson</button>
        </Link>
        <Link to="/dashboard">
          <button className="btn-dashboard">Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default LabViewer;
