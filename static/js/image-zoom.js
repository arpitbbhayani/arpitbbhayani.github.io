(function umd(_require){
  if ('object' == typeof exports) {
    module.exports = _require('1');
  } else if ('function' == typeof define && define.amd) {
    define(function(){ return _require('1'); });
  } else {
    this['image-zoom'] = _require('1');
  }
})((function outer(modules, cache, entries){

  /**
   * Global
   */

  var global = (function(){ return this; })();

  /**
   * Require `name`.
   *
   * @param {String} name
   * @param {Boolean} jumped
   * @api public
   */

  function _require(name, jumped){
    if (cache[name]) return cache[name].exports;
    if (modules[name]) return call(name, _require);
    throw new Error('cannot find module "' + name + '"');
  }

  /**
   * Call module `id` and cache it.
   *
   * @param {Number} id
   * @param {Function} require
   * @return {Function}
   * @api private
   */

  function call(id, _require){
    var m = cache[id] = { exports: {} };
    var mod = modules[id];
    var name = mod[2];
    var fn = mod[0];

    fn.call(m.exports, function(req){
      var dep = modules[id][1][req];
      return _require(dep ? dep : req);
    }, m, m.exports, outer, modules, cache, entries);

    // expose as `name`.
    if (name) cache[name] = cache[id];

    return cache[id].exports;
  }

  /**
   * Require all entries exposing them on global if needed.
   */

  for (var id in entries) {
    if (entries[id]) {
      global[entries[id]] = _require(id);
    } else {
      _require(id);
    }
  }

  /**
   * Duo flag.
   */

  _require.duo = true;

  /**
   * Expose cache.
   */

  _require.cache = cache;

  /**
   * Expose modules
   */

  _require.modules = modules;

  /**
   * Return newest require.
   */

   return _require;
})({
1: [function(_require, module, exports) {
/**
 * Module dependencies
 */

var emitter = _require('emitter');
var transform = _require('transform-property');
var redraw = _require('redraw');
var afterTransition = _require('after-transition');
var scale = _require('scale-to-bounds');
var viewport = _require('viewport');
var has3d = _require('has-translate3d');
var Overlay = _require('overlay');
var delegate = _require('delegate');
var events = _require('events');
var nextTick = _require('next-tick');

/**
 * Create the supported translate string.
 * @param  {Int} x coordinate
 * @param  {Int} y coordinate
 * @return {String}
 */

function translateString(x, y){
  return has3d
    ? 'translate3d('+ x +'px, '+ y +'px, 0)'
    : 'translate('+ x +'px, '+ y + 'px)';
}

/**
 * Bootstrap-style API that allows designers to invoke zooming
 * the element using markup
 */

var zoomListener = delegate.bind(document, '[data-zoom-url]', 'click', function(e){
  new Zoom(e.target).show();
});



/**
 * Javascript API.
 * @param  {Element} el
 * @param  {String} url
 * @return {Zoom}
 */

module.exports = exports = Zoom;

/**
 * Zoom Constructor
 * @param {Element} el
 * @param {String} url
 */

function Zoom(el, url){
  if (!(this instanceof Zoom)) return new Zoom(el, url);
  this.thumb = el;
  if (this.thumb.getAttribute('data-zoom-overlay')) this.overlay();
  this.padding();
  this.backgroundURL = url;
  this.viewport = {};
}

emitter(Zoom.prototype);

/**
 * Enable overlay.
 * @return {Zoom}
 */

Zoom.prototype.overlay = function(){
  this._overlay = new Overlay('image-zoom-overlay');
  return this;
};

/**
 * Set padding (or should this be margin?) around the zoomed
 * image.
 *
 * @param  {Number} num in pixels
 * @return {Zoom}
 */

Zoom.prototype.padding = function(num){
  this._padding = num || this.thumb.getAttribute('data-zoom-padding') || 0;
  return this;
};

/**
 * While our image is loading, we add a loading
 * class to our target element.
 *
 * @param  {Function} fn
 */

Zoom.prototype.loadImage = function(fn){
  if (this.hasLoaded) return fn();
  var img = this.clone = new Image();
  this.loaderTimer = setTimeout(function(){
    if (!this.hasLoaded) this.loading();
  }.bind(this), 50);
  this.clone.onload = function(){
    this.hasLoaded = true;
    this.finishLoading();
    this.imageWidth = img.width;
    this.imageHeight = img.height;
    fn();
  }.bind(this);
  img.src = this.src;
};

/**
 * Add loading class
 *
 * @return {Zoom}
 */

Zoom.prototype.loading = function(){
  this.emit('loading', this.thumb);
  this.thumb.classList.add('loading');
  return this;
};

/**
 * Remove loading class
 *
 * @return {Zoom}
 */

Zoom.prototype.finishLoading = function(){
  this.emit('end-loading', this.thumb);
  window.clearTimeout(this.loaderTimer);
  this.thumb.classList.remove('loading');
  return this;
};

/**
 * Get image dimensions
 *
 * @return {Zoom}
 */

Zoom.prototype.getDimensions = function(){
  var pos = this.thumb.getBoundingClientRect();
  this.origin = {
    x : pos.left,
    y : pos.top,
    w : this.thumb.clientWidth,
    h : this.thumb.clientHeight
  };
  this.src = this.thumb.getAttribute('data-zoom-url')
    || this.backgroundURL
    || this.thumb.src;
  return this;
};

/**
 * Append a clone of the image to the DOM in
 * prep for our zoom animation.
 *
 * @return {Zoom}
 */

Zoom.prototype.appendClone = function(){
  this.clone.classList.add('zoom-image-clone');
  this.windowEvents = events(window, this);
  this.windowEvents.bind('resize');
  document.body.appendChild(this.clone);
  return this;
};

/**
 * On resize handler - recalc position of zoomed
 * image.
 */

Zoom.prototype.onresize = function(){
  this.determineZoomedSize();
  this.updateStyles();
};

/**
 * Determine size of zoomed image
 *
 * @return {Zoom}
 */

Zoom.prototype.determineZoomedSize = function(){
  // image size
  var iw = this.imageWidth;
  var ih = this.imageHeight;

  // viewport size
  var vp = viewport();

  // zoomed image max size
  var target = scale(iw, ih, vp.width - this._padding, vp.height - this._padding);

  // determine left & top position of zoomed image
  var left = (vp.width / 2) - (target.width / 2);
  var top = (vp.height / 2) - (target.height / 2);

  this.target = {
    x : left,
    y: top,
    w: target.width,
    h: target.height
  };

  return this;
};

/**
 * Yodate zoom styles
 *
 * @return {Zoom}
 */

Zoom.prototype.updateStyles = function(){
  var t = this.target;
  var s = this.clone.style;
  s.width = t.w + 'px';
  s.height = t.h + 'px';
  s.left = t.x + 'px';
  s.top = t.y + 'px';
  this.emit('position updated', t);
  return this;
};

/**
 * Set original dimensions
 *
 * @return {Zoom}
 */

Zoom.prototype.setOriginalDeminsions = function(){
  var o = this.origin;
  var t = this.target;
  this.updateStyles();

  if (transform){
    var scale = o.w / t.w;
    var translateX = (o.x + (o.w / 2)) - (t.x + (t.w / 2));
    var translateY = (o.y + (o.h / 2)) - (t.y + (t.h / 2));
    var translate3d = translateString(translateX, translateY);
    var scaleProp = ' scale('+ scale +')';
    this.clone.style[transform] = translate3d + scaleProp;
  }

  return this;
};

/**
 * Set transition Position
 * @return {Zoom}
 */

Zoom.prototype.setTargetPosition = function(){
  if (transform){
    this.clone.style[transform] = translateString(0, 0) + ' scale(1)';
  }
  return this;
};

/**
 * Show our zoomed image
 *
 * @param  {Event} e
 */

Zoom.prototype.show = function(e){
  if (e) e.preventDefault();
  if (this.isZoomed || this.isShowing) return;
  this.getDimensions();
  this.cancelZoom = false;
  this.isShowing = true;

  function onImageLoad() {
    if (this.cancelZoom) return;
    this.emit('showing');
    if (this._overlay) this._overlay.show();
    this.determineZoomedSize()
      .setOriginalDeminsions()
      .appendClone();
    this.thumb.style.opacity = 0;
    redraw(this.clone);
    this.setTargetPosition();
    this.isZoomed = true;
    afterTransition.once(this.clone, function(){
      this.emit('shown');
    }.bind(this));
  }

  // bind these events before the image has loaded, so that
  // it in effect 'cancels' the load if the user clicks
  // outside the image while it is loading

  nextTick(function(){
    this.docEvents = events(document, this);
    this.docEvents.bind('touchstart', 'hide');
    this.docEvents.bind('click', 'hide');
  }.bind(this));

  this.loadImage(onImageLoad.bind(this));
  return this;
};

/**
 * Hide our zoomed image
 * @param  {Event} e
 * @return {Zoom}
 */

Zoom.prototype.hide = function(){
  this.isShowing = false;

  // cancel a loading state
  if (!this.isZoomed) {
    this.cancelZoom = true;
    if (this.docEvents) this.docEvents.unbind();
    this.emit('cancel');
    this.finishLoading();
    if (this._overlay) this._overlay.hide();
    this.emit('hiding');
    this.emit('hidden');
    this.isZoomed = false;
    return;
  }

  // hide our zoomed image
  this.windowEvents.unbind();
  this.docEvents.unbind();
  this.setOriginalDeminsions();
  this.emit('hiding');
  if (this._overlay) this._overlay.hide();
  this.isZoomed = false;
  afterTransition.once(this.clone, function(){
    this.thumb.style.opacity = 1;
    this.clone.parentNode.removeChild(this.clone);
    this.emit('hidden');
  }.bind(this));
  return this;
};

/**
 * Enable plugin usage
 *
 * @param  {function} plugin
 * @param  {Object} options
 * @return {Zoom}
 */

Zoom.prototype.use = function(plugin, options){
  plugin(this, options);
  return this;
};

/**
 * Unbind our event listener
 */

exports.stopListening = function(){
  delegate.unbind(document, 'click', zoomListener, false);
};

}, {"emitter":2,"transform-property":3,"redraw":4,"after-transition":5,"scale-to-bounds":6,"viewport":7,"has-translate3d":8,"overlay":9,"delegate":10,"events":11,"next-tick":12}],
2: [function(_require, module, exports) {

/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks[event] = this._callbacks[event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  var self = this;
  this._callbacks = this._callbacks || {};

  function on() {
    self.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks[event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks[event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks[event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

}, {}],
3: [function(_require, module, exports) {

var styles = [
  'webkitTransform',
  'MozTransform',
  'msTransform',
  'OTransform',
  'transform'
];

var el = document.createElement('p');
var style;

for (var i = 0; i < styles.length; i++) {
  style = styles[i];
  if (null != el.style[style]) {
    module.exports = style;
    break;
  }
}

}, {}],
4: [function(_require, module, exports) {

/**
 * Expose `redraw`.
 */

module.exports = redraw;


/**
 * Force a redraw on an `el`.
 *
 * @param {Element} el
 */

function redraw (el) {
  el.offsetHeight;
}
}, {}],
5: [function(_require, module, exports) {
var hasTransitions = _require('has-transitions');
var emitter = _require('css-emitter');

function afterTransition(el, callback) {
  if(hasTransitions(el)) {
    return emitter(el).bind(callback);
  }
  return callback.apply(el);
};

afterTransition.once = function(el, callback) {
  afterTransition(el, function fn(){
    callback.apply(el);
    emitter(el).unbind(fn);
  });
};

module.exports = afterTransition;
}, {"has-transitions":13,"css-emitter":14}],
13: [function(_require, module, exports) {
/**
 * This will store the property that the current
 * browser uses for transitionDuration
 */
var property;

/**
 * The properties we'll check on an element
 * to determine if it actually has transitions
 * We use duration as this is the only property
 * needed to technically have transitions
 * @type {Array}
 */
var types = [
  "transitionDuration",
  "MozTransitionDuration",
  "webkitTransitionDuration"
];

/**
 * Determine the correct property for this browser
 * just once so we done need to check every time
 */
while(types.length) {
  var type = types.shift();
  if(type in document.body.style) {
    property = type;
  }
}

/**
 * Determine if the browser supports transitions or
 * if an element has transitions at all.
 * @param  {Element}  el Optional. Returns browser support if not included
 * @return {Boolean}
 */
function hasTransitions(el){
  if(!property) {
    return false; // No browser support for transitions
  }
  if(!el) {
    return property != null; // We just want to know if browsers support it
  }
  var duration = getComputedStyle(el)[property];
  return duration !== "" && parseFloat(duration) !== 0; // Does this element have transitions?
}

module.exports = hasTransitions;
}, {}],
14: [function(_require, module, exports) {
/**
 * Module Dependencies
 */

var events = _require('event');

// CSS events

var watch = [
  'transitionend'
, 'webkitTransitionEnd'
, 'oTransitionEnd'
, 'MSTransitionEnd'
, 'animationend'
, 'webkitAnimationEnd'
, 'oAnimationEnd'
, 'MSAnimationEnd'
];

/**
 * Expose `CSSnext`
 */

module.exports = CssEmitter;

/**
 * Initialize a new `CssEmitter`
 *
 */

function CssEmitter(element){
  if (!(this instanceof CssEmitter)) return new CssEmitter(element);
  this.el = element;
}

/**
 * Bind CSS events.
 *
 * @api public
 */

CssEmitter.prototype.bind = function(fn){
  for (var i=0; i < watch.length; i++) {
    events.bind(this.el, watch[i], fn);
  }
  return this;
};

/**
 * Unbind CSS events
 * 
 * @api public
 */

CssEmitter.prototype.unbind = function(fn){
  for (var i=0; i < watch.length; i++) {
    events.unbind(this.el, watch[i], fn);
  }
  return this;
};

/**
 * Fire callback only once
 * 
 * @api public
 */

CssEmitter.prototype.once = function(fn){
  var self = this;
  function on(){
    self.unbind(on);
    fn.apply(self.el, arguments);
  }
  self.bind(on);
  return this;
};


}, {"event":15}],
15: [function(_require, module, exports) {
var bind = window.addEventListener ? 'addEventListener' : 'attachEvent',
    unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent',
    prefix = bind !== 'addEventListener' ? 'on' : '';

/**
 * Bind `el` event `type` to `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

exports.bind = function(el, type, fn, capture){
  el[bind](prefix + type, fn, capture || false);
  return fn;
};

/**
 * Unbind `el` event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

exports.unbind = function(el, type, fn, capture){
  el[unbind](prefix + type, fn, capture || false);
  return fn;
};
}, {}],
6: [function(_require, module, exports) {
/**
 * Return the maximum size given a set of bounds
 * while maintaining the original aspect ratio.
 * @param  {Number} ow original width
 * @param  {Number} oh original height
 * @param  {Number} mw max width
 * @param  {Number} mh max height
 * @return {Object}
 */

module.exports = function(ow, oh, mw, mh){
  var scale = Math.min(mw / ow, mh / oh);
  if (scale > 1) scale = 1;
  return {
    width : ow * scale,
    height : oh * scale
  };
};
}, {}],
7: [function(_require, module, exports) {

/**
 * get the current viewport size
 * credit goes here: http://stackoverflow.com/a/11744120/1198166
 * @return {Object} containing width and height
 */

module.exports = function(){
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0];

  return {
    width: w.innerWidth || e.clientWidth || g.clientWidth,
    height: w.innerHeight|| e.clientHeight|| g.clientHeight
  };
}
}, {}],
8: [function(_require, module, exports) {

var prop = _require('transform-property');

// IE <=8 doesn't have `getComputedStyle`
if (!prop || !window.getComputedStyle) {
  module.exports = false;

} else {
  var map = {
    webkitTransform: '-webkit-transform',
    OTransform: '-o-transform',
    msTransform: '-ms-transform',
    MozTransform: '-moz-transform',
    transform: 'transform'
  };

  // from: https://gist.github.com/lorenzopolidori/3794226
  var el = document.createElement('div');
  el.style[prop] = 'translate3d(1px,1px,1px)';
  document.body.insertBefore(el, null);
  var val = getComputedStyle(el).getPropertyValue(map[prop]);
  document.body.removeChild(el);
  module.exports = null != val && val.length && 'none' != val;
}

}, {"transform-property":3}],
9: [function(_require, module, exports) {

/**
 * Module dependencies.
 */

var emitter = _require('emitter');
var redraw = _require('redraw');
var afterTransition = _require('after-transition');

/**
 * Expose `Overlay`.
 */

module.exports = Overlay;

/**
 * Initialize a new `Overlay`.
 *
 * @param {Object} options
 * @api public
 */

function Overlay(className) {
  if (!(this instanceof Overlay)) return new Overlay();
  this.el = document.createElement('div');
  this.el.className = 'Overlay';
  if (className) {
    this.el.classList.add(className);
  }
}

/**
 * Mixin 'Emitter'
 */

emitter(Overlay.prototype);

/**
 * Show the overlay.
 *
 * Emits "show" event.
 *
 * @return {Overlay}
 * @api public
 */

Overlay.prototype.show = function(){
  document.body.appendChild(this.el);
  this.emit('show');
  redraw(this.el);
  afterTransition.once(this.el, function(){
    this.emit('shown');
  }.bind(this));
  this.el.classList.add('show');
  return this;
};

/**
 * Hide the overlay.
 *
 * Emits "hide" event, and "hidden" when finished.
 *
 * @return {Overlay}
 * @api public
 */

Overlay.prototype.hide = function(){
  if (!this.el) return;
  this.emit('hide');
  afterTransition.once(this.el, function(){
    this.emit('hidden');
    this.el.parentNode.removeChild(this.el);
  }.bind(this));
  this.el.classList.remove('show');
  return this;
};

}, {"emitter":2,"redraw":4,"after-transition":5}],
10: [function(_require, module, exports) {
/**
 * Module dependencies.
 */

var closest = _require('closest')
  , event = _require('event');

/**
 * Delegate event `type` to `selector`
 * and invoke `fn(e)`. A callback function
 * is returned which may be passed to `.unbind()`.
 *
 * @param {Element} el
 * @param {String} selector
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

exports.bind = function(el, selector, type, fn, capture){
  return event.bind(el, type, function(e){
    var target = e.target || e.srcElement;
    e.delegateTarget = closest(target, selector, true, el);
    if (e.delegateTarget) fn.call(el, e);
  }, capture);
};

/**
 * Unbind event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @api public
 */

exports.unbind = function(el, type, fn, capture){
  event.unbind(el, type, fn, capture);
};

}, {"closest":16,"event":15}],
16: [function(_require, module, exports) {
var matches = _require('matches-selector')

module.exports = function (element, selector, checkYoSelf, root) {
  element = checkYoSelf ? {parentNode: element} : element

  root = root || document

  // Make sure `element !== document` and `element != null`
  // otherwise we get an illegal invocation
  while ((element = element.parentNode) && element !== document) {
    if (matches(element, selector))
      return element
    // After `matches` on the edge case that
    // the selector matches the root
    // (when the root is not the document)
    if (element === root)
      return
  }
}

}, {"matches-selector":17}],
17: [function(_require, module, exports) {
/**
 * Module dependencies.
 */

var query = _require('query');

/**
 * Element prototype.
 */

var proto = Element.prototype;

/**
 * Vendor function.
 */

var vendor = proto.matches
  || proto.webkitMatchesSelector
  || proto.mozMatchesSelector
  || proto.msMatchesSelector
  || proto.oMatchesSelector;

/**
 * Expose `match()`.
 */

module.exports = match;

/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function match(el, selector) {
  if (!el || el.nodeType !== 1) return false;
  if (vendor) return vendor.call(el, selector);
  var nodes = query.all(selector, el.parentNode);
  for (var i = 0; i < nodes.length; ++i) {
    if (nodes[i] == el) return true;
  }
  return false;
}

}, {"query":18}],
18: [function(_require, module, exports) {
function one(selector, el) {
  return el.querySelector(selector);
}

exports = module.exports = function(selector, el){
  el = el || document;
  return one(selector, el);
};

exports.all = function(selector, el){
  el = el || document;
  return el.querySelectorAll(selector);
};

exports.engine = function(obj){
  if (!obj.one) throw new Error('.one callback required');
  if (!obj.all) throw new Error('.all callback required');
  one = obj.one;
  exports.all = obj.all;
  return exports;
};

}, {}],
11: [function(_require, module, exports) {

/**
 * Module dependencies.
 */

var events = _require('event');
var delegate = _require('delegate');

/**
 * Expose `Events`.
 */

module.exports = Events;

/**
 * Initialize an `Events` with the given
 * `el` object which events will be bound to,
 * and the `obj` which will receive method calls.
 *
 * @param {Object} el
 * @param {Object} obj
 * @api public
 */

function Events(el, obj) {
  if (!(this instanceof Events)) return new Events(el, obj);
  if (!el) throw new Error('element required');
  if (!obj) throw new Error('object required');
  this.el = el;
  this.obj = obj;
  this._events = {};
}

/**
 * Subscription helper.
 */

Events.prototype.sub = function(event, method, cb){
  this._events[event] = this._events[event] || {};
  this._events[event][method] = cb;
};

/**
 * Bind to `event` with optional `method` name.
 * When `method` is undefined it becomes `event`
 * with the "on" prefix.
 *
 * Examples:
 *
 *  Direct event handling:
 *
 *    events.bind('click') // implies "onclick"
 *    events.bind('click', 'remove')
 *    events.bind('click', 'sort', 'asc')
 *
 *  Delegated event handling:
 *
 *    events.bind('click li > a')
 *    events.bind('click li > a', 'remove')
 *    events.bind('click a.sort-ascending', 'sort', 'asc')
 *    events.bind('click a.sort-descending', 'sort', 'desc')
 *
 * @param {String} event
 * @param {String|function} [method]
 * @return {Function} callback
 * @api public
 */

Events.prototype.bind = function(event, method){
  var e = parse(event);
  var el = this.el;
  var obj = this.obj;
  var name = e.name;
  var method = method || 'on' + name;
  var args = [].slice.call(arguments, 2);

  // callback
  function cb(){
    var a = [].slice.call(arguments).concat(args);
    obj[method].apply(obj, a);
  }

  // bind
  if (e.selector) {
    cb = delegate.bind(el, e.selector, name, cb);
  } else {
    events.bind(el, name, cb);
  }

  // subscription for unbinding
  this.sub(name, method, cb);

  return cb;
};

/**
 * Unbind a single binding, all bindings for `event`,
 * or all bindings within the manager.
 *
 * Examples:
 *
 *  Unbind direct handlers:
 *
 *     events.unbind('click', 'remove')
 *     events.unbind('click')
 *     events.unbind()
 *
 * Unbind delegate handlers:
 *
 *     events.unbind('click', 'remove')
 *     events.unbind('click')
 *     events.unbind()
 *
 * @param {String|Function} [event]
 * @param {String|Function} [method]
 * @api public
 */

Events.prototype.unbind = function(event, method){
  if (0 == arguments.length) return this.unbindAll();
  if (1 == arguments.length) return this.unbindAllOf(event);

  // no bindings for this event
  var bindings = this._events[event];
  if (!bindings) return;

  // no bindings for this method
  var cb = bindings[method];
  if (!cb) return;

  events.unbind(this.el, event, cb);
};

/**
 * Unbind all events.
 *
 * @api private
 */

Events.prototype.unbindAll = function(){
  for (var event in this._events) {
    this.unbindAllOf(event);
  }
};

/**
 * Unbind all events for `event`.
 *
 * @param {String} event
 * @api private
 */

Events.prototype.unbindAllOf = function(event){
  var bindings = this._events[event];
  if (!bindings) return;

  for (var method in bindings) {
    this.unbind(event, method);
  }
};

/**
 * Parse `event`.
 *
 * @param {String} event
 * @return {Object}
 * @api private
 */

function parse(event) {
  var parts = event.split(/ +/);
  return {
    name: parts.shift(),
    selector: parts.join(' ')
  }
}

}, {"event":15,"delegate":10}],
12: [function(_require, module, exports) {
"use strict"

if (typeof setImmediate == 'function') {
  module.exports = function(f){ setImmediate(f) }
}
// legacy node.js
else if (typeof process != 'undefined' && typeof process.nextTick == 'function') {
  module.exports = process.nextTick
}
// fallback for other environments / postMessage behaves badly on IE8
else if (typeof window == 'undefined' || window.ActiveXObject || !window.postMessage) {
  module.exports = function(f){ setTimeout(f) };
} else {
  var q = [];

  window.addEventListener('message', function(){
    var i = 0;
    while (i < q.length) {
      try { q[i++](); }
      catch (e) {
        q = q.slice(i);
        window.postMessage('tic!', '*');
        throw e;
      }
    }
    q.length = 0;
  }, true);

  module.exports = function(fn){
    if (!q.length) window.postMessage('tic!', '*');
    q.push(fn);
  }
}

}, {}]}, {}, {"1":"Imagezoom"})
);