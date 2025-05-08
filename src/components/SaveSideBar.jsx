// src/components/SaveSideBar.jsx

import React from 'react';
import '../styles/SaveSideBar.css';

function SaveSideBar({ onLoadFile, username }) {
  const savedFiles = Object.keys(localStorage)
    .filter((key) => key.startsWith(`${username}_`))
    .map((key) => {
      const fileData = JSON.parse(localStorage.getItem(key));
      if (fileData.username === username) {
        return key.replace(`${username}_`, '');
      }
      return null;
    })
    .filter(Boolean); // מסנן null

  const handleLoad = (fileName) => {
    const fullKey = `${username}_${fileName}`;
    const fileData = localStorage.getItem(fullKey);
    if (fileData) {
      const parsed = JSON.parse(fileData);
      parsed.fileName = fileName;
      onLoadFile(parsed);
    } else {
      alert(`לא נמצא קובץ בשם "${fileName}"`);
    }
  };

  return (
    <div className="save-sidebar">
      <h3>📁 קבצים שמורים</h3>
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
