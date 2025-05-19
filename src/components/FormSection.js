import React from 'react';
import './FormSection.css';

function FormSection({ formData, handleChange, handleSubmit }) {
  return (
    <section className="form-section">
      <div className="form-layout">
        {/* Left: Explanation */}
        <div className="form-description">
          <h3>Why Reporting Matters</h3>
          <p>
            Sharing your story can help prevent further harm, connect you with professional help, and bring justice. You are not alone.
          </p>
          <p>
            Our team includes psychologists and legal professionals ready to support you confidentially and respectfully.
          </p>
        </div>

        {/* Right: The Form */}
        <div className="form-container">
          <h4>ጥቃት መግለጫ</h4>
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
              <option value="">እባክዎን ይምረጡ</option>
              <option value="Oromo">Oromo</option>
              <option value="Amhara">Amhara</option>
              <option value="Tigray">Tigray</option>
              <option value="Somali">Somali</option>
              <option value="Afar">Afar</option>
              <option value="Other">Other</option>
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
      </div>
    </section>
  );
}

export default FormSection;
