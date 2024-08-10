// File: src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add any CSS if you want to style the Navbar

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/help">Get Help</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
