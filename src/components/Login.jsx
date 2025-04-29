// src/components/Login.jsx

import React, { useState, useEffect } from 'react';
import '../styles/Login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // ברירת מחדל: guest / 1234
  useEffect(() => {
    const guest = { username: 'guest', password: '1234' };
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify([guest]));
    }
  }, []);

  const handleLogin = () => {
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const match = savedUsers.find(
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
  );
}

export default Login;
