//activate options modal

$(document).ready(function(){
    $(".options").click(function(){
        $("#myModal").modal();
    });
});

//change background on click of image 
$(document).ready(function() {
         $('.background-box-1' ).click(function(){
        var getImageSrc = $('.background-box-1 img').attr('src');
        $('body').css('background-image', 'url(' + getImageSrc + ')');
      });
    } );
$(document).ready(function() {
        $('.background-box-2').click(function(){
          var getImageSrc = $('.background-box-2 img').attr('src');
          $('body').css('background-image', 'url(' + getImageSrc + ')');
        });
      } );
$(document).ready(function() {
        $('.background-box-3').click(function(){
          var getImageSrc = $('.background-box-3 img').attr('src');
          $('body').css('background-image', 'url(' + getImageSrc + ')');
        });
      } );

    