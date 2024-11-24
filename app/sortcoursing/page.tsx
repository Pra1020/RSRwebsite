"use  client"
import { useState } from "react";
import Link from "next/link";

const SortCourses = () => {
  const [sortOption, setSortOption] = useState("Default sorting");

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="mb-6">
      <label htmlFor="sort" className="mr-2 text-lg">
        Sort by:
      </label>
      <select
        id="sort"
        value={sortOption}
        onChange={handleSortChange}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="Default sorting">Default sorting</option>
        <option value="Sort by popularity">Sort by popularity</option>
        <option value="Sort by average rating">Sort by average rating</option>
        <option value="Sort by latest">Sort by latest</option>
        <option value="Sort by price: low to high">Sort by price: low to high</option>
        <option value="Sort by price: high to low">Sort by price: high to low</option>
      </select>
    </div>
  );
};

export default SortCourses;
