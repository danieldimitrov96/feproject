const submitButton = $('#modalSubmitButton');
const pickColor = $('#colorpicker');


submitButton.click(function (e) {
    var noteTitle = $('#noteTitle').val();
    var noteText = CKEDITOR.instances.editor1.getData();
    var noteCategory = $('#category').val();

    //prevent default
    e.preventDefault();

    //togle pop-up
    $('#addNoteModal').modal('toggle');

    //create new note
    note.add(noteTitle, noteText, noteCategory);

    //set color of the
    var lastNote = $('.note-container').last();
    var colorHEX = pickColor.val();
    lastNote.css('background-color', colorHEX);

    //reset inputs too empty

    $('#noteTitle').val('');
    $('#cke_editor1').val('');
    CKEDITOR.instances.editor1.setData('');

});