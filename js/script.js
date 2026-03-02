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
const searchInput = document.getElementById("search-input");
let allQuotes = [];

// Event listeners
if (appearanceBtn) {
  appearanceBtn.addEventListener("click", changeAppearance);
}

if (nextQuote && quoteTxt && quoteInfo && quoteImg) {
  nextQuote.addEventListener("click", displayQuote);
  displayQuote();
}

if (allQuotesContainer) {
  fetchAllQuotes();
}

if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const searchValue = e.target.value.toLowerCase().trim();

    const filteredQuotes = allQuotes.filter((quote) => {
      return (
        quote.character.toLowerCase().includes(searchValue) ||
        quote.anime.toLowerCase().includes(searchValue)
      );
    });

    renderQuotes(filteredQuotes);
  });
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

// Fetch all quotes
async function fetchAllQuotes() {
  allQuotes = await getAllQuotes();
  renderQuotes(allQuotes);
}

// Display the fetched quotes
function renderQuotes(quotes) {
  allQuotesContainer.innerHTML = "";

  quotes.forEach((quote) => {
    const quoteItem = document.createElement("div");
    quoteItem.classList.add("quote-item");

    const img = document.createElement("img");
    img.src = quote.characterImg;
    img.classList.add("quote-item-img");

    const quoteText = document.createElement("p");
    quoteText.textContent = `${quote.quote}`;
    quoteText.classList.add("quote-item-text");

    const quoteInfo = document.createElement("p");
    quoteInfo.textContent = `${quote.character} - ${quote.anime}`;
    quoteInfo.classList.add("quote-item-info");

    quoteItem.append(img, quoteText, quoteInfo);
    allQuotesContainer.appendChild(quoteItem);
  });
}
