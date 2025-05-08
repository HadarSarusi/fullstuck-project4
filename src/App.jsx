// src/App.jsx

import React, { useState } from 'react';
import Login from './components/Login';
import EditableFilesList from './components/EditableFilesList';
import './styles/App.css';

function App() {
  const [user, setUser] = useState(() => {
    return localStorage.getItem('loggedInUser') || null;
  });

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null);
  };

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <div className="app">
      <div className="top-bar">
        <span>👤logged in {user}</span>
        <button onClick={handleLogout}>🔄 logout</button>
      </div>

      <div className="editor-area">
        <EditableFilesList username={user} />
      </div>
    </div>
  );
}

export default App;
