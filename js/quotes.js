// Imports
import { db } from "./firebase.js";
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Remember index of previous quote
let lastIndex = null;

// Get random quote from Firebase
export async function getRandomQuote() {
  const querySnapshot = await getDocs(collection(db, "anime-quotes"));
  const quotes = querySnapshot.docs.map((doc) => doc.data());

  if (quotes.length === 0) return null;

  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastIndex && quotes.length > 1);

  lastIndex = randomIndex;

  return quotes[randomIndex];
}
