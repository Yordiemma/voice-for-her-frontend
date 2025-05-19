import React from 'react';

import './About.css'; // Import the CSS for About component
import profileImage from '../assets/3.jpg'; // Correctly import the image

function About() {
  return (
    <div>
     
     
      <section className="about-section">
        <img src={profileImage} alt="Your Name" className="profile-photo" />
        <div className="about-content">
          <h2>About VoiceForHer.</h2>
          
<p>
VoiceForHer. is a platform created with purpose and heart to speak up for Ethiopian women and children who are suffering in silence. Many are victims of abuse, violence, and displacement, and they are often left without protection or a way to be heard.
</p>
<p>
This app was built to give them a voice. It allows survivors or witnesses to report incidents safely, access resources for psychological and legal help, and connect with support networks. It's not just about raising awareness — it's about taking action, offering hope, and creating a digital space where stories can spark change.
</p>
<p>
Whether you're here to report, learn, support, or advocate — you're part of a mission to restore dignity, justice, and healing. Together, we can amplify their voices and make a difference.
</p>

         
        </div>
      </section>
     
    </div>
  );
}

export default About;
