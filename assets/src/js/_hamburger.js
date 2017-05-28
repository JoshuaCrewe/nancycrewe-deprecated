(function($) {
    $(document).ready(function() {
        
        $('.hamburger').on('click', function() {

            var $this = $(this);
            var $menu = $('.nav');

            if ($this.hasClass('is-active') ) {
                $this.removeClass('is-active'); 
                $menu.removeClass('is-active'); 
            } else {
                $this.addClass('is-active');
;               $menu.addClass('is-active');
            }

        });
    });
})(jQuery);
