
var runIntro = function () {
  var stopIntro=false;

  var messageAr = [
    ['THIS IS ORGO', ],
    ['ORGO is a single page application', ],
    ['ORGO can add notes', ],
    [false, '#addNote', ],
    [false, false, '#addNote'],
    // [false, '#addNoteModal', ],
    // [false, '#noteTitle'],
    // [false, '#noteContent'],
    // [false, '#category'],
    // [false, '#color'],
    [false, false, '#modalCloseButton'],
    ['ORGO can also edit them', ],
    ['ORGO can search the notes', ],
    [false, '#searchBox'],
    ['every note in ORGO has a category', ],
    ['ORGO can filter the notes by category', ],
    [false, '.nav-bar-category'],
    ['ORGO can also change the background of the work space', ],
    [false, '#optionButton'],
    [false, false, '#optionButton'],
    [false, false, '#modalOptionClose'],
    ['thank you', ],
  ];
  
  function setupIntro() {
    var btnSkip = $('<button>').text('skip').attr({
      'class': 'skipButton button button-caution  button-giant '
    }).css({
      'position': 'fixed',
      'opacity':'0.3',
      'z-index': '200',
      'display': 'block',
      'top': '88%',
    });

    var introWrapper = $('<div/>').attr({
      'class': 'introWrapper',
    }).css({
      'height': '100vh',
      'width': '100%',
      'position': 'fixed',
      'z-index': '99',
      'margin': '0',
      'pading': '0',
      'background-color': '#fff',
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center',
    });

    var background = $('<div/>').css({
      'height': '100vh',
      'width': '100%',
      'position': 'fixed',
      'z-index': '100',
      'background-color': '#a4ddf2',
      'margin': '0',
      'pading': '0',
      'opacity': '0.2',
    });

    var text = $('<p>').attr('class', 'introText')
      .text(messageAr[0][0].toUpperCase()).css({
        'font-size': '7vw',
        'position': 'fixed',
        'line-height': 'auto',
        'z-index': '101',
        'text-align': 'center',
        'margin': '0',
        'pading': '0',
        'width': '70%'
      });

    //combine elements in into div
    introWrapper.append(text);
    introWrapper.append(background);
    introWrapper.append(btnSkip);
    $('body').prepend(introWrapper);

    //add event listeners
    $('.skipButton').on('mouseup', function () {
      stopIntro=true;
      $('.introWrapper').remove();
      console.log('button pushed!')
    })

  }
  setupIntro();

  function cycleMessages(i, duration) {
    var flashDuration = duration / 5;
    var introWrapperInDom= $(".introWrapper");
    var textInDom=$('.introText');
    setTimeout(function () {
      if (i === messageAr.length || stopIntro===true ) {
        introWrapperInDom.remove();
        return;
      }
      if (messageAr[i][1]) {
        if (introWrapperInDom.is(":visible")) {
          introWrapperInDom.toggle();
        }

        $(messageAr[i][1]).fadeIn(flashDuration).fadeOut(flashDuration).fadeIn(flashDuration).fadeOut(flashDuration).fadeIn(flashDuration);
      } else if (messageAr[i][2]) {

        $(messageAr[i][2]).trigger('click');

      } else {
        if (introWrapperInDom.is(":hidden")) {
          introWrapperInDom.toggle();
        }
        textInDom.text(messageAr[i][0].toUpperCase());
      }
      cycleMessages(i + 1, duration);
    }, 6000);

  }
  cycleMessages(1, 1000);

}