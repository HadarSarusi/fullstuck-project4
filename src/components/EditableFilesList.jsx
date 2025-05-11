// src/components/EditableFilesList.jsx

import React, { useState } from 'react';
import EditableFile from './EditableFile';
import Keyboard from './Keyboard';
import Button from './Button';
import SaveSideBar from './SaveSideBar';
import '../styles/EditableFilesList.css';

function EditableFilesList({ username }) {
  const [files, setFiles] = useState([]);
  const [activeFileId, setActiveFileId] = useState(null);
  //const [language, setLanguage] = useState('english');


  const handleAddFile = () => {
    const newFile = {
      id: Date.now(),
      text: '',
      color: 'black',
      fontSize: '24px',
      fontFamily: 'sans-serif',
      history: [],
      fileName: ''
    };
    setFiles(prev => [...prev, newFile]);
    setActiveFileId(newFile.id);
  };

  const handleTextChange = (id, newText) => {
    console.log("Text updated for file:", id, newText);
    setFiles(prev =>
      prev.map(file =>
        file.id === id
          ? { ...file, history: [...file.history, file.text], text: newText }
          : file
      )
    );
  };

  const handleLoadFile = (fileData) => {
    const newFile = {
      id: Date.now(),
      text: fileData.text || '',
      color: fileData.color || 'black',
      fontSize: fileData.fontSize || '24px',
      fontFamily: fileData.fontFamily || 'sans-serif',
      fileName: fileData.fileName || '',
      history: [],
    };
    setFiles(prev => [...prev, newFile]);
    setActiveFileId(newFile.id);
  };

  const handleRemoveFile = (id) => {
    setFiles(prev => prev.filter(file => file.id !== id));
  };

  const handleSpecialTextChange = (updater) => {
    if (activeFileId) {
      setFiles(prev =>
        prev.map(file =>
          file.id === activeFileId
            ? { ...file, history: [...file.history, file.text], text: updater(file.text) }
            : file
        )
      );
    }
  };

  const handleKeyClick = (key) => {
    if (activeFileId) {
      setFiles(prev =>
        prev.map(file =>
          file.id === activeFileId
            ? {
                ...file,
                history: [...file.history, file.text],
                text: (file.text || '') + key
              }
            : file
        )
      );
    }
  };

  return (
    <div className="editable-files-list">
      <div className="sidebar-and-files">
        <SaveSideBar
          username={username} 
          onLoadFile={handleLoadFile}
        />

        <div className="main-area">
          <Button label="➕ Add File" onClick={handleAddFile} />

          <div className="files-container">
            {files.map(file => (
              <EditableFile
                key={file.id}
                id={file.id}
                text={file.text}
                color={file.color}
                fontSize={file.fontSize}
                fontFamily={file.fontFamily}
                onTextChange={(newText) => handleTextChange(file.id, newText)}
                onLoadFile={handleLoadFile}
                onFocus={() => setActiveFileId(file.id)}
                isActive={file.id === activeFileId}
                onAfterSave={() => handleRemoveFile(file.id)}
                username={username} 
              />
            ))}
          </div>

          <Keyboard
            onKeyClick={handleKeyClick}
            onTextChange={handleSpecialTextChange}
          />
        </div>
      </div>
    </div>
  );
}

export default EditableFilesList;
