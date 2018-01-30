/* eslint-disable */

// CAN BE CHANGED IN OPIONS MENU
ANIMATION_SPEED = 580;

//variables
let $navli = $('.nav-bar-category li');
let $todo = $('#todo');
let $work = $('#work');
let $newIdeas = $('#new-ideas');

// Search nav bar
$('#searchBox').on('keyup', function () {
    var value = $(this).val().toLowerCase();
    if (value === '') {
        $navli.removeClass('active');
        $('li').each(function () {
            let $this = $(this);
            if ($this.html().indexOf('SHOW ALL') > -1)
                $this.addClass('active');
        });
        $todo.show(ANIMATION_SPEED);
        $work.show(ANIMATION_SPEED);
        $newIdeas.show(ANIMATION_SPEED);
        // $('.note-category-title').each(() => $(this).closest('.note-container').show(ANIMATION_SPEED));
    } else {
        $('.note-container').each(function () {
            if ($(this).text().toLowerCase().indexOf(value) > -1) {
                $(this).parent().show(ANIMATION_SPEED);
            } else {
                $(this).parent().hide(ANIMATION_SPEED);
            }
        });
    };
})

// smooth scrooling to top on click on the logo
$('.navbar-brand, .nav-bar-category, #searchBox').on('click', (function () {
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

for (let i = 0; i < 3; i++) {
    note.add('test', 'joro e ot burgas ivan e ot burgas ivan e ot burgas ivan e ot burgas', 'WORK');
    note.add('test', 'petyr e ot burgas gosho e ot burgas ivan e ot burgas ivan e ot burgas ', 'NEW IDEAS');
    note.add('test', 'ismail e ot burgas gosho e ot burgas ivan e ot burgas ivan e ot, burgas ', 'TODO');
}

//change active button 
$navli.on("click", function () {
    $navli.removeClass('active');
    $(this).addClass('active');

    let selectedCategory = ($(this).text().trim());
    switch (selectedCategory) {
        case 'TODO':
            $todo.hide(ANIMATION_SPEED);
            $todo.show(ANIMATION_SPEED);
            $work.hide(ANIMATION_SPEED);
            $newIdeas.hide(ANIMATION_SPEED);
            break;
        case 'WORK':
            $todo.hide(ANIMATION_SPEED);
            $work.show(ANIMATION_SPEED);
            $newIdeas.hide(ANIMATION_SPEED);
            break;
        case 'NEW IDEAS':
            $todo.hide(ANIMATION_SPEED);
            $work.hide(ANIMATION_SPEED);
            $newIdeas.show(ANIMATION_SPEED);
            break;
        default:
            $todo.hide(ANIMATION_SPEED);
            $todo.show(ANIMATION_SPEED);
            $work.show(ANIMATION_SPEED);
            $newIdeas.show(ANIMATION_SPEED);
            break;
    }
});