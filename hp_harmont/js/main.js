// JS HP Harmont & Blaine

$(document).ready(function() {

    // Hover Saldi
    $('#saldi').hover(function() {
        $('.sale').toggleClass('show');
    });
    $('.sale').mouseenter( function() {
            $('.sale').addClass('show');
    });
    $('.sale').mouseleave( function() {
        $('.sale').removeClass('show');
    });

    // Hover Uomo
    $('#uomo').hover(function() {
        $('.man').toggleClass('show');
    });
    $('.man').mouseenter( function() {
        $('.man').addClass('show');
    });
    $('.man').mouseleave( function() {
        $('.man').removeClass('show');
    });

    // Hover Donna
    $('#donna').hover(function() {
        $('.woman').toggleClass('show');
    });
    $('.woman').mouseenter( function() {
        $('.woman').addClass('show');
    });
    $('.woman').mouseleave( function() {
        $('.woman').removeClass('show');
    });

    // Hover Bambino
    $('#bambino').hover(function() {
        $('.children').toggleClass('show');
    });
    $('.children').mouseenter( function() {
        $('.children').addClass('show');
    });
    $('.children').mouseleave( function() {
        $('.children').removeClass('show');
    });

    // Hover HB Mood
    $('#hb-mood').hover(function() {
        $('.mood').toggleClass('show');
    });
    $('.mood').mouseenter( function() {
        $('.mood').addClass('show');
    });
    $('.mood').mouseleave( function() {
        $('.mood').removeClass('show');
    });

    // Hover HB World
    $('#hb-world').hover(function() {
        $('.world').toggleClass('show');
    });
    $('.world').mouseenter( function() {
        $('.world').addClass('show');
    });
    $('.world').mouseleave( function() {
        $('.world').removeClass('show');
    });

    // Hover Search
    $('.fa-magnifying-glass').click(function() {
        $('.header-search').slideToggle();
    });

    $('.fa-xmark').click(function() {
        $('.header-search').slideUp();
    })

    // Slick Carousel
    $('.slick-carousel').slick({
        arrows: true,
        prevArrow: '<i class="fa-solid fa-chevron-left"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-right"></i>',
        autoplay: true,
        autoplaySpeed: 3000,
    });
})