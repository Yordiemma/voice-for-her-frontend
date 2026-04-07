import React, { useState } from 'react';
import { submitReport } from '../utils/api';
import { abuseTypeOptions, countryOptions } from '../data/countryOptions';

const initialState = {
  abuseType: '',
  age: '',
  country: '',
  contactInfo: '',
  isAnonymous: true
};

function ReportForm({ compact = false }) {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
      ...(name === 'isAnonymous' && checked ? { contactInfo: '' } : {})
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const payload = {
        abuseType: formData.abuseType,
        age: Number(formData.age),
        country: formData.country.trim(),
        contactInfo: formData.isAnonymous
          ? undefined
          : formData.contactInfo.trim() || undefined
      };

      const result = await submitReport(payload);
      const tokenMessage = result.contactRemovalToken
        ? ` Save this token if you want to remove your contact details later: ${result.contactRemovalToken}`
        : '';

      setStatus({
        type: 'success',
        message:
          (result.message || 'Your report was submitted successfully.') +
          tokenMessage
      });
      setFormData(initialState);
      setShowSuccessModal(true);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`report-card ${compact ? 'report-card-compact' : ''}`}>
      <div className="section-kicker">Report Safely</div>
      <h2>Share an abuse report in a few clear steps</h2>
      <p className="section-lead">
        Reporting is public-interest focused and privacy-aware. No sign-in is
        required, and anonymous submissions are supported.
      </p>

      <form className="report-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>
            Type of abuse
            <select
              name="abuseType"
              value={formData.abuseType}
              onChange={handleChange}
              required
            >
              <option value="">Select one</option>
              {abuseTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            Age of the affected person
            <input
              type="number"
              name="age"
              min="0"
              max="120"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter age"
              required
            />
          </label>

          <label className="form-field-wide">
            Country or region
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select a country or region</option>
              {countryOptions.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </label>

          <label className="checkbox-field form-field-wide">
            <input
              type="checkbox"
              name="isAnonymous"
              checked={formData.isAnonymous}
              onChange={handleChange}
            />
            <span>Submit anonymously</span>
          </label>

          {!formData.isAnonymous && (
            <label className="form-field-wide">
              Contact information
              <input
                type="text"
                name="contactInfo"
                value={formData.contactInfo}
                onChange={handleChange}
                placeholder="Email or phone number"
              />
            </label>
          )}
        </div>

        <div className="form-guidance">
          <p>
            Do not include names, addresses, or details that could put someone
            at immediate risk.
          </p>
        </div>

        <button type="submit" className="primary-button" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting report...' : 'Submit Report'}
        </button>

        {status.message && (
          <div className={`form-status ${status.type}`}>{status.message}</div>
        )}
      </form>

      {showSuccessModal && (
        <div className="success-modal-backdrop" role="presentation">
          <div
            className="success-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="report-success-title"
          >
            <div className="section-kicker">Thank You</div>
            <h3 id="report-success-title">Thank you for your report.</h3>
            <p>
              Your report has been submitted successfully and saved to the
              system.
            </p>
            <button
              type="button"
              className="primary-button"
              onClick={() => setShowSuccessModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default ReportForm;
