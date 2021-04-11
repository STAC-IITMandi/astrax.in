/*
 * Change Navbar color while scrolling
 */

$(document).ready(function() {
    $(document).scroll(function() {
        if ($(this).scrollTop() > 10) {
            $("#site-nav").addClass("navbar-solid");
        } else {
            $("#site-nav").removeClass("navbar-solid");
        }
    });
});

/*
 * Owl Carousel
 */

$("#carousel").owlCarousel({
    items: 1,
    dots: true,
    loop: true,
    autoplay: true,
    nav: true,
    navText: [
        '<div class="fa fa-chevron-left" aria-hidden="true"></div>',
        '<div class="fa fa-chevron-right" aria-hidden="true"></div>',
    ],
    // responsive: {
    //     768: {
    //         items: 1,
    //     },
    //     1000: {
    //         items: 2,
    //     },
    // },
});

/*
 * Go to top button
 */

let btn = $("#go-to-top");

$(window).scroll(function () {
    if ($(window).scrollTop() > 90) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

let scrollToTopBtn = document.getElementById("go-to-top");
let rootElement = document.documentElement;

function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
