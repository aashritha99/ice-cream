import React, { useState } from 'react';
import './Auth.css';

import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    onLogin();
    navigate('/');
  };

  return (
    <div className="auth-glass login-card">
      <div className="login-icon">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="24" cy="24" rx="20" ry="20" fill="#fff6b7" />
          <ellipse cx="24" cy="18" rx="10" ry="8" fill="#f6416c" />
          <rect x="19" y="26" width="10" height="8" rx="4" fill="#ff69b4" />
        </svg>
      </div>
      <h2>Login to Ice Cream World</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      {error && <div className="login-error">{error}</div>}
      <div className="login-footer">
        <span>Don't have an account?</span>
        <a href="/register" className="login-link">Register</a>
      </div>
    </div>
  );
};

export default Login;
