import React from 'react';
import '../styles/layout/Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">Voice for Her</div>
          <p>
            A global platform for awareness, reporting, public data, and support
            pathways related to abuse against women and children.
          </p>
        </div>
        <div>
          <h3>Public Access</h3>
          <p>Reports, charts, awareness content, and support information are public.</p>
        </div>
        <div>
          <h3>Contributor Access</h3>
          <p>Authentication is intended for writing and publishing articles only.</p>
        </div>
      </div>
      <div className="footer-note">
        © 2026 Voice for Her.
      </div>
    </footer>
  );
}

export default Footer;
