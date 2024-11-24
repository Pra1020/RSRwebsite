"use client"
import React from "react";

const Careers: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">Careers</h1>
      <div className="formContainer">
        <form className="form">
          <div className="formGroup">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email Id</label>
            <input type="email" id="email" placeholder="Email Id" />
          </div>
          <div className="formGroup">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="Phone Number" />
          </div>
          <div className="formGroup">
            <label htmlFor="message">Enter Your Message</label>
            <textarea id="message" placeholder="Enter Your Message"></textarea>
          </div>
          <div className="formGroup">
            <label htmlFor="resume">Upload Resume:*</label>
            <input type="file" id="resume" />
          </div>
          <button type="submit" className="submitButton">
            SUBMIT
          </button>
        </form>
        <div className="info">
          <h3>Work for us!</h3>
          <p>
            If you are inquisitive, a team player and have a thirst for
            knowledge, then we are looking for dynamic candidates like you to
            work for us. By joining our team, you can expect a collaborative,
            fun and learning work environment.
          </p>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .title {
          text-align: left;
          font-size: 2rem;
          color: #333;
        }

        .formContainer {
          display: flex;
          gap: 20px;
          background: #e5e5e5;
          padding: 20px;
          border-radius: 8px;
        }

        .form {
          flex: 2;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .formGroup {
          display: flex;
          flex-direction: column;
        }

        .formGroup label {
          margin-bottom: 5px;
          font-weight: bold;
          color: #555;
        }

        .formGroup input,
        .formGroup textarea {
          padding: 10px;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .formGroup textarea {
          resize: none;
          height: 100px;
        }

        .submitButton {
          background-color: #ff5722;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: bold;
        }

        .submitButton:hover {
          background-color: #e64a19;
        }

        .info {
          flex: 1;
          padding: 10px;
        }

        .info h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: #333;
        }

        .info p {
          font-size: 1rem;
          color: #555;
        }

        @media (max-width: 768px) {
          .formContainer {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Careers;
