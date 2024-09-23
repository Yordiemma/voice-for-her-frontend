// File: src/Footer.js
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>© 2023 VoiceForHer. All rights reserved.</p>
        <div className="social-media-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100072061754806" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
