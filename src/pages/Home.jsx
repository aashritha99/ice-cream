import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="glass-container">
      <h1 className="ice-cream-title">🍦 Welcome to Ice Cream World 🍦</h1>
      <div className="ice-cream-3d">
        {/* Placeholder for 3D ice cream animation */}
        <div className="cone"></div>
        <div className="scoop"></div>
      </div>
      <p className="hover-info">Hover over the ice cream for a surprise!</p>
    </div>
  );
};

export default Home;
