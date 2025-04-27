// src/components/TextEditor.jsx

import React from 'react';
import '../styles/TextEditor.css';
import Keyboard from './Keyboard';

function TextEditor({ text, onTextChange }) {
  // מה עושים כשלוחצים על כפתור מהמקלדת?
  const handleKeyClick = (key) => {
    if (key === 'Delete') {
      onTextChange(text.slice(0, -1)); // מוחק תו אחד בסוף
    } else if (key === 'Space') {
      onTextChange(text + ' '); // מוסיף רווח
    } else {
      onTextChange(text + key); // מוסיף את המקש
    }
  };

  return (
    <div className="text-editor">
      <input
        type="text"
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder="Type your text here..."
      />
      <Keyboard onKeyClick={handleKeyClick} />
    </div>
  );
}

export default TextEditor;
