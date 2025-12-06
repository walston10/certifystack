import { useState, useEffect, useMemo } from 'react';
import FlashcardPlayer from './FlashcardPlayer';

function FlashcardActivity({ lessonId, courseId = 'network-plus' }) {
  const [courseModule, setCourseModule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dynamically load flashcards based on courseId
  useEffect(() => {
    const loadFlashcards = async () => {
      setLoading(true);
      setError(null);

      try {
        let module;
        switch (courseId) {
          case 'network-plus':
            module = await import('../courses/network-plus/flashcards/index.js');
            break;
          case 'a-plus-core1':
            module = await import('../courses/a-plus-core1/flashcards/index.js');
            break;
          case 'a-plus-core2':
            module = await import('../courses/a-plus-core2/flashcards/index.js');
            break;
          case 'security-plus':
            module = await import('../courses/security-plus/flashcards/index.js');
            break;
          default:
            // Default to network-plus for backward compatibility
            module = await import('../courses/network-plus/flashcards/index.js');
        }
        setCourseModule(module);
      } catch (err) {
        console.error('Error loading flashcards module:', err);
        setError(`Failed to load flashcards for ${courseId}`);
      } finally {
        setLoading(false);
      }
    };

    loadFlashcards();
  }, [courseId]);

  // Get flashcards for the current lesson
  const lessonCards = useMemo(() => {
    if (!courseModule || !courseModule.getFlashcardsByLesson) {
      return [];
    }
    return courseModule.getFlashcardsByLesson(lessonId);
  }, [courseModule, lessonId]);

  if (loading) {
    return (
      <div className="flashcard-activity">
        <div className="loading-state">
          <p>Loading flashcards...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flashcard-activity">
        <div className="error-state">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!lessonCards || lessonCards.length === 0) {
    return (
      <div className="flashcard-activity">
        <div className="no-flashcards-message" style={{ padding: '2rem', textAlign: 'center' }}>
          <h3>Flashcards Coming Soon!</h3>
          <p>Flashcards for this lesson are still being developed. Check back soon!</p>
        </div>
      </div>
    );
  }

  return (
    <FlashcardPlayer
      initialCards={lessonCards}
      sessionTitle={`Lesson ${lessonId} Flashcards`}
      lessonId={lessonId}
      courseId={courseId}
    />
  );
}

export default FlashcardActivity;
