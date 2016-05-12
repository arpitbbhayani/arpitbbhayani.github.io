var THEMES = ['DAY', 'SEPIA'];

var THEME_CONFIG = {
  'DAY': {
    'body': ['background-color', '#FFFFFF'],
    'p, h1, h2, h3, h4, h5, h6, li': ['color', '#000000'],
    'th, td': ['color', '#000000'],
    'blockquote p': ['color', '#000000'],
    '.MathJax_Display': ['color', '#000000']
  },
  'SEPIA': {
    'body': ['background-color', '#FFF4DE'],
    'p, h1, h2, h3, h4, h5, h6, li': ['color', '#000000'],
    'th, td': ['color', '#000000'],
    'blockquote p': ['color', '#000000'],
    '.MathJax_Display': ['color', '#000000']
  }
}

function applyThemeConfig(theme) {
  var config = THEME_CONFIG[theme];
  for(var key in config) {
    $(key).css(config[key][0], config[key][1]);
  }
}

function initTheme() {
  if (!Cookies.get('THEME')) {
    Cookies.set('THEME', '0');
  }
}

function applyTheme() {
  var c = Cookies.get('THEME');
  if(!c) {
    return;
  }

  c = parseInt(c);
  var is_post = Cookies.get("IS_POST");
  if(!is_post || is_post == "FALSE") {
    applyThemeConfig(THEMES[0]);
  }
  else {
    applyThemeConfig(THEMES[c]);
  }
}

function setNextTheme() {
  var c = Cookies.get('THEME');
  if(!c) {
    return;
  }
  c = (parseInt(c) + 1) % THEMES.length;
  Cookies.set('THEME', c);
}

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

    initTheme();
    applyTheme();

    $('.mode-button').click(function() {
      setNextTheme();
      applyTheme();
    });

});
