import React, { useState, useEffect } from 'react';
import './PBQMatching.css';

function PBQMatching({ question, onAnswer, userAnswer, isReviewMode = false }) {
  const [matches, setMatches] = useState({});

  // Initialize from userAnswer
  useEffect(() => {
    if (userAnswer) {
      setMatches(userAnswer);
    } else {
      const initialMatches = {};
      question.leftItems.forEach(item => {
        initialMatches[item.id] = null;
      });
      setMatches(initialMatches);
    }
  }, [question, userAnswer]);

  const handleMatch = (leftId, rightId) => {
    const newMatches = {
      ...matches,
      [leftId]: rightId
    };
    setMatches(newMatches);
    onAnswer(newMatches);
  };

  const isMatchCorrect = (leftId) => {
    if (!isReviewMode) return null;
    return matches[leftId] === question.correctMatches[leftId];
  };

  const getRightItemLabel = (rightId) => {
    if (!rightId) return 'Select...';
    const item = question.rightItems.find(i => i.id === rightId);
    return item ? item.label : rightId;
  };

  const getCorrectMatch = (leftId) => {
    const rightId = question.correctMatches[leftId];
    return getRightItemLabel(rightId);
  };

  return (
    <div className="pbq-matching">
      <div className="matching-container">
        {question.leftItems.map(leftItem => (
          <div key={leftItem.id} className="match-row">
            <div className="left-item">
              {leftItem.label}
            </div>

            <div className="arrow">→</div>

            <div className="right-select">
              <select
                value={matches[leftItem.id] || ''}
                onChange={(e) => handleMatch(leftItem.id, e.target.value)}
                disabled={isReviewMode}
                className={isReviewMode ? (isMatchCorrect(leftItem.id) ? 'correct' : 'incorrect') : ''}
              >
                <option value="">Select...</option>
                {question.rightItems.map(rightItem => (
                  <option key={rightItem.id} value={rightItem.id}>
                    {rightItem.label}
                  </option>
                ))}
              </select>

              {isReviewMode && (
                <span className={`status-indicator ${isMatchCorrect(leftItem.id) ? 'correct' : 'incorrect'}`}>
                  {isMatchCorrect(leftItem.id) ? ' ✓' : ' ✗'}
                </span>
              )}
            </div>

            {isReviewMode && !isMatchCorrect(leftItem.id) && (
              <div className="correct-match-display">
                <strong>Correct:</strong> {getCorrectMatch(leftItem.id)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PBQMatching;
