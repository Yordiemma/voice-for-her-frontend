import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './HomePage.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    location: '',
    description: '',
    date: '',
  });

  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Post data to backend
    fetch('http://localhost:5000/reports', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setFormData({
          name: '',
          age: '',
          location: '',
          description: '',
          date: ''
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    // Fetch data from backend
    fetch('http://localhost:5000/reports')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);
        const locationData = data.reduce((acc, report) => {
          const location = report.location;
          if (!acc[location]) {
            acc[location] = 0;
          }
          acc[location] += 1;
          return acc;
        }, {});
        
        const chartData = Object.keys(locationData).map(location => ({
          location,
          count: locationData[location],
        }));

        setData(chartData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
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
          <form className="report-form" onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Age:
              <input type="number" name="age" value={formData.age} onChange={handleChange} required />
            </label>
            <label>
              Location:
              <input type="text" name="location" value={formData.location} onChange={handleChange} required />
            </label>
            <label>
              Description:
              <textarea name="description" value={formData.description} onChange={handleChange} required></textarea>
            </label>
            
            <button type="submit">Submit Report</button>
          </form>
        </div>
      </section>

      <section className="data-visualization-section">
        <h2>Incident Reports by Location</h2>
        <div className="visualization">
          {data.length > 0 ? (
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="location" />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" />
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
