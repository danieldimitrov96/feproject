// activate options modal

$(document).ready(function() {

  $('.options').click(function() {

    $('#myModal').modal();

  });

});

// change background on click of image
$(document).ready(function() {

  $('.background-box-1').click(function() {
    const getImageSrc = $('.background-box-1 img').attr('src');
    localStorage.setItem('imgUrl', getImageSrc);
    $('body').css('background-image', 'url(' + getImageSrc + ')');
  });

  $('.background-box-2').click(function() {
    const getImageSrc = $('.background-box-2 img').attr('src');
    localStorage.setItem('imgUrl', getImageSrc);
    $('body').css('background-image', 'url(' + getImageSrc + ')');
  });

  $('.background-box-3').click(function() {
    const getImageSrc = $('.background-box-3 img').attr('src');
    localStorage.setItem('imgUrl', getImageSrc);
    $('body').css('background-image', 'url(' + getImageSrc + ')');
  });

});