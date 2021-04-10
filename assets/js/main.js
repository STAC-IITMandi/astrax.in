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
 * events Dropdown
 */

$(document).ready(function() {
    var zindex = 10;

    $("div.card").hover(function(e) {
        e.preventDefault();

        var isShowing = false;

        if ($(this).hasClass("d-card-show")) {
            isShowing = true
        }

        if ($("div.dashboard-cards").hasClass("showing")) {
            // a card is already in view
            $("div.card.d-card-show")
                .removeClass("d-card-show");

            if (isShowing) {
                // this card was showing - reset the grid
                $("div.dashboard-cards")
                    .removeClass("showing");
            } else {
                // this card isn't showing - get in with it
                $(this)
                    .css({ zIndex: zindex })
                    .addClass("d-card-show");

            }
            zindex++;
        } else {
            // no dashboard-cards in view
            $("div.dashboard-cards")
                .addClass("showing");
            $(this)
                .css({ zIndex: zindex })
                .addClass("d-card-show");
            zindex++;
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