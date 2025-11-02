import { useState, useEffect } from 'react';
import '../styles/PortMemoryGame.css';

function PortMemoryGame() {
  const [cards] = useState([
    { id: 1, protocol: 'FTP', port: '20/21', matched: false },
    { id: 2, protocol: 'SSH', port: '22', matched: false },
    { id: 3, protocol: 'Telnet', port: '23', matched: false },
    { id: 4, protocol: 'SMTP', port: '25', matched: false },
    { id: 5, protocol: 'DNS', port: '53', matched: false },
    { id: 6, protocol: 'DHCP', port: '67/68', matched: false },
    { id: 7, protocol: 'TFTP', port: '69', matched: false },
    { id: 8, protocol: 'HTTP', port: '80', matched: false },
    { id: 9, protocol: 'POP3', port: '110', matched: false },
    { id: 10, protocol: 'NTP', port: '123', matched: false },
    { id: 11, protocol: 'IMAP', port: '143', matched: false },
    { id: 12, protocol: 'SNMP', port: '161/162', matched: false },
    { id: 13, protocol: 'LDAP', port: '389', matched: false },
    { id: 14, protocol: 'HTTPS', port: '443', matched: false },
    { id: 15, protocol: 'SMB', port: '445', matched: false },
    { id: 16, protocol: 'LDAPS', port: '636', matched: false },
    { id: 17, protocol: 'RDP', port: '3389', matched: false },
    { id: 18, protocol: 'SIP', port: '5060/5061', matched: false },
  ]);

  const [gameCards, setGameCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [moves, setMoves] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  // Initialize game
  useEffect(() => {
    shuffleCards();
  }, []);

  // Timer
  useEffect(() => {
    let interval;
    if (startTime && !gameComplete) {
      interval = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [startTime, gameComplete]);

  // Check for game completion
  useEffect(() => {
    if (matchedPairs.length === cards.length && matchedPairs.length > 0) {
      setGameComplete(true);
    }
  }, [matchedPairs, cards.length]);

  const shuffleCards = () => {
    // Create pairs: one card for protocol name, one for port number
    const protocolCards = cards.map((card, index) => ({
      ...card,
      uniqueId: `protocol-${index}`,
      type: 'protocol',
      display: card.protocol,
    }));

    const portCards = cards.map((card, index) => ({
      ...card,
      uniqueId: `port-${index}`,
      type: 'port',
      display: card.port,
    }));

    // Combine and shuffle
    const allCards = [...protocolCards, ...portCards];
    const shuffled = allCards.sort(() => Math.random() - 0.5);
    
    setGameCards(shuffled);
    setFlippedCards([]);
    setMatchedPairs([]);
    setMoves(0);
    setStartTime(null);
    setElapsedTime(0);
    setGameComplete(false);
  };

  const handleCardClick = (clickedCard) => {
    // Start timer on first click
    if (!startTime) {
      setStartTime(Date.now());
    }

    // Ignore if already checking, card already flipped, or card already matched
    if (
      isChecking ||
      flippedCards.find(card => card.uniqueId === clickedCard.uniqueId) ||
      matchedPairs.includes(clickedCard.id)
    ) {
      return;
    }

    const newFlippedCards = [...flippedCards, clickedCard];
    setFlippedCards(newFlippedCards);

    // Check for match when two cards are flipped
    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      setIsChecking(true);

      const [card1, card2] = newFlippedCards;

      // Check if cards match (same id, different type)
      if (card1.id === card2.id && card1.type !== card2.type) {
        // Match found!
        setTimeout(() => {
          setMatchedPairs([...matchedPairs, card1.id]);
          setFlippedCards([]);
          setIsChecking(false);
        }, 600);
      } else {
        // No match - flip back after delay
        setTimeout(() => {
          setFlippedCards([]);
          setIsChecking(false);
        }, 1000);
      }
    }
  };

  const isCardFlipped = (card) => {
    return flippedCards.find(c => c.uniqueId === card.uniqueId) || matchedPairs.includes(card.id);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="port-memory-game">
      <h2>🎮 Port Number Memory Match</h2>
      <p>Match each protocol to its port number. Click two cards to flip them!</p>

      <div className="game-stats">
        <div className="stat">
          <span className="stat-label">Time:</span>
          <span className="stat-value">{formatTime(elapsedTime)}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Moves:</span>
          <span className="stat-value">{moves}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Pairs Found:</span>
          <span className="stat-value">{matchedPairs.length}/{cards.length}</span>
        </div>
      </div>

      {gameComplete && (
        <div className="completion-banner">
          <div className="trophy-animation">🏆</div>
          <h3>Perfect! You've mastered port numbers!</h3>
          <p>Time: {formatTime(elapsedTime)} | Moves: {moves}</p>
          <p className="completion-message">
            {moves <= 36 ? '🌟 Incredible memory!' : moves <= 50 ? '⭐ Great job!' : '✅ Well done!'}
          </p>
        </div>
      )}

      <div className="game-board">
        {gameCards.map((card) => (
          <div
            key={card.uniqueId}
            className={`memory-card ${isCardFlipped(card) ? 'flipped' : ''} ${
              matchedPairs.includes(card.id) ? 'matched' : ''
            }`}
            onClick={() => handleCardClick(card)}
          >
            <div className="card-inner">
              <div className="card-back">
                <span className="card-icon">🔒</span>
              </div>
              <div className="card-front">
                <span className={`card-content ${card.type}`}>
                  {card.display}
                </span>
                {card.type === 'protocol' && (
                  <span className="card-label">Protocol</span>
                )}
                {card.type === 'port' && (
                  <span className="card-label">Port</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="game-controls">
        <button className="shuffle-btn" onClick={shuffleCards}>
          🔄 New Game
        </button>
      </div>

      <div className="game-hints">
        <h4>Memory Tricks:</h4>
        <div className="hints-grid">
          <div className="hint">
            <strong>SSH (22):</strong> Two shoes for secure shell
          </div>
          <div className="hint">
            <strong>SMTP (25):</strong> Send Mail To Port 25
          </div>
          <div className="hint">
            <strong>DNS (53):</strong> Tree-fiddy for a name
          </div>
          <div className="hint">
            <strong>HTTP (80):</strong> Ate-zero security
          </div>
          <div className="hint">
            <strong>HTTPS (443):</strong> Four-four-three, secure for me
          </div>
          <div className="hint">
            <strong>RDP (3389):</strong> Three-three-eight-nine, remote desktop fine
          </div>
        </div>
      </div>

      <div className="study-tip">
        <p>💡 <strong>Study Tip:</strong> Play multiple rounds! Each game shuffles the cards differently. 
        Aim to complete the game in under 50 moves and 3 minutes.</p>
      </div>
    </div>
  );
}

export default PortMemoryGame;