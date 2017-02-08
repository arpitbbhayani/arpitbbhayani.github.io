$(document).ready(function() {
    $('.menu .item').tab();
    $('.ui.dropdown').dropdown();
    $('[data-content]').popup();

    $('.ui.label').click(function() {
        $(this).transition('pulse');
    });
});
