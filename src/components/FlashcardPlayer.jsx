import { useState, useEffect } from 'react';
import {
  getLessonCardStates,
  updateCardState,
  updateStreakData,
  incrementReviews,
  getDueCardsCount,
  getNewCardsCount,
  getGlobalStats
} from '../services/flashcardService';
import { updateCard as updateCardAlgorithm, selectCardsForSession, calculateSessionStats } from '../utils/flashcardAlgorithm';
import '../styles/FlashcardActivity.css';

function FlashcardPlayer({ initialCards = [], sessionTitle = "Flashcards", lessonId = null, courseId = 'network-plus' }) {
  // Session setup state
  const [sessionStarted, setSessionStarted] = useState(false);

  // Study session state
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [sessionRatings, setSessionRatings] = useState([]);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [sessionStartTime, setSessionStartTime] = useState(null);

  // Card statistics for session selector
  const [dueCount, setDueCount] = useState(0);
  const [newCount, setNewCount] = useState(0);

  // Load card statistics when component mounts
  useEffect(() => {
    async function loadStats() {
      if (lessonId && initialCards.length > 0) {
        const due = await getDueCardsCount(lessonId, initialCards, courseId);
        const newC = await getNewCardsCount(lessonId, initialCards, courseId);
        setDueCount(due);
        setNewCount(newC);
      }
    }
    loadStats();
  }, [lessonId, initialCards, courseId]);

  // Start a session with selected size
  const startSession = (size) => {
    let selectedCards;

    if (lessonId) {
      // Single lesson mode: use spaced repetition algorithm
      const cardStates = getLessonCardStates(lessonId, courseId);
      selectedCards = selectCardsForSession(initialCards, cardStates, size);
    } else {
      // Multi-lesson practice mode: just take first N cards (already shuffled by modal)
      selectedCards = initialCards.slice(0, Math.min(size, initialCards.length));
    }

    if (selectedCards.length === 0) {
      alert('No cards available for study!');
      return;
    }

    setCards(selectedCards);
    setSessionStarted(true);
    setCurrentIndex(0);
    setFlipped(false);
    setSessionRatings([]);
    setSessionComplete(false);
    setSessionStartTime(Date.now());
  };

  // Handle card rating
  const handleRating = async (rating) => {
    console.log('🎯 handleRating called with rating:', rating);
    console.log('📍 currentIndex:', currentIndex, 'cards.length:', cards.length);

    if (currentIndex >= cards.length) {
      console.log('⚠️ Early return: currentIndex >= cards.length');
      return;
    }

    const currentCard = cards[currentIndex];
    console.log('🃏 Current card:', currentCard);

    // Determine which lessonId to use: card's own lessonId (practice mode) or prop lessonId (single-lesson mode)
    const cardLessonId = currentCard.lessonId || lessonId;
    // Determine which courseId to use: card's own courseId (practice mode) or prop courseId (single-lesson mode)
    const cardCourseId = currentCard.courseId || courseId;
    console.log('📚 cardLessonId:', cardLessonId, '(from card:', currentCard.lessonId, 'or prop:', lessonId, ')');
    console.log('📚 cardCourseId:', cardCourseId, '(from card:', currentCard.courseId, 'or prop:', courseId, ')');

    // Save progress if we have a lessonId (either from card or prop)
    if (cardLessonId) {
      console.log('✅ Have cardLessonId - entering save block');

      const cardState = currentCard.cardState || {
        state: 'new',
        ease: 2.5,
        interval: 0,
        dueDate: new Date().toISOString().split('T')[0],
        lastReviewed: null,
        repetitions: 0,
        timesHard: 0,
        timesGood: 0,
        timesEasy: 0
      };
      console.log('📊 Card state:', cardState);

      // Update card using SM-2 algorithm
      const updatedState = updateCardAlgorithm(cardState, rating);
      console.log('🔄 Updated state from algorithm:', updatedState);

      // Save to Supabase (works for both single-lesson and multi-lesson practice)
      try {
        console.log('💾 Calling updateCardState with:', { cardLessonId, cardId: currentCard.id, updatedState, cardCourseId });
        const result = await updateCardState(cardLessonId, currentCard.id, updatedState, cardCourseId);
        console.log('✅ Flashcard progress saved successfully! Result:', result);
      } catch (error) {
        console.error('❌ Error saving flashcard progress:', error);
        console.error('❌ Error details:', { message: error.message, stack: error.stack });
      }
    } else {
      console.log('⚠️ No cardLessonId - skipping save');
    }

    // Track rating for session stats (always)
    setSessionRatings(prev => [...prev, rating]);

    // Increment total reviews
    try {
      await incrementReviews();
    } catch (error) {
      console.error('Error incrementing reviews:', error);
    }

    // Move to next card or complete session
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setFlipped(false);
    } else {
      // Session complete
      setSessionComplete(true);
      // Update streak (always, since we're saving progress now)
      try {
        await updateStreakData();
      } catch (error) {
        console.error('Error updating streak:', error);
      }
    }
  };

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleRestart = () => {
    setSessionStarted(false);
    setCards([]);
    setCurrentIndex(0);
    setFlipped(false);
    setSessionRatings([]);
    setSessionComplete(false);
    setSessionStartTime(null);
  };

  // Session size selector screen
  if (!sessionStarted) {
    // Always allow practice if there are cards, regardless of due date
    const totalAvailable = initialCards.length;

    return (
      <div className="flashcard-activity">
        <div className="flashcard-header">
          <h2>🃏 {sessionTitle}</h2>
          <p className="session-subtitle">Choose your study session size</p>
        </div>

        <div className="session-stats-preview">
          <div className="stat-preview">
            <span className="stat-number">{dueCount}</span>
            <span className="stat-label">Due for Review</span>
          </div>
          <div className="stat-preview">
            <span className="stat-number">{newCount}</span>
            <span className="stat-label">New Cards</span>
          </div>
        </div>

        <div className="session-size-selector">
          <button
            className="session-option quick-sprint"
            onClick={() => startSession(30)}
            disabled={totalAvailable === 0}
          >
            <div className="option-icon">🏃</div>
            <div className="option-title">Quick Sprint</div>
            <div className="option-details">30 cards • ~5 min</div>
          </button>

          <button
            className="session-option standard-session"
            onClick={() => startSession(45)}
            disabled={totalAvailable === 0}
          >
            <div className="option-icon">📚</div>
            <div className="option-title">Standard Session</div>
            <div className="option-details">45 cards • ~8 min</div>
          </button>

          <button
            className="session-option deep-practice"
            onClick={() => startSession(60)}
            disabled={totalAvailable === 0}
          >
            <div className="option-icon">💪</div>
            <div className="option-title">Deep Practice</div>
            <div className="option-details">60 cards • ~10 min</div>
          </button>

          <button
            className="session-option clear-all"
            onClick={() => startSession(Infinity)}
            disabled={dueCount === 0}
          >
            <div className="option-icon">♾️</div>
            <div className="option-title">Clear Everything</div>
            <div className="option-details">All due cards</div>
          </button>
        </div>

        {totalAvailable === 0 && (
          <div className="no-cards-message">
            <p>No flashcards available for this lesson yet.</p>
          </div>
        )}

        {totalAvailable > 0 && dueCount === 0 && newCount === 0 && (
          <div className="info-message" style={{
            textAlign: 'center',
            padding: '1rem',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem'
          }}>
            <p>✨ All cards reviewed! You can still practice anytime.</p>
          </div>
        )}
      </div>
    );
  }

  // Session complete screen
  if (sessionComplete) {
    const sessionStats = calculateSessionStats(sessionRatings);
    const duration = Math.floor((Date.now() - sessionStartTime) / 1000);
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    const globalStats = getGlobalStats();

    return (
      <div className="flashcard-activity">
        <div className="session-complete">
          <h2>🎉 Session Complete!</h2>
          <p className="complete-subtitle">
            You studied {sessionStats.totalCards} cards in {minutes}m {seconds}s
          </p>

          <div className="session-results">
            <h3>📈 Progress This Session:</h3>
            <div className="result-breakdown">
              <div className="result-item easy">
                <span className="result-count">{sessionStats.easyCount}</span>
                <span className="result-label">cards marked Easy ⚡</span>
              </div>
              <div className="result-item good">
                <span className="result-count">{sessionStats.goodCount}</span>
                <span className="result-label">cards marked Good ✓</span>
              </div>
              <div className="result-item hard">
                <span className="result-count">{sessionStats.hardCount}</span>
                <span className="result-label">cards need more work 📍</span>
              </div>
            </div>
          </div>

          <div className="streak-display">
            <span className="streak-icon">🔥</span>
            <span className="streak-text">{globalStats.currentStreak} day streak!</span>
          </div>

          <div className="next-review-info">
            Next Review: Check back tomorrow for more cards
          </div>

          <div className="complete-actions">
            <button className="btn-back" onClick={handleRestart}>
              Back to Lesson
            </button>
            <button className="btn-study-more" onClick={() => {
              setSessionStarted(false);
              setSessionComplete(false);
            }}>
              Study More
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Active study session
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
  const progress = ((currentIndex + 1) / cards.length) * 100;

  return (
    <div className="flashcard-activity anki-mode">
      <div className="flashcard-header">
        <h2>🃏 {sessionTitle}</h2>
        <div className="progress-info">
          <span className="progress-text">
            Card {currentIndex + 1} of {cards.length}
          </span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>

      <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <div className="card-label">Question</div>
            <div className="card-content">{currentCard.front}</div>
            <div className="card-hint">Click to reveal answer</div>
          </div>
          <div className="flashcard-back">
            <div className="card-label">Answer</div>
            <div className="card-content">{currentCard.back}</div>
            {!flipped && <div className="card-hint">Click to flip back</div>}
          </div>
        </div>
      </div>

      {flipped && (
        <div className="rating-buttons">
          <button
            className="rating-btn hard"
            onClick={() => handleRating('hard')}
          >
            <span className="rating-label">Hard</span>
            <span className="rating-detail">See again soon</span>
          </button>
          <button
            className="rating-btn good"
            onClick={() => handleRating('good')}
          >
            <span className="rating-label">Good</span>
            <span className="rating-detail">Normal interval</span>
          </button>
          <button
            className="rating-btn easy"
            onClick={() => handleRating('easy')}
          >
            <span className="rating-label">Easy</span>
            <span className="rating-detail">Longer interval</span>
          </button>
        </div>
      )}

      {!flipped && (
        <div className="flip-hint">
          👆 Flip the card to rate your knowledge
        </div>
      )}
    </div>
  );
}

export default FlashcardPlayer;