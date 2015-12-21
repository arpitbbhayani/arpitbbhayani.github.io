$(document).ready(function() {
    $('.menu .item').tab();
    $('.ui.dropdown').dropdown();

    $('a').click(function() {
        $(this).transition('pulse');
    });

    var amountScrolled = 30;

    $(window).scroll(function() {
    	if ( $(window).scrollTop() > amountScrolled ) {
    		$('a.back-to-top').fadeIn('slow');
    	} else {
    		$('a.back-to-top').fadeOut('slow');
    	}
    });

    $('a.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
        return false;
    });
})
