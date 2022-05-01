// Selecting Navbar in document
var navbar = document.querySelector("#mainNav");
var navbarContent = document.querySelector("#navbarResponsive");

const isDesktopScreen = window.matchMedia("(min-width: 992px)");


function titleEffect() {
    // separate each letter in the title to its own span element with a random offset
    var h1 = document.querySelector('.masthead h1');
    var x = "";
    for (const c of h1.textContent)
        x += `<span class="tslide" data-offset=${1+ Math.random()*5}>${c}</span>`;
    h1.innerHTML = x;
}


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

    // Title effect
    const scr = Number(document.body.scrollTop) || Number(document.documentElement.scrollTop);
    if (scr===0)
        titleEffect(); // Reset the random offsets

    if (scr < 500) {
        // Shift each letter upward/downward by its offset
        for (let span of document.querySelectorAll('.masthead span.tslide')) {
            let val = Math.floor(Number(span.dataset.offset) * scr / 8);
            span.style.bottom = `${val}px`;
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

titleEffect()

navbarContent.addEventListener('show.bs.collapse', function() {
    navbar.classList.add('opaque-bg')
})
navbarContent.addEventListener('hidden.bs.collapse', function() {
    navbar.classList.remove('opaque-bg')
})


var scsws = document.querySelectorAll('li.swpg-switch');
for (let sw of scsws) {
    sw.addEventListener('click', function(e) {
        for (let swa of scsws)
            swa.classList.remove('active');
        // console.log(this, e.target);
        e.target.parentElement.classList.add('active');
    })
}

setTimeout(function(){
    // During the fest, display the page containing current day's schedule directly
    switch (new Date().toDateString()) {
        case 'Sun May 01 2022' :
            document.querySelector('#schedule-day1').classList.remove('show');
            document.querySelector('#schedule-day2').classList.add('show');
            document.querySelector('a.switch-title[href="#schedule-day1"]').parentElement.classList.remove('active');
            document.querySelector('a.switch-title[href="#schedule-day2"]').parentElement.classList.add('active');
            break;
        case 'Mon May 02 2022' :
            document.querySelector('#schedule-day1').classList.remove('show');
            document.querySelector('#schedule-day3').classList.add('show');
            document.querySelector('a.switch-title[href="#schedule-day1"]').parentElement.classList.remove('active');
            document.querySelector('a.switch-title[href="#schedule-day3"]').parentElement.classList.add('active');
            break;
        case 'Tue May 03 2022' :
            document.querySelector('#schedule-day1').classList.remove('show');
            document.querySelector('#schedule-day4').classList.add('show');
            document.querySelector('a.switch-title[href="#schedule-day1"]').parentElement.classList.remove('active');
            document.querySelector('a.switch-title[href="#schedule-day4"]').parentElement.classList.add('active');
        break;
    }
})
