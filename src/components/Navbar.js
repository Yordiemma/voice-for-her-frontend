import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        VoiceForHer
      </NavLink>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Regular Navbar Links for Desktop and Mobile */}
      <ul className={`navbar-links ${isOpen ? 'mobile-menu open' : ''}`}>
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/help" activeClassName="active">Get Help</NavLink></li>
        <li><NavLink to="/awareher" activeClassName="active">Awareher</NavLink></li>
        <li>
          <a 
            href="https://donate.unhcr.org/int/en/ethiopia-emergency" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="donate-link"
          >
            Donate
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
