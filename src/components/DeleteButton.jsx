// src/components/DeleteButton.jsx

import React from 'react';
import Button from './Button';

function DeleteButton({ onTextChange }) {
  const handleClick = () => {
    onTextChange(prev => prev.slice(0, -1));
  };

  return <Button label="Delete" onClick={handleClick} />;
}

export default DeleteButton;
