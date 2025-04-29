// src/components/EditableFile.jsx

import React, { useState } from 'react';
import TextEditor from './TextEditor';
import TextDisplay from './TextDisplay';
import SaveLoadBar from './SaveLoadBar';
import FindBar from './FindBar';
import ReplaceBar from './ReplaceBar';
import TextStyleBar from './TextStyleBar';
import UndoButton from './UndoButton';
import '../styles/EditableFile.css';

function EditableFile({
  id,
  text,
  color,
  fontSize,
  fontFamily,
  onTextChange,
  onLoadFile,
  onFocus,
  isActive,
  onAfterSave
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentColor, setCurrentColor] = useState(color);
  const [currentFontSize, setCurrentFontSize] = useState(fontSize);
  const [currentFontFamily, setCurrentFontFamily] = useState(fontFamily);
  const [history, setHistory] = useState([]);
  const [fileName, setFileName] = useState(''); // ✅ נשמר כאן שם הקובץ

  const saveToHistory = () => {
    setHistory((prev) => [
      ...prev,
      {
        text,
        color: currentColor,
        fontSize: currentFontSize,
        fontFamily: currentFontFamily,
      },
    ]);
  };

  return (
    <div
      className={`editable-file ${isActive ? 'active' : ''}`}
      onClick={onFocus}
    >
      {/* שמירה וטעינה */}
      <SaveLoadBar
  text={text}
  color={currentColor}
  fontSize={currentFontSize}
  fontFamily={currentFontFamily}
  fileName={fileName} // מעביר את שם הקובץ הקיים
  setFileName={setFileName}
  onLoadFile={(fileData) => {
    onLoadFile(fileData);
    if (fileData.fileName) setFileName(fileData.fileName); // שומר את שם הקובץ
  }}
  onAfterSave={onAfterSave}
/>

      {/* סטיילים */}
      <TextStyleBar
        onColorChange={(color) => {
          saveToHistory();
          setCurrentColor(color);
        }}
        onFontSizeChange={(size) => {
          saveToHistory();
          setCurrentFontSize(size);
        }}
        onFontFamilyChange={(family) => {
          saveToHistory();
          setCurrentFontFamily(family);
        }}
      />

      {/* Undo */}
      <UndoButton
        text={text}
        setText={onTextChange}
        color={currentColor}
        setColor={setCurrentColor}
        fontSize={currentFontSize}
        setFontSize={setCurrentFontSize}
        fontFamily={currentFontFamily}
        setFontFamily={setCurrentFontFamily}
        history={history}
        setHistory={setHistory}
      />

      {/* חיפוש */}
      <FindBar text={text} setSearchTerm={setSearchTerm} />

      {/* החלפה */}
      <ReplaceBar
        text={text}
        setText={(newText) => {
          saveToHistory();
          onTextChange(newText);
        }}
        setSearchTerm={setSearchTerm}
      />

      {/* תצוגה */}
      <TextDisplay
        text={text}
        color={currentColor}
        fontSize={currentFontSize}
        fontFamily={currentFontFamily}
        searchTerm={searchTerm}
      />

      {/* עורך */}
      <TextEditor
        text={text}
        onTextChange={(newText) => {
          saveToHistory();
          onTextChange(newText);
        }}
      />
    </div>
  );
}

export default EditableFile;
