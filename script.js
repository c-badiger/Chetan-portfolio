
// Mobile navigation menu
const menuButton = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("show");

        const isExpanded = navLinks.classList.contains("show");

        menuButton.setAttribute("aria-expanded", isExpanded);
        menuButton.textContent = isExpanded ? "✕" : "☰";
    });
}

// Automatically update the copyright year
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
