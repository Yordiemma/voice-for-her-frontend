import React, { useState, useEffect } from 'react';

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
    const fetchReportsSummary = async () => {
      try {
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || (process.env.NODE_ENV === 'development' 
          ? 'http://localhost:5000' 
          : 'https://voiceforher-backend.onrender.com');
        
        const response = await fetch(`${API_BASE_URL}/reports-summary`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
  
        const data = await response.json();
        console.log('Fetched Reports Summary:', data); // Log the fetched data
        setReports(data);
      } catch (error) {
        console.error('Error fetching reports summary:', error);
      }
    };
    fetchReportsSummary();
  }, []);
  
//   useEffect(() => {
//     const fetchReportsSummary = async () => {
//       try {
//         const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || (process.env.NODE_ENV === 'development' 
//           ? 'http://localhost:5000' 
//           : 'https://voiceforher-backend.onrender.com');
        
//     //     const response = await fetch(`${API_BASE_URL}/reports-summary`);
//     //     const data = await response.json();
//     //     console.log('Fetched Reports Summary:', data);
//     //     setReports(data);
//     //   } catch (error) {
//     //     console.error('Error fetching reports summary:', error);
//     //   }
//     // };
//     const response = await fetch(`${API_BASE_URL}/reports-summary`);
    
//     if (!response.ok) {
//       throw new Error('Failed to fetch data');
//     }

//     const data = await response.json();
//     console.log('Fetched Reports Summary:', data);
    
//     // Set the reports directly from the fetched data
//     setReports(data);
//   } catch (error) {
//     console.error('Error fetching reports summary:', error);
//   }
// };
//     fetchReportsSummary();
//   }, []);
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || (process.env.NODE_ENV === 'development' 
        ? 'http://localhost:5000' 
        : 'https://voiceforher-backend.onrender.com');
      
      const response = await fetch(`${API_BASE_URL}/reports`, {  // Fix: Replaced hardcoded localhost with API_BASE_URL
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
      alert('ሪፖርቱን አልተሳካም');
    }
  };

  // Group data by ethnic group (Amhara and Tigray only)
  const ethnicGroups = ['አማራ', 'ትግራይ'];

const ethnicGroupData = ethnicGroups.map(group => {
  const reportsInGroup = reports.filter(report => report.ethnic_group === group);
  return reportsInGroup.length;
});






  const dataForChart = {
    labels: ethnicGroups, // X-axis labels (ethnic groups)
    datasets: [
      {
        label: 'Reports by Ethnic Group',
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
     
      <header className="site-header">
        <h1 className="site-title">Voice For Her/የሴቶችና ሕፃናት ድምፅ</h1>
        <p className="site-tagline">Raising awareness and giving a voice to the women and children affected by war in Ethiopia</p>

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
              <option value="">እባክዎን የብሄር ቡድን ይምረጡ</option>
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
      {/* Data Visualization and Donation Section Side by Side */}
      <section className="data-donation-wrapper">
        {/* Data Visualization Section */}
        <div className="data-visualization">
          <h3>Data Visualization</h3>
          <Bar data={dataForChart} options={options} />
        </div>

        {/* Donation Section */}
        <div className="donation-section">
          <div className="donation-message">
            
            <h3>Help Us Make a Difference</h3>
            <p>
            Since Abiy Ahmed came to power, Ethiopia has faced an escalating series of conflicts, first in Tigray and now in Amhara. His administration’s military campaigns have been devastating for the civilian population, especially women and children. The government’s war tactics have led to countless displacements, loss of homes, and severe trauma for innocent people
            </p>
            <p>
            Women have faced horrific violence, including widespread sexual assault, losing their homes, loved ones, and access to healthcare, food, and education. Mothers are struggling to care for their children in war-torn regions where basic services have collapsed.
            </p>
            <p>
            Children have been displaced, suffering from malnutrition and lack of education, with many experiencing deep physical and emotional trauma. Without urgent support, these innocent lives will continue to bear the devastating effects of the conflict.
            </p>
            <p>
              By donating to the <strong>UNICEF Ethiopia Emergency Fund</strong>, you are providing life-saving support to the most vulnerable. Your contribution can make a difference for those who have suffered the most.
            </p>
            <p>
              <strong>Donate now</strong> and be a voice for the voiceless.
            </p>
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


      
    </div>
  );
}

export default HomePage;
