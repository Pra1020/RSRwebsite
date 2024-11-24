"use client"
import React from 'react';

const AddressInfo = () => {
  return (
    <div className="address-container">
      {/* India Address Section */}
      <div className="india-address">
        <h2>INDIA Address:</h2>
        <p>
          <strong>RSR, Konappana Agrahara Bengaluru</strong><br />
          4, Service Rd, Konappana Agrahara, Electronic City – Bengaluru, Karnataka 560100, INDIA<br />
          <strong>Phone:</strong> 040 – 40181306<br />
          <strong>Email:</strong> <a href="https://www.rsrtechnologies.co.in/.org">rsrtechnologies.org</a>
        </p>
        <div className="map-container">
          {/* Embedded Map for India Location */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=...your-map-embed-url..."
            width="100%" height="100%" style={{ border: 'none' }} title="India Location"
          ></iframe>
        </div>
      </div>

      <style jsx>{`
        .address-container {
          margin: 20px;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .india-address {
          width: 100%;
        }

        .india-address h2 {
          font-size: 1.8rem;
          margin-bottom: 10px;
          color: #333;
        }

        .india-address p {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
        }

        .india-address a {
          color: #007bff;
          text-decoration: none;
          font-weight: bold;
        }

        .india-address a:hover {
          text-decoration: underline;
        }

        .map-container {
          width: 100%;
          height: 300px;
          background-color: #eaeaea;
          border-radius: 8px;
          margin-top: 20px;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .address-container {
            margin: 10px;
            padding: 10px;
          }

          .india-address h2 {
            font-size: 1.5rem;
          }

          .india-address p {
            font-size: 0.9rem;
          }

          .map-container {
            height: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default AddressInfo;


