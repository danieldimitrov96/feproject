const submitButton = $( "#modalSubmitButton" );
const pickColor = $( "#colorpicker" );

const submitEditButton = $( "#modalSubmitEditButton" );

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
    const color = pickColor.val();

    // prevent default
    e.preventDefault();

    // togle pop-up
    $( "#addNoteModal" ).modal( "toggle" );

    // create new note
    note.add( noteTitle, noteText, noteCategory, color );

    // reset inputs too empty
    $( "#noteTitle" ).val( "" );
    $( "#cke_editor1" ).val( "" );
    CKEDITOR.instances.editor1.setData( "" );
} );
