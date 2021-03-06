(function($) {
    // Smallscreen nav
    var nav = responsiveNav('.nav-collapse', {
        customToggle: "#open-nav",
        closeOnNavClick: true,
    });

    // Skip links
    $('#to-top').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 300);
                return false;
            }
        }
    });
})(jQuery);
