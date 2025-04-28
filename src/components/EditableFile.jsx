// src/components/EditableFile.jsx

import React from 'react';
import TextEditor from './TextEditor';
import TextDisplay from './TextDisplay';
import SaveLoadBar from './SaveLoadBar';
import Button from './Button';
import '../styles/EditableFile.css';

function EditableFile({ id, text, color, fontSize, fontFamily, onDelete, onFocus }) {

  const handleSave = (fileName) => {
    if (!fileName) {
      window.alert('Please enter a file name!');
      return;
    }
    const fileData = {
      text,
      color,
      fontSize,
      fontFamily
    };
    localStorage.setItem(fileName, JSON.stringify(fileData));
    window.alert(`Saved "${fileName}" successfully! 🎉`);
  };

  return (
    <div className="editable-file" onClick={onFocus}>
      <div className="file-header">
        <Button label="❌ Close" onClick={() => onDelete(id)} />
      </div>

      {/* אזור שמירה */}
      <SaveLoadBar
        text={text}
        color={color}
        fontSize={fontSize}
        fontFamily={fontFamily}
        onSaveFile={handleSave}
      />

      {/* אזור כתיבה */}
      <TextEditor
        text={text}
        onTextChange={() => {}} // כבר לא צריך שינוי טקסט כאן כי המקלדת כותבת
      />

      {/* אזור תצוגה */}
      <TextDisplay
        text={text}
        color={color}
        fontSize={fontSize}
        fontFamily={fontFamily}
      />
    </div>
  );
}

export default EditableFile;
