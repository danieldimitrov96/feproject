const submitButton = $( "#modalSubmitButton" );
const submitEditButton = $( "#modalSubmitEditButton" );
const pickColor = $( "#colorpicker" );

submitEditButton.click( function( e ) {

    // prevent default
    e.preventDefault();

    // togle pop-up
    $( "#editNoteModal" ).modal( "toggle" );
} );

submitButton.click( function( e ) {
    const noteTitle = $( "#noteTitle" ).val();
    const noteText = CKEDITOR.instances.editor1.getData();
    const noteCategory = $( "#category" ).val();

    // prevent default
    e.preventDefault();

    // togle pop-up
    $( "#addNoteModal" ).modal( "toggle" );

    // create new note
    note.add( noteTitle, noteText, noteCategory );

    // set color of the
    const lastNote = $( ".note-container" ).last();
    const colorHEX = pickColor.val();
    lastNote.css( "background-color", colorHEX );

    // reset inputs too empty

    $( "#noteTitle" ).val( "" );
    $( "#cke_editor1" ).val( "" );
    CKEDITOR.instances.editor1.setData( "" );
} );
