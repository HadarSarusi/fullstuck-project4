// src/components/DeleteActionsBar.jsx

import React from 'react';
import DeleteWordButton from './DeleteWordButton';
import ClearAllButton from './ClearAllButton';
import '../styles/DeleteActionsBar.css';

function DeleteActionsBar({ onTextChange }) {
  return (
    <div className="delete-actions-bar">
      <DeleteWordButton onTextChange={onTextChange} />
      <ClearAllButton onTextChange={onTextChange} />
    </div>
  );
}

export default DeleteActionsBar;
