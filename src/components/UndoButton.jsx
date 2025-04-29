// src/components/UndoButton.jsx

import React from 'react';
import Button from './Button';

function UndoButton({
  text,
  setText,
  color,
  setColor,
  fontSize,
  setFontSize,
  fontFamily,
  setFontFamily,
  history,
  setHistory
}) {
  const handleUndo = () => {
    if (history.length === 0) return;

    const last = history[history.length - 1];

    setText(last.text);
    setColor(last.color);
    setFontSize(last.fontSize);
    setFontFamily(last.fontFamily);
    setHistory((prev) => prev.slice(0, -1));
  };

  return <Button label="Undo" onClick={handleUndo} />;
}

export default UndoButton;
