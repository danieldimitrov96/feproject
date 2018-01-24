/* eslint-disable */

const readMoreLess = function (currentNote) {
    const noteContent = currentNote.find('#note-content');
    const text = noteContent.text();

    if (text.length > 1000) {
        const readLess = $('<span/>').attr('class', 'read-more-less').html('...Show less text');
        readLess.css('display', 'none');

        const firstPart = $('<span/>').attr('id', 'first-part').text(text.substr(0, 1000));
        const readMore = $('<span/>').attr('class', 'read-more-less').text(' ...Read more');
    
        const secondPart = $('<span/>').attr('id', 'second-part').text(text.substr(1000, text.length));
        secondPart.css('display', 'none');
        
        noteContent.html('');
        noteContent.append(firstPart, readMore, secondPart, readLess);

        readMore.click(function(){
            readMore.css('display', 'none');
            secondPart.show(1000);
            readLess.css('display', '');
        });

        readLess.click(function(){
            readLess.css('display', 'none');
            secondPart.hide(1000);
            readMore.css('display', '');
        });
    }
};

const applyButtonsEvents = function(currentNote) {
    const wipeButton = currentNote.find('#wipe_button');
    wipeButton.click(function(){
        note.wipe(currentNote);
    });
}

const applyHoverEffects = function(currentNote) {
    const bottom = currentNote.find('#bottom');
    const htmlCode = bottom.html();
    
    // TODO: Add some kind of "fade in & out" animation.
    currentNote.on({
        mouseenter: function(){
            // 
        },
        mouseleave: function(){
            //
        }
    })
};

const note = (function () {
    const parent = $('.grid-row');

    // HTML template for the main container.
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
        'class': 'row',
    }).append($('<div/>').attr({
        'class': 'col-sm-12',
    }));
    content.find('.col-sm-12').append($('<p/>').attr({
        'id': 'note-content',
    }));
    
    // HTML template for the bottom.
    // TODO: It's ugly. Rewrite it.
    const bottom = $('<div class=\'row\' id="bottom"\><div class=\'col-xs-4\'><hr /><p id="note-date-and-time"><strong>10:30AM</strong><i>10.20.2099</i></p></div><div class="col-xs-8 text-right note-options"><hr /><span class="hint--bottom" aria-label="expand"><i class="material-icons hint--info">settings_ethernet</i></span><span class="hint--bottom" aria-label="edit"><i class="material-icons">mode_edit</i></span><span class="hint--bottom" aria-label="delete"><i id="wipe_button" class="material-icons">delete_forever</i></span></div></div></div>');

    const dateTime = bottom.find('#note-date-and-time');

    const addTitle = function (text) {
        title.find('#note-title').html(text);
        title.appendTo(container.find('#note'));
    };

    const addCategory = function (str) {
        title.find('#note-category-area').html($('</p>').attr('class', 'note-category-title h6 page-header').text(str));
    }

    const addContent = function (text) {
        const noteContent = content.find('#note-content');
        noteContent.html(text);
        content.appendTo(container.find('#note'));
    }

    const setDateTime = function () {
        dateTime.text(Date())
        bottom.appendTo(container.find('#note'));
    }

    const wipe = function(note) {
        // TODO: fadeOut before deleting.
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
            // applyHoverEffects(noteFinal);
            readMoreLess(noteFinal);
        },
        'wipe': wipe,
    }
})();
