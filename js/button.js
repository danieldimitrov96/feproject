const submitButton = $( "#modalSubmitButton" );
const submitEditButton = $( "#modalSubmitEditButton" );

let color = "rgb(255, 255, 255)";

// Event for picking a color.
$( ".btn-group-sm > .colorpicker" ).click( function() {
    color = $( this ).css( "background-color" );
} );

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
    note.add( noteTitle, noteText, noteCategory, color );
    
    // reset inputs too empty
    $( "#noteTitle" ).val( "" );
    $( "#cke_editor1" ).val( "" );
    CKEDITOR.instances.editor1.setData( "" );
} );
