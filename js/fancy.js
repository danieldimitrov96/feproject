/* eslint-disable */

// Search nav bar
$("#searchBox").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".note-container").each(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
});

// smooth scrooling to top on click on the logo
$('.navbar-brand').on('click', (function () {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;
}));

//bigger nav in the top of the page
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
});

$('#navBar').affix({
    offset: {
        top: 100
    }
})

//change active button 
let navli = $(".nav-bar-category li");

navli.on("click", function () {
    navli.removeClass("active");
    $(this).addClass("active");
});