// HTML template for the main modal container.
const modalFade = $('<div/>').attr({
    'class': 'modal fade',
    'id': 'editNoteModal',
    'tabindex': '-1',
    'role': 'dialog',
    'aria-labelledby': "editNoteModalLabel",
});

const modalDialog = $('<div/>').attr({
    'class': 'modal-dialog',
    'role': 'document',
});

const modalContent = $('<div/>').attr({
    'class': 'modal-content',
});

const modalHeader =  $('<div/>').attr({
    'class': 'modal-header',
});

const closeButton = $('<div/>').attr({
    'type': 'button',
    'class': 'close',
    'data-dismiss': 'modal',
    'aria-label': 'Close'
}).append('<span/>').attr({
    
});



    //  html
    

<div class="modal fade" id="editNoteModal" tabindex="-1" role="dialog" aria-labelledby="editNoteModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <form>
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="editNoteModalLabel">Create Note</h4>
              </div>
              <div class="modal-body">
                <div class='form-group'>
                  <label>Note Title</label>
                  <input id='editNoteTitle' type="text" class="form-control" placehoulder="Note Title">
                </div>
                <div class='form-group'>
                  <label>Note Text</label>
                  <textarea name='editor2' type="text" class="form-control" placehoulder="Note Body"></textarea>
                </div>
                <div class='form-group'>
                  <select id='categoryEdit' class='btn btn-default dropdown-toggle'>
                    <option value="NEW IDEAS">NEW IDEAS</option>
                    <option value="TODO">TODO</option>
                    <option value="WORK">WORK</option>
                  </select>
                  <input class='btn btn-default dropdown-toggle' id="colorpickerEdit" value="#ff0000" type="color">
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button id='modalSubmitEditButton' type="submit" class="btn btn-primary">Submit</button>
              </div>