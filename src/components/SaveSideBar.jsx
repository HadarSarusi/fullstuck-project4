// src/components/SaveSideBar.jsx

import React, { useEffect, useState } from 'react';
import '../styles/SaveSideBar.css';

function SaveSideBar({ onLoadFile }) {
  const [savedFiles, setSavedFiles] = useState([]);

  useEffect(() => {
    loadSavedFiles();
  }, []);

  const loadSavedFiles = () => {
    const keys = Object.keys(localStorage);
    setSavedFiles(keys);
  };

  const handleFileClick = (fileName) => {
    const fileContent = localStorage.getItem(fileName);
    if (fileContent !== null) {
      const parsedContent = JSON.parse(fileContent);
      onLoadFile(parsedContent);
    } else {
      alert('קובץ לא נמצא.');
    }
  };

  return (
    <div className="save-sidebar">
      <h3>📁 הקבצים השמורים</h3>
      <ul>
        {savedFiles.map((file, index) => (
          <li key={index} onClick={() => handleFileClick(file)}>
            {file}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SaveSideBar;
