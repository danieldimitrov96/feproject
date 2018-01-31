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
        });
    }
};

const applyButtonsEvents = function (currentNote, noteId) {
    const title = currentNote.find('#note-title-area');
    const category = currentNote.find('#note-category-area');
    const bottom = currentNote.find('#bottom');
    const wipeButton = currentNote.find('#wipe_button');

    wipeButton.click(function () {
        currentNote.fadeOut(500);
        localStorage.removeItem(noteId);
        setTimeout(function () {
            note.wipe(currentNote, noteId)
        }, 1000);
    });

    const editButton = currentNote.find('#edit_button');
    editButton.click(function () {
        note.addCurrentInputInEditModal(currentNote, noteId);
    });

    // expand button
    const expand = bottom.find('#expand_button');
    expand.click(function () {
        if (currentNote.attr('class').includes('col-sm-4')) {
            currentNote.attr('class', 'col-sm-8');
            title.attr('class', 'col-xs-10');
            category.attr('class', 'col-xs-2');
        } else {
            currentNote.attr('class', 'col-sm-4');
            title.attr('class', 'col-xs-8');
            category.attr('class', 'col-xs-4');
        }
    });
}

const applyHoverEffects = function (currentNote) {
    const bottom = currentNote.find('#bottom');
    const noteOptions = bottom.find('.note-options'); // . > #
    noteOptions.css('display', 'none');

    currentNote.on({
        mouseenter: function () {
            noteOptions.fadeIn(300);
        },
        mouseleave: function () {
            noteOptions.fadeOut(300);
        }
    });
};

const note = (function () {
    let parent = $('.grid-row');
    let targetParent;

    // HTML template for each note's container.
    const container =
        $('<div/>').attr({
            'class': 'col-sm-4 note-container',
        }).append($('<div/>').attr({
            'id': 'note',
            'class': 'note',
        }));

    // HTML template for the title.
    const title = $('<div/>').attr({
        'class': 'row',
    }).append($('<div/>').attr({
        'class': 'col-xs-8',
        'id': 'note-title-area'
    })).append($('<div/>').attr({
        'class': 'col-xs-4',
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
    const bottom = $('<div/>').attr({
        'class': 'note-bottom',
        'id': 'bottom',
    });
    const noteDateAndTime = $('<div/>').attr({
        'class': 'col-xs-5',
    }).append($('</p>').attr({
        'class': 'note-date-and-time',
        'id': 'note-date-and-time',
    }));
    const noteOptions = $('<div/>').attr({
        'class': 'col-xs-7 text-right note-options',
    });

    const expandButton = $('<span/>').attr({
        'id': 'expand_button',
        'class': 'hint--bottom',
        'aria-label': 'expand',
    }).append($('<i/>').attr({
        'class': 'material-icons',
    }).html('settings_ethernet'));

    const editButton = $('<span/>').attr({
        'id': 'edit_button',
        'class': 'hint--bottom',
        'aria-label': 'edit',
        'data-toggle': 'modal',
        'data-target': '#editNoteModal',
    }).append($('<i/>').attr({
        'class': 'material-icons hint--info',
    }).html('mode_edit'));

    const wipeButton = $('<span/>').attr({
        'id': 'wipe_button',
        'class': 'hint--bottom',
        'aria-label': 'delete',
    }).append($('<i/>').attr({
        'class': 'material-icons hint--info',
    }).html('delete_forever'));

    noteOptions.append(expandButton, editButton, wipeButton);
    bottom.append(noteDateAndTime, noteOptions);

    // Putting everything inside the note container.
    title.appendTo(container.find('#note'));
    content.appendTo(container.find('#note'));
    bottom.appendTo(container.find('.note-content'));

    const addTitle = function (text) {
        title.find('#note-title').html($.parseHTML(text));
    };

    const addCategory = function (str) {
        switch(str) {
            case 'TODO': targetParent = parent.find('#todo'); break;
            case 'WORK': targetParent = parent.find('#work'); break;
            case 'NEW IDEAS': targetParent = parent.find('#new-ideas'); break;
            default: targetParent = parent.find('#todo');
        }
        title.find('#note-category-area').html($('</p>').attr('class', 'note-category-title h6 page-header text-sm-left').text(str));
    }

    const addContent = function (text) {
        const noteContent = content.find('#note-content');
        noteContent.html($.parseHTML(text));
    }

    const setColor = function (color) {
        const rgb = color.split(',').map(part => part.match(/\d+/g).join(''));
        const red = rgb[0];
        const green = rgb[1];
        const blue = rgb[2];
        const opacity = 0.7;
        const colorSet = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
        container.find('#note').css('background-color', colorSet);

        return colorSet;
    };

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
        const dateTime = bottom.find('#note-date-and-time');
        dateTime.text(`${date.getHours()}:${date.getMinutes()} ${date.getDate()}-${months[date.getMonth()]}-${date.getFullYear()}`);
    };

    const wipe = function (note, noteId) {
        note.remove();
    };

    const addCurrentInputInEditModal = function (note, id) {
        let titleNow = note.find('#note-title').text();
        let contentNow = note.find('#note-content').html();
        let categoryNow = note.find('#note-category-area').text();
        let styleNow = note.find('#note').css("background-color");

        $('#editNoteTitle').val(titleNow);
        $("#categoryEdit").val(categoryNow).change();
        CKEDITOR.instances.editor2.setData(contentNow);
        
        const modal = $('#editNoteModal');
        
        // mark the current color.
        modal.find('.btn-group > label').each(function () {
            const buttonColor = $(this).css('background-color'); // as rgb
            const buttonColorRgba = setColor(buttonColor);

            if (buttonColorRgba !== styleNow) {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                }
            } else {
                if (!$(this).hasClass('active')) {
                    $(this).addClass('active');
                }
            }
        });

        $("#modalSubmitEditButton").one("click", function (e) {

            // get values from the edit
            titleNow = modal.find("#editNoteTitle").val();
            contentNow = CKEDITOR.instances.editor2.getData();

            const rawColor = modal.find(".btn-group > .active").css("background-color");
            const Rgba = setColor(rawColor);

            // set changed values
            note.find('#note-title').text(titleNow);
            note.find('#note-content').html(contentNow);
            note.find('#note-category-area').html(`<p class="note-category-title h6 page-header">${categoryNow}</p>`);
            note.find('.note').css("background-color", Rgba);

            const savedNote = JSON.stringify({
                'title': titleNow,
                'content': contentNow,
                'category': categoryNow,
                'color': rawColor,
            });

            localStorage.setItem(id, savedNote);
        });
    };

    return {
        'add': function add(title = null, content = null, category = null, color = 'rgb(250,250,249)', id = null) {
            
            if (id === null) {
                id = parseInt(Math.random() * 1000000);
            }

            addTitle(title);
            addContent(content);
            addCategory(category);
            setColor(color);
            setDateTime();
            const noteFinal = container.clone();
            noteFinal.prependTo(targetParent);
            applyButtonsEvents(noteFinal, id);
            applyHoverEffects(noteFinal);
            readMoreLess(noteFinal);

            const savedNote = JSON.stringify({'title': title, 'content': content, 'category': category, 'color': color});
            localStorage.setItem(id, savedNote);

        },

        'wipe': wipe,
        'addCurrentInputInEditModal': addCurrentInputInEditModal,
    }
})();