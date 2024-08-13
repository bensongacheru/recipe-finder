import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MealCard from './components/MealCard';
import Favourites from './components/Favourites';
import SearchBar from './components/SearchBar';
import MealDetail from './components/MealDetail';

const App = () => {
  const [meals, setMeals] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showFavourites, setShowFavourites] = useState(false);

  useEffect(() => {
    fetchMeals();
  }, [searchTerm]);

  const fetchMeals = async () => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      setMeals(response.data.meals);
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  };

  const addToFavourites = (meal) => {
    setFavourites([...favourites, meal]);
  };

  const handleMealClick = (id) => {
    fetchMealById(id);
  };

  const fetchMealById = async (id) => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      setSelectedMeal(response.data.meals[0]);
    } catch (error) {
      console.error('Error fetching meal details:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Recipe Finder</h1>
        <p className="text-gray-600">Find and save your favorite recipes</p>
      </header>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="flex flex-col gap-4">
        <div className="overflow-x-auto">
          {selectedMeal ? (
            <div className="flex-1 mb-8 p-4 border border-gray-300 rounded-lg bg-white shadow-md">
              <MealDetail meal={selectedMeal} />
              <button
                onClick={() => setSelectedMeal(null)}
                className="py-1 px-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors mt-4"
              >
                Back to List
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {meals && meals.map(meal => (
                <MealCard
                  key={meal.idMeal}
                  meal={meal}
                  addToFavourites={addToFavourites}
                  onClick={() => handleMealClick(meal.idMeal)}
                />
              ))}
            </div>
          )}
        </div>
        <div className="text-center mt-4">
          <button
            onClick={() => setShowFavourites(!showFavourites)}
            className="py-1 px-3 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            {showFavourites ? 'Hide Favourites' : 'Show Favourites'}
          </button>
          {showFavourites && <Favourites favourites={favourites} />}
        </div>
      </div>
    </div>
  );
};

export default App;



