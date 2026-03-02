// Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDopklgq2PLpYxeMtzqRZg06eSRwUEkUCA",
  authDomain: "anime-quote-generator-df247.firebaseapp.com",
  projectId: "anime-quote-generator-df247",
  storageBucket: "anime-quote-generator-df247.firebasestorage.app",
  messagingSenderId: "491108563435",
  appId: "1:491108563435:web:11e84c3dabdd51af9d01ae",
  measurementId: "G-W2PYHRWNYD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
