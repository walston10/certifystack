import { useState } from 'react';
import { lesson1Flashcards, lesson2Flashcards } from '../data/courses/network-plus/flashcards';
import '../styles/FlashcardActivity.css';

function FlashcardActivity({ lessonId }) {
  // Get the correct flashcards based on lessonId
  const getFlashcardsForLesson = (id) => {
    switch(id) {
      case 1:
        return lesson1Flashcards;
      case 2:
        return lesson2Flashcards;
      // Add more cases as you create more lessons
      default:
        return [];
    }
  };

  // Shuffle cards on initial load
  const [cards] = useState(() => {
    const lessonCards = getFlashcardsForLesson(lessonId);
    const shuffled = [...lessonCards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [mastered, setMastered] = useState(new Set());

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setFlipped(false);
    }
  };

  const handleMaster = () => {
    setMastered(prev => new Set([...prev, cards[currentIndex].id]));
    if (currentIndex < cards.length - 1) {
      handleNext();
    }
  };

  if (cards.length === 0) {
    return (
      <div className="flashcard-activity">
        <div className="flashcard-header">
          <h2>🃏 Flashcards</h2>
          <p>No flashcards available for this lesson yet.</p>
        </div>
      </div>
    );
  }

  const currentCard = cards[currentIndex];
  const allMastered = mastered.size === cards.length;

  return (
    <div className="flashcard-activity">
      <div className="flashcard-header">
        <h2>🃏 Flashcards</h2>
        <div className="progress">
          Card {currentIndex + 1} of {cards.length} • Mastered: {mastered.size}/{cards.length}
        </div>
      </div>

      <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <div className="card-label">Question</div>
            <div className="card-content">{currentCard.front}</div>
            <div className="card-hint">Click to flip</div>
          </div>
          <div className="flashcard-back">
            <div className="card-label">Answer</div>
            <div className="card-content">{currentCard.back}</div>
            <div className="card-hint">Click to flip back</div>
          </div>
        </div>
      </div>

      <div className="flashcard-controls">
        <button 
          className="btn-nav" 
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          ← Previous
        </button>
        
        <button 
          className="btn-master" 
          onClick={handleMaster}
          disabled={mastered.has(currentCard.id)}
        >
          {mastered.has(currentCard.id) ? '✓ Mastered' : 'Mark as Mastered'}
        </button>
        
        <button 
          className="btn-nav" 
          onClick={handleNext}
          disabled={currentIndex === cards.length - 1}
        >
          Next →
        </button>
      </div>

      {allMastered && (
        <div className="complete-message">
          🎉 Congratulations! You've mastered all {cards.length} flashcards!
        </div>
      )}
    </div>
  );
}

export default FlashcardActivity;