import React from 'react';
import './DataDonation.css';

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
          <a 
            href="https://donate.unhcr.org/int/en/ethiopia-emergency" 
            className="donate-button" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Donate: UNICEF Ethiopia Emergency Fund
          </a>
        </div>
      </div>
    </section>
  );
}

export default DataDonation;
