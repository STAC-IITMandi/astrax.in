window.__forceSmoothScrollPolyfill__ = true;

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
    $('#navbar-items ul li').click(function () {
        $('#navbar-items ul li').removeClass('active');
        $(this).addClass('active');
    });
});

/* 
 * Logo Shrink
 */

window.onscroll = function() {
    growShrinkLogo()
};
  
var Logo = $("#navbar-logo");
var endOfDocumentTop = 100;
var size = 0;

function growShrinkLogo() {
    var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (size == 0 && scroll > endOfDocumentTop) {
        Logo.addClass('smallLogo');
        size = 1;
    } else if(size == 1 && scroll <= endOfDocumentTop){
        Logo.removeClass('smallLogo');
        size = 0;
    }
}

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

let scrollToTopBtn = $("#go-to-top");
const rootElement = document.documentElement;

$(window).scroll(function () {
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

(function () {
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
