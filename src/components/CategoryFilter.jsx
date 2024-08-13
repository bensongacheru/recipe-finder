import React from 'react';

const CategoryFilter = ({ categories, setSelectedCategory }) => {
  return (
    <div className="mb-4 flex flex-wrap gap-2">
      <button
        onClick={() => setSelectedCategory('')}
        className="py-2 px-4 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition-colors"
      >
        All
      </button>
      {categories.map(category => (
        <button
          key={category.strCategory}
          onClick={() => setSelectedCategory(category.strCategory)}
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          {category.strCategory}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;

