// src/components/TextDisplay.jsx

import React from 'react';
import '../styles/TextDisplay.css';

function TextDisplay({ text }) {
  return (
    <div className="text-display">
      <p>{text}</p>
    </div>
  );
}

export default TextDisplay;
