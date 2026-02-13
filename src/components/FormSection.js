import React, { useState, useEffect } from 'react';
import './FormSection.css';

function FormSection({ formData, handleChange, handleSubmit }) {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name')
      .then(res => res.json())
      .then(data => {
        const countryNames = data
          .map(c => c.name.common)
          .sort();
        setCountries(countryNames);
      })
      .catch(err => console.error("Failed to load countries", err));
  }, []);

  return (
    <section className="form-section">
      <div className="form-layout">

        <div className="form-description">
          <h3>Why Reporting Matters</h3>
          <p>
            Your report helps raise awareness, improve prevention systems,
            and support victims safely and anonymously.
          </p>
          <p>
            This platform protects your privacy. No account is required.
          </p>
        </div>

        <div className="form-container">
          <h4>Anonymous Abuse Report</h4>

          <form className="report-form" onSubmit={handleSubmit}>

            {/* Abuse Type */}
            <label htmlFor="abuseType">Type of Abuse</label>
            <select
              id="abuseType"
              name="abuseType"
              value={formData.abuseType}
              onChange={handleChange}
              required
            >
              <option value="">Select type</option>
              <option value="physical">Physical</option>
              <option value="verbal">Verbal</option>
              <option value="emotional">Emotional</option>
              <option value="sexual">Sexual</option>
              <option value="online">Online</option>
            </select>

            {/* Age */}
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              min="1"
              max="120"
            />

            {/* Country Dropdown */}
            <label htmlFor="country">Country</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select your country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>

            {/* Optional Contact */}
            <label htmlFor="contactInfo">
              Contact Information (Optional)
            </label>
            <input
              type="text"
              id="contactInfo"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              placeholder="Email or phone (optional)"
            />

            <button type="submit">Submit Report</button>

          </form>
        </div>
      </div>
    </section>
  );
}

export default FormSection;
