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