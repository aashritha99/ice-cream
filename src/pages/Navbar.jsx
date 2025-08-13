import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const flavours = [
  'Vanilla',
  'Chocolate',
  'Strawberry',
  'Mango',
  'Mint',
  'Cookie Dough',
  'Pistachio',
];

const Navbar = ({ onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest('.nav-flavours-dropdown')) setShowDropdown(false);
    };
    if (showDropdown) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showDropdown]);

  return (
    <nav className="navbar-glass">
      <Link to="/" className="nav-logo">🍦 Ice Cream World</Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <div className="nav-flavours-dropdown">
          <span
            className="nav-link"
            onClick={() => setShowDropdown(v => !v)}
            style={{cursor: 'pointer'}}
          >
            Flavours ▼
          </span>
          {showDropdown && (
            <div className="flavours-list">
              {flavours.map(flavour => (
                <span key={flavour} className="flavour-item">{flavour}</span>
              ))}
            </div>
          )}
        </div>
        <button className="nav-link logout-btn" onClick={onLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
