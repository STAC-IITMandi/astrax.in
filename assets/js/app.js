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

// ********************************************************************************
// Adding Functionality to Scroll Top Button

// selecting the scroll-top button element
const scrollTopBtn = document.querySelector("#scroll-top");

// function for smooth scrolling to top
function scroll() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

// When the user scrolls down 100px from the top of the document, show the button
function scrollFunction() {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}
window.onscroll = function () {
    scrollFunction();
};

// adding Event Listener to handel click event on the button
scrollTopBtn.addEventListener("click", scroll);

//*********************************************************************************