import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './HomePage.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Updated mock data
    const mockData = [
      { "location": "Addis Ababa", "count": 5 },
      { "location": "Amhara", "count": 20 },
      { "location": "Oromia", "count": 7 },
      { "location": "Tigray", "count": 18 },
      { "location": "Somali", "count": 4 },
      { "location": "Afar", "count": 3 },
      { "location": "Benishangul-Gumuz", "count": 2 },
      { "location": "Gambela", "count": 4 },
      { "location": "Harari", "count": 2 },
      { "location": "Sidama", "count": 6 },
      { "location": "SNNPR", "count": 8 },
      { "location": "Dire Dawa", "count": 3 }
    ];
    setData(mockData);
  }, []);

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
            <label>
              Date:
              <input type="date" name="date" required />
            </label>
            <button type="submit">Submit Report</button>
          </form>
        </div>
      </section>

      <section className="data-visualization-section">
        <h2>Incident Reports by Location</h2>
        <div className="visualization">
          {data.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="location" />
                <Tooltip />
                <Bar dataKey="count" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p>No data available or loading...</p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
