import React, { useState, useEffect } from 'react';
import { DndContext, DragOverlay, closestCenter } from '@dnd-kit/core';
import Draggable from './Draggable';
import Droppable from './Droppable';
import './PBQDragDrop.css';

function PBQDragDrop({ question, onAnswer, userAnswer, isReviewMode = false }) {
  const [activeId, setActiveId] = useState(null);
  const [droppedItems, setDroppedItems] = useState({});
  const [availableItems, setAvailableItems] = useState([]);

  // Initialize state from userAnswer or start fresh
  useEffect(() => {
    if (userAnswer) {
      setDroppedItems(userAnswer);
      // Calculate available items
      const usedItemIds = Object.values(userAnswer).flat();
      const available = question.items.filter(item => !usedItemIds.includes(item.id));
      setAvailableItems(available);
    } else {
      setDroppedItems({});
      setAvailableItems([...question.items]);
    }
  }, [question, userAnswer]);

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) {
      setActiveId(null);
      return;
    }

    const itemId = active.id;
    const zoneId = over.id;

    // Check if dropping on a zone or removing from a zone
    if (zoneId === 'available-items') {
      // Return item to available pool
      const newDroppedItems = { ...droppedItems };
      Object.keys(newDroppedItems).forEach(zone => {
        newDroppedItems[zone] = newDroppedItems[zone].filter(id => id !== itemId);
      });
      setDroppedItems(newDroppedItems);

      // Add back to available
      const item = question.items.find(i => i.id === itemId);
      if (item && !availableItems.find(i => i.id === itemId)) {
        setAvailableItems([...availableItems, item]);
      }

      onAnswer(newDroppedItems);
    } else {
      // Add to drop zone
      const newDroppedItems = { ...droppedItems };

      // Remove from previous zone if it was in one
      Object.keys(newDroppedItems).forEach(zone => {
        newDroppedItems[zone] = newDroppedItems[zone].filter(id => id !== itemId);
      });

      // Add to new zone
      if (!newDroppedItems[zoneId]) {
        newDroppedItems[zoneId] = [];
      }
      newDroppedItems[zoneId].push(itemId);

      setDroppedItems(newDroppedItems);

      // Remove from available
      setAvailableItems(availableItems.filter(item => item.id !== itemId));

      onAnswer(newDroppedItems);
    }

    setActiveId(null);
  };

  const getItemLabel = (itemId) => {
    const item = question.items.find(i => i.id === itemId);
    return item ? item.label : itemId;
  };

  const getCorrectItemsForZone = (zoneId) => {
    if (!isReviewMode || !question.correctAnswers) return [];
    return question.correctAnswers[zoneId] || [];
  };

  const isItemCorrectInZone = (itemId, zoneId) => {
    if (!isReviewMode) return null;
    const correctItems = getCorrectItemsForZone(zoneId);
    return correctItems.includes(itemId);
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="pbq-drag-drop">
        {/* Available Items Pool */}
        <div className="available-items-section">
          <h4>Available Items</h4>
          <Droppable id="available-items">
            <div className="items-pool">
              {availableItems.map(item => (
                <Draggable key={item.id} id={item.id} disabled={isReviewMode}>
                  <div className="item-card">
                    {item.label}
                  </div>
                </Draggable>
              ))}
              {availableItems.length === 0 && (
                <p className="empty-message">All items have been placed</p>
              )}
            </div>
          </Droppable>
        </div>

        {/* Drop Zones */}
        <div className="drop-zones-section">
          <h4>Drop Zones</h4>
          {question.dropZones.map(zone => (
            <div key={zone.id} className="drop-zone-container">
              <div className="zone-label">{zone.label}</div>
              <Droppable id={zone.id}>
                <div className={`drop-zone ${droppedItems[zone.id]?.length > 0 ? 'has-items' : ''}`}>
                  {droppedItems[zone.id]?.map(itemId => (
                    <Draggable key={itemId} id={itemId} disabled={isReviewMode}>
                      <div className={`item-card dropped ${
                        isReviewMode ? (isItemCorrectInZone(itemId, zone.id) ? 'correct' : 'incorrect') : ''
                      }`}>
                        {getItemLabel(itemId)}
                        {isReviewMode && isItemCorrectInZone(itemId, zone.id) && <span className="check">✓</span>}
                        {isReviewMode && !isItemCorrectInZone(itemId, zone.id) && <span className="x">✗</span>}
                      </div>
                    </Draggable>
                  ))}
                  {(!droppedItems[zone.id] || droppedItems[zone.id].length === 0) && (
                    <p className="drop-hint">Drop items here</p>
                  )}
                </div>
              </Droppable>

              {/* Show correct answer in review mode */}
              {isReviewMode && (
                <div className="correct-answer-display">
                  <strong>Correct:</strong> {getCorrectItemsForZone(zone.id).map(getItemLabel).join(', ') || 'None'}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Drag Overlay */}
        <DragOverlay>
          {activeId ? (
            <div className="item-card dragging-overlay">
              {getItemLabel(activeId)}
            </div>
          ) : null}
        </DragOverlay>
      </div>
    </DndContext>
  );
}

export default PBQDragDrop;
