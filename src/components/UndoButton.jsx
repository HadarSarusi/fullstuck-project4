// src/components/UndoButton.jsx

import React from 'react';
import Button from './Button';

function UndoButton({ text, setText, history, setHistory }) {
  const handleUndo = () => {
    if (history.length === 0) return;
    const lastState = history[history.length - 1];
    setText(lastState);
    setHistory(history.slice(0, -1));
  };

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <Button label="Undo" onClick={handleUndo} />
    </div>
  );
}

export default UndoButton;

