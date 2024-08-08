// src/components/MealDetail.jsx
import React from 'react';

const MealDetail = ({ meal }) => {
  return (
    <div className="p-4 border border-gray-300 rounded">
      <h2 className="text-2xl font-bold mb-2">{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-64 object-cover mb-2 rounded" />
      <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
      <ul>
        {Object.keys(meal)
          .filter(key => key.startsWith('strIngredient') && meal[key])
          .map((key, index) => (
            <li key={index} className="mb-1">{meal[key]}</li>
          ))}
      </ul>
      <h3 className="text-xl font-semibold mt-4 mb-2">Instructions</h3>
      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default MealDetail;
