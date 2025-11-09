import React, { useState, useEffect } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import './PBQOrdering.css';

function SortableItem({ id, children, isCorrect, showFeedback }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`sortable-item ${isDragging ? 'dragging' : ''} ${showFeedback ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
    >
      <div className="drag-handle">☰</div>
      <div className="item-content">{children}</div>
      {showFeedback && (
        <div className="status-indicator">
          {isCorrect ? '✓' : '✗'}
        </div>
      )}
    </div>
  );
}

function PBQOrdering({ question, onAnswer, userAnswer, isReviewMode = false }) {
  const [items, setItems] = useState([]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  // Initialize from userAnswer or shuffle
  useEffect(() => {
    if (userAnswer && userAnswer.length > 0) {
      setItems(userAnswer);
    } else {
      // Shuffle items initially
      const shuffled = [...question.items].sort(() => Math.random() - 0.5);
      const itemIds = shuffled.map(item => item.id);
      setItems(itemIds);
      onAnswer(itemIds);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question]); // Intentionally not including userAnswer and onAnswer to prevent reset

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        const newItems = arrayMove(items, oldIndex, newIndex);
        onAnswer(newItems);
        return newItems;
      });
    }
  };

  const getItemLabel = (itemId) => {
    const item = question.items.find(i => i.id === itemId);
    return item ? item.label : itemId;
  };

  const isItemInCorrectPosition = (itemId, index) => {
    if (!isReviewMode) return null;
    return question.correctOrder[index] === itemId;
  };

  return (
    <div className="pbq-ordering">
      <div className="ordering-instructions">
        <p>Drag items to reorder them into the correct sequence</p>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <div className="sortable-list">
            {items.map((itemId, index) => (
              <div key={itemId} className="sortable-item-wrapper">
                <div className="item-number">{index + 1}</div>
                <SortableItem
                  id={itemId}
                  isCorrect={isItemInCorrectPosition(itemId, index)}
                  showFeedback={isReviewMode}
                >
                  {getItemLabel(itemId)}
                </SortableItem>
              </div>
            ))}
          </div>
        </SortableContext>
      </DndContext>

      {isReviewMode && (
        <div className="correct-order-display">
          <h4>Correct Order:</h4>
          <ol>
            {question.correctOrder.map(itemId => (
              <li key={itemId}>{getItemLabel(itemId)}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default PBQOrdering;
