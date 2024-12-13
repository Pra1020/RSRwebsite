"use client";

import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div>
      <style jsx>{`
        .about-container {
          max-width: 900px;
          margin: 40px auto;
          padding: 20px;
          background-color: #f3f3f3; /* Light gray background */
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          font-family: Arial, sans-serif;
          line-height: 1.6;
        }

        .about-title {
          text-align: center;
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .section-title {
          font-size: 1.2rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 10px;
        }

        .section-text {
          margin-bottom: 20px;
          color: #555;
          font-size: 1rem;
        }

        .organization-architecture {
          display: flex;
          justify-content: center;
          margin: 20px 0;
        }

        .organization-architecture img {
          max-width: 100%;
          border-radius: 8px;
        }
      `}</style>

      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <p style={{ fontWeight: "bold" }}>High-Level RSR Organization Architecture</p>
        <div className="organization-architecture">
          <img
            src="/WhatsApp Image 2024-11-27 at 12.58.40_7f7294e3.jpg"
            alt="High-Level RSR Organization Architecture"
          />
        </div>
        <div>
          <h2 className="section-title">Welcome to RSR TECHNOLOGIES</h2>
          <p className="section-text">
            RSR TECHNOLOGIES is a leading global e-learning provider aiming to bridge the gap between
            education and distance by offering well-crafted courses across the paradigm – IT, Business
            Management, Digital Marketing, and Soft Skills. With offices located in India and the US,
            our team of subject matter experts offers immersive and engaging online teaching to
            strengthen your core concepts and help implement them in the practical world. Be it
            designing, developing, and implementing training programs, corporate training, or
            placements, we have it all covered.
          </p>
        </div>
        <div>
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            We are dedicated to providing online training to students, corporate employees, and
            business professionals, which will help them keep up with the fast-paced changes in the
            industry.
          </p>
        </div>
        <div>
          <h2 className="section-title">Why Join Us?</h2>
          <p className="section-text">
            The deeper penetration of the Internet combined with advancements in technology has led
            to a world that is changing at an accelerated pace. There is a need for constant learning
            and upgrading of skills. This means not just students, but IT and business professionals
            need to stay updated with the changing times. Our virtual classrooms offer courses that
            are updated by industry veterans to help fresh graduates as well as experienced
            professionals. Simplifying it further for professionals, you can learn right from the
            comfort of your couch, and choose weekdays or weekends depending upon your convenience.
            From class recordings to live online sessions, our concise and clear courses are designed
            by highly qualified industry experts.
          </p>
          <p className="section-text">
            We have precisely designed training programs in Big Data Analytics, Cloud Computing,
            Testing, DevOps, Business Management, Digital Marketing, Databases & BI tools, Web
            Development, Soft Skills, Training for Juniors, GRE, IELTS, and we also offer training in
            programming languages like Python, SQL, Java, etc. We also have a lineup of popular
            courses keeping in view the industry needs such as Azure training, Amazon Web Services,
            Software testing, UI development, Hadoop, IoT, and Data science.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
