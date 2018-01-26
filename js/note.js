/* eslint-disable */

const readMoreLess = function (currentNote) {
    const noteContent = currentNote.find('#note-content');
    const text = noteContent.text();

    if (text.length > 250) {
        const firstPart = $('<span/>').attr('id', 'first-part').text(text.substr(0, 250));
        const secondPart = $('<span/>').attr('id', 'second-part').text(text.substr(250, text.length));
        const dots = $('<span/>').css('opacity', '0.5').html('...');
        secondPart.css('display', 'none');
        noteContent.append(firstPart, dots, secondPart);

        noteContent.click(function () {
            if (secondPart.css('display') === 'none') {
                dots.css('display', 'none');
                secondPart.show(200).css('display', '');
            } else {
                secondPart.hide(150);
                dots.css('display', '');
            }
        })
    }
};

const applyButtonsEvents = function (currentNote) {
    const wipeButton = currentNote.find('#wipe_button');
    wipeButton.click(function () {
        currentNote.fadeOut(500);
        setTimeout(function () {
            note.wipe(currentNote)
        }, 1000);
    });
}

const applyHoverEffects = function (currentNote) {
    const bottom = currentNote.find('#bottom');
    const noteOptions = bottom.find('.note-options'); // . > #
    noteOptions.css('display', 'none');
    // TODO: Add some kind of "fade in & out" animation.
    currentNote.on({
        mouseenter: function () {
            noteOptions.fadeIn(300);
        },
        mouseleave: function () {
            noteOptions.fadeOut(300);
        }
    })
};

const note = (function () {
    const parent = $('.grid-row');

    // HTML template for the main container.
    const container =
        $('<div/>').attr({
            'class': 'col-sm-3 note-container',
        }).append($('<div/>').attr({
            'id': 'note',
            'class': 'note',
        }));

    // HTML template for the title.
    const title = $('<div/>').attr({
        'class': 'row',
    }).append($('<div/>').attr({
        'class': 'col-xs-10',
        'id': 'note-title-area'
    })).append($('<div/>').attr({
        'class': 'col-xs-2',
        'id': 'note-category-area',
    }));
    title.find('#note-title-area').append($('<p/>').attr({
        'class': 'h4 page-header note-title',
        'id': 'note-title',
    }));

    // HTML template for the content.
    const content = $('<div/>').attr({
        'class': 'row note-content',
    }).append($('<div/>').attr({
        'class': 'col-sm-12',
    }));
    content.find('.col-sm-12').append($('<p/>').attr({
        'id': 'note-content',
    }));

    // HTML template for the bottom.
    // TODO: It's ugly. Rewrite it.
    const bottom = $('<div id="bottom" class=\'note-bottom\'><div class=\'row\'><div class=\'col-xs-4\'><p class=\'note-date-and-time\' id="note-date-and-time"></p></div><div class="col-xs-8 text-right note-options"><span class="hint--bottom" aria-label="expand"><i class="material-icons hint--info">settings_ethernet</i></span><span class="hint--bottom" aria-label="edit"><i class="material-icons">mode_edit</i></span><span class="hint--bottom" aria-label="delete"><i id="wipe_button" class="material-icons">delete_forever</i></span></div></div></div>');

    const dateTime = bottom.find('#note-date-and-time');

    const addTitle = function (text) {
        title.find('#note-title').html($.parseHTML(text));
        title.appendTo(container.find('#note'));
    };

    const addCategory = function (str) {
        title.find('#note-category-area').html($('</p>').attr('class', 'note-category-title h6 page-header').text(str));
    }

    const addContent = function (text) {
        const noteContent = content.find('#note-content');
        noteContent.html($.parseHTML(text));
        content.appendTo(container.find('#note'));
    }

    const setDateTime = function () {
        const months = [];
        months.push("Jan");
        months.push("Feb");
        months.push("Mar");
        months.push("Apr");
        months.push("May");
        months.push("Jun");
        months.push("Jul");
        months.push("Aug");
        months.push("Sep");
        months.push("Oct");
        months.push("Nov");
        months.push("Dec");

        const date = new Date();
        dateTime.text(`${date.getHours()}:${date.getMinutes()} ${date.getDate()}-${months[date.getMonth()]}-${date.getFullYear()}`);
        bottom.appendTo(container.find('#note'));
    };

    const wipe = function (note) {
        note.remove();
    };

    return {
        'add': function add(title = null, content = null, category = null) {
            addTitle(title);
            addContent(content);
            addCategory(category);
            setDateTime();
            const noteFinal = container.clone();
            noteFinal.appendTo(parent);
            applyButtonsEvents(noteFinal);
            applyHoverEffects(noteFinal);
            readMoreLess(noteFinal);
        },
        'wipe': wipe,
    }
})();