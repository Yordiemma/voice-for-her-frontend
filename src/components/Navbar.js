
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
        VoiceForHer.
      </NavLink>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Regular Navbar Links for Desktop and Mobile */}
      <ul className={`navbar-links mobile-menu ${isOpen ? 'open' : ''}`}>

        <li>
          <NavLink 
            exact 
            to="/" 
            onClick={closeMenu} // Close menu on click
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            onClick={closeMenu} // Close menu on click
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/help" 
            onClick={closeMenu} // Close menu on click
          >
            Get Help
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/awareher" 
            onClick={closeMenu} // Close menu on click
          >
            Awareher
          </NavLink>
        </li>
        <li>
          <a 
            href="https://donate.unhcr.org/int/en/ethiopia-emergency" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="donate-link"
            onClick={closeMenu} // Close menu on click
          >
            Donate
          </a>
        </li>
      </ul>

      {/* Close the hamburger menu on large screens */}
      <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={closeMenu}></div>
    </nav>
  );
}

export default Navbar;