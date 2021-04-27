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
    // change active link
    $('#navbar-items ul li').click(function() {
        $('#navbar-items ul li').removeClass('active');
        $(this).addClass('active');
    });
});

/*
 *events Dropdown
 */

$(document).ready(function() {
    var zindex = 10;

    $("div.card").hover(function(e) {
        e.preventDefault();

        var isShowing = false;

        // cards was showing?
        if ($(this).hasClass("d-card-show")) {
            isShowing = true
        }

        // any cards were showing?
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

    // $("div.card").click(function(e) {
    //     e.preventDefault();

    //     var isShowing = false;

    //     if ($(this).hasClass("d-card-show")) {
    //         isShowing = true
    //     }

    //     if ($("div.dashboard-cards").hasClass("showing")) {
    //         // a card is already in view
    //         $("div.card.d-card-show")
    //             .removeClass("d-card-show");

    //         if (isShowing) {
    //             // this card was showing - reset the grid
    //             $("div.dashboard-cards")
    //                 .removeClass("showing");
    //         } else {
    //             // this card isn't showing - get in with it
    //             $(this)
    //                 .css({ zIndex: zindex })
    //                 .addClass("d-card-show");

    //         }
    //         zindex++;
    //     } else {
    //         // no dashboard-cards in view
    //         $("div.dashboard-cards")
    //             .addClass("showing");
    //         $(this)
    //             .css({ zIndex: zindex })
    //             .addClass("d-card-show");
    //         zindex++;
    //     }

    // });
});

/*
 * Owl Carousel
 */

$("#carousel").owlCarousel({
    items: 1,
    dots: true,
    loop: true,
    margin: 2,
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

let scrollToTopBtn = $("#go-to-top");
const rootElement = document.documentElement;

$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        scrollToTopBtn.addClass('show');
    } else {
        scrollToTopBtn.removeClass('show');
    }
});

function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
scrollToTopBtn.off().on("click", scrollToTop);

// Countdown

(function() {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let astrax = "May 14 2021 00:00:00 GMT+0530",
        countDown = new Date(astrax).getTime(),
        x = setInterval(function() {
            let now = new Date().getTime(),
                distance = countDown - now;
            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                clearInterval(x);
            }
            //seconds
        }, 0)
}());

/*
 * Clickinfo text, text disappears after 7 seconds
 */

function registerText() {
    var btn = document.getElementById("infotext");
    btn.innerHTML = "Registrations will begin soon!";
    btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });

    setTimeout(function() {
        btn.innerHTML = "&nbsp;";
    }, 7000);
}

function brochureText() {
    var btn = document.getElementById("infotext");
    btn.innerHTML = "Brochure will be available soon!";
    btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });

    setTimeout(function() {
        btn.innerHTML = "&nbsp;";
    }, 7000);
}

$("a[href=\"#\"]").on("click", (e) => {
    e.preventDefault();
});
