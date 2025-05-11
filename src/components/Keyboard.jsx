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

  const isInputFocused = () => {
    const tag = document.activeElement.tagName;
    return tag === 'INPUT' || tag === 'TEXTAREA';
  };

  const keys = getKeys();

  // מחלקים את המקשים ל-3 שורות
  const row1 = keys.slice(0, 10);
  const row2 = keys.slice(10, 19);
  const row3 = keys.slice(19);

  return (
    <div className="keyboard">
      {/* כפתורי שפה */}
      <div className="keyboard-section language-buttons">
        <Button label="English" onClick={() => setLanguage('english')} />
        <Button label="עברית" onClick={() => setLanguage('hebrew')} />
        <Button label="Emojis" onClick={() => setLanguage('emoji')} />
      </div>

      {/* שורות מקשים רגילים */}
      <div className="keyboard-section row-1">
        {row1.map((key, index) => (
          <Button
            key={`row1-${index}`}
            label={key}
            onClick={() => !isInputFocused() && onKeyClick(key)}
          />
        ))}
      </div>
      <div className="keyboard-section row-2">
        {row2.map((key, index) => (
          <Button
            key={`row2-${index}`}
            label={key}
            onClick={() => !isInputFocused() && onKeyClick(key)}
          />
        ))}
      </div>
      <div className="keyboard-section row-3">
        {row3.map((key, index) => (
          <Button
            key={`row3-${index}`}
            label={key}
            onClick={() => !isInputFocused() && onKeyClick(key)}
          />
        ))}
      </div>

      {/* שורת הפעולות */}
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
