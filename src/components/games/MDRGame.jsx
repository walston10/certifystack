import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lightbulb, Shuffle } from 'lucide-react';
import { mdrLevels, TOTAL_LEVELS } from '../../data/mdrLevels';
import './MDRGame.css';

const PROGRESS_KEY = "networkplus_mdr_progress";

const MDRGame = () => {
  const navigate = useNavigate();
  const [showBoot, setShowBoot] = useState(true);
  const [currentLevel, setCurrentLevel] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(300);
  const [hintsLeft, setHintsLeft] = useState(3);
  const [matchedSetCount, setMatchedSetCount] = useState(0);
  const [selected, setSelected] = useState([]);
  const [matchedTerms, setMatchedTerms] = useState(new Set());
  const [allTerms, setAllTerms] = useState([]);
  const [levelData, setLevelData] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  // Load progress
  useEffect(() => {
    const savedProgress = parseInt(localStorage.getItem(PROGRESS_KEY)) || 1;
    setUnlockedLevel(savedProgress);
  }, []);

  // Boot animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBoot(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Timer countdown
  useEffect(() => {
    if (currentLevel === null) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          alert("Out of time. Try again.");
          handleBackToLevelSelect();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentLevel]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(1, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const saveProgress = (level) => {
    localStorage.setItem(PROGRESS_KEY, level.toString());
    setUnlockedLevel(level);
  };

  const startLevel = useCallback((level) => {
    setShowBoot(true);
    setTimeout(() => {
      const data = mdrLevels.find(l => l.level === level);
      if (!data) {
        alert("Level data not found.");
        return;
      }

      setLevelData(data);
      setCurrentLevel(level);
      setTimeRemaining(300);
      setHintsLeft(3);
      setMatchedSetCount(0);
      setSelected([]);
      setMatchedTerms(new Set());

      // Shuffle terms
      const shuffled = data.sets
        .flatMap(set => set.terms)
        .sort(() => 0.5 - Math.random());
      setAllTerms(shuffled);
      setShowBoot(false);
    }, 2000);
  }, []);

  const handleBackToLevelSelect = () => {
    setCurrentLevel(null);
    setLevelData(null);
  };

  const handleTileClick = (term) => {
    if (matchedTerms.has(term)) return;

    const isSelected = selected.some(s => s.term === term);

    if (isSelected) {
      setSelected(selected.filter(s => s.term !== term));
    } else {
      if (selected.length >= 4) return;
      const newSelected = [...selected, { term }];
      setSelected(newSelected);

      if (newSelected.length === 4) {
        setTimeout(() => checkSelection(newSelected), 100);
      }
    }
  };

  const checkSelection = (currentSelected) => {
    const currentSet = new Set(currentSelected.map(s => s.term));
    let matchedIndex = -1;

    for (let i = 0; i < levelData.sets.length; i++) {
      const correctSet = new Set(levelData.sets[i].terms);
      if ([...correctSet].every(t => currentSet.has(t))) {
        matchedIndex = i;
        break;
      }
    }

    if (matchedIndex !== -1) {
      // Correct match
      const newMatchedTerms = new Set(matchedTerms);
      currentSelected.forEach(({ term }) => newMatchedTerms.add(term));
      setMatchedTerms(newMatchedTerms);
      setMatchedSetCount(prev => prev + 1);
      setSelected([]);

      // Check if all matched
      if (newMatchedTerms.size === allTerms.length) {
        setTimeout(() => completeLevel(), 500);
      }
    } else {
      // Wrong match
      setTimeRemaining(prev => Math.max(0, prev - 20));
      setTimeout(() => setSelected([]), 500);
    }
  };

  const completeLevel = () => {
    alert(`Level ${currentLevel} Complete! Time Remaining: ${formatTime(timeRemaining)}`);
    const saved = unlockedLevel;
    if (currentLevel === saved && currentLevel < TOTAL_LEVELS) {
      saveProgress(saved + 1);
    }
    handleBackToLevelSelect();
  };

  const handleHint = () => {
    if (hintsLeft <= 0) return;

    setTimeRemaining(prev => Math.max(0, prev - 15));
    setHintsLeft(prev => prev - 1);

    // Find a complete unmatched set and highlight 2 terms
    for (const set of levelData.sets) {
      const terms = set.terms.filter(term => !matchedTerms.has(term));
      if (terms.length === 4) {
        // Temporarily select first 2 terms
        const hintTerms = terms.slice(0, 2).map(term => ({ term }));
        setSelected(hintTerms);
        setTimeout(() => setSelected([]), 600);
        break;
      }
    }
  };

  const handleShuffle = () => {
    const remaining = allTerms.filter(term => !matchedTerms.has(term));
    const shuffled = [...matchedTerms, ...remaining.sort(() => 0.5 - Math.random())];
    setAllTerms([...allTerms].sort(() =>
      matchedTerms.has(allTerms[0]) ? -1 : 0.5 - Math.random()
    ));
  };

  const getMatchedSetForTerm = (term) => {
    if (!matchedTerms.has(term)) return null;
    return levelData.sets.findIndex(set => set.terms.includes(term));
  };

  if (showBoot) {
    return (
      <div className="mdr-container">
        <div className="mdr-boot-screen">
          LOADING MDR INTERFACE...<br />
          Decrypting...<br />
          Initializing Neural Layer...
        </div>
      </div>
    );
  }

  if (currentLevel === null) {
    // Level Select Screen
    return (
      <div className="mdr-container">
        <button className="mdr-back-button" onClick={() => navigate('/games')}>
          <ArrowLeft size={20} />
          Back to Games
        </button>

        <h1 className="mdr-title">Network+ Connections</h1>
        <div className="mdr-intro-message">Select a level to begin</div>

        <div className="mdr-level-select">
          {Array.from({ length: TOTAL_LEVELS }, (_, i) => i + 1).map(level => (
            <button
              key={level}
              className={`mdr-level-btn ${level > unlockedLevel ? 'locked' : ''}`}
              onClick={() => level <= unlockedLevel && startLevel(level)}
              disabled={level > unlockedLevel}
            >
              Level {level}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Game Screen
  const percent = Math.floor((matchedSetCount / levelData.sets.length) * 100);

  return (
    <div className="mdr-container">
      <button className="mdr-back-button" onClick={handleBackToLevelSelect}>
        <ArrowLeft size={20} />
        Back to Levels
      </button>

      <h1 className="mdr-title">Network+ Connections</h1>
      <div className="mdr-level-name">Level {currentLevel}: {levelData.name}</div>

      <div className="mdr-ui-panel">
        <div className="mdr-instructions">
          Match 4 related terms. Timer = score. Hints cost 15s. Incorrect guesses cost 20s.
        </div>
        <div className="mdr-status-bar">{percent}% Complete</div>
        <div className="mdr-controls">
          <button className="mdr-hint-btn" onClick={handleHint} disabled={hintsLeft <= 0}>
            <Lightbulb size={16} />
            Use Hint ({hintsLeft} left)
          </button>
          <button className="mdr-shuffle-btn" onClick={handleShuffle}>
            <Shuffle size={16} />
            Shuffle Tiles
          </button>
        </div>
        <div className="mdr-timer">Time: {formatTime(timeRemaining)}</div>
      </div>

      <div className="mdr-grid">
        {allTerms.map((term, index) => {
          if (matchedTerms.has(term)) return null;
          const isSelected = selected.some(s => s.term === term);
          const isWrong = selected.length === 4 && isSelected && !matchedTerms.has(term);

          return (
            <div
              key={`${term}-${index}`}
              className={`mdr-tile ${isSelected ? 'selected' : ''} ${isWrong ? 'wrong' : ''}`}
              onClick={() => handleTileClick(term)}
            >
              {term}
            </div>
          );
        })}
      </div>

      <div className="mdr-boxes">
        {levelData.sets.map((set, i) => {
          const matchedInSet = set.terms.filter(t => matchedTerms.has(t));
          const isComplete = matchedInSet.length === 4;

          return (
            <div key={i} className={`mdr-drop-box ${isComplete ? 'complete' : ''}`}>
              <div className="mdr-box-label">{set.label}</div>
              <div className="mdr-box-terms">
                {isComplete && matchedInSet.map((term, idx) => (
                  <div key={idx} className="mdr-tile locked">
                    {term}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MDRGame;
