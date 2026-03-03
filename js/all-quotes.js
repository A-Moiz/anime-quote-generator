// Imports
import { getAllQuotes } from "./quotes.js";

// Variables
const allQuotesContainer = document.getElementById("all-quotes-container");
const searchInput = document.getElementById("search-input");
let allQuotes = [];

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
