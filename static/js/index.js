var THEMES = ['DAY', 'NIGHT', 'SEPIA'];

var THEME_CONFIG = {
  'DAY': {
    'body': ['background-color', '#FFFFFF'],
    'p, h1, h2, h3, h4, h5, h6, li': ['color', '#000000']
  },
  'NIGHT': {
    'body': ['background-color', '#1d1f21'],
    'p, h1, h2, h3, h4, h5, h6, li': ['color', '#FFFFDD']
  },
  'SEPIA': {
    'body': ['background-color', '#FFF4DE'],
    'p, h1, h2, h3, h4, h5, h6, li': ['color', '#000000']
  }
}

function applyTheme(theme) {
  var config = THEME_CONFIG[theme];
  for(var key in config) {
    $(key).css(config[key][0], config[key][1]);
  }
}

$(document).ready(function() {
    $('.menu .item').tab();
    $('.ui.dropdown').dropdown();
    $('[data-content]').popup();

    $('.ui.label').click(function() {
        $(this).transition('pulse');
    });

    var amountScrolled = 30;

    $('.main-nav-page-title').hide();

    $(window).scroll(function() {
    	if ( $(window).scrollTop() > amountScrolled ) {
            $('.main-nav-page-title').fadeIn('slow');
    	} else {
            $('.main-nav-page-title').fadeOut('slow');
    	}
    });

    scrollProgress.set({
        color: '#F56B6B',
        height: '3px',
        bottom: false
    });


    if (!Cookies.get('THEME')) {
      Cookies.set('THEME', '0');
    }

    var c = Cookies.get('THEME');

    var is_post = Cookies.get("IS_POST");
    if(!is_post || is_post == "FALSE") {
      applyTheme(THEMES[0]);
    }
    else {
      applyTheme(THEMES[c]);
    }

    $('.mode-button').click(function() {
      var c = Cookies.get('THEME');
      c = (parseInt(c) + 1) % THEMES.length;
      Cookies.set('THEME', c);
      applyTheme(THEMES[c]);
    });

});
