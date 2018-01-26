

const submitButton = $('#modalSubmitButton');
const submitEditButton = $('#modalSubmitEditButton');
const pickColor = $('#colorpicker');

submitEditButton.click(function(e){
    //prevent default
    e.preventDefault();
});


submitButton.click(function(e){
    var noteTitle = $('#noteTitle').val();        
    var noteText = CKEDITOR.instances.editor1.getData();
    var noteCathegory = $('#category').val();
    
    //prevent default
    e.preventDefault();
    
    //togle pop-up
    $('#addNoteModal').modal('toggle');

    //create new note
    note.add(noteTitle, noteText, noteCathegory);
    
    //set color of the
    var lastNote=$('.note').last();
    var colorHEX=pickColor.val();
    lastNote.css('background-color',colorHEX);
    

    //reset inputs too empty

    $('#noteTitle').val('');
    $('#cke_editor1').val('');
    CKEDITOR.instances.editor1.setData('');          
    
});