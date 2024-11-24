"use client"
import React, { useState } from 'react';

const FeedbackPage: React.FC = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Example: Send feedback to an API endpoint
    try {
      // Replace this with your actual API endpoint
      const response = await fetch('/api/submitFeedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feedback),
      });

      if (response.ok) {
        setSuccessMessage('Thank you for your feedback!');
        setFeedback({ name: '', email: '', comment: '' });
      } else {
        setSuccessMessage('Something went wrong. Please try again later.');
      }
    } catch (error) {
      setSuccessMessage('Error submitting feedback. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <style jsx>{`
        .feedback-container {
          background: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .form-title {
          font-size: 1.5rem;
          text-align: center;
          margin-bottom: 20px;
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
        .error-message {
          color: red;
          text-align: center;
          margin-top: 20px;
        }
      `}</style>

      <div className="feedback-container">
        <h1 className="form-title">We Value Your Feedback</h1>
        {successMessage && <div className="success-message">{successMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={feedback.name}
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
              value={feedback.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="comment">Comment/Feedback:</label>
            <textarea
              id="comment"
              name="comment"
              value={feedback.comment}
              onChange={handleChange}
              rows={5}
              required
            ></textarea>
          </div>
          <button type="submit" className="form-button">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackPage;
