"use client";
import React from "react";

const PythonProgrammingPage: React.FC = () => {
  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <img
          src="/course1.jpeg"
          alt="Python Course"
          style={styles.headerImage}
        />
      </div>

      {/* Title and Price Section */}
      <h1 style={styles.title}>Python Training</h1>
      <div style={styles.priceSection}>
        <span style={styles.originalPrice}>$400.00</span>
        <span style={styles.discountedPrice}> $300.00</span>
      </div>
      <button style={styles.enrollButton}>Enroll Now</button>
      <p style={styles.category}>Category: Programming Courses</p>

      {/* Description Section */}
      <div style={styles.section}>
        <button style={styles.descriptionButton}>Description</button>
        <h2 style={styles.subTitle}>What is Python:</h2>
        <p style={styles.paragraph}>
          Python is a widely used (used by sites like YouTube and Dropbox)
          high-level, general-purpose, interpreted, dynamic programming
          language. Its design philosophy emphasizes code readability, and its
          syntax allows programmers to express concepts in fewer lines of code
          that would not be possible in other object-oriented languages such as
          C++ or Java.
        </p>
        <h2 style={styles.subTitle}>Why Python:</h2>
        <ul style={styles.list}>
          <li>Python tops IEEE Spectrum Programming Language Ranking.</li>
          <li>Python code can be run on any Operating System.</li>
          <li>Python codes are easy to read and write.</li>
          <li>
            Popular in Data Science, Machine Learning, Deep Learning, and Web
            Development.
          </li>
          <li>
            Python programming can be used for academic purposes as well as
            software development. A lot of startups and middle-level companies
            are making their web applications using Python frameworks like Django.
          </li>
        </ul>
      </div>
       {/* The Top 20 Ranking Image */}
       <div style={styles.section}>
        <h3 style={styles.subTitle}>The Top 20 (Default Ranking) (Source: IEEE Spectrum)</h3>
        <img
          src="/Python.png"
          alt="Python Ranking Chart"
          style={styles.rankingImage}
        />
      </div>

      {/* Python Training Topics Section */}
      <div style={styles.section}>
        <h2 style={styles.subTitle}>Python Training Topics</h2>
        <div style={styles.topicsContainer}>
          {/* Column 1 */}
          <div style={styles.topicsColumn}>
            <h3 style={{ fontWeight: "bold", color: "indigo", }}>Python Training: Python Core</h3>
            <ul style={styles.list}>
              <li style={{ fontWeight: "bold" ,color: "indigo", }}>Python Introduction</li>
              <li style={{ fontWeight: "bold" ,color: "indigo",}}>Python Installation</li>
              <ul style={styles.subList}>
                <li>In Windows</li>
                <li>In Linux</li>
              </ul>
              <li style={{ fontWeight: "bold" ,color: "indigo",}}>Basic Python Syntax</li>
              <ul style={styles.subList}>
                <li>Back Slash</li>
                <li>String inside the quotes</li>
                <li>Escape Sequence of String</li>
                <li>Formatted Output</li>
              </ul>
              <li style={{ fontWeight: "bold" ,color: "indigo",}}>Python Variables and Assignment Statement</li>
              <li style={{ fontWeight: "bold" ,color: "indigo", }}>Python Operators</li>
              <ul style={styles.subList}>
                <li>Python Arithmetic Operators</li>
                <li>Python Comparison Operators</li>
              </ul>
            </ul>
          </div>

          {/* Column 2 */}
          <div style={styles.topicsColumn}>
            <h3 style={{ fontWeight: "bold" ,color: "indigo", }}>Python Training: Python Advanced</h3>
            <ul style={styles.list}>
              <li style={{ fontWeight: "bold" ,color: "indigo", }}>Python Regular Expression</li>
              <ul style={styles.subList}>
                <li>match()</li>
                <li>search()</li>
                <li>sub()</li>
                <li>findall()</li>
                <li>special characters</li>
              </ul>
              <li style={{ fontWeight: "bold", color: "indigo",}}>Class and Objects</li>
              <ul style={styles.subList}>
                <li>Basic OOP Terminology in Python</li>
                <li>Class variable</li>
                <li>Instance variable</li>
                <li>__init__ Method</li>
                <li>Class Inheritance</li>
                <li>Overriding Methods</li>
                <li>Operator Overloading</li>
                <li>Private variable</li>
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

export default PythonProgrammingPage;
