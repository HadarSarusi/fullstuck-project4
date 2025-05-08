// src/components/SaveLoadBar.jsx

import React, { useState } from 'react';
import Button from './Button';
import '../styles/SaveLoadBar.css';

function SaveLoadBar({ text, color, fontSize, fontFamily, fileName, setFileName, onAfterSave, username }) {
  const [inputName, setInputName] = useState('');

  const handleSave = () => {
    const nameToSave = fileName || inputName;

    if (!nameToSave || !username) {
      window.alert('יש להזין שם קובץ ומשתמש');
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
    window.alert(`💾 הקובץ "${nameToSave}" נשמר עבור ${username}`);
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
