// src/components/TextDisplay.jsx

import React from 'react';
import '../styles/TextDisplay.css';

function TextDisplay({ text, color, fontSize, fontFamily, searchTerm }) {
  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;

    const parts = text.split(new RegExp(`(${searchTerm})`, 'gi')); 
    return parts.map((part, index) => (
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <mark key={index}>{part}</mark>
      ) : (
        <span key={index}>{part}</span>
      )
    ));
  };

  return (
    <div className="text-display" style={{ color, fontSize, fontFamily }}>
      <p>
        {typeof text === 'string' ? highlightText(text, searchTerm) : ''}
      </p>
    </div>
  );
}

export default TextDisplay;
