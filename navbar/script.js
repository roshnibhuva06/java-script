
const searchInput = document.querySelector(".search-box input");

// Hover Dropdown
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(drop => {
  drop.addEventListener("mouseenter", () => {
    drop.querySelector(".dropdown-menu").style.display = "block";
  });

  drop.addEventListener("mouseleave", () => {
    drop.querySelector(".dropdown-menu").style.display = "none";
  });
});