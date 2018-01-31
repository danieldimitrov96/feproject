$( document ).ready( function() {
    for (let noteId = 0; noteId < localStorage.length; noteId += 1) {
        
        const noteAsSaved = localStorage.getItem(localStorage.key(noteId));
        
        if (noteAsSaved.indexOf('http') > -1) {
            continue;
        }

        const noteParsed = JSON.parse(localStorage.getItem(localStorage.key(noteId)));
        note.add(noteParsed.title, noteParsed.content, noteParsed.category, noteParsed.color, localStorage.key(noteId));
    }

    if (localStorage.getItem('imgUrl') === null) {
        localStorage.setItem('imgUrl', 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2048x2048/6ca6f4d4009c17936e31ec2977190a25/photo-1517064315897-1b3dc47f0424.jpg');
    }

    $('body').css('background-image', `url('${localStorage.getItem('imgUrl')}')`);
} );
