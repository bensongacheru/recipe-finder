// src/components/Cart.jsx
import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((meal, index) => (
            <li key={index} className="mb-4 flex items-center">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-16 h-16 object-cover rounded-lg mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{meal.strMeal}</h3>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;



