/* eslint-disable */

const fancy = (function () {

    //consts
    const ANIMATION_SPEED_HIDE = 580;
    const ANIMATION_SPEED_SHOW = 580;

    const $navli = $('.nav-bar-category li');
    const $work = $('#work');
    const $todo = $('#todo');
    const $newIdeas = $('#new-ideas');

    const haideAllCategories = () => {
        $todo.hide(ANIMATION_SPEED_HIDE);
        $work.hide(ANIMATION_SPEED_HIDE);
        $newIdeas.hide(ANIMATION_SPEED_HIDE);
    };

    const showAllCategories = () => {
        $('.grid-row').hide(ANIMATION_SPEED_HIDE);
        $todo.show();
        $work.show();
        $newIdeas.show();
        $('.note-container').show();
        $('.grid-row').show(ANIMATION_SPEED_SHOW);
    };

    const showNewIdeas = () => {
        haideAllCategories();
        $('.note-container').show();
        $newIdeas.show(ANIMATION_SPEED_SHOW);
    };

    const showWork = () => {
        haideAllCategories();
        $('.note-container').show();
        $work.show(ANIMATION_SPEED_SHOW);
    };

    const showTODO = () => {
        haideAllCategories();
        $('.note-container').show();
        $todo.show(ANIMATION_SPEED_SHOW);
    };

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
            showAllCategories();
        } else {
            //hide all notes but show all categories
            $('note-container').hide(ANIMATION_SPEED_HIDE);
            $todo.show(ANIMATION_SPEED_SHOW);
            $work.show(ANIMATION_SPEED_SHOW);
            $newIdeas.show(ANIMATION_SPEED_SHOW);

            $('.note-container').each(function () {
                let text = $(this).text().toLowerCase();
                //delete last symbols which are from html 
                text = text.substring(0, text.length - 40);

                if (text.indexOf(value) > -1) {
                    $(this).show(ANIMATION_SPEED_SHOW);
                } else {
                    $(this).hide(ANIMATION_SPEED_HIDE);
                }
            });
        };
    });

    // smooth scrooling to top on click on the logo and search box
    $('.navbar-brand, #searchBox').on('click', (function () {
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

    //smaller nav
    $('#navBar').affix({
        offset: {
            top: 100
        }
    });

    //change active button 
    $navli.on("click", function () {
        $navli.removeClass('active');
        $(this).addClass('active');

        let selectedCategory = ($(this).text().trim());
        switch (selectedCategory) {
            case 'TODO':
                document.title = "ORGO - TODO";
                showTODO();
                break;
            case 'WORK':
                document.title = "ORGO - Work";
                showWork();
                break;
            case 'NEW IDEAS':
                document.title = "ORGO - New ideas";
                showNewIdeas();
                break;
            default:
                document.title = "ORGO - Show all";
                showAllCategories();
                break;
        }
    });
    
    //close options menu with ESC
    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            $('.close').click();
        }
    });

    // click feedback when background is selected
    $('.board-background-select').on('click', function () {
        let $this = $(this);
        $this.animate({
            opacity: '0.3'
        }, 'fast');
        $this.animate({
            opacity: '1'
        }, 'fast');
    });
})();