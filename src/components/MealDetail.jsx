import React from 'react';

const MealDetail = ({ meal }) => {
  if (!meal) return null;

  const ingredients = Object.keys(meal)
    .filter(key => key.startsWith('strIngredient') && meal[key])
    .map((key, index) => meal[key]);

  const instructions = meal.strInstructions.split('\r\n').filter(instruction => instruction);

  return (
    <div className="p-4 border border-gray-300 rounded flex flex-col">
      <h2 className="text-2xl font-bold mb-2">{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-80 object-cover mb-2 rounded" />
      <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
      <ul className="list-disc list-inside mb-4">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="mb-1">{ingredient}</li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold mb-2">Instructions</h3>
      <ol className="list-decimal list-inside">
        {instructions.map((instruction, index) => (
          <li key={index} className="mb-1">{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default MealDetail;

