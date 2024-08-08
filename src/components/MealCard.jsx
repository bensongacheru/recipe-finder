// src/components/MealCard.jsx
import React from 'react';

const MealCard = ({ meal, addToCart, onClick }) => {
  return (
    <div
      className="flex-shrink-0 w-64 border border-gray-300 rounded-lg shadow-lg overflow-hidden bg-white cursor-pointer"
      onClick={onClick}
    >
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{meal.strMeal}</h2>
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(meal);
          }}
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MealCard;






