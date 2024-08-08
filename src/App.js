// src/App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MealCard from './components/MealCard';
import Cart from './components/Cart';
import SearchBar from './components/SearchBar';

const App = () => {
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async (query = '') => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      setMeals(response.data.meals);
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  };

  useEffect(() => {
    fetchMeals(searchTerm);
  }, [searchTerm]);

  const addToCart = (meal) => {
    setCart([...cart, meal]);
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
      {selectedMeal ? (
        <div className="mb-8 p-4 border border-gray-300 rounded-lg bg-white shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedMeal.strMeal}</h2>
          <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} className="w-full h-64 object-cover mb-4" />
          <p className="text-gray-800 mb-4">{selectedMeal.strInstructions}</p>
          <button
            onClick={() => setSelectedMeal(null)}
            className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Back to List
          </button>
        </div>
      ) : (
        <div className="flex overflow-x-auto space-x-4 py-4">
          {meals && meals.map(meal => (
            <MealCard
              key={meal.idMeal}
              meal={meal}
              addToCart={addToCart}
              onClick={() => handleMealClick(meal.idMeal)}
            />
          ))}
        </div>
      )}
      <Cart cart={cart} />
    </div>
  );
};

export default App;

