import React from 'react';

const MealCard = ({ meal, addToFavourites, onClick }) => {
  return (
    <div
      className="flex flex-col border border-gray-300 rounded-lg shadow-lg bg-white cursor-pointer"
      onClick={onClick}
    >
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-32 object-cover rounded-t-lg" />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{meal.strMeal}</h2>
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToFavourites(meal);
          }}
          className="w-full py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Add to Favourites
        </button>
      </div>
    </div>
  );
};

export default MealCard;









