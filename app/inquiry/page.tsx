"use client"
import React, { useState } from 'react';

const InquiryPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Example: Send form data to an API or email service
    try {
      // Replace with your API endpoint
      const response = await fetch('/api/submitInquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error('Failed to submit the inquiry.');
      }
    } catch (error) {
      console.error('Error submitting the inquiry:', error);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <style jsx>{`
        .form-container {
          background: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .form-title {
          font-size: 1.5rem;
          margin-bottom: 20px;
          text-align: center;
        }
        .form-field {
          margin-bottom: 15px;
        }
        .form-field label {
          display: block;
          font-weight: bold;
          margin-bottom: 5px;
        }
        .form-field input,
        .form-field textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
        }
        .form-button {
          background: #0070f3;
          color: #fff;
          border: none;
          padding: 10px 15px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
        }
        .form-button:hover {
          background: #005bb5;
        }
        .success-message {
          color: green;
          text-align: center;
          margin-top: 20px;
        }
      `}</style>

      <div className="form-container">
        <h1 className="form-title">Inquiry Form</h1>
        {submitted ? (
          <div className="success-message">Thank you for your inquiry! We will get back to you soon.</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className="form-button">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default InquiryPage;
