// src/components/SpaceButton.jsx

import React from 'react';
import Button from './Button';

function SpaceButton({ onTextChange }) {
  const handleClick = () => {
    onTextChange(prev => prev + ' ');
  };

  return <Button label="Space" onClick={handleClick} />;
}

export default SpaceButton;
