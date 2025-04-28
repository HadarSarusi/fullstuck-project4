// src/components/EditableFilesList.jsx

import React, { useState } from 'react';
import EditableFile from './EditableFile';
import Keyboard from './Keyboard';
import Button from './Button';
import '../styles/EditableFilesList.css'; // גם ה-CSS מותאם לשם

function EditableFilesList() {
  const [files, setFiles] = useState([]);
  const [activeFileId, setActiveFileId] = useState(null);
  const [language, setLanguage] = useState('english');

  const handleAddFile = () => {
    const newFile = {
      id: Date.now(),
      text: '',
      color: 'black',
      fontSize: '24px',
      fontFamily: 'sans-serif',
    };
    setFiles(prev => [...prev, newFile]);
  };

  const handleDeleteFile = (id) => {
    setFiles(prev => prev.filter(file => file.id !== id));
    if (activeFileId === id) {
      setActiveFileId(null);
    }
  };

  const handleKeyClick = (key) => {
    if (activeFileId) {
      setFiles(prevFiles =>
        prevFiles.map(file =>
          file.id === activeFileId
            ? { ...file, text: (file.text || '') + key }
            : file
        )
      );
    }
  };

  return (
    <div className="editable-files-list">
      <Button label="➕ Add New File" onClick={handleAddFile} />

      <div className="files-container">
        {files.map(file => (
          <EditableFile
            key={file.id}
            id={file.id}
            text={file.text}
            color={file.color}
            fontSize={file.fontSize}
            fontFamily={file.fontFamily}
            onDelete={handleDeleteFile}
            onFocus={() => setActiveFileId(file.id)}
          />
        ))}
      </div>

      <Keyboard
        language={language}
        onKeyClick={handleKeyClick}
      />
    </div>
  );
}

export default EditableFilesList;
