"use client";
import React from "react";

const CourseList: React.FC = () => {
  const courses = [
    { id: 1, title: "Python Programming", image: "/course1.jpeg" },
    { id: 2, title: "AI & ML Training", image: "/AI_Logo.png" },
    { id: 3, title: "Cloud Computing", image: "/cloud-computing.jpg" },
    { id: 4, title: "Web Development", image: "/th (1).jpeg" },
    { id: 5, title: "Cyber Security", image: "/iStock-1174366497_0.jpg" },
    { id: 6, title: "Data Science", image: "/course2.jpeg" },
    { id: 7, title: "Java Programming", image: "/th (2).jpeg" },
  ];

  const trainingPrograms = [
    {
      id: 1,
      title: "ONLINE TRAINING",
      description:
        "We offer online, live interactive training programs for consultants and students around the globe. We utilize the latest technologies to teach our students.",
      image: "/11.png",
    },
    {
      id: 2,
      title: "CORPORATE TRAINING",
      description:
        "Your employees are your most important assets. Through our programs, you can give them the coaching they need to move your business forward. We will develop training programs to suit your requirements.",
      image: "/222.png",
    },
    {
      id: 3,
      title: "ON DEMAND TRAINING",
      description:
        "This option gives you the flexibility to take classes at times that are convenient for you. We offer training programs both for individuals and small groups.",
      image: "/33.png",
    },
    {
      id: 4,
      title: "WORKSHOPS",
      description:
        "We make a variety of training opportunities focused on information technology and business management available to faculty, staff, and students on campus.",
      image: "/44.png",
    },
  ];

  return (
    <>
      <style jsx>{`
        .container {
          padding: 20px;
        }

        .heading {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 30px;
          font-weight: bold;
          color: #333;
        }

        /* Courses Section */
        .courses-horizontal {
          display: flex;
          justify-content: space-around;
          gap: 20px;
          flex-wrap: nowrap;
          overflow-x: auto;
          padding: 10px 0;
          scrollbar-width: thin;
          scrollbar-color: #ccc transparent;
        }

        .courses-horizontal::-webkit-scrollbar {
          height: 8px;
        }

        .courses-horizontal::-webkit-scrollbar-thumb {
          background-color: #ccc;
          border-radius: 4px;
        }

        .course-card {
          flex: 0 0 auto;
          width: 200px;
          text-align: center;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: #fff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .course-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
        }

        .course-image {
          width: 100%;
          height: 120px;
          object-fit: cover;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }

        .course-title {
          font-size: 1.2rem;
          font-weight: bold;
          margin: 10px 0;
          color: #0070f3;
        }

        /* Training Programs Section */
        .training-container {
          padding: 40px 20px;
          text-align: center;
        }

        .training-heading {
          font-size: 2rem;
          margin-bottom: 40px;
          font-weight: bold;
          color: #333;
        }

        .training-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          align-items: center;
          justify-content: center;
        }

        .training-card {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .training-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
        }

        .training-image {
          width: 120px;
          height: 120px;
          object-fit: cover;
          border-radius: 50%;
          margin-bottom: 20px;
          border: 2px solid #0070f3;
        }

        .training-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #0070f3;
          margin-bottom: 10px;
        }

        .training-description {
          font-size: 1rem;
          color: #666;
        }
      `}</style>

      {/* Courses Section */}
      <div className="container">
        <h2 className="heading">Our Courses</h2>
        <div className="courses-horizontal">
          {courses.map((course) => (
            <div className="course-card" key={course.id}>
              <img
                src={course.image}
                alt={course.title}
                className="course-image"
              />
              <p className="course-title">{course.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Training Programs Section */}
      <div className="training-container">
        <h2 className="training-heading">Our Training Programs</h2>
        <div className="training-grid">
          {trainingPrograms.map((program) => (
            <div className="training-card" key={program.id}>
              <img
                src={program.image}
                alt={program.title}
                className="training-image"
              />
              <h3 className="training-title">{program.title}</h3>
              <p className="training-description">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseList;
