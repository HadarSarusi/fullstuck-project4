// src/components/SaveLoadBar.jsx

import React, { useState } from 'react';
import Button from './Button';
import '../styles/SaveLoadBar.css';

function SaveLoadBar({ text, color, fontSize, fontFamily }) {
  const [fileName, setFileName] = useState('');

  const handleSave = () => {
    if (!fileName) {
      window.alert('Please enter a file name to save.');
      return;
    }
    const fileData = {
      text,
      color,
      fontSize,
      fontFamily
    };
    localStorage.setItem(fileName, JSON.stringify(fileData));
    window.alert(`Saved successfully as "${fileName}"! 🎉`);
    window.location.reload(); // נטען מחדש כדי לעדכן סיידבר
  };

  return (
    <div className="save-load-bar">
      <div className="input-with-save">
        <input
          type="text"
          placeholder="Enter file name..."
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />
        <span className="save-icon" onClick={handleSave}>
          💾
        </span>
      </div>
    </div>
  );
}

export default SaveLoadBar;
