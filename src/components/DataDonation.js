import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/legacy/DataDonation.css';

function DataDonation() {
  return (
    <section className="data-donation-wrapper">
      <div className="data-visualization">
        <h3>Data Visualization (Placeholder)</h3>
        <p>Charts will be added later. Working on frontend styling for now.</p>
      </div>
      <div className="donation-section">
        <div className="donation-message">
          <h3>Help Us Make a Difference</h3>
          <p>Since Abiy Ahmed came to power...</p>
          <Link to="/donate" className="donate-button">
            Donate through trusted organizations
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DataDonation;
