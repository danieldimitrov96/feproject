var runIntro = function () {

  var welcomingText = 'This is a short informational intro  for ORGO';
  welcomingText = welcomingText.toUpperCase();
  
  var messageAr = [
    ['THIS IS ORGO',],
    ['ORGO is a single page aplication',], 
    ['ORGO can add notes',], 
    ['','#addNote'], 
    ['ORGO can also edit them',], 
    ['ORGO can search the notes',], 
    ['','#searchBox'], 
    ['every note in ordo has a cathegory',],
    ['ORGO can filter the notes using the category',], 
    ['','.nav-bar-category'], 
    ['ORGO can also change the background of the work space',], 
    ['','#optionButton'], 
    ['thank you',],   
  ];

  function setupIntro() {
    var btnSkip = $('<button>').text('skip intro').attr({
      'class': 'skipButton button button-caution  button-giant '
    }).css({
      'position': 'fixed',
      'z-index': '200',
      'display': 'block',
      'left': '44%',
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
        'line-height': 'auto',
        'z-index': '101',
        'position': 'relative',
        'float': 'left',
        'top': '33%',
        'left': '50%',
        'transform': 'translate(-50%, -50%)',
        'text-align': 'center',
      });

    //combine elements in into div
    introWrapper.append(text);
    introWrapper.append(background);
    introWrapper.append(btnSkip);
    $('body').prepend(introWrapper);

    //add event listeners
    $('.skipButton').on('click', function () {
      $('.introWrapper').remove();
    })

  }
  setupIntro();
  function cycleMessages(i,duration) {
   var textToShow= $('.introWrapper');

    setTimeout(function () {
      if (i === messageAr.length) {
        $('.introWrapper').remove();
        return  ;
      }
      
      if(messageAr[i][1]){
        $('.introWrapper').toggle();
        $(messageAr[i][1]).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000);
      }else{
        if( $( ".introWrapper" ).is( ":hidden" )){
          $('.introWrapper').toggle();
        }
        $('.introText').text(messageAr[i][0].toUpperCase());
      }       
      cycleMessages(i + 1, duration);
    }, 6000);
    
  }
  cycleMessages(1,5000);

}

runIntro();