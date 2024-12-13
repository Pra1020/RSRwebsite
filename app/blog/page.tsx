"use client";
import React, { useState } from "react";

const AIArticle: React.FC = () => {
  const [expandedArticles, setExpandedArticles] = useState<Record<number, boolean>>({});

  const toggleExpand = (index: number) => {
    setExpandedArticles((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const articles = [
    {
      title: "What is Artificial Intelligence & AI Applications",
      category: "Technology",
      date: "November 26, 2024",
      views: "1234 Views",
      image: "/aiml.png", // Replace with actual image path
      summary: `Artificial Intelligence (AI) is a field of computer science and engineering that focuses on creating intelligent machines that can perform tasks that typically require human-like intelligence, such as visual perception, speech recognition, decision-making, and natural language processing.`,
      fullText: `Artificial Intelligence (AI) is a field of computer science and engineering that focuses on creating intelligent machines that can perform tasks that typically require human-like intelligence. It covers areas such as visual perception, speech recognition, decision-making, and natural language processing. AI systems are designed to learn from data and improve performance over time. The concept dates back to ancient times, but the term "Artificial Intelligence" was coined in 1956 at the Dartmouth Conference.`,
    },
    {
      title: "The Top 10 Highest-Paying Big Data Careers",
      category: "BIG DATA ANALYTICS",
      date: "August 1, 2022",
      views: "341 Views",
      image: "/Metaverse-A-Technological.png", // Replace with actual image path
      summary: `Big Data is taking the industry by storm. It involves managing and interpreting massive amounts of data for insights that drive business decisions.`,
      fullText: `Big Data is a field that involves managing, processing, and interpreting vast amounts of information. The term has gained popularity as businesses increasingly rely on data to make informed decisions. Careers in Big Data include roles such as Data Scientist, Data Engineer, and Big Data Architect. Each of these roles requires specialized skills, and they often command some of the highest salaries in the tech industry.`,
    },
    {
      title: "Benefits of Custom Web Development for Business",
      category: "BUSINESS MANAGEMENT",
      date: "July 7, 2022",
      views: "1638 Views",
      image: "/11111.jpeg", // Replace with actual image path
      summary: `Having an impeccable website is a must for every business. Custom web development ensures unique solutions tailored to meet specific business needs.`,
      fullText: `Custom web development allows businesses to create unique and tailored solutions that meet specific needs and goals. It enhances the user experience, improves functionality, and ensures better scalability for future requirements. Investing in custom development can help businesses build robust online platforms that strengthen their brand identity and provide an edge over competitors.`,
    },
    {
      title: "Metaverse: A Technological Revolution To Look Forward To",
      category: "New Technology",
      date: "June 22, 2022",
      views: "588 Views",
      image: "\meta.jpeg", // Replace with actual image path
      summary: `The metaverse represents a revolutionary leap in virtual connectivity, allowing users to engage in immersive digital environments.`,
      fullText: `The metaverse combines virtual reality, augmented reality, and advanced computing technologies to create immersive digital spaces. It's a technological revolution that allows users to socialize, work, and play in interconnected virtual environments. The concept has gained traction due to advancements in hardware and software, offering endless opportunities for innovation in entertainment, education, and commerce.`,
    },
  ];

  return (
    <div>
      <style>
        {`
          .container {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
          }

          .article {
            margin-bottom: 30px;
            border-bottom: 1px solid #ccc;
            padding-bottom: 20px;
          }

          .article img {
            max-width: 100%;
            height: auto;
          }

          .article h1 {
            font-size: 20px;
            margin: 10px 0;
          }

          .article p {
            margin: 10px 0;
          }

          .category-date {
            color: #888;
            font-size: 14px;
            margin-bottom: 10px;
          }

          .read-more {
            color: #007bff;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            display: inline-block;
          }

          .read-more:hover {
            text-decoration: underline;
          }
        `}
      </style>

      <div className="container">
        {articles.map((article, index) => (
          <div className="article" key={index}>
            <img src={article.image} alt={article.title} />
            <h1>{article.title}</h1>
            <div className="category-date">
              <span>{article.category}</span> | <span>{article.date}</span> | <span>{article.views}</span>
            </div>
            <p>{expandedArticles[index] ? article.fullText : article.summary}</p>
            <span className="read-more" onClick={() => toggleExpand(index)}>
              {expandedArticles[index] ? "Read Less" : "Read More"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIArticle;
