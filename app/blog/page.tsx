"use client";
import { useParams } from "next/navigation";
import React from "react";

// Sample blog posts data
const blogPosts = {
  "artificial-intelligence-ai-applications": {
    title: "What is Artificial Intelligence & AI Applications",
    content: `
      Artificial Intelligence (AI) is a field of computer science and engineering 
      that focuses on creating intelligent machines that can perform tasks 
      that typically require human-like intelligence, such as visual perception, 
      speech recognition, decision-making, and natural language processing.
    `,
    date: "February 23, 2023",
    category: "Artificial Intelligence",
  },
  "highest-paying-big-data-careers": {
    title: "The Top 10 Highest-Paying Big Data Careers",
    content: `
      Big Data is taking the industry by storm. Big Data stands for data that is 
      very large and complex. It is difficult to process such data by traditional methods. 
    `,
    date: "August 1, 2022",
    category: "Big Data Analytics",
  },
  "custom-web-development-business": {
    title: "Benefits of Custom Web Development for Business",
    content: `
      Having an impeccable website is a must for every business. It enables you to 
      present your services to a wide variety of customers across the world.
    `,
    date: "July 7, 2022",
    category: "Business Management",
  },
};

const BlogPost: React.FC = () => {
  const { slug } = useParams(); // Use useParams() instead of useRouter()

  // Retrieve the blog post by the slug
  const post = blogPosts[slug as string];

  if (!post) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div className="blog-post-container">
      <style jsx>{`
        .blog-post-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        h1 {
          font-size: 2rem;
          color: #15233a;
        }
        .blog-meta {
          font-size: 1rem;
          color: gray;
        }
        .blog-content {
          margin-top: 20px;
          line-height: 1.6;
        }
        .slug-info {
          margin-top: 20px;
          font-size: 1.1rem;
          color: #333;
          padding: 10px;
          background-color: #f4f4f4;
          border-radius: 4px;
        }
      `}</style>

      {/* Display the slug */}
      <div className="slug-info">
        <strong>Slug:</strong> {slug}
      </div>

      {/* Display the blog content */}
      <h1>{post.title}</h1>
      <div className="blog-meta">
        <span><strong>Category:</strong> {post.category}</span>
        <br />
        <span><strong>Date:</strong> {post.date}</span>
      </div>
      <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default BlogPost;
