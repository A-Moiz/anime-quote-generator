// Imports
import { getRandomQuote } from "./quotes.js";

// Variables
const appearanceBtn = document.getElementById("appearance-btn");
const quoteTxt = document.getElementById("quote");
const quoteInfo = document.getElementById("quote-info");
const nextQuote = document.getElementById("next-quote");
const quoteImg = document.getElementById("quote-img");

// Event listeners
appearanceBtn.addEventListener("click", changeAppearance);
nextQuote.addEventListener("click", displayQuote);
displayQuote();

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

// Display Quote
async function displayQuote() {
  let quote = await getRandomQuote();
  quoteTxt.textContent = quote.quote;
  quoteInfo.textContent = `${quote.character} - ${quote.anime}`;
  quoteImg.src = quote.characterImg;
  quoteImg.classList = "character-img";
}
