// src/App.jsx
import React, { useState } from 'react';
import Login from './components/Login';
import EditableFilesList from './components/EditableFilesList';
import './styles/App.css';

function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <div className="app">
      <EditableFilesList username={user} />
    </div>
  );
}

export default App;
