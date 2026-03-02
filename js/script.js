// Imports
import { getRandomQuote, getAllQuotes } from "./quotes.js";

// Variables
const appearanceBtn = document.getElementById("appearance-btn");
const quoteTxt = document.getElementById("quote");
const quoteInfo = document.getElementById("quote-info");
const nextQuote = document.getElementById("next-quote");
const quoteImg = document.getElementById("quote-img");

// Quotes.html
const allQuotesContainer = document.getElementById("all-quotes-container");

// Event listeners
if (appearanceBtn) {
  appearanceBtn.addEventListener("click", changeAppearance);
}

if (nextQuote && quoteTxt && quoteInfo && quoteImg) {
  nextQuote.addEventListener("click", displayQuote);
  displayQuote();
}

if (allQuotesContainer) {
  displayAllQuotes();
}

// Toggle website appearance
function changeAppearance() {
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

// Display all quotes
async function displayAllQuotes() {
  const quotes = await getAllQuotes();

  allQuotesContainer.innerHTML = "";

  quotes.forEach((quote) => {
    // Wrapper
    const quoteItem = document.createElement("div");
    quoteItem.classList.add("quote-item");

    // Image
    const img = document.createElement("img");
    img.src = quote.characterImg;
    img.classList.add("quote-item-img");

    // Quote
    const quoteText = document.createElement("p");
    quoteText.textContent = `${quote.quote}`;
    quoteText.classList.add("quote-item-text");

    // Quote info
    const quoteInfo = document.createElement("p");
    quoteInfo.textContent = `${quote.character} - ${quote.anime}`;
    quoteInfo.classList.add("quote-item-info");

    // Append elements
    quoteItem.appendChild(img);
    quoteItem.appendChild(quoteText);
    quoteItem.appendChild(quoteInfo);

    allQuotesContainer.appendChild(quoteItem);
  });
}
