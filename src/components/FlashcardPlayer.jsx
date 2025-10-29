import { useState, useEffect } from 'react';
import '../styles/FlashcardActivity.css';

function FlashcardPlayer({ initialCards = [], sessionTitle = "Flashcards" }) {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [mastered, setMastered] = useState(new Set());

  // Effect to shuffle cards when the initial set changes
  useEffect(() => {
    const shuffled = [...initialCards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setCards(shuffled);
    setCurrentIndex(0);
    setFlipped(false);
    setMastered(new Set());
  }, [initialCards]);

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

  const handlePutBack = () => {
    if (currentIndex >= cards.length - 1) return;

    const cardToMove = cards[currentIndex];
    const remainingCards = cards.filter((_, index) => index !== currentIndex);

    const min = currentIndex;
    const max = remainingCards.length;
    const randomInsertionIndex = Math.floor(Math.random() * (max - min + 1)) + min;

    remainingCards.splice(randomInsertionIndex, 0, cardToMove);

    setCards(remainingCards);
    setFlipped(false);
  };

  const handleRestart = () => {
    const shuffled = [...initialCards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setCards(shuffled);
    setMastered(new Set());
    setCurrentIndex(0);
    setFlipped(false);
  };

  if (cards.length === 0) {
    return (
      <div className="flashcard-activity">
        <div className="flashcard-header">
          <h2>🃏 {sessionTitle}</h2>
          <p>No flashcards available for this session.</p>
        </div>
      </div>
    );
  }

  const currentCard = cards[currentIndex];
  const allMastered = mastered.size === cards.length;

  return (
    <div className="flashcard-activity">
      <div className="flashcard-header">
        <h2>🃏 {sessionTitle}</h2>
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
        <button className="btn-nav" onClick={handlePrevious} disabled={currentIndex === 0}>← Previous</button>
        <button className="btn-put-back" onClick={handlePutBack} disabled={currentIndex === cards.length - 1 || mastered.has(currentCard.id)}>↻ Put Back in Stack</button>
        <button className="btn-master" onClick={handleMaster} disabled={mastered.has(currentCard.id)}>{mastered.has(currentCard.id) ? '✓ Mastered' : 'Mark as Mastered'}</button>
        <button className="btn-nav" onClick={handleNext} disabled={currentIndex === cards.length - 1}>Next →</button>
      </div>

      {allMastered && (
        <div className="complete-message">
          <p>🎉 Congratulations! You've mastered all {cards.length} flashcards!</p>
          <button className="btn-restart" onClick={handleRestart}>Practice Again</button>
        </div>
      )}
    </div>
  );
}

export default FlashcardPlayer;