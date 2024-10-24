import React from "react";

const Filter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="mb-8">
      <select
        className="bg-gray-800 text-white p-2 rounded-lg px-5"
        value={selectedCategory}
        onChange={(e) => onSelectCategory(e.target.value)}
      >
        <option value="all">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
