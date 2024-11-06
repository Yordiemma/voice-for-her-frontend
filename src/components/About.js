import React from 'react';

import './About.css'; // Import the CSS for About component
import profileImage from '../assets/3.jpg'; // Correctly import the image

function About() {
  return (
    <div>
      <header className="site-header">
        <h1 className="site-title">About Voice For Her/የሴቶችና ሕፃናት ድምፅ</h1> {/* More descriptive title */}
      </header>
     
      <section className="about-section">
        <img src={profileImage} alt="Your Name" className="profile-photo" />
        <div className="about-content">
          <h2>About Voice For Her/የሴቶችና ሕፃናት ድምፅ</h2>
          <p>
          At Voice For Her, our mission is to amplify the voices of women and children who have been deeply affected by the ongoing conflicts in Ethiopia, particularly in the Amhara and Tigray regions. War and violence have left these vulnerable populations without homes, education, and essential healthcare. Many have endured unspeakable trauma, and their stories often go unheard.
          </p>
          <p>
          This platform serves as a space to raise awareness about their suffering and provide resources for support. We aim to gather data on the atrocities committed, share the personal stories of survivors, and mobilize global assistance for those in need. Through advocacy and direct support, we are committed to building a future where every woman and child can live with dignity, peace, and opportunity.


          </p>
         
        </div>
      </section>
     
    </div>
  );
}

export default About;
