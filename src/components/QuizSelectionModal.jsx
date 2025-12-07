import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Target, CheckCircle } from 'lucide-react';
import './QuizSelectionModal.css';

function QuizSelectionModal({ isOpen, onClose, courseId = 'network-plus' }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [lessons, setLessons] = useState([]);
  const [availableQuizNumbers, setAvailableQuizNumbers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dynamically load course data
  useEffect(() => {
    const loadCourseData = async () => {
      if (!isOpen) return;

      setLoading(true);
      try {
        let lessonsModule, quizzesModule;

        switch (courseId) {
          case 'network-plus':
            lessonsModule = await import('../courses/network-plus/data/lessons');
            quizzesModule = await import('../courses/network-plus/quizzes');
            break;
          case 'a-plus-core1':
            lessonsModule = await import('../courses/a-plus-core1/data/lessons');
            quizzesModule = await import('../courses/a-plus-core1/quizzes');
            break;
          case 'a-plus-core2':
            lessonsModule = await import('../courses/a-plus-core2/data/lessons');
            quizzesModule = await import('../courses/a-plus-core2/quizzes');
            break;
          case 'security-plus':
            lessonsModule = await import('../courses/security-plus/data/lessons');
            quizzesModule = await import('../courses/security-plus/quizzes');
            break;
          default:
            lessonsModule = await import('../courses/network-plus/data/lessons');
            quizzesModule = await import('../courses/network-plus/quizzes');
        }

        const loadedLessons = lessonsModule.networkPlusLessons ||
                            lessonsModule.aPlusCore1Lessons ||
                            lessonsModule.aPlusCore2Lessons ||
                            lessonsModule.securityPlusLessons ||
                            lessonsModule.default ||
                            [];

        setLessons(loadedLessons);
        setAvailableQuizNumbers(quizzesModule.getAvailableQuizzes());
      } catch (err) {
        console.error('Error loading course data:', err);
        setLessons([]);
        setAvailableQuizNumbers([]);
      } finally {
        setLoading(false);
      }
    };

    loadCourseData();
  }, [isOpen, courseId]);

  if (!isOpen) return null;

  if (loading) {
    return (
      <div className="quiz-modal-backdrop" onClick={onClose}>
        <div className="quiz-modal" onClick={(e) => e.stopPropagation()}>
          <div className="quiz-modal-header">
            <div className="modal-title">
              <Target size={24} />
              <h2>Loading...</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Filter lessons that have quizzes
  const lessonsWithQuizzes = lessons.filter(lesson =>
    availableQuizNumbers.includes(lesson.id)
  );

  // Filter based on search term
  const filteredLessons = lessonsWithQuizzes.filter(lesson =>
    lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lesson.id.toString().includes(searchTerm) ||
    lesson.domain.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group by domain/module
  const lessonsByModule = filteredLessons.reduce((acc, lesson) => {
    const module = lesson.domain || 'Other';
    if (!acc[module]) {
      acc[module] = [];
    }
    acc[module].push(lesson);
    return acc;
  }, {});

  const handleQuizSelect = (lessonId) => {
    onClose();
    navigate(`/course/${courseId}/lesson/${lessonId}?tab=quiz`);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="quiz-modal-backdrop" onClick={handleBackdropClick}>
      <div className="quiz-modal">
        <div className="quiz-modal-header">
          <div className="modal-title">
            <Target size={24} />
            <h2>Select a Quiz</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="quiz-modal-search">
          <input
            type="text"
            placeholder="Search by lesson number, title, or domain..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="modal-search-input"
          />
        </div>

        <div className="quiz-modal-stats">
          <div className="modal-stat">
            <span className="modal-stat-value">{availableQuizNumbers.length}</span>
            <span className="modal-stat-label">Total Quizzes</span>
          </div>
          <div className="modal-stat">
            <span className="modal-stat-value">{filteredLessons.length}</span>
            <span className="modal-stat-label">Showing</span>
          </div>
        </div>

        <div className="quiz-modal-content">
          {Object.entries(lessonsByModule).map(([module, moduleLessons]) => (
            <div key={module} className="quiz-module-group">
              <h3 className="module-header">{module}</h3>
              <div className="quiz-list">
                {moduleLessons.map(lesson => (
                  <button
                    key={lesson.id}
                    className="quiz-item"
                    onClick={() => handleQuizSelect(lesson.id)}
                  >
                    <div className="quiz-item-number">
                      Lesson {lesson.id}
                    </div>
                    <div className="quiz-item-info">
                      <div className="quiz-item-title">{lesson.title}</div>
                      <div className="quiz-item-meta">
                        <span className="quiz-meta-tag">{lesson.examObjective}</span>
                        <span className="quiz-meta-tag">{lesson.time}</span>
                      </div>
                    </div>
                    {lesson.completed && (
                      <div className="quiz-item-completed">
                        <CheckCircle size={20} />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {filteredLessons.length === 0 && (
            <div className="no-results">
              <p>No quizzes found matching "{searchTerm}"</p>
              <p>Try a different search term</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuizSelectionModal;
