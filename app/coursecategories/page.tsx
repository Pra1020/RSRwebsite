"use client";
import { useState } from "react";

const CourseCategories = () => {
  const categories = [
    "AP Classes Online",
    "Big Data Analytics Courses",
    "Business Management Courses",
    "Cloud Technology Courses",
    "Coding for Juniors",
    "Data Bases & BI Tools Courses",
    "DevOps Courses",
    "Elementary Subjects",
    "ETL Data Warehouse",
    "IB Tutoring",
    "IGCSE Tutoring",
    "Languages",
  ];

  return (
    <aside className="bg-gradient-to-br from-gray-100 to-gray-300 p-6 rounded-lg shadow-lg w-full md:w-1/4">
      <h3 className="font-extrabold text-2xl text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
        Course Categories
      </h3>
      <ul className="space-y-3">
        {categories.map((category, index) => (
          <li key={index} className="group">
            <a
              href="#"
              className="block text-lg font-medium text-gray-700 bg-white px-4 py-2 rounded-lg shadow-sm border hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group-hover:shadow-md"
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CourseCategories;
