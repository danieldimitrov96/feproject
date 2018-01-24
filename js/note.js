/* eslint-disable */

const readMoreLess = function () {
    const noteContent = $(this);
    const text = noteContent.text();

    if (text.length > 1000) {
        let readLess = $('<span class=\"read-more-less\">...Show less text</span>');
        let firstPart = $('<span id="first-part">' + text.substr(0, 1000) + '</span>');
        let readMore = $('<span class=\'read-more-less\'>...Read more</span>');
        let secondPart = $('<span id="second-part">' + text.substr(1000, text.length) + '</span>');
        secondPart.css('display', 'none');
        noteContent.html('');
        noteContent.append(firstPart, readMore, secondPart);

        readMore = noteContent.find('.read-more-less');

        readMore.click(function () {
            if (secondPart.css('display') === 'none') {
                readMore.css('display', 'none');
                secondPart.append(readLess);
                secondPart.show("slow");
            }
        });

        readLess.click(function () {
            secondPart.hide("slow");
            readMore.show("slow");
        });
    }
};

const note = (function () {
    const parent = $('.grid-row');
    const container = $('<div class=\'col-sm-4 note-container\'><div id="note" class=\'note\'></div></div>');
    const title = $('<div class=\'row\'><div class=\'col-sm-12\'><p class=\'h4 page-header\' id="note-title"></p></div>');
    const content = $('<div class=\'row\'><div class=\'col-sm-12\'><p id="note-content"></p></div></div>');
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
        add: function add(title = null, content = null, dateTime = null) {
            addTitle(title);
            addContent(content);
            setDateTime(dateTime);
            container.clone().appendTo(parent);
        }
    }
})();