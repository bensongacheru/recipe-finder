import React from 'react';

const Favourites = ({ favourites }) => {
  return (
    <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-md mt-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Favourites</h2>
      {favourites.length === 0 ? (
        <p className="text-gray-600">Your favourites list is empty.</p>
      ) : (
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {favourites.map((meal, index) => (
            <li key={index} className="flex flex-col border border-gray-300 rounded-lg shadow-lg bg-white">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="p-2 text-center">
                <h3 className="text-md font-semibold text-gray-800">{meal.strMeal}</h3>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favourites;






