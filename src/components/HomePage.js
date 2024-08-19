// File: src/components/HomePage.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <header className="site-header">
        <h1 className="site-title">Voice For Her</h1>
      </header>
      <Navbar />
      <section className="hero">
        <div className="hero-content">
          <p>Women's abuse due to war. Our mission is to raise awareness and provide support.</p>
        </div>
      </section>
      <section className="cards-section">
        <div className="card">
          <h3>Support</h3>
          <p>Find resources and support for those affected by the conflict.</p>
        </div>
        <div className="card">
          <h3>Stories</h3>
          <p>Read and share stories from those who have been impacted.</p>
        </div>
        <div className="card">
          <h3>Report an Incident</h3>
          <form className="report-form">
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Age:
              <input type="number" name="age" required />
            </label>
            <label>
              Location:
              <input type="text" name="location" required />
            </label>
            <label>
              Description:
              <textarea name="description" required></textarea>
            </label>
            <button type="submit">Submit Report</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;
