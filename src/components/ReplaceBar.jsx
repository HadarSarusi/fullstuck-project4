// src/components/ReplaceBar.jsx

import React, { useState } from 'react';
import Button from './Button';
import '../styles/FindAndReplaceBar.css';

function ReplaceBar({ text, setText, setSearchTerm }) {
  const [findText, setFindText] = useState('');
  const [replaceText, setReplaceText] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('red');

  const handleReplaceClick = () => {
    if (!findText) return;

    if (!text.toLowerCase().includes(findText.toLowerCase())) {
      setMessage(`❌ לא נמצאה התאמה למילה: "${findText}"`);
      setMessageColor('red');
      return;
    }

    const updatedText = text.split(findText).join(replaceText);
    setText(updatedText);
    setMessage('✅ החלפה בוצעה בהצלחה!');
    setMessageColor('green');

    setFindText('');
    setReplaceText('');
    setSearchTerm('');

    // ננקה את ההודעה אחרי 2 שניות
    setTimeout(() => setMessage(''), 2000);
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

      {message && (
        <p style={{ color: messageColor, marginTop: '8px' }}>{message}</p>
      )}
    </div>
  );
}

export default ReplaceBar;
