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
})