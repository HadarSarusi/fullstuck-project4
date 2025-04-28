// src/App.jsx

import React, { useState } from 'react';
import TextEditor from './components/TextEditor';
import TextDisplay from './components/TextDisplay';
import TextStyleBar from './components/TextStyleBar';
import Keyboard from './components/Keyboard';
import Button from './components/Button';
import DeleteActionsBar from './components/DeleteActionsBar';
import UndoButton from './components/UndoButton';
import FindBar from './components/FindBar';
import ReplaceBar from './components/ReplaceBar';
import SaveLoadBar from './components/SaveLoadBar';
import SaveSideBar from './components/SaveSideBar';
import EditableFilesList from './components/EditableFilesList';
import './styles/App.css';

function App() {
  const [text, setText] = useState('');
  const [history, setHistory] = useState([]);
  const [color, setColor] = useState('black');
  const [fontSize, setFontSize] = useState('24px');
  const [fontFamily, setFontFamily] = useState('sans-serif');
  const [language, setLanguage] = useState('english');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="app">
      {/* הצגת טקסט */}
      <TextDisplay
        text={text}
        color={color}
        fontSize={fontSize}
        fontFamily={fontFamily}
        searchTerm={searchTerm}
      />

      {/* עורך טקסט */}
      <TextEditor
        text={text}
        onTextChange={(newText) => {
          setHistory((prev) => [...prev, text]);
          setText(newText);
        }}
      />

      
<EditableFilesList />

      {/* שמירת טקסט */}
      <SaveLoadBar
        text={text}
        color={color}
        fontSize={fontSize}
        fontFamily={fontFamily}
      />

      {/* בר עיצוב */}
      <TextStyleBar
        onColorChange={setColor}
        onFontSizeChange={setFontSize}
        onFontFamilyChange={setFontFamily}
      />

      {/* פעולות מחיקה */}
      <DeleteActionsBar
        onTextChange={(newText) => {
          setHistory((prev) => [...prev, text]);
          setText(newText);
        }}
      />

      {/* Undo */}
      <UndoButton
        text={text}
        setText={setText}
        history={history}
        setHistory={setHistory}
      />

      {/* חיפוש טקסט */}
      <FindBar
        text={text}
        setSearchTerm={setSearchTerm}
      />

      {/* החלפת טקסט */}
      <ReplaceBar
        text={text}
        setText={setText}
        history={history}
        setHistory={setHistory}
        setSearchTerm={setSearchTerm}
      />

      {/* שינוי שפה */}
      <div className="language-switcher">
        <Button label="English" onClick={() => setLanguage('english')} />
        <Button label="עברית" onClick={() => setLanguage('hebrew')} />
        <Button label="Emojis" onClick={() => setLanguage('emoji')} />
      </div>

      {/* מקלדת */}
      <Keyboard
        language={language}
        onKeyClick={(key) => {
          setHistory((prev) => [...prev, text]);
          setText(prev => prev + key);
        }}
        onTextChange={(newText) => {
          setHistory((prev) => [...prev, text]);
          setText(newText);
        }}
      />

      {/* טעינת קבצים */}
      <SaveSideBar
        onLoadFile={(fileData) => {
          setText(fileData.text || '');
          setColor(fileData.color || 'black');
          setFontSize(fileData.fontSize || '24px');
          setFontFamily(fileData.fontFamily || 'sans-serif');
        }}
      />
    </div>
  );
}

export default App;
