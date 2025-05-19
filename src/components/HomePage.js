import React, { useState } from 'react';
import HeroSection from './HeroSection';
import FormSection from './FormSection';
import HavanStory from './HavanStory';
import DataDonation from './DataDonation';
import './HomePage.css';

function HomePage() {
  const [formData, setFormData] = useState({
    age: '',
    location: '',
    ethnic_group: '',
    type_of_abuse: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ PLACE YOUR handleSubmit RIGHT HERE:
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 
        (process.env.NODE_ENV === 'development'
          ? 'http://localhost:5000'
          : 'https://voiceforher-backend.onrender.com');

      const response = await fetch(`${API_BASE_URL}/reports`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('ሪፖርቱ በተሳካ ሁኔታ ተላክ!');
        setFormData({
          age: '',
          location: '',
          ethnic_group: '',
          type_of_abuse: '',
          description: ''
        });
      } else {
        alert('ሪፖርቱን ለማስገባት አልተሳካም።');
      }
    } catch (error) {
      console.error('Error submitting report:', error.message);
      alert('መላክ አልተሳካም። እባክህ እንደገና ሞክር።');
    }
  };

  return (
    <div>
      <HeroSection />
      <FormSection
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <HavanStory />
      <DataDonation />
    </div>
  );
}

export default HomePage;
