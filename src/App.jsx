// src/App.jsx

import React, { useState } from 'react';
import TextEditor from './components/TextEditor';
import TextDisplay from './components/TextDisplay';
import './styles/App.css';

function App() {
  const [text, setText] = useState('');

  return (
    <div className="app">
      <TextDisplay text={text} />
      <TextEditor text={text} onTextChange={setText} />
    </div>
  );
}

export default App;
