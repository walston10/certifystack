import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FlashcardPlayer from './FlashcardPlayer';
import { allFlashcards } from '../courses/network-plus/flashcards';
import '../styles/FlashcardPracticeView.css';

function FlashcardPracticeView() {
  const location = useLocation();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If cards were passed via location.state, use those
    if (location.state?.cards && location.state.cards.length > 0) {
      console.log('📦 Loading cards from location.state:', location.state.cards.length, 'cards');
      console.log('📦 First card from state:', location.state.cards[0]);
      setCards(location.state.cards);
      setLoading(false);
    } else {
      console.log('📦 No cards in location.state, loading all flashcards as fallback');
      // Fallback: Load all flashcards if accessed directly
      // (Users should normally come through /practice/flashcards/setup)
      const allCards = [];
      Object.keys(allFlashcards).forEach(lessonId => {
        const lessonCards = allFlashcards[lessonId];
        if (Array.isArray(lessonCards)) {
          // Attach lessonId to each card so progress can be saved
          const cardsWithLesson = lessonCards.map(card => ({
            ...card,
            lessonId: parseInt(lessonId)
          }));
          console.log(`📦 Lesson ${lessonId}: Added ${cardsWithLesson.length} cards with lessonId attached`);
          allCards.push(...cardsWithLesson);
        }
      });
      console.log('📦 Total fallback cards loaded:', allCards.length);
      console.log('📦 First fallback card:', allCards[0]);
      setCards(allCards);
      setLoading(false);
    }
  }, [location.state]);

  if (loading) {
    return (
      <div className="practice-view-container">
        <div className="loading-spinner">Loading flashcards...</div>
      </div>
    );
  }

  if (cards.length === 0) {
    return (
      <div className="practice-view-container">
        <header className="practice-view-header">
          <Link to="/practice" className="back">← Practice Zone</Link>
        </header>
        <div className="no-cards-message">
          <h2>No Cards Available</h2>
          <p>No flashcards could be loaded. Please try again later.</p>
          <Link to="/practice"><button className="btn-back-to-dash">Return to Practice Zone</button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="practice-view-container">
      <header className="practice-view-header">
        <Link to="/practice" className="back">← Exit Practice</Link>
      </header>
      <FlashcardPlayer initialCards={cards} sessionTitle={location.state?.sessionTitle || "All Flashcards"} />
    </div>
  );
}

export default FlashcardPracticeView;