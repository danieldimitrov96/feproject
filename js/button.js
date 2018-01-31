const submitButton = $( "#modalSubmitButton" );
const submitEditButton = $( "#modalSubmitEditButton" );

submitEditButton.click( function( e ) {
    
    // prevent default
    e.preventDefault();

    // togle pop-up
    $( "#editNoteModal" ).modal( "toggle" );
} );

submitButton.click( function( e ) {
    const addNoteModal = $( "#addNoteModal" );

    const noteTitle = addNoteModal.find( "#noteTitle" ).val();
    const noteText = CKEDITOR.instances.editor1.getData();
    const noteCategory = addNoteModal.find( "#category" ).val();
    const color = addNoteModal.find( ".btn-group > .active" ).css( "background-color" );

    // prevent default
    e.preventDefault();

    addNoteModal.modal( "toggle" );

    // create new note
    note.add( noteTitle, noteText, noteCategory, color );

    // reset inputs too empty
    $( "#noteTitle" ).val( "" );
    $( "#cke_editor1" ).val( "" );
    CKEDITOR.instances.editor1.setData( "" );
} );
