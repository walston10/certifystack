import { useLocation, Link } from 'react-router-dom';
import FlashcardPlayer from './FlashcardPlayer';
import '../styles/FlashcardPracticeView.css';

function FlashcardPracticeView() {
  const location = useLocation();
  const cards = location.state?.cards || [];

  if (cards.length === 0) {
    return (
      <div className="practice-view-container">
        <header className="practice-view-header">
          <Link to="/" className="back">← Dashboard</Link>
        </header>
        <div className="no-cards-message">
          <h2>No Cards Selected</h2>
          <p>It looks like you didn't select any topics for your practice session.</p>
          <Link to="/"><button className="btn-back-to-dash">Return to Dashboard</button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="practice-view-container">
      <header className="practice-view-header">
        <Link to="/" className="back">← Exit Practice</Link>
      </header>
      <FlashcardPlayer initialCards={cards} sessionTitle="Custom Practice Session" />
    </div>
  );
}

export default FlashcardPracticeView;