"use client";
import React from "react";

const BecomeInstructor: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">Become an Instructor</h1>
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
          <h3>Become an Instructor!</h3>
          <h6>
            # Passionate about teaching? Looking for a platform on which to share
            your knowledge, connect with professionals, and enrich careers?
          </h6>
          <p>
            Yes, this is the right Place At Learntek, we take great pride in
            enabling progress. Whether it’s creating a network of world-class
            trainers, coaches, and industry experts. People here in turn, create
            high-quality courseware that resonates with professionals the world
            over, cutting across domains or nurturing budding careers, the
            emphasis is on helping people make a difference. And we invite you to
            come join us in our journey.
          </p>
          <h6># Who can teach?</h6>
          <p>
            Anyone who has an in-depth working knowledge of the particular domain
            and is very passionate about teaching and sharing his/her expert
            knowledge with students and professionals can teach at Learntek.
            Excellent command of oral and written English with very good
            presentation skills is mandatory. 
            <h6># Start earning real money today!</h6> 
            <p>At Learntek, we know the value of your time and effort & also understand
            that offering fair, flexible compensation options is a part of your
            business ethos. With our revenue-sharing model, you have the
            opportunity to earn tens of thousands every month! </p>
            <h6># Ready to partnerwith us!</h6>
            <p> We would like to hear from you. Please submit your
            information. We will get back to you ASAP.</p>
          </p>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1400px;
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
          background: #dedede;
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
          font-weight: bold;
        }

        .info h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: #333;
        }

        .info h6 {
          font-size: 1rem;
          color: #242424;
          font-weight: bold;
        }

        .info p {
         font-size: 1rem;
         color: #555; /* Removed font-weight: bold */
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

export default BecomeInstructor;
