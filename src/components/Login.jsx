// src/components/Login.jsx

import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import ResetPassword from './ResetPassword';

const Login = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onClose();
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      {showResetPassword ? (
        <ResetPassword onClose={() => setShowResetPassword(false)} />
      ) : (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-4">Log In</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <div className="relative mb-4">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-gray-500`} />
              </button>
            </div>
            <button
              onClick={handleLogin}
              className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              Log In
            </button>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            <button
              onClick={() => setShowResetPassword(true)}
              className="w-full mt-4 py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
            >
              Forgot Password?
            </button>
            <button
              onClick={onClose}
              className="w-full mt-4 py-2 px-4 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

