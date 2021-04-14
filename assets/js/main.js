/*
 * Change Navbar color while scrolling
 */

$(document).ready(function() {
    //Make site navbar opaque
    $(document).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $("#site-nav").addClass("navbar-solid");
        } else {
            $("#site-nav").removeClass("navbar-solid");
        }
    });
    //Grey background instead of transparent on small screens (collapsing menu)
    $("#navbar-items").on('show.bs.collapse', function() {
        $("#site-nav").addClass("navbar-solid-header");
    });
    $("#navbar-items").on('hide.bs.collapse', function() {
        $("#site-nav").removeClass("navbar-solid-header");
    });
    //Close navbar when link is clicked
    $("#navbar-items .nav-item").click(function(clickevt) {
        $("#navbar-items").collapse('hide');
    
    // change active link
    $('#navbar-items ul li').click(function () {
        $('#navbar-items ul li').removeClass('active');
        $(this).addClass('active');
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
