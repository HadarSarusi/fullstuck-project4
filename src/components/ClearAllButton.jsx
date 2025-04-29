// src/components/ClearAllButton.jsx

import React from 'react';
import Button from './Button';

function ClearAllButton({ onTextChange }) {
  const handleClearAll = () => {
    onTextChange(() => '');
  };

  return <Button label="Clear All" onClick={handleClearAll} />;
}

export default ClearAllButton;

