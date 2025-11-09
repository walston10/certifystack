import React from 'react';
import { useDroppable } from '@dnd-kit/core';

function Droppable({ id, children, isOver }) {
  const { setNodeRef } = useDroppable({
    id: id
  });

  const style = {
    backgroundColor: isOver ? 'var(--accent-secondary)' : 'transparent',
    transition: 'background-color 0.2s ease'
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`droppable-zone ${isOver ? 'drop-target' : ''}`}
    >
      {children}
    </div>
  );
}

export default Droppable;
