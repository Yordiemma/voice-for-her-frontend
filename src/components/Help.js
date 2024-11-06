import React from 'react';

import './Help.css';

function Help() {
  return (
    <div>
      <header className="site-header">
        <h1 className="site-title">Voice For Her</h1> {/* Same header as homepage */}
      </header>

      <section className="help-section">
        <h1>Get Help</h1>
        <p className="intro-text">Need help now? Contact these organizations./እርዳታ ከፈለጉ እነዚህን የጠቀሙ</p>
        <div className="card-container">

          {/* Red Cross Ethiopia */}
          <div className="help-card">
            <h3>Ethiopian Red Cross Society (Tigray and Amhara Regions)</h3>
            <p>Amhara Office:</p>
            <p>Phone: +251 58 111 1111</p> {/* Placeholder phone number */}
            <p>Tigray Office:</p>
            <p>Phone: +251 34 441 1234</p> {/* Placeholder phone number */}
            <p>Website: <a href="http://www.redcrosseth.org" target="_blank" rel="noopener noreferrer">www.redcrosseth.org</a></p>
            <p>The Red Cross operates in both Amhara and Tigray, providing emergency relief, medical services, and psychosocial support.</p>
          </div>

          {/* International Rescue Committee (IRC) */}
          <div className="help-card">
            <h3>International Rescue Committee (IRC) - Tigray and Amhara</h3>
            <p>Tigray Office:</p>
            <p>Phone: +251 34 441 5678</p> {/* Placeholder phone number */}
            <p>Amhara Office:</p>
            <p>Phone: +251 58 222 3333</p> {/* Placeholder phone number */}
            <p>Website: <a href="http://www.rescue.org/country/ethiopia" target="_blank" rel="noopener noreferrer">www.rescue.org/country/ethiopia</a></p>
            <p>The IRC is active in both regions, providing humanitarian aid, medical care, and protection services. Contact them for more details.</p>
          </div>

          {/* Médecins Sans Frontières (MSF) */}
          <div className="help-card">
            <h3>Médecins Sans Frontières (MSF) - Tigray and Amhara</h3>
            <p>Tigray Office:</p>
            <p>Phone: +251 34 441 7654</p> {/* Placeholder phone number */}
            <p>Amhara Office:</p>
            <p>Phone: +251 58 333 4444</p> {/* Placeholder phone number */}
            <p>Website: <a href="http://www.msf.org/ethiopia" target="_blank" rel="noopener noreferrer">www.msf.org/ethiopia</a></p>
            <p>MSF provides medical care, including psychological support to survivors of violence and conflict, in Tigray and Amhara.</p>
          </div>

          {/* United Nations Office for the Coordination of Humanitarian Affairs (OCHA) */}
          <div className="help-card">
            <h3>United Nations Office for the Coordination of Humanitarian Affairs (OCHA) - Tigray and Amhara</h3>
            <p>Tigray Office:</p>
            <p>Phone: +251 34 441 8900</p> {/* Placeholder phone number */}
            <p>Amhara Office:</p>
            <p>Phone: +251 58 444 5678</p> {/* Placeholder phone number */}
            <p>Website: <a href="http://www.unocha.org/ethiopia" target="_blank" rel="noopener noreferrer">www.unocha.org/ethiopia</a></p>
            <p>OCHA coordinates humanitarian responses, including protection services for women and children in Tigray and Amhara.</p>
          </div>

          {/* Ethiopian Human Rights Commission (EHRC) */}
          <div className="help-card">
            <h3>Ethiopian Human Rights Commission (EHRC) - Tigray and Amhara</h3>
            <p>Tigray Office:</p>
            <p>Phone: +251 34 441 2222</p> {/* Placeholder phone number */}
            <p>Amhara Office:</p>
            <p>Phone: +251 58 111 5678</p> {/* Placeholder phone number */}
            <p>Website: <a href="http://www.ehrc.org" target="_blank" rel="noopener noreferrer">www.ehrc.org</a></p>
            <p>The EHRC has regional offices in both Tigray and Amhara. Contact them to report human rights abuses or seek assistance.</p>
          </div>

          {/* Local Health Facilities and Hospitals */}
          <div className="help-card">
            <h3>Local Health Facilities and Hospitals in Amhara and Tigray</h3>
            <p><strong>Amhara Region:</strong></p>
            <p>Gondar University Hospital:</p>
            <p>Phone: +251 58 111 4844</p>
            <p><strong>Tigray Region:</strong></p>
            <p>Ayder Referral Hospital:</p>
            <p>Phone: +251 34 441 3296</p>
          </div>
          
        </div>
      </section>
    
    </div>
  );
}

export default Help;
