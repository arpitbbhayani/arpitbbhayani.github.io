$(document).ready(function() {
    $('.menu .item').tab();
    $('.ui.dropdown').dropdown();
    $('[data-content]').popup();

    $('.ui.label').click(function() {
        $(this).transition('pulse');
    });

    var amountScrolled = 100;
    var $main_nav_page_title_obj = $('.main-nav-page-title');

    $main_nav_page_title_obj.hide();

    $(window).scroll(function() {
    	if ( $(window).scrollTop() > amountScrolled ) {
            $main_nav_page_title_obj.fadeIn('slow');
    	} else {
            $main_nav_page_title_obj.fadeOut('slow');
    	}
    });

    scrollProgress.set({
        color: '#27619D',
        height: '3px',
        bottom: false
    });

});
