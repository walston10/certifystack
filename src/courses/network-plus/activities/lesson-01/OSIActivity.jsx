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

  const [draggedItem, setDraggedItem] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null); // For mobile click-to-select
  const [placed, setPlaced] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleDragStart = (layer) => {
    setDraggedItem(layer);
  };

  const handleDrop = (position) => {
    if (draggedItem) {
      const newPlaced = { ...placed };
      
      // If position already has an item, return it to bay
      if (newPlaced[position]) {
        // Item automatically returns to available items when removed from placed
      }
      
      newPlaced[position] = draggedItem;
      setPlaced(newPlaced);
      setDraggedItem(null);
      setShowResults(false); // Hide results if they make changes after checking
    }
  };

  const handleItemClick = (layer) => {
    // Toggle selection for mobile mode
    if (selectedItem && selectedItem.id === layer.id) {
      setSelectedItem(null); // Deselect if clicking same item
    } else {
      setSelectedItem(layer);
    }
  };

  const handleZoneClick = (position) => {
    // If there's a selected item (mobile mode), place it
    if (selectedItem) {
      const newPlaced = { ...placed };
      
      // If position already has an item, it returns to bay automatically
      newPlaced[position] = selectedItem;
      setPlaced(newPlaced);
      setSelectedItem(null); // Deselect after placing
      setShowResults(false); // Hide results if they make changes
    } 
    // If clicking a filled zone (to remove), remove the item
    else if (placed[position]) {
      handleRemove(position);
    }
  };

  const handleRemove = (position) => {
    const newPlaced = { ...placed };
    delete newPlaced[position];
    setPlaced(newPlaced);
    setShowResults(false); // Hide results if they make changes
  };

  const handleCheck = () => {
    if (Object.keys(placed).length === 7) {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setPlaced({});
    setShowResults(false);
    setSelectedItem(null);
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
              onClick={() => handleZoneClick(pos)}
              style={{ cursor: placed[pos] || selectedItem ? 'pointer' : 'default' }}
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
                  // BEFORE checking - show only the name they placed
                  <>
                    <strong className="placed-name">{placed[pos].name}</strong>
                    <span className="remove-hint">Click to remove</span>
                  </>
                )
              ) : (
                <div className="placeholder">
                  <span className="layer-num">Layer {pos}</span>
                  <span className="hint">{selectedItem ? 'Click to place' : 'Drop here'}</span>
                  <span className="description-hint">{layers.find(l => l.id === pos).description}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="drag-items">
          <h3>Available Layers</h3>
          <p className="instruction-text">
            {selectedItem 
              ? '👆 Click a layer slot to place the selected item' 
              : 'Drag or click an item to select it'}
          </p>
          <div className="items-grid">
            {layers
              .filter(layer => !Object.values(placed).includes(layer))
              .map(layer => (
                <div
                  key={layer.id}
                  className={`drag-item ${selectedItem && selectedItem.id === layer.id ? 'selected' : ''}`}
                  draggable
                  onDragStart={() => handleDragStart(layer)}
                  onClick={() => handleItemClick(layer)}
                >
                  <span className="layer-name-display">{layer.name}</span>
                </div>
              ))}
          </div>
          
          {layers.filter(layer => !Object.values(placed).includes(layer)).length === 0 && !showResults && (
            <p className="all-placed-message">
              ✓ All layers placed! Click "Check My Answer" when ready.
            </p>
          )}
          
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
          
          {Object.keys(placed).length > 0 && !showResults && (
            <button className="clear-btn" onClick={handleReset}>
              Clear All
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default OSIActivity;