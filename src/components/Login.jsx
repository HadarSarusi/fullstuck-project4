// src/components/Login.jsx

import React, { useState } from 'react';
import '../styles/Login.css';

function Login({ onLogin }) {
  const initializeUsers = () => {
    const defaultUsers = [
      { username: 'guest', password: '1234' },
      { username: 'newuser', password: 'abcd' }
    ];

    const existing = JSON.parse(localStorage.getItem('users'));
    if (!existing) {
      localStorage.setItem('users', JSON.stringify(defaultUsers));
      return defaultUsers;
    } else {
      const updated = [...existing];
      for (const user of defaultUsers) {
        const exists = existing.find(u => u.username === user.username);
        if (!exists) updated.push(user);
      }
      localStorage.setItem('users', JSON.stringify(updated));
      return updated;
    }
  };

  const [users] = useState(initializeUsers); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const match = users.find(
      (user) => user.username === username && user.password === password
    );

    if (match) {
      localStorage.setItem('loggedInUser', username);
      onLogin(username);
    } else {
      setError('שם משתמש או סיסמה שגויים 😕');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>🔐 Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError('');
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError('');
          }}
        />
        <button onClick={handleLogin}>Login</button>
        {error && <p className="error-msg">{error}</p>}
      </div>
    </div>
  );
}

export default Login;
