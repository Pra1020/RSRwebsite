"use client";
import React, { useState } from "react";
import CourseCategories from "../coursecategories/page";
import SortCourses from "../sortcoursing/page";

const Courses: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  const courses = [
    { id: 1, title: "API Testing Training", price: "₹24,000", discount: "₹32,000", description: "Learn API Testing techniques." },
    { id: 2, title: "Mobile Testing Training", price: "₹32,000", discount: "₹40,000", description: "Master mobile testing." },
    { id: 3, title: "Ruby with Cucumber", price: "₹32,000", discount: "₹40,000", description: "Learn Ruby and Cucumber." },
    { id: 4, title: "Backend", price: "₹32,000", discount: "₹40,000", description: "Become a backend developer." },
    { id: 5, title: "Cloud-AWS, Azure", price: "₹32,000", discount: "₹40,000", description: "Learn cloud computing." },
    { id: 6, title: "DevOps Tools", price: "₹32,000", discount: "₹40,000", description: "Master DevOps tools." },
    { id: 7, title: "Data Analytics", price: "₹32,000", discount: "₹40,000", description: "Learn data analytics." },
    { id: 8, title: "FullStack", price: "₹32,000", discount: "₹40,000", description: "Become a full-stack developer." },
  ];

  const handleCourseClick = (id: number) => {
    setSelectedCourse(id);
  };

  const handleBackClick = () => {
    setSelectedCourse(null);
  };

  const selectedCourseData = courses.find((course) => course.id === selectedCourse);

  return (
    <>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
          gap: 20px;
          padding: 20px;
        }
        .sidebar {
          flex: 1;
          max-width: 300px;
        }
        .main {
          flex: 3;
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .courses-container {
          text-align: center;
        }
        .courses-grid {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          padding: 20px;
        }
        .course-card {
          border: 1px solid #ddd;
          padding: 15px;
          width: 250px;
          border-radius: 8px;
          background-color: #f9f9f9;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .course-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
        }
        .course-title {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: #333;
        }
        .course-price {
          font-size: 1.2rem;
          color: #0070f3;
          font-weight: bold;
        }
        .course-discount {
          text-decoration: line-through;
          color: #999;
          margin-left: 10px;
        }
        .course-details {
          text-align: center;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
        }
        .price {
          font-size: 1.5rem;
          font-weight: bold;
          color: #0070f3;
          margin-top: 10px;
        }
        .back-button {
          margin-top: 20px;
          padding: 10px 20px;
          font-size: 1rem;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .back-button:hover {
          background-color: #0056b3;
        }
      `}</style>

      {/* Layout Container */}
      <div className="container">
        {/* Sidebar for Course Categories */}
        <aside className="sidebar">
          <CourseCategories />
        </aside>

        {/* Main Content */}
        <main className="main">
          <div className="header">
            <h1>Our Courses</h1>
            <SortCourses />
          </div>

          {/* Toggle Between Courses List and Details */}
          {selectedCourse === null ? (
            <div className="courses-container">
              <div className="courses-grid">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="course-card"
                    onClick={() => handleCourseClick(course.id)}
                  >
                    <h2 className="course-title">{course.title}</h2>
                    <p>
                      <span className="course-price">{course.price}</span>
                      <span className="course-discount">{course.discount}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="course-details">
              <h1>{selectedCourseData?.title}</h1>
              <p>{selectedCourseData?.description}</p>
              <p className="price">{selectedCourseData?.price}</p>
              <button onClick={handleBackClick} className="back-button">
                Back to Courses
              </button>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Courses;
