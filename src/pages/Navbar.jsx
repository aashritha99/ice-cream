import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onLogout }) => (
  <nav className="navbar-glass">
    <Link to="/" className="nav-logo">🍦 Ice Cream World</Link>
    <div className="nav-links">
      <Link to="/" className="nav-link">Home</Link>
      <button className="nav-link logout-btn" onClick={onLogout}>Logout</button>
    </div>
  </nav>
);

export default Navbar;
