// src/components/MealList.jsx
import React from 'react';

const MealList = ({ meals, onSelectMeal }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {meals && meals.map((meal) => (
        <div
          key={meal.idMeal}
          className="border border-gray-300 rounded p-4 cursor-pointer"
          onClick={() => onSelectMeal(meal.idMeal)}
        >
          <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover mb-2 rounded" />
          <h2 className="text-xl font-semibold">{meal.strMeal}</h2>
        </div>
      ))}
    </div>
  );
};

export default MealList;
