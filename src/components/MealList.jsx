import React from 'react';

const MealList = ({ meals, onSelectMeal }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {meals && meals.map((meal) => (
        <div
          key={meal.idMeal}
          className="w-72 border border-gray-300 rounded-lg p-4 cursor-pointer flex flex-col"
          onClick={() => onSelectMeal(meal.idMeal)}
        >
          <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-64 object-cover mb-2 rounded" />
          <h2 className="text-xl font-semibold">{meal.strMeal}</h2>
        </div>
      ))}
    </div>
  );
};

export default MealList;

