import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLessonsWithFlashcards, getFlashcardsByLesson } from '../data/courses/network-plus/flashcards';
import '../styles/FlashcardPracticeModal.css';

function FlashcardPracticeModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [lessons, setLessons] = useState([]);
  const [selectedLessons, setSelectedLessons] = useState(new Set());

  useEffect(() => {
    if (isOpen) {
      setLessons(getLessonsWithFlashcards());
    }
  }, [isOpen]);

  const handleToggleLesson = (lessonId) => {
    const newSelection = new Set(selectedLessons);
    if (newSelection.has(lessonId)) {
      newSelection.delete(lessonId);
    } else {
      newSelection.add(lessonId);
    }
    setSelectedLessons(newSelection);
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allLessonIds = new Set(lessons.map(l => l.id));
      setSelectedLessons(allLessonIds);
    } else {
      setSelectedLessons(new Set());
    }
  };

  const handleStartSession = () => {
    let bulkCards = [];
    selectedLessons.forEach(lessonId => {
      bulkCards = [...bulkCards, ...getFlashcardsByLesson(lessonId)];
    });

    // Shuffle the combined deck
    for (let i = bulkCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [bulkCards[i], bulkCards[j]] = [bulkCards[j], bulkCards[i]];
    }

    onClose();
    // We'll create the /practice/flashcards route and view in the next step
    // For now, this will navigate to a page that needs to be created.
    navigate('/practice/flashcards', { state: { cards: bulkCards } });
  };

  if (!isOpen) {
    return null;
  }

  const totalSelectedCards = lessons
    .filter(l => selectedLessons.has(l.id))
    .reduce((sum, l) => sum + l.cardCount, 0);

  const isAllSelected = selectedLessons.size > 0 && selectedLessons.size === lessons.length;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content flashcard-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Create a Custom Flashcard Session</h2>
        <p>Select the topics you want to practice. The cards will be shuffled into one deck.</p>

        <div className="lesson-selection-list">
          <div className="select-all-container">
            <input
              type="checkbox"
              id="select-all"
              checked={isAllSelected}
              onChange={handleSelectAll}
            />
            <label htmlFor="select-all">Select All / Deselect All</label>
          </div>
          {lessons.map(lesson => (
            <div key={lesson.id} className="lesson-item">
              <input
                type="checkbox"
                id={`lesson-${lesson.id}`}
                checked={selectedLessons.has(lesson.id)}
                onChange={() => handleToggleLesson(lesson.id)}
              />
              <label htmlFor={`lesson-${lesson.id}`}>
                {`Lesson ${lesson.id}: ${lesson.title}`}
                <span className="card-count">({lesson.cardCount} cards)</span>
              </label>
            </div>
          ))}
        </div>

        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button
            className="btn-confirm"
            onClick={handleStartSession}
            disabled={selectedLessons.size === 0}
          >
            Start Session ({totalSelectedCards} cards)
          </button>
        </div>
      </div>
    </div>
  );
}

export default FlashcardPracticeModal;