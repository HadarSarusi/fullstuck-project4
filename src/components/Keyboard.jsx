// src/components/Keyboard.jsx

import React, { useState } from 'react';
import Button from './Button';
import SpaceButton from './SpaceButton';
import DeleteWordButton from './DeleteWordButton';
import DeleteButton from './DeleteButton';
import ClearAllButton from './ClearAllButton';
import UndoButton from './UndoButton';
import '../styles/Keyboard.css';

function Keyboard({ onKeyClick, onTextChange }) {
  const [language, setLanguage] = useState('english');

  const englishKeys = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z'
  ];

  const hebrewKeys = [
    'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז',
    'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ',
    'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת'
  ];

  const emojiKeys = [
    '😀', '😂', '😍', '🥳', '😎', '😢', '👍', '👑', '🔥', '🌈'
  ];

  const getKeys = () => {
    if (language === 'english') return englishKeys;
    if (language === 'hebrew') return hebrewKeys;
    if (language === 'emoji') return emojiKeys;
    return [];
  };

  return (
    <div className="keyboard">
      {/* מתגים לשפה */}
      <div className="keyboard-section">
        <Button label="English" onClick={() => setLanguage('english')} />
        <Button label="עברית" onClick={() => setLanguage('hebrew')} />
        <Button label="Emojis" onClick={() => setLanguage('emoji')} />
      </div>

      {/* מקשים רגילים */}
      <div className="keyboard-section">
        {getKeys().map((key, index) => (
          <Button key={`${language}-${index}`} label={key} onClick={() => onKeyClick(key)} />
        ))}
      </div>

      {/* מקשים מיוחדים */}
      <div className="keyboard-section actions">
        <SpaceButton onTextChange={onTextChange} />
        <DeleteButton onTextChange={onTextChange} />
        <DeleteWordButton onTextChange={onTextChange} />
        <ClearAllButton onTextChange={onTextChange} />
      </div>
    </div>
  );
}

export default Keyboard;
