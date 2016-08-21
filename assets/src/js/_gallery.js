$(document).ready(function() {

  $('.js-image').on('click', function() {
    console.log("clicked");

    var $this = $(this);
    var bg = $this.css('background-image');
    var image = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
    console.log(image);

    $('body').prepend('<button class="js-close js-destroy"> CLOSE </button> <img class="fixed js-destroy" src="'+ image +'">');
    $('.container').hide();

  });

  $(document).on('click','.js-close', function(e) {

    e.preventDefault();
    $('.js-destroy').remove();
    $('.container').show();
  });

});
