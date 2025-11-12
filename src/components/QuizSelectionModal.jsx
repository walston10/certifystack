import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Target, CheckCircle } from 'lucide-react';
import { networkPlusLessons } from '../courses/network-plus/data/lessons';
import { getAvailableQuizzes } from '../courses/network-plus/quizzes';
import './QuizSelectionModal.css';

function QuizSelectionModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const availableQuizNumbers = getAvailableQuizzes();

  if (!isOpen) return null;

  // Filter lessons that have quizzes
  const lessonsWithQuizzes = networkPlusLessons.filter(lesson =>
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

  const handleQuizSelect = (lessonId, courseId = 'network-plus') => {
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
          {Object.entries(lessonsByModule).map(([module, lessons]) => (
            <div key={module} className="quiz-module-group">
              <h3 className="module-header">{module}</h3>
              <div className="quiz-list">
                {lessons.map(lesson => (
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
