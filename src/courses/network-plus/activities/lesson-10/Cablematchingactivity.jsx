import React, { useState } from 'react';
import './CableMatchingActivity.css';

const CableMatchingActivity = () => {
  const [currentRound, setCurrentRound] = useState(1);
  const [round1Answers, setRound1Answers] = useState({});
  const [round2Answers, setRound2Answers] = useState({});
  const [round3Wires, setRound3Wires] = useState(Array(8).fill(null));
  const [round1Score, setRound1Score] = useState(null);
  const [round2Score, setRound2Score] = useState(null);
  const [round3Score, setRound3Score] = useState(null);
  const [showRound3Hint, setShowRound3Hint] = useState(false);
  const [round3Attempts, setRound3Attempts] = useState(0);
  const [draggedItem, setDraggedItem] = useState(null);

  // Round 1: Cable Specifications Match
  const round1Specs = [
    { id: 'spec1', text: '1 Gbps up to 100m (most common home/office)', correct: 'Cat5e' },
    { id: 'spec2', text: '10 Gbps up to 100m (data center standard)', correct: 'Cat6a' },
    { id: 'spec3', text: '10 Gbps with full shielding', correct: 'Cat7' },
    { id: 'spec4', text: '40 Gbps up to 30m (bleeding edge)', correct: 'Cat8' },
    { id: 'spec5', text: 'Long distance fiber (kilometers)', correct: 'SMF' },
    { id: 'spec6', text: 'Short distance fiber (up to 2km)', correct: 'MMF' },
    { id: 'spec7', text: '1 Gbps or 10 Gbps at 55m', correct: 'Cat6' }
  ];

  const round1Cables = ['Cat5e', 'Cat6', 'Cat6a', 'Cat7', 'Cat8', 'SMF', 'MMF'];

  // Round 2: Connector Match
  const round2Types = [
    { id: 'type1', text: 'Twisted Pair (Ethernet)', correct: 'RJ45' },
    { id: 'type2', text: 'Fiber - Small Form Factor (most common)', correct: 'LC' },
    { id: 'type3', text: 'Fiber - Square Push-Pull', correct: 'SC' },
    { id: 'type4', text: 'Fiber - Bayonet Twist Lock', correct: 'ST' },
    { id: 'type5', text: 'Coaxial (TV/Cable Modem)', correct: 'F-Type' },
    { id: 'type6', text: 'Fiber - Small Duplex', correct: 'MTRJ' }
  ];

  const round2Connectors = ['RJ45', 'LC', 'SC', 'ST', 'F-Type', 'MTRJ'];

  // Round 3: T568B Wire Order
  const correctWireOrder = [
    'Orange/White',
    'Orange',
    'Green/White',
    'Blue',
    'Blue/White',
    'Green',
    'Brown/White',
    'Brown'
  ];

  const wireColors = {
    'Orange/White': '#ff9966',
    'Orange': '#ff6600',
    'Green/White': '#99ff99',
    'Green': '#00cc00',
    'Blue/White': '#99ccff',
    'Blue': '#0066cc',
    'Brown/White': '#cc9966',
    'Brown': '#996633'
  };

  const availableWires = ['Blue', 'Orange', 'Green/White', 'Brown/White', 
                          'Orange/White', 'Blue/White', 'Green', 'Brown'];

  // Round 1 Functions
  const handleRound1Drop = (specId, cable) => {
    setRound1Answers({ ...round1Answers, [specId]: cable });
  };

  const checkRound1 = () => {
    let correct = 0;
    round1Specs.forEach(spec => {
      if (round1Answers[spec.id] === spec.correct) {
        correct++;
      }
    });
    setRound1Score(correct * 10);
  };

  const resetRound1 = () => {
    setRound1Answers({});
    setRound1Score(null);
  };

  // Round 2 Functions
  const handleRound2Drop = (typeId, connector) => {
    setRound2Answers({ ...round2Answers, [typeId]: connector });
  };

  const checkRound2 = () => {
    let correct = 0;
    round2Types.forEach(type => {
      if (round2Answers[type.id] === type.correct) {
        correct++;
      }
    });
    setRound2Score(correct * 10);
  };

  const resetRound2 = () => {
    setRound2Answers({});
    setRound2Score(null);
  };

  // Round 3 Functions
  const handleWireDragStart = (wire) => {
    setDraggedItem(wire);
  };

  const handleWireDrop = (position) => {
    if (draggedItem) {
      const newWires = [...round3Wires];
      
      // If wire already placed somewhere, remove it
      const existingIndex = newWires.indexOf(draggedItem);
      if (existingIndex !== -1) {
        newWires[existingIndex] = null;
      }
      
      newWires[position] = draggedItem;
      setRound3Wires(newWires);
      setDraggedItem(null);
    }
  };

  const removeWire = (position) => {
    const newWires = [...round3Wires];
    newWires[position] = null;
    setRound3Wires(newWires);
  };

  const checkRound3 = () => {
    setRound3Attempts(round3Attempts + 1);
    
    const allCorrect = round3Wires.every((wire, index) => 
      wire === correctWireOrder[index]
    );
    
    if (allCorrect) {
      setRound3Score(100);
    } else {
      setRound3Score(0);
    }
  };

  const resetRound3 = () => {
    setRound3Wires(Array(8).fill(null));
    setRound3Score(null);
    setRound3Attempts(0);
    setShowRound3Hint(false);
  };

  const getHintMessage = () => {
    if (round3Attempts === 1) {
      return "💡 Hint: Remember, Orange pair comes first!";
    } else if (round3Attempts === 2) {
      return "💡 Hint: Pin 1 = Orange/White, Pin 2 = Orange";
    } else if (round3Attempts >= 3) {
      return "💡 Hint: Check the lesson notes for the complete T568B order!";
    }
    return "";
  };

  const getWiresBenchmark = () => {
    return availableWires.filter(wire => !round3Wires.includes(wire));
  };

  const getTotalScore = () => {
    return (round1Score || 0) + (round2Score || 0) + (round3Score || 0);
  };

  const getGrade = () => {
    const total = getTotalScore();
    if (total >= 210) return { grade: "Cable Master 🏆", color: "#00ff88" };
    if (total >= 180) return { grade: "Certified Technician ⚡", color: "#00d9ff" };
    if (total >= 150) return { grade: "Competent Builder 🔧", color: "#667eea" };
    return { grade: "Keep Practicing! 📚", color: "#ff9966" };
  };

  // Render Functions
  const renderRound1 = () => (
    <div className="cable-round">
      <h2>Round 1: Cable Specifications Match</h2>
      <p className="round-instructions">
        Drag the correct cable type to each specification. Each cable can only be used once.
      </p>

      <div className="cable-bench">
        <h3>Available Cables:</h3>
        <div className="cable-items">
          {round1Cables.map(cable => {
            const isUsed = Object.values(round1Answers).includes(cable);
            return (
              <div
                key={cable}
                className={`cable-chip ${isUsed ? 'used' : ''}`}
                draggable={!isUsed}
                onDragStart={() => setDraggedItem(cable)}
              >
                {cable}
              </div>
            );
          })}
        </div>
      </div>

      <div className="drop-zones">
        {round1Specs.map(spec => {
          const answer = round1Answers[spec.id];
          const isCorrect = round1Score !== null && answer === spec.correct;
          const isWrong = round1Score !== null && answer && answer !== spec.correct;
          
          return (
            <div
              key={spec.id}
              className={`drop-zone ${answer ? 'filled' : ''} ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleRound1Drop(spec.id, draggedItem)}
            >
              <div className="spec-text">{spec.text}</div>
              <div className="drop-area">
                {answer ? (
                  <span className="dropped-cable">{answer}</span>
                ) : (
                  <span className="drop-placeholder">Drop cable here</span>
                )}
              </div>
              {round1Score !== null && isCorrect && <span className="check-mark">✓</span>}
              {round1Score !== null && isWrong && <span className="x-mark">✗</span>}
            </div>
          );
        })}
      </div>

      <div className="round-controls">
        <button onClick={checkRound1} disabled={Object.keys(round1Answers).length < 7}>
          Check Answers
        </button>
        <button onClick={resetRound1} className="secondary">
          Reset Round
        </button>
        {round1Score !== null && (
          <button onClick={() => setCurrentRound(2)} className="next-round">
            Next Round →
          </button>
        )}
      </div>

      {round1Score !== null && (
        <div className="score-display">
          <p>Round 1 Score: <strong>{round1Score} / 70 points</strong></p>
        </div>
      )}
    </div>
  );

  const renderRound2 = () => (
    <div className="cable-round">
      <h2>Round 2: Connector Match</h2>
      <p className="round-instructions">
        Match each connector type to its corresponding cable type.
      </p>

      <div className="cable-bench">
        <h3>Available Connectors:</h3>
        <div className="cable-items">
          {round2Connectors.map(connector => {
            const isUsed = Object.values(round2Answers).includes(connector);
            return (
              <div
                key={connector}
                className={`cable-chip ${isUsed ? 'used' : ''}`}
                draggable={!isUsed}
                onDragStart={() => setDraggedItem(connector)}
              >
                {connector}
              </div>
            );
          })}
        </div>
      </div>

      <div className="drop-zones">
        {round2Types.map(type => {
          const answer = round2Answers[type.id];
          const isCorrect = round2Score !== null && answer === type.correct;
          const isWrong = round2Score !== null && answer && answer !== type.correct;
          
          return (
            <div
              key={type.id}
              className={`drop-zone ${answer ? 'filled' : ''} ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleRound2Drop(type.id, draggedItem)}
            >
              <div className="spec-text">{type.text}</div>
              <div className="drop-area">
                {answer ? (
                  <span className="dropped-cable">{answer}</span>
                ) : (
                  <span className="drop-placeholder">Drop connector here</span>
                )}
              </div>
              {round2Score !== null && isCorrect && <span className="check-mark">✓</span>}
              {round2Score !== null && isWrong && <span className="x-mark">✗</span>}
            </div>
          );
        })}
      </div>

      <div className="round-controls">
        <button onClick={checkRound2} disabled={Object.keys(round2Answers).length < 6}>
          Check Answers
        </button>
        <button onClick={resetRound2} className="secondary">
          Reset Round
        </button>
        {round2Score !== null && (
          <button onClick={() => setCurrentRound(3)} className="next-round">
            Next Round →
          </button>
        )}
      </div>

      {round2Score !== null && (
        <div className="score-display">
          <p>Round 2 Score: <strong>{round2Score} / 60 points</strong></p>
        </div>
      )}
    </div>
  );

  const renderRound3 = () => (
    <div className="cable-round round3">
      <h2>⭐ Round 3: T568B Wire Order Challenge</h2>
      <p className="round-instructions">
        Arrange the 8 wires in correct T568B standard order. This is the most important skill!
      </p>

      <div className="connector-visual">
        <h3>RJ45 Connector (Front View)</h3>
        <div className="connector-box">
          <div className="pin-numbers">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <div key={num} className="pin-number">{num}</div>
            ))}
          </div>
          <div className="pin-slots">
            {round3Wires.map((wire, index) => {
              const isCorrect = round3Score !== null && wire === correctWireOrder[index];
              const isWrong = round3Score !== null && wire && wire !== correctWireOrder[index];
              
              return (
                <div
                  key={index}
                  className={`pin-slot ${wire ? 'filled' : ''} ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => handleWireDrop(index)}
                >
                  {wire ? (
                    <div 
                      className="wire-in-slot"
                      style={{ backgroundColor: wireColors[wire] }}
                      onClick={() => removeWire(index)}
                      title="Click to remove"
                    >
                      {wire}
                    </div>
                  ) : (
                    <div className="empty-slot">[ ]</div>
                  )}
                  {round3Score !== null && isCorrect && <span className="slot-check">✓</span>}
                  {round3Score !== null && isWrong && <span className="slot-x">✗</span>}
                </div>
              );
            })}
          </div>
        </div>
        <p className="connector-hint">💡 Tip: Click a placed wire to remove it</p>
      </div>

      <div className="cable-bench">
        <h3>Available Wires (Drag to Connector):</h3>
        <div className="wire-items">
          {getWiresBenchmark().map((wire, index) => (
            <div
              key={`${wire}-${index}`}
              className="wire-chip"
              draggable
              onDragStart={() => handleWireDragStart(wire)}
              style={{ 
                backgroundColor: wireColors[wire],
                color: wire.includes('White') ? '#000' : '#fff'
              }}
            >
              {wire}
            </div>
          ))}
        </div>
      </div>

      {round3Attempts > 0 && round3Score === 0 && (
        <div className="hint-box">
          {getHintMessage()}
        </div>
      )}

      {showRound3Hint && (
        <div className="mnemonic-box">
          <h4>T568B Mnemonic:</h4>
          <p>"Orange Orange Green Blue-Blue Green Brown Brown"</p>
          <p className="mnemonic-detail">
            1: Orange/White | 2: Orange | 3: Green/White | 4: Blue<br/>
            5: Blue/White | 6: Green | 7: Brown/White | 8: Brown
          </p>
        </div>
      )}

      <div className="round-controls">
        <button 
          onClick={checkRound3} 
          disabled={round3Wires.some(w => w === null)}
        >
          Test Cable
        </button>
        <button onClick={resetRound3} className="secondary">
          Reset
        </button>
        <button 
          onClick={() => setShowRound3Hint(!showRound3Hint)} 
          className="hint-btn"
        >
          {showRound3Hint ? 'Hide Hint' : 'Show Mnemonic'}
        </button>
      </div>

      {round3Score !== null && (
        <div className={`cable-tester ${round3Score === 100 ? 'pass' : 'fail'}`}>
          <h3>Cable Tester Results:</h3>
          {round3Score === 100 ? (
            <>
              <div className="led-display">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(led => (
                  <div key={led} className="led on">
                    LED {led}: 🟢
                  </div>
                ))}
              </div>
              <p className="test-result success">
                ✅ All LEDs lighting in sequence - PASS!<br/>
                Perfect! Your cable would work! 🎉
              </p>
              <p className="round3-score">Round 3 Score: <strong>100 / 100 points</strong></p>
            </>
          ) : (
            <>
              <p className="test-result fail">
                ❌ Cable test failed! These pins are in wrong positions:
              </p>
              <div className="error-details">
                {round3Wires.map((wire, index) => {
                  if (wire !== correctWireOrder[index]) {
                    return (
                      <div key={index} className="error-pin">
                        Pin {index + 1}: {wire || 'Empty'} (should be {correctWireOrder[index]})
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
              <p className="try-again">Try again! No points deducted. 💪</p>
            </>
          )}
        </div>
      )}
    </div>
  );

  const renderFinalScore = () => {
    const total = getTotalScore();
    const { grade, color } = getGrade();
    
    return (
      <div className="final-score-card">
        <h2>🎉 Activity Complete!</h2>
        <div className="score-breakdown">
          <p>Round 1 (Cable Specs): <strong>{round1Score || 0} / 70</strong></p>
          <p>Round 2 (Connectors): <strong>{round2Score || 0} / 60</strong></p>
          <p>Round 3 (Wire Order): <strong>{round3Score || 0} / 100</strong></p>
          <hr/>
          <p className="total-score">Total Score: <strong>{total} / 230</strong></p>
        </div>
        <div className="final-grade" style={{ color }}>
          <h3>{grade}</h3>
        </div>
        {total >= 210 && (
          <p className="excellence-msg">
            Outstanding work! You've mastered cable identification and termination! 🏆
          </p>
        )}
        {total < 210 && total >= 150 && (
          <p className="good-msg">
            Great job! Review the lesson and try again to achieve Cable Master status! ⚡
          </p>
        )}
        {total < 150 && (
          <p className="practice-msg">
            Keep practicing! Review the lesson materials and try the activity again. 📚
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="cable-matching-activity">
      <div className="activity-header">
        <h1>🔌 Cable Matching Activity</h1>
        <p className="activity-subtitle">Test your knowledge of cables, connectors, and termination standards</p>
        
        <div className="round-tabs">
          <button 
            className={`round-tab ${currentRound === 1 ? 'active' : ''} ${round1Score !== null ? 'completed' : ''}`}
            onClick={() => setCurrentRound(1)}
          >
            Round 1: Cable Specs {round1Score !== null && '✓'}
          </button>
          <button 
            className={`round-tab ${currentRound === 2 ? 'active' : ''} ${round2Score !== null ? 'completed' : ''}`}
            onClick={() => setCurrentRound(2)}
            disabled={round1Score === null}
          >
            Round 2: Connectors {round2Score !== null && '✓'}
          </button>
          <button 
            className={`round-tab ${currentRound === 3 ? 'active' : ''} ${round3Score !== null ? 'completed' : ''}`}
            onClick={() => setCurrentRound(3)}
            disabled={round2Score === null}
          >
            Round 3: Wire Order {round3Score !== null && '✓'}
          </button>
        </div>

        <div className="score-tracker">
          <span>Current Score: <strong>{getTotalScore()} / 230</strong></span>
        </div>
      </div>

      <div className="activity-content">
        {currentRound === 1 && renderRound1()}
        {currentRound === 2 && renderRound2()}
        {currentRound === 3 && renderRound3()}
      </div>

      {round1Score !== null && round2Score !== null && round3Score !== null && (
        <div className="activity-footer">
          {renderFinalScore()}
        </div>
      )}
    </div>
  );
};

export default CableMatchingActivity;