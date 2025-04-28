// src/components/DeleteWordButton.jsx

import React from 'react';
import Button from './Button';

function DeleteWordButton({ onTextChange }) {
  const handleDeleteWord = () => {
    onTextChange(prev => {
      const words = prev.trim().split(' ');
      words.pop(); // מוחק את המילה האחרונה
      return words.join(' ');
    });
  };

  return <Button label="Delete Word" onClick={handleDeleteWord} />;
}

export default DeleteWordButton;
