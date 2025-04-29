// src/components/SaveLoadBar.jsx

import React, { useState } from 'react';
import Button from './Button';
import '../styles/SaveLoadBar.css';

function SaveLoadBar({
  text, color, fontSize, fontFamily,
  fileName, setFileName, onAfterSave,
  username // 👈 קיבלנו את שם המשתמש
}) {
  const [inputName, setInputName] = useState('');

  const handleSave = () => {
    const nameToSave = fileName || inputName;

    if (!nameToSave || !username) {
      window.alert('Please enter a file name and make sure you are logged in.');
      return;
    }

    const fullKey = `${username}_${nameToSave}`;

    const data = {
      text,
      color,
      fontSize,
      fontFamily,
      fileName: nameToSave,
      username
    };

    localStorage.setItem(fullKey, JSON.stringify(data));

    if (!fileName && setFileName) {
      setFileName(nameToSave);
    }

    if (onAfterSave) onAfterSave(nameToSave);
    window.alert(`Saved as "${nameToSave}" for user ${username}`);
  };

  return (
    <div className="save-load-bar">
      {!fileName && (
        <input
          type="text"
          placeholder="Enter file name..."
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
      )}
      <Button label="💾 Save" onClick={handleSave} />
    </div>
  );
}

export default SaveLoadBar;
