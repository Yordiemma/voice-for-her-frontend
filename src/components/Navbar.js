import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add your CSS to style the Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/help">Get Help</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
