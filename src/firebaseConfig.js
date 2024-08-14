// src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6W44Fh8kFOsQNnvO976CbxYpmvdCj34I",
  authDomain: "recipe-finder-32ee6.firebaseapp.com",
  projectId: "recipe-finder-32ee6",
  storageBucket: "recipe-finder-32ee6.appspot.com",
  messagingSenderId: "83617334647",
  appId: "1:83617334647:web:abe1f4562a4209f0b84d72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
