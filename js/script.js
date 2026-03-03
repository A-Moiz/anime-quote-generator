// Variables
const appearanceBtn = document.getElementById("appearance-btn");

// Event listener
if (appearanceBtn) {
  appearanceBtn.addEventListener("click", changeAppearance);
}

// Toggle website appearance
function changeAppearance() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");

  appearanceBtn.src = isDark
    ? "./assets/moon-icon.png"
    : "./assets/sun-icon.png";

  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Apply saved theme on page load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  if (appearanceBtn) appearanceBtn.src = "./assets/moon-icon.png";
}
