// Imports
import { getRandomQuote } from "./quotes.js";

// Variables
const appearanceBtn = document.getElementById("appearance-btn");
const quoteTxt = document.getElementById("quote");
const quoteInfo = document.getElementById("quote-info");
const nextQuote = document.getElementById("next-quote");

// Event listeners
appearanceBtn.addEventListener("click", changeAppearance);
nextQuote.addEventListener("click", getNextQuote);

// Toggle website appearance
function changeAppearance() {
  console.log("Image clicked");
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    appearanceBtn.src = "./assets/moon-icon.png";
  } else {
    appearanceBtn.src = "./assets/sun-icon.png";
  }
}

// Next Quote
async function getNextQuote() {
  let quote = await getRandomQuote();
  console.log(quote);
  quoteTxt.textContent = quote.quote;
  quoteInfo.textContent = `${quote.character} - ${quote.anime}`;
}
