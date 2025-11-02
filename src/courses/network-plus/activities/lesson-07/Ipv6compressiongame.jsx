import React, { useState, useEffect } from 'react';
import './IPv6CompressionGame.css';

const IPv6CompressionGame = () => {
  const [currentAddress, setCurrentAddress] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isPlaying, setIsPlaying] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);

  // IPv6 address pools for different difficulty levels
  const addressPools = {
    beginner: [
      { full: '2001:0db8:0000:0000:0000:0000:0000:0001', short: '2001:db8::1' },
      { full: 'fe80:0000:0000:0000:0000:0000:0000:0001', short: 'fe80::1' },
      { full: '2001:0db8:0000:0042:0000:0000:0000:0001', short: '2001:db8:0:42::1' },
      { full: '0000:0000:0000:0000:0000:0000:0000:0001', short: '::1' },
      { full: 'ff02:0000:0000:0000:0000:0000:0000:0001', short: 'ff02::1' },
      { full: '2001:0db8:85a3:0000:0000:8a2e:0370:7334', short: '2001:db8:85a3::8a2e:370:7334' },
      { full: 'fe80:0000:0000:0000:0204:61ff:fe9d:f156', short: 'fe80::204:61ff:fe9d:f156' },
      { full: '2001:0db8:0000:0000:0001:0000:0000:0001', short: '2001:db8::1:0:0:1' }
    ],
    intermediate: [
      { full: '2001:0db8:0000:0042:0000:0000:0000:0001', short: '2001:db8:0:42::1' },
      { full: '2001:0db8:0001:0000:0000:0ab9:c0a8:0102', short: '2001:db8:1::ab9:c0a8:102' },
      { full: 'fd00:0000:0000:0000:0000:0000:0000:0001', short: 'fd00::1' },
      { full: '2001:0db8:0000:0000:0000:ff00:0042:8329', short: '2001:db8::ff00:42:8329' },
      { full: 'fe80:0000:0000:0000:020c:29ff:feab:cdef', short: 'fe80::20c:29ff:feab:cdef' },
      { full: '2001:0db8:aaaa:0001:0000:0000:0000:0100', short: '2001:db8:aaaa:1::100' },
      { full: '2001:0db8:0000:0000:0008:0800:200c:417a', short: '2001:db8::8:800:200c:417a' },
      { full: 'ff02:0000:0000:0000:0000:0000:0000:0002', short: 'ff02::2' }
    ],
    expert: [
      { full: '2001:0db8:0000:0042:0000:0000:0192:0168', short: '2001:db8:0:42::192:168' },
      { full: '2001:0db8:0000:0001:0000:0000:0000:0000', short: '2001:db8:0:1::' },
      { full: 'fe80:0000:0000:0001:0200:f8ff:fe21:67cf', short: 'fe80:0:0:1:200:f8ff:fe21:67cf' },
      { full: '2001:0db8:85a3:0000:0000:8a2e:0000:0001', short: '2001:db8:85a3::8a2e:0:1' },
      { full: '2001:0db8:0001:0000:0000:0001:0000:0001', short: '2001:db8:1::1:0:1' },
      { full: 'fd12:3456:789a:0001:0000:0000:0000:0001', short: 'fd12:3456:789a:1::1' },
      { full: '2001:0db8:0000:0000:0001:0000:0001:0001', short: '2001:db8::1:0:1:1' },
      { full: '2001:0db8:0000:0042:0001:0000:0000:0001', short: '2001:db8:0:42:1::1' }
    ]
  };

  // Get address pool based on level
  const getCurrentPool = () => {
    if (level <= 3) return addressPools.beginner;
    if (level <= 6) return addressPools.intermediate;
    return addressPools.expert;
  };

  // Generate new question
  const generateQuestion = () => {
    const pool = getCurrentPool();
    const randomAddress = pool[Math.floor(Math.random() * pool.length)];
    setCurrentAddress(randomAddress);
    setUserAnswer('');
    setFeedback('');
  };

  // Start game
  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setLevel(1);
    setTimeLeft(60);
    setStreak(0);
    setQuestionsAnswered(0);
    generateQuestion();
  };

  // Check answer
  const checkAnswer = () => {
    if (!currentAddress) return;

    const correct = userAnswer.trim().toLowerCase() === currentAddress.short.toLowerCase();
    
    if (correct) {
      const points = level * 10 * (streak >= 3 ? 1.5 : 1); // Combo multiplier
      setScore(score + points);
      setStreak(streak + 1);
      setBestStreak(Math.max(bestStreak, streak + 1));
      setFeedback(`✅ Correct! +${points} points`);
      
      // Level up every 5 correct answers
      if ((questionsAnswered + 1) % 5 === 0 && level < 9) {
        setLevel(level + 1);
        setTimeLeft(timeLeft + 10); // Bonus time for leveling up
        setFeedback(`🎉 Level Up! Now Level ${level + 1}! +10 seconds`);
      }
      
      setQuestionsAnswered(questionsAnswered + 1);
      
      // Generate new question after brief delay
      setTimeout(() => {
        generateQuestion();
      }, 1500);
    } else {
      setStreak(0);
      setFeedback(`❌ Incorrect. Correct answer: ${currentAddress.short}`);
      
      // Show correct answer then generate new question
      setTimeout(() => {
        generateQuestion();
      }, 3000);
    }
  };

  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && userAnswer.trim() && isPlaying) {
      checkAnswer();
    }
  };

  // Timer countdown
  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
      setFeedback(`⏰ Time's up! Final Score: ${score} | Best Streak: ${bestStreak}`);
    }
  }, [isPlaying, timeLeft, score, bestStreak]);

  // Get difficulty label
  const getDifficultyLabel = () => {
    if (level <= 3) return '🟢 Beginner';
    if (level <= 6) return '🟡 Intermediate';
    return '🔴 Expert';
  };

  return (
    <div className="ipv6-game-container">
      <div className="game-header">
        <h2>🎮 IPv6 Compression Master</h2>
        <p className="game-subtitle">Shorten IPv6 addresses as fast as you can!</p>
      </div>

      {!isPlaying && questionsAnswered === 0 ? (
        <div className="game-start">
          <div className="instructions">
            <h3>How to Play:</h3>
            <ul>
              <li>📝 You'll see a full IPv6 address</li>
              <li>✂️ Shorten it using proper compression rules</li>
              <li>⚡ Type your answer and press Enter (or click Submit)</li>
              <li>🎯 Earn points and level up!</li>
              <li>🔥 Build combos for bonus points</li>
              <li>⏱️ You have 60 seconds (bonus time on level up)</li>
            </ul>
            <div className="rules">
              <h4>IPv6 Shortening Rules:</h4>
              <p><strong>Rule 1:</strong> Remove leading zeros (but keep at least one digit)</p>
              <p><strong>Rule 2:</strong> Compress consecutive zeros with :: (only once!)</p>
              <p><strong>Example:</strong> 2001:0db8:0000:0000:0000:0000:0000:0001 → 2001:db8::1</p>
            </div>
          </div>
          <button className="start-button" onClick={startGame}>
            🚀 Start Game
          </button>
        </div>
      ) : !isPlaying && questionsAnswered > 0 ? (
        <div className="game-over">
          <h3>🎮 Game Over!</h3>
          <div className="final-stats">
            <div className="stat">
              <span className="stat-label">Final Score:</span>
              <span className="stat-value">{score}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Questions Answered:</span>
              <span className="stat-value">{questionsAnswered}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Best Streak:</span>
              <span className="stat-value">{bestStreak} 🔥</span>
            </div>
            <div className="stat">
              <span className="stat-label">Final Level:</span>
              <span className="stat-value">{level}</span>
            </div>
          </div>
          <button className="start-button" onClick={startGame}>
            🔄 Play Again
          </button>
        </div>
      ) : (
        <div className="game-play">
          <div className="game-stats">
            <div className="stat-box">
              <span className="stat-label">Score</span>
              <span className="stat-value">{score}</span>
            </div>
            <div className="stat-box">
              <span className="stat-label">Level</span>
              <span className="stat-value">{level}</span>
              <span className="difficulty">{getDifficultyLabel()}</span>
            </div>
            <div className="stat-box">
              <span className="stat-label">Time</span>
              <span className={`stat-value ${timeLeft <= 10 ? 'urgent' : ''}`}>
                {timeLeft}s
              </span>
            </div>
            <div className="stat-box">
              <span className="stat-label">Streak</span>
              <span className="stat-value">
                {streak > 0 ? `${streak} 🔥` : '0'}
              </span>
            </div>
          </div>

          {currentAddress && (
            <div className="question-section">
              <div className="address-display">
                <label>Full IPv6 Address:</label>
                <code className="full-address">{currentAddress.full}</code>
              </div>

              <div className="answer-input">
                <label htmlFor="answer">Your Answer (shortened):</label>
                <input
                  id="answer"
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type shortened address (e.g., 2001:db8::1)"
                  disabled={feedback.includes('✅') || feedback.includes('❌')}
                  autoFocus
                />
              </div>

              <button 
                className="submit-button"
                onClick={checkAnswer}
                disabled={!userAnswer.trim() || feedback.includes('✅') || feedback.includes('❌')}
              >
                Submit Answer
              </button>

              {feedback && (
                <div className={`feedback ${feedback.includes('✅') ? 'correct' : 'incorrect'}`}>
                  {feedback}
                </div>
              )}
            </div>
          )}

          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${(questionsAnswered % 5) * 20}%` }}
            ></div>
            <span className="progress-text">
              {5 - (questionsAnswered % 5)} more to level {level + 1}
            </span>
          </div>

          {streak >= 3 && (
            <div className="combo-indicator">
              🔥 COMBO x1.5! Keep it going!
            </div>
          )}
        </div>
      )}

      <div className="game-tips">
        <h4>💡 Quick Tips:</h4>
        <ul>
          <li>Always remove leading zeros first: 0042 → 42</li>
          <li>Compress the LONGEST run of zeros with ::</li>
          <li>You can only use :: once per address</li>
          <li>If tie, compress the leftmost run</li>
          <li>Keep at least one digit per group (0000 → 0, not empty)</li>
        </ul>
      </div>
    </div>
  );
};

export default IPv6CompressionGame;