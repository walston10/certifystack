import { useState } from 'react';
import './OSIActivity.css';

function OSIActivity() {
  const [layers] = useState([
    { id: 7, name: 'Application', description: 'User applications & protocols (HTTP, FTP, DNS)' },
    { id: 6, name: 'Presentation', description: 'Data formatting, encryption & compression (SSL/TLS)' },
    { id: 5, name: 'Session', description: 'Connection management between applications' },
    { id: 4, name: 'Transport', description: 'TCP/UDP, reliability & port numbers' },
    { id: 3, name: 'Network', description: 'IP addresses & routing between networks' },
    { id: 2, name: 'Data Link', description: 'MAC addresses & switches on local network' },
    { id: 1, name: 'Physical', description: 'Cables, signals, and physical hardware' },
  ]);

  const [shuffled] = useState(() => {
    const copy = [...layers];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  });

  const [draggedItem, setDraggedItem] = useState(null);
  const [placed, setPlaced] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleDragStart = (layer) => {
    setDraggedItem(layer);
  };

  const handleDrop = (position) => {
    if (draggedItem) {
      const newPlaced = { ...placed, [position]: draggedItem };
      setPlaced(newPlaced);
      setDraggedItem(null);
    }
  };

  const handleCheck = () => {
    if (Object.keys(placed).length === 7) {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setPlaced({});
    setShowResults(false);
  };

  const isCorrect = (position) => {
    return placed[position] && placed[position].id === parseInt(position);
  };

  const allCorrect = showResults && Object.keys(placed).length === 7 && 
    Object.keys(placed).every(pos => isCorrect(pos));

  return (
    <div className="osi-activity">
      <h2>🎮 OSI Model Challenge</h2>
      <p>Drag and drop the layers into the correct order (7 at top, 1 at bottom)</p>

      {allCorrect && (
        <div className="success-message">
          🎉 Perfect! You've mastered the OSI Model layers!
        </div>
      )}

      <div className="activity-container">
        <div className="drop-zones">
          <h3>OSI Model Stack</h3>
          {[7, 6, 5, 4, 3, 2, 1].map(pos => (
            <div
              key={pos}
              className={`drop-zone ${placed[pos] ? 'filled' : ''} ${
                showResults && placed[pos]
                  ? isCorrect(pos)
                    ? 'correct'
                    : 'incorrect'
                  : ''
              }`}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(pos)}
            >
              {placed[pos] ? (
                showResults ? (
                  // AFTER checking - show if right or wrong
                  <>
                    <strong>
                      {isCorrect(pos) ? '✓' : '✗'} Layer {placed[pos].id}: {placed[pos].name}
                    </strong>
                    <span className="description">{placed[pos].description}</span>
                    {!isCorrect(pos) && (
                      <span className="correction">
                        Should be: Layer {pos}
                      </span>
                    )}
                  </>
                ) : (
                  // BEFORE checking - just show description
                  <span className="item-description">{placed[pos].description}</span>
                )
              ) : (
                <div className="placeholder">
                  <span className="layer-num">Layer {pos}</span>
                  <span className="hint">Drop here</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="drag-items">
          <h3>Available Layers</h3>
          <div className="items-grid">
            {shuffled
              .filter(layer => !Object.values(placed).includes(layer))
              .map(layer => (
                <div
                  key={layer.id}
                  className="drag-item"
                  draggable
                  onDragStart={() => handleDragStart(layer)}
                >
                  <span className="item-description">{layer.description}</span>
                </div>
              ))}
          </div>
          
          {Object.keys(placed).length === 7 && !showResults && (
            <button className="check-btn" onClick={handleCheck}>
              ✓ Check My Answer
            </button>
          )}
          
          {showResults && (
            <button className="reset-btn" onClick={handleReset}>
              🔄 Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default OSIActivity;