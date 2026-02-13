import React, { useState } from 'react';
import HeroSection from './HeroSection';
import FormSection from './FormSection';
import HavanStory from './HavanStory';
import DataDonation from './DataDonation';
import './HomePage.css';

function HomePage() {
  const [formData, setFormData] = useState({
    abuseType: '',
    age: '',
    country: '',
    contactInfo: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const API_BASE_URL =
        process.env.REACT_APP_API_BASE_URL ||
        (process.env.NODE_ENV === 'development'
          ? 'http://localhost:5000'
          : 'https://voiceforher-backend.onrender.com');

      const response = await fetch(`${API_BASE_URL}/reports`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          abuseType: formData.abuseType,
          age: Number(formData.age),
          country: formData.country,
          contactInfo: formData.contactInfo || undefined
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);

        if (data.contactRemovalToken) {
          alert(
            "Save this token to remove contact info later: " +
              data.contactRemovalToken
          );
        }

        // Reset form
        setFormData({
          abuseType: '',
          age: '',
          country: '',
          contactInfo: ''
        });
      } else {
        alert(data.error || "Failed to submit report.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
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
