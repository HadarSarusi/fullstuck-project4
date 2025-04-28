// src/components/FindBar.jsx

import React, { useState } from 'react';
import Button from './Button';
import '../styles/FindAndReplaceBar.css';

function FindBar({ text, setSearchTerm }) {
  const [findText, setFindText] = useState('');

  const handleFindClick = () => {
    if (!findText) return;
    if (!text.toLowerCase().includes(findText.toLowerCase())) {
      window.alert('לא נמצאה התאמה 😔');
      setSearchTerm('');
    } else {
      setSearchTerm(findText);
    }
  };

  return (
    <div className="find-replace-bar">
      <input
        type="text"
        placeholder="Find..."
        value={findText}
        onChange={(e) => setFindText(e.target.value)}
      />
      <Button label="Find" onClick={handleFindClick} />
    </div>
  );
}

export default FindBar;
