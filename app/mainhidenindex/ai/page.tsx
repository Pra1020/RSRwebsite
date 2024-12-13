"use client";
import React from "react";

const AIProgrammingPage: React.FC = () => {
  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <img
          src="/ai-course.jpeg"
          alt="AI Course"
          style={styles.headerImage}
        />
      </div>

      {/* Title and Price Section */}
      <h1 style={styles.title}>Artificial Intelligence Training</h1>
      <div style={styles.priceSection}>
        <span style={styles.originalPrice}>$500.00</span>
        <span style={styles.discountedPrice}> $350.00</span>
      </div>
      <button style={styles.enrollButton}>Enroll Now</button>
      
      <p style={styles.category}>Category: Emerging Technology Courses</p>

      {/* Description Section */}
      <div style={styles.section}>
        <button style={styles.descriptionButton}>Description</button>
        <h2 style={styles.subTitle}>What is Artificial Intelligence:</h2>
        <p style={styles.paragraph}>
          Artificial Intelligence (AI) refers to the simulation of human
          intelligence in machines that are programmed to think, learn, and make
          decisions. AI is a key component of modern technology, with
          applications spanning industries such as healthcare, finance,
          autonomous vehicles, and natural language processing.
        </p>
        <h2 style={styles.subTitle}>Why Learn AI:</h2>
        <ul style={styles.list}>
          <li>AI powers cutting-edge applications in every industry.</li>
          <li>Highly sought-after skills in job markets globally.</li>
          <li>Facilitates automation and improves decision-making processes.</li>
          <li>Integral to innovations in robotics, data analysis, and IoT.</li>
          <li>
            The future of computing lies in AI-driven technologies and
            frameworks.
          </li>
        </ul>
      </div>

      {/* AI Applications Chart */}
      <div style={styles.section}>
        <h3 style={styles.subTitle}>
          Top Applications of AI (Source: Industry Reports)
        </h3>
        <img
          src="/ai-applications-chart.png"
          alt="AI Applications Chart"
          style={styles.rankingImage}
        />
      </div>

      {/* AI Training Topics Section */}
      <div style={styles.section}>
        <h2 style={styles.subTitle}>AI Training Topics</h2>
        <div style={styles.topicsContainer}>
          {/* Column 1 */}
          <div style={styles.topicsColumn}>
            <h3 style={{ fontWeight: "bold", color: "indigo" }}>
              AI Basics and Fundamentals
            </h3>
            <ul style={styles.list}>
              <li style={{ fontWeight: "bold", color: "indigo" }}>
                Introduction to Artificial Intelligence
              </li>
              <li style={{ fontWeight: "bold", color: "indigo" }}>
                History of AI
              </li>
              <ul style={styles.subList}>
                <li>Milestones in AI Development</li>
                <li>Key Contributions</li>
              </ul>
              <li style={{ fontWeight: "bold", color: "indigo" }}>
                AI Algorithms and Models
              </li>
              <ul style={styles.subList}>
                <li>Decision Trees</li>
                <li>Neural Networks</li>
                <li>Support Vector Machines</li>
              </ul>
              <li style={{ fontWeight: "bold", color: "indigo" }}>
                Data Preprocessing and Management
              </li>
              <li style={{ fontWeight: "bold", color: "indigo" }}>
                Introduction to Machine Learning
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div style={styles.topicsColumn}>
            <h3 style={{ fontWeight: "bold", color: "indigo" }}>
              Advanced AI Concepts
            </h3>
            <ul style={styles.list}>
              <li style={{ fontWeight: "bold", color: "indigo" }}>
                Deep Learning
              </li>
              <ul style={styles.subList}>
                <li>Convolutional Neural Networks (CNNs)</li>
                <li>Recurrent Neural Networks (RNNs)</li>
                <li>Transformer Models</li>
              </ul>
              <li style={{ fontWeight: "bold", color: "indigo" }}>
                Natural Language Processing (NLP)
              </li>
              <ul style={styles.subList}>
                <li>Text Tokenization</li>
                <li>Sentiment Analysis</li>
                <li>Chatbot Development</li>
              </ul>
              <li style={{ fontWeight: "bold", color: "indigo" }}>
                AI Ethics and Governance
              </li>
              <ul style={styles.subList}>
                <li>Bias in AI</li>
                <li>Privacy and Security</li>
                <li>Regulatory Frameworks</li>
              </ul>
              <li style={{ fontWeight: "bold", color: "indigo" }}>
                AI Frameworks and Libraries
              </li>
              <ul style={styles.subList}>
                <li>TensorFlow</li>
                <li>PyTorch</li>
                <li>Keras</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "0px",
    maxWidth: "1000px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  headerImage: {
    width: "600px",
    height: "auto",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
  },
  priceSection: {
    textAlign: "center",
    margin: "10px 0",
  },
  originalPrice: {
    textDecoration: "line-through",
    color: "gray",
    marginRight: "10px",
  },
  discountedPrice: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "green",
  },
  enrollButton: {
    display: "block",
    margin: "10px auto",
    padding: "10px 20px",
    backgroundColor: "#FF5733",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  category: {
    textAlign: "center",
    fontStyle: "italic",
    color: "#555",
  },
  section: {
    margin: "20px 0",
  },
  subTitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "indigo",
  },
  topicsContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  topicsColumn: {
    width: "48%",
  },
  list: {
    paddingLeft: "20px",
  },
  subList: {
    paddingLeft: "20px",
    listStyleType: "circle",
  },
};

export default AIProgrammingPage;
