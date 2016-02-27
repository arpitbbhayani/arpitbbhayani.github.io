$(document).ready(function() {
    $('.menu .item').tab();

    $('.ui.dropdown').dropdown();

    $('[data-content]').popup();

    $('.ui.label').click(function() {
        $(this).transition('pulse');
    });

    var amountScrolled = 30;

    $('#main-nav-page-title').hide();

    $(window).scroll(function() {
    	if ( $(window).scrollTop() > amountScrolled ) {
    		$('a.back-to-top').fadeIn('slow');
            $('#main-nav-page-title').fadeIn('slow');
    	} else {
    		$('a.back-to-top').fadeOut('slow');
            $('#main-nav-page-title').fadeOut('slow');
    	}
    });

    $('a.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
        return false;
    });

    scrollProgress.set({
        color: '#F56B6B',
        height: '3px',
        bottom: false
    });
});
