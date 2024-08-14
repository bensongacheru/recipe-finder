// src/App.js

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import MealCard from './components/MealCard';
import Favourites from './components/Favourites';
import SearchBar from './components/SearchBar';
import MealDetail from './components/MealDetail';
import SignUpModal from './components/SignUpModal';
import Login from './components/Login';
import { auth } from './firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const App = () => {
  const [meals, setMeals] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showFavourites, setShowFavourites] = useState(false);
  const [user, setUser] = useState(null);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const fetchMeals = useCallback(async () => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      setMeals(response.data.meals);
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

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

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-3xl font-bold text-gray-800">Recipe Finder</h1>
        <div className="flex space-x-4">
          {user ? (
            <>
              <button
                onClick={handleSignOut}
                className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setShowSignUp(true)}
                className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Sign Up
              </button>
              <button
                onClick={() => setShowLogin(true)}
                className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                Log In
              </button>
            </>
          )}
        </div>
      </header>
      <main className="p-4">
        {user ? (
          <div>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="flex flex-col gap-4">
              <div className="overflow-x-auto">
                {selectedMeal ? (
                  <div className="flex-1 mb-8 p-4 border border-gray-300 rounded-lg bg-white shadow-md">
                    <MealDetail meal={selectedMeal} />
                    <button
                      onClick={() => setSelectedMeal(null)}
                      className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition-colors mt-4"
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
                  className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                >
                  {showFavourites ? 'Hide Favourites' : 'Show Favourites'}
                </button>
                {showFavourites && <Favourites favourites={favourites} />}
              </div>
            </div>
          </div>
        ) : (
          <>
            {showSignUp && <SignUpModal onClose={() => setShowSignUp(false)} />}
            {showLogin && <Login onClose={() => setShowLogin(false)} />}
          </>
        )}
      </main>
    </div>
  );
};

export default App;


