$( document ).ready( function() {
    for (let noteId = 0; noteId < localStorage.length; noteId += 1) {
        const savedNote = JSON.parse(localStorage.getItem(localStorage.key(noteId)));

        note.add(savedNote.title, savedNote.content, savedNote.category, savedNote.color, localStorage.key(noteId));
    }
} );
