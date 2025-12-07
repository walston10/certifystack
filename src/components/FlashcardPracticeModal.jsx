import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/FlashcardPracticeModal.css';

function FlashcardPracticeModal({ isOpen, onClose, courseId = 'network-plus' }) {
  const navigate = useNavigate();
  const [lessons, setLessons] = useState([]);
  const [selectedLessons, setSelectedLessons] = useState(new Set());
  const [flashcardModule, setFlashcardModule] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFlashcardModule = async () => {
      if (!isOpen) return;

      setLoading(true);
      try {
        let module;
        switch (courseId) {
          case 'network-plus':
            module = await import('../courses/network-plus/flashcards');
            break;
          case 'a-plus-core1':
            module = await import('../courses/a-plus-core1/flashcards');
            break;
          case 'a-plus-core2':
            module = await import('../courses/a-plus-core2/flashcards');
            break;
          case 'security-plus':
            module = await import('../courses/security-plus/flashcards');
            break;
          default:
            module = await import('../courses/network-plus/flashcards');
        }

        setFlashcardModule(module);
        setLessons(module.getLessonsWithFlashcards());
      } catch (err) {
        console.error('Error loading flashcard module:', err);
        setLessons([]);
      } finally {
        setLoading(false);
      }
    };

    loadFlashcardModule();
  }, [isOpen, courseId]);

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
    if (!flashcardModule) return;

    console.log('Starting flashcard session with selected lessons:', Array.from(selectedLessons));
    let bulkCards = [];
    selectedLessons.forEach(lessonId => {
      // Get cards for this lesson and attach the lessonId and courseId to each card
      const lessonCards = flashcardModule.getFlashcardsByLesson(lessonId);

      const cardsWithLesson = lessonCards.map(card => ({
        ...card,
        lessonId: lessonId,   // Attach lessonId so we can save progress later
        courseId: courseId    // Attach courseId for course-aware progress tracking
      }));

      bulkCards = [...bulkCards, ...cardsWithLesson];
    });

    // Shuffle the combined deck
    for (let i = bulkCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [bulkCards[i], bulkCards[j]] = [bulkCards[j], bulkCards[i]];
    }

    onClose();
    navigate('/practice/flashcards', { state: { cards: bulkCards, courseId } });
  };

  if (!isOpen) {
    return null;
  }

  if (loading) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content flashcard-modal" onClick={(e) => e.stopPropagation()}>
          <h2>Loading...</h2>
        </div>
      </div>
    );
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
