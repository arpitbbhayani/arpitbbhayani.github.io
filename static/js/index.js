$(document).ready(function() {
    $('.menu .item').tab();
    $('.ui.dropdown').dropdown();
    $('[data-content]').popup();

    $('#menu_sidebar').sidebar({
      dimPage: false,
      transition: 'overlay',
      mobileTransition: 'overlay'
    });

    $('#menu_button, #close_button').click(function(e) {
      e.preventDefault();
      $('#menu_sidebar').sidebar('toggle');
    });

    window.onblur = function () {
      document.title = '😭 Please come back ...';
    }
    
    window.onfocus = function () {
      document.title = "😁 You are back";
    }    
});
