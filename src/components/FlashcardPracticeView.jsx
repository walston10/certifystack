import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FlashcardPlayer from './FlashcardPlayer';
import '../styles/FlashcardPracticeView.css';

function FlashcardPracticeView() {
  const location = useLocation();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get courseId from state or default to network-plus
  const courseId = location.state?.courseId || 'network-plus';

  useEffect(() => {
    const loadCards = async () => {
      // If cards were passed via location.state, use those
      if (location.state?.cards && location.state.cards.length > 0) {
        console.log('Loading cards from location.state:', location.state.cards.length, 'cards');
        setCards(location.state.cards);
        setLoading(false);
      } else {
        console.log('No cards in location.state, loading all flashcards as fallback');
        // Fallback: Load all flashcards if accessed directly
        // Dynamically load based on courseId
        try {
          let flashcardsModule;
          switch (courseId) {
            case 'network-plus':
              flashcardsModule = await import('../courses/network-plus/flashcards');
              break;
            case 'a-plus-core1':
              flashcardsModule = await import('../courses/a-plus-core1/flashcards');
              break;
            case 'a-plus-core2':
              flashcardsModule = await import('../courses/a-plus-core2/flashcards');
              break;
            default:
              flashcardsModule = await import('../courses/network-plus/flashcards');
          }

          const allFlashcards = flashcardsModule.allFlashcards || {};
          const allCards = [];
          Object.keys(allFlashcards).forEach(lessonId => {
            const lessonCards = allFlashcards[lessonId];
            if (Array.isArray(lessonCards)) {
              const cardsWithLesson = lessonCards.map(card => ({
                ...card,
                lessonId: parseInt(lessonId)
              }));
              allCards.push(...cardsWithLesson);
            }
          });
          console.log('Total fallback cards loaded:', allCards.length);
          setCards(allCards);
        } catch (err) {
          console.error('Error loading flashcards:', err);
          setCards([]);
        } finally {
          setLoading(false);
        }
      }
    };

    loadCards();
  }, [location.state, courseId]);

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
      <FlashcardPlayer
        initialCards={cards}
        sessionTitle={location.state?.sessionTitle || "All Flashcards"}
        courseId={courseId}
      />
    </div>
  );
}

export default FlashcardPracticeView;
