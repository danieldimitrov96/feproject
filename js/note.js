/* eslint-disable */

const readMoreLess = function () {
    const noteContent = $(this);
    const text = noteContent.text();

    if (text.length > 1000) {
        let readLess = $('<span/>').attr('class', 'read-more-less').html('...Show less text');
        let firstPart = $('<span id="first-part">' + text.substr(0, 1000) + '</span>');
        let readMore = $('<span/>').attr('class', 'read-more-less').html(' ...Read more');
        let secondPart = $('<span/>').attr('id', 'second-part').html(text.substr(1000, text.length));
        secondPart.css('display', 'none');
        noteContent.html('');
    }
};

const note = (function () {
    const parent = $('.grid-row');
    const container =
        $('<div/>').attr({
            'class': 'col-sm-4 note-container',
        }).append($('<div/>').attr({
            'id': 'note',
            'class': 'note',
        }));
    const title = $('<div/>').attr({
        'class': 'row',
    }).append($('<div/>').attr({
        'class': 'col-sm-12',
    })).html($('<p/>').attr({
        'class': 'h4 page-header note-title',
        'id': 'note-title',
    }));

    const content = $('<div/>').attr({
        'class': 'row',
    }).append($('<div/>').attr({
        'class': 'col-sm-12',
    })).html($('<p/>').attr({
        'id': 'note-content',
    }));
    
    const bottom = $('<div class=\'row\'><div class=\'col-xs-4\'><hr /><p id="note-date-and-time"><strong>10:30AM</strong><i>10.20.2099</i></p></div><div class="col-xs-8 text-right note-options"><hr /><span class="hint--bottom" aria-label="expand"><i class="material-icons hint--info">settings_ethernet</i></span><span class="hint--bottom" aria-label="edit"><i class="material-icons">mode_edit</i></span><span class="hint--bottom" aria-label="preferences"><i class="material-icons">settings</i></span></div></div></div>');
    
    const dateTime = bottom.find('#note-date-and-time');

    const addTitle = function (text) {
        title.find('#note-title').text(text);
        title.appendTo(container);
    };

    const addContent = function (text) {
        const noteContent = content.find('#note-content');
        noteContent.text(text);
        readMoreLess.call(noteContent);
        content.appendTo(container);
    }

    const setDateTime = function () {
        dateTime.text(Date())
        bottom.appendTo(container);
    }

    return {
        add: function add(title = null, content = null) {
            addTitle(title);
            addContent(content);
            setDateTime();
            container.clone().appendTo(parent);
        }
    }
})();