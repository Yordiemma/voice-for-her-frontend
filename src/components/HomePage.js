import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './HomePage.css';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function HomePage() {
  const [formData, setFormData] = useState({
    age: '',
    location: '',
    ethnic_group: '',
    type_of_abuse: '',
    description: ''
  });

  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch('http://localhost:5000/reports');
        const data = await response.json();
        setReports(data);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };
    fetchReports();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/reports', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('ሪፖርቱ በተሳካ ሁኔታ ተላክ!');
        setFormData({ age: '', location: '', ethnic_group: '', type_of_abuse: '', description: '' });
      } else {
        alert('ሪፖርቱን ለማስገባት አልተሳካም');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('ሪፖርቱን ለማስገባት በማንኛውም ሁኔታ አልተሳካም');
    }
  };

  // Group data by ethnic group
  const ethnicGroups = [
    'አማራ', 'ትግራይ', 'ኦሮሞ', 'ሶማሊ', 'አፋር', 'ጉራጌ', 'ሲዳማ', 'ወላይታ', 'ሃዲያ', 'ጋሞ', 'ጌዴዮ', 'አገው',
    'ካፋ', 'ሲልቴ', 'ካምባታ', 'ሐረሪ', 'አኑዋክ', 'ኑዬር', 'ቤንሻንጉል (ቤርታ)', 'ጉምዝ', 'ኮንሶ', 'ዳዉሮ',
    'አርቦሬ', 'ሙርሲ', 'ሱርማ (ሱሪ)', 'ካሮ', 'ሐማር', 'ቦራና', 'ዶርዜ','አዲስ አበባ'
  ];

  const ethnicGroupData = ethnicGroups.map(group => {
    const reportsInGroup = reports.filter(report => report.ethnic_group === group);
    return reportsInGroup.length;
  });

  const dataForChart = {
    labels: ethnicGroups, // X-axis labels (ethnic groups)
    datasets: [
      {
        label: 'በእዝቅ ቡድን ያስገቡት ሪፖርቶች',
        data: ethnicGroupData, // Y-axis values (number of reports)
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        stepSize: 1,
      },
    },
  };

  return (
    <div>
      <Navbar />
      <header className="site-header">
        <h1 className="site-title">Voice For Her/ድምጽ ለእሷ</h1>
      </header>

      {/* Hero Section with Form and Two Images */}
      <section className="hero">
        <div className="image-container">
          <img src={require('../assets/2 .webp')} alt="Empowering Women and Children 1" />
        </div>

        <div className="form-container">
          <h4>ጥቃት መግለጫ</h4> {/* Amharic Heading */}
          <form className="report-form" onSubmit={handleSubmit}>
            <label htmlFor="age">እድሜ:</label>
            <input 
              type="number" 
              id="age"
              name="age" 
              value={formData.age} 
              onChange={handleChange} 
              required 
            />

            <label htmlFor="location">ቦታ:</label>
            <input 
              type="text" 
              id="location"
              name="location" 
              value={formData.location} 
              onChange={handleChange} 
              required 
            />

            <label htmlFor="ethnic_group">የብሄር ቡድን:</label>
            <select 
              id="ethnic_group" 
              name="ethnic_group" 
              value={formData.ethnic_group} 
              onChange={handleChange} 
              required
            >
              <option value="">እባክዎን የብሄር ቡድኑን ይምረጡ</option>
              {ethnicGroups.map(group => (
                <option key={group} value={group}>{group}</option>
              ))}
            </select>

            <label htmlFor="type_of_abuse">የጥቃት አይነት:</label>
            <input 
              type="text" 
              id="type_of_abuse"
              name="type_of_abuse" 
              value={formData.type_of_abuse} 
              onChange={handleChange} 
              required 
            />

            <label htmlFor="description">መግለጫ:</label>
            <textarea 
              id="description"
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              required
            ></textarea>

            <button type="submit">ሪፖርት ይላኩ</button>
          </form>
        </div>

        <div className="image-container">
          <img src={require('../assets/et.webp')} alt="Empowering Women and Children 2" />
        </div>
      </section>

      {/* Havan's Story Section */}
      <section className="havan-story">
        <div className="havan-container">
          <div className="havan-image">
            <img src={require('../assets/Faven.jpg')} alt="Havan" />
          </div>
          <div className="havan-description">
            <h3>About Havan</h3>
            <p>
              Havan, a 7-year-old girl, has become a symbol of resilience in the face of violence against women and children. 
              Her story is a voice for all those who have suffered abuse during conflict. Havan's story, though tragic, 
              represents the strength of those who endure unimaginable hardships.
            </p>
            <p>
              By sharing her story, we aim to raise awareness and stand against violence, advocating for justice and 
              protection for the most vulnerable.
            </p>
            <p>
              You can learn more about Havan's story by visiting the full article here:
              <a href="https://zehabesha.com/rape-and-murder-of-7-year-old-girl-public-outrage-news-examiner/" target="_blank" rel="noopener noreferrer"> Read the Full Story</a>
            </p>
          </div>
        </div>
      </section>

      {/* Data Visualization Section */}
      <section className="data-visualization">
        <h3>Data Visualization</h3>
        <Bar data={dataForChart} options={options} />
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
