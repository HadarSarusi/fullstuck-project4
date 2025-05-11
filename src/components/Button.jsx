// src/components/Button.jsx

import React from 'react';
import '../styles/Button.css';

export default function Button({ label, onClick }) {
  return (
    <button className="custom-button" onClick={onClick}>
      {label}
    </button>
  );
};
