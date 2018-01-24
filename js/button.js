const submitButton = $('#modalSubmitButton');
submitButton.click(function(e){
    let noteTitle = $('#noteTitle').val();        
    let noteText = CKEDITOR.instances.editor1.getData();
    
    //prevent default
    e.preventDefault();
    
    //togle pop-up
    $('#addNoteModal').modal('toggle');

    //create new note
    note.add(noteTitle, noteText);

    //reset inputs too empty
    $('#noteTitle').val('');
    $('#cke_editor1').val('');
    CKEDITOR.instances.editor1.setData('');          
    
});