"use strict";

// Make sure that DOM is loaded.
document.addEventListener('DOMContentLoaded', function() {

    // === Smooth Scrolling ===
    // - Smooth scrolls to an ID on the current page.
    // Usage:
    // - Add a link that links to an ID, and
    // - Add the .page-scroll class to the link itself.

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // === Owl Carousel Settings 1 ===
    // Make sure that owl-carousel CSS files are loaded as well as the JS file.
    // http://stackoverflow.com/questions/21206656/owl-carousel-not-working-at-all

    $(".about-carousel").owlCarousel({
        items: 3,
        navigation: true,
        pagination: false,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
    });

    // === Owl Carousel Settings 2 - Staff ===

    $(".portfolio-carousel").owlCarousel({
        singleItem: true,
        navigation: true,
        pagination: false,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        autoHeight: true,
        mouseDrag: false,
        touchDrag: false,
        transitionStyle: "fadeUp"
    });

    // === Owl Carousel Settings 3 - Testimonial ===

    $(".testimonials-carousel").owlCarousel({
        singleItem: true,
        navigation: true,
        pagination: true,
        autoHeight: true,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        transitionStyle: "backSlide"
    });

    // === Owl Carousel Settings 4 - Menu gallery ===

    $(".portfolio-gallery").owlCarousel({
        items: 3,
    });

    // Magnific Popup jQuery Lightbox Gallery Settings
    $('.gallery-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        image: {
            titleSrc: 'title'
        }
    });

    // === Scrollspy ===
    // Update the active navigation menu items while scrolling.

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

});
