// Selecting Navbar in document
const navbar = document.querySelector("#mainNav");

// Adding scrolled event listener to window
window.addEventListener("scroll", (e) => {
    "use strict";

    // if scrolled distance is greater than height of navbar
    if (
        document.body.scrollTop >= navbar.offsetHeight / 2 ||
        document.documentElement.scrollTop >= navbar.offsetHeight / 2
    ) {
        // add scrolled class
        navbar.classList.add("nav-scrolled");
    } else {
        // if scrolled class is present then remove it
        if (navbar.classList.contains("nav-scrolled")) {
            navbar.classList.remove("nav-scrolled");
        }
    }
});
