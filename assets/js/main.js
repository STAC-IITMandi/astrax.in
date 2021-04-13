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