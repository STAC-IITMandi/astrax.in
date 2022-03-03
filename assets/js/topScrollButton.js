// selecting the scroll-top button element
const scrollTopBtn = document.querySelector("#scroll-top");

// function for smooth scrolling to top
function scroll() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}

// When the user scrolls down 20px from the top of the document, show the button
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
