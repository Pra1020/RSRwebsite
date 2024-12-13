"use client";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaPinterest, FaInstagram } from "react-icons/fa";
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <div style={styles.footerSection}>
          <h3 style={styles.heading}>RSR TECHNOLOGIES</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <Link href="/about" style={{ textDecoration: "none", color: "inherit" }}>
                About Us
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link href="/courses" style={{ textDecoration: "none", color: "inherit" }}>
                Courses
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link href="/contectus" style={{ textDecoration: "none", color: "inherit" }}>
                Contact Us
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link href="/feedback" style={{ textDecoration: "none", color: "inherit" }}>
                Submit Review
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link href="/reviews" style={{ textDecoration: "none", color: "inherit" }}>
                Reviews
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link href="/blog" style={{ textDecoration: "none", color: "inherit" }}>
                Blog
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link href="/fq&a" style={{ textDecoration: "none", color: "inherit" }}>
                FAQ's
              </Link>
            </li>
          </ul>
        </div>
        <div style={styles.footerSection}>
          <h3 style={styles.heading}>WORK WITH US</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <Link href="/become" style={{ textDecoration: "none", color: "inherit" }}>
                Become an Instructor
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link href="/write-for-us" style={{ textDecoration: "none", color: "inherit" }}>
                Write for Us
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link href="/hire-from-Rsr technology" style={{ textDecoration: "none", color: "inherit" }}>
                Hire from Rsr technology
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link href="/careess" style={{ textDecoration: "none", color: "inherit" }}>
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div style={styles.footerSection}>
          <h3 style={styles.heading}>FOR BUSINESSES</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <Link href="/corporate-training" style={{ textDecoration: "none", color: "inherit" }}>
                Corporate Training
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link href="/workshop" style={{ textDecoration: "none", color: "inherit" }}>
                Workshops
              </Link>
            </li>
          </ul>
        </div>
        <div style={styles.footerSection}>
          <h3 style={styles.heading}>FOLLOW US</h3>
          <button style={styles.button}>Refer & Earn</button>
          <div style={styles.socialIcons}>
            <span style={styles.socialIcon}>
            <Link 
            href="https://facebook.com" 
            target="_blank" 
           style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center" }}
              >
            <img 
            src="/facebook-logo-1-2.png" 
            alt="Facebook Icon" 
            style={{ width: "40px", height: "40px", marginRight: "8px" }} 
             />
            
             </Link>
            </span>
            <span style={styles.socialIcon}>
              <Link href="https://twitter.com" target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
              <img 
            src="/x.webp" 
            alt="twitter Icon" 
            style={{ width: "40px", height: "40px", marginRight: "8px" }} 
             />
              </Link>
            </span>
            <span style={styles.socialIcon}>
              <Link href="https://linkedin.com" target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
              <img 
            src="/in.png" 
            alt="linkedin Icon" 
            style={{ width: "40px", height: "40px", marginRight: "8px" }} 
             />
              
              </Link>
            </span>
            <span style={styles.socialIcon}>
              <Link href="https://youtube.com" target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
              <img 
            src="/youtube.png" 
            alt="youtube Icon" 
            style={{ width: "40px", height: "40px", marginRight: "8px" }} 
             />
               
              </Link>
            </span>
            <span style={styles.socialIcon}>
              <Link href="https://pinterest.com" target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
              <img 
            src="/Pinterest-Symbol.png" 
            alt="pinterest Icon" 
            style={{ width: "40px", height: "40px", marginRight: "8px" }} 
             />
            
              </Link>
            </span>
            <span style={styles.socialIcon}>
              <Link href="https://instagram.com" target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
              <img 
            src="/instagram.png" 
            alt="instagram Icon" 
            style={{ width: "40px", height: "40px", marginRight: "8px" }} 
             />
              
              </Link>
            </span>
          </div>
        </div>
        <div style={styles.footerSection}>
          <h3 style={styles.heading}>SUBSCRIBE US</h3>
          <form style={styles.form}>
            <input type="text" placeholder="Name" style={styles.input} />
            <input type="email" placeholder="Email*" style={styles.input} />
            <button type="submit" style={styles.subscribeButton}>
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div style={styles.footerBottom}>
        <p>© RSR TECHNOLOGIES. All Rights Reserved | Privacy Policy | Terms & Conditions</p>
        <div style={styles.contactInfo}>
          <span>🇮🇳 +91 40 4018 1306</span>
          <span>🇺🇸 +1 734 418 2465</span>
          <span>info@rsrtechnologies.org</span>
        </div>
      </div>
      <div
      style={{
        position: "fixed",
        bottom: "16px",
        right: "16px",
      }}
    >
      <Link href="/helpform" passHref>
        <img
          src="/helpicon.jpeg" // Update the path to match your file location
          alt="Help Us"
          style={{
            width: "64px", // 16 rem
            height: "64px", // 16 rem
            cursor: "pointer",
            transition: "transform 0.3s ease",
          }}
          role="button"
          aria-label="Open Help Form"
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </Link>
    </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#2b547e",
    color: "white",
    padding: "20px 0",
    fontFamily: "Arial, sans-serif",
  },
  footerContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  footerSection: {
    flex: 1,
    margin: "10px",
    minWidth: "200px",
  },
  heading: {
    fontSize: "1.2rem",
    marginBottom: "15px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    marginBottom: "10px",
    cursor: "pointer",
  },
  button: {
    backgroundColor: "#0070f3",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  socialIcons: {
    marginTop: "20px",
  },
  socialIcon: {
    display: "inline-block",
    marginRight: "20px",
    fontSize: "1.2rem",

  },
  form: {
    display: "flex",
    flexDirection: "column" as "column",
  },
  input: {
    marginBottom: "10px",
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  subscribeButton: {
    padding: "10px",
    backgroundColor: "#00bcd4",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  footerBottom: {
    backgroundColor: "#1a3c5a",
    padding: "10px 20px",
    textAlign: "center" as "center",
    fontSize: "0.9rem",
  },
  contactInfo: {
    marginTop: "10px",
  },
  
};

export default Footer;
