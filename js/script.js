// Variables
const appearanceBtn = document.getElementById("appearance-btn");

// Event listeners
appearanceBtn.addEventListener("click", changeAppearance);

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
