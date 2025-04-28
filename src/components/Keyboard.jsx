// src/components/Keyboard.jsx

import React from 'react';
import Button from './Button';
import SpaceButton from './SpaceButton';
import DeleteButton from './DeleteButton';
import '../styles/Keyboard.css';

function Keyboard({ language, onKeyClick, onTextChange }) {
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
      {/* מקשים רגילים */}
      <div className="keyboard-section">
        {getKeys().map((key, index) => (
          <Button key={`${language}-${index}`} label={key} onClick={() => onKeyClick(key)} />
        ))}
      </div>

      {/* מקשים מיוחדים: Space ו-Delete כקומפוננטות נפרדות */}
      <div className="keyboard-section">
        <SpaceButton onTextChange={onTextChange} />
        <DeleteButton onTextChange={onTextChange} />
      </div>
    </div>
  );
}

export default Keyboard;
