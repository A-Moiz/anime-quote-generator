// Import
import { getRandomQuote } from "./quotes.js";

const quoteTxt = document.getElementById("quote");
const quoteInfo = document.getElementById("quote-info");
const nextQuote = document.getElementById("next-quote");
const quoteImg = document.getElementById("quote-img");

// Display quote
async function displayQuote() {
  try {
    const quote = await getRandomQuote();
    if (quote) {
      quoteTxt.textContent = quote.quote;
      quoteInfo.textContent = `${quote.character} - ${quote.anime}`;
      quoteImg.src = quote.characterImg;
      quoteImg.classList.add("character-img");
    }
  } catch (error) {
    console.error("Failed to fetch quote:", error);
  }
}

if (nextQuote) {
  nextQuote.addEventListener("click", displayQuote);
  displayQuote();
}

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    window.location.reload();
  }
});
