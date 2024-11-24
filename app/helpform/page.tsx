"use client";

import { useState } from "react";

const HelpFormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="form-title">Help Form</h2>
        <div className="form-field">
          <label htmlFor="name">Name</label>
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
          <label htmlFor="email">Email</label>
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
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      <style jsx>{`
        .form-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f3f4f6;
        }
        .form {
          background-color: white;
          padding: 24px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
        }
        .form-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 16px;
        }
        .form-field {
          margin-bottom: 16px;
        }
        .form-field label {
          display: block;
          font-weight: 500;
          margin-bottom: 8px;
        }
        .form-field input,
        .form-field textarea {
          width: 100%;
          padding: 8px;
          border: 1px solid #d1d5db;
          border-radius: 4px;
          box-sizing: border-box;
        }
        .form-field textarea {
          min-height: 100px;
        }
        .submit-btn {
          width: 100%;
          padding: 12px;
          background-color: #3b82f6;
          color: white;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .submit-btn:hover {
          background-color: #2563eb;
        }
      `}</style>
    </div>
  );
};

export default HelpFormPage;
