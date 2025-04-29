// src/components/SaveSideBar.jsx

import React, { useEffect, useState } from 'react';
import '../styles/SaveSideBar.css';

function SaveSideBar({ onLoadFile, username }) {
  const [savedFiles, setSavedFiles] = useState([]);

  useEffect(() => {
    const updateList = () => {
      const keys = Object.keys(localStorage);
      const userFiles = keys.filter((key) => key.startsWith(`${username}_`));
      const fileNamesOnly = userFiles.map((key) => key.replace(`${username}_`, ''));
      setSavedFiles(fileNamesOnly);
    };

    updateList();
    window.addEventListener('storage', updateList);
    const interval = setInterval(updateList, 1000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('storage', updateList);
    };
  }, [username]);

  const handleLoad = (fileName) => {
    const fullKey = `${username}_${fileName}`;
    const fileData = localStorage.getItem(fullKey);
    if (fileData) {
      const parsed = JSON.parse(fileData);
      parsed.fileName = fileName;
      onLoadFile(parsed);
    } else {
      alert(`No data found for file "${fileName}"`);
    }
  };

  return (
    <div className="save-sidebar">
      <h3>📁 Saved Files</h3>
      <ul>
        {savedFiles.map((fileName, index) => (
          <li key={index} onClick={() => handleLoad(fileName)}>
            {fileName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SaveSideBar;
