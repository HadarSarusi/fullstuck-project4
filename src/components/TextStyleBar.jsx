// src/components/TextStyleBar.jsx

import React, { useState } from 'react';
import Button from './Button';
import '../styles/TextStyleBar.css';

function TextStyleBar({ onColorChange, onFontSizeChange, onFontFamilyChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBar = () => {
    setIsOpen(!isOpen);
  };

  const colors = ['#ff4d4d', '#4da6ff', '#4dff4d', '#ffd24d', '#d24dff'];
  const fontSizes = ['12px', '16px', '24px', '32px', '48px'];
  const fontFamilies = ['serif', 'sans-serif', 'monospace'];

  return (
    <div className="text-style-bar">
      <Button label="✏️ Text Style" onClick={toggleBar} />

      {isOpen && (
        <div className="bar-content">
          <div className="section">
            <h4>Colors</h4>
            <div className="options">
              {colors.map((color, index) => (
                <button
                  key={index}
                  style={{ backgroundColor: color }}
                  className="color-button"
                  onClick={() => onColorChange(color)}
                ></button>
              ))}
            </div>
          </div>

          <div className="section">
            <h4>Font Sizes</h4>
            <div className="options">
              {fontSizes.map((size, index) => (
                <Button
                  key={index}
                  label={size}
                  onClick={() => onFontSizeChange(size)}
                />
              ))}
            </div>
          </div>

          <div className="section">
            <h4>Font Family</h4>
            <div className="options">
              {fontFamilies.map((font, index) => (
                <Button
                  key={index}
                  label={font}
                  onClick={() => onFontFamilyChange(font)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TextStyleBar;
