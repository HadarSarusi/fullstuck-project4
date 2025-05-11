// src/components/Button.jsx

import React from 'react';
import '../styles/Button.css';

function Button({ label, onClick }) {
  return (
    <button className="custom-button keyboard-button" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
