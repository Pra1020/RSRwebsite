"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  // Set the target date for the offer (e.g., 1 day from now)
  const targetDate = new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000); // 1 day from now

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Update the timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval); // Stop the timer when the offer ends
        return;
      }

      // Calculate time components
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [targetDate]);

  return (
    <header>
      <style jsx>{`
        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #4ed8e5; /* Light blue */
          padding: 10px 20px;
          color: #2120b8; /* Dark blue text */
          font-size: 1rem;
          font-weight: bold;
        }

        .timer {
          display: flex;
          gap: 10px;
        }

        .timer-box {
          background-color: #b2e8ef;
          padding: 5px 10px;
          border-radius: 4px;
          font-weight: bold;
          color: #00008b; /* Dark blue for timer text */
        }

        .offer-btn {
          background-color: #ff4d3a; /* Red button */
          color: #ffffff;
          padding: 5px 15px;
          border-radius: 20px;
          text-transform: uppercase;
          font-size: 0.9rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .offer-btn:hover {
          background-color: #e63e2d;
        }

        .nav-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #15233a; /* Dark navy blue */
          padding: 10px 20px;
          color: white;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 2rem;
          font-weight: bold;
        }

        .nav-links {
          display: flex;
          gap: 20px;
          font-size: 0.9rem;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: #4ed8e5; /* Light blue */
        }

        .whatsapp-icon {
          width: 40px;
          height: 40px;
          position: fixed;
          top: 10px;
          right: 20px;
          cursor: pointer;
          z-index: 1000; /* Ensure it stays above other elements */
        }
      `}</style>

      {/* Countdown Timer */}
      <div className="top-bar">
        <div>
           Season&apos;s Best Discount Offer Ends in
          <span className="timer">
            <span className="timer-box">{String(timeLeft.days).padStart(2, "0")}d</span>
            <span className="timer-box">{String(timeLeft.hours).padStart(2, "0")}h</span>
            <span className="timer-box">{String(timeLeft.minutes).padStart(2, "0")}m</span>
            <span className="timer-box">{String(timeLeft.seconds).padStart(2, "0")}s</span>
          </span>
        </div>
        <button className="offer-btn" aria-label="Claim Discount Offer">
          Discount Offer
        </button>
      </div>

      {/* Navigation Bar */}
      <nav className="nav-bar">
        <div className="logo">
          <Link href="/mainhidenindex">
            <img
              src="/rsr technologies.webp" /* Replace with your logo path */
              alt="RSR Technologies Logo"
              width="70"
              height="40"
            />
          </Link>
          <span>RSR TECHNOLOGIES</span>
        </div>
        <div className="nav-links">
          <Link href="/courses">COURSES</Link>
          <Link href="/blog">BLOG</Link>
          <Link href="/attendancesheet">ATTENDANCE</Link>
          <Link href="/contectus">CONTACT</Link>
          <Link href="/inquiry">INQUIRY</Link>
          <Link href="/auth/register">SIGNUP</Link>
          <Link href="/auth/login">SIGNIN</Link>
        </div>
      </nav>

      {/* WhatsApp Icon */}
      <Link href="https://chat.whatsapp.com/LIFGlgfl8quLW99cI6IvwL" passHref>
        <img
          src="/WHATSAPP.png" /* Replace with your WhatsApp icon path */
          alt="Contact us on WhatsApp"
          className="whatsapp-icon"
          role="button"
          aria-label="WhatsApp Chat"
        />
      </Link>
    </header>
  );
};

export default Header;
