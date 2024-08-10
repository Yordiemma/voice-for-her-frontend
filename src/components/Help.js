// File: src/components/Help.js
import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import Footer from './Footer'; // Import the Footer component
import './Help.css';

function Help() {
  return (
    <div>
      <header className="site-header">
        <h1 className="site-title">Voice For Her</h1> {/* Same header as homepage */}
      </header>
      <Navbar /> {/* Navbar below the header */}
      <section className="help-section">
        <h1>Get Help</h1>
        <p className="intro-text">Need help now? Contact these organizations.</p>
        <div className="card-container">
          <div className="help-card">
            <h3>Ethiopian Women's Lawyers Association (EWLA)</h3>
            <p>Head Office (Addis Ababa):</p>
            <p>Address: Kirkos Sub-City, Woreda 01, House No. 772, Addis Ababa, Ethiopia</p>
            <p>Phone: +251 11 551 2644 / +251 11 551 4961</p>
            <p>Email: <a href="mailto:ewla@ewlaet.org">ewla@ewlaet.org</a></p>
            <p>Website: <a href="http://www.ewlaet.org" target="_blank" rel="noopener noreferrer">www.ewlaet.org</a></p>
            <p>Regional Offices: EWLA may have regional branches or partner organizations in both Amhara and Tigray. Contact the head office for specific details regarding regional support.</p>
          </div>
          <div className="help-card">
            <h3>International Rescue Committee (IRC)</h3>
            <p>Ethiopia Office:</p>
            <p>Address: Bole Sub-City, Woreda 13, Addis Ababa, Ethiopia</p>
            <p>Phone: +251 11 663 6735</p>
            <p>Website: <a href="http://www.rescue.org/country/ethiopia" target="_blank" rel="noopener noreferrer">www.rescue.org/country/ethiopia</a></p>
            <p>Amhara and Tigray: IRC operates in various regions of Ethiopia, including conflict zones. Contact the main office for information on specific programs in Amhara and Tigray.</p>
          </div>
          <div className="help-card">
            <h3>United Nations Office for the Coordination of Humanitarian Affairs (OCHA)</h3>
            <p>Ethiopia Office:</p>
            <p>Address: Menelik II Avenue, ECA Compound, Addis Ababa, Ethiopia</p>
            <p>Phone: +251 11 544 4030</p>
            <p>Email: <a href="mailto:ocha-eth@un.org">ocha-eth@un.org</a></p>
            <p>Website: <a href="http://www.unocha.org/ethiopia" target="_blank" rel="noopener noreferrer">www.unocha.org/ethiopia</a></p>
            <p>Tigray: OCHA coordinates humanitarian response, including protection services for women. Contact them for more details on specific support available in Tigray.</p>
          </div>
          <div className="help-card">
            <h3>UN Women Ethiopia</h3>
            <p>Ethiopia Office:</p>
            <p>Address: UNDP Ethiopia Compound, Bole Sub-City, Woreda 02, House No. 0886, Addis Ababa, Ethiopia</p>
            <p>Phone: +251 11 518 1053</p>
            <p>Email: <a href="mailto:unwomen.ethiopia@unwomen.org">unwomen.ethiopia@unwomen.org</a></p>
            <p>Website: <a href="http://africa.unwomen.org/en/where-we-are/eastern-and-southern-africa/ethiopia" target="_blank" rel="noopener noreferrer">africa.unwomen.org/en/where-we-are/eastern-and-southern-africa/ethiopia</a></p>
          </div>
          <div className="help-card">
            <h3>Médecins Sans Frontières (MSF) - Doctors Without Borders</h3>
            <p>Ethiopia Office:</p>
            <p>Address: Nefas Silk Lafto Sub-City, Woreda 3, House No. 163, Addis Ababa, Ethiopia</p>
            <p>Phone: +251 11 663 0295</p>
            <p>Website: <a href="http://www.msf.org/ethiopia" target="_blank" rel="noopener noreferrer">www.msf.org/ethiopia</a></p>
            <p>Amhara and Tigray: MSF operates in conflict zones and may provide medical and psychological support to survivors of abuse. Contact their office for specific services available in Amhara and Tigray.</p>
          </div>
          <div className="help-card">
            <h3>Ethiopian Human Rights Commission (EHRC)</h3>
            <p>Head Office (Addis Ababa):</p>
            <p>Address: Woreda 3, House No. 671, Addis Ababa, Ethiopia</p>
            <p>Phone: +251 11 550 7141 / +251 11 551 7702</p>
            <p>Email: <a href="mailto:ehrc@hrc.org.et">ehrc@hrc.org.et</a></p>
            <p>Website: <a href="http://www.ehrc.org" target="_blank" rel="noopener noreferrer">www.ehrc.org</a></p>
            <p>Regional Offices: The EHRC has regional offices in various parts of Ethiopia, including in Amhara and Tigray. Contact them to report human rights abuses or seek assistance.</p>
          </div>
          <div className="help-card">
            <h3>Organization for Women in Self Employment (WISE)</h3>
            <p>Head Office (Addis Ababa):</p>
            <p>Address: Nefas Silk Lafto Sub-City, Woreda 1, House No. 223, Addis Ababa, Ethiopia</p>
            <p>Phone: +251 11 440 7144</p>
            <p>Email: <a href="mailto:wise@wise.org.et">wise@wise.org.et</a></p>
            <p>Website: <a href="http://www.wise.org.et" target="_blank" rel="noopener noreferrer">www.wise.org.et</a></p>
            <p>Regional Programs: While primarily focused on economic empowerment, WISE may have programs or partnerships in Amhara and Tigray. Contact them for more information.</p>
          </div>
          <div className="help-card">
            <h3>Local Health Facilities and Hospitals</h3>
            <p><strong>Amhara Region:</strong></p>
            <p>Gondar University Hospital:</p>
            <p>Address: Gondar, Amhara Region, Ethiopia</p>
            <p>Phone: +251 58 111 4844</p>
            <p><strong>Tigray Region:</strong></p>
            <p>Ayder Referral Hospital:</p>
            <p>Address: Mekelle, Tigray Region, Ethiopia</p>
            <p>Phone: +251 34 441 3296</p>
          </div>
        </div>
      </section>
      <Footer /> {/* Include Footer */}
    </div>
  );
}

export default Help;
