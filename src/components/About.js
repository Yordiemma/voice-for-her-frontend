// File: src/components/About.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './About.css'; // Import the CSS for About component
import profileImage from '../assets/3.jpg'; // Correctly import the image

function About() {
  return (
    <div>
      <header className="site-header">
        <h1 className="site-title">Voice For Her</h1>
      </header>
      <Navbar />
      <section className="about-section">
        <img src={profileImage} alt="Your Name" className="profile-photo" />
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I was born into a mixed family with roots in both the Amhara and Tigray regions. Growing up, I always believed that no one chooses their ethnic group, religion, or country of birth, and that these circumstances should never be a cause for suffering.
          </p>
          <p>
            I've lived in Bahir Dar for a couple of years, and I've seen firsthand the innocence and kindness of the people there. It deeply pains me to see the ongoing genocide in the Amhara region, orchestrated by the Ethiopian government. As the world knows, this same government has also inflicted immense suffering on the Tigray people.
          </p>
          <p>
            My goal with this platform is to be a voice for those who cannot speak out, to raise awareness, and to stand against these atrocities. Together, we can work towards a future where all people are treated with the dignity and respect they deserve, regardless of their background.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
