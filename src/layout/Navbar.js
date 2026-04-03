import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/layout/Navbar.css';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/report', label: 'Report Abuse' },
  { to: '/articles', label: 'Awareness' },
  { to: '/donate', label: 'Donate' },
  { to: '/about', label: 'About' },
  { to: '/help', label: 'Help' }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="navbar-logo-mark" aria-hidden="true">
            <span className="navbar-logo-heart" />
          </span>
          <span className="navbar-logo-text">Voice for Her</span>
        </NavLink>

        <button
          type="button"
          className="hamburger"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} onClick={closeMenu}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && <button type="button" className="overlay" onClick={closeMenu} />}
    </>
  );
}

export default Navbar;
