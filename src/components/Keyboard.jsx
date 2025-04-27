// src/components/Keyboard.jsx

import React from 'react';
import Button from './Button';
import '../styles/Keyboard.css';

function Keyboard({ onKeyClick }) {
  // רשימה של כפתורים שאנחנו רוצים במקלדת 🎹
  const keys = ['A', 'B', 'C', '😀', 'Delete', 'Space'];

  return (
    <div className="keyboard">
      {keys.map((key, index) => (
        <Button
          key={index}
          label={key}
          onClick={() => onKeyClick(key)}
        />
      ))}
    </div>
  );
}

export default Keyboard;
                