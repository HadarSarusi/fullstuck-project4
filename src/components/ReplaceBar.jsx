// src/components/ReplaceBar.jsx

import React, { useState } from 'react';
import Button from './Button';
import '../styles/FindAndReplaceBar.css';

function ReplaceBar({ text, setText, setSearchTerm }) {
  const [findText, setFindText] = useState('');
  const [replaceText, setReplaceText] = useState('');
  const [message, setMessage] = useState('');

  const handleReplaceClick = () => {
    if (!findText) return;
    if (!text.toLowerCase().includes(findText.toLowerCase())) {
      setMessage('לא נמצאה התאמה 😔');
      return;
    }
    setMessage('');
    const updatedText = text.split(findText).join(replaceText);
    console.log("Replaced text:", updatedText);

    setText(updatedText);
    setFindText('');
    setReplaceText('');
    setSearchTerm('');

  };

  return (
    <div className="find-replace-bar">
      <input
        type="text"
        placeholder="Find..."
        value={findText}
        onChange={(e) => setFindText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Replace with..."
        value={replaceText}
        onChange={(e) => setReplaceText(e.target.value)}
      />
      <Button label="Replace" onClick={handleReplaceClick} />
      {message && <p style={{ color: 'red' }}>{message}</p>}
    </div>
  );
}

export default ReplaceBar;
