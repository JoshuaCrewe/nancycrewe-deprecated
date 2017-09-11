(function($) {
    $(document).ready(function() {

        $('.js-overlay-trigger').on('click', function() {

            var $overlay = $('.overlay');

            if ($overlay.hasClass('is-active')) {
               $overlay.removeClass('is-active'); 
            } else {
                $overlay.addClass('is-active'); 
            }

        });
        
    });
})(jQuery);
