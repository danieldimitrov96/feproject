/* eslint-disable */

// Search nav bar
let $navli = $('.nav-bar-category li');
let $todo = $('#todo');
let $work = $('#work');
let $newIdeas = $('#new-ideas');

$('#searchBox').on('keyup', function () {
    var value = $(this).val().toLowerCase();
    if (value === '') {
        $navli.removeClass('active');
        $('li').each(function () {
            let $this = $(this);
            if ($this.html().indexOf('SHOW ALL') > -1)
                $this.addClass('active');
        });
        $todo.show();
        $work.show();
        $newIdeas.show();
        // $('.note-category-title').each(() => $(this).closest('.note-container').show());
    } else {
        $('.note-container').each(function () {
            if ($(this).text().toLowerCase().indexOf(value) > -1) {
                $(this).parent().show();
            } else {
                $(this).parent().hide();
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
            $todo.show();
            $work.hide();
            $newIdeas.hide();
            break;
        case 'WORK':
            $todo.hide();
            $work.show();
            $newIdeas.hide();
            break;
        case 'NEW IDEAS':
            $todo.hide();
            $work.hide();
            $newIdeas.show();
            break;
        default:
            $todo.show();
            $work.show();
            $newIdeas.show();
            break;
    }
});