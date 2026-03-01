// Imports
import { db } from "./firebase.js";
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Get random quote from Firebase
export async function getRandomQuote() {
  const querySnapshot = await getDocs(collection(db, "anime-quotes"));
  const quotes = querySnapshot.docs.map((doc) => doc.data());

  console.log(quotes);

  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}
