$(document).ready(function() {
    $('.menu .item').tab();
    $('.ui.dropdown').dropdown();
    $('[data-content]').popup();

    $('.ui.label').click(function() {
        $(this).transition('pulse');
    });

    scrollProgress.set({
        color: '#f87c7c',
        height: '2px',
        bottom: false
    });
});
