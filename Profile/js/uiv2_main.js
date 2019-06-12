/* Start slideshow.js */

$slideshow = {
    context: false,
    tabs: false,
    timeout: 5500,      // time before next slide appears (in ms)
    slideSpeed: 1500,   // time it takes to slide in each slide (in ms)
    tabSpeed: 300,      // time it takes to slide in each slide (in ms) when clicking through tabs
    fx: 'scrollLeft',   // the slide effect to use

    init: function() {
        // set the context to help speed up selectors/improve performance
        this.context = $('#uiv2-slideshow');

        // set tabs to current hard coded navigation items
        this.tabs = $('ul.uiv2-slides-nav li', this.context);

        // remove hard coded navigation items from DOM
        // because they aren't hooked up to jQuery cycle
        this.tabs.remove();

        // prepare slideshow and jQuery cycle tabs
        this.prepareSlideshow();
    },

    prepareSlideshow: function() {
        // initialise the jquery cycle plugin -
        // for information on the options set below go to:
        // http://malsup.com/jquery/cycle/options.html
        $('div.uiv2-slides > ul', $slideshow.context).cycle({
            fx: $slideshow.fx,
            timeout: $slideshow.timeout,
            speed: $slideshow.slideSpeed,
            fastOnEvent: $slideshow.tabSpeed,
            pager: $('ul.uiv2-slides-nav', $slideshow.context),
            pagerAnchorBuilder: $slideshow.prepareTabs,
            before: $slideshow.activateTab,
            pauseOnPagerHover: true,
            pause: true,
            startingSlide : randomize_banner_display()
        });
    },

    prepareTabs: function(i, slide) {
        // return markup from hardcoded tabs for use as jQuery cycle tabs
        // (attaches necessary jQuery cycle events to tabs)
        return $slideshow.tabs.eq(i);
    },

    activateTab: function(currentSlide, nextSlide) {
        // get the active tab
        var activeTab = $('a[href="#' + nextSlide.id + '"]', $slideshow.context);

        // if there is an active tab
        if(activeTab.length) {
            // remove active styling from all other tabs
            $slideshow.tabs.removeClass('on');

            // add active styling to active button
            activeTab.parent().addClass('on');
        }
    }
};

var docCookies = {
  getItem: function (sKey) {
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
  },
  setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
    var sExpires = "";
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
          break;
        case String:
          sExpires = "; expires=" + vEnd;
          break;
        case Date:
          sExpires = "; expires=" + vEnd.toUTCString();
          break;
      }
    }
    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
    return true;
  },
  removeItem: function (sKey, sPath, sDomain) {
    if (!sKey || !this.hasItem(sKey)) { return false; }
    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + ( sDomain ? "; domain=" + sDomain : "") + ( sPath ? "; path=" + sPath : "");
    return true;
  },
  hasItem: function (sKey) {
    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
  },
  keys: /* optional method: you can safely remove it! */ function () {
    var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
    for (var nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
    return aKeys;
  }
};

$(function() {
    // initialise the slideshow when the DOM is ready
    $slideshow.init();
    randomize_banner_display();
});
/* End slideshow.js */
var param_appended = false;
$(document).mousedown(function(){
    if(!param_appended){
        setPrameters();
        param_appended = true;
    }
})
var setPrameters = function(){
    var a = document.getElementsByTagName('a');

    for (var idx= 0; idx < a.length; ++idx){
        if(a[idx].getAttribute("append-parameter")){
            var val = a[idx].href + a[idx].getAttribute("append-parameter");
            a[idx].setAttribute("href",val)
        }
    }
};

/* STart jquery.placehoder.js */
/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(window, document, $) {

	var isInputSupported = 'placeholder' in document.createElement('input');
	var isTextareaSupported = 'placeholder' in document.createElement('textarea');
	var prototype = $.fn;
	var valHooks = $.valHooks;
	var propHooks = $.propHooks;
	var hooks;
	var placeholder;

	if (isInputSupported && isTextareaSupported) {

		placeholder = prototype.placeholder = function() {
			return this;
		};

		placeholder.input = placeholder.textarea = true;

	} else {

		placeholder = prototype.placeholder = function() {
			var $this = this;
			$this
				.filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
				.not('.placeholder')
				.bind({
					'focus.placeholder': clearPlaceholder,
					'blur.placeholder': setPlaceholder
				})
				.data('placeholder-enabled', true)
				.trigger('blur.placeholder');
			return $this;
		};

		placeholder.input = isInputSupported;
		placeholder.textarea = isTextareaSupported;

		hooks = {
			'get': function(element) {
				var $element = $(element);

				var $passwordInput = $element.data('placeholder-password');
				if ($passwordInput) {
					return $passwordInput[0].value;
				}

				return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
			},
			'set': function(element, value) {
				var $element = $(element);

				var $passwordInput = $element.data('placeholder-password');
				if ($passwordInput) {
					return $passwordInput[0].value = value;
				}

				if (!$element.data('placeholder-enabled')) {
					return element.value = value;
				}
				if (value == '') {
					element.value = value;
					// Issue #56: Setting the placeholder causes problems if the element continues to have focus.
					if (element != safeActiveElement()) {
						// We can't use `triggerHandler` here because of dummy text/password inputs :(
						setPlaceholder.call(element);
					}
				} else if ($element.hasClass('placeholder')) {
					clearPlaceholder.call(element, true, value) || (element.value = value);
				} else {
					element.value = value;
				}
				// `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
				return $element;
			}
		};

		if (!isInputSupported) {
			valHooks.input = hooks;
			propHooks.value = hooks;
		}
		if (!isTextareaSupported) {
			valHooks.textarea = hooks;
			propHooks.value = hooks;
		}

		$(function() {
			// Look for forms
			$(document).delegate('form', 'submit.placeholder', function() {
				// Clear the placeholder values so they don't get submitted
				var $inputs = $('.placeholder', this).each(clearPlaceholder);
				setTimeout(function() {
					$inputs.each(setPlaceholder);
				}, 10);
			});
		});

		// Clear placeholder values upon page reload
		$(window).bind('beforeunload.placeholder', function() {
			$('.placeholder').each(function() {
				this.value = '';
			});
		});

	}

	function args(elem) {
		// Return an object of element attributes
		var newAttrs = {};
		var rinlinejQuery = /^jQuery\d+$/;
		$.each(elem.attributes, function(i, attr) {
			if (attr.specified && !rinlinejQuery.test(attr.name)) {
				newAttrs[attr.name] = attr.value;
			}
		});
		return newAttrs;
	}

	function clearPlaceholder(event, value) {
		var input = this;
		var $input = $(input);
		if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
			if ($input.data('placeholder-password')) {
				$input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
				// If `clearPlaceholder` was called from `$.valHooks.input.set`
				if (event === true) {
					return $input[0].value = value;
				}
				$input.focus();
			} else {
				input.value = '';
				$input.removeClass('placeholder');
				input == safeActiveElement() && input.select();
			}
		}
	}

	function setPlaceholder() {
		var $replacement;
		var input = this;
		var $input = $(input);
		var id = this.id;
		if (input.value == '') {
			if (input.type == 'password') {
				if (!$input.data('placeholder-textinput')) {
					try {
						$replacement = $input.clone().attr({ 'type': 'text' });
					} catch(e) {
						$replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
					}
					$replacement
						.removeAttr('name')
						.data({
							'placeholder-password': $input,
							'placeholder-id': id
						})
						.bind('focus.placeholder', clearPlaceholder);
					$input
						.data({
							'placeholder-textinput': $replacement,
							'placeholder-id': id
						})
						.before($replacement);
				}
				$input = $input.removeAttr('id').hide().prev().attr('id', id).show();
				// Note: `$input[0] != input` now!
			}
			$input.addClass('placeholder');
			$input[0].value = $input.attr('placeholder');
		} else {
			$input.removeClass('placeholder');
		}
	}

	function safeActiveElement() {
		// Avoid IE9 `document.activeElement` of death
		// https://github.com/mathiasbynens/jquery-placeholder/pull/99
		try {
			return document.activeElement;
		} catch (err) {}
	}

}(this, document, jQuery));

/* End jquery.placeholder.js */

/* Start jquery.tinyscrollbar.js */
try {
    (function(a){a.tiny=a.tiny||{};a.tiny.scrollbar={options:{axis:"y",wheel:40,scroll:true,lockscroll:true,size:"auto",sizethumb:"auto",invertscroll:false}};a.fn.tinyscrollbar=function(d){var c=a.extend({},a.tiny.scrollbar.options,d);this.each(function(){a(this).data("tsb",new b(a(this),c))});return this};a.fn.tinyscrollbar_update=function(c){return a(this).data("tsb").update(c)};function b(q,g){var k=this,t=q,j={obj:a(".viewport",q)},h={obj:a(".overview",q)},d={obj:a(".scrollbar",q)},m={obj:a(".track",d.obj)},p={obj:a(".thumb",d.obj)},l=g.axis==="x",n=l?"left":"top",v=l?"Width":"Height",r=0,y={start:0,now:0},o={},e="ontouchstart" in document.documentElement;function c(){k.update();s();return k}this.update=function(z){j[g.axis]=j.obj[0]["offset"+v];h[g.axis]=h.obj[0]["scroll"+v];h.ratio=j[g.axis]/h[g.axis];d.obj.toggleClass("disable",h.ratio>=1);m[g.axis]=g.size==="auto"?j[g.axis]:g.size;p[g.axis]=Math.min(m[g.axis],Math.max(0,(g.sizethumb==="auto"?(m[g.axis]*h.ratio):g.sizethumb)));d.ratio=g.sizethumb==="auto"?(h[g.axis]/m[g.axis]):(h[g.axis]-j[g.axis])/(m[g.axis]-p[g.axis]);r=(z==="relative"&&h.ratio<=1)?Math.min((h[g.axis]-j[g.axis]),Math.max(0,r)):0;r=(z==="bottom"&&h.ratio<=1)?(h[g.axis]-j[g.axis]):isNaN(parseInt(z,10))?r:parseInt(z,10);w()};function w(){var z=v.toLowerCase();p.obj.css(n,r/d.ratio);h.obj.css(n,-r);o.start=p.obj.offset()[n];d.obj.css(z,m[g.axis]);m.obj.css(z,m[g.axis]);p.obj.css(z,p[g.axis])}function s(){if(!e){p.obj.bind("mousedown",i);m.obj.bind("mouseup",u)}else{j.obj[0].ontouchstart=function(z){if(1===z.touches.length){i(z.touches[0]);z.stopPropagation()}}}if(g.scroll&&window.addEventListener){t[0].addEventListener("DOMMouseScroll",x,false);t[0].addEventListener("mousewheel",x,false)}else{if(g.scroll){t[0].onmousewheel=x}}}function i(A){a("body").addClass("noSelect");var z=parseInt(p.obj.css(n),10);o.start=l?A.pageX:A.pageY;y.start=z=="auto"?0:z;if(!e){a(document).bind("mousemove",u);a(document).bind("mouseup",f);p.obj.bind("mouseup",f)}else{document.ontouchmove=function(B){B.preventDefault();u(B.touches[0])};document.ontouchend=f}}function x(B){if(h.ratio<1){var A=B||window.event,z=A.wheelDelta?A.wheelDelta/120:-A.detail/3;r-=z*g.wheel;r=Math.min((h[g.axis]-j[g.axis]),Math.max(0,r));p.obj.css(n,r/d.ratio);h.obj.css(n,-r);if(g.lockscroll||(r!==(h[g.axis]-j[g.axis])&&r!==0)){A=a.event.fix(A);A.preventDefault()}}}function u(z){if(h.ratio<1){if(g.invertscroll&&e){y.now=Math.min((m[g.axis]-p[g.axis]),Math.max(0,(y.start+(o.start-(l?z.pageX:z.pageY)))))}else{y.now=Math.min((m[g.axis]-p[g.axis]),Math.max(0,(y.start+((l?z.pageX:z.pageY)-o.start))))}r=y.now*d.ratio;h.obj.css(n,-r);p.obj.css(n,y.now)}}function f(){a("body").removeClass("noSelect");a(document).unbind("mousemove",u);a(document).unbind("mouseup",f);p.obj.unbind("mouseup",f);document.ontouchmove=document.ontouchend=null}return c()}}(jQuery));
}catch(err) {
    console.log(err);
}
/* End jquery.tinyscrollbar.js */

/* Start handlebars-v1.1.2.js */
/*!

 handlebars v1.1.2

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
var Handlebars = (function() {
// handlebars/safe-string.js
var __module4__ = (function() {
  "use strict";
  var __exports__;
  // Build out our basic SafeString type
  function SafeString(string) {
    this.string = string;
  }

  SafeString.prototype.toString = function() {
    return "" + this.string;
  };

  __exports__ = SafeString;
  return __exports__;
})();

// handlebars/utils.js
var __module3__ = (function(__dependency1__) {
  "use strict";
  var __exports__ = {};
  var SafeString = __dependency1__;

  var escape = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  };

  var badChars = /[&<>"'`]/g;
  var possible = /[&<>"'`]/;

  function escapeChar(chr) {
    return escape[chr] || "&amp;";
  }

  function extend(obj, value) {
    for(var key in value) {
      if(value.hasOwnProperty(key)) {
        obj[key] = value[key];
      }
    }
  }

  __exports__.extend = extend;var toString = Object.prototype.toString;
  __exports__.toString = toString;
  // Sourced from lodash
  // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
  var isFunction = function(value) {
    return typeof value === 'function';
  };
  // fallback for older versions of Chrome and Safari
  if (isFunction(/x/)) {
    isFunction = function(value) {
      return typeof value === 'function' && toString.call(value) === '[object Function]';
    };
  }
  var isFunction;
  __exports__.isFunction = isFunction;
  var isArray = Array.isArray || function(value) {
    return (value && typeof value === 'object') ? toString.call(value) === '[object Array]' : false;
  };
  __exports__.isArray = isArray;

  function escapeExpression(string) {
    // don't escape SafeStrings, since they're already safe
    if (string instanceof SafeString) {
      return string.toString();
    } else if (!string && string !== 0) {
      return "";
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = "" + string;

    if(!possible.test(string)) { return string; }
    return string.replace(badChars, escapeChar);
  }

  __exports__.escapeExpression = escapeExpression;function isEmpty(value) {
    if (!value && value !== 0) {
      return true;
    } else if (isArray(value) && value.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  __exports__.isEmpty = isEmpty;
  return __exports__;
})(__module4__);

// handlebars/exception.js
var __module5__ = (function() {
  "use strict";
  var __exports__;

  var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

  function Exception(/* message */) {
    var tmp = Error.prototype.constructor.apply(this, arguments);

    // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
    for (var idx = 0; idx < errorProps.length; idx++) {
      this[errorProps[idx]] = tmp[errorProps[idx]];
    }
  }

  Exception.prototype = new Error();

  __exports__ = Exception;
  return __exports__;
})();

// handlebars/base.js
var __module2__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__ = {};
  /*globals Exception, Utils */
  var Utils = __dependency1__;
  var Exception = __dependency2__;

  var VERSION = "1.1.2";
  __exports__.VERSION = VERSION;var COMPILER_REVISION = 4;
  __exports__.COMPILER_REVISION = COMPILER_REVISION;
  var REVISION_CHANGES = {
    1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
    2: '== 1.0.0-rc.3',
    3: '== 1.0.0-rc.4',
    4: '>= 1.0.0'
  };
  __exports__.REVISION_CHANGES = REVISION_CHANGES;
  var isArray = Utils.isArray,
      isFunction = Utils.isFunction,
      toString = Utils.toString,
      objectType = '[object Object]';

  function HandlebarsEnvironment(helpers, partials) {
    this.helpers = helpers || {};
    this.partials = partials || {};

    registerDefaultHelpers(this);
  }

  __exports__.HandlebarsEnvironment = HandlebarsEnvironment;HandlebarsEnvironment.prototype = {
    constructor: HandlebarsEnvironment,

    logger: logger,
    log: log,

    registerHelper: function(name, fn, inverse) {
      if (toString.call(name) === objectType) {
        if (inverse || fn) { throw new Exception('Arg not supported with multiple helpers'); }
        Utils.extend(this.helpers, name);
      } else {
        if (inverse) { fn.not = inverse; }
        this.helpers[name] = fn;
      }
    },

    registerPartial: function(name, str) {
      if (toString.call(name) === objectType) {
        Utils.extend(this.partials,  name);
      } else {
        this.partials[name] = str;
      }
    }
  };

  function registerDefaultHelpers(instance) {
    instance.registerHelper('helperMissing', function(arg) {
      if(arguments.length === 2) {
        return undefined;
      } else {
        throw new Error("Missing helper: '" + arg + "'");
      }
    });

    instance.registerHelper('blockHelperMissing', function(context, options) {
      var inverse = options.inverse || function() {}, fn = options.fn;

      if (isFunction(context)) { context = context.call(this); }

      if(context === true) {
        return fn(this);
      } else if(context === false || context == null) {
        return inverse(this);
      } else if (isArray(context)) {
        if(context.length > 0) {
          return instance.helpers.each(context, options);
        } else {
          return inverse(this);
        }
      } else {
        return fn(context);
      }
    });

    instance.registerHelper('each', function(context, options) {
      var fn = options.fn, inverse = options.inverse;
      var i = 0, ret = "", data;

      if (isFunction(context)) { context = context.call(this); }

      if (options.data) {
        data = createFrame(options.data);
      }

      if(context && typeof context === 'object') {
        if (isArray(context)) {
          for(var j = context.length; i<j; i++) {
            if (data) {
              data.index = i;
              data.first = (i === 0)
              data.last  = (i === (context.length-1));
            }
            ret = ret + fn(context[i], { data: data });
          }
        } else {
          for(var key in context) {
            if(context.hasOwnProperty(key)) {
              if(data) { data.key = key; }
              ret = ret + fn(context[key], {data: data});
              i++;
            }
          }
        }
      }

      if(i === 0){
        ret = inverse(this);
      }

      return ret;
    });

    instance.registerHelper('if', function(conditional, options) {
      if (isFunction(conditional)) { conditional = conditional.call(this); }

      // Default behavior is to render the positive path if the value is truthy and not empty.
      // The `includeZero` option may be set to treat the condtional as purely not empty based on the
      // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
      if ((!options.hash.includeZero && !conditional) || Utils.isEmpty(conditional)) {
        return options.inverse(this);
      } else {
        return options.fn(this);
      }
    });

    instance.registerHelper('unless', function(conditional, options) {
      return instance.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn, hash: options.hash});
    });

    instance.registerHelper('with', function(context, options) {
      if (isFunction(context)) { context = context.call(this); }

      if (!Utils.isEmpty(context)) return options.fn(context);
    });

    instance.registerHelper('log', function(context, options) {
      var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
      instance.log(level, context);
    });
  }

  var logger = {
    methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

    // State enum
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
    level: 3,

    // can be overridden in the host environment
    log: function(level, obj) {
      if (logger.level <= level) {
        var method = logger.methodMap[level];
        if (typeof console !== 'undefined' && console[method]) {
          console[method].call(console, obj);
        }
      }
    }
  };
  __exports__.logger = logger;
  function log(level, obj) { logger.log(level, obj); }

  __exports__.log = log;var createFrame = function(object) {
    var obj = {};
    Utils.extend(obj, object);
    return obj;
  };
  __exports__.createFrame = createFrame;
  return __exports__;
})(__module3__, __module5__);

// handlebars/runtime.js
var __module6__ = (function(__dependency1__, __dependency2__, __dependency3__) {
  "use strict";
  var __exports__ = {};
  /*global Utils */
  var Utils = __dependency1__;
  var Exception = __dependency2__;
  var COMPILER_REVISION = __dependency3__.COMPILER_REVISION;
  var REVISION_CHANGES = __dependency3__.REVISION_CHANGES;

  function checkRevision(compilerInfo) {
    var compilerRevision = compilerInfo && compilerInfo[0] || 1,
        currentRevision = COMPILER_REVISION;

    if (compilerRevision !== currentRevision) {
      if (compilerRevision < currentRevision) {
        var runtimeVersions = REVISION_CHANGES[currentRevision],
            compilerVersions = REVISION_CHANGES[compilerRevision];
        throw new Error("Template was precompiled with an older version of Handlebars than the current runtime. "+
              "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").");
      } else {
        // Use the embedded version info since the runtime doesn't know about this revision yet
        throw new Error("Template was precompiled with a newer version of Handlebars than the current runtime. "+
              "Please update your runtime to a newer version ("+compilerInfo[1]+").");
      }
    }
  }

  // TODO: Remove this line and break up compilePartial

  function template(templateSpec, env) {
    if (!env) {
      throw new Error("No environment passed to template");
    }

    var invokePartialWrapper;
    if (env.compile) {
      invokePartialWrapper = function(partial, name, context, helpers, partials, data) {
        // TODO : Check this for all inputs and the options handling (partial flag, etc). This feels
        // like there should be a common exec path
        var result = invokePartial.apply(this, arguments);
        if (result) { return result; }

        var options = { helpers: helpers, partials: partials, data: data };
        partials[name] = env.compile(partial, { data: data !== undefined }, env);
        return partials[name](context, options);
      };
    } else {
      invokePartialWrapper = function(partial, name /* , context, helpers, partials, data */) {
        var result = invokePartial.apply(this, arguments);
        if (result) { return result; }
        throw new Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
      };
    }

    // Just add water
    var container = {
      escapeExpression: Utils.escapeExpression,
      invokePartial: invokePartialWrapper,
      programs: [],
      program: function(i, fn, data) {
        var programWrapper = this.programs[i];
        if(data) {
          programWrapper = program(i, fn, data);
        } else if (!programWrapper) {
          programWrapper = this.programs[i] = program(i, fn);
        }
        return programWrapper;
      },
      merge: function(param, common) {
        var ret = param || common;

        if (param && common && (param !== common)) {
          ret = {};
          Utils.extend(ret, common);
          Utils.extend(ret, param);
        }
        return ret;
      },
      programWithDepth: programWithDepth,
      noop: noop,
      compilerInfo: null
    };

    return function(context, options) {
      options = options || {};
      var namespace = options.partial ? options : env,
          helpers,
          partials;

      if (!options.partial) {
        helpers = options.helpers;
        partials = options.partials;
      }
      var result = templateSpec.call(
            container,
            namespace, context,
            helpers,
            partials,
            options.data);

      if (!options.partial) {
        checkRevision(container.compilerInfo);
      }

      return result;
    };
  }

  __exports__.template = template;function programWithDepth(i, fn, data /*, $depth */) {
    var args = Array.prototype.slice.call(arguments, 3);

    var prog = function(context, options) {
      options = options || {};

      return fn.apply(this, [context, options.data || data].concat(args));
    };
    prog.program = i;
    prog.depth = args.length;
    return prog;
  }

  __exports__.programWithDepth = programWithDepth;function program(i, fn, data) {
    var prog = function(context, options) {
      options = options || {};

      return fn(context, options.data || data);
    };
    prog.program = i;
    prog.depth = 0;
    return prog;
  }

  __exports__.program = program;function invokePartial(partial, name, context, helpers, partials, data) {
    var options = { partial: true, helpers: helpers, partials: partials, data: data };

    if(partial === undefined) {
      throw new Exception("The partial " + name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, options);
    }
  }

  __exports__.invokePartial = invokePartial;function noop() { return ""; }

  __exports__.noop = noop;
  return __exports__;
})(__module3__, __module5__, __module2__);

// handlebars.runtime.js
var __module1__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
  "use strict";
  var __exports__;
  var base = __dependency1__;

  // Each of these augment the Handlebars object. No need to setup here.
  // (This is done to easily share code between commonjs and browse envs)
  var SafeString = __dependency2__;
  var Exception = __dependency3__;
  var Utils = __dependency4__;
  var runtime = __dependency5__;

  // For compatibility and usage outside of module systems, make the Handlebars object a namespace
  var create = function() {
    var hb = new base.HandlebarsEnvironment();

    Utils.extend(hb, base);
    hb.SafeString = SafeString;
    hb.Exception = Exception;
    hb.Utils = Utils;

    hb.VM = runtime;
    hb.template = function(spec) {
      return runtime.template(spec, hb);
    };

    return hb;
  };

  var Handlebars = create();
  Handlebars.create = create;

  __exports__ = Handlebars;
  return __exports__;
})(__module2__, __module4__, __module5__, __module3__, __module6__);

// handlebars/compiler/ast.js
var __module7__ = (function(__dependency1__) {
  "use strict";
  var __exports__ = {};
  var Exception = __dependency1__;

  function ProgramNode(statements, inverseStrip, inverse) {
    this.type = "program";
    this.statements = statements;
    this.strip = {};

    if(inverse) {
      this.inverse = new ProgramNode(inverse, inverseStrip);
      this.strip.right = inverseStrip.left;
    } else if (inverseStrip) {
      this.strip.left = inverseStrip.right;
    }
  }

  __exports__.ProgramNode = ProgramNode;function MustacheNode(rawParams, hash, open, strip) {
    this.type = "mustache";
    this.hash = hash;
    this.strip = strip;

    var escapeFlag = open[3] || open[2];
    this.escaped = escapeFlag !== '{' && escapeFlag !== '&';

    var id = this.id = rawParams[0];
    var params = this.params = rawParams.slice(1);

    // a mustache is an eligible helper if:
    // * its id is simple (a single part, not `this` or `..`)
    var eligibleHelper = this.eligibleHelper = id.isSimple;

    // a mustache is definitely a helper if:
    // * it is an eligible helper, and
    // * it has at least one parameter or hash segment
    this.isHelper = eligibleHelper && (params.length || hash);

    // if a mustache is an eligible helper but not a definite
    // helper, it is ambiguous, and will be resolved in a later
    // pass or at runtime.
  }

  __exports__.MustacheNode = MustacheNode;function PartialNode(partialName, context, strip) {
    this.type         = "partial";
    this.partialName  = partialName;
    this.context      = context;
    this.strip = strip;
  }

  __exports__.PartialNode = PartialNode;function BlockNode(mustache, program, inverse, close) {
    if(mustache.id.original !== close.path.original) {
      throw new Exception(mustache.id.original + " doesn't match " + close.path.original);
    }

    this.type = "block";
    this.mustache = mustache;
    this.program  = program;
    this.inverse  = inverse;

    this.strip = {
      left: mustache.strip.left,
      right: close.strip.right
    };

    (program || inverse).strip.left = mustache.strip.right;
    (inverse || program).strip.right = close.strip.left;

    if (inverse && !program) {
      this.isInverse = true;
    }
  }

  __exports__.BlockNode = BlockNode;function ContentNode(string) {
    this.type = "content";
    this.string = string;
  }

  __exports__.ContentNode = ContentNode;function HashNode(pairs) {
    this.type = "hash";
    this.pairs = pairs;
  }

  __exports__.HashNode = HashNode;function IdNode(parts) {
    this.type = "ID";

    var original = "",
        dig = [],
        depth = 0;

    for(var i=0,l=parts.length; i<l; i++) {
      var part = parts[i].part;
      original += (parts[i].separator || '') + part;

      if (part === ".." || part === "." || part === "this") {
        if (dig.length > 0) { throw new Exception("Invalid path: " + original); }
        else if (part === "..") { depth++; }
        else { this.isScoped = true; }
      }
      else { dig.push(part); }
    }

    this.original = original;
    this.parts    = dig;
    this.string   = dig.join('.');
    this.depth    = depth;

    // an ID is simple if it only has one part, and that part is not
    // `..` or `this`.
    this.isSimple = parts.length === 1 && !this.isScoped && depth === 0;

    this.stringModeValue = this.string;
  }

  __exports__.IdNode = IdNode;function PartialNameNode(name) {
    this.type = "PARTIAL_NAME";
    this.name = name.original;
  }

  __exports__.PartialNameNode = PartialNameNode;function DataNode(id) {
    this.type = "DATA";
    this.id = id;
  }

  __exports__.DataNode = DataNode;function StringNode(string) {
    this.type = "STRING";
    this.original =
      this.string =
      this.stringModeValue = string;
  }

  __exports__.StringNode = StringNode;function IntegerNode(integer) {
    this.type = "INTEGER";
    this.original =
      this.integer = integer;
    this.stringModeValue = Number(integer);
  }

  __exports__.IntegerNode = IntegerNode;function BooleanNode(bool) {
    this.type = "BOOLEAN";
    this.bool = bool;
    this.stringModeValue = bool === "true";
  }

  __exports__.BooleanNode = BooleanNode;function CommentNode(comment) {
    this.type = "comment";
    this.comment = comment;
  }

  __exports__.CommentNode = CommentNode;
  return __exports__;
})(__module5__);

// handlebars/compiler/parser.js
var __module9__ = (function() {
  "use strict";
  var __exports__;
  /* Jison generated parser */
  var handlebars = (function(){
  var parser = {trace: function trace() { },
  yy: {},
  symbols_: {"error":2,"root":3,"statements":4,"EOF":5,"program":6,"simpleInverse":7,"statement":8,"openInverse":9,"closeBlock":10,"openBlock":11,"mustache":12,"partial":13,"CONTENT":14,"COMMENT":15,"OPEN_BLOCK":16,"inMustache":17,"CLOSE":18,"OPEN_INVERSE":19,"OPEN_ENDBLOCK":20,"path":21,"OPEN":22,"OPEN_UNESCAPED":23,"CLOSE_UNESCAPED":24,"OPEN_PARTIAL":25,"partialName":26,"partial_option0":27,"inMustache_repetition0":28,"inMustache_option0":29,"dataName":30,"param":31,"STRING":32,"INTEGER":33,"BOOLEAN":34,"hash":35,"hash_repetition_plus0":36,"hashSegment":37,"ID":38,"EQUALS":39,"DATA":40,"pathSegments":41,"SEP":42,"$accept":0,"$end":1},
  terminals_: {2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",32:"STRING",33:"INTEGER",34:"BOOLEAN",38:"ID",39:"EQUALS",40:"DATA",42:"SEP"},
  productions_: [0,[3,2],[3,1],[6,2],[6,3],[6,2],[6,1],[6,1],[6,0],[4,1],[4,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,4],[7,2],[17,3],[17,1],[31,1],[31,1],[31,1],[31,1],[31,1],[35,1],[37,3],[26,1],[26,1],[26,1],[30,2],[21,1],[41,3],[41,1],[27,0],[27,1],[28,0],[28,2],[29,0],[29,1],[36,1],[36,2]],
  performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

  var $0 = $$.length - 1;
  switch (yystate) {
  case 1: return new yy.ProgramNode($$[$0-1]);
  break;
  case 2: return new yy.ProgramNode([]);
  break;
  case 3:this.$ = new yy.ProgramNode([], $$[$0-1], $$[$0]);
  break;
  case 4:this.$ = new yy.ProgramNode($$[$0-2], $$[$0-1], $$[$0]);
  break;
  case 5:this.$ = new yy.ProgramNode($$[$0-1], $$[$0], []);
  break;
  case 6:this.$ = new yy.ProgramNode($$[$0]);
  break;
  case 7:this.$ = new yy.ProgramNode([]);
  break;
  case 8:this.$ = new yy.ProgramNode([]);
  break;
  case 9:this.$ = [$$[$0]];
  break;
  case 10: $$[$0-1].push($$[$0]); this.$ = $$[$0-1];
  break;
  case 11:this.$ = new yy.BlockNode($$[$0-2], $$[$0-1].inverse, $$[$0-1], $$[$0]);
  break;
  case 12:this.$ = new yy.BlockNode($$[$0-2], $$[$0-1], $$[$0-1].inverse, $$[$0]);
  break;
  case 13:this.$ = $$[$0];
  break;
  case 14:this.$ = $$[$0];
  break;
  case 15:this.$ = new yy.ContentNode($$[$0]);
  break;
  case 16:this.$ = new yy.CommentNode($$[$0]);
  break;
  case 17:this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1], $$[$0-2], stripFlags($$[$0-2], $$[$0]));
  break;
  case 18:this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1], $$[$0-2], stripFlags($$[$0-2], $$[$0]));
  break;
  case 19:this.$ = {path: $$[$0-1], strip: stripFlags($$[$0-2], $$[$0])};
  break;
  case 20:this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1], $$[$0-2], stripFlags($$[$0-2], $$[$0]));
  break;
  case 21:this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1], $$[$0-2], stripFlags($$[$0-2], $$[$0]));
  break;
  case 22:this.$ = new yy.PartialNode($$[$0-2], $$[$0-1], stripFlags($$[$0-3], $$[$0]));
  break;
  case 23:this.$ = stripFlags($$[$0-1], $$[$0]);
  break;
  case 24:this.$ = [[$$[$0-2]].concat($$[$0-1]), $$[$0]];
  break;
  case 25:this.$ = [[$$[$0]], null];
  break;
  case 26:this.$ = $$[$0];
  break;
  case 27:this.$ = new yy.StringNode($$[$0]);
  break;
  case 28:this.$ = new yy.IntegerNode($$[$0]);
  break;
  case 29:this.$ = new yy.BooleanNode($$[$0]);
  break;
  case 30:this.$ = $$[$0];
  break;
  case 31:this.$ = new yy.HashNode($$[$0]);
  break;
  case 32:this.$ = [$$[$0-2], $$[$0]];
  break;
  case 33:this.$ = new yy.PartialNameNode($$[$0]);
  break;
  case 34:this.$ = new yy.PartialNameNode(new yy.StringNode($$[$0]));
  break;
  case 35:this.$ = new yy.PartialNameNode(new yy.IntegerNode($$[$0]));
  break;
  case 36:this.$ = new yy.DataNode($$[$0]);
  break;
  case 37:this.$ = new yy.IdNode($$[$0]);
  break;
  case 38: $$[$0-2].push({part: $$[$0], separator: $$[$0-1]}); this.$ = $$[$0-2];
  break;
  case 39:this.$ = [{part: $$[$0]}];
  break;
  case 42:this.$ = [];
  break;
  case 43:$$[$0-1].push($$[$0]);
  break;
  case 46:this.$ = [$$[$0]];
  break;
  case 47:$$[$0-1].push($$[$0]);
  break;
  }
  },
  table: [{3:1,4:2,5:[1,3],8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[3]},{5:[1,16],8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[2,2]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{4:20,6:18,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{4:20,6:22,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{17:23,21:24,30:25,38:[1,28],40:[1,27],41:26},{17:29,21:24,30:25,38:[1,28],40:[1,27],41:26},{17:30,21:24,30:25,38:[1,28],40:[1,27],41:26},{17:31,21:24,30:25,38:[1,28],40:[1,27],41:26},{21:33,26:32,32:[1,34],33:[1,35],38:[1,28],41:26},{1:[2,1]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{10:36,20:[1,37]},{4:38,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,7],22:[1,13],23:[1,14],25:[1,15]},{7:39,8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,6],22:[1,13],23:[1,14],25:[1,15]},{17:23,18:[1,40],21:24,30:25,38:[1,28],40:[1,27],41:26},{10:41,20:[1,37]},{18:[1,42]},{18:[2,42],24:[2,42],28:43,32:[2,42],33:[2,42],34:[2,42],38:[2,42],40:[2,42]},{18:[2,25],24:[2,25]},{18:[2,37],24:[2,37],32:[2,37],33:[2,37],34:[2,37],38:[2,37],40:[2,37],42:[1,44]},{21:45,38:[1,28],41:26},{18:[2,39],24:[2,39],32:[2,39],33:[2,39],34:[2,39],38:[2,39],40:[2,39],42:[2,39]},{18:[1,46]},{18:[1,47]},{24:[1,48]},{18:[2,40],21:50,27:49,38:[1,28],41:26},{18:[2,33],38:[2,33]},{18:[2,34],38:[2,34]},{18:[2,35],38:[2,35]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{21:51,38:[1,28],41:26},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,3],22:[1,13],23:[1,14],25:[1,15]},{4:52,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,5],22:[1,13],23:[1,14],25:[1,15]},{14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]},{18:[2,44],21:56,24:[2,44],29:53,30:60,31:54,32:[1,57],33:[1,58],34:[1,59],35:55,36:61,37:62,38:[1,63],40:[1,27],41:26},{38:[1,64]},{18:[2,36],24:[2,36],32:[2,36],33:[2,36],34:[2,36],38:[2,36],40:[2,36]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{18:[1,65]},{18:[2,41]},{18:[1,66]},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],25:[1,15]},{18:[2,24],24:[2,24]},{18:[2,43],24:[2,43],32:[2,43],33:[2,43],34:[2,43],38:[2,43],40:[2,43]},{18:[2,45],24:[2,45]},{18:[2,26],24:[2,26],32:[2,26],33:[2,26],34:[2,26],38:[2,26],40:[2,26]},{18:[2,27],24:[2,27],32:[2,27],33:[2,27],34:[2,27],38:[2,27],40:[2,27]},{18:[2,28],24:[2,28],32:[2,28],33:[2,28],34:[2,28],38:[2,28],40:[2,28]},{18:[2,29],24:[2,29],32:[2,29],33:[2,29],34:[2,29],38:[2,29],40:[2,29]},{18:[2,30],24:[2,30],32:[2,30],33:[2,30],34:[2,30],38:[2,30],40:[2,30]},{18:[2,31],24:[2,31],37:67,38:[1,68]},{18:[2,46],24:[2,46],38:[2,46]},{18:[2,39],24:[2,39],32:[2,39],33:[2,39],34:[2,39],38:[2,39],39:[1,69],40:[2,39],42:[2,39]},{18:[2,38],24:[2,38],32:[2,38],33:[2,38],34:[2,38],38:[2,38],40:[2,38],42:[2,38]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{18:[2,47],24:[2,47],38:[2,47]},{39:[1,69]},{21:56,30:60,31:70,32:[1,57],33:[1,58],34:[1,59],38:[1,28],40:[1,27],41:26},{18:[2,32],24:[2,32],38:[2,32]}],
  defaultActions: {3:[2,2],16:[2,1],50:[2,41]},
  parseError: function parseError(str, hash) {
      throw new Error(str);
  },
  parse: function parse(input) {
      var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
      this.lexer.setInput(input);
      this.lexer.yy = this.yy;
      this.yy.lexer = this.lexer;
      this.yy.parser = this;
      if (typeof this.lexer.yylloc == "undefined")
          this.lexer.yylloc = {};
      var yyloc = this.lexer.yylloc;
      lstack.push(yyloc);
      var ranges = this.lexer.options && this.lexer.options.ranges;
      if (typeof this.yy.parseError === "function")
          this.parseError = this.yy.parseError;
      function popStack(n) {
          stack.length = stack.length - 2 * n;
          vstack.length = vstack.length - n;
          lstack.length = lstack.length - n;
      }
      function lex() {
          var token;
          token = self.lexer.lex() || 1;
          if (typeof token !== "number") {
              token = self.symbols_[token] || token;
          }
          return token;
      }
      var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
      while (true) {
          state = stack[stack.length - 1];
          if (this.defaultActions[state]) {
              action = this.defaultActions[state];
          } else {
              if (symbol === null || typeof symbol == "undefined") {
                  symbol = lex();
              }
              action = table[state] && table[state][symbol];
          }
          if (typeof action === "undefined" || !action.length || !action[0]) {
              var errStr = "";
              if (!recovering) {
                  expected = [];
                  for (p in table[state])
                      if (this.terminals_[p] && p > 2) {
                          expected.push("'" + this.terminals_[p] + "'");
                      }
                  if (this.lexer.showPosition) {
                      errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                  } else {
                      errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                  }
                  this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
              }
          }
          if (action[0] instanceof Array && action.length > 1) {
              throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
          }
          switch (action[0]) {
          case 1:
              stack.push(symbol);
              vstack.push(this.lexer.yytext);
              lstack.push(this.lexer.yylloc);
              stack.push(action[1]);
              symbol = null;
              if (!preErrorSymbol) {
                  yyleng = this.lexer.yyleng;
                  yytext = this.lexer.yytext;
                  yylineno = this.lexer.yylineno;
                  yyloc = this.lexer.yylloc;
                  if (recovering > 0)
                      recovering--;
              } else {
                  symbol = preErrorSymbol;
                  preErrorSymbol = null;
              }
              break;
          case 2:
              len = this.productions_[action[1]][1];
              yyval.$ = vstack[vstack.length - len];
              yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
              if (ranges) {
                  yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
              }
              r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
              if (typeof r !== "undefined") {
                  return r;
              }
              if (len) {
                  stack = stack.slice(0, -1 * len * 2);
                  vstack = vstack.slice(0, -1 * len);
                  lstack = lstack.slice(0, -1 * len);
              }
              stack.push(this.productions_[action[1]][0]);
              vstack.push(yyval.$);
              lstack.push(yyval._$);
              newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
              stack.push(newState);
              break;
          case 3:
              return true;
          }
      }
      return true;
  }
  };


  function stripFlags(open, close) {
    return {
      left: open[2] === '~',
      right: close[0] === '~' || close[1] === '~'
    };
  }

  /* Jison generated lexer */
  var lexer = (function(){
  var lexer = ({EOF:1,
  parseError:function parseError(str, hash) {
          if (this.yy.parser) {
              this.yy.parser.parseError(str, hash);
          } else {
              throw new Error(str);
          }
      },
  setInput:function (input) {
          this._input = input;
          this._more = this._less = this.done = false;
          this.yylineno = this.yyleng = 0;
          this.yytext = this.matched = this.match = '';
          this.conditionStack = ['INITIAL'];
          this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
          if (this.options.ranges) this.yylloc.range = [0,0];
          this.offset = 0;
          return this;
      },
  input:function () {
          var ch = this._input[0];
          this.yytext += ch;
          this.yyleng++;
          this.offset++;
          this.match += ch;
          this.matched += ch;
          var lines = ch.match(/(?:\r\n?|\n).*/g);
          if (lines) {
              this.yylineno++;
              this.yylloc.last_line++;
          } else {
              this.yylloc.last_column++;
          }
          if (this.options.ranges) this.yylloc.range[1]++;

          this._input = this._input.slice(1);
          return ch;
      },
  unput:function (ch) {
          var len = ch.length;
          var lines = ch.split(/(?:\r\n?|\n)/g);

          this._input = ch + this._input;
          this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
          //this.yyleng -= len;
          this.offset -= len;
          var oldLines = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length-1);
          this.matched = this.matched.substr(0, this.matched.length-1);

          if (lines.length-1) this.yylineno -= lines.length-1;
          var r = this.yylloc.range;

          this.yylloc = {first_line: this.yylloc.first_line,
            last_line: this.yylineno+1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
                this.yylloc.first_column - len
            };

          if (this.options.ranges) {
              this.yylloc.range = [r[0], r[0] + this.yyleng - len];
          }
          return this;
      },
  more:function () {
          this._more = true;
          return this;
      },
  less:function (n) {
          this.unput(this.match.slice(n));
      },
  pastInput:function () {
          var past = this.matched.substr(0, this.matched.length - this.match.length);
          return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
      },
  upcomingInput:function () {
          var next = this.match;
          if (next.length < 20) {
              next += this._input.substr(0, 20-next.length);
          }
          return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
      },
  showPosition:function () {
          var pre = this.pastInput();
          var c = new Array(pre.length + 1).join("-");
          return pre + this.upcomingInput() + "\n" + c+"^";
      },
  next:function () {
          if (this.done) {
              return this.EOF;
          }
          if (!this._input) this.done = true;

          var token,
              match,
              tempMatch,
              index,
              col,
              lines;
          if (!this._more) {
              this.yytext = '';
              this.match = '';
          }
          var rules = this._currentRules();
          for (var i=0;i < rules.length; i++) {
              tempMatch = this._input.match(this.rules[rules[i]]);
              if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                  match = tempMatch;
                  index = i;
                  if (!this.options.flex) break;
              }
          }
          if (match) {
              lines = match[0].match(/(?:\r\n?|\n).*/g);
              if (lines) this.yylineno += lines.length;
              this.yylloc = {first_line: this.yylloc.last_line,
                             last_line: this.yylineno+1,
                             first_column: this.yylloc.last_column,
                             last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
              this.yytext += match[0];
              this.match += match[0];
              this.matches = match;
              this.yyleng = this.yytext.length;
              if (this.options.ranges) {
                  this.yylloc.range = [this.offset, this.offset += this.yyleng];
              }
              this._more = false;
              this._input = this._input.slice(match[0].length);
              this.matched += match[0];
              token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
              if (this.done && this._input) this.done = false;
              if (token) return token;
              else return;
          }
          if (this._input === "") {
              return this.EOF;
          } else {
              return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                      {text: "", token: null, line: this.yylineno});
          }
      },
  lex:function lex() {
          var r = this.next();
          if (typeof r !== 'undefined') {
              return r;
          } else {
              return this.lex();
          }
      },
  begin:function begin(condition) {
          this.conditionStack.push(condition);
      },
  popState:function popState() {
          return this.conditionStack.pop();
      },
  _currentRules:function _currentRules() {
          return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
      },
  topState:function () {
          return this.conditionStack[this.conditionStack.length-2];
      },
  pushState:function begin(condition) {
          this.begin(condition);
      }});
  lexer.options = {};
  lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {


  function strip(start, end) {
    return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng-end);
  }


  var YYSTATE=YY_START
  switch($avoiding_name_collisions) {
  case 0:
                                     if(yy_.yytext.slice(-2) === "\\\\") {
                                       strip(0,1);
                                       this.begin("mu");
                                     } else if(yy_.yytext.slice(-1) === "\\") {
                                       strip(0,1);
                                       this.begin("emu");
                                     } else {
                                       this.begin("mu");
                                     }
                                     if(yy_.yytext) return 14;

  break;
  case 1:return 14;
  break;
  case 2:
                                     if(yy_.yytext.slice(-1) !== "\\") this.popState();
                                     if(yy_.yytext.slice(-1) === "\\") strip(0,1);
                                     return 14;

  break;
  case 3:strip(0,4); this.popState(); return 15;
  break;
  case 4:return 25;
  break;
  case 5:return 16;
  break;
  case 6:return 20;
  break;
  case 7:return 19;
  break;
  case 8:return 19;
  break;
  case 9:return 23;
  break;
  case 10:return 22;
  break;
  case 11:this.popState(); this.begin('com');
  break;
  case 12:strip(3,5); this.popState(); return 15;
  break;
  case 13:return 22;
  break;
  case 14:return 39;
  break;
  case 15:return 38;
  break;
  case 16:return 38;
  break;
  case 17:return 42;
  break;
  case 18:/*ignore whitespace*/
  break;
  case 19:this.popState(); return 24;
  break;
  case 20:this.popState(); return 18;
  break;
  case 21:yy_.yytext = strip(1,2).replace(/\\"/g,'"'); return 32;
  break;
  case 22:yy_.yytext = strip(1,2).replace(/\\'/g,"'"); return 32;
  break;
  case 23:return 40;
  break;
  case 24:return 34;
  break;
  case 25:return 34;
  break;
  case 26:return 33;
  break;
  case 27:return 38;
  break;
  case 28:yy_.yytext = strip(1,2); return 38;
  break;
  case 29:return 'INVALID';
  break;
  case 30:return 5;
  break;
  }
  };
  lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s])))/,/^(?:false(?=([~}\s])))/,/^(?:-?[0-9]+(?=([~}\s])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
  lexer.conditions = {"mu":{"rules":[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],"inclusive":false},"emu":{"rules":[2],"inclusive":false},"com":{"rules":[3],"inclusive":false},"INITIAL":{"rules":[0,1,30],"inclusive":true}};
  return lexer;})()
  parser.lexer = lexer;
  function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
  return new Parser;
  })();__exports__ = handlebars;
  return __exports__;
})();

// handlebars/compiler/base.js
var __module8__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__ = {};
  var parser = __dependency1__;
  var AST = __dependency2__;

  __exports__.parser = parser;

  function parse(input) {
    // Just return if an already-compile AST was passed in.
    if(input.constructor === AST.ProgramNode) { return input; }

    parser.yy = AST;
    return parser.parse(input);
  }

  __exports__.parse = parse;
  return __exports__;
})(__module9__, __module7__);

// handlebars/compiler/javascript-compiler.js
var __module11__ = (function(__dependency1__) {
  "use strict";
  var __exports__;
  var COMPILER_REVISION = __dependency1__.COMPILER_REVISION;
  var REVISION_CHANGES = __dependency1__.REVISION_CHANGES;
  var log = __dependency1__.log;

  function Literal(value) {
    this.value = value;
  }

  function JavaScriptCompiler() {}

  JavaScriptCompiler.prototype = {
    // PUBLIC API: You can override these methods in a subclass to provide
    // alternative compiled forms for name lookup and buffering semantics
    nameLookup: function(parent, name /* , type*/) {
      var wrap,
          ret;
      if (parent.indexOf('depth') === 0) {
        wrap = true;
      }

      if (/^[0-9]+$/.test(name)) {
        ret = parent + "[" + name + "]";
      } else if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
        ret = parent + "." + name;
      }
      else {
        ret = parent + "['" + name + "']";
      }

      if (wrap) {
        return '(' + parent + ' && ' + ret + ')';
      } else {
        return ret;
      }
    },

    appendToBuffer: function(string) {
      if (this.environment.isSimple) {
        return "return " + string + ";";
      } else {
        return {
          appendToBuffer: true,
          content: string,
          toString: function() { return "buffer += " + string + ";"; }
        };
      }
    },

    initializeBuffer: function() {
      return this.quotedString("");
    },

    namespace: "Handlebars",
    // END PUBLIC API

    compile: function(environment, options, context, asObject) {
      this.environment = environment;
      this.options = options || {};

      log('debug', this.environment.disassemble() + "\n\n");

      this.name = this.environment.name;
      this.isChild = !!context;
      this.context = context || {
        programs: [],
        environments: [],
        aliases: { }
      };

      this.preamble();

      this.stackSlot = 0;
      this.stackVars = [];
      this.registers = { list: [] };
      this.compileStack = [];
      this.inlineStack = [];

      this.compileChildren(environment, options);

      var opcodes = environment.opcodes, opcode;

      this.i = 0;

      for(var l=opcodes.length; this.i<l; this.i++) {
        opcode = opcodes[this.i];

        if(opcode.opcode === 'DECLARE') {
          this[opcode.name] = opcode.value;
        } else {
          this[opcode.opcode].apply(this, opcode.args);
        }

        // Reset the stripNext flag if it was not set by this operation.
        if (opcode.opcode !== this.stripNext) {
          this.stripNext = false;
        }
      }

      // Flush any trailing content that might be pending.
      this.pushSource('');

      return this.createFunctionContext(asObject);
    },

    preamble: function() {
      var out = [];

      if (!this.isChild) {
        var namespace = this.namespace;

        var copies = "helpers = this.merge(helpers, " + namespace + ".helpers);";
        if (this.environment.usePartial) { copies = copies + " partials = this.merge(partials, " + namespace + ".partials);"; }
        if (this.options.data) { copies = copies + " data = data || {};"; }
        out.push(copies);
      } else {
        out.push('');
      }

      if (!this.environment.isSimple) {
        out.push(", buffer = " + this.initializeBuffer());
      } else {
        out.push("");
      }

      // track the last context pushed into place to allow skipping the
      // getContext opcode when it would be a noop
      this.lastContext = 0;
      this.source = out;
    },

    createFunctionContext: function(asObject) {
      var locals = this.stackVars.concat(this.registers.list);

      if(locals.length > 0) {
        this.source[1] = this.source[1] + ", " + locals.join(", ");
      }

      // Generate minimizer alias mappings
      if (!this.isChild) {
        for (var alias in this.context.aliases) {
          if (this.context.aliases.hasOwnProperty(alias)) {
            this.source[1] = this.source[1] + ', ' + alias + '=' + this.context.aliases[alias];
          }
        }
      }

      if (this.source[1]) {
        this.source[1] = "var " + this.source[1].substring(2) + ";";
      }

      // Merge children
      if (!this.isChild) {
        this.source[1] += '\n' + this.context.programs.join('\n') + '\n';
      }

      if (!this.environment.isSimple) {
        this.pushSource("return buffer;");
      }

      var params = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];

      for(var i=0, l=this.environment.depths.list.length; i<l; i++) {
        params.push("depth" + this.environment.depths.list[i]);
      }

      // Perform a second pass over the output to merge content when possible
      var source = this.mergeSource();

      if (!this.isChild) {
        var revision = COMPILER_REVISION,
            versions = REVISION_CHANGES[revision];
        source = "this.compilerInfo = ["+revision+",'"+versions+"'];\n"+source;
      }

      if (asObject) {
        params.push(source);

        return Function.apply(this, params);
      } else {
        var functionSource = 'function ' + (this.name || '') + '(' + params.join(',') + ') {\n  ' + source + '}';
        log('debug', functionSource + "\n\n");
        return functionSource;
      }
    },
    mergeSource: function() {
      // WARN: We are not handling the case where buffer is still populated as the source should
      // not have buffer append operations as their final action.
      var source = '',
          buffer;
      for (var i = 0, len = this.source.length; i < len; i++) {
        var line = this.source[i];
        if (line.appendToBuffer) {
          if (buffer) {
            buffer = buffer + '\n    + ' + line.content;
          } else {
            buffer = line.content;
          }
        } else {
          if (buffer) {
            source += 'buffer += ' + buffer + ';\n  ';
            buffer = undefined;
          }
          source += line + '\n  ';
        }
      }
      return source;
    },

    // [blockValue]
    //
    // On stack, before: hash, inverse, program, value
    // On stack, after: return value of blockHelperMissing
    //
    // The purpose of this opcode is to take a block of the form
    // `{{#foo}}...{{/foo}}`, resolve the value of `foo`, and
    // replace it on the stack with the result of properly
    // invoking blockHelperMissing.
    blockValue: function() {
      this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

      var params = ["depth0"];
      this.setupParams(0, params);

      this.replaceStack(function(current) {
        params.splice(1, 0, current);
        return "blockHelperMissing.call(" + params.join(", ") + ")";
      });
    },

    // [ambiguousBlockValue]
    //
    // On stack, before: hash, inverse, program, value
    // Compiler value, before: lastHelper=value of last found helper, if any
    // On stack, after, if no lastHelper: same as [blockValue]
    // On stack, after, if lastHelper: value
    ambiguousBlockValue: function() {
      this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

      var params = ["depth0"];
      this.setupParams(0, params);

      var current = this.topStack();
      params.splice(1, 0, current);

      // Use the options value generated from the invocation
      params[params.length-1] = 'options';

      this.pushSource("if (!" + this.lastHelper + ") { " + current + " = blockHelperMissing.call(" + params.join(", ") + "); }");
    },

    // [appendContent]
    //
    // On stack, before: ...
    // On stack, after: ...
    //
    // Appends the string value of `content` to the current buffer
    appendContent: function(content) {
      if (this.pendingContent) {
        content = this.pendingContent + content;
      }
      if (this.stripNext) {
        content = content.replace(/^\s+/, '');
      }

      this.pendingContent = content;
    },

    // [strip]
    //
    // On stack, before: ...
    // On stack, after: ...
    //
    // Removes any trailing whitespace from the prior content node and flags
    // the next operation for stripping if it is a content node.
    strip: function() {
      if (this.pendingContent) {
        this.pendingContent = this.pendingContent.replace(/\s+$/, '');
      }
      this.stripNext = 'strip';
    },

    // [append]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Coerces `value` to a String and appends it to the current buffer.
    //
    // If `value` is truthy, or 0, it is coerced into a string and appended
    // Otherwise, the empty string is appended
    append: function() {
      // Force anything that is inlined onto the stack so we don't have duplication
      // when we examine local
      this.flushInline();
      var local = this.popStack();
      this.pushSource("if(" + local + " || " + local + " === 0) { " + this.appendToBuffer(local) + " }");
      if (this.environment.isSimple) {
        this.pushSource("else { " + this.appendToBuffer("''") + " }");
      }
    },

    // [appendEscaped]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Escape `value` and append it to the buffer
    appendEscaped: function() {
      this.context.aliases.escapeExpression = 'this.escapeExpression';

      this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"));
    },

    // [getContext]
    //
    // On stack, before: ...
    // On stack, after: ...
    // Compiler value, after: lastContext=depth
    //
    // Set the value of the `lastContext` compiler value to the depth
    getContext: function(depth) {
      if(this.lastContext !== depth) {
        this.lastContext = depth;
      }
    },

    // [lookupOnContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext[name], ...
    //
    // Looks up the value of `name` on the current context and pushes
    // it onto the stack.
    lookupOnContext: function(name) {
      this.push(this.nameLookup('depth' + this.lastContext, name, 'context'));
    },

    // [pushContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext, ...
    //
    // Pushes the value of the current context onto the stack.
    pushContext: function() {
      this.pushStackLiteral('depth' + this.lastContext);
    },

    // [resolvePossibleLambda]
    //
    // On stack, before: value, ...
    // On stack, after: resolved value, ...
    //
    // If the `value` is a lambda, replace it on the stack by
    // the return value of the lambda
    resolvePossibleLambda: function() {
      this.context.aliases.functionType = '"function"';

      this.replaceStack(function(current) {
        return "typeof " + current + " === functionType ? " + current + ".apply(depth0) : " + current;
      });
    },

    // [lookup]
    //
    // On stack, before: value, ...
    // On stack, after: value[name], ...
    //
    // Replace the value on the stack with the result of looking
    // up `name` on `value`
    lookup: function(name) {
      this.replaceStack(function(current) {
        return current + " == null || " + current + " === false ? " + current + " : " + this.nameLookup(current, name, 'context');
      });
    },

    // [lookupData]
    //
    // On stack, before: ...
    // On stack, after: data, ...
    //
    // Push the data lookup operator
    lookupData: function() {
      this.push('data');
    },

    // [pushStringParam]
    //
    // On stack, before: ...
    // On stack, after: string, currentContext, ...
    //
    // This opcode is designed for use in string mode, which
    // provides the string value of a parameter along with its
    // depth rather than resolving it immediately.
    pushStringParam: function(string, type) {
      this.pushStackLiteral('depth' + this.lastContext);

      this.pushString(type);

      if (typeof string === 'string') {
        this.pushString(string);
      } else {
        this.pushStackLiteral(string);
      }
    },

    emptyHash: function() {
      this.pushStackLiteral('{}');

      if (this.options.stringParams) {
        this.register('hashTypes', '{}');
        this.register('hashContexts', '{}');
      }
    },
    pushHash: function() {
      this.hash = {values: [], types: [], contexts: []};
    },
    popHash: function() {
      var hash = this.hash;
      this.hash = undefined;

      if (this.options.stringParams) {
        this.register('hashContexts', '{' + hash.contexts.join(',') + '}');
        this.register('hashTypes', '{' + hash.types.join(',') + '}');
      }
      this.push('{\n    ' + hash.values.join(',\n    ') + '\n  }');
    },

    // [pushString]
    //
    // On stack, before: ...
    // On stack, after: quotedString(string), ...
    //
    // Push a quoted version of `string` onto the stack
    pushString: function(string) {
      this.pushStackLiteral(this.quotedString(string));
    },

    // [push]
    //
    // On stack, before: ...
    // On stack, after: expr, ...
    //
    // Push an expression onto the stack
    push: function(expr) {
      this.inlineStack.push(expr);
      return expr;
    },

    // [pushLiteral]
    //
    // On stack, before: ...
    // On stack, after: value, ...
    //
    // Pushes a value onto the stack. This operation prevents
    // the compiler from creating a temporary variable to hold
    // it.
    pushLiteral: function(value) {
      this.pushStackLiteral(value);
    },

    // [pushProgram]
    //
    // On stack, before: ...
    // On stack, after: program(guid), ...
    //
    // Push a program expression onto the stack. This takes
    // a compile-time guid and converts it into a runtime-accessible
    // expression.
    pushProgram: function(guid) {
      if (guid != null) {
        this.pushStackLiteral(this.programExpression(guid));
      } else {
        this.pushStackLiteral(null);
      }
    },

    // [invokeHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // Pops off the helper's parameters, invokes the helper,
    // and pushes the helper's return value onto the stack.
    //
    // If the helper is not found, `helperMissing` is called.
    invokeHelper: function(paramSize, name) {
      this.context.aliases.helperMissing = 'helpers.helperMissing';

      var helper = this.lastHelper = this.setupHelper(paramSize, name, true);
      var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');

      this.push(helper.name + ' || ' + nonHelper);
      this.replaceStack(function(name) {
        return name + ' ? ' + name + '.call(' +
            helper.callParams + ") " + ": helperMissing.call(" +
            helper.helperMissingParams + ")";
      });
    },

    // [invokeKnownHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // This operation is used when the helper is known to exist,
    // so a `helperMissing` fallback is not required.
    invokeKnownHelper: function(paramSize, name) {
      var helper = this.setupHelper(paramSize, name);
      this.push(helper.name + ".call(" + helper.callParams + ")");
    },

    // [invokeAmbiguous]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of disambiguation
    //
    // This operation is used when an expression like `{{foo}}`
    // is provided, but we don't know at compile-time whether it
    // is a helper or a path.
    //
    // This operation emits more code than the other options,
    // and can be avoided by passing the `knownHelpers` and
    // `knownHelpersOnly` flags at compile-time.
    invokeAmbiguous: function(name, helperCall) {
      this.context.aliases.functionType = '"function"';

      this.pushStackLiteral('{}');    // Hash value
      var helper = this.setupHelper(0, name, helperCall);

      var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

      var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');
      var nextStack = this.nextStack();

      this.pushSource('if (' + nextStack + ' = ' + helperName + ') { ' + nextStack + ' = ' + nextStack + '.call(' + helper.callParams + '); }');
      this.pushSource('else { ' + nextStack + ' = ' + nonHelper + '; ' + nextStack + ' = typeof ' + nextStack + ' === functionType ? ' + nextStack + '.call(' + helper.callParams + ') : ' + nextStack + '; }');
    },

    // [invokePartial]
    //
    // On stack, before: context, ...
    // On stack after: result of partial invocation
    //
    // This operation pops off a context, invokes a partial with that context,
    // and pushes the result of the invocation back.
    invokePartial: function(name) {
      var params = [this.nameLookup('partials', name, 'partial'), "'" + name + "'", this.popStack(), "helpers", "partials"];

      if (this.options.data) {
        params.push("data");
      }

      this.context.aliases.self = "this";
      this.push("self.invokePartial(" + params.join(", ") + ")");
    },

    // [assignToHash]
    //
    // On stack, before: value, hash, ...
    // On stack, after: hash, ...
    //
    // Pops a value and hash off the stack, assigns `hash[key] = value`
    // and pushes the hash back onto the stack.
    assignToHash: function(key) {
      var value = this.popStack(),
          context,
          type;

      if (this.options.stringParams) {
        type = this.popStack();
        context = this.popStack();
      }

      var hash = this.hash;
      if (context) {
        hash.contexts.push("'" + key + "': " + context);
      }
      if (type) {
        hash.types.push("'" + key + "': " + type);
      }
      hash.values.push("'" + key + "': (" + value + ")");
    },

    // HELPERS

    compiler: JavaScriptCompiler,

    compileChildren: function(environment, options) {
      var children = environment.children, child, compiler;

      for(var i=0, l=children.length; i<l; i++) {
        child = children[i];
        compiler = new this.compiler();

        var index = this.matchExistingProgram(child);

        if (index == null) {
          this.context.programs.push('');     // Placeholder to prevent name conflicts for nested children
          index = this.context.programs.length;
          child.index = index;
          child.name = 'program' + index;
          this.context.programs[index] = compiler.compile(child, options, this.context);
          this.context.environments[index] = child;
        } else {
          child.index = index;
          child.name = 'program' + index;
        }
      }
    },
    matchExistingProgram: function(child) {
      for (var i = 0, len = this.context.environments.length; i < len; i++) {
        var environment = this.context.environments[i];
        if (environment && environment.equals(child)) {
          return i;
        }
      }
    },

    programExpression: function(guid) {
      this.context.aliases.self = "this";

      if(guid == null) {
        return "self.noop";
      }

      var child = this.environment.children[guid],
          depths = child.depths.list, depth;

      var programParams = [child.index, child.name, "data"];

      for(var i=0, l = depths.length; i<l; i++) {
        depth = depths[i];

        if(depth === 1) { programParams.push("depth0"); }
        else { programParams.push("depth" + (depth - 1)); }
      }

      return (depths.length === 0 ? "self.program(" : "self.programWithDepth(") + programParams.join(", ") + ")";
    },

    register: function(name, val) {
      this.useRegister(name);
      this.pushSource(name + " = " + val + ";");
    },

    useRegister: function(name) {
      if(!this.registers[name]) {
        this.registers[name] = true;
        this.registers.list.push(name);
      }
    },

    pushStackLiteral: function(item) {
      return this.push(new Literal(item));
    },

    pushSource: function(source) {
      if (this.pendingContent) {
        this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));
        this.pendingContent = undefined;
      }

      if (source) {
        this.source.push(source);
      }
    },

    pushStack: function(item) {
      this.flushInline();

      var stack = this.incrStack();
      if (item) {
        this.pushSource(stack + " = " + item + ";");
      }
      this.compileStack.push(stack);
      return stack;
    },

    replaceStack: function(callback) {
      var prefix = '',
          inline = this.isInline(),
          stack;

      // If we are currently inline then we want to merge the inline statement into the
      // replacement statement via ','
      if (inline) {
        var top = this.popStack(true);

        if (top instanceof Literal) {
          // Literals do not need to be inlined
          stack = top.value;
        } else {
          // Get or create the current stack name for use by the inline
          var name = this.stackSlot ? this.topStackName() : this.incrStack();

          prefix = '(' + this.push(name) + ' = ' + top + '),';
          stack = this.topStack();
        }
      } else {
        stack = this.topStack();
      }

      var item = callback.call(this, stack);

      if (inline) {
        if (this.inlineStack.length || this.compileStack.length) {
          this.popStack();
        }
        this.push('(' + prefix + item + ')');
      } else {
        // Prevent modification of the context depth variable. Through replaceStack
        if (!/^stack/.test(stack)) {
          stack = this.nextStack();
        }

        this.pushSource(stack + " = (" + prefix + item + ");");
      }
      return stack;
    },

    nextStack: function() {
      return this.pushStack();
    },

    incrStack: function() {
      this.stackSlot++;
      if(this.stackSlot > this.stackVars.length) { this.stackVars.push("stack" + this.stackSlot); }
      return this.topStackName();
    },
    topStackName: function() {
      return "stack" + this.stackSlot;
    },
    flushInline: function() {
      var inlineStack = this.inlineStack;
      if (inlineStack.length) {
        this.inlineStack = [];
        for (var i = 0, len = inlineStack.length; i < len; i++) {
          var entry = inlineStack[i];
          if (entry instanceof Literal) {
            this.compileStack.push(entry);
          } else {
            this.pushStack(entry);
          }
        }
      }
    },
    isInline: function() {
      return this.inlineStack.length;
    },

    popStack: function(wrapped) {
      var inline = this.isInline(),
          item = (inline ? this.inlineStack : this.compileStack).pop();

      if (!wrapped && (item instanceof Literal)) {
        return item.value;
      } else {
        if (!inline) {
          this.stackSlot--;
        }
        return item;
      }
    },

    topStack: function(wrapped) {
      var stack = (this.isInline() ? this.inlineStack : this.compileStack),
          item = stack[stack.length - 1];

      if (!wrapped && (item instanceof Literal)) {
        return item.value;
      } else {
        return item;
      }
    },

    quotedString: function(str) {
      return '"' + str
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/\u2028/g, '\\u2028')   // Per Ecma-262 7.3 + 7.8.4
        .replace(/\u2029/g, '\\u2029') + '"';
    },

    setupHelper: function(paramSize, name, missingParams) {
      var params = [];
      this.setupParams(paramSize, params, missingParams);
      var foundHelper = this.nameLookup('helpers', name, 'helper');

      return {
        params: params,
        name: foundHelper,
        callParams: ["depth0"].concat(params).join(", "),
        helperMissingParams: missingParams && ["depth0", this.quotedString(name)].concat(params).join(", ")
      };
    },

    // the params and contexts arguments are passed in arrays
    // to fill in
    setupParams: function(paramSize, params, useRegister) {
      var options = [], contexts = [], types = [], param, inverse, program;

      options.push("hash:" + this.popStack());

      inverse = this.popStack();
      program = this.popStack();

      // Avoid setting fn and inverse if neither are set. This allows
      // helpers to do a check for `if (options.fn)`
      if (program || inverse) {
        if (!program) {
          this.context.aliases.self = "this";
          program = "self.noop";
        }

        if (!inverse) {
         this.context.aliases.self = "this";
          inverse = "self.noop";
        }

        options.push("inverse:" + inverse);
        options.push("fn:" + program);
      }

      for(var i=0; i<paramSize; i++) {
        param = this.popStack();
        params.push(param);

        if(this.options.stringParams) {
          types.push(this.popStack());
          contexts.push(this.popStack());
        }
      }

      if (this.options.stringParams) {
        options.push("contexts:[" + contexts.join(",") + "]");
        options.push("types:[" + types.join(",") + "]");
        options.push("hashContexts:hashContexts");
        options.push("hashTypes:hashTypes");
      }

      if(this.options.data) {
        options.push("data:data");
      }

      options = "{" + options.join(",") + "}";
      if (useRegister) {
        this.register('options', options);
        params.push('options');
      } else {
        params.push(options);
      }
      return params.join(", ");
    }
  };

  var reservedWords = (
    "break else new var" +
    " case finally return void" +
    " catch for switch while" +
    " continue function this with" +
    " default if throw" +
    " delete in try" +
    " do instanceof typeof" +
    " abstract enum int short" +
    " boolean export interface static" +
    " byte extends long super" +
    " char final native synchronized" +
    " class float package throws" +
    " const goto private transient" +
    " debugger implements protected volatile" +
    " double import public let yield"
  ).split(" ");

  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

  for(var i=0, l=reservedWords.length; i<l; i++) {
    compilerWords[reservedWords[i]] = true;
  }

  JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
    if(!JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(name)) {
      return true;
    }
    return false;
  };

  __exports__ = JavaScriptCompiler;
  return __exports__;
})(__module2__);

// handlebars/compiler/compiler.js
var __module10__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__) {
  "use strict";
  var __exports__ = {};
  var Exception = __dependency1__;
  var parse = __dependency2__.parse;
  var JavaScriptCompiler = __dependency3__;
  var AST = __dependency4__;

  function Compiler() {}

  __exports__.Compiler = Compiler;// the foundHelper register will disambiguate helper lookup from finding a
  // function in a context. This is necessary for mustache compatibility, which
  // requires that context functions in blocks are evaluated by blockHelperMissing,
  // and then proceed as if the resulting value was provided to blockHelperMissing.

  Compiler.prototype = {
    compiler: Compiler,

    disassemble: function() {
      var opcodes = this.opcodes, opcode, out = [], params, param;

      for (var i=0, l=opcodes.length; i<l; i++) {
        opcode = opcodes[i];

        if (opcode.opcode === 'DECLARE') {
          out.push("DECLARE " + opcode.name + "=" + opcode.value);
        } else {
          params = [];
          for (var j=0; j<opcode.args.length; j++) {
            param = opcode.args[j];
            if (typeof param === "string") {
              param = "\"" + param.replace("\n", "\\n") + "\"";
            }
            params.push(param);
          }
          out.push(opcode.opcode + " " + params.join(" "));
        }
      }

      return out.join("\n");
    },

    equals: function(other) {
      var len = this.opcodes.length;
      if (other.opcodes.length !== len) {
        return false;
      }

      for (var i = 0; i < len; i++) {
        var opcode = this.opcodes[i],
            otherOpcode = other.opcodes[i];
        if (opcode.opcode !== otherOpcode.opcode || opcode.args.length !== otherOpcode.args.length) {
          return false;
        }
        for (var j = 0; j < opcode.args.length; j++) {
          if (opcode.args[j] !== otherOpcode.args[j]) {
            return false;
          }
        }
      }

      len = this.children.length;
      if (other.children.length !== len) {
        return false;
      }
      for (i = 0; i < len; i++) {
        if (!this.children[i].equals(other.children[i])) {
          return false;
        }
      }

      return true;
    },

    guid: 0,

    compile: function(program, options) {
      this.opcodes = [];
      this.children = [];
      this.depths = {list: []};
      this.options = options;

      // These changes will propagate to the other compiler components
      var knownHelpers = this.options.knownHelpers;
      this.options.knownHelpers = {
        'helperMissing': true,
        'blockHelperMissing': true,
        'each': true,
        'if': true,
        'unless': true,
        'with': true,
        'log': true
      };
      if (knownHelpers) {
        for (var name in knownHelpers) {
          this.options.knownHelpers[name] = knownHelpers[name];
        }
      }

      return this.accept(program);
    },

    accept: function(node) {
      var strip = node.strip || {},
          ret;
      if (strip.left) {
        this.opcode('strip');
      }

      ret = this[node.type](node);

      if (strip.right) {
        this.opcode('strip');
      }

      return ret;
    },

    program: function(program) {
      var statements = program.statements;

      for(var i=0, l=statements.length; i<l; i++) {
        this.accept(statements[i]);
      }
      this.isSimple = l === 1;

      this.depths.list = this.depths.list.sort(function(a, b) {
        return a - b;
      });

      return this;
    },

    compileProgram: function(program) {
      var result = new this.compiler().compile(program, this.options);
      var guid = this.guid++, depth;

      this.usePartial = this.usePartial || result.usePartial;

      this.children[guid] = result;

      for(var i=0, l=result.depths.list.length; i<l; i++) {
        depth = result.depths.list[i];

        if(depth < 2) { continue; }
        else { this.addDepth(depth - 1); }
      }

      return guid;
    },

    block: function(block) {
      var mustache = block.mustache,
          program = block.program,
          inverse = block.inverse;

      if (program) {
        program = this.compileProgram(program);
      }

      if (inverse) {
        inverse = this.compileProgram(inverse);
      }

      var type = this.classifyMustache(mustache);

      if (type === "helper") {
        this.helperMustache(mustache, program, inverse);
      } else if (type === "simple") {
        this.simpleMustache(mustache);

        // now that the simple mustache is resolved, we need to
        // evaluate it by executing `blockHelperMissing`
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('emptyHash');
        this.opcode('blockValue');
      } else {
        this.ambiguousMustache(mustache, program, inverse);

        // now that the simple mustache is resolved, we need to
        // evaluate it by executing `blockHelperMissing`
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('emptyHash');
        this.opcode('ambiguousBlockValue');
      }

      this.opcode('append');
    },

    hash: function(hash) {
      var pairs = hash.pairs, pair, val;

      this.opcode('pushHash');

      for(var i=0, l=pairs.length; i<l; i++) {
        pair = pairs[i];
        val  = pair[1];

        if (this.options.stringParams) {
          if(val.depth) {
            this.addDepth(val.depth);
          }
          this.opcode('getContext', val.depth || 0);
          this.opcode('pushStringParam', val.stringModeValue, val.type);
        } else {
          this.accept(val);
        }

        this.opcode('assignToHash', pair[0]);
      }
      this.opcode('popHash');
    },

    partial: function(partial) {
      var partialName = partial.partialName;
      this.usePartial = true;

      if(partial.context) {
        this.ID(partial.context);
      } else {
        this.opcode('push', 'depth0');
      }

      this.opcode('invokePartial', partialName.name);
      this.opcode('append');
    },

    content: function(content) {
      this.opcode('appendContent', content.string);
    },

    mustache: function(mustache) {
      var options = this.options;
      var type = this.classifyMustache(mustache);

      if (type === "simple") {
        this.simpleMustache(mustache);
      } else if (type === "helper") {
        this.helperMustache(mustache);
      } else {
        this.ambiguousMustache(mustache);
      }

      if(mustache.escaped && !options.noEscape) {
        this.opcode('appendEscaped');
      } else {
        this.opcode('append');
      }
    },

    ambiguousMustache: function(mustache, program, inverse) {
      var id = mustache.id,
          name = id.parts[0],
          isBlock = program != null || inverse != null;

      this.opcode('getContext', id.depth);

      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);

      this.opcode('invokeAmbiguous', name, isBlock);
    },

    simpleMustache: function(mustache) {
      var id = mustache.id;

      if (id.type === 'DATA') {
        this.DATA(id);
      } else if (id.parts.length) {
        this.ID(id);
      } else {
        // Simplified ID for `this`
        this.addDepth(id.depth);
        this.opcode('getContext', id.depth);
        this.opcode('pushContext');
      }

      this.opcode('resolvePossibleLambda');
    },

    helperMustache: function(mustache, program, inverse) {
      var params = this.setupFullMustacheParams(mustache, program, inverse),
          name = mustache.id.parts[0];

      if (this.options.knownHelpers[name]) {
        this.opcode('invokeKnownHelper', params.length, name);
      } else if (this.options.knownHelpersOnly) {
        throw new Error("You specified knownHelpersOnly, but used the unknown helper " + name);
      } else {
        this.opcode('invokeHelper', params.length, name);
      }
    },

    ID: function(id) {
      this.addDepth(id.depth);
      this.opcode('getContext', id.depth);

      var name = id.parts[0];
      if (!name) {
        this.opcode('pushContext');
      } else {
        this.opcode('lookupOnContext', id.parts[0]);
      }

      for(var i=1, l=id.parts.length; i<l; i++) {
        this.opcode('lookup', id.parts[i]);
      }
    },

    DATA: function(data) {
      this.options.data = true;
      if (data.id.isScoped || data.id.depth) {
        throw new Exception('Scoped data references are not supported: ' + data.original);
      }

      this.opcode('lookupData');
      var parts = data.id.parts;
      for(var i=0, l=parts.length; i<l; i++) {
        this.opcode('lookup', parts[i]);
      }
    },

    STRING: function(string) {
      this.opcode('pushString', string.string);
    },

    INTEGER: function(integer) {
      this.opcode('pushLiteral', integer.integer);
    },

    BOOLEAN: function(bool) {
      this.opcode('pushLiteral', bool.bool);
    },

    comment: function() {},

    // HELPERS
    opcode: function(name) {
      this.opcodes.push({ opcode: name, args: [].slice.call(arguments, 1) });
    },

    declare: function(name, value) {
      this.opcodes.push({ opcode: 'DECLARE', name: name, value: value });
    },

    addDepth: function(depth) {
      if(isNaN(depth)) { throw new Error("EWOT"); }
      if(depth === 0) { return; }

      if(!this.depths[depth]) {
        this.depths[depth] = true;
        this.depths.list.push(depth);
      }
    },

    classifyMustache: function(mustache) {
      var isHelper   = mustache.isHelper;
      var isEligible = mustache.eligibleHelper;
      var options    = this.options;

      // if ambiguous, we can possibly resolve the ambiguity now
      if (isEligible && !isHelper) {
        var name = mustache.id.parts[0];

        if (options.knownHelpers[name]) {
          isHelper = true;
        } else if (options.knownHelpersOnly) {
          isEligible = false;
        }
      }

      if (isHelper) { return "helper"; }
      else if (isEligible) { return "ambiguous"; }
      else { return "simple"; }
    },

    pushParams: function(params) {
      var i = params.length, param;

      while(i--) {
        param = params[i];

        if(this.options.stringParams) {
          if(param.depth) {
            this.addDepth(param.depth);
          }

          this.opcode('getContext', param.depth || 0);
          this.opcode('pushStringParam', param.stringModeValue, param.type);
        } else {
          this[param.type](param);
        }
      }
    },

    setupMustacheParams: function(mustache) {
      var params = mustache.params;
      this.pushParams(params);

      if(mustache.hash) {
        this.hash(mustache.hash);
      } else {
        this.opcode('emptyHash');
      }

      return params;
    },

    // this will replace setupMustacheParams when we're done
    setupFullMustacheParams: function(mustache, program, inverse) {
      var params = mustache.params;
      this.pushParams(params);

      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);

      if(mustache.hash) {
        this.hash(mustache.hash);
      } else {
        this.opcode('emptyHash');
      }

      return params;
    }
  };

  function precompile(input, options) {
    if (input == null || (typeof input !== 'string' && input.constructor !== AST.ProgramNode)) {
      throw new Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
    }

    options = options || {};
    if (!('data' in options)) {
      options.data = true;
    }

    var ast = parse(input);
    var environment = new Compiler().compile(ast, options);
    return new JavaScriptCompiler().compile(environment, options);
  }

  __exports__.precompile = precompile;function compile(input, options, env) {
    if (input == null || (typeof input !== 'string' && input.constructor !== AST.ProgramNode)) {
      throw new Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
    }

    options = options || {};

    if (!('data' in options)) {
      options.data = true;
    }

    var compiled;

    function compileInput() {
      var ast = parse(input);
      var environment = new Compiler().compile(ast, options);
      var templateSpec = new JavaScriptCompiler().compile(environment, options, undefined, true);
      return env.template(templateSpec);
    }

    // Template is only compiled on first use and cached after that point.
    return function(context, options) {
      if (!compiled) {
        compiled = compileInput();
      }
      return compiled.call(this, context, options);
    };
  }

  __exports__.compile = compile;
  return __exports__;
})(__module5__, __module8__, __module11__, __module7__);

// handlebars.js
var __module0__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
  "use strict";
  var __exports__;
  var Handlebars = __dependency1__;

  // Compiler imports
  var AST = __dependency2__;
  var Parser = __dependency3__.parser;
  var parse = __dependency3__.parse;
  var Compiler = __dependency4__.Compiler;
  var compile = __dependency4__.compile;
  var precompile = __dependency4__.precompile;
  var JavaScriptCompiler = __dependency5__;

  var _create = Handlebars.create;
  var create = function() {
    var hb = _create();

    hb.compile = function(input, options) {
      return compile(input, options, hb);
    };
    hb.precompile = precompile;

    hb.AST = AST;
    hb.Compiler = Compiler;
    hb.JavaScriptCompiler = JavaScriptCompiler;
    hb.Parser = Parser;
    hb.parse = parse;

    return hb;
  };

  Handlebars = create();
  Handlebars.create = create;

  __exports__ = Handlebars;
  return __exports__;
})(__module1__, __module7__, __module8__, __module10__, __module11__);

  return __module0__;
})();

/* End handlebars-v1.1.2.js */

/* Start docookie.js */
/*\
|*|
|*|  :: cookies.js ::
|*|
|*|  A complete cookies reader/writer framework with full unicode support.
|*|
|*|  https://developer.mozilla.org/en-US/docs/DOM/document.cookie
|*|
|*|  This framework is released under the GNU Public License, version 3 or later.
|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|
|*|  Syntaxes:
|*|
|*|  * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
|*|  * docCookies.getItem(name)
|*|  * docCookies.removeItem(name[, path], domain)
|*|  * docCookies.hasItem(name)
|*|  * docCookies.keys()
|*|
\*/

var docCookie = {
  getItem: function (sKey) {
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
  },
  setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
    var sExpires = "";
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
          break;
        case String:
          sExpires = "; expires=" + vEnd;
          break;
        case Date:
          sExpires = "; expires=" + vEnd.toUTCString();
          break;
      }
    }
    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
    return true;
  },
  removeItem: function (sKey, sPath, sDomain) {
    if (!sKey || !this.hasItem(sKey)) { return false; }
    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + ( sDomain ? "; domain=" + sDomain : "") + ( sPath ? "; path=" + sPath : "");
    return true;
  },
  hasItem: function (sKey) {
    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
  },
  keys: /* optional method: you can safely remove it! */ function () {
    var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
    for (var nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
    return aKeys;
  }
};

/* End docookie.js */

/* Start jquery.notifybar.js */
jQuery.notifyBar = function(settings) {

    (function($) {

        var bar = notifyBarNS = {};
        notifyBarNS.shown = false;

        if( !settings) {
            settings = {};
        }
        // HTML inside bar
        notifyBarNS.html = settings.html || "Your message here";

        //How long bar will be delayed, doesn't count animation time.
        notifyBarNS.delay = settings.delay || 2000;

        //How long notifyBarNS bar will be slided up and down
        notifyBarNS.animationSpeed = settings.animationSpeed || 200;

        //Use own jquery object usually DIV, or use default
        notifyBarNS.jqObject = settings.jqObject;

        //Set up own class
        notifyBarNS.cls = settings.cls || "";

        //close button
        notifyBarNS.close = settings.close || false;

        if( notifyBarNS.jqObject) {
            bar = notifyBarNS.jqObject;
            notifyBarNS.html = bar.html();
        } else {
            bar = jQuery("<div></div>").addClass(
                "jquery-notify-bar").addClass(
                notifyBarNS.cls).attr(
                "id", "__notifyBar");
        }

        bar.html(notifyBarNS.html).hide();
        var id = bar.attr("id");
        switch (notifyBarNS.animationSpeed) {
            case "slow":
                asTime = 600;
                break;
            case "normal":
                asTime = 400;
                break;
            case "fast":
                asTime = 200;
                break;
            default:
                asTime = notifyBarNS.animationSpeed;
                break;
        }
        if( bar != 'object') {
            jQuery("body").prepend(bar);
        }

        // Style close button in CSS file
        if( notifyBarNS.close) {
            bar.append(jQuery("<a href='#' class='notify-bar-close'>Close [X]</a>"));
            jQuery(".notify-bar-close").click(function() {
                if( bar.attr("id") == "__notifyBar") {
                    jQuery("#" + id).slideUp(asTime, function() { jQuery("#" + id).remove(); });
                } else {
                    jQuery("#" + id).slideUp(asTime);
                }
                return false;
            });
        }

        // Check if we've got any visible bars and if we have, slide them up before showing the new one
        if($('.jquery-notify-bar:visible').length > 0) {
            $('.jquery-notify-bar:visible').stop().slideUp(asTime, function() {
                bar.stop().slideDown(asTime);
            });
        } else {
            bar.slideDown(asTime);
        }

        // Allow the user to click on the bar to close it
        bar.click(function() {
            $(this).slideUp(asTime);
        });

        // If taken from DOM dot not remove just hide
        if( bar.attr("id") == "__notifyBar") {
            setTimeout("jQuery('#" + id + "').stop().slideUp(" + asTime +", function() {jQuery('#" + id + "').remove()});", notifyBarNS.delay + asTime);
        } else {
            setTimeout("jQuery('#" + id + "').stop().slideUp(" + asTime +", function() {jQuery('#" + id + "')});", notifyBarNS.delay + asTime);
        }

    })(jQuery); };
/* End jquery.notifybar.js */

/* Start global.js */
function LocationDropdown(e) {
    this.LocationId = e;
    this.placeholder = this.LocationId.children().children("span");
    this.opts = this.LocationId.find(".uiv2-location-dropdown ul > li");
    this.val = "";
    this.index = -1;
    this.initEvents();
}

LocationDropdown.prototype = {
    initEvents: function () {
        var e = this;
        $(".uiv2-loc-wrapper").on("click", function (e) {
            if($("#uiv2-location-id").hasClass("active")){
               $("#uiv2-location-id").removeClass("active");
            }
            else{
               $("#uiv2-location-id").addClass("active");
               compute_top_menu_css();
            }
            resetCities();
            return false;
        });
    },
    getValue: function () {
        return this.val
    },
    getIndex: function () {
        return this.index
    }
};


function compute_top_menu_css() {
    wid = $("#uiv2-location-id .uiv2-loc-wrapper").width();
    $("#uiv2-location-id .uiv2-whiteshade").css("width", wid + 20);
    if (wid > 250) {
        $("#uiv2-location-id .uiv2-location-dropdown").css("width", wid + 20)
    }
    $(".uiv2-tele").css("margin-left", wid+30);
}

function resetCities(){
    cities = []
    $("#uiv2-change li").each(function(){
        cities.push($(this).text());
    });
    $('.uiv2-location-multicity-input').val('');
    for(var i=0; i< cities.length ; i++){
        //show two cities
        city_name = cities[i].toLowerCase();
        if(i > 1){
            $("#"+city_name+"_city").hide();
        }
        else{
            $("#"+city_name+"_city").show();
        }
    }
}

$(function () {

    var e = new LocationDropdown($("#uiv2-location-id"));
    $(".uiv2-remove-row").click(function () {
        $(this).closest("div.uiv2-row").slideUp(300, function () {
            $(this).remove()
        })
    });
    //$(".uiv2-top-close-icon").click(function () {
    //    $(this).closest(".uiv2-didyouforgot-box").fadeOut(300, function () {
    //        $(this).remove()
    //    })
    //});

    //$(".uiv2-tab-brands-cookup a").click(function () {
    //    $(this).closest(".uiv2-tab-brands-cookup").fadeOut(300, function () {
    //        $(this).remove()
    //    })
    //});

    $(".uiv2-myshoping-minus").click(function () {
        if ($(this).hasClass("uiv2-plus-open")) {
            $(".uiv2-my-shoppinglist-wrapper").slideDown(300);
            $(this).removeClass("uiv2-plus-open")
        } else {
            $(".uiv2-my-shoppinglist-wrapper").slideUp(300);
            $(this).addClass("uiv2-plus-open")
        }
    })
});
$(function () {
    //$("li.uiv2-submenu").hover(function () {
    //    $(".uiv2-fruits-vegetables-bg").addClass("active")
    //}, function () {
    //    $(".uiv2-fruits-vegetables-bg").removeClass("active")
    //});
    var background_shade = $(".backgroundShade");
    var e = $(document).width();
    var t = $(document).height();
    background_shade.height(t);
    background_shade.width(e);
    $(".uiv2-why-location").click(function () {
        $(".uiv2-background-shade, .uiv2-location-popup").fadeIn("slow")
    });
    $(".uiv2-popup-close").click(function () {
        $(".uiv2-background-shade, .uiv2-location-popup").fadeOut("slow")
    });
    //$(".uiv2-closebtn").click(function () {
    //    $(".uiv2-would-you-like-banner").animate({
    //        opacity: 0,
    //        height: 0
    //    }, 500, function () {
    //        $(".uiv2-would-you-like-banner").hide()
    //    })
    //});
    //var supermaket_readmore = $(".uiv2-supermarket-readmore");
    //supermaket_readmore.click(function () {
    //    if (supermaket_readmore.css("display") == "none") {
    //        $(this).text("less");
    //        supermaket_readmore.slideDown()
    //    } else {
    //        $(this).text("read more >");
    //        supermaket_readmore.slideUp()
    //    }
    //});
    $("input, textarea").placeholder()
});
//$(function () {
//    jQuery(".uiv2-title-tooltip a").each(function () {
//        if (jQuery(this).text().length > 40) jQuery(this).text(jQuery(this).text().substr(0, 40) + " ...")
//    })
//})
/* End global.js */



/* Start jquery.highlight.js */
///*
// * jQuery Highlight plugin
// *
// * Based on highlight v3 by Johann Burkard
// * http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html
// *
// * Code a little bit refactored and cleaned (in my humble opinion).
// * Most important changes:
// *  - has an option to highlight only entire words (wordsOnly - false by default),
// *  - has an option to be case sensitive (caseSensitive - false by default)
// *  - highlight element tag and class names can be specified in options
// *
// * Usage:
// *   // wrap every occurrance of text 'lorem' in content
// *   // with <span class='highlight'> (default options)
// *   $('#content').highlight('lorem');
// *
// *   // search for and highlight more terms at once
// *   // so you can save some time on traversing DOM
// *   $('#content').highlight(['lorem', 'ipsum']);
// *   $('#content').highlight('lorem ipsum');
// *
// *   // search only for entire word 'lorem'
// *   $('#content').highlight('lorem', { wordsOnly: true });
// *
// *   // don't ignore case during search of term 'lorem'
// *   $('#content').highlight('lorem', { caseSensitive: true });
// *
// *   // wrap every occurrance of term 'ipsum' in content
// *   // with <em class='important'>
// *   $('#content').highlight('ipsum', { element: 'em', className: 'important' });
// *
// *   // remove default highlight
// *   $('#content').unhighlight();
// *
// *   // remove custom highlight
// *   $('#content').unhighlight({ element: 'em', className: 'important' });
// *
// *
// * Copyright (c) 2009 Bartek Szopka
// *
// * Licensed under MIT license.
// *
// */
//
//jQuery.extend({
//    highlight: function (node, re, nodeName, className) {
//        if (node.nodeType === 3) {
//            var match = node.data.match(re);
//            if (match) {
//                var highlight = document.createElement(nodeName || 'span');
//                highlight.className = className || 'highlight';
//                var wordNode = node.splitText(match.index);
//                wordNode.splitText(match[0].length);
//                var wordClone = wordNode.cloneNode(true);
//                highlight.appendChild(wordClone);
//                wordNode.parentNode.replaceChild(highlight, wordNode);
//                return 1; //skip added node in parent
//            }
//        } else if ((node.nodeType === 1 && node.childNodes) && // only element nodes that have children
//                !/(script|style)/i.test(node.tagName) && // ignore script and style nodes
//                !(node.tagName === nodeName.toUpperCase() && node.className === className)) { // skip if already highlighted
//            for (var i = 0; i < node.childNodes.length; i++) {
//                i += jQuery.highlight(node.childNodes[i], re, nodeName, className);
//            }
//        }
//        return 0;
//    }
//});
//
//jQuery.fn.unhighlight = function (options) {
//    var settings = { className: 'highlight', element: 'span' };
//    jQuery.extend(settings, options);
//
//    return this.find(settings.element + "." + settings.className).each(function () {
//        var parent = this.parentNode;
//        parent.replaceChild(this.firstChild, this);
//        parent.normalize();
//    }).end();
//};
//
//jQuery.fn.highlight = function (words, options) {
//    var settings = { className: 'highlight', element: 'span', caseSensitive: false, wordsOnly: false };
//    jQuery.extend(settings, options);
//
//    if (words.constructor === String) {
//        words = [words];
//    }
//    words = jQuery.grep(words, function(word, i){
//      return word != '';
//    });
//    words = jQuery.map(words, function(word, i) {
//      return word.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
//    });
//    if (words.length == 0) { return this; };
//
//    var flag = settings.caseSensitive ? "" : "i";
//    var pattern = "(" + words.join("|") + ")";
//    if (settings.wordsOnly) {
//        pattern = "\\b" + pattern + "\\b";
//    }
//    var re = new RegExp(pattern, flag);
//
//    return this.each(function () {
//        jQuery.highlight(this, re, settings.element, settings.className);
//    });
//};
//
///* End jquery.hightlight.js */

/* Start jquery.typewatch.js */
/*
*	TypeWatch 2.2
*
*	Examples/Docs: github.com/dennyferra/TypeWatch
*
*  Copyright(c) 2013
*	Denny Ferrassoli - dennyferra.com
*   Charles Christolini
*
*  Dual licensed under the MIT and GPL licenses:
*  http://www.opensource.org/licenses/mit-license.php
*  http://www.gnu.org/licenses/gpl.html
*/

(function(jQuery) {
	jQuery.fn.typeWatch = function(o) {
		// The default input types that are supported
		var _supportedInputTypes =
			['TEXT', 'TEXTAREA', 'PASSWORD', 'TEL', 'SEARCH', 'URL', 'EMAIL', 'DATETIME', 'DATE', 'MONTH', 'WEEK', 'TIME', 'DATETIME-LOCAL', 'NUMBER', 'RANGE'];

		// Options
		var options = jQuery.extend({
			wait: 750,
			callback: function() { },
			highlight: true,
			captureLength: 2,
			inputTypes: _supportedInputTypes
		}, o);

		function checkElement(timer, override) {
			var value = jQuery(timer.el).val();

			// Fire if text >= options.captureLength AND text != saved text OR if override AND text >= options.captureLength
			if ((value.length >= options.captureLength && value.toUpperCase() != timer.text)
				|| (override && value.length >= options.captureLength))
			{
				timer.text = value.toUpperCase();
				timer.cb.call(timer.el, value);
			}
		};

		function watchElement(elem) {
			var elementType = elem.type.toUpperCase();
			if (jQuery.inArray(elementType, options.inputTypes) >= 0) {

				// Allocate timer element
				var timer = {
					timer: null,
					text: jQuery(elem).val().toUpperCase(),
					cb: options.callback,
					el: elem,
					wait: options.wait
				};

				// Set focus action (highlight)
				if (options.highlight) {
					jQuery(elem).focus(
						function() {
							this.select();
						});
				}

				// Key watcher / clear and reset the timer
				var startWatch = function(evt) {
					var timerWait = timer.wait;
					var overrideBool = false;
					var evtElementType = this.type.toUpperCase();

					// If enter key is pressed and not a TEXTAREA and matched inputTypes
					if (typeof evt.keyCode != 'undefined' && evt.keyCode == 13 && evtElementType != 'TEXTAREA' && jQuery.inArray(evtElementType, options.inputTypes) >= 0) {
						timerWait = 1;
						overrideBool = true;
					}

					var timerCallbackFx = function() {
						checkElement(timer, overrideBool)
					}

					// Clear timer
					clearTimeout(timer.timer);
					timer.timer = setTimeout(timerCallbackFx, timerWait);
				};

				jQuery(elem).on('keydown paste cut input', startWatch);
			}
		};

		// Watch Each Element
		return this.each(function() {
			watchElement(this);
		});

	};
})(jQuery);

/* End jquery.typewatch.js */

/* Start uiv2.js */

Number.prototype.formatMoney = function(decPlaces, thouSeparator, decSeparator) {
    var n = this,
    decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
    decSeparator = decSeparator == undefined ? "." : decSeparator,
    thouSeparator = thouSeparator == undefined ? "," : thouSeparator,
    sign = n < 0 ? "-" : "",
    i = parseInt(n = Math.abs(+n || 0).toFixed(decPlaces)) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;
    return sign + (j ? i.substr(0, j) + thouSeparator : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thouSeparator) + (decPlaces ? decSeparator + Math.abs(n - i).toFixed(decPlaces).slice(2) : "");
};
/* Globals */
var delivery_slots_data = null;
var auto_complete_areas = [];
var main_menu_clicked = false;


var QueryString = function () {
  // This function is anonymous, is executed immediately and
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    	// If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = pair[1];
    	// If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]], pair[1] ];
      query_string[pair[0]] = arr;
    	// If third or later entry with this name
    } else {
      query_string[pair[0]].push(pair[1]);
    }
  }
    return query_string;
} ();

function init_autocomplete_areas(areas){
    auto_complete_areas = areas;
}

function init_newaddress_autocomplete(){

    var contact_area =  $('#id_contact_area');

    area_autocomplete = contact_area.autocomplete({
        source: function (request, response) {
            var matches = $.map(auto_complete_areas, function (tag) {
                if (tag.toUpperCase().indexOf(request.term.toUpperCase()) === 0) {
                    return tag;
                }
            });
            response(matches);
        }
    });

    contact_area.focusout(function () {
        var area = $('#id_contact_area').val();
        if (area != "") {
            $.ajax({
                url: '/member/get-pincode/?area=' + area,
                type: 'get',
                dataType: 'json',
                success: function (data) {
                    $('#id_contact_zipcode').val(data['pincode']);
                }
            });
        }
    });

}

function init_dropaddress_autocomplete(){

    var contact_area =  $('#uiv2-drop-area');

    area_drop_autocomplete = contact_area.autocomplete({
        source: function (request, response) {
            var matches = $.map(auto_complete_areas, function (tag) {
                if (tag.toUpperCase().indexOf(request.term.toUpperCase()) === 0) {
                    return tag;
                }
            });
            response(matches);
        }
    });
}

function uiv2_hide_popup(content_id){
    var popup = $('#'+content_id);
    var background_shade = $('.uiv2-background-shade');
    popup.fadeOut('slow');
    background_shade.fadeOut('slow', function () {
        if (content_id.indexOf("shipment_products") == 0) {
            popup.empty();
        }
    });
    $('.uiv2-location').show();
    add_address_details = $("#add_address_detail").val();
    if(add_address_details == 1){
        reset_address_form();
    }
}

function init_edit_address_submit(){
      $('#frmEditAddress').submit(function() { // catch the form's submit event
            $('.uiv2-example-r').html();
            $.ajax({ // create an AJAX call...
                data: $(this).serialize(), // get the form data
                type: $(this).attr('method'), // GET or POST
                url: $(this).attr('action'), // the file to call
                dataType: 'json',
                success: function(response) { // on success..
                    if (response['success'] == true) {
                        $('.uiv2-popup').hide();
                        $('#shadow-mask').hide();
                        uiv2_hide_popup('uiv2-edit-address-form');
                        $.ajax({
                            url: '/member/get-all-addresses/',
                            type: 'get',
                            data: {},
                            success: function(resp){
                                $('#uiv2-address-book').html(resp.addresses);
                            }
                        })
                    } else {
                        var errors = response['errors'];
                        var memberaddress_id = response['memberaddress_id'];
                        for (error in errors) {
                            $('#edit_'+memberaddress_id+'_error_'+error).html(errors[error]);
                        }
                    }
                },
                error: function(e, x, r) { // on error..
                    $('.uiv2-address-error').html("An error occurred. Please try again."); // update the DIV
                }
            });
            return false;
      });
}

function refresh_addresses() {
    var type = $("#uiv2-dispatch-options input[type='radio']:checked").val();
    var address = $('#uiv2-checkout-delivery-address');
    if (type == "1") {
        var address_id = $('#uiv2-default-address').attr("value");
        $.ajax({
            url: '/member/get-drop-addresses-address/',
            type: 'post',
            data: {'address_id': address_id},
            success: function(resp){
                address.html(resp);
                address.find('li').first().click();
                address_id = $('#uiv2-default-address').attr("value");
                var evoucher_credit = $('#evoucher_credit').val()
                if (!evoucher_credit) {
                    evoucher_credit = '0.00'
                }
                update_payment_details(evoucher_credit,address_id);
            }
        });
    } else if (type == "2") {
        var area = $('#uiv2-drop-area').val();
        $.ajax({
            url: '/member/get-drop-addresses-area/',
            type: 'post',
            data: {'area':area},
            success: function(resp){
                address.html(resp);
                address.find('li').first().click();
                address_id = $('#uiv2-default-address').attr("value");
                var evoucher_credit = $('#evoucher_credit').val()
                if (!evoucher_credit) {
                    evoucher_credit = '0.00'
                }
                update_payment_details(evoucher_credit,address_id);
            }
        });
    } else {
        $.ajax({
            url: '/member/get-addresses/',
            type: 'get',
            data: {"apply_selected_order": 0},
            success: function(resp){
                address.html(resp);
                address.find('li').first().click();
                address_id = $('#uiv2-default-address').attr("value");
                var evoucher_credit = $('#evoucher_credit').val()
                if (!evoucher_credit) {
                    evoucher_credit = '0.00'
                }
                update_payment_details(evoucher_credit,address_id);
            }
        });
    }
}

/* End uiv.js */

/* Globals */
var autosearch_template = "";
var cartitems_template = "";
var max_qty = 25;
var static_url = "";
var last_add_prod = null;
var csrf = "";
var autosearch_results = 0;
var AUTO_SEARCH_LIMIT = 20;
var num_items_in_basket = 0;
var ganalytics = false;
var bb_analytics = false;
var cart_changed = true;
var shoppinglist_click_state = false;
var current = null;
var shoppinglist_create_state = false;
var shoppinglist_copy_state = false;
var number_of_items = 0;
var checkout_clicked = false;
var scratch_list_edited = false;
var set_help = '';
var shopping_list_menu_loaded = false;
//var page_data = {};
var q_term = "";
var analyticsHandler = null;
var last_added_product = null;
var ADD_TO_CART_SOURCES = {
    AUTO_SEARCH : 'auto-search',
    AUTO_SEARCH_AD : 'auto-search-ad',
    DYF: 'dyf',
    PD: 'pd',
    PD_ALSO_BOUGHT: 'pd-ab',
    PD_REL_CAT_PROD: 'pd-cat',
    PD_TOP_LEVEL_CAT: 'pd-tlc',
    PD_REL_BRAND: 'pd-brand',
    PD_STORE: 'pd-offers',
    UPDATE_QTY: 'update_qty',
    PROMO_BUNDLE: 'promo_bundle',
    PROMO_POPUP: 'promo_popup',
    FEATURED_PRODUCT:'fp',
    ALTERNATE_PRODUCT: 'suggestion',
    RECOMMENDATIONS:'recommendations',
    SMART_BASKET:'smart-basket',
    IMPULSE_BUYING: 'impulse-buying',
    ENGAGEMENT_STORE: 'engagement_store'
};



var BBUtils = {
    /**
     eg. range(0, 4) = [0,1,2,3]
     eg. range(0, 6, 1) = [0, 2, 4]
     @method range
     @param {int} start
     @param {int} stop
     @param {int} step

    */
    range: function (start, stop, step) {
        if (typeof stop == 'undefined') {
            stop = start;
            start = 0;
        }
        if (typeof step == 'undefined') {
            step = 1;
        }
        if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
            return [];
        }
        var result = [];
        for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
            result.push(i);
        }
        return result;
    },


    /**
     eg. chunkify([1,2,3,4,5,6,7,8], 3) = [[1,2,3], [4,5,6], [7,8]]
     @method chunkify
     @param {Array} array
     @param {int} chunk_size
    */

    chunkify: function (array, chunk_size) {
        var msg_chunks = [];
        for (var i = 0; i < array.length; i += chunk_size) {
            msg_chunks.push(array.slice(i, i + chunk_size));
        }
        return msg_chunks;
    },

    //toInt: function(x) {
    //  return x > 0 ? Math.floor(x) : Math.ceil(x);
    //},

    /**
     eg. join_on('helloworld', 3, '<br>') => 'hel<br>low<br>orl<br>d';
     @method join_on
     @param {Array/string} array
     @param {int} interval
     @param {string} join_char
    */
    //join_on: function (array, interval, join_char) {
    //    if (array && array.length > interval) {
    //        var msg_chunks = this.chunkify(array, interval);
    //        return msg_chunks.join(join_char);
    //    }
    //    return array;
    //},

    /**
     eg. column_major_chunks([1,2,3,4,5,6,7,8,9,10,11,12, 13], 3) =>  [[1, 4, 7, 10, 13], [2, 5, 8, 11], [3, 6, 9, 12]]
     @method column_major_chunks
     @param {Array/string} array
     @param {int} interval
    */
    column_major_chunks: function(array, interval) {
        var chunks = this.chunkify(array, interval);
        var transposed_array = [];
        for (var i=0; i< chunks.length; i++) {
            for (var j=0; j<chunks[i].length; j++) {
                if (!transposed_array[j]) {
                    transposed_array[j] = [];
                }
                transposed_array[j][i] = chunks[i][j];
            }
        }
        return transposed_array;
    },

    is_touch_device: function() {
//        return "ontouchstart" in document.documentElement;
          return $.cookie('_bb_tc') == "1";
    },

    //initLoginButton: function(login_url) {
    //    var currentRelativeUrl = window.location.pathname;
    //    var targetUrl = login_url;
    //    if (currentRelativeUrl) {
    //        targetUrl += "?next=" +
    //            encodeURIComponent(currentRelativeUrl + window.location.search);
    //    }
    //    window.location.href = targetUrl;
    //},
    // https://gist.github.com/padolsey/527683
    //ieVersion: (function () {
    //    var undef,
    //        v = 3,
    //        div = document.createElement('div'),
    //        all = div.getElementsByTagName('i');
    //
    //    while (
    //        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
    //            all[0]
    //        );
    //    return v > 4 ? v : undef;
    //}()),

    showIEPopupIfApplicable: function() {
        if (this.ieVersion < 9 && !docCookie.hasItem('_bb_ie')) {
            $("#id_browser_support, .uiv2-background-shade").fadeIn('slow');
            docCookie.setItem('_bb_ie', 'shown', 15552000);
        }
    },
    /**
     eg. When var obj = {name="sid"}, then BBUtils.getObjPropertyName(obj, "sid") will return "name"
     * @param {Object} obj
     * @param {Object} propertyVal
     */
    getObjPropertyName: function(obj, propertyVal) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop) && obj[prop] === propertyVal) {
                return prop;
            }
        }
    }
};

jQuery.fn.extend({
    colorTable : function() {
        var table_rows = "#" + this.attr("id") + " tbody tr";
        $(table_rows).each(function (i, t_row) {
            $(t_row).removeClass("dark");
            if (i % 2 != 0) {
                $(t_row).addClass("dark");
            }
        });
    },

    banner_resize: function (parent_selector, target_child_selector, delta) {
        $(this).find(parent_selector).each(function (idx, obj) {
            var jobj = $(obj);
            var img_width = jobj.children("img").width();
            var parent_width = jobj.width();
            var caption_width = parent_width - img_width - (delta ? delta : 0);
            jobj.children(target_child_selector).css("width", caption_width + "px");
        });
    },

    exists: function() {
        return this && this.length !== 0;
    }
});

(function($) {
    $.QueryString = (function(a) {
        if (a == "") return {};
        var b = {};
        for (var i = 0; i < a.length; ++i)
        {
            var p=a[i].split('=');
            if (p.length != 2) continue;
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    })(window.location.search.substr(1).split('&'))
})(jQuery);

var TouchHandler = {

    init: function () {
        if (!BBUtils.is_touch_device()) {
            document.documentElement.className += " no-touch";
        } else {
            document.documentElement.className += " touch";
            if (docCookie.hasItem("is_touch")) {
                var val = docCookie.getItem("is_touch");
                if (val !== "true") {
                    this.requestTopMenu();
                } else {
                    this.initTopMenu();
                }
            } else {
                this.requestTopMenu();
            }
            var topMenuBanner = $("#id_top_menu_banner");
            this.addToHoverHandler(topMenuBanner, $(".uiv2-newbasket-dropdown"));
            this.addToHoverHandler(topMenuBanner, $(".uiv2-latest-basket-dropdown"));
            this.addToHoverHandler($('.uiv2-deliveryslot-link'), $('.uiv2-deliveryslot-dropdown'));
            //this.addToHoverHandler($(".uiv2-login"), $(".uiv2-login-dropdown-block"));
            this.addToHoverHandler($(".uiv2-loggedin-user-link"), $(".uiv2-loggedin-user-dropdown"));
            this.addToHoverHandlerAndOnlyHide($(".uiv2-search"), $(".uiv2-search-dropdown-block"), true);
//            this.addToHoverHandler($(".uiv2-your-basket"), $(".uiv2-your-basket-dropdown"));
            this.addToHoverHandler($(".uiv2-offers-link"), $(".uiv2-offers-dropdown"));
            this.addToHoverHandler($(".uiv2-new-arrivals-link"), $(".uiv2-new-arrivals-dropdown"));
            this.addToHoverHandler($(".uiv2-shop-link"), $(".uiv2-shop-dropdown"));
            this.addToHoverHandler($(".uiv2-shop-by-list-link"), $(".uiv2-shop-by-list-dropdown"));
            //this.handleHover();
        }
    },

    requestTopMenu: function() {
        var touchHandler = this;
        $.ajax({
                url: '/product/touch-menu/',
                type: 'get',
                success: function(resp) {
                    if(resp['success']){
                        console.log("Setting touch cookie");
                        docCookie.setItem("is_touch", "true");
                        var menu = resp['menu'];
                        if (menu) {
                            console.log("Replacing Menu");
                            $(".uiv2-main-menu").html(menu);
                            touchHandler.initTopMenu();
                        }
                    }
                },
                error: function() {
                    console.log("An error occurred when requesting top menu")
                }
            });
    },
//
//    //_hideAll: function(allTopMenuLinks, excludeElement) {
//    //    allTopMenuLinks.each(function(idx, topMenuObj) {
//    //        var jQueryParentObj = $(topMenuObj);
//    //        var topCatLink = $(jQueryParentObj.find("div.top-category-link"));
//    //        if (topCatLink.get(0) != excludeElement.get(0)) {
//    //            var topCatBox = $(jQueryParentObj.find(".uiv2-dropdown-box"));
//    //            topCatLink.removeClass("hover");
//    //            topCatBox.hide();
//    //        }
//    //    });
//    //},
//    //
//    //_hideAllL3Categories: function(allL2MenuLinks, excludeElement) {
//    //    allL2MenuLinks.each(function(idx, l2CatObj) {
//    //        var jQueryL2obj = $(l2CatObj);
//    //        var l3DropDown = jQueryL2obj.find(".uiv2-sub-dropdown-column");
//    //        if (jQueryL2obj.get(0) != excludeElement.get(0)) {
//    //            jQueryL2obj.removeClass("hover");
//    //            l3DropDown.hide();
//    //        }
//    //    });
//    //},

    initTopMenu: function() {
        var allTopMenuLinks = $("nav ul li.top-category");
        var touchHandler = this;
        allTopMenuLinks.each(function(idx, parentObj) {
            var jQueryParentObj = $(parentObj);
            var topCatLink = $(jQueryParentObj.find("div.top-category-link"));
            var topCatBox = $(jQueryParentObj.find(".uiv2-dropdown-box"));
            topCatLink.on("touchend", function(e) {
                touchHandler._hideAll(allTopMenuLinks, topCatLink);
                e.preventDefault();
                if (topCatBox.is(":visible")) {
                    topCatLink.removeClass("hover");
                    topCatBox.hide();
                } else {
                    topCatLink.addClass("hover");
                    topCatBox.show();
                }
            });
            var subMenu = $(topCatBox.find("li.uiv2-submenu"));
            subMenu.each(function(idx, subMenuObj) {
                var jQuerySubMenuObj = $(subMenuObj);
                var l3LinkClass = "l3-link";
                jQuerySubMenuObj.on("touchend", function(e) {
                    if ($(e.target).hasClass(l3LinkClass)) return;
                    touchHandler._hideAllL3Categories(subMenu, jQuerySubMenuObj);
                    e.preventDefault();
                    var level3CatMenu = jQuerySubMenuObj.find(".uiv2-sub-dropdown-column");
                    if (level3CatMenu.is(":visible")) {
                        jQuerySubMenuObj.removeClass("hover");
                        level3CatMenu.hide();
                    } else {
                        jQuerySubMenuObj.addClass("hover");
                        level3CatMenu.show();
                    }
                });
            });
        });
    },
//
    addToHoverHandlerAndOnlyHide: function(jQueryParentObj, jQueryChildObjContainer, onlyHide) {
        this._addToHoverHandler(jQueryParentObj, jQueryChildObjContainer, {onlyHide: onlyHide});
    },

    addToHoverHandler: function(jQueryParentObj, jQueryChildObjContainer) {
        this._addToHoverHandler(jQueryParentObj, jQueryChildObjContainer, {});
    },

    _addToHoverHandler: function(jQueryParentObj, jQueryChildObjContainer, options) {
        if (jQueryParentObj.exists()) {
            this._hoverHandlerList.push({parent:jQueryParentObj, child: jQueryChildObjContainer,
                                         onlyHide: options['onlyHide']});
        }
    },

    _hoverHandlerList: [],

    handleHover: function () {
        var touchHandler = this;
        $(document).on("touchend", function (e) {
            var targetJqueryObj = $(e.target);
            var topNavContainer = $(".uiv2-left-navigation");
            var topNavContentDropDown = $(".uiv2-main-menu").find(".uiv2-dropdown-box");
            if(topNavContentDropDown.is(":visible") && !topNavContainer.find(targetJqueryObj).exists()) {
                topNavContentDropDown.hide();
                $(".top-category-link").removeClass("hover");
            }
            for (var i in touchHandler._hoverHandlerList) {
                var jQueryObj = touchHandler._hoverHandlerList[i]['parent'];
                var jQueryObjChildContainer = touchHandler._hoverHandlerList[i]['child'];
                var onlyHide = touchHandler._hoverHandlerList[i]['onlyHide'];
                var isTouchInside = targetJqueryObj.get(0) == jQueryObj.get(0) || jQueryObj.find(targetJqueryObj).exists();
                if (!isTouchInside) {
                    if (jQueryObjChildContainer.is(":visible")) {
                        jQueryObjChildContainer.hide();
                    }
                } else {
                    if (!onlyHide) {
                        if (!jQueryObjChildContainer.is(":visible")) {
                            jQueryObjChildContainer.show();
                        }
                    }
                }
            }
        });
    }
};
/*!
 * typeahead.js 0.11.1
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2015 Twitter, Inc. and other contributors; Licensed MIT
 */

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define("bloodhound", [ "jquery" ], function(a0) {
            return root["Bloodhound"] = factory(a0);
        });
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"));
    } else {
        root["Bloodhound"] = factory(jQuery);
    }
})(this, function($) {
    var _ = function() {
        "use strict";
        return {
            isMsie: function() {
                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
            },
            isBlankString: function(str) {
                return !str || /^\s*$/.test(str);
            },
            escapeRegExChars: function(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            },
            isString: function(obj) {
                return typeof obj === "string";
            },
            isNumber: function(obj) {
                return typeof obj === "number";
            },
            isArray: $.isArray,
            isFunction: $.isFunction,
            isObject: $.isPlainObject,
            isUndefined: function(obj) {
                return typeof obj === "undefined";
            },
            isElement: function(obj) {
                return !!(obj && obj.nodeType === 1);
            },
            isJQuery: function(obj) {
                return obj instanceof $;
            },
            toStr: function toStr(s) {
                return _.isUndefined(s) || s === null ? "" : s + "";
            },
            bind: $.proxy,
            each: function(collection, cb) {
                $.each(collection, reverseArgs);
                function reverseArgs(index, value) {
                    return cb(value, index);
                }
            },
            map: $.map,
            filter: $.grep,
            every: function(obj, test) {
                var result = true;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (!(result = test.call(null, val, key, obj))) {
                        return false;
                    }
                });
                return !!result;
            },
            some: function(obj, test) {
                var result = false;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (result = test.call(null, val, key, obj)) {
                        return false;
                    }
                });
                return !!result;
            },
            mixin: $.extend,
            identity: function(x) {
                return x;
            },
            clone: function(obj) {
                return $.extend(true, {}, obj);
            },
            getIdGenerator: function() {
                var counter = 0;
                return function() {
                    return counter++;
                };
            },
            templatify: function templatify(obj) {
                return $.isFunction(obj) ? obj : template;
                function template() {
                    return String(obj);
                }
            },
            defer: function(fn) {
                setTimeout(fn, 0);
            },
            debounce: function(func, wait, immediate) {
                var timeout, result;
                return function() {
                    var context = this, args = arguments, later, callNow;
                    later = function() {
                        timeout = null;
                        if (!immediate) {
                            result = func.apply(context, args);
                        }
                    };
                    callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) {
                        result = func.apply(context, args);
                    }
                    return result;
                };
            },
            throttle: function(func, wait) {
                var context, args, timeout, result, previous, later;
                previous = 0;
                later = function() {
                    previous = new Date();
                    timeout = null;
                    result = func.apply(context, args);
                };
                return function() {
                    var now = new Date(), remaining = wait - (now - previous);
                    context = this;
                    args = arguments;
                    if (remaining <= 0) {
                        clearTimeout(timeout);
                        timeout = null;
                        previous = now;
                        result = func.apply(context, args);
                    } else if (!timeout) {
                        timeout = setTimeout(later, remaining);
                    }
                    return result;
                };
            },
            stringify: function(val) {
                return _.isString(val) ? val : JSON.stringify(val);
            },
            noop: function() {}
        };
    }();
    var VERSION = "0.11.1";
    var tokenizers = function() {
        "use strict";
        return {
            nonword: nonword,
            whitespace: whitespace,
            obj: {
                nonword: getObjTokenizer(nonword),
                whitespace: getObjTokenizer(whitespace)
            }
        };
        function whitespace(str) {
            str = _.toStr(str);
            return str ? str.split(/\s+/) : [];
        }
        function nonword(str) {
            str = _.toStr(str);
            return str ? str.split(/\W+/) : [];
        }
        function getObjTokenizer(tokenizer) {
            return function setKey(keys) {
                keys = _.isArray(keys) ? keys : [].slice.call(arguments, 0);
                return function tokenize(o) {
                    var tokens = [];
                    _.each(keys, function(k) {
                        tokens = tokens.concat(tokenizer(_.toStr(o[k])));
                    });
                    return tokens;
                };
            };
        }
    }();
    var LruCache = function() {
        "use strict";
        function LruCache(maxSize) {
            this.maxSize = _.isNumber(maxSize) ? maxSize : 100;
            this.reset();
            if (this.maxSize <= 0) {
                this.set = this.get = $.noop;
            }
        }
        _.mixin(LruCache.prototype, {
            set: function set(key, val) {
                var tailItem = this.list.tail, node;
                if (this.size >= this.maxSize) {
                    this.list.remove(tailItem);
                    delete this.hash[tailItem.key];
                    this.size--;
                }
                if (node = this.hash[key]) {
                    node.val = val;
                    this.list.moveToFront(node);
                } else {
                    node = new Node(key, val);
                    this.list.add(node);
                    this.hash[key] = node;
                    this.size++;
                }
            },
            get: function get(key) {
                var node = this.hash[key];
                if (node) {
                    this.list.moveToFront(node);
                    return node.val;
                }
            },
            reset: function reset() {
                this.size = 0;
                this.hash = {};
                this.list = new List();
            }
        });
        function List() {
            this.head = this.tail = null;
        }
        _.mixin(List.prototype, {
            add: function add(node) {
                if (this.head) {
                    node.next = this.head;
                    this.head.prev = node;
                }
                this.head = node;
                this.tail = this.tail || node;
            },
            remove: function remove(node) {
                node.prev ? node.prev.next = node.next : this.head = node.next;
                node.next ? node.next.prev = node.prev : this.tail = node.prev;
            },
            moveToFront: function(node) {
                this.remove(node);
                this.add(node);
            }
        });
        function Node(key, val) {
            this.key = key;
            this.val = val;
            this.prev = this.next = null;
        }
        return LruCache;
    }();
    var PersistentStorage = function() {
        "use strict";
        var LOCAL_STORAGE;
        try {
            LOCAL_STORAGE = window.localStorage;
            LOCAL_STORAGE.setItem("~~~", "!");
            LOCAL_STORAGE.removeItem("~~~");
        } catch (err) {
            LOCAL_STORAGE = null;
        }
        function PersistentStorage(namespace, override) {
            this.prefix = [ "__", namespace, "__" ].join("");
            this.ttlKey = "__ttl__";
            this.keyMatcher = new RegExp("^" + _.escapeRegExChars(this.prefix));
            this.ls = override || LOCAL_STORAGE;
            !this.ls && this._noop();
        }
        _.mixin(PersistentStorage.prototype, {
            _prefix: function(key) {
                return this.prefix + key;
            },
            _ttlKey: function(key) {
                return this._prefix(key) + this.ttlKey;
            },
            _noop: function() {
                this.get = this.set = this.remove = this.clear = this.isExpired = _.noop;
            },
            _safeSet: function(key, val) {
                try {
                    this.ls.setItem(key, val);
                } catch (err) {
                    if (err.name === "QuotaExceededError") {
                        this.clear();
                        this._noop();
                    }
                }
            },
            get: function(key) {
                if (this.isExpired(key)) {
                    this.remove(key);
                }
                return decode(this.ls.getItem(this._prefix(key)));
            },
            set: function(key, val, ttl) {
                if (_.isNumber(ttl)) {
                    this._safeSet(this._ttlKey(key), encode(now() + ttl));
                } else {
                    this.ls.removeItem(this._ttlKey(key));
                }
                return this._safeSet(this._prefix(key), encode(val));
            },
            remove: function(key) {
                this.ls.removeItem(this._ttlKey(key));
                this.ls.removeItem(this._prefix(key));
                return this;
            },
            clear: function() {
                var i, keys = gatherMatchingKeys(this.keyMatcher);
                for (i = keys.length; i--; ) {
                    this.remove(keys[i]);
                }
                return this;
            },
            isExpired: function(key) {
                var ttl = decode(this.ls.getItem(this._ttlKey(key)));
                return _.isNumber(ttl) && now() > ttl ? true : false;
            }
        });
        return PersistentStorage;
        function now() {
            return new Date().getTime();
        }
        function encode(val) {
            return JSON.stringify(_.isUndefined(val) ? null : val);
        }
        function decode(val) {
            return $.parseJSON(val);
        }
        function gatherMatchingKeys(keyMatcher) {
            var i, key, keys = [], len = LOCAL_STORAGE.length;
            for (i = 0; i < len; i++) {
                if ((key = LOCAL_STORAGE.key(i)).match(keyMatcher)) {
                    keys.push(key.replace(keyMatcher, ""));
                }
            }
            return keys;
        }
    }();
    var Transport = function() {
        "use strict";
        var pendingRequestsCount = 0, pendingRequests = {}, maxPendingRequests = 6, sharedCache = new LruCache(10);
        function Transport(o) {
            o = o || {};
            this.cancelled = false;
            this.lastReq = null;
            this._send = o.transport;
            this._get = o.limiter ? o.limiter(this._get) : this._get;
            this._cache = o.cache === false ? new LruCache(0) : sharedCache;
        }
        Transport.setMaxPendingRequests = function setMaxPendingRequests(num) {
            maxPendingRequests = num;
        };
        Transport.resetCache = function resetCache() {
            sharedCache.reset();
        };
        _.mixin(Transport.prototype, {
            _fingerprint: function fingerprint(o) {
                o = o || {};
                return o.url + o.type + $.param(o.data || {});
            },
            _get: function(o, cb) {
                var that = this, fingerprint, jqXhr;
                fingerprint = this._fingerprint(o);
                if (this.cancelled || fingerprint !== this.lastReq) {
                    return;
                }
                if (jqXhr = pendingRequests[fingerprint]) {
                    jqXhr.done(done).fail(fail);
                } else if (pendingRequestsCount < maxPendingRequests) {
                    pendingRequestsCount++;
                    pendingRequests[fingerprint] = this._send(o).done(done).fail(fail).always(always);
                } else {
                    this.onDeckRequestArgs = [].slice.call(arguments, 0);
                }
                function done(resp) {
                    cb(null, resp);
                    that._cache.set(fingerprint, resp);
                }
                function fail() {
                    cb(true);
                }
                function always() {
                    pendingRequestsCount--;
                    delete pendingRequests[fingerprint];
                    if (that.onDeckRequestArgs) {
                        that._get.apply(that, that.onDeckRequestArgs);
                        that.onDeckRequestArgs = null;
                    }
                }
            },
            get: function(o, cb) {
                var resp, fingerprint;
                cb = cb || $.noop;
                o = _.isString(o) ? {
                    url: o
                } : o || {};
                fingerprint = this._fingerprint(o);
                this.cancelled = false;
                this.lastReq = fingerprint;
                if (resp = this._cache.get(fingerprint)) {
                    cb(null, resp);
                } else {
                    this._get(o, cb);
                }
            },
            cancel: function() {
                this.cancelled = true;
            }
        });
        return Transport;
    }();
    var SearchIndex = window.SearchIndex = function() {
        "use strict";
        var CHILDREN = "c", IDS = "i";
        function SearchIndex(o) {
            o = o || {};
            if (!o.datumTokenizer || !o.queryTokenizer) {
                $.error("datumTokenizer and queryTokenizer are both required");
            }
            this.identify = o.identify || _.stringify;
            this.datumTokenizer = o.datumTokenizer;
            this.queryTokenizer = o.queryTokenizer;
            this.reset();
        }
        _.mixin(SearchIndex.prototype, {
            bootstrap: function bootstrap(o) {
                this.datums = o.datums;
                this.trie = o.trie;
            },
            add: function(data) {
                var that = this;
                data = _.isArray(data) ? data : [ data ];
                _.each(data, function(datum) {
                    var id, tokens;
                    that.datums[id = that.identify(datum)] = datum;
                    tokens = normalizeTokens(that.datumTokenizer(datum));
                    _.each(tokens, function(token) {
                        var node, chars, ch;
                        node = that.trie;
                        chars = token.split("");
                        while (ch = chars.shift()) {
                            node = node[CHILDREN][ch] || (node[CHILDREN][ch] = newNode());
                            node[IDS].push(id);
                        }
                    });
                });
            },
            get: function get(ids) {
                var that = this;
                return _.map(ids, function(id) {
                    return that.datums[id];
                });
            },
            search: function search(query) {
                var that = this, tokens, matches;
                tokens = normalizeTokens(this.queryTokenizer(query));
                _.each(tokens, function(token) {
                    var node, chars, ch, ids;
                    if (matches && matches.length === 0) {
                        return false;
                    }
                    node = that.trie;
                    chars = token.split("");
                    while (node && (ch = chars.shift())) {
                        node = node[CHILDREN][ch];
                    }
                    if (node && chars.length === 0) {
                        ids = node[IDS].slice(0);
                        matches = matches ? getIntersection(matches, ids) : ids;
                    } else {
                        matches = [];
                        return false;
                    }
                });
                return matches ? _.map(unique(matches), function(id) {
                    return that.datums[id];
                }) : [];
            },
            all: function all() {
                var values = [];
                for (var key in this.datums) {
                    values.push(this.datums[key]);
                }
                return values;
            },
            reset: function reset() {
                this.datums = {};
                this.trie = newNode();
            },
            serialize: function serialize() {
                return {
                    datums: this.datums,
                    trie: this.trie
                };
            }
        });
        return SearchIndex;
        function normalizeTokens(tokens) {
            tokens = _.filter(tokens, function(token) {
                return !!token;
            });
            tokens = _.map(tokens, function(token) {
                return token.toLowerCase();
            });
            return tokens;
        }
        function newNode() {
            var node = {};
            node[IDS] = [];
            node[CHILDREN] = {};
            return node;
        }
        function unique(array) {
            var seen = {}, uniques = [];
            for (var i = 0, len = array.length; i < len; i++) {
                if (!seen[array[i]]) {
                    seen[array[i]] = true;
                    uniques.push(array[i]);
                }
            }
            return uniques;
        }
        function getIntersection(arrayA, arrayB) {
            var ai = 0, bi = 0, intersection = [];
            arrayA = arrayA.sort();
            arrayB = arrayB.sort();
            var lenArrayA = arrayA.length, lenArrayB = arrayB.length;
            while (ai < lenArrayA && bi < lenArrayB) {
                if (arrayA[ai] < arrayB[bi]) {
                    ai++;
                } else if (arrayA[ai] > arrayB[bi]) {
                    bi++;
                } else {
                    intersection.push(arrayA[ai]);
                    ai++;
                    bi++;
                }
            }
            return intersection;
        }
    }();
    var Prefetch = function() {
        "use strict";
        var keys;
        keys = {
            data: "data",
            protocol: "protocol",
            thumbprint: "thumbprint"
        };
        function Prefetch(o) {
            this.url = o.url;
            this.ttl = o.ttl;
            this.cache = o.cache;
            this.prepare = o.prepare;
            this.transform = o.transform;
            this.transport = o.transport;
            this.thumbprint = o.thumbprint;
            this.storage = new PersistentStorage(o.cacheKey);
        }
        _.mixin(Prefetch.prototype, {
            _settings: function settings() {
                return {
                    url: this.url,
                    type: "GET",
                    dataType: "json"
                };
            },
            store: function store(data) {
                if (!this.cache) {
                    return;
                }
                this.storage.set(keys.data, data, this.ttl);
                this.storage.set(keys.protocol, location.protocol, this.ttl);
                this.storage.set(keys.thumbprint, this.thumbprint, this.ttl);
            },
            fromCache: function fromCache() {
                var stored = {}, isExpired;
                if (!this.cache) {
                    return null;
                }
                stored.data = this.storage.get(keys.data);
                stored.protocol = this.storage.get(keys.protocol);
                stored.thumbprint = this.storage.get(keys.thumbprint);
                isExpired = stored.thumbprint !== this.thumbprint || stored.protocol !== location.protocol;
                return stored.data && !isExpired ? stored.data : null;
            },
            fromNetwork: function(cb) {
                var that = this, settings;
                if (!cb) {
                    return;
                }
                settings = this.prepare(this._settings());
                this.transport(settings).fail(onError).done(onResponse);
                function onError() {
                    cb(true);
                }
                function onResponse(resp) {
                    cb(null, that.transform(resp));
                }
            },
            clear: function clear() {
                this.storage.clear();
                return this;
            }
        });
        return Prefetch;
    }();
    var Remote = function() {
        "use strict";
        function Remote(o) {
            this.url = o.url;
            this.prepare = o.prepare;
            this.transform = o.transform;
            this.transport = new Transport({
                cache: o.cache,
                limiter: o.limiter,
                transport: o.transport
            });
        }
        _.mixin(Remote.prototype, {
            _settings: function settings() {
                return {
                    url: this.url,
                    type: "GET",
                    dataType: "json"
                };
            },
            get: function get(query, cb) {
                var that = this, settings;
                if (!cb) {
                    return;
                }
                query = query || "";
                settings = this.prepare(query, this._settings());
                return this.transport.get(settings, onResponse);
                function onResponse(err, resp) {
                    err ? cb([]) : cb(that.transform(resp));
                }
            },
            cancelLastRequest: function cancelLastRequest() {
                this.transport.cancel();
            }
        });
        return Remote;
    }();
    var oParser = function() {
        "use strict";
        return function parse(o) {
            var defaults, sorter;
            defaults = {
                initialize: true,
                identify: _.stringify,
                datumTokenizer: null,
                queryTokenizer: null,
                sufficient: 5,
                sorter: null,
                local: [],
                prefetch: null,
                remote: null
            };
            o = _.mixin(defaults, o || {});
            !o.datumTokenizer && $.error("datumTokenizer is required");
            !o.queryTokenizer && $.error("queryTokenizer is required");
            sorter = o.sorter;
            o.sorter = sorter ? function(x) {
                return x.sort(sorter);
            } : _.identity;
            o.local = _.isFunction(o.local) ? o.local() : o.local;
            o.prefetch = parsePrefetch(o.prefetch);
            o.remote = parseRemote(o.remote);
            return o;
        };
        function parsePrefetch(o) {
            var defaults;
            if (!o) {
                return null;
            }
            defaults = {
                url: null,
                ttl: 24 * 60 * 60 * 1e3,
                cache: true,
                cacheKey: null,
                thumbprint: "",
                prepare: _.identity,
                transform: _.identity,
                transport: null
            };
            o = _.isString(o) ? {
                url: o
            } : o;
            o = _.mixin(defaults, o);
            !o.url && $.error("prefetch requires url to be set");
            o.transform = o.filter || o.transform;
            o.cacheKey = o.cacheKey || o.url;
            o.thumbprint = VERSION + o.thumbprint;
            o.transport = o.transport ? callbackToDeferred(o.transport) : $.ajax;
            return o;
        }
        function parseRemote(o) {
            var defaults;
            if (!o) {
                return;
            }
            defaults = {
                url: null,
                cache: true,
                prepare: null,
                replace: null,
                wildcard: null,
                limiter: null,
                rateLimitBy: "debounce",
                rateLimitWait: 300,
                transform: _.identity,
                transport: null
            };
            o = _.isString(o) ? {
                url: o
            } : o;
            o = _.mixin(defaults, o);
            !o.url && $.error("remote requires url to be set");
            o.transform = o.filter || o.transform;
            o.prepare = toRemotePrepare(o);
            o.limiter = toLimiter(o);
            o.transport = o.transport ? callbackToDeferred(o.transport) : $.ajax;
            delete o.replace;
            delete o.wildcard;
            delete o.rateLimitBy;
            delete o.rateLimitWait;
            return o;
        }
        function toRemotePrepare(o) {
            var prepare, replace, wildcard;
            prepare = o.prepare;
            replace = o.replace;
            wildcard = o.wildcard;
            if (prepare) {
                return prepare;
            }
            if (replace) {
                prepare = prepareByReplace;
            } else if (o.wildcard) {
                prepare = prepareByWildcard;
            } else {
                prepare = idenityPrepare;
            }
            return prepare;
            function prepareByReplace(query, settings) {
                settings.url = replace(settings.url, query);
                return settings;
            }
            function prepareByWildcard(query, settings) {
                settings.url = settings.url.replace(wildcard, encodeURIComponent(query));
                return settings;
            }
            function idenityPrepare(query, settings) {
                return settings;
            }
        }
        function toLimiter(o) {
            var limiter, method, wait;
            limiter = o.limiter;
            method = o.rateLimitBy;
            wait = o.rateLimitWait;
            if (!limiter) {
                limiter = /^throttle$/i.test(method) ? throttle(wait) : debounce(wait);
            }
            return limiter;
            function debounce(wait) {
                return function debounce(fn) {
                    return _.debounce(fn, wait);
                };
            }
            function throttle(wait) {
                return function throttle(fn) {
                    return _.throttle(fn, wait);
                };
            }
        }
        function callbackToDeferred(fn) {
            return function wrapper(o) {
                var deferred = $.Deferred();
                fn(o, onSuccess, onError);
                return deferred;
                function onSuccess(resp) {
                    _.defer(function() {
                        deferred.resolve(resp);
                    });
                }
                function onError(err) {
                    _.defer(function() {
                        deferred.reject(err);
                    });
                }
            };
        }
    }();
    var Bloodhound = function() {
        "use strict";
        var old;
        old = window && window.Bloodhound;
        function Bloodhound(o) {
            o = oParser(o);
            this.sorter = o.sorter;
            this.identify = o.identify;
            this.sufficient = o.sufficient;
            this.local = o.local;
            this.remote = o.remote ? new Remote(o.remote) : null;
            this.prefetch = o.prefetch ? new Prefetch(o.prefetch) : null;
            this.index = new SearchIndex({
                identify: this.identify,
                datumTokenizer: o.datumTokenizer,
                queryTokenizer: o.queryTokenizer
            });
            o.initialize !== false && this.initialize();
        }
        Bloodhound.noConflict = function noConflict() {
            window && (window.Bloodhound = old);
            return Bloodhound;
        };
        Bloodhound.tokenizers = tokenizers;
        _.mixin(Bloodhound.prototype, {
            __ttAdapter: function ttAdapter() {
                var that = this;
                return this.remote ? withAsync : withoutAsync;
                function withAsync(query, sync, async) {
                    return that.search(query, sync, async);
                }
                function withoutAsync(query, sync) {
                    return that.search(query, sync);
                }
            },
            _loadPrefetch: function loadPrefetch() {
                var that = this, deferred, serialized;
                deferred = $.Deferred();
                if (!this.prefetch) {
                    deferred.resolve();
                } else if (serialized = this.prefetch.fromCache()) {
                    this.index.bootstrap(serialized);
                    deferred.resolve();
                } else {
                    this.prefetch.fromNetwork(done);
                }
                return deferred.promise();
                function done(err, data) {
                    if (err) {
                        return deferred.reject();
                    }
                    that.add(data);
                    that.prefetch.store(that.index.serialize());
                    deferred.resolve();
                }
            },
            _initialize: function initialize() {
                var that = this, deferred;
                this.clear();
                (this.initPromise = this._loadPrefetch()).done(addLocalToIndex);
                return this.initPromise;
                function addLocalToIndex() {
                    that.add(that.local);
                }
            },
            initialize: function initialize(force) {
                return !this.initPromise || force ? this._initialize() : this.initPromise;
            },
            add: function add(data) {
                this.index.add(data);
                return this;
            },
            get: function get(ids) {
                ids = _.isArray(ids) ? ids : [].slice.call(arguments);
                return this.index.get(ids);
            },
            search: function search(query, sync, async) {
                var that = this, local;
                local = this.sorter(this.index.search(query));
                sync(this.remote ? local.slice() : local);
                if (this.remote && local.length < this.sufficient) {
                    this.remote.get(query, processRemote);
                } else if (this.remote) {
                    this.remote.cancelLastRequest();
                }
                return this;
                function processRemote(remote) {
                    var nonDuplicates = [];
                    _.each(remote, function(r) {
                        !_.some(local, function(l) {
                            return that.identify(r) === that.identify(l);
                        }) && nonDuplicates.push(r);
                    });
                    async && async(nonDuplicates);
                }
            },
            all: function all() {
                return this.index.all();
            },
            clear: function clear() {
                this.index.reset();
                return this;
            },
            clearPrefetchCache: function clearPrefetchCache() {
                this.prefetch && this.prefetch.clear();
                return this;
            },
            clearRemoteCache: function clearRemoteCache() {
                Transport.resetCache();
                return this;
            },
            ttAdapter: function ttAdapter() {
                return this.__ttAdapter();
            }
        });
        return Bloodhound;
    }();
    return Bloodhound;
});

var MessageView = {
    error: function(txt) {
        this._showMsg(txt, 'error');
    },

    success: function(txt) {
        this._showMsg(txt, 'success');
    },

    _showMsg: function(txt, className) {
        var html = "<ul class='messagelist'><li class='" + className + "'>" + txt + "</li></ul>";
        $(".sysMessage").html(html);
    },

    hide: function() {
        $(".sysMessage").html("");
    }
};

/**
 @class LoginHandler
 @param {Object} url
 @param {Object} emailInput
 @param {Object} passwordInput
 @param {Object} errorViewContainer
 @param {Object} loginBtn
 @param {Object} resetBtn
 @param {Object} loginContainer

 url : url to which the login request should be send
 emailInput : jQuery Object corresponding to the email input
 passwordInput : jQuery Object corresponding to the password input
 errorView : jQuery Object corresponding to the html container, which will show the error
 loginBtn : jQuery Object corresponding to the login button
 resetBtn : jQuery Object corresponding to the reset button
 loginContainer : jQuery Object corresponding to the main block that contains the login controls
 */
function LoginHandler(url, emailInput, passwordInput, errorViewContainer,
                      loginBtn, resetBtn, loginContainer, tnc_id) {
    this.url = url;
    this.emailWidget = emailInput;
    this.passwordWidget = passwordInput;
    this.errorViewContainer = errorViewContainer;
    this.errorTxt = this.errorViewContainer.find(".uiv2-err-text");
    this.loginBtn = loginBtn;
    this.resetBtn = resetBtn;
    this.loginContainer = loginContainer;
    this.tnc_id = tnc_id;

    this.init = function() {
        var loginHandler = this;
        this.loginContainer.on('keyup', function (e) {
            if (e.which == 13 || e.keyCode == 13) {
                //loginHandler.login();
            }
        });
        this.loginBtn.click(function() {
            //loginHandler.login();
            _gaq.push(['_trackEvent','Login', 'Login Action', 'Click on submit' ]);

        });
        this.resetBtn.click(function() {
            loginHandler.reset();
            _gaq.push(['_trackEvent','Login', 'Login Action', 'Reset' ]);
        });
    };

    this.reset = function() {
        this.emailWidget.val("");
        this.passwordWidget.val("");
        this.errorTxt.html("");
        this.errorViewContainer.hide();
    };

    this._showErrMsg = function(msg) {
        this.errorViewContainer.show();
        this.errorTxt.text(msg);
        _gaq.push(['_trackEvent','Login', 'Login Action', 'Failed attempt - ' + msg ])
    };

    this._isValid = function(email, passwd) {
        if (!email) {
            this._showErrMsg("Email can't be empty");
            return false;
        }
        if (!passwd) {
            this._showErrMsg("Password can't be empty");
            return false;
        }
        var emailInputHtmlObj = this.emailWidget.get(0);
        if (emailInputHtmlObj && emailInputHtmlObj.validity && !emailInputHtmlObj.validity.valid) {
            this._showErrMsg("Please enter a valid email address");
            return false;
        }
        if( typeof(this.tnc_id) != 'undefined' && !$(this.tnc_id).is(':checked') ){
            this._showErrMsg("Please accept Terms & Conditions");
            return false;
        }

        return true;
    };

    this._disableLoginButton = function() {
        this.loginBtn.attr("disabled", "disabled");
        this.loginBtn.val("Please wait...");
        $(".uiv2-login-button-block").css("width", "77%");
    };

    this._enableLoginButton = function() {
        this.loginBtn.removeAttr('disabled');
        this.loginBtn.val("LOGIN");
        $(".uiv2-login-button-block").css("width", "72%");
    };

    this.urlJoin = function(url, relativeUrl) {
        if (relativeUrl.indexOf("/") == 0) {
            return url + relativeUrl;
        }
        return url + "/" + relativeUrl;
    };

    this.login = function() {
        this.errorTxt.html("");
        this._disableLoginButton();
        var email = $.trim(this.emailWidget.val());
        var passwd = this.passwordWidget.val();
        var loginHandler = this;
        var baseUrl = "//" + window.location.host;
        var url = baseUrl + this.url;
        var data = {'is_ajax': 'true', 'email': email, 'password': passwd,
                    'csrfmiddlewaretoken':csrf};
        var next = $.QueryString["next"];
        if (next) {
            data['next'] = next;
        }
        if (this._isValid(email, passwd)) {
            $.ajax({
                url:  url,
                type: 'post',
                data: data,
                success: function(resp) {
                    if(resp.success){
                        loginHandler.errorViewContainer.hide();
                        if (next) {
                            window.location.href = loginHandler.urlJoin(baseUrl, next);
                        } else {
                            window.location.reload();
                        }
                        _gaq.push(['_trackEvent','Login', 'Login Action', 'Successful login' ])

                    } else {
                        var err_msg = resp.error;
                        if (err_msg) {
                            loginHandler.errorViewContainer.show();
                            err_msg = BBUtils.join_on(err_msg, 30, '<br />');
                            loginHandler.errorTxt.html(err_msg);
                        }
                        loginHandler._enableLoginButton();
                        _gaq.push(['_trackEvent','Login', 'Login Action', 'Failed attempt - ' + err_msg ])
                    }
                },
                error: function() {
                    loginHandler._showErrMsg("Sorry, but an unknown error occurred!");
                    loginHandler._enableLoginButton();
                }
            });
        } else {
            this._enableLoginButton();
        }
    }
}

$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        $('#id_loader').show();
        function getCookie(name) {
            var cookieValue = null;
            if (document.cookie && document.cookie !== '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = jQuery.trim(cookies[i]);
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, name.length + 1) == (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            if(!cookieValue) {
                cookieValue = $('#id_csrftkn').val();
            }
            return cookieValue;
        }
        if (!((/^http:.*/.test(settings.url)) || (/^https:.*/.test(settings.url)))) {
            // Only send the token to relative URLs i.e. locally.
            xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
        }
    },
    complete: function(xhr,settings) {
        $('#id_loader').hide();
    }

});

function set_city_cart_check(city_id, address_id){

    $('.loadShoplistMask1').hide();
    window.scrollTo(0,40);
    $.ajax({
        url: make_req_url('/basket/get-cart-item-difference/'),
        type: 'post',
        data: {'city_id': city_id, 'address_id': address_id, 'get_item_html': 1}
    }).done(function (data) {
        cart_items_html = data['items'];
        if(data['show_popup']) {
            show_cart_items_popup(cart_items_html);
        }else{
            $('#shoplist-mask').hide();
            $('.loadShoplistMask1').hide();
            set_city(city_id, address_id);
            $(".changeCity-detail").hide();
        }
    });
}


function set_checkout_selected_address(obj, address_id){
    $(".uiv2-selected").removeAttr("class");
    $(".uiv2-selected-span").css("visibility", "hidden");
    $("#"+address_id).attr("class", "uiv2-selected");
    $("#"+address_id).find(".uiv2-selected-span").css("visibility", "visible");
}

function do_ajax_city(city_id) {
    var req_url = "";

    if (window.location.pathname.indexOf("auth") !== -1 || window.location.pathname.indexOf("register") !== -1) {
        req_url = '/auth/set-city/';

    }
    else {
        req_url = '/set-city/';
    }
    return $.ajax({
        url: req_url,
        type: 'post',
        data: {'city_id': city_id, csrfmiddlewaretoken: csrf},
        dataType: "json"
    })
}

function change_city(city_id){
    do_ajax_city(city_id).done(function(){
        location.reload();
        return true;
    })
}

function show_cart_items_popup(cart_items_html){
    // show unavailable cart items popup
    $("#uiv2-multicity-change1").show();
    $("#city_cart_popup").html(cart_items_html);
    $('#shoplist-mask').show();
}

function cancel_city_change(){
    $(document).trigger('addressInteractionPlower', [{'EventName':'ChangeAddress_Cancel'}]);
    $("#uiv2-multicity-change1").hide();
    $("#uiv2-multicity-change").hide();
    $("#city_cart_popup").empty();
    $('#shoplist-mask').fadeOut();
    $('body').removeClass('pos-fixed');
}

function set_city(city_id, address_id){
    checkout = $("#is_checkout").val();
    var req_url = "";
    if(window.location.pathname.indexOf("auth") !== -1 || window.location.pathname.indexOf("register") !== -1){
        req_url = '/auth/set-city/';
    }
    else {
        req_url = '/set-city/';
    }
    $.ajax({
        url: req_url,
        type:'post',
        data: {'city_id': city_id, csrfmiddlewaretoken:csrf, 'address_id': address_id},
        dataType:"json",
        success: function(json_data){
            if( !json_data['success'] ) {
                    show_alert('Failed to set city');
                    $('.loadShoplistMask1').hide();
                    $('#shoplist-mask').hide();
                    return false;
            }
            if(checkout){
                location.href = "/co/checkout/";
            }
            else{
                $('#popuphelp').hide();
                $('#popuphelp').hide();
                $('#city-label').hide();
                _next = $('#id_next').val();
                if(_next == '/choose-city/'){
                    _next = '/';
                }
                if(_next == undefined || _next == null || _next == "") {
                   change_city_next = $("#id_current_path").val();
                    if(change_city_next){
                      _next = change_city_next;
                    }

                    if(!_next)  _next='/';
                }
                window.location = _next;
                $('.uiv2-landing-outer, #shoplist-mask').fadeOut();
                var itemsRemoved = [];
                for (var i=0; i<$('.product_list_mix .row').length;i++){
                    itemsRemoved.push(""+ ($('.product_list_mix .row')[i].getAttribute('id')).replace('id_prow_', ''));
                }
                $(document).trigger('addressInteractionPlower', [{'EventName':'ChangeAddress_Continue', 'ItemsRemoved':itemsRemoved}]);
                return true;
            }
        }
    });
}

function set_current_address(city_id, addr){
    $.ajax({
        url: '/co/set-top-menu-address/',
        type:'post',
        data: {'city_id': city_id, 'address_id': addr},
        dataType:"json",
        success: function(json_data){
            if(json_data['success']) {
                $("#address_drop_down").empty().html(json_data['address_drop_down']);
                $('.loadShoplistMask1').hide();
                $('#shoplist-mask').hide();
                var e = new LocationDropdown($("#uiv2-location-id"));

                if(json_data['normal_next_slot']){
                    normal_slot = json_data['normal_next_slot'];
                    $('#normal_slot').empty().html(normal_slot);
                    $(".normal-slot").prop("title", normal_slot);
                }

                if (json_data['darkstore_next_slot']){
                    darkstore_next_slot = json_data['darkstore_next_slot']
                    $('#express_slot').empty().html(darkstore_next_slot);
                    $(".exp-slot").prop("title", darkstore_next_slot);
                }
                else if(json_data['express_next_slot']){
                    express_slot = json_data['express_next_slot'];
                    $('#express_slot').empty().html(express_slot);
                    $(".exp-slot").prop("title", express_slot);
                }
                else{
                    $(".express_slot_container").hide();
                }
            }
        }
    });
}

function init_delivery_dropdown() {
    // Delivery Slots Box
    var deliverySlots = $('.uiv2-deliveryslot-link');
    var deliverySlotDropDown = $('.uiv2-deliveryslot-dropdown');

    deliverySlots.mouseenter(function (e) {
        deliverySlotDropDown.show();
        show_delivery_slots();
    }).mouseleave(function (e) {
        deliverySlotDropDown.hide();
    });

    deliverySlotDropDown.bind('afterShow', function(){
        show_delivery_slots();
    });
}

var main_menu_open = false;
var slide_no_to_display=-1;
function randomize_banner_display() {
    if (parseInt($('#randomize_banner').val()) == 1 && $('#uiv2-slideshow div ul li').length != 0){
        rand_num = Math.floor(Math.random()* $('#uiv2-slideshow div ul li').length);
        if (slide_no_to_display == -1){
         slide_no_to_display = rand_num;
        }
    }
    else{
        slide_no_to_display = 0
    }
    if ($('#uiv2-slideshow ul.uiv2-slides-nav li').length != 0 && slide_no_to_display != -1){
         $('#uiv2-slideshow ul.uiv2-slides-nav li').eq(slide_no_to_display).addClass('on');
        }
    return slide_no_to_display;
}

$('body').click(function(event){
   if($('.add-to-shoplist').has(event.target).length == 0){
       $('.add-to-shoplist').hide();
       $('.apply_sl').hide();
   }
   if($('.uiv2-location').has(event.target).length == 0){
      $("#uiv2-location-id").removeClass("active")
   }
   if($('.featuredItem').has(event.target).length == 0 && $('.add-to-shoplist').has(event.target).length == 0){
       $('.featured-products-hover-box').hide();
   }
});

$(document).ready(function(){
    $("#shop-by-list-link").on({
         mouseover: function () {
             load_shopping_list_menu();
         },
        mouseout: function(){
            $('.uiv2-shop-by-list-dropdown').hide();
        }
    });
    $("#shop_list").on({
        mouseenter: function () {
            load_shopping_list_menu();
        },
        mouseleave: function () {
            $('#shoplist-menu').hide()
        }
    });
    compute_top_menu_css();
    var appDownload;
    $("#sendSmsButton").on('click', function () {
        appDownload = new AppDownloadWeb(1);
        appDownload.sendDownloadSms()
    })
    state_changed = true;
    $("#numberForSms").focus(function () {
        $("#numberForSms").addClass('send_sms_focus');
    })
    $("#numberForSms").keyup(function () {
        $("#numberForSms").addClass('send_sms_focus');
    })
    $('.uiv2-basket-items').hide();
    $(".view_basket_checkout").click(function () {
        analyticsHandler.initParam();
        location.href = "/basket/?ver=1";
    });

    $('body').click(function(event){
       if($('.add-to-shoplist').has(event.target).length == 0){
           $('.add-to-shoplist').hide();
           $('.apply_sl').hide();
       }
       if($('.featuredItem').has(event.target).length == 0 && $('.add-to-shoplist').has(event.target).length == 0){
           $('.featured-products-hover-box').hide();
       }
    });

    $('#member_notifications').on('click touchend', function () {
        location.href = "/member/notifications/";
    });
    $('#member_account').on('click touchend', function () {
        location.href = "/member/";
    });
    $('#member_logout').on('click touchend', function () {
        location.href = "/auth/logout/";
    });

    $(".uiv2-shopping-list-right-column").click(function(event){
           if($('.featuredItem').has(event.target).length == 0 && $('.add-to-shoplist').has(event.target).length == 0){
           $('.featured-products-hover-box').hide();
       }
    });

    if (!window.old_ui) {
        $(document).click(function (e) {
            if ($(e.target).attr('class') != "icon icon-question-mark") {
                $('.uiv2-small-pop-up').hide();
                $('.uiv2-small-pop-up-reco').hide();

            } else {
            }
        });

        $('.uiv2-menu-bar').click(function (e) {
            $('.uiv2-main-menu').toggle();
        });

        init_page_data();

        init_search();

        init_templates();

        init_globals();

        //init_basket_hover();

        //scratch_list_edit_handler();

        $('#current-year').html(new Date().getFullYear());



        init_delivery_dropdown();

        BBUtils.showIEPopupIfApplicable();

    }

    TouchHandler.init();

    //Top menu hover

        var main_menu = $('.uiv2-main-menu');

        $('.uiv2-menu-bar').hover(function(e){

            if( location.pathname != "/" || $(this).attr('id') == "sticky-shop") {
                if (!main_menu_clicked) {
                    main_menu.show();
                } else {
                    main_menu_clicked = false;
                }
            }
        }).mouseleave(function(e){
            if( location.pathname != "/" || $(this).attr('id') == "sticky-shop") {
                setTimeout(function () {
                    if (!$('.uiv2-main-menu:hover').length > 0) {
                        main_menu.hide();
                    }
                    if (location.pathname == "/") {
                        $('#basket_menu').show();
                    }
                }, 100);
            }
        });

        main_menu.mouseleave(function(e) {
            if (location.pathname != "/" || $(this).attr('id') == "sticky-shop") {
            main_menu.hide();
        }
        }).mouseenter(function(e){
        });



    $(document).click(function(e){
        if( $(e.target).hasClass('uiv2-menu-bar') ){
            main_menu_clicked = true;
        }

    });
    $(".uiv2-shop-link").on("mouseover",function(){
        $("#ss-logo1").hide();
        $("#ss-logo2").show();
    });
    $(".uiv2-shop-link").on("mouseout",function(){
        $("#ss-logo2").hide();
        $("#ss-logo1").show();
    });
    /**----- Bigbasket menu ----------**/
    var timer;
    var delay = 120;
    $('.uiv2-dropdown-column li.uiv2-submenu').hover(function () {

        $(this).find('.uiv2-sub-dropdown-column').removeClass('inactive');
        $(this).find('.uiv2-sub-dropdown-column').addClass('active');
        timer = setTimeout(function () {
            $('.uiv2-sub-dropdown-column.active').show();
        }, delay);
    }, function () {
        $(this).find('.uiv2-sub-dropdown-column').removeClass('active');
        $(this).find('.uiv2-sub-dropdown-column').addClass('inactive');
        setTimeout(function () {
            $('.uiv2-sub-dropdown-column.inactive').hide();
        }, 120);
        clearTimeout(timer);
    });


    /**--- Bigbasket menu end -----------**/
});

function init_page_data(data){
//    data = data || {};
//    $.ajax({
//        url: make_req_url('/get-page-data/'),
//        cache: false,
//        data: data,
//        dataType: "json"
//    }).done(function(json_data){
//        page_data = json_data;
//        init_basket();
//        update_next_slot();
//    });
     init_basket();
     update_next_slot();
}

// function init_basket_hover() {
//     var checkout_basket = $(".uiv2-your-basket");
//     checkout_basket.hover(function () {
//         $(".uiv2-your-basket-dropdown").show();
//         checkout_basket.addClass("hover");
//         }, function () { $(this).stop(); });
//     checkout_basket.mouseleave(function () {
//         if (!checkout_clicked) {
//             $(".uiv2-your-basket-dropdown").hide();
//             checkout_basket.removeClass("hover");
//         }
//     });
// 	if (!BBUtils.is_touch_device()) {
// 		$(document).click(function(e) {
// 		    if (checkout_clicked) {
// 		        checkout_clicked = false;
// 		        $(".uiv2-your-basket-dropdown").hide();
// 		        checkout_basket.removeClass("hover");
// 		    }
// 		});
// 		$('.uiv2-checkout-widget').click(function (e) {
// 		    if (!checkout_clicked) {
// 		        checkout_clicked = true;
// 		        $(".uiv2-your-basket-dropdown").show();
// 		        checkout_basket.addClass("hover");
// 		    } else {
// 		        checkout_clicked = false;
// 		        $(".uiv2-your-basket-dropdown").hide();
// 		        checkout_basket.removeClass("hover");
// 		    }
// 		});
// 		checkout_basket.click(function (e) {
// 		    e.stopPropagation();
// 		});
// 	}
// }


function init_notifications(notificationData) {
    var has_more = notificationData.has_more;
    var notifications = notificationData.notifications;

    if(has_more){
        $('.uiv2-loggedin-user-link').css('background',
            'url("'+$('#id_static_url').val()+'uiv2/images/loggedin_error.png") no-repeat right 15px').css('background-position', '94% 15px');
    }

    if(notifications) {

        if (notifications.type == "popup") {
            $('#system-popup-message-subject').html(notifications.title);
            $('#system-popup-message-body').html(notifications.content);
            uiv2_show_popup('system-popup-message');
            //show_system_popup(notifications.title, notifications.content);
        }

        if (notifications.type == "show_message") {
            $('#show-message-subject').html(notifications.title);
            $('#show-message-body').html(notifications.content);
            $('#show-message').show();
            init_show_message();
        }

        if (notifications.type == "promo") {

            show_system_promo_poup(notifications.promo_id);

        }

        if (notifications.type == "evoucher") {

            show_system_evoucher_popup(notifications.title, notifications.description, notifications.code, notifications.expires);

        }

    }
}

function init_basket() {
    var num_item_str;
    if(page_data.num_items) {
        var json_data = page_data['num_items'];
        if (json_data['cart_no_items'] == 1) {
            num_item_str = json_data["cart_no_items"] + " item";
        } else {
            num_item_str = json_data["cart_no_items"] + " items";
        }
        $('.uiv2-num-basket-items').html(num_item_str);
        $('.uiv2-basket-items').show();
    }

    if(page_data.notifications){
        init_notifications(page_data.notifications)
    }
}

function show_system_evoucher_popup(title, description, code, expires){
    $('#system-voucher-popup-message-subject').html(title);
    $('#system-voucher-popup-heading').html(description);
    $('#system-voucher-popup-code').html(code);
    $('#system-voucher-popup-expiry').html(expires);
    uiv2_show_popup('system-voucher-popup-message');
}


function show_system_promo_poup(promo_id){

    $.ajax({
        url:"/promo/get-available-promos/",
        type:'post',
        dataType: "json",
        data: { 'promo_id': promo_id },
        success: function(data) {
            if(data['success']){
                var promo_available = $('#system_promo_available_div');
                promo_available.html(data['available_promos']);
                uiv2_show_popup('system_popup_available_promos');
                $('.uiv2-popup-wrapper').height(promo_available.height());
            }
        }
    });

}

//function show_system_popup(title, message){
//    $('#system-popup-message-subject').html(title);
//    $('#system-popup-message-body').html(message);
//    uiv2_show_popup('system-popup-message');
//}

function pop_up(a)
{
    var obj=$(a);
    var doc_height=$(document).height();
    var obj_win_width=$(window).width();
    var obj_win_height=$(window).height();

    var obj_pop_up_width=obj.width();
    var obj_pop_up_height=obj.height();

    var bg_obj=$('.uiv2-back-block').height(doc_height).width(obj_win_width);

    var mar_left=(obj_win_width-obj_pop_up_width)/2;
    var mar_top=(obj_win_height-obj_pop_up_height)/2;

    width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (obj_pop_up_width / 2));
    var top = ((height / 2) - (obj_pop_up_height / 2));

    if(obj_pop_up_height<obj_win_height && obj_pop_up_width<obj_win_width)
    {
        obj.css('margin-left',left+'px');
        obj.css('margin-top',top+'px');
    }
}

//function hide_pop_up() {
//    $('.uiv2-pop-up-window').hide();
//    $('#shadow-mask').hide();
//}

function Analytics(items, total, category, action, label, value) {
    this.items = items;
    this.itemsKey = "itemsKey";
    this.total = total;
    this.totalKey = "totalKey";
    this.category = category;
    this.action = action;
    this.label = label;
    this.value = value;

    this.initParam = function () {
        if (!this.items) {
            this.items = this.getLocalStorageData()[this.itemsKey];
        }
        if (!this.items) {
            return
        }
        this.total = this.total.replace('Rs.','');
        this.total = truncate_str(this.total);
        this.action = location.pathname;

        this.label = this.items + " | " + this.total;
        this.logAnalytics();
    };

    this.logAnalytics = function () {
        if (ganalytics) {
            ga('send', 'event', this.category, this.action, this.label, this.value);
        }
        else {
            console.log(this.category + "," + this.action + "," + this.label);
        }
    };
    this.checkLocalStorage = function(){
        try {
            localStorage.setItem('test', 1);
            localStorage.removeItem('test');
            return true
        } catch (error) {
            return false
        }
    };
    this.setLocalStorageData = function () {
        var local = this.checkLocalStorage();
        if (local) {
            localStorage.setItem(this.itemsKey, this.items);
            localStorage.setItem(this.totalKey, this.total);
        }
        return local;
    };
    this.getLocalStorageData = function(){
        var local = this.checkLocalStorage();
        if(local) {
            var data = {};
            data[this.itemsKey] = localStorage.getItem(this.itemsKey);
            data[this.totalKey] = localStorage.getItem(this.totalKey);
            return data;
        }
        return local
    }
}

function update_basket(cart_type, product_description, add_source){
    if(!cart_changed){
    return false;
    }

    if (!cart_type)
        cart_type = 1;

    var cart_items_holder = $('.cart-items-holder');
    var empty_cart_msg = '<li class="uiv2-cart-placeholder-msg"><p>Your basket is empty. Start shopping now!</p></li>';
    if (cart_items_holder.html() == empty_cart_msg) {
        cart_items_holder.empty();
    }

   var url = make_req_url('/basket/get/?ct='+cart_type);
//     var url = 'http://localhost/basket/get/?ct='+cart_type;

    $.ajax({
        url:url,
        cache: false,
        data:{},
        dataType:"json",
        success: function(json_data){
            var num_item_str;
            if (json_data["cart_no_items"] == 1) {
                num_item_str = json_data["cart_no_items"] + " item";
            } else {
                num_item_str = json_data["cart_no_items"] + " items";
            }
            $('.uiv2-num-basket-items').html(num_item_str);


            $(".uiv2-basket-saving").empty().html("<span class='WebRupee'>Rs.</span> "+truncate_str(json_data['cart_saving']));
            if (json_data['cart_saving'] == '0.00') {
                $(".uiv2-basket-items-saved").hide();
            } else {
                $(".uiv2-basket-items-saved").show();
            }

            if (add_source == ADD_TO_CART_SOURCES.AUTO_SEARCH || add_source == ADD_TO_CART_SOURCES.AUTO_SEARCH_AD){
                 $("#is_promo").val('0');
            }

            if(product_description ) {
                if ($("#is_promo").val() != '1'){
                    var mesg = 'Successfully added <strong>'+product_description+'</strong> to the basket';
                    $.notifyBar({ cls: "success",html: mesg});
                }
            }

            if (add_source == ADD_TO_CART_SOURCES.AUTO_SEARCH || add_source == ADD_TO_CART_SOURCES.AUTO_SEARCH_AD){
                 $("#is_promo").val('1');
                 if (typeof(refresh) != "undefined") {
                    refresh();
                 }
            }
            $(".uiv2-items-total-delivery_charge").empty();
            $(".uiv2-items-sub-total").empty();
            $(".uiv2-items-total-cost").empty().html("<b>Total: <span class='WebRupee'>Rs.</span> "+truncate_str(json_data['cart_total']) +"</b>");
            var delivery_limit = json_data.delivery_limit || 1000;
            //if( parseFloat(json_data['cart_total']) >= parseFloat(delivery_limit) ) {
            //    $(".uiv2-items-total-delivery_charge").empty();
            //    $(".uiv2-items-sub-total").empty();
            //} else {
                var cart_total = parseFloat(json_data['cart_total']);
                var remaining = parseFloat(delivery_limit - cart_total).toFixed(2);
                //var remaining = json_data['shop_for_more']
                if(cart_total > 0){
                    var final_total = parseFloat(json_data['delivery_charge']) + cart_total;
                    $(".uiv2-items-total-cost").empty().html("<b>Total: <span class='WebRupee'>Rs.</span> "+truncate_str(cart_total)+"</b>");
                    $(".uiv2-items-sub-total").empty().html("Sub Total: <span class='WebRupee'>Rs.</span> "+truncate_str(cart_total));
                    //$(".uiv2-items-total-delivery_charge").empty().html("Delivery Charges: <span class='WebRupee'>Rs.</span> "+truncate_str(json_data['delivery_charge']));
                    $(".uiv2-items-total-delivery_charge").empty().html("Delivery Charge : **  ")
                }
                //$(".uiv2-get-free-delivery").empty().html("<p>Shop for <strong><span class='WebRupee'>Rs.</span> </strong>"+truncate_str(remaining.toString())+" or more and get free delivery!");'
                //$(".uiv2-get-free-delivery").empty().html("**Actual Delivery Charges will be computed at checkout.")
            //}
    $(".uiv2-get-free-delivery").empty().html("<p>** Actual Delivery Charges computed at checkout. <a target='_blank' href='"+json_data['delivery_charge_url']+"'><i class='fa fa-question quest-info'></i></a></p>");

            if (!json_data["items"] || json_data["items"].length == 0) {
                cart_items_holder.html(empty_cart_msg)
                set_basket_size(80, 80, 80);
            } else if (json_data["items"] && (json_data["items"].length == 1 || json_data["items"].length == 2)) {
                cart_items_holder.html(cartitems_template(json_data))
                var height = cart_items_holder.actual('height');
                set_basket_size(height, height, height);
            } else {
                cart_items_holder.html(cartitems_template(json_data))
                set_basket_size(265, 265, 252);
            }

            init_view_basket(max_qty, cart_type, 'basket-popup', '.cart-items-holder ');

            $('.cart-items-holder .uiv2-remove-product').each(function(){
                $(this).click(function(){
                    remove_from_cart($(this).attr('id').split('_')[2], cart_type, null, 'remove-from-cart', 'basket-popup');
                });
            });
            analyticsHandler = new Analytics(json_data["cart_no_items"], json_data['cart_total'], 'view_basket', '','','1');

            cart_changed = false;
            if (json_data.cart_no_items > 0){
                pdid = json_data.items[0].pid
                send_vizury_tags("shopping_cart", pdid, json_data.cart_total);
            }
            updateEngagementStoreFromCart();
        }

    });
    return false;
}

function set_basket_size(container_ht, cart_area_ht, scrollbar_container_ht) {
    $(".scrollbar1").height(container_ht);
    $(".scrollbar1 .viewport").height(cart_area_ht);
    $(".scrollbar").height(scrollbar_container_ht);
//    $('.scrollbar1').tinyscrollbar_update();
}
function init_globals(){
    static_url = $('#id_static_url').val();
    max_qty = $('#id_max_qty').val();
    csrf = $('#id_csrftkn').val();
    ganalytics = ($('#flag-gana').val() == 'True');
    bb_analytics = ($('#flag-ana').val() == 'True');
}

function init_templates(){
    autosearch_template = Handlebars.compile($("#tmplt-autosearch").html(), {noEscape: true});
    cartitems_template = Handlebars.compile($("#tmplt-cart-items").html(), {noEscape: true});
    $('.cart-items-holder').html(cartitems_template({}));
}

function make_req_url(url){
    return (window.location.protocol == 'https:' ? '/auth' : '') + url;
}


function init_autosearch_add_to_cart_buttons(){

    $('.uiv2-a2c-autosearch').click(function(){
        if ($(this).hasClass('auto-ad')) {
            var ad_type = "Auto-ad"
        }
        var pid = $(this).attr('id').split('-')[2];
        //var qty = parseInt($('#uiv2-qty-'+pid).val());

        var topParent = $(this).parent().parent();
        var qty = parseInt(topParent.find('div.uiv2-search-qty-widget').find('input').val());
        var item_mode = topParent.find("input[name='cart-item-mode']").val();

        if(!qty || qty == 1) {
            qty = $('#uiv2-banner-qty-'+pid);
            if (qty.length == 0){
                qty = 1;
            }
            else{
                qty = parseInt(qty.val());
                if(!qty){
                    qty = 1;
                }
            }
        }
        var product_description = $('#uiv2-pdesc-'+pid).val();
        if (!is_valid_qty(qty)) {
            show_alert('Invalid Quantity');
            return false;
        }
        if(ad_type == "Auto-ad"){
            add_to_basket(pid, qty, 1, product_description, ADD_TO_CART_SOURCES.AUTO_SEARCH_AD, item_mode);
        }
        else {
            add_to_basket(pid, qty, 1, product_description, ADD_TO_CART_SOURCES.AUTO_SEARCH, item_mode)
        }
    });
}

var current_as_suggestion = null;

function do_auto_complete_search(term, autosearch_api){
    var is_cookie=validate_cookie();
    if(is_cookie){
    var autosearch_url = autosearch_api || $("#autosearch_url").val();

    var search_block = $('.uiv2-search-dropdown-block');
    var search_drop_down = $(".uiv2-search-dropdown-block");

    if(term.length >= 3 ){

         current_as_suggestion = null;
         $.ajax({
            url: autosearch_url,
            dataType: "json",
            cache: false,
            data: {term: term, city_id: $('#city_id').val()},
            success: function(resp) {
                data = resp;
                member_stores = resp.member_stores;
                resp = resp['results'];
                resp.member_stores = member_stores;
                q_term = resp.term;
                ab_mode = data['ab_mode'];
                is_express_valid_address = data['is_express_valid_address'];

                if (ab_mode == 'contextual'){
                    resp.ab_mode = 1;
                }
                else{
                    resp.ab_mode = 0;
                }

               for(var i in resp.data)  {
                    var p = resp.data[i];
                    var do_not_loop = false;
                    if(p){
                        p.store_details_to_use = {};
                        for(var ri_id in p.store_details){
                            if (!p.store_details.hasOwnProperty(ri_id)) continue;
                            var store_slots_dict = p.store_details[ri_id];
                            if (!('fi_id' in store_slots_dict)){
                                do_not_loop = true;
                                break;
                            }
                            var fi_id = store_slots_dict['fi_id'];
                            var fi_type = store_slots_dict['fi_type'];
                            var availability = p.availability;  // This is actually product's RI availability (Node.js already does an intersection of member-stores & product stores)
                            // Not using triple equals deliberately, don't change it
                            if (member_stores[ri_id] && member_stores[ri_id][fi_id] && (availability == 1 || availability == 2)) {
                                p.store_details_to_use[fi_type] = {
                                    next_slot: member_stores[ri_id][fi_id]['eta'],
                                    fi_type: fi_type,
                                }
                            }
                        }

                        if(do_not_loop){
                            continue;
                        }

                        if(resp.ab_mode != 1) {
                            if('darkstore-express' in p.store_details_to_use && 'normal' in p.store_details_to_use) {
                                delete p.store_details_to_use['normal']
                            }
                        }
                    }
                }

                var results_holder = $('#id_autosearch_list_container');
                var no_result = $('#uiv2-no-result');
                var scroll_bar = $("#scrollbar2");
                var scroll_bar_viewport = $("#scrollbar2 .viewport");
                var resize = false;
                var resp_term = resp.term;
                if ((resp['top_searches'] && resp['top_searches'].length > 0)
                    && (!resp['data'] || resp['data'].length == 0)) {
                    no_result.html('No results found for <i>' + resp.term + "</i>.");
                    resp['top_searches'] = BBUtils.column_major_chunks(resp['top_searches'], 4);
                    resize = true;
                } else {
                    resize = false;
                    if(!resp['alt_suggestions'])    no_result.html('Showing results for <i>"'+resp.term+'"');
                    else if(resp['alt_suggestions']){
                        if(resp.data)   no_result.html('No results found for "'+resp.term+'"<BR>Instead showing suggested products for: "'+resp.alt_term+'"');
                        else    no_result.html('No results found for "'+resp.term+'"<BR>Instead showing suggested products for: "'+resp.alt_term+'"');
                    }
                    else    no_result.html('We do not understand "'+resp.term+'".<BR>Perhaps you may be interested in');
                }
                results_holder.empty();
                if(resp['alt_suggestions'] && resp['alt_pb_pc_res']){
                    $('#id_alt_suggestions').show();
                    $('#id_alt_list_container').show();
                }
                $(results_holder).append(autosearch_template(resp));

//                $(".exp-slot").prop("title", ex_slots);
//                $(".normal-slot").prop("title", normal_slots);

                search_block.show();
                var view_all_product = $("#id_search_view_all_link");
                if (resize) {
                    search_drop_down.css("height", "auto");
                    scroll_bar.css("height", "auto");
                    scroll_bar_viewport.height(216);
                    view_all_product.html("VIEW COMPLETE SHOP");
                    view_all_product.attr("href", "/product/all-categories/");
                } else {
                    search_drop_down.height(452);
                    scroll_bar.height(378);
                    scroll_bar_viewport.height(378);
                    if (resp['alt_suggestions'] && (resp['alt_pb_pc_res'] || resp['data'])){
                        $('#id_search_view_all_link').html("VIEW COMPLETE SHOP");
                        $('#id_search_view_all_link').attr("href", "/product/all-categories/");
                    }else   view_all_product.html("VIEW ALL PRODUCTS");
                }
                search_block.mouseleave(function(){
                    search_block.hide();
                });

                $('.scrollbar1').tinyscrollbar();
                $('#scrollbar2').tinyscrollbar();

                if(resp.suggestions) {

                    if(resp.suggestions.brands.length == 0 && resp.suggestions.terms.length ==0 && resp.suggestions.categories.length == 0){
                        $(".uiv2-product-search-list-wrap").css("border-right", "1px solid gray");
                        $(".uiv2-product-search-list-wrap").css("border-left", "0 none");
                    }

                    var brands_holder = $('#uiv2-search-brands');
                    var categories_holder = $('#uiv2-search-categories');
                    var terms_holder = $('#uiv2-search-terms');
                    var ads_holder = $('#uiv2-promo-ads');
                    var common_term_container = $('#id_common_search_container');
                    var popular_brand_container = $('#id_popular_brand_container');
                    var common_categories = $('#id_common_categories');
                    var ads_container = $('#auto_promo_ad');
                    if (resp.suggestions.brands.length || resp.suggestions.categories.length || resp.suggestions.terms.length) {
                        $('.uiv2-product-rightlist-wrap').show();
                        $("#id_more_suggestion_labels").show();
                        $(".uiv2-search-dropdown-block").css("width", "793px");

                        brands_holder.empty();
                        if (resp.suggestions.brands.length) {
                            popular_brand_container.show();
                            $.each(resp.suggestions.brands, function (i, brand) {
                                if (i < 4) {
                                    $('<li> <a href="' + brand.url + '?nc=ascs">' + brand.name + "</a></li>").appendTo(brands_holder);
                                }
                            });
                        } else {
                            popular_brand_container.hide();
                        }

                        categories_holder.empty();
                        if (resp.suggestions.categories.length) {
                            common_categories.show();
                            $.each(resp.suggestions.categories, function (i, category) {
                                if (i < 4) {
                                    $('<li> <a href="' + category.url + '?nc=ascs">' + category.name + "</a></li>").appendTo(categories_holder);
                                }
                            });
                        } else {
                            common_categories.hide();
                        }

                        terms_holder.empty();
                        if (resp.suggestions.terms.length) {
                            common_term_container.show();
                            $.each(resp.suggestions.terms, function (i, term) {
                                if (i < 5) {
                                    url = "/ps/?q=" + term.url + "&nc=ascs";
                                    $('<li> <a href="'+ url + '" >' + term.term + "</a></li>").appendTo(terms_holder);
                                }
                            });
                        } else {
                            common_term_container.hide();
                        }
                        ads_holder.empty();
                        if (resp.suggestions.ads ||resp.suggestions.discounts ) {
                            $('#auto_promo_ad').html(data['sl_menu']);

                            ads_container.show();
                        } else {
                            ads_container.hide();
                        }
                    } else {
                        $(".uiv2-search-dropdown-block").css("width", "auto");
                        $('.uiv2-product-rightlist-wrap').hide();
                        $("#id_more_suggestion_labels").hide();
                    }
                }

                if(resp.correction == null || resp.correction == undefined || resp.correction.length == 0) {
//                        $('.uiv2-no-result-found').hide();
//                        $('.uiv2-product-right-list-wrap').hide();

                } else {
                    if(resp.alt_suggestions == true && resp.data)
                    no_result.html('No Results found for <i>"'+resp.term+'"</i>. Instead showing results for <i>"'+resp.correction+'"</i>');
//                        $('.uiv2-no-result-found').show();
//                        $('.uiv2-product-right-list-wrap').show();
//                        search_block.css('width', '784px');
//                        search_block.css('height', '470px');
                }

                if (!('alt_suggestions' in resp) || resp.alt_suggestions == false) {
                    $('#id_autosearch_list_container > div.uiv2-no-result-found').remove();
                }

                if(resp.correction && resp.correction.length > 1) {
                     current_as_suggestion = resp.correction;
                }

                if(resp.data.length >= AUTO_SEARCH_LIMIT) {
                    view_all_product.show();
                    setTimeout( function() {

                       var view_all_url = '/ps/?nc=as&q='+ encodeURIComponent( term );

                       view_all_product.attr('href', view_all_url );
                    }, 60);
                }

                //Analytics event tracking
                if(ganalytics){
                    if (data.results.alt_suggestions){
                        _gaq.push(['_trackEvent', 'search', 'Suggestion', term, data.results.data.length]);
                    }else {
                        _gaq.push(['_trackEvent', 'search', 'auto-search', term, resp.data.length]);
                    }
                }else{
                    if (data.results.alt_suggestions) {
                        console.log(['search', 'suggestion', term, resp.data.length]);
                    }else{
                        console.log(['search', 'auto-search', term, resp.data.length]);
                    }
                }
                init_autosearch_add_to_cart_buttons();

            }
        });
    } else if (term.length == 0) {
        search_block.hide();
    }
    }
}

function init_search(){

     var q_input = $('#id_q');
     q_input.click(function () {
         if( autosearch_results > 1 ){
             $(".uiv2-search-dropdown-block").show();
         }
    });


    var search_drop_down = $(".uiv2-search-dropdown-block");

    search_drop_down.mouseleave(function () {
        search_drop_down.hide();
    });

    $(document).click(function (e) {
        var targetObj = $(e.target);
        if (!(targetObj.get(0) == search_drop_down.get(0) || search_drop_down.find(targetObj).exists())
            && search_drop_down.is(":visible")) {
            search_drop_down.hide();
        }
    });

    q_input.typeWatch({
       callback: do_auto_complete_search,
       wait: 300,
       captureLength: 3
    });
    $('.scrollbar1').tinyscrollbar();
    $('#scrollbar2').tinyscrollbar();
}

function validate_email(email)
{
    if(email == "" || email == null || email == undefined) { return false; }

    var atpos=email.indexOf("@");
    var dotpos=email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
      {
      return false;
      }
    return true;
}


function get_qty(pid) {
    var ele = parseInt($('#uiv2-qty-'+pid).val());
    if( !ele || ele ==1) {
        ele = $('#uiv2-banner-qty-'+pid);
        if(ele.length == 0){
            ele = 1;
        }
        else{
            ele = parseInt($('#uiv2-banner-qty-'+pid).val());
            if(!ele){
                ele = 1;
            }
        }
    }
    return ele;

}

//function cart_dec_qty(pid){
//   var ele = $('#uiv2-qty-'+pid);
//   var qty = get_qty(pid);
//   qty -= 1;
//   if( qty < 1 ) {
//       qty = 1;
//   }
//   ele.val(qty);
//
//}

//function cart_inc_qty(pid){
//    var ele = $('#uiv2-qty-'+pid);
//    var qty = get_qty(pid);
//    ele.val(qty);
//    qty += 1;
//    ele.val(qty);
//}

function set_pd_cart_nav_ctx() {
    $('.a2c').off('click');
    init_a2c_for_selector('.uiv2-product-detail-content .a2c', ADD_TO_CART_SOURCES.PD);
    init_a2c_for_selector('.category_rp .a2c', ADD_TO_CART_SOURCES.PD_REL_CAT_PROD);
    init_a2c_for_selector('.related_brand .a2c', ADD_TO_CART_SOURCES.PD_REL_BRAND);
    init_a2c_for_selector('.related_top_cat .a2c', ADD_TO_CART_SOURCES.PD_TOP_LEVEL_CAT);
    init_a2c_for_selector('.related_store_offers .a2c', ADD_TO_CART_SOURCES.PD_STORE);
    init_a2c_for_selector('.also_bought .a2c', ADD_TO_CART_SOURCES.PD_ALSO_BOUGHT);

    init_view_basket(max_qty, 1, ADD_TO_CART_SOURCES.PD, '.uiv2-product-detail-content ');
    init_view_basket(max_qty, 1, ADD_TO_CART_SOURCES.PD_REL_CAT_PROD, '.category_rp ');
    init_view_basket(max_qty, 1, ADD_TO_CART_SOURCES.PD_REL_BRAND, '.related_brand ');
    init_view_basket(max_qty, 1, ADD_TO_CART_SOURCES.PD_TOP_LEVEL_CAT, '.related_top_cat ');
    init_view_basket(max_qty, 1, ADD_TO_CART_SOURCES.PD_STORE, '.related_store_offers ');
    init_view_basket(max_qty, 1, ADD_TO_CART_SOURCES.PD_ALSO_BOUGHT, '.also_bought ');
}

function update_promo_page(promo_id){
    $.ajax({
        url:"/promo/add-promo-product-to-basket/",
        type:'post',
        dataType: "json",
        data: {promo_id: promo_id},
        success: function(data) {
            if(data['success']){
                $('#promoCartDetails').html(data['promo_cart_html']);
            }
        }
    });
}

function get_multi_combo_products(sku_id, product_name){
    $.ajax({
        url:"/product/get-multi-combo-products/",
        data:{'sku_id':sku_id},
        type:'get',
        success: function(data) {
            if(data['success']){
                console.log(data['data']);
                $('#comboModal').modal('show');
                if(data['data'].length > 1){
                    $('#modal_title')[0].innerHTML = "Combos using "+ product_name;
                }
                else{
                    $('#modal_title')[0].innerHTML = "Combo using "+ product_name;
                }
                $('#static_content').empty();
                for(var i=0; i < data['data'].length ; i++){
                    var li = document.createElement('li');
                    li.setAttribute("class", "item");

                    li.innerHTML = data['data'][i];
                    $('#static_content').append(li);
                };
                init_a2c_for_selector('.a2c', null);
                init_view_basket(25,1);

                // var nav_required = (data['data'].length > 3)? true : false;
                var item_count = (data['data'].length < 3)? data['data'].length : 3;

                $('#static_content').carouFredSel({
                    responsive: true,
                    width: 'auto',
                    auto: false,
                    prev: '#prev',
                    next: '#next',
                    infinite: false,
                    circular: false,
                    items: {
                        height: 400,
                        visible: {
                            min: item_count
                        }
                    }
                })
                if($(document).width() > 767){
                    if (data['data'].length == 1) {
                        $('#comboModal .modal-dialog').css('width','240px');
                    }
                    else if (data['data'].length == 2) {
                        $('#comboModal .modal-dialog').css('width','455px');
                    }
                    else {
                        $('#comboModal .modal-dialog').css('width','608px');
                    }
                }
            }
        }
    });
}
function qty_changed(pid, qty, cart_type, is_list, type, src){
    if(!is_list)
    {
        var reserved_qty = $('#reserved_qty_' + pid).text();
        var result = parseInt(qty) > parseInt(reserved_qty);
        if(result){
            var pname = $('#p_name_'+pid).text();
           show_alert('We are sorry, but you can only order up to ' + reserved_qty + ' quantity of '+ pname);
            $('#p_'+pid).val(reserved_qty);
            qty = reserved_qty;
        }
        else {
            if(qty === ''){
                qty = 1;
            }
        }
    }

    var term = "";
    var term_source = "";

    //Find search term for auto search and ps
    if(src == ADD_TO_CART_SOURCES.ALTERNATE_PRODUCT) {
        term = $('#id_q').val();
        term_source = 'SUGGESTION'
    }else if(src == ADD_TO_CART_SOURCES.AUTO_SEARCH || src == ADD_TO_CART_SOURCES.AUTO_SEARCH){
        term = $('#id_q').val();
        term_source = 'AUTO'
    } else if(location.pathname == "/ps/"){
        term = $('#id_q').val();
        term_source = 'PS'
    }

    sid = "";
    if(typeof(facets) != 'undefined' && facets.sid){
        sid = facets.sid;
    }
    is_express_tab = $("#express_tab_"+pid).val();
    cartitem_mode = $.trim($("#cartitem_mode_"+pid).val());
    var basketUrlBuilder = new BasketUrlBuilder();
    var basketUrls = window.USE_NODE_CART_SERVICE ? basketUrlBuilder.withNodeCartUrl().build(): basketUrlBuilder.build();
    $.ajax({
       // url:'/basket/qty-update/',
       //  url: make_req_url('/basketService/update-qty'),
        url: basketUrls.updateQtyUrl,
        type:'post',
        data:{
            prod_id: pid,
            qty: qty,
            cart_type: cart_type,
            is_list: is_list,
            term: term,
            term_source: term_source,
            sid: sid,
            is_express_tab: is_express_tab,
            cartitem_mode: cartitem_mode,
        },
        dataType:"json",
        success: function(json_data){
            var unitMrp = ($('#hdnmrp_'+pid).val() === undefined)?0.0:$('#hdnmrp_'+pid).val();

            var contextElementWithData = $($('li[name=widget_'+pid+']').closest( "div:has(*[data-inpagecontext])").children()[0]).data('inpagecontext');
            var screenInpageContext = (contextElementWithData === undefined)?'':contextElementWithData;
            screenInpageContext = (is_express_tab === 'True' )?'bbe': screenInpageContext;
            last_added_product = pid;
            $(document).trigger('basketInteractionsPlower', [{'EventName':(type === 'incr-quantity')? 'Basket_Increment':'Basket_Decrement',
                'SkuID': pid, 'Quantity': 1, 'UnitMrp': unitMrp, 'UnitSalePrice': $('#hdnsp_'+pid).val(), 'ScreenInPageContext': screenInpageContext }]);
            if (json_data['success'] === false && json_data['added'] === false) {
                show_alert(json_data['mesg']);
                // Assuming the only number in the mesg is the max qty, apply that to a textbox
                var max = json_data['mesg'].replace(/\D+/g, '');
                if (max) {
                    $('#p_'+pid).val(max);
                    $('#p_'+pid).trigger('blur')
                }
            }
            else
            {
                if (typeof(refresh) != "undefined") {
                    refresh();
                }
                promo_id = $('#cart_promotion_id').val();
                if (promo_id){
                    update_promo_page(promo_id);
                }
            }
            if( json_data["success"] == true){
                cart_changed = true;
                if (src == "basket-popup") {
                    update_basket(cart_type, null, ADD_TO_CART_SOURCES.UPDATE_QTY);
                }
                if (json_data["basket_widget"] != "undefined") {
                    update_basket_widget(pid, cart_type, json_data["basket_widget"], true, src);
                }
                if(ganalytics){
                    _gaq.push(['_trackEvent', type, src, pid+"."+json_data['pslug'], qty]);
                } else {
                    console.log(type, src, pid+"."+json_data['pslug'], qty)
                }
            }
            if(json_data.num_items){
                $('#totalNumberOfCartItems').html(json_data.num_items +' items');
            }
        }
    });
}

function remove_from_cart(prod_id, cart_type, is_list, type, src){
    var is_cosmetic_modal = false;
    //To check if cosmetic modal is open or not
    if($('#color-picker-modal').hasClass('in') == true){
        is_cosmetic_modal = true;
    }
    is_express_tab = $("#express_tab_"+prod_id).val();
    sid = "";
    if(typeof(facets) != 'undefined' && facets.sid){
        sid = facets.sid;
    }
    var basketUrlBuilder = new BasketUrlBuilder();
    var basketUrls = window.USE_NODE_CART_SERVICE ? basketUrlBuilder.withNodeCartUrl().build(): basketUrlBuilder.build();
    $.ajax({
       // url:make_req_url('/basket/del-item/'),
       //  url: make_req_url('/basketService/del-item'),
        url: basketUrls.delItemUrl,
        type:'post',
        data:{'sid':sid, 'is_express_tab':is_express_tab,
              'prod_id':prod_id,cart_type:cart_type,is_list:is_list, 'is_cosmetic_modal':is_cosmetic_modal},
        dataType:"json",
        success: function(json_data){
            var unitMrp = ($('#hdnmrp_'+prod_id).val() === undefined)?0.0:$('#hdnmrp_'+prod_id).val();
            last_added_product = null;
            var contextElementWithData = $($('li[name=widget_'+prod_id+']').closest( "div:has(*[data-inpagecontext])").children()[0]).data('inpagecontext');
            var screenInpageContext = (contextElementWithData === undefined)?'':contextElementWithData;
            screenInpageContext = (is_express_tab === 'True' )?'bbe': screenInpageContext;

            $(document).trigger('basketInteractionsPlower', [{'EventName':'Basket_Remove', 'SkuID': prod_id,
                'Quantity':Number($("#p_"+prod_id).val().match(/\d/g)), 'UnitMrp': unitMrp, 'UnitSalePrice': $('#hdnsp_'+prod_id).val(), 'ScreenInPageContext':screenInpageContext }]);

            if( !json_data['success'] ) {
               show_alert('Error removing product from basket!');
            }
            else{
                cart_changed = true;
                if (src == "basket-popup") {
                    update_basket(1, null, ADD_TO_CART_SOURCES.UPDATE_QTY);
                } else {
                    init_page_data();
                    init_basket();
                }
                $('#id_prow_'+prod_id).remove();
                //Analytics event tracking
                if(ganalytics){
                    _gaq.push(['_trackEvent',type, src, prod_id+"."+json_data['pslug'], 1]);
                } else {
                    console.log(type, src, prod_id+"."+json_data['pslug'], 1)
                }
                promo_id = $('#cart_promotion_id').val();
                if (promo_id){
                    update_promo_page(promo_id);
                }
                if (json_data["basket_widget"] != "undefined") {
                    update_basket_widget(prod_id, cart_type, json_data["basket_widget"], false, src);
                }
            }
            if (typeof(refresh) != "undefined") {
                refresh_impulse_menu()
                refresh();
            }

            if(window.remove_product_success_callback !== undefined) {
                window.remove_product_success_callback();
            }
            $('#totalNumberOfCartItems').html(json_data.num_items +' items');
            setTimeout(function(){initialize_carousel();},1000);
            return false;
        }
    });
}

function update_basket_widget(pid, cart_type, basket_html, in_cart, src) {
    $("li[name='widget_"+ pid + "'] .uiv2-add-to-basket").html(basket_html);
    if (in_cart) {
        init_view_basket(max_qty, cart_type, src, 'li[name="widget_'+ pid + '"] ');
        if ($('li[name="widget_'+ pid + '"].uiv2-selected-product').length == 0) {
            $('li[name="widget_'+ pid + '"]').addClass('uiv2-selected-product');
        }
    } else {
        init_a2c_for_selector('li[name="widget_'+ pid + '"] .a2c');
        if ($('li[name="widget_'+ pid + '"].uiv2-selected-product').length >= 1) {
            $('li[name="widget_'+ pid + '"]').removeClass('uiv2-selected-product');
        }
    }
    is_pd_page = $("#a2c-pd-"+pid).val();
    if(is_pd_page== 1){
       $('li[name="widget_'+ pid + '"]').removeClass('uiv2-selected-product');
    }
}

function add_to_basket(prod_id, qty, cart_type, product_description, add_source, item_mode){
    var p_pos;
  //  var scratch_list_query_term = $("#scl_query_term").val();
    var nc = get_add_to_basket_nav_ctx(add_source);
    var term = "";
    var term_source = "";
    try{
        p_pos = $('#p'+prod_id).attr('class').split(' ')[1].split('_')[1];
    }
    catch(err){
        p_pos = '0';
    }

   //Find search term for auto search and ps
    if(add_source == ADD_TO_CART_SOURCES.ALTERNATE_PRODUCT){
        term = $('#id_q').val();
        term_source = 'SUGGESTION'
    }else if(add_source == ADD_TO_CART_SOURCES.AUTO_SEARCH || add_source ==ADD_TO_CART_SOURCES.AUTO_SEARCH_AD){
        term_source = 'AUTO';
        if(current_as_suggestion != null) {
            term = current_as_suggestion;
        } else {
            term = q_term;
        }
    } else if(location.pathname == "/ps/"){
        term_source = 'PS';
        term = $('#q_term_products').val();
    }
    sid = "";
    if(typeof(facets) != 'undefined' && facets.sid){
        sid = facets.sid;
    }
    is_express_tab = $("#express_tab_"+prod_id).val();

    if(add_source == ADD_TO_CART_SOURCES.AUTO_SEARCH && item_mode){
        cartitem_mode = item_mode;
    }
    else{
        cartitem_mode = $.trim($("#cartitem_mode_"+prod_id).val());
    }
    var basketUrlBuilder = new BasketUrlBuilder();
    var basketUrls = window.USE_NODE_CART_SERVICE ? basketUrlBuilder.withNodeCartUrl().build(): basketUrlBuilder.build();

    $.ajax({
       // url:make_req_url('/basket/add/'),
       //  url: make_req_url('/basketService/add'),
        url: basketUrls.addToCartUrl,
        xhrFields: { withCredentials:true },
        cache:false,
        type:'post',
        data:{
            prod_id: prod_id,
            qty: qty,
            ru: window.location.pathname+window.location.search+'&spn='+p_pos,
            cart_type: cart_type,
            nc: nc,
            term: term,
            term_source: term_source,
            sid: sid,
            csrfmiddlewaretoken:csrf,
            is_express_tab: is_express_tab,
            cartitem_mode: cartitem_mode,
        },
        dataType:"json",
        success:function(json_data){
            if( !json_data['success'] ) {
                if (!json_data['added']) {
                    show_alert(json_data['mesg']);
                }else{
                    show_alert('Error adding product to cart!');
                }
                return false;
            }
            else {
                promo_id = $('#cart_promotion_id').val();
                if (promo_id){
                    update_promo_page(promo_id);
                    if(ga) {
                        ga('set', 'metric2', 1);
                    }
                }
                if(window.add_product_success_callback !== undefined) {
                    window.add_product_success_callback(prod_id);
                }
            }
            updateEngagementStore(prod_id,qty);
            var unitMrp = ($('#hdnmrp_'+prod_id).val() === undefined)?0.0:$('#hdnmrp_'+prod_id).val();

            var contextElementWithData = $($('li[name=widget_'+prod_id+']').closest( "div:has(*[data-inpagecontext])").children()[0]).data('inpagecontext');
            var screenInpageContext = (contextElementWithData === undefined)?'':contextElementWithData;
            screenInpageContext = (is_express_tab === 'True' )?'bbe': screenInpageContext;

            $(document).trigger('basketInteractionsPlower', [{'EventName':'Basket_Add', 'SkuID': prod_id,
                 'Quantity': qty, 'UnitMrp': unitMrp, 'UnitSalePrice': $('#hdnsp_'+prod_id).val(), 'ScreenInPageContext': screenInpageContext }]);
            if(json_data.num_items){
                $('#totalNumberOfCartItems').html(json_data.num_items +' items');
            }
            if( window.location.pathname == '/member/smart-basket/') {
                add_source = ADD_TO_CART_SOURCES.SMART_BASKET;
                ga('set', 'metric3', 1);
            }

            if( window.location.pathname == '/member/recommendations/') {
                add_source = ADD_TO_CART_SOURCES.RECOMMENDATIONS;
            }

            if( add_source == ADD_TO_CART_SOURCES.DYF && ga ) {
                ga('set', 'metric4', 1);
            }

            if( window.location.pathname.search('order') != -1 && window.location.pathname.search('order-detail') != -1 && ga ) {
                ga('set', 'metric5', 1);
            }

            if( add_source == ADD_TO_CART_SOURCES.FEATURED_PRODUCT && ga){
                ga('set', 'metric6', 1);
            }
            //init_page_data();
            if(page_data['num_items'] === null){
               page_data.num_items = {'cart_no_items': json_data['num_items'] };
            }else{
               page_data['num_items']['cart_no_items'] = json_data['num_items'];
            }

            init_basket();
            cart_changed = true;

            if(!product_description) {
                if(last_add_prod !== null && last_add_prod !== undefined && add_source != ADD_TO_CART_SOURCES.UPDATE_QTY){
                    product_description = $('#prod-'+last_add_prod+'-desc').val();
                }
            }

            if (product_description) {
                mesg = 'Successfully added <strong>'+product_description+'</strong> to the basket';
            } else {
                mesg = 'Successfully added the product to the basket';
            }

            if($.cookie('_bb_ftvid')){
                $(document).trigger('firstBasketAdd');
                $('.top-header').addClass('locpops');
                $('.middle-header').css('top', '24px');
            }else{
                $.notifyBar({ cls: "success",html: mesg});
                $('.top-header').removeClass('locpops');
                $('.middle-header').css('top', '0px');
            }


            var src = '';
            if(add_source == ADD_TO_CART_SOURCES.AUTO_SEARCH) {
                src = 'auto-search'
            } else if(add_source == ADD_TO_CART_SOURCES.ALTERNATE_PRODUCT){
                src = 'suggestion'
            } else if (add_source == ADD_TO_CART_SOURCES.AUTO_SEARCH_AD) {
                src = 'auto-ad'
            }else if (add_source == ADD_TO_CART_SOURCES.DYF) {
                src = 'dyf'
            } else if (add_source == ADD_TO_CART_SOURCES.PROMO_POPUP) {
                src = 'promo-popup'
            }
            else if (add_source == ADD_TO_CART_SOURCES.FEATURED_PRODUCT) {
                src = 'fp'
            }
            else if (add_source == ADD_TO_CART_SOURCES.SMART_BASKET) {
                src = 'smart-basket'
            }
            else if (add_source == ADD_TO_CART_SOURCES.RECOMMENDATIONS) {
                src = 'recommendation'
            }
            else if (add_source == ADD_TO_CART_SOURCES.IMPULSE_BUYING) {
                src = 'impulse-buying'
            }
            else if (add_source == ADD_TO_CART_SOURCES.ENGAGEMENT_STORE) {
                src = engagementStoreName+' | engagement_store'
            }
            else {
                if (nc == 'n') {
                    src = location.pathname;
                } else {
                    src = nc
                }
            }
            var path = location.pathname
            if (path.search('all-offers') == 1) {
                src = location.pathname
            }
            var pdescription = prod_id+"."+json_data["pslug"];
            //Analytics event tracking
            if(ganalytics && (add_source != ADD_TO_CART_SOURCES.IMPULSE_BUYING)) {
               _gaq.push(['_trackEvent','add-to-cart', src, pdescription, parseInt(qty)]);
            } else {
                console.log('add-to-cart',src, pdescription, parseInt(qty));
            }
            if (json_data["basket_widget"] != "undefined") {
                update_basket_widget(prod_id, json_data['cart_type'], json_data["basket_widget"], true, src);
            }
            if(add_source == ADD_TO_CART_SOURCES.AUTO_SEARCH || add_source ==ADD_TO_CART_SOURCES.AUTO_SEARCH_AD ||
                    add_source == 'pd' || add_source == 'pd-cat' || typeof(add_source) == 'undefined'){
                send_vizury_tags("shopping_cart", prod_id);
            }
            var price = parseFloat(json_data["p_total"]) / parseInt(qty)
            if (!isNaN(price)) {
                dataLayer.push({
                    'event': 'add_to_basket_onclick',
                    'product_id': prod_id,
                    'price': price,
                    'quantity': qty
                });
            }
            return false;
        }
    });
    return false;
}

function see_child(current_id, new_id) {
    $('#' + current_id).hide();
    $('#' + new_id).show();
}

function uiv2_show_popup(content_id, close_on_esc, popup_height){

    if(close_on_esc == undefined || close_on_esc == null){
        close_on_esc = true;
    }

    var popup = $('#'+content_id);

    if( popup_height == null || popup_height == undefined ) {
        popup_height = popup.height();
    }

    var e = $(document).width();
    var t = $(document).height();
    var background_shade = $('.uiv2-background-shade');

    background_shade.height(t);
    background_shade.width(e);
    popup.fadeIn("slow");
    background_shade.fadeIn("slow");

    $('.uiv2-location').hide();

    $(".uiv2-popupclose").click(function () {
        uiv2_hide_popup(content_id);
    });

    if(close_on_esc) {
        $(document).keyup(function(e) {

            if (e.keyCode == 27) {
                uiv2_hide_popup(content_id);
            }   // esc
        });
    }
    $('.uiv2-popup-wrapper').height(popup_height);
    if (content_id == "system-popup-message") {
        $('.uiv2-popup-wrapper').removeAttr('style');
    }
    if( content_id == "uiv2-new-address-form") {
        init_newaddress_autocomplete();
    }
}

function uiv2_show_small_popup(aele, content_id) {

    $('#'+aele).hover(function(){
         $('#'+content_id).toggle();
    })

}

function submit_edit_address() {
    init_edit_address_submit();
    $('#frmEditAddress').submit();
}

function isNumberKey(evt) {
   var charCode = (evt.which) ? evt.which : evt.keyCode;
   return !(charCode > 31 && (charCode < 48 || charCode > 57));
}

function set_utm_cookies(){

    var expires_on = 2;

    if( $.QueryString["utm_source"] ) {
        $.cookie("_bb_usource", $.QueryString["utm_source"], {path:"/", expires: expires_on});
    }


    if( $.QueryString["utm_medium"] ) {
        $.cookie("_bb_umedium", $.QueryString["utm_medium"], {path:"/", expires: expires_on});
    }

    if( $.QueryString["utm_term"] ) {
        $.cookie("_bb_uterm", $.QueryString["utm_term"], {path:"/", expires: expires_on});
    }

    if( $.QueryString["utm_campaign"] ) {
        $.cookie("_bb_ucampaign", $.QueryString["utm_campaign"], {path:"/", expires: expires_on});
    }

    if( $.QueryString["utm_content"] ) {
        $.cookie("_bb_ucontent", $.QueryString["utm_content"], {path: "/", expires: expires_on});
    }

}

function parse_utm_cookies(){

    if( $.QueryString !== undefined && $.QueryString["utm_campaign"] ) {
        set_utm_cookies();
        return;
    }

    if( $.QueryString !== undefined && !$.cookie("_bb_usource") && $.QueryString["utm_source"] ) {
        set_utm_cookies();
    }

}

function navigateTo(link) {
    window.location = link;
}

//Commented because this code is not being used anywhere
//function init_close_autovoucheroffer_dialog(){
//    $('body').bind('click', function(e){
//        if(!$(e.target).is('.ui-dialog, a') && !$(e.target).closest('.ui-dialog').length){
//            $('.pdialog').dialog('close');
//            $('.spicInAutovoucher').dialog('close');
//        }
//    });
//}

function is_valid_qty(value){
    // value must be only integer, 1,01 are valid values and 1. -1 are invalid
    var test_int = /^\d+$/.test(value);
    if(!isNaN(value) && test_int && parseInt(value, 10) > 0){
        return true;
    }
    else{
        return false;
    }
}

function add_to_basket_from_dyf(product_id, cart_type) {
    if (!cart_type) {
        cart_type = 1;
    }
    var qty = $('#p' + product_id + '_qty').val();
    if (!is_valid_qty(qty)) {
        show_alert('Invalid Quantity');
        return false;
    }
    var p_desc = $('#dyf_' + product_id).find('a.skuLnk').attr('title');
    add_to_basket(product_id, qty, cart_type, p_desc, ADD_TO_CART_SOURCES.DYF);
    return true;
}

function add_to_cart(productId, cart_type, source){
    var qty = $('#p'+productId+'_qty').val();
    //p_modal is present only for cosmetic modal popup
    if ($('#p_modal'+productId+'_qty').length){
        qty = $('#p_modal'+productId+'_qty').val();
    }
    if(!is_valid_qty(qty)){
        show_alert('Invalid Quantity');
        return false;
    }
    add_to_basket(productId, qty, cart_type, null, source);
    last_add_prod = productId;
    last_added_product = productId;
    return true;
}

function init_display_child_product(STATIC_URL){
    $('.moreSizes').each(function(){
        $(this).click(function(){
            pid = $(this).attr('id').split('_')[1];
            $('.pdialog').each(function(e){
                if($(this).dialog('isOpen') && !$(e.target).is('.ui-dialog, a') && !$(e.target).closest('.ui-dialog').length){
                    $(this).dialog('close');
                }
            });
            $('#children_' + pid + '_more').dialog({
                autoOpen: true,
                closeOnEscape:true,
                draggable:false,
                resizable:false,
                minWidth:"200px",
                minHeight:"200px",
                position:{
                    my:'left top',
                    at:'left bottom',
                    of:$(this)
                },
                open: function () {
                    $('.ui-dialog').css('height', 'auto');
                    $('.ui-dialog').css('width', 'auto');
                    $('.ui-dialog').css('minWidth', '200px');
                    $('.ui-dialog').css('z-index', '950');
                    $('.ui-dialog-titlebar').css('background', '#cb2127');
                    $('.ui-widget-content').css('background', '#eeeeee');
                    $('.ui-icon').css('background-image','url('+STATIC_URL+'css/images/ui-icons_ffffff_256x240.png?v=14)')
                }
            });
        });
    });
}

function init_a2c(maximum_quantity, source){
    max_qty = maximum_quantity;
    $('.a2c').off('click');
    init_a2c_for_selector('.a2c', source);
}

function init_a2c_for_selector(jSelector, source) {
    $(jSelector).each(function () {
        $(this).click(function () {
            var ele = $(this).attr('id').split('_');
            if($("#featured"+ele[1]).val() == "1"){
                source = ADD_TO_CART_SOURCES.FEATURED_PRODUCT;
                add_to_cart(ele[1], ele[2], source);
            }
            else if (source == ADD_TO_CART_SOURCES.DYF)
                add_to_basket_from_dyf(ele[1], ele[2]);
            else {
                add_to_cart(ele[1], ele[2], source);
            }
        });
    });
}

function show_delivery_slots(){
    if( delivery_slots_data ){
        return false;
    }
    $.ajax({
        'url': make_req_url('/order/get-next-slots/'),
        'type': 'get',
        'success': function(resp){
            delivery_slots_data = resp;
            slots_info = $('#uiv2-deliverslots-holder');
            slots_info.empty();
            for(var i=0; i < delivery_slots_data.length; i++){
                if (i == 0) {
                    $('#uiv2-next-avail-slot').html(delivery_slots_data[i]);
                }
                $('<li>'+delivery_slots_data[i]+'</li>').appendTo(slots_info);
            }
        }
    });

}

function update_next_slot(){
    express_slot = page_data['express_next_slot'];
    normal_slot = page_data['normal_next_slot'];
    darkstore_next_slot = page_data['darkstore_next_slot'];
    /*
    json_data = page_data['next_available_slots'];
    if(json_data && 'slot_date' in json_data) {
        $('#uiv2-next-avail-slot').empty().html(
           json_data['slot_date_formalize'] + ": " + json_data['from_time'] + " to " + json_data['to_time'] + ""
        );
    } */
//    if(normal_slot){
//        $('#normal_slot').empty().html(
//           "Standard: " + normal_slot['slot_date_formalize'] + " " + normal_slot['from_time'] + " to " + normal_slot['to_time'] + ""
//        );
//        $(".normal-slot").prop("title", "Standard: " + normal_slot['slot_date_formalize'] + " " + normal_slot['from_time'] + " to " + normal_slot['to_time'] + "");
//
//        if($('#uiv2-next-avail-slot')){
//            $('#uiv2-next-avail-slot').empty().html(
//               "Standard: " + normal_slot['slot_date_formalize'] + " " + normal_slot['from_time'] + " to " + normal_slot['to_time'] + ""
//            );
//            $(".normal-slot").prop("title", "Standard: " + normal_slot['slot_date_formalize'] + " " + normal_slot['from_time'] + " to " + normal_slot['to_time'] + "");
//        }
//    }
//
//    if (darkstore_next_slot){
//        $('#express_slot').empty().html("Express: " + darkstore_next_slot);
//        $(".exp-slot").prop("title", "Express: " + darkstore_next_slot);
//    }
//    else if(express_slot){
//        $('#express_slot').empty().html(
//           "Express: " + express_slot['slot_date_formalize'] + " " + express_slot['from_time'] + " to " + express_slot['to_time'] + ""
//        );
//        $(".exp-slot").prop("title", "Express: " + express_slot['slot_date_formalize'] + " " + express_slot['from_time'] + " to " + express_slot['to_time'] + "");
//    }
//    else{
//        $(".express_slot_container").hide();
//    }

    if(normal_slot){
        $('#normal_slot').empty().html(normal_slot);
        $(".normal-slot").prop("title", normal_slot);

        if($('#uiv2-next-avail-slot')){
            $('#uiv2-next-avail-slot').empty().html(normal_slot);
            $(".normal-slot").prop("title", normal_slot);
        }
    }

    if (darkstore_next_slot){
        $('#express_slot').empty().html(darkstore_next_slot);
        $(".exp-slot").prop("title", darkstore_next_slot);
    }
    else if(express_slot){
        $('#express_slot').empty().html(express_slot);
        $(".exp-slot").prop("title", express_slot);
    }
    else{
        $(".express_slot_container").hide();
    }

}

//function update_next_slot(){
//    $.ajax({
//        url: make_req_url('/co/show_next_available_slot/'),
//        cache: false,
//        data:{},
//        dataType:"json",
//        success: function(json_data){
//            if('slot_date' in json_data) {
//                $('#uiv2-next-avail-slot').empty().html(json_data['slot_date_formalize'] + ": " + json_data['from_time'] + " to " + json_data['to_time'] + "")
//            }
//        }
//    });
//    return false;
//}

function init_display_autovoucheroffers(){
    $('.autovoucheroffer').click(function(){
        if($('.autovoucheroffer').length > 1){
            $('.autovoucheroffer').each(function(e){
                if($(this).hasClass('autovoucher'+autovoucherhomenumber)){
                if($(this).dialog('isOpen') && !$(e.target).is('.ui-dialog, a') && !$(e.target).closest('.ui-dialog').length){
                    $(this).dialog('close');
                }}
            });
        }else{
            $('.autovoucheroffer').each(function(e){
                if($(this).dialog('isOpen') && !$(e.target).is('.ui-dialog, a') && !$(e.target).closest('.ui-dialog').length){
                    $(this).dialog('close');
                }
            });
        }

        $('.spicInAutovoucher.autovoucher'+autovoucherhomenumber).dialog({
            autoOpen: true,
            closeOnEscape:true,
            draggable:false,
            resizable:false,
            maxWidth:"300px",
            maxHeight:"300px",
            position:{
                my:'top',
                at:'bottom',
                of:$(this)
            },
            open: function () {
                $('.ui-dialog').css('height', 'auto');
                $('.ui-dialog').css('width', '300px');
                $('.ui-dialog').css('minWidth', '200px');
                $('.ui-dialog').css('z-index', '950');
                $('.ui-dialog-titlebar').css('background', '#cb2127');
                $('.ui-widget-content').css('background', '#eeeeee');
            }
        });
    });
}

//function init_vpop(){
//    //var id = '#bb_vpop';
//    var id = '#hydPopup1';
//
//    //Get the screen height and width
//    var maskHeight = $(document).height();
//    var maskWidth = $(window).width();
//
//    //Set heigth and width to mask to fill up the whole screen
//    $('#mask').css({'width':maskWidth,'height':maskHeight});
//
//    //transition effect
//    $('#mask').fadeIn(1000);
//    $('#mask').fadeTo("slow",0.8);
//
//    //Get the window height and width
//    var winH = $(window).height();
//    var winW = $(window).width();
//
//    //Set the popup window to center
//    $(id).css('top',  winH/2-$(id).height()/2);
//    $(id).css('left', winW/2-$(id).width()/2);
//
//    //transition effect
//    $(id).fadeIn(2000);
//
//    //if close button is clicked
//    $('.close').click(function (e) {
//        //Cancel the link behavior
//        e.preventDefault();
//
//        $('#mask').hide();
//        $('.window').hide();
//    });
//
//}

//function bb_popup_clicked(){
//    $('#mask').hide();
//    $('.window').hide();
//}

function get_add_to_basket_nav_ctx(add_source) {
    var nc = "n";
    if (add_source) {
        switch (add_source) {
            case ADD_TO_CART_SOURCES.DYF:
                nc = "dyf";
                break;
            case ADD_TO_CART_SOURCES.AUTO_SEARCH:
                nc = "auto-search";
                break;
            case ADD_TO_CART_SOURCES.AUTO_SEARCH_AD:
                nc = "auto-ad";
                break;
            case ADD_TO_CART_SOURCES.PD_ALSO_BOUGHT:
                nc = "pd-ab";
                break;
            case ADD_TO_CART_SOURCES.PD_REL_BRAND:
                nc = "pd-brand";
                break;
            case ADD_TO_CART_SOURCES.PD_REL_CAT_PROD:
                nc = "pd-cat";
                break;
            case ADD_TO_CART_SOURCES.PD_STORE:
                nc = "pd-offers";
                break;
            case ADD_TO_CART_SOURCES.PD_TOP_LEVEL_CAT:
                nc = "pd-tlc";
                break;
            case ADD_TO_CART_SOURCES.PD:
                nc = "pd";
                break;
            case ADD_TO_CART_SOURCES.ALTERNATE_PRODUCT:
                nc = "suggestion";
                break;
        }
    }
    return nc;
}

function init_view_basket(max_qty, cart_type, src, namespace){
    if (!src) {
        src = location.pathname;
    }
    if (!namespace) {
        namespace = ''
    }
    $(namespace + '.text-change-qty-search-popup').each(function(){
        $(this).off('focusout');
        $(this).focusout(function(){
            qty_changed($(this).attr('id').split('_')[1],$(this).val(),cart_type, null, 'change-quantity', src);
        });
    });
    $(namespace + '.icon-increase-qty-search-popup').each(function(){
        $(this).off('click');
        $(this).click(function(){
            qty_changed($(this).prev().attr('id').split('_')[1],parseInt($(this).prev().val()) + 1, cart_type, null, 'incr-quantity', src);
        });
    });
    $(namespace + '.icon-decrease-qty-search-popup').each(function(){
        $(this).off('click');
        $(this).click(function(){
            var new_q = parseInt($(this).next().val()) - 1;
            var pid = $(this).next().attr('id').split('_')[1];
            if (new_q > 0) {
               qty_changed(pid, new_q, cart_type, null, 'decr-quantity', src);
            } else {
               remove_from_cart(pid, cart_type, null, 'remove-from-cart', src);
            }
        });
    });
    $(namespace + '.uiv2-removerow').each(function(){
        $(this).off('click');
        $(this).click(function(){
            remove_from_cart($(this).attr('id').split('_')[1], cart_type, null, 'remove-from-cart', src);
        });
    });
}
var NotifyPopUp = {
    hideNotifyPopUp: function () {
        var np = $("#notify-popup");
        var sm = $('#shoplist-mask');
        np.fadeOut('slow');
        sm.fadeOut('slow');
        localStorage.removeItem('notify_non_login');
        localStorage.removeItem('prod');
    },
    showNotifyPopup: function (prod, is_member) {
        // To close either combo or cosmetic modal if open
        //$('#comboModal').modal('hide');
        $('#color-picker-modal, .uiv2-background-shade').hide();
        $('.modal-backdrop.in').hide();
        if (!is_member) {
            path = location.pathname + location.search;
            location.href = "/auth/login/?next=" + path;
            localStorage.setItem("path", path);
            localStorage.setItem("notify_non_login", true);
            localStorage.setItem("prod", prod);
        }
        else {
            NotifyPopUp.sendNotify(prod);
        }
    },
    sendNotify: function (productId) {
        data = {'product_id': productId, 'notify_type': 'B'};
        NotifyPopUp.sendRequest('/product/call-notify-popup/', data, 'post')
    },

    sendRequest: function (url, data, type) {
        data['csrfmiddlewaretoken'] = csrf;
        $.ajax({
            url: url,
            data: data,
            type: type
        }).done(function (response) {
            $.notifyBar({html: "You will be notified via Email, SMS/Push Notification when the product is available", position: "top", cssClass: "success"})
            NotifyPopUp.hideNotifyPopUp();
        })
    },
    showOnReturn: function (is_member) {
        var show = localStorage.getItem("notify_non_login");
        var prod = localStorage.getItem("prod");
        if (show && is_member) {
            NotifyPopUp.showNotifyPopup(prod, true);
            localStorage.removeItem('notify_non_login');
            localStorage.removeItem('path');

            localStorage.removeItem('prod');
            return true;
        }
        else{
            localStorage.removeItem('notify_non_login');
            localStorage.removeItem('path');
            localStorage.removeItem('prod');
        }
        return false;
    }
}
/* shopping list */
function sl_popup(popup,shoplist_type,slug, is_new_ui){
    if(popup == 'close'){
        uiv2_hide_popup('shoplist-popup');
          $('.uiv2-background-shade').hide();
          $('#shoplist-mask').hide();
    }
    else{
        $.ajax({
            url:'/order/sl-popup/',
            type:'post',
            data:{'shoplist_type':shoplist_type,'slug':slug,'order_id':$('#order_detail_popup').val()},
            dataType:"json",
            success: function(json_data){
                if(json_data['success']) {
                    if(!json_data['logged_in']){
                        location.href = "/auth/login/?next="+encodeURIComponent(window.location.pathname);
                    }
                    $('#popup-content').html(json_data['sl_popup_html']);
                    uiv2_show_popup('shoplist-popup');
                    $('.uiv2-background-shade').hide();
                    $('#shoplist-mask').show();
                    if(is_new_ui){
                        $(".uiv2-shoplist-select").addClass('order-detail-copy');
                    }
                    else{
                        $(".uiv2-shoplist-select").dropkick();
                    }
                    $('#dk_container_sl_names').css('height','26px');
                }
            }
        });
    }
}

 function delete_shoplist_popup(slug,sl_id){
    show_confirm("Are you sure want to delete this list?",
    function (){
    var delname = $('#'+slug+'_shoppingListName').html();
    $.ajax({
        url:"/msl/delete-list/",
        type:'post',
        dataType: "json",
        data: {slug: slug},
        success: function(data) {
            if(data['success']){
                $('#sl_'+sl_id).remove();
                set_shoplist_gae($('#shoplist-gae-type').val(), delname, ' - Delete List','')
                location.href = "/shopping-lists/";
            }
        }
    });
    },
    function(){return;});
}

function valid_list_name(string){
    var specialChars_not_allowed = "<>@!#$%^&*()+[]{}?:;|'\"\\,./~`=";
    for(i = 0; i < specialChars_not_allowed.length;i++){
        if(string.indexOf(specialChars_not_allowed[i]) != -1){
           return false;
        }
    }
    return true;
}

function add_newlist(refresh){
    if(shoppinglist_create_state == false) {
         shoppinglist_create_state = true;
    } else {
         return;
    }
    var str =$('#newShoppingListName').val().replace(/\s+/g," ");
    var newShoppingListName = str.replace(/^\s+|\s+$/g,'');
    var str = newShoppingListName.toLowerCase();
    var slug=$('#select-shopping-lists :selected').val();
    if(!valid_list_name(str)){
        $('#create_alert').html('');
        $('#create_alert').html('The list name cannot contain special characters. Please try another name.');
        shoppinglist_create_state = false;
         return;
    }
    var current_listnames= [];
    $('#all_lists').each(function() {
        current_listnames.push($(this).html().toLowerCase().replace(/(^\s+|\s+$)/g, ''));
    });

     present = false;
     for(var i=0; i< current_listnames.length;i++){
        if(current_listnames[i] === str.toLowerCase()){
            present = true;
        }
     }

     if(present){
        $('#create_alert').html('');
        $('#create_alert').html('The list name chosen already exists. Please try another name.');
        shoppinglist_create_state = false;
     }
     else{
         if(newShoppingListName.length>0) {
             $("#respond-1").hide();
             $("#createlist").attr("onClick","javascript:void(0);");
             if(shoppinglist_create_state == true){
                 $.ajax({
                     url:"/msl/create-list/",
                     type:'post',
                     dataType: "json",
                     data: {name: newShoppingListName, is_public: 0 },
                     success: function(data) {
                         if(data['success']) {
                             $("#createlist").attr("onClick","add_newlist();");
                             shoppinglist_create_state == false;
                             if(data['logged_in'])
                                 {location.href = "/shopping-list/" + data['slug'];}
                             else
                                 {location.href = "/auth/login/?next=/shopping-list/"+slug+"/";}

                             set_shoplist_gae($('#shoplist-gae-type').val(), newShoppingListName,' - Create New List');

                             if(refresh)
                                location.href = "/shopping-lists/";

                         }
                         else{
                             $('#create_alert').html('');
                             $('#create_alert').html('Please try another name.');
                             return false;
                         }
                    }
                });
             }
            }
        else{
                $('#create_alert').html('');
                $('#create_alert').html('Please enter a name.');
                shoppinglist_create_state = false;
            }
        }
}

function check_duplicate_popup(slug){
    var str = $("#"+slug+"_editShoppingListName").val().replace(/\s+/g," ");
    var listVal = str.replace(/^\s+|\s+$/g,'');
    if(listVal.length > 0){
        var selected_option = $("#select-shopping-lists option:selected").text();
        var str = listVal.toLowerCase();
        var opt = $('#'+slug+'_shoppingListName').html().toLowerCase();
        var current_listnames= [];
        $('#all_lists').each(function() {
            current_listnames.push($(this).html().toLowerCase().replace(/(^\s+|\s+$)/g, ''));
        });
        present = false;
        for(var i=0; i< current_listnames.length;i++){
           if(current_listnames[i] === str.toLowerCase()){
               present = true;
           }
        }
        if(present){
            if(str!=opt){
                //$('#sl_alertmsg').html('');
               show_alert('The list name you have chosen already exists. Please try another name.');
            }
            else{
                return;
            }
        }
        else
            showEditShoppingLists_popup(slug,false,'update',listVal);
    }
    else {
       // $('#sl_alertmsg').html('');
       show_alert('Please Enter a Name');
    }
}

function rename_list(slug){
    var str = $("#newShoppingListName").val().replace(/\s+/g," ");
    var listview = $('#list-view').val();
    var newName = str.replace(/^\s+|\s+$/g,'');
    var current_name = $('#'+slug+'_shoppingListName').html().toLowerCase();
    if(newName.length > 0){
        var current_listnames= [];
        $('#all_lists').each(function() {
            current_listnames.push($(this).html().toLowerCase().replace(/(^\s+|\s+$)/g, ''));
        });
        present = false;
        for(var i=0; i< current_listnames.length;i++){
           if(current_listnames[i] === str.toLowerCase()){
               present = true;
           }
        }
        if(present){
            if(str!=current_name){
                $('#create_alert').html('');
                $('#create_alert').html('The list name you have chosen already exists. Please try another name.');
            }
            else{
                return;
            }
        }
        else{
            $.ajax({
                url:"/msl/rename-list/",
                type:'post',
                dataType: "json",
                data: {slug: slug, name:newName},
                success: function(data) {
                    if(!data['success']) {
                        $('#create_alert').html('');
                        $('#create_alert').html('Renaming this list was unsuccessful. Please choose a different name');
                    }
                    else{
                        if($('#shoplist-landing').val() == '1'){
                            location.href = '/shopping-lists/';
                        }
                        else{
                           location.href = '/shopping-list/'+data['slug'];
                        }
                    }
                }
            });
        }
    }
    else{
        $('#create_alert').html('');
        $('#create_alert').html('Please Enter a Name');
    }

}

function copy_shoplist_items(order_id){
    sl = $('.uiv2-shoplist-select :selected').val();
    shoplist = $("input[type='radio'][name='shoplist-options']:checked").val();
    var check = false;
    var order_detail_page = false;
    var num_items = 0;
    if($("#order_detail_page").val()){
        checkbox = $("[name = 'shoppinglist-item']");
        check = true;
        order_detail_page = true
    }
    else{
        checkbox = $("[name = 'shoppinglist-item']:visible");
        for(var i = 0; i< checkbox.length; i++){
            if(checkbox[i].checked === true) {
                check = true;
                num_items += 1;
            }
        }
        if(check === false && order_id == "no-order"){
            $('#create_alert').html("Select atleast one item from the shopping list to copy") ;
            return;
        }
    }
    item_qts = get_shoplist_items(checkbox,order_detail_page);
    if(!shoplist){
        $('#create_alert').empty().html("Please select an option");
        return;
    }
    if(!$('#newShoppingListName').val() && shoplist == 'create'){
        $('#create_alert').empty().html("Please enter a name");
        return;
    }
    if(shoplist == 'create'){
        //create and save
        present = false;
        var str = $('#newShoppingListName').val().replace(/\s+/g," ");
        var sl_name = str.replace(/^\s+|\s+$/g,'');
        $.ajax({
             url:"/msl/create-list/",
             type:'post',
             dataType: "json",
             data: {name: sl_name, is_public: 0 },
             success: function(data) {
                 if(data['success']) {
                     if(data['logged_in']){
                             set_shoplist_gae($('#shoplist-gae-type').val(), sl_name,' - Create New List');
                             copy_items_to_shopping_list(sl_name,check,num_items,order_id,item_qts);
                     }
                     else{
                        location.href = "/auth/login/?next="+encodeURIComponent(window.location.pathname);
                     }
                 }
                 else{
                     $('#create_alert').html('');
                     $('#create_alert').html('Please try another name. This list already exists');
                     present = true;
                 }
            }
        });
    }
    else{
        sl_name = $(".uiv2-shoplist-select :selected").val();
        copy_items_to_shopping_list(sl_name,check,num_items,order_id,item_qts);
    }
    return;
}

function get_shoplist_items(checkbox,order_detail_page){
    item_qtys = []
    for(var i = 0; i< checkbox.length; i++){
        if(order_detail_page){
            itemname = checkbox[i].value+"_"+1;
            item_qtys.push(itemname);
        }
        else{
            if(checkbox[i].checked === true) {
                itemname = checkbox[i].value+"_"+$('#p'+checkbox[i].value+'_qty').val();
                item_qtys.push(itemname);
            }
        }
    }
    return item_qtys;
}

function copy_items_to_shopping_list(sl_name,check,num_items,order_id,item_qts){
    if(!num_items){
        num_items = '';
    }
    if(check == true | order_id != "no-order"){
        $.ajax({
            url:"/order/msl/copy-items/",
            type:'post',
            dataType:"json",
            data: {'items[]':item_qtys,'sl-name':sl_name,'order_id':order_id},
            success:function(data){
                if(data['success']) {
                    mesg = 'Successfully copied '+num_items+' items to the shopping list '+sl_name;
                    if(order_id != "no-order"){
                       mesg = 'Successfully copied order items to the shopping list '+sl_name;
                    }
                    $.notifyBar({ cls: "success",html: mesg});
                    uiv2_hide_popup('shoplist-popup');
                    $('.uiv2-background-shade').hide();
                    $('#shoplist-mask').hide();

                    set_shoplist_gae($('#shoplist-gae-type').val(), sl_name,' - Copy to List');
                }
            }
        });
    }
}

function set_background(){
    for(var i = 0; i < $('.AccordionPanelContent').children().size();i++){
        if(i%2 == 0){
            $('.AccordionPanelContent').children()[i].removeAttribute('class');
            $('.AccordionPanelContent').children()[i].addClass('product-listing odd-itemrow');
        }
        else{
            $('.AccordionPanelContent').children()[i].removeAttribute('class');
            $('.AccordionPanelContent').children()[i].addClass('product-listing even-itemrow');
        }
    }
}

function catSelectChkGroup(categoryname) {
    var catname = categoryname +'_cat_accordion';
    var n = document.getElementById(catname);
    var checkboxes = n.getElementsByTagName('input');
    for( var i=0; i < checkboxes.length; i++ ) {
        if(checkboxes[i].type == 'checkbox' && checkboxes[i].disabled == false){
            checkboxes[i].checked = true;
        }
    }
    set_shoplist_gae($('#shoplist-gae-type').val(), categoryname,' - Select All for cat');
}

function catClearChkGroup(categoryname) {
    var catname = categoryname +'_cat_accordion';
    var n = document.getElementById(catname);
    var checkboxes = n.getElementsByTagName('input');
    $(checkboxes).each(function(){
        $(this).removeAttr("checked");
    });

    set_shoplist_gae($('#shoplist-gae-type').val(), categoryname,' - Clear All for cat');
}

function remove_from_list(item_row_id, item_id,topcat,cityId,slug){
    var parent = topcat+'_header';
    var cat_name = topcat+'_itemcount';
    var item_desc = item_id + " " +$('#desc_'+item_id).html();
    $.ajax({
        url:"/msl/remove-item/",
        type:'post',
        dataType:"json",
        async:false,
        data: {slug: slug,product_id: item_id,product_city:cityId},
        success:function(data){
            if(data['success']) {
                if(data['logged_in']){
                    $('#'+item_row_id).remove();
                    $('#'+item_row_id).hide();
                    set_background();
                    var toplevelCatAccordion = topcat+'_header';
                    var parent_id = document.getElementById(toplevelCatAccordion);
                    total_count_items = parseInt($('#totalid').html());
                    total_no = eval(total_count_items -1);
                    document.getElementById('totalid').innerHTML = total_no;
                    if(total_no == 0){
                        $('.my-accordion').append('<p class="show-info" id = "shoplist_info">This shopping list does not have any items.&nbsp;Search for products and click on <a class ="add" style = "cursor:pointer" onclick = "applyMask();" ></a> to add the specific product to the list.</p>');
                        $('#add_basket_base').hide();
                    }
                    var cat_items_count = parseInt(document.getElementById(cat_name).innerHTML);
                    var child_count = eval(cat_items_count-1);
                    document.getElementById(cat_name).innerHTML = eval(cat_items_count-1);
                    if (child_count == 0) {
                        document.getElementById(toplevelCatAccordion).style.display = "none";
                        document.getElementById(toplevelCatAccordion).innerHTML = '';
                        document.getElementById(parent).style.display = "none";
                    }
                    set_shoplist_gae($('#shoplist-gae-type').val(), item_desc,' - Remove-item');
                }
                else
                    location.href = "/auth/login/?next=/shopping-list/"+slug+"/";
            }
        }
    });
    return false;
}

function get_view(list_grid,list_type,list_id){
    $('#shoplist-mask').show();
    $('.loadShoplistMask').show();
    $.ajax({
        url:"/order/get-shopping-list-view/",
        type:"post",
        dataType: "json",
        data: {list_grid:list_grid,list_type:list_type,list_id:list_id},
        success: function(data) {
            if(data['success']) {
                $('#sl-items').html('');
                $('#sl-items').html(data['sl_html']);
                if(list_grid == "list"){
                    $('#sl_list_view').show();
                    $('#sl_grid_view').hide();
                }
                else{
                    shoplist_view_change_init();
                    $('#sl_grid_view').show();
                    $('#sl_list_view').hide();
                }
                if(data['itemcount'] > 0){
                    $('.noItems').hide();
                    $('#sl_operations').show();
                }
                else{
                    $('.noItems').show();
                    $('#sl_operations').hide();
                }
            }
            $('#totalid').html(data['itemcount']);
            $('#c102').prop("checked", false);
            $('#selected_count').html(0);
            $('#shoplist-mask').hide();
            $('.loadShoplistMask').hide();
        }
    });
}

function delete_list_items(slug,cityId){
    is_listview = $("#listview_sl").val();
    is_listview = $("#listview_sl").val();
    var rmlists =[];
    $('#sl-form').find(":checkbox[name = 'shoppinglist-item']").each(function () {
        var mcCbxCheck = $(this);
        if(mcCbxCheck.is(':checked')) {
            rmlists.push(mcCbxCheck.val());
        }
    });
    if(rmlists.length == 0) {
        show_alert("Select atleast one item to delete") ;
        return false;
    }
    show_confirm("Are you sure want to delete these items?",
    function(){
        $('#shoplist-mask').show();
        $('.loadShoplistMask').show();
        $.ajax({
            url:"/msl/delete-shoppinglist-items/",
            type:"post",
            dataType: "json",
            data: {slug:slug,product_city: cityId,items:rmlists,is_listview:is_listview},
            success: function(data) {
                if(data['success']) {
                    if(data['logged_in']){
                        $('#sl-items').html(data['sl']);
                        shoplist_view_change_init();
                        $('#selected_count').html("0");
                        $('#shoplist-mask').hide();
                        $('#totalid').html(data['itemcount']);
                        $('.loadShoplistMask').hide();
                        if(data['itemcount'] < 1){
                            $('.noItems').show();
                            $('#sl_operations').hide();
                        }

                        set_shoplist_gae($('#shoplist-gae-type').val(), slug,' - Delete items from List');
                    }
                    else{
                        location.href = "/auth/login/?next=/shopping-list/"+slug+"/";
                    }
                }
            }
        });
    },
    function(){return false;});
}

function shoplist_view_change_init(){
    $(".parentchild").dropkick(dropkick_change);
    $('.a2c').unbind('click');
    init_a2c($('#max-qty').val());
    init_view_basket($('#max-qty').val(),1);
    $('.checkbox').unbind('click');
    $( "input[type=checkbox]" ).on( "click", function(){
        ctr = 0;
        len = $("input[name=shoppinglist-item]:checked");
        len.each(function(){
            if($(this).is(":visible")){
                ctr+=1;
            }
        });
        $('#selected_count').html(ctr);
    });
}

function add_shoplist_to_basket(slug){
    $(".arrow-collapse:visible").trigger("click");
    checkbox = $("[name = 'shoppinglist-item']:visible");
    qtyField = $(".qtyTxtField:visible");
    var check = false;
    var num_items = 0;
    for(var i = 0; i< checkbox.length; i++){
        if(checkbox[i].checked === true) {
            check = true;
            num_items += 1;
        }
    }
    if(num_items == checkbox.length){
        $(document).trigger('microInteractionPlower', [{'EventName':'Basket_AddAll', 'UserFlow':'smartbasket'}]);
    }

    for(i = 0; i< qtyField.length; i++){
        var qty = qtyField[i].value;
        if (checkbox[i].checked === true && !is_valid_qty(qty)) {
            var itemname = $('#'+ $(checkbox)[i].value +'_name').html()
            show_alert('Invalid Quantity for item ' + itemname);
            return false;
        }
    }
    if(check === false){
        show_alert("Select atleast one in-stock item to add to basket") ;
        return false;
    }

    item_qtys = []
    for(var i = 0; i< checkbox.length; i++){
        if(checkbox[i].checked === true) {
            if($('#p'+checkbox[i].value+'_cart').val()){
                cart_qty = parseInt($('#p'+checkbox[i].value+'_cart').val()) + 1;
            }
            else{
                cart_qty = parseInt($('#p'+checkbox[i].value+'_qty').val());
            }
            itemname = checkbox[i].value+"_"+cart_qty;
            //itemname = checkbox[i].value+"_"+$('#p'+checkbox[i].value+'_qty').val();
            if($('#'+checkbox[i].value+'_availability').val() == "1")
                item_qtys.push(itemname);
        }
    }

    $('#shoplist-mask').show();
    $('.loadShoplistMask').show();

    var basketUrlBuilder = new BasketUrlBuilder();
    var basketUrls = window.USE_NODE_CART_SERVICE ? basketUrlBuilder.withNodeCartUrl().build(): basketUrlBuilder.build();
    $.ajax({
        //url:"/msl/add-list-item-to-basket/",
        url: basketUrls.addListCartUrl,
        type:'post',
        dataType:"json",
        data: {'items[]':item_qtys,'slug':slug},
        success:function(data){
            if(!data['logged_in'])
                location.href = '/auth/login/?next='+window.location.pathname;
            if(data['success']) {
                $('#shoplist-mask').hide();
                $('.loadShoplistMask').hide();
                msg = data['msg'];
                mesg = 'Successfully added items to the basket';
                $.notifyBar({ cls: "success",html: mesg});
                set_shoplist_gae($('#shoplist-gae-type').val(), 'num-items' ,' - Add to basket',num_items);

                for (var i=0; i < data['basket_widget_list'].length; i++) {
                    if (data['basket_widget_list'][i]["basket_widget"] != "undefined") {
                        update_basket_widget(data['basket_widget_list'][i]['product_id'],
                            data['basket_widget_list'][i]["cart_type"],
                            data['basket_widget_list'][i]["basket_widget"],
                            true, location.pathname);
                    }
                }
                init_basket();
                cart_changed = true;
                if( ga ){
                    ga('set', 'matric6', 1);
                }
            }
            else{
                $('#shoplist-mask').hide();
                $('.loadShoplistMask').hide();
                show_alert(data['msg']);
            }
           // $('#totalNumberOfCartItems').html(data.num_items +' items');
        }
    });
    for(var i = 0; i< checkbox.length; i++){
        if(checkbox[i].checked === true) {
            pid = checkbox[i].value;
            checkbox[i].checked = false;
        }
    }
    for(i = 0; i< qtyField.length; i++){
        qtyField[i].value = "1";
    }
}

function show_hide_catg(catg_id){
    if($('#categoryItems_'+catg_id).is(":visible")){
        $('#categoryItems_'+catg_id).hide();
        $('#img-expand_'+catg_id).hide();
        $('#img-collapse_'+catg_id).show();
    }
    else{
        $('#categoryItems_'+catg_id).show();
        $('#img-expand_'+catg_id).show();
        $('#img-collapse_'+catg_id).hide();
    }

}

function selectToggle(frm) {
    var num_selected = 0;
    var num_clear = 0;
    if($('#c102').is(":checked")){
        toggle = true;
        $(document).trigger('microInteractionPlower', [{'EventName':'SelectAll','UserFlow':'myaccount'}]);
    }
    else{
        toggle = false;
    }
    items_selector = $("[name = 'shoppinglist-item'][nfs = '0']");
    items_selector.each(function(){
       if(toggle) {
            $(this).prop("checked", true);
        }
       else {
            $(this).prop("checked", false);
       }
    });
    for(var i = 0; i< items_selector.length; i++){
        if(items_selector[i].checked === true) {
            check = true;
            num_selected += 1;
        }
        else{
            num_clear += 1;
        }
    }
    if(num_selected > 0){
        set_shoplist_gae($('#shoplist-gae-type').val(), 'num-items' ,' - Select all ',num_selected);
    }
    if(num_clear > 0){
        set_shoplist_gae($('#shoplist-gae-type').val(), 'num-items' ,' - Clear all ',num_clear);
    }
}

function check_cat_select(categoryname){
    if($('#c104_'+categoryname).is(":checked")){
        check_select(categoryname);
    }
    else{
        check_clear(categoryname);
    }
}

function check_select(categoryname) {
    var catname = 'categoryItems_'+categoryname
    var n = document.getElementById(catname);
    var checkboxes = n.getElementsByTagName('input');
    for( var i=0; i < checkboxes.length; i++ ) {
        if(checkboxes[i].type == 'checkbox' && checkboxes[i].disabled == false){
            checkboxes[i].checked = true;
        }
    }
    set_shoplist_gae($('#shoplist-gae-type').val(), categoryname ,'-Select All for cat');
}

function check_clear(categoryname) {
    var catname = 'categoryItems_'+categoryname;
    var n = document.getElementById(catname);
    var checkboxes = n.getElementsByTagName('input');
    $(checkboxes).each(function(){
        $(this).removeAttr("checked");
    });
    set_shoplist_gae($('#shoplist-gae-type').val(), categoryname ,'-Clear All for cat');
}

function isHtml5AttributeSupported(element_name, attribute_name){
    var element = document.createElement(element_name);
    return attribute_name in element;
}

//Small method to simulate HTML5 placeholder attribute,
// if it is not supported by the browser (eg. IE 9 and below)
function setPlaceHolder(element_name) {
    var element = $(element_name);
    var placeholder_value = $(element_name).attr('placeholder');
    element.val(placeholder_value);
    element.css('color', '#ccc');
    element.focus(function () {
        if (element.val() == placeholder_value) {
            element.val('');
            element.css('color', '#333');
        }
    });
    element.blur(function () {
        if (element.val().length == 0) {
            element.val(placeholder_value);
            element.css('color', '#ccc');
        }
    });
}

function validate_cookie(){

     if($.cookie('_bb_vid')==undefined) {
        window.location.href='/';
        return false;
     }
     else{
        return true;
     }
}

function submit_search_form(){
    var is_cookie=validate_cookie();
    if(is_cookie){
    $(document).trigger('screenViewReferralsEvent', [{}]);
    var search_data = $('#id_q').val();
    if (!search_data) search_data = "";
    search_data = search_data.replace(/^[ ]+/g, "").replace(/[ ]+$/g, "");
    if(search_data === "" || search_data == "Search for over 18,000 products in 7 languages, e.g. bhindi, vendakai..."){
        $('#id_q').focus();
        return false;
    }
    return true;
    }
}

function get_cookie(cookie_name) {
    var cookie_index = document.cookie.indexOf(cookie_name);
    if (cookie_index > -1) {
        var cookie_value_start_index = document.cookie.indexOf('=', cookie_index) + 2;
        var cookie_value_end_index = document.cookie.indexOf('\"', cookie_value_start_index);
        return document.cookie.substring(cookie_value_start_index, cookie_value_end_index);
    }
    return null;
}

function get_member_cookie() {
    return get_cookie('_bb_mid');
}

function get_visitor_cookie() {
    return get_cookie('_bb_vid');
}

//function legal_remove(obj, sku_list) {
//    $.ajax({
//        url:'/basket/del-item/',
//        type:'post',
//        data:{'prod_id':sku_list,cart_type:1,is_list:true},
//        dataType:"json",
//        success: function(json_data){
//            if( !json_data['success'] ) {
//               show_alert('Error removing product from basket!');
//            }
//            else{
//                init_basket();
//            }
//            checkout(obj);
//        }
//    })
//}

function checkout(obj, divergence_ok){
    $(obj).removeAttr("onclick");
    location.href = '/co/checkout/' + (divergence_ok ? '?divergence_ok=yes' : '');
    return false;
}

function get_flatpage_marketplace(url, company) {
    $.ajax({
        url: '/get-flatpage/',
        type: 'post',
        dataType: 'json',
        data: {'url': url},
        success: function (data) {
            if (data['success']) {
                $('#marketplace_div').html(data['content']);
                $('#marketplace_title').html(company);
                uiv2_show_popup('popup_marketplace');
            }
        }
    });
}

var label = '';
var mixed = '';
function basket_checkout(obj, flag, basket_count, addr_id){
    var is_cwr_present = $('#cwr_div').html()
    if(is_cwr_present){
        uiv2_show_popup('popup_category_weight_restriction');
        return false;
    }
    $(obj).removeAttr("onclick");
    var ga_category = 'express_basket_checkout';
    var ga_action,ga_label;
    ga_action = 'express_basket';
    if (mixed){
        ga_action = 'mixed_basket';
    }
    ga_label = 'express_checkout_' + label;
    if(!flag){
        ga_label = 'normal_checkout_' + label;
    }
    ExpressOrderController.logAnalytics(ga_category, ga_action, ga_label, 1);
    location.href = '/co/checkout/?x='+flag+'&spni='+basket_count+'&addr='+addr_id;
    return false;
}

function set_child_details(current_id, new_id) {

    $('#slidingProduct' + current_id).hide();
    $('#slidingProduct' + new_id).show();

    title = $('#'+new_id).attr('value');
    $(document).attr('title', title);

    if ($('#children_' + current_id + '_more')) {
        $('#children_' + current_id + '_more').dialog('close');
    }
    $('#radio_' + current_id + '_' + current_id).prop("checked", true);
    if($('#radio_modal_' + new_id)){
        $('#radio_modal_' + new_id).prop("checked", true);
    }
}

function refresh_color_order(current_id){
    $.ajax({
        url:"/product/get-cosmetic-colors",
        data:{'sku_id':current_id},
        type:'get',
        success: function(data){
            if(data['success']){
                // for(var i=0;i<data.data.length; i++){
                //     $('.uniqueId_'+ product)[i].innerHTML = data['data'];
                // }
                for(var key in data.data) {
                    if (data.data.hasOwnProperty(key)) {
                        $('#uniqueId_'+ key)[0].innerHTML = data['data'][key];
                    }
                }
            }
        }
    });
}

function save_current_prod(current_id, actual_product_id, product_list){
    // console.log(current_id + 'is current ID');
    // $('#current_product').val(current_id);
    $.ajax({
        url:"/product/get-cosmetic-products/",
        data:{'sku_id':current_id, 'actual_product_id':actual_product_id},
        type:'get',
        success: function(data) {
            if(data['success']){
                $('#color-picker-modal').modal('show');
                $('#color-picker-modal')[0].innerHTML = data['data'];

                $('.a2c').off('click');
                init_a2c_for_selector('.a2c', null);
                init_view_basket(25,1);
                $(".uiv2-popupclose, .color-picker-modal-cancel").click(function () {
                    if(last_added_product){
                        product_list = JSON.parse(product_list);
                        for(var i=0; i<product_list.length; i++){
                            $('#slidingProduct'+product_list[i]).hide();
                        }
                        // $('#slidingProduct'+current_id).hide();
                        current_id = last_added_product;
                        $('#slidingProduct'+last_added_product).show();
                    }
                    refresh_color_order(current_id);
                    $('#color-picker-modal').modal('hide');
                    $('.uiv2-background-shade').hide();
                    $("body").css('position', '');
                });

            }
        }
    });
}

function refresh_cosmetic_modal(new_id, current_id, actual_product_id, product_list){
    // console.log(current_id + 'is current ID');
    $.ajax({
        url:"/product/get-cosmetic-products/",
        data:{'sku_id':new_id, 'actual_product_id':actual_product_id},
        type:'get',
        success: function(data) {
            if(data['success']){
                // console.log(data['data']);
                // $('#color-picker-modal').modal('show');
                $('#color-picker-modal')[0].innerHTML = data['data'];
                $('.a2c').off('click');
                init_a2c_for_selector('.a2c', null);
                init_view_basket(25,1);
                // $(".more-colors-btn").click(function () {
                //     $(".uiv2-background-shade, #color-picker-modal").fadeIn();
                //     $("body").css('position', 'fixed');
                // });
                $(".uiv2-popupclose, .color-picker-modal-cancel").click(function () {
                    if(last_added_product){
                        product_list = JSON.parse(product_list);
                        for(var i=0; i<product_list.length; i++){
                            $('#slidingProduct'+product_list[i]).hide();
                        }
                        // $('#slidingProduct'+current_id).hide();
                        current_id = last_added_product;
                        $('#slidingProduct'+last_added_product).show();
                    }
                    refresh_color_order(current_id);
                    $('.uiv2-background-shade').hide();
                    $('#color-picker-modal').modal('hide');
                    $("body").css('position', '');
                });

            }
        }
    });
}

function restore_current_prod(this_id){
    // if (this_id){
    //     console.log('Change from '+ this_id + ' to ' + $('#current_product').val());
    //     set_child_details(this_id,$('#current_product').val());
    // }
}

/* shoplist product widget */
function show_shoplists(skuid,product_city,new_name){
    if($.trim(product_city).length == 0 ){
        return;
    }
    $.ajax({
        url:"/msl/show-shopping-lists/",
        type:'post',
        dataType:"json",
        data: {product_id: skuid, product_city:product_city},
        success:function(data){
        if(data['success']) {
                if(data['logged_in']){
                    $('.shoplistContainer').html('');
                    $('.shoplistContainer').html(data['shopping_lists']);
                    if(!data['no_list']){
                        var offset = $('#'+skuid+'_shoplist').offset();
                        $('#sl_'+skuid+'_shoplist').show();
                        var x = offset.top + 30;
                        var y = offset.left - 163;
                        $('#sl_'+skuid+'_shoplist').offset({ top: x, left: y});
                        $('#sl_'+skuid+'_shoplist').show();
                        $('.apply_sl').hide();
                        $(".shoplists").jScrollPane();

                    }
                    if(new_name){
                        $("#chk_"+skuid+"_"+new_name).attr("checked",true);
                        $("#apply_sldiv"+skuid).show();
                        $('.apply_sl').show();
                        $(".newList").hide();
                    }
                }
               else{
                    location.href = "/auth/login/?next="+window.location.pathname+window.location.search;
               }
            }
        }
    });
    if(ganalytics){
        pdesc = $("#prod-"+skuid+"-desc").val();
        item_desc = parseInt(skuid) + " " + pdesc;
       _gaq.push(['_trackEvent','sl-prod-list','Product List Shopping List - Icon Clicked',item_desc]);
    }
}

function search_lists(skuid){
    current_listnames = []
    var str = $('#search_'+skuid).val().replace(/\s+/g," ");
    var q = str.replace(/^\s+|\s+$/g,'');
    $('#all_'+skuid+' div').each(function () {
        $(this).children('input').each(function () {
            current_listnames.push($(this));
        });
    });
    if (q.length == 0 ){
        $('#all_'+skuid+' div').each(function () {
            $(this).show();
        });
    }
    else{
        for(var i=0; i< current_listnames.length ; i++){
            var slname = current_listnames[i].val();
            if(slname.toLowerCase().indexOf(q.toLowerCase() ) == -1){
                id = 'result_'+skuid+'_'+current_listnames[i].val();
                document.getElementById(id).style.display="none";
            }
            else{
                id = 'result_'+skuid+'_'+current_listnames[i].val();
                document.getElementById(id).style.display="";
            }
        }
    }
}

function show_apply(skuid,slug){
    var flag = $('#flag_'+slug).html();
    var chkid = 'chk_'+skuid+'_'+slug;
    $('#newlist_'+skuid).hide();
    if($("#"+chkid).attr("checked") && flag==0){
        $('.apply_sl').hide();
        $('.newList').show();
    }
    if(!$("#"+chkid).attr("checked") && flag==0){
        $('.apply_sl').show();
        $('.newList').hide();
    }
    if($("#"+chkid).attr("checked") && flag==1){
        $('.apply_sl').show();
        $('.newList').hide();
    }
    if(!$("#"+chkid).attr("checked") && flag==1){
        $('.apply_sl').hide();
        $('.newList').show();
    }
    $('#all_'+skuid+' input').each(function () {
        var mcCbxCheck = $(this);
        var sl_flag = $('#flag_'+$(this).attr('name')).html();
        if(mcCbxCheck.is(':checked') && sl_flag == 1) {
            $('.apply_sl').show();
            $('.newList').hide();
            $('#newlist_'+skuid).hide();
        }
        if(!mcCbxCheck.is(':checked') && sl_flag == 0){
            $('.apply_sl').show();
            $('.newList').hide();
        }
    });
    $('#apply_sldiv'+skuid).show();
}

function cancel_create_sl(skuid){
    $('#create_'+skuid).val('');
    $('#msg_'+skuid).html('');
    $('#newlist_'+skuid).hide();
}

function show_createlists(skuid){
    $('#newlist_'+skuid).show();
    $('#apply_sldiv'+skuid).hide();
    $('#msg_'+skuid).html('');
    $('#create_'+skuid).val('');
}

function new_shoppinglist(skuid,product_city){
    if( shoppinglist_click_state == false) {
         shoppinglist_click_state = true;
    } else {
         return;
    }
    var duplicate = 0;
    var str =$('#create_'+skuid).val().replace(/\s+/g," ");
    var newShoppingListName = str.replace(/^\s+|\s+$/g,'');
    var str1 = newShoppingListName.toLowerCase();
    if(!valid_list_name(str1)){
        $('#msg_'+skuid).html('');
        $('#msg_'+skuid).html('The list name cannot contain special characters. Please try another name.');
        shoppinglist_click_state = false;
         return;
    }
    var current_listnames = [];
    $('#all_'+skuid+' input').each(function () {
        current_listnames.push($(this).val().toLowerCase().split('*')[0]);
    });
    for (i=0;i<current_listnames.length;i++)
    {
        if(current_listnames[i]== str1){
            duplicate = 1;
         }
     }
    if(duplicate){
        $('#msg_'+skuid).html('');
        $('#msg_'+skuid).html('The list name you have chosen already exists. Please try another name.');
        shoppinglist_click_state = false;
    }
    else{
        if(newShoppingListName.length>0) {
            //$('#newlist_'+skuid).hide();
            $("#popupcreate").attr("onClick","javascript:void(0);");
            if(shoppinglist_click_state == true){
                $.ajax({
                url:"/msl/create-list/",
                type:'post',
                dataType: "json",
                data: {name: newShoppingListName, is_public: 0 },
                success: function(data) {
                    if(data['success']) {
                        shoppinglist_click_state = false;
                        show_shoplists(skuid,product_city,newShoppingListName);
                        mesg = '<strong>'+newShoppingListName+'</strong> has been created';
                        $.notifyBar({ cls: "success",html: mesg});
                    }
               }
               });
                if(ganalytics){
                    item_desc = skuid + $('#prod-'+skuid+'-desc').val();
                    _gaq.push(['_trackEvent','sl-prod-list',' Product List Shopping List - Create New',item_desc]);
                }
            }
        }
        else {
            $('#msg_'+skuid).html('');
            $('#msg_'+skuid).html('Please enter a name');
            shoppinglist_click_state = false;
        }
    }
}


function add_item_to_lists(skuid,city_id){
    var lists = [];
    var addlists = [];
    var del_lists = [];
    var rmlists = [];
    $('#all_'+skuid+' input').each(function () {
        var mcCbxCheck = $(this);
        var flag = $('#flag_'+$(this).attr('name')).html();
        if(mcCbxCheck.is(':checked') && flag == 1) {
            lists.push(mcCbxCheck.attr('name'));
            addlists.push(mcCbxCheck.val());
        }
        if(!mcCbxCheck.is(':checked') && flag == 0) {
            del_lists.push(mcCbxCheck.attr('name'));
            rmlists.push(mcCbxCheck.val());
        }
    });
    for(var i = 0;i < lists.length; i++){
        $.ajax({
            url:"/msl/add-item/",
            type:'post',
            dataType:"json",
            data: {slug: lists[i],product_id: skuid,product_city:city_id},
            success:function(data){
            }
        });
    }

    for(var i = 0;i < del_lists.length; i++){
        $.ajax({
            url:"/msl/remove-item/",
            type:'post',
            dataType:"json",
            data: {slug:del_lists[i],product_id:skuid,product_city:city_id},
                success:function(data){
            }
        });
    }
    $('.shoplistContainer').html('');
    if(addlists.length > 0){
        mesg = '<strong>'+$('#prod-'+skuid+'-desc').val()+'</strong> has been added to ';
        mesg += addlists.join();
        if(rmlists.length > 0){
           mesg += ' and removed from ';
           mesg += rmlists.join();
        }
    }
    else{
        if(rmlists.length > 0){
            mesg = '<strong>'+$('#prod-'+skuid+'-desc').val()+'</strong> has been removed from '+ rmlists.join();
        }
    }
    $.notifyBar({ cls: "success",html: mesg});
    if(ganalytics){
         item_desc = skuid + $('#prod-'+skuid+'-desc').val();
        _gaq.push(['_trackEvent','sl-prod-list',' Product List Shopping List - Apply',item_desc]);
    }
}

//function init_carousel(carousel_id) {
//    $('#carouSlide_'+carousel_id).carouFredSel();
//}

function change_pd_image(img_id, pd_id){
    $('.'+pd_id+'_uiv2-product-large-img-display').hide();
    pimg = $('#pimg_'+img_id);
    pimg_modal = $('#pimg_modal_'+img_id);
    pimg.show();
    pimg_modal.show();
    $('.pimg_holder').removeClass('active');
    $('#pimg_'+img_id+'_holder').addClass('active');
    $('#pimg_modal_'+img_id+'_holder').addClass('active');
}

function goto_url(url){
    location.href = url;
    return false;
}

//function show_popup_load_content_from_url(div_id_load, div_id_popup, url){
//    $('#'+div_id_load).load(url, function(){
//        uiv2_show_popup(div_id_popup);
//    });
//}


function set_shoplist_gae(gae_sl_type, gae_event_desc, gae_action_desc, num_para){
    if(ganalytics){
        if(gae_sl_type == 'sysl'){
            gae_catg = "sysl-activity";
            gae_action = "Sys Shopping List";
        }
        else if(gae_sl_type == 'so'){
            gae_catg = "so-activity";
            gae_action = "Shop from order";
        }
        else if(gae_sl_type == 'sb'){
            gae_catg = "sb-activity";
            gae_action = "Smart Basket";
        }
        else if(gae_sl_type == 're'){
            gae_catg = "re-activity";
            gae_action = "Recommendations";
        }
        else if(gae_sl_type == "scratch"){
            gae_catg = "scratch-activity";
            gae_action = "Scratch List";
        }
        else{
            gae_catg = "sl-activity";
            gae_action = "Shopping List";
        }

         gae_action = gae_action + gae_action_desc;
         if(num_para){
            _gaq.push(['_trackEvent',gae_catg, gae_action , gae_event_desc , num_para]);
         }
         else{
            _gaq.push(['_trackEvent',gae_catg, gae_action ,gae_event_desc]);
         }
    }
}

function fb_confirm_option_selected(){
    console.log( $("input[name='fb-confirm-option']").val() );
}

function fb_logged_in(){
    console.log('FB logged in');
    console.log('FB response... ' + FB.getAuthResponse());
}

/* Scratch list functions begin */

function check_item_scl(item_id){
     if($("#scratch_state"+item_id).val() == 1){
        check_status = false;
        $("#scratch_state"+item_id).val(0)
     }
     else{
        check_status = true;
        $("#scratch_state"+item_id).val(1);
     }
     $.ajax({
        url:"/member/check-scratchlist-item/",
        type:'post',
        dataType:"json",
        data: {"item-id":item_id,"check_status":check_status},
        success:function(data){
            if(data['success']) {
               $("#check_"+item_id).attr("title",data['tooltip']);
               if(data["item-checked"]){
                    $("#"+item_id).addClass("scratchItem");
                    set_shoplist_gae("scratch",$("#"+item_id).val()," -Scratch item","");
               }
               else{
                    $("#"+item_id).removeClass("scratchItem");
                    set_shoplist_gae("scratch",$("#"+item_id).val()," -UnScratch item","");
               }
            }
        }
    });
}

function scratch_list_click_handler(event){
   if($("#shoplist-popup").has(event.target).length == 0
   && $('.uiv2-new-my-shopping-list').has(event.target).length == 0
   && $(".uiv2-back-block").has(event.target).length == 0
   && $("#scratch_list_main").has(event.target).length == 0
   && $(".uiv2-close-widget-button").has(event.target).length == 0){
       $('.uiv2-new-my-shopping-list').hide();
       event.stopPropagation();
   }
}

function get_scratchlist_content(list_id,scl_type){
    scl_landing = "#landing_scl_"+list_id;
    landing = $(scl_landing);
    if(list_id && landing.html()){
        if(scl_type == "system"){
            var offset = $("#landing_link_ssl_"+list_id).offset();
        }
        else{
            var offset = $("#landing_link_sl_"+list_id).offset();
        }
        $("#scratch_list_main").offset({ top: offset.top+30, left: offset.left+100});
    }
    else{
       offset = $(".uiv2-shop-by-list-link").offset();
       $("#scratch_list_main").offset({top:offset.top+46,left:offset.left-45});
    }
    set_scratch_list_scroll();
    $('#scratchListContainer').css("width","0px");
    $("#scratchListContainer").css("height","0px");
}

function get_list_items(list_id){
    if(list_id == 'None'){
        list_id = "unsaved";
    }
    scl_id = "#scratchlist_"+list_id
    items = [];
    $(scl_id+" [name = 'scratchlist-item']").each(function(){
        if($.trim($(this).val())){
            item_id = $(this).attr('id');
            if(!item_id){
                item_id = '';
            }
            items.push($(this).val()+'_'+item_id);
        }
    });
    return items;
}

function show_scratchlist(list_id,edit_mode,scl_type,show_help,landing){
    $.ajax({
        url:make_req_url("/member/show-scratch-list/"),
        type:'post',
        dataType:"json",
        data: {'list_id':list_id,'edit_mode':edit_mode,'csrfmiddlewaretoken':$('#id_csrftkn').val(),'scl_type':scl_type,'show_help':show_help},
        success:function(data){
            if(data['success']) {
                $("#scratchListContainer").empty().html(data['list_html']);
                get_scratchlist_content(list_id,scl_type);
                if(data["list_id"]){
                    list_id = data["list_id"];
                    if(list_id == "unsaved"){
                        set_shoplist_gae("scratch","Unsaved List"," - Create List","");
                    }
                }
                if(data["edit_mode"]){
                    init_edit_scratchlist(edit_mode,list_id);
                }
                $(".uiv2-shop-by-list-dropdown").hide();
                if(landing){
                    $(".uiv2-my-shopping-minus").remove();
                    $(".plusOpen").remove();
                    $(".uiv2-save-edit-clear-links-wrap").css("width","129px");
                    $(".close-scl").css("margin-left","-5px");
                    $(".uiv2-my-shopping-help").css("margin-left","-5px");
                    $(".uiv2-my-shopping-help").css("margin-right","5px");
                }
            }
        }
    });
}

function init_scratchlist_help_popup(){
    // initialize help slider
    $('#shoplist-mask').show();
    $('.uiv2-help-small-box').hide();
    $('.uiv2-slide-warpper').removeClass('de-active').addClass('active'),function(){};
    occupy_screen('.uiv2-pop-up-black-new');
    var d_width=$(this).width();
    var d_height=$(this).height();
    function occupy_screen(a)
    {
        $(a).width(d_width);
        $(a).height(d_height);
        $(a).fadeIn(600);
    }
}

function occupy_screen(a)
{
    $(a).width(d_width);
    $(a).height(d_height);
    $(a).fadeIn(600);
}

function show_scratchlist_help(help_type,list_id,from_where){
    $("#help-scl").empty();
    $.ajax({
        url:make_req_url("/member/scratch-list-help/"),
        type:'post',
        dataType:"json",
        data: {'help_type':help_type,'list_id':list_id},
        success:function(data){
            if(data['success']) {
                $("#help-scl").empty().html(data['list_html']);
                $("#help-scl").show();
                $("#help-scl").offset({top:150,left:980});
                init_scratchlist_help_popup();
                $(".uiv2-back-block").css("background","transparent");
                from_where = "- Help "+from_where;
                set_shoplist_gae("scratch",$("#scratch-list-name_"+list_id).html(),from_where);
            }
        }
    });

    $("#help-scl").css("width","0px");
    $("#help-scl").css("height","0px");
}

function hide_scratchlist_help(help_type,list_id){
    $('.uiv2-new-my-shopping-list').show();
    $('#shoplist-mask').hide();
    $('.uiv2-pop-up-black-new').hide();
    $('.uiv2-help-small-box').fadeIn(300);
    $('.uiv2-slide-warpper').removeClass('active').addClass('de-active');
    $("#help-scl").empty();
    $('#help_box').hide();
}

function find_scratchlist_products(list_id,name,list_type,q){
    items = get_list_items(list_id);
    slug = $("#scl_slug").val();
    if(items.length >= 1){
        href_attr = $("#find_product_link").attr("href");
        $("#find_product_link").attr("href","");
        $.ajax({
            url:make_req_url("/member/scratch-list-products/"),
            type:'post',
            dataType:"json",
            data: {'items[]':items,'list_id':list_id,'csrfmiddlewaretoken':$('#id_csrftkn').val(),"list_type":list_type,"q":q},
            success:function(data){
                if(data['success']) {
                    //redirect to search results page
                    set_shoplist_gae("scratch",$("#scratch-list-name_scratchlist_"+list_id).html()," - Save & Find products");
                    set_shoplist_gae("scratch",$("#scratch-list-name_scratchlist_"+list_id).html()," - Find products");
                    if(list_type == "1"){
                        location.href = "/ps/ssl/"+slug+"/?q="+data["q"];
                    }
                    else{
                        location.href = "/ps/sl/"+slug+"/?q="+data["q"];
                    }
                    if(ga){
                        ga('set', 'matric7', 1);
                    }
                }
                else{
                    show_alert(data['msg']);
                }
                $("#find_product_link").attr("href",href_attr);
            }
        });
    }
    else{
        show_alert("Please enter some items in the list");
    }
}

function remove_scl_item(item_id,scl_id){
    scratch_list_edited = true;
    set_shoplist_gae("scratch",$('#'+item_id).val(),"- Delete item");
    $('#list_'+item_id).remove();
    clone_check = $(".scratchListItems ul li").length;
    if(clone_check < 10){
        var last_ele = $(".scratchListItems ul").find("li:last-child");
        var li_ele = last_ele.off('keyup').clone();
        li_ele.find("input").val('');
        li_ele.insertBefore(last_ele);
        init_scratchlist_item_row();
        init_edit_scratchlist(true,scl_id);
    }
}

function show_scl_popup(popup_type,list_id,scl_id,is_done,list_type){
    if(popup_type == 'close'){
          uiv2_hide_popup('shoplist-popup');
          $('.uiv2-background-shade').hide();
          $('#shoplist-mask').hide();
    }
    else{
        $.ajax({
            url:"/member/show-scl-popup/",
            type:'post',
            data:{'list_type':list_type,'list_id':list_id,'popup_type':popup_type,'csrfmiddlewaretoken':$('#id_csrftkn').val(),"is_done":is_done},
            dataType:"json",
            success: function(json_data){
                if(json_data['success']) {
                    if(json_data['is_member']){
                        $('#popup-content').html(json_data['sl_popup_html']);
                        uiv2_show_popup('shoplist-popup');
                        $('.uiv2-background-shade').hide();
                        $('#shoplist-mask').show();
                        $(".uiv2-shoplist-select").dropkick();
                        $('#dk_container_sl_names').css('height','26px');
                    }
                    else{
                        save_visitor_items(list_id);
                        get_params = window.location.href.split('?')
                        next_url = window.location.pathname;
                        if(get_params.length > 1)
                           next_url = next_url+"?"+get_params[1];
                           show_alert("Please sign in to save this list. Clicking on OK will redirect you to the login page",
                           function() {location.href = "/auth/login/?next="+encodeURIComponent(next_url);});
                    }
                }
            }
        });
    }
}

function save_visitor_items(list_id){
     items = get_list_items(list_id);
     $.ajax({
        url:"/member/save-visitor-items/",
        type:'post',
        data:{'list_id':list_id,'csrfmiddlewaretoken':$('#id_csrftkn').val(),'items':items},
        dataType:"json",
        success: function(json_data){
            if(json_data['success']) {
                uiv2_hide_popup('shoplist-popup');
                $('.uiv2-background-shade').hide();
                $('#shoplist-mask').hide();
            }
        }
    });
}

function save_items_to_list(list_id,is_done,list_type,list_status){
    //save scratch list
    scl_function = $("input[type='radio'][name='radio_sl']:checked").val();
    if(!scl_function){
        $('#create_alert').empty().html('Please select an option');
        return;
    }
    if(!list_id || list_id == 'None'){
        items = get_list_items("unsaved");
    }
    else{
        items = get_list_items(list_id);
    }
    if(items.length <= 0){
       show_alert("Please enter some items in the list");
       return;
    }
    q_scl = $("#scl_query_term").val();
    attr_href = $("#save_link").attr("href");
    if(scl_function == 'create'){
        new_name = $('#newShoppingListName').val().replace(/\s+/g," ").replace(/^\s+|\s+$/g,'');
        if(new_name.length <= 0){
            $('#create_alert').empty().html('Please enter a name.');
        }
        $("#save_link").attr("href","");
        $.ajax({
            url:"/member/create-scl/",
            type:'post',
            data:{'items[]':items,'new_name':new_name,'csrfmiddlewaretoken':$('#id_csrftkn').val(),'edit-mode':true,'list_id':list_id,"q":q_scl,'list_type':list_type,'list_status':list_status},
            dataType:"json",
            success: function(json_data){
                if(json_data['success']) {
                    uiv2_hide_popup('shoplist-popup');
                    $('.uiv2-background-shade').hide();
                    $('#shoplist-mask').hide();
                    mesg = 'Successfully saved list '+ new_name ;
                    $.notifyBar({ cls: "success",html: mesg});
                    set_shoplist_gae("scratch",new_name," - Save as a new list","");

                    if(json_data['change_list']){
                        scl_id = json_data["scl_id"];
                        list_type = json_data["list_type"];
                        slug = json_data["slug"];
                        if($("#continue-scl")){
                            $("#continue-scl").find("a").attr("href","javascript:show_ps_scratch_list('"+scl_id+"','"+list_type+"','"+slug+"')");
                        }
                        replace_scratch_list_html(json_data["list_html"]);
                    }
                    if($("#shoplist-landing").val()){
                        location.href = window.location.pathname;
                    }
                    if(json_data['change_list'] && !$("#shoplist-landing").val()){
                        get_scratchlist_content(list_id);
                    }
                    if(is_done == "true"){
                        location.href = '/basket/?ver=1';
                    }
                }
                else{
                     if(json_data["fail_msg"]){
                        $("#create_alert").empty().html(json_data["fail_msg"]);
                     }
                }
                $("#save_link").attr("href",attr_href);
            }
        });
    }

    if(scl_function == 'add'){
        copy_to_list = $(".uiv2-shoplist-select :selected").val();
        $.ajax({
            url:"/member/add-to-scratchlist/",
            type:'post',
            data:{'items[]':items,'copy_to_list':copy_to_list,'csrfmiddlewaretoken':$('#id_csrftkn').val(),'edit-mode':true,'current_list':list_id,"q":q_scl},
            dataType:"json",
            success: function(json_data){
                if(json_data['success']) {
                    uiv2_hide_popup('shoplist-popup');
                    $('.uiv2-background-shade').hide();
                    $('#shoplist-mask').hide();

                    set_shoplist_gae("scratch",$(".uiv2-shoplist-select :selected").html()," - Add to selected list","");
                    mesg = 'Successfully saved to the list ' + $(".uiv2-shoplist-select :selected").html();
                    $.notifyBar({ cls: "success",html: mesg});
                    if($("#shoplist-landing").val()){
                        location.href = window.location.pathname;
                    }
                    if(is_done == "true"){
                        location.href = '/basket/?ver=1';
                    }
                }
                else{
                     if(json_data["fail_msg"]){
                        $("#create_alert").empty().html(json_data["fail_msg"]);
                     }
                }
                $("#save_link").attr("href",attr_href);
            }
        });
    }
}

function clear_list(scl_id){
    items = get_list_items(scl_id);
    if(items.length <= 0){
        show_alert("Please enter some items in the list");
        return;
    }
    scratch_list_edited = true;
    clear_list_items(scl_id);
}

function clear_list_items(scl_id){
     items = get_list_items(scl_id);
     $(".empty-li").addClass("toRemove");
     set_shoplist_gae("scratch",$("#scratch-list-name_scratchlist_"+scl_id).html(),"- Clear list",items.length);
     $("[name = 'scratchlist-item']").each(function(){
        $(this).val('');
        $(".uiv2-cross").hide();
        $(this).removeClass("scratchItem");
        $(this).attr('id','');
     });
     $(".scratchState").val(0);

     $(".item-li").remove();
     var last_ele = $(".empty-li").last();
     var ctr = 10;
     for(i=0; i < ctr; i++){
        var li_ele = last_ele.off('keyup').clone();
        li_ele.insertBefore(last_ele);
        li_ele.removeClass("toRemove");
        li_ele.find("input").val('');
     }
     init_scratchlist_item_row();
     init_edit_scratchlist(true,scl_id);
     $(".toRemove").remove();
     $("#continue-scl").hide();
     $(".uiv2-shop-red-icon").hide();
}

function init_scratchlist_item_row(){
    $(".empty-row").on("keyup", function(e){
         $(this).parent().find("a").css("display","block");
    });
    $('.uiv2-my-scratch-list-wrapper ul li input').hover(function(){
            $(this).css({'color':'#676768','font-weight':'500'});
    });
    $("[name = 'scratchlist-item']").on("keypress",function(){
        if($(this).is(":focus")){
            $(this).removeClass("scratchItem");
        }
        $("[name = 'scratchlist-item']").each(function(){
            scratch_state = "#scratch_state"+$(this).attr("id");
            if(!$(this).is(":focus") && $(scratch_state).val() == 1){
                $(this).addClass("scratchItem");
            }
        });
    });
    $("[name = 'scratchlist-item']").blur(function(){
        scratch_state = "#scratch_state"+$(this).attr("id");
        if(!$(this).is(":focus") && $(scratch_state).val() == 1){
            $(this).addClass("scratchItem");
        }
    });
     $(".scratchListItems").on("keyup", "li", function(e){
        if(e.keyCode == 38){
            $(this).prev().find("input").focus();
        }
        if(e.keyCode == 40 || e.keyCode === 13){
            $(this).next().find("input").focus();
        }
     });
}

function rename_scratchlist(scl_id,memvis_id){
    new_name = $('#newShoppingListName').val().replace(/\s+/g," ").replace(/^\s+|\s+$/g,'');
    if(new_name.length <= 0){
        $('#create_alert').empty().html('Please enter a name.');
    }
    q_scl = $("#scl_query_term").val();
    $.ajax({
        url:"/member/rename-list/",
        type:'post',
        data:{'new_name':new_name,'csrfmiddlewaretoken':$('#id_csrftkn').val(),'edit-mode':true,'scl_id':scl_id,'memvis_id':memvis_id},
        dataType:"json",
        success: function(json_data){
            if(json_data['success']) {
                uiv2_hide_popup('shoplist-popup');
                $('.uiv2-background-shade').hide();
                $('#shoplist-mask').hide();
                $('#scratch-list-name_'+"scratchlist_"+memvis_id).html(new_name);
                $("#nav_scl_"+memvis_id).html(new_name);
                $("#sclName_"+memvis_id).html(new_name);
            }
            else{
                if(json_data["fail_msg"]){
                    $("#create_alert").empty().html(json_data["fail_msg"]);
                }
            }
        }
    });
}

function remove_node(ele){
   clone_check = $(".scratchListItems ul li").length;
   if(ele && clone_check < 10){
       var li_ele = ele.off('keyup').clone();
       var parent_last = ele.parent().find("li:last-child");
       li_ele.insertAfter(parent_last);
       li_ele.find("input").val('');
       li_ele.find(".uiv2-cross").hide();
       init_scratchlist_item_row();
       ele.on("keyup", "li", function(e){
            if(e.keyCode == 38){
                $(this).prev().find("input").focus();
            }
            if(e.keyCode == 40 || e.keyCode == 13){
                $(this).next().find("input").focus();
            }
       });
   }
   ele.remove();
   set_scratch_list_scroll();
}

function init_edit_scratchlist(edit_mode,list_id){
    set_scratch_list_scroll();
    scl_id = 'scratchlist_'+list_id;
    clone_ele = false;
    list_items_id = "#list-items_"+scl_id;
    $(list_items_id+" li").each(function(){
        $(this).find("input").removeAttr("readonly");
        $(this).find("input").css("background","#FEFBDA");
        $(this).css("background","#FEFBDA");
        $(this).find("input").attr("onclick","");
    });
    $(list_items_id).on("keyup", "li", function(e){
        if(e.keyCode == 13 && (($(this).find("input").val() && $(this).next().find("input").val()) || $(this).is(":last-child")))
        {
            var li = $(this).off('keyup').clone();
            li.css("background","#FEFBDA");
            li.attr("id","");
            li.find(".scratchState").attr("id","");
            li.find(".scratchState").val(0);
            li.find(".scratchBtn").remove();
            new_inp = li.find('input');
            new_inp.css("background","#FEFBDA");
            new_inp.val('');
            new_inp.attr("id","");
            new_inp.removeClass("scratchItem");
            new_inp.on("onclick",function(ev) {});
            a_ele = li.find('a');
            a_ele.attr('href','javascript:remove_node()');
            a_ele.click(function(){
                remove_node($(this).parent());
            });
            a_ele.css("display","none");
            li.insertAfter( $(this) );
            $('.scratchListItems').jScrollPane({}).data('jsp').destroy();
            $(".scratchListItems").jScrollPane({contentWidth: '0px'});
            if($(".scratchListItems ul li").length >= 12 && (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent))){
                $(".scratchListItems").css("padding-top","15px");
            }
            new_inp.focus();
            new_inp.on("keyup",function(ev) {
                $(this).parent().find("a").css("display","block");
                if (ev.which === 38) {
                    inp = $(this).parent().prev().find("input");
                    inp.focus();
                }
                if (ev.which === 40) {
                    inp = $(this).parent().next().find('input');
                    inp.focus();
                }
            });
            new_inp.hover(function(){
                $(this).css({'color':'#676768','font-weight':'500'});
            });
        }
        if(e.keyCode == 38){
            $(this).prev().find("input").focus();
        }
        if(e.keyCode == 40){
            $(this).next().find("input").focus();
        }
    });
    $("#"+scl_id+" [name = 'scratchlist-item']").on("keyup",function(ev) {
        if (ev.which === 13) {
            inp = $(this).parent().next().find('input');
            inp.focus();
        }
    });
    $("#"+scl_id+'.item-li .uiv2-cross').show();
    $("#"+scl_id+' #find_products').show();
    $("#"+scl_id+' #clear_list').show();

    $("#"+scl_id+' #done').hide();
    $("#"+scl_id+' #edit_link').hide();
    $(".arrow_scl").hide();
    $("#"+scl_id+ " .checkbox_scl").hide();
}

function edit_scratch_list(edit_mode,list_id,scl_type,memvis_id){
    q_scl = $("#scl_query_term").val();
    attr_href = $("#edit_link").find("a").attr("href");
    $("#edit_link").find("a").attr("href","");
    $.ajax({
        url:"/member/edit-list/",
        type:'post',
        data:{'csrfmiddlewaretoken':$('#id_csrftkn').val(),'edit-mode':true,'list_id':list_id,'scl_type':scl_type,"q":q_scl,"memvis_id":memvis_id},
        dataType:"json",
        success: function(json_data){
            if(json_data['success']) {
                uiv2_hide_popup('shoplist-popup');
                $('.uiv2-background-shade').hide();
                $('#shoplist-mask').hide();
                replace_scratch_list_html(json_data["list_html"]);
                set_shoplist_gae("scratch",$("#scratch-list-name_scratchlist_"+memvis_id).html()," -  Edit list");
                if(json_data["original_list_id"]){
                    get_scratchlist_content(json_data["original_list_id"]);
                }
                else{
                    get_scratchlist_content(memvis_id);
                }
                init_edit_scratchlist(edit_mode,memvis_id);
            }
            $("#edit_link").find("a").attr("href",attr_href);
        }
    });
}

function show_search_products(item_name){
   location.href = '/ps/?q='+item_name;
}

function show_ps_scratch_list(scl_id,list_type,slug){
    $.ajax({
        url:make_req_url("/member/ps-scratch-list/"),
        type:'post',
        data:{'scl_id':scl_id,'list-type':list_type},
        dataType:"json",
        success: function(json_data){
            if(json_data['success']) {
                if(list_type == "1"){
                    location.href = "/ps/ssl/"+slug+"/?q="+json_data["q"];
                }
                else{
                    location.href = "/ps/sl/"+slug+"/?q="+json_data["q"];
                }
            }
            else{
                if(json_data['msg']){
                    if(json_data["status"] == "unsaved"){
                        show_alert(json_data['msg'] +". Clicking on the create new shopping list button brings up the Unsaved List");
                    }
                    else{
                        msg = json_data['msg']
                        if(window.location.pathname.indexOf("/ps/sl") == -1 || window.location.pathname.indexOf("/ps/ssl") == -1){
                          msg += ".You can view this list on the shopping lists page."
                        }
                        if($(".uiv2-save-edit-clear-wrap").length){
                            show_alert(msg);
                        }
                        else{
                            show_alert(msg, function() {location.href = "/order/shopping-lists/";});
                        }
                    }
                }
            }
        }
    });
}


function done_scratchlist(list_id,status,scl_id){
    if(status == 1){
        show_scl_popup('save',list_id,scl_id,true,'');
    }
    else{
        location.href = '/basket/?ver=1';
    }
}


function delete_scratch_list(list_id){
    show_confirm("Are you sure want to delete this list?",
        function(){
            $.ajax({
                url:"/member/delete-scratch-list/",
                type:'post',
                data:{'csrfmiddlewaretoken':$('#id_csrftkn').val(),'list_id':list_id},
                dataType:"json",
                success: function(json_data){
                    if(json_data['success']) {
                        set_shoplist_gae("scratch",$("#sclName_"+list_id).html(),"-Delete List");
                        $("#landing_scl_"+list_id).remove();
                        if(json_data['del_session']){
                            $("#continue-scl").hide();
                            $(".uiv2-shop-red-icon").hide()
                        }
                    }
                }
            });
        },
        function(){return;});
}


function init_show_message() {

  $('.uiv2-max-min-btn').show();
  $('.uiv2-min-max-btn').hide();

  var show_message_widget = $('.uiv2-widgets-bottom-slide');

  show_message_widget.find('.uiv2-min-max-btn').click(function(){
      show_message_widget.find('.uiv2-widget-contents').slideDown();
      $('.uiv2-min-max-btn').hide();
      $('.uiv2-max-min-btn').show();
  });

  show_message_widget.find('.uiv2-max-min-btn').click(function(){
      show_message_widget.find('.uiv2-widget-contents').slideUp();
      $('.uiv2-max-min-btn').hide();
      $('.uiv2-min-max-btn').show();
  });

  show_message_widget.find('.uiv2-close-btn-n').click(function(){$('.uiv2-widgets-bottom-slide').fadeOut();})

}

function close_scl(list_id){
    scl_id = "#"+list_id;
    $(scl_id).remove();
    $('#help_box').hide();
}

function minimize_scratchlist(scl_id,ele){
    $("#"+scl_id+" .uiv2-my-scratch-list-wrapper").slideToggle();
    ele.hide();
    $("#"+scl_id+" .plusOpen").show();
    set_shoplist_gae("scratch",$("#scratch-list-name_"+scl_id).html()," - Minimize");
}
function maximize_scratchlist(scl_id,ele){
    $("#"+scl_id+" .uiv2-my-scratch-list-wrapper").slideToggle();
    ele.hide();
    $("#"+scl_id+" .uiv2-my-shopping-minus").show();
    set_shoplist_gae("scratch",$("#scratch-list-name_"+scl_id).html()," - Maximize");
}

function replace_scratch_list_html(list_html){
    if($("#facetsContainer").html()){
        $("#scratchListContainerFacets").empty().html(list_html);
    }
    else{
        sl_html = $("#scratchListContainer").empty().html(list_html);
    }
}

function set_scratch_list_scroll(){
    setTimeout(function(){$(".scratchListItems").jScrollPane({contentWidth: '0px'});},15);
}

function cancel_list_edit(memvis_id,status){
    if(status == '3'){
        muiv2_close_popup();
        return;
    }
    attr_href = $("#cancel_link").attr("href");
    $("#cancel_link").attr("href","");
    $.ajax({
        url:"/member/cancel-list-edit/",
        type:'post',
        data:{'csrfmiddlewaretoken':$('#id_csrftkn').val(),'memvis_id':memvis_id},
        dataType:"json",
        success: function(json_data){
            if(json_data['success']) {
                replace_scratch_list_html(json_data["list_html"]);
                set_shoplist_gae("scratch",$("#sclName_"+memvis_id).html(),"-Cancel List Edit");
            }
            $("#cancel_link").attr("href",attr_href);
            $("#continue-scl").show();
            $(".uiv2-shop-red-icon").show();
        }
    });
}

function show_alert(alert_msg,ok_task,cancel_task){
    $("#ok_button").unbind("click");
    $("#custom-alert").show();
    $("#alert-msg").empty().html(alert_msg);
    $("#cancel_button").hide();
    $("#shoplist-mask").show();
    $("#ok_button").on("click", function (){
        $("#custom-alert").hide();
        if(ok_task)
            ok_task();
        $("#shoplist-mask").hide();
    });
    set_popup_pos();
}

function show_confirm(alert_msg,ok_task,cancel_task){
    $("#custom-alert").show();
    $("#cancel_button").show();
    $("#alert-msg").empty().html(alert_msg);
    $("#shoplist-mask").show();

    $("#ok_button").unbind("click");
    $("#ok_button").on("click", function (){
        $("#custom-alert").hide();
        $("#shoplist-mask").hide();
        if(ok_task)
            ok_task();
    });
    $("#cancel_button").unbind("click");
    $("#cancel_button").on("click", function (){
        if(cancel_task)
            cancel_task;
        $("#shoplist-mask").hide();
        $("#custom-alert").hide();
    });
    set_popup_pos();
}

function set_popup_pos(){
    var sw = $(".top-header").width()/2;
    var w = $(".uiv2-popup-alert").width();
    var left = sw-(w/2);
    $(".uiv2-popup-alert").css("margin-left",left);
}

function scratch_list_edit_handler(){
    /* used for checking if the scratch list has been edited when in the edit mode and for redirecting create list */
    if(window.location.pathname.indexOf("ps/sl") != -1 || window.location.pathname.indexOf("ps/ssl") != -1){
        $("#create_scratch_list").find("a").attr("href","#");
        $("#create_scratch_list").click(function(){
            location.href = "/?scl=1";
        });
    }
    scratch_list_edited = false;
    $(".uiv2-my-scratch-list-wrapper ul li").on("keyup", "input", function(e){
       scratch_list_edited = true;
    });

}

function unbind_slider(tab_id){
    $(tab_id+" .uiv2-navigation").parent().remove();
    $(tab_id+' .Next-btn').unbind("click");
    $(tab_id+' .Prev-btn').unbind("click");
    $(tab_id+' .uiv2-navigation li').unbind("click");
}

function show_tab_help(tab_id,help_type){
    help_id = '#'+tab_id;
    $(".tabs-content").hide();
    $("#"+tab_id).show();
    $(".tabs li a").removeClass("active");
    $(help_id+"_a").addClass("active");

    if(help_type && help_type == "prod"){
       set_help = "prod";
    }
    if(help_type && help_type == "scl"){
        set_help = "scl";
    }

    if(help_id == "#tab1"){
        if(set_help == "prod"){
           trigger_click($("#tab1 .uiv2-navigation li:nth-child(3)"),"#tab1");
           $("#tab1 .uiv2-navigation li:nth-child(3)").addClass("active");
        }
        else if(set_help == "scl"){
           trigger_click($("#tab1 .uiv2-navigation li:nth-child(4)"),"#tab1");
           $("#tab1 .uiv2-navigation li:nth-child(4)").addClass("active");
        }
        else{
            click_li = ''
            set_slider(help_id,click_li,false);
        }
    }
    else{
        click_li = ''
        set_slider(help_id, click_li ,false);
    }
}

function trigger_click(click_li,tab_id){
   set_slider(tab_id, click_li,false);
   $("#tab1 .uiv2-navigation").find('li').removeClass('active');
   set_help = "";
}

function set_slider(tab_id, click_li,is_default){
   unbind_slider(tab_id);
   if(is_default){
        setTimeout(function(){slider('.uiv2-slide-obj:visible',300,tab_id,click_li)},250);
   }
   else{
        slider('.uiv2-slide-obj:visible',300,tab_id,click_li);
   }
}

function hash(d){
    var a=1,c=0,h,o;
    if(d){
        a=0;
        for(h=d["length"]-1;h>=0;h--){
            o=d.charCodeAt(h);
            a=(a<<6&268435455)+o+(o<<14);
            c=a&266338304;
            a=c!=0?a^c>>21:a
        }
    }
    return a
}

/* scratch list functions end */

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function on_register_free_delivery_token_dialog() {
    var url = window.location.href;
    var params = url.split('?')[1];
    if (params != undefined && params.search('delivery_token_msg=1') != -1) {
        var num_tokens = getParameterByName('num_tokens');
        var valid_to = getParameterByName('valid_to');
        $("#num_free_delivery_token").html(num_tokens);
        $("#num_free_delivery_token1").html(num_tokens);
        $("#expiry_free_delivery_token").html(valid_to);
        uiv2_show_popup('uiv2_on_registration_free_delivery_token');
        $('#uiv2_on_registration_free_delivery_token a.uiv2-popupclose').bind('click',
             on_register_free_delivery_token_dialog_close);
    }
    return false;
}

function on_register_free_delivery_token_dialog_close() {
    window.location.href = window.location.href.replace(/&?((num_tokens)|(valid_to)|(delivery_token_msg))=([^&]$|[^&]*)/gi, "");
}

function load_shopping_list_menu(){
    $('#shoplist-menu').show();
    if(shopping_list_menu_loaded){
        $('#shoplist-menu').show();
    }
    else{
        $.ajax({
            url:make_req_url("/shopping-list-top-menu/"),
            type:'post',
            dataType: "json",
            data: {},
            success: function(data) {
                if(data['success']){
                    $('#shoplist_dropdown').html(data['sl_menu']);
                    shopping_list_menu_loaded = true;
                }
            }
        });
    }
}

function switch_to_mw() {

//     if (confirm('Switch to Mobile Site?')) {
//        if ($.cookie('_bb_rdt')) {
//            $.cookie('_bb_rdt', $.cookie('_bb_rdt').split('.')[0] + '.' + '1', {'path': '/'});
//            location.reload();
//        }
//    }

    if (confirm('Switch to Mobile Site?')) {
        var rdt = docCookies.getItem('_bb_rdt');
        if (ganalytics) {
            ga('set', 'metric8', 1);
        }
        if (rdt) {
//            $.cookie('_bb_rdt', $.cookie('_bb_rdt').split('.')[0] + '.' + '0', {'path': '/'});
            var today = new Date();
            today.setDate(today.getDate() + 365);
            docCookies.setItem('_bb_rdt', rdt.split('.')[0] + '.' + '1', today.toUTCString(), '/');
            location.reload();
        }
        $.ajax({
            url: "/log-ui-switch/",
            type: 'post',
            dataType: "json",
            data: {switch_from: "DM",'csrfmiddlewaretoken':csrf}
        }).done(function (data) {
            if (ganalytics) {
                ga("send", "event", "site_view_switch", "desktop_to_mobile", data['os'] + "|" + data['user_agent'] + "|" + data['resolution'] + "" + data['device'])
            }
            else {
                console.log(data)
            }
        });


    }

}


function truncate_str(str){
    str = str.toString();
    var s=str.split('.');
    return (parseInt(s[1])==0?s[0]:parseFloat(str).toFixed(2));
}

function remove_email_address(address_id){
    if(!parseInt(address_id)){
        return;
    }
    var confirm_msg = "Are you sure you want to remove this address?"
    if($("#cashback_program"+address_id).html()){
        prog_name = $.trim($("#program_name"+address_id).html());
        confirm_msg += " Deleting this address will remove your association with the member rewards program - " + prog_name;
    }
    show_confirm(confirm_msg,
    function(){
    $.ajax({
            url:"/member/delete-email-address/",
            type:'post',
            dataType: "json",
            data: {'address_id':address_id},
            success: function(data) {
                if(data['success']){
                    email_addr = $("#row"+address_id+"_address").html()
                    $("#row"+address_id).remove();
                    $('.uiv2-table tr').removeClass('dark');
                    $('.uiv2-table tr:nth-child(even)').addClass('dark');
                    var mesg = 'The email address '+ email_addr +' has been deleted successfully';
                    $.notifyBar({ cls: "success",html: mesg});
                    $("#cashback_program"+address_id).remove();
                }
            }
        });
    },
    function(){return;});
}


function add_email_address(){
    email_addr = $.trim($('#new-email-id').val());
    email_addr = email_addr.replace(/<\/?[^>]+(>|$)/g, "")
    if(!email_addr){
        $("#email_error").empty().html("Please enter an email address");
        return;
    }
    if(!validate_email(email_addr)){
        $("#email_error").empty().html("Please enter a valid email address");
        return;
    }
    $.ajax({
        url:"/member/add-email-address/",
        type:'post',
        dataType: "json",
        data: {'secondary_email':email_addr},
        success: function(data) {
            if(data['success']){
                $("#email-address-list").empty().html(data['email_list_html']);
                var mesg = 'The email address '+ email_addr +' has been added successfully. Please check your email and validate this address';
                show_alert(mesg);
                uiv2_hide_popup("add-email");
            }
            else{
                $("#email_error").empty().html(data['error']);
            }
        }
    });
}


function user_email_validation(address_id){
    if(!address_id){
        return;
    }
    $.ajax({
        url:"/member/user-validate-email/",
        type:'post',
        dataType: "json",
        data: {'address_id':address_id},
        success: function(data) {
            if(data['success']){
                show_alert("Please check your email for a link to validate this email address");
            }
        }
     });
}

function empty_cart(){
    var basketUrlBuilder = new BasketUrlBuilder();
    var basketUrls = window.USE_NODE_CART_SERVICE ? basketUrlBuilder.withNodeCartUrl().build(): basketUrlBuilder.build();
    show_confirm("Are you sure you want to remove all items from your basket?",
    function(){
    show_loader();
    $.ajax({
        url:basketUrls.emptyCartUrl,
        type:'post',
        dataType: "json",
        data: {},
        success: function(data) {
            if(data['success']){
                    $.notifyBar({ cls: "success",html: "All items have been removed from your basket"});
                    _gaq.push(['_trackEvent','Basket', 'Empty Basket - Desktop', $("#no_items").val()]);
                    hide_loader();
                    $("#no_items").val("0");
                    check_empty_cart();
                    $('#totalNumberOfCartItems').html('0 items');
                }
            else{
                $.notifyBar({ cls: "error",html: "Unable to remove items from your basket"});
                hide_loader();
            }
        }
    });
    },
    function(){return;})
}

function show_loader(){
    $('.loadShoplistMask').show();
}

function hide_loader(){
    $('.loadShoplistMask').hide();
}

function check_empty_cart() {
    if ($("#no_items").val() == "0") {
        $("#empty_message").show();
        $("#impulse_buying_menu").hide();
        $("#cart-items").hide();
    }
    else {
        $("#cart-items").show();
        $("#impulse_buying_menu").show();
        $("#empty_message").hide();
    }
}


function show_featured_product(prod_id){
    $(".featured-products-hover-box").hide();
    var offset = $('#img_'+prod_id).offset();
    //var y = offset.left+5;
    var y = offset.left - 140;
    $("#dyf_"+prod_id).css("left",y+"px")
    $('#dyf_'+prod_id).show();
    $(".featured-product").css("margin-left", "10px");
}


function show_add_email_popup(){
    uiv2_show_popup('add-email');
    $('#new-email-id').val('');
    $('#email_error').empty();
}

function hide_add_email_popup(){
    uiv2_hide_popup('add-email');
    $('#new-email-id').val('');
    $('#email_error').empty();
}

function show_hide_product_carousel(){
    var min_no_of_products = 9;
    if($(".es-carousel ul li").length <= min_no_of_products){
        $(".es-nav").hide();
        $(".es-carousel").css("margin-left","-25px");
    }
}

function make_donation(campaign_id,is_fixed,slug,payment){
    amount = $('#donation_amount').val();
    fixed = is_fixed;
    if(fixed == 0){
        if(!amount){
            return;
        }
        if(isNaN((amount))){
             show_alert("Please enter a numeric value.");
            return;
        }
        if(amount <= 0 ){
             show_alert("Please enter an amount greater than 0.");
            return;
        }
    }

    if(amount){
        msg =  "Click on OK to make a contribution of Rs. "+amount;
    }
    else{
        msg = "Click on OK to make a contribution of "+$.trim($('#default_amount').html());
    }
    var yn = confirm(msg);
    if(yn){
        $.ajax({
            url:"/sc/make_donation/",
            type:'post',
            dataType: "json",
            data: {campaign_id:campaign_id,'amount':amount},
            success: function(data) {
                if(data['success']){
                    $('#donation_amount').html('');
                    if($("#payment_social_campaign").val() == "1"){
                        evoucher_amount = $('#evoucher_credit').val();
                        get_summary(evoucher_amount,$('#id_free_delivery').val());
                        update_payment_details(0);
                    }
                    show_alert("Thank you for contributing towards this social cause. Every small bit makes a difference!");
                }
                else{
                   location.href = '/auth/login/?next=/sc/'+slug+'/';
                }
            }
        });
    }
    else{
        return;
    }
}


function showCampaignPopup(){
    window.scrollTo(0,40);
    $("#shoplist-mask").show();
    $("#campaignData").show();
    $('.scContent').jScrollPane();
}

function closeCampaignPopup(){
    $("#shoplist-mask").hide();
    $("#campaignData").hide();
}

/* End uiv2_main.js */

/* Start jquery.jscrollpane.min.js */
/*
 * jScrollPane - v2.0.0beta12 - 2012-09-27
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2010 Kelvin Luck
 * Dual licensed under the MIT or GPL licenses.
 */
(function(b,a,c){b.fn.jScrollPane=function(e){function d(D,O){var ay,Q=this,Y,aj,v,al,T,Z,y,q,az,aE,au,i,I,h,j,aa,U,ap,X,t,A,aq,af,am,G,l,at,ax,x,av,aH,f,L,ai=true,P=true,aG=false,k=false,ao=D.clone(false,false).empty(),ac=b.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";aH=D.css("paddingTop")+" "+D.css("paddingRight")+" "+D.css("paddingBottom")+" "+D.css("paddingLeft");f=(parseInt(D.css("paddingLeft"),10)||0)+(parseInt(D.css("paddingRight"),10)||0);function ar(aQ){var aL,aN,aM,aJ,aI,aP,aO=false,aK=false;ay=aQ;if(Y===c){aI=D.scrollTop();aP=D.scrollLeft();D.css({overflow:"hidden",padding:0});aj=D.innerWidth()+f;v=D.innerHeight();D.width(aj);Y=b('<div class="jspPane" />').css("padding",aH).append(D.children());al=b('<div class="jspContainer" />').css({width:aj+"px",height:v+"px"}).append(Y).appendTo(D)}else{D.css("width","");aO=ay.stickToBottom&&K();aK=ay.stickToRight&&B();aJ=D.innerWidth()+f!=aj||D.outerHeight()!=v;if(aJ){aj=D.innerWidth()+f;v=D.innerHeight();al.css({width:aj+"px",height:v+"px"})}if(!aJ&&L==T&&Y.outerHeight()==Z){D.width(aj);return}L=T;Y.css("width","");D.width(aj);al.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}Y.css("overflow","auto");if(aQ.contentWidth){T=aQ.contentWidth}else{T=Y[0].scrollWidth}Z=Y[0].scrollHeight;Y.css("overflow","");y=T/aj;q=Z/v;az=q>1;aE=y>1;if(!(aE||az)){D.removeClass("jspScrollable");Y.css({top:0,width:al.width()-f});n();E();R();w()}else{D.addClass("jspScrollable");aL=ay.maintainPosition&&(I||aa);if(aL){aN=aC();aM=aA()}aF();z();F();if(aL){N(aK?(T-aj):aN,false);M(aO?(Z-v):aM,false)}J();ag();an();if(ay.enableKeyboardNavigation){S()}if(ay.clickOnTrack){p()}C();if(ay.hijackInternalLinks){m()}}if(ay.autoReinitialise&&!av){av=setInterval(function(){ar(ay)},ay.autoReinitialiseDelay)}else{if(!ay.autoReinitialise&&av){clearInterval(av)}}aI&&D.scrollTop(0)&&M(aI,false);aP&&D.scrollLeft(0)&&N(aP,false);D.trigger("jsp-initialised",[aE||az])}function aF(){if(az){al.append(b('<div class="jspVerticalBar" />').append(b('<div class="jspCap jspCapTop" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragTop" />'),b('<div class="jspDragBottom" />'))),b('<div class="jspCap jspCapBottom" />')));U=al.find(">.jspVerticalBar");ap=U.find(">.jspTrack");au=ap.find(">.jspDrag");if(ay.showArrows){aq=b('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",aD(0,-1)).bind("click.jsp",aB);af=b('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",aD(0,1)).bind("click.jsp",aB);if(ay.arrowScrollOnHover){aq.bind("mouseover.jsp",aD(0,-1,aq));af.bind("mouseover.jsp",aD(0,1,af))}ak(ap,ay.verticalArrowPositions,aq,af)}t=v;al.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){t-=b(this).outerHeight()});au.hover(function(){au.addClass("jspHover")},function(){au.removeClass("jspHover")}).bind("mousedown.jsp",function(aI){b("html").bind("dragstart.jsp selectstart.jsp",aB);au.addClass("jspActive");var s=aI.pageY-au.position().top;b("html").bind("mousemove.jsp",function(aJ){V(aJ.pageY-s,false)}).bind("mouseup.jsp mouseleave.jsp",aw);return false});o()}}function o(){ap.height(t+"px");I=0;X=ay.verticalGutter+ap.outerWidth();Y.width(aj-X-f);try{if(U.position().left===0){Y.css("margin-left",X+"px")}}catch(s){}}function z(){if(aE){al.append(b('<div class="jspHorizontalBar" />').append(b('<div class="jspCap jspCapLeft" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragLeft" />'),b('<div class="jspDragRight" />'))),b('<div class="jspCap jspCapRight" />')));am=al.find(">.jspHorizontalBar");G=am.find(">.jspTrack");h=G.find(">.jspDrag");if(ay.showArrows){ax=b('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",aD(-1,0)).bind("click.jsp",aB);x=b('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",aD(1,0)).bind("click.jsp",aB);
if(ay.arrowScrollOnHover){ax.bind("mouseover.jsp",aD(-1,0,ax));x.bind("mouseover.jsp",aD(1,0,x))}ak(G,ay.horizontalArrowPositions,ax,x)}h.hover(function(){h.addClass("jspHover")},function(){h.removeClass("jspHover")}).bind("mousedown.jsp",function(aI){b("html").bind("dragstart.jsp selectstart.jsp",aB);h.addClass("jspActive");var s=aI.pageX-h.position().left;b("html").bind("mousemove.jsp",function(aJ){W(aJ.pageX-s,false)}).bind("mouseup.jsp mouseleave.jsp",aw);return false});l=al.innerWidth();ah()}}function ah(){al.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){l-=b(this).outerWidth()});G.width(l+"px");aa=0}function F(){if(aE&&az){var aI=G.outerHeight(),s=ap.outerWidth();t-=aI;b(am).find(">.jspCap:visible,>.jspArrow").each(function(){l+=b(this).outerWidth()});l-=s;v-=s;aj-=aI;G.parent().append(b('<div class="jspCorner" />').css("width",aI+"px"));o();ah()}if(aE){Y.width((al.outerWidth()-f)+"px")}Z=Y.outerHeight();q=Z/v;if(aE){at=Math.ceil(1/y*l);if(at>ay.horizontalDragMaxWidth){at=ay.horizontalDragMaxWidth}else{if(at<ay.horizontalDragMinWidth){at=ay.horizontalDragMinWidth}}h.width(at+"px");j=l-at;ae(aa)}if(az){A=Math.ceil(1/q*t);if(A>ay.verticalDragMaxHeight){A=ay.verticalDragMaxHeight}else{if(A<ay.verticalDragMinHeight){A=ay.verticalDragMinHeight}}au.height(A+"px");i=t-A;ad(I)}}function ak(aJ,aL,aI,s){var aN="before",aK="after",aM;if(aL=="os"){aL=/Mac/.test(navigator.platform)?"after":"split"}if(aL==aN){aK=aL}else{if(aL==aK){aN=aL;aM=aI;aI=s;s=aM}}aJ[aN](aI)[aK](s)}function aD(aI,s,aJ){return function(){H(aI,s,this,aJ);this.blur();return false}}function H(aL,aK,aO,aN){aO=b(aO).addClass("jspActive");var aM,aJ,aI=true,s=function(){if(aL!==0){Q.scrollByX(aL*ay.arrowButtonSpeed)}if(aK!==0){Q.scrollByY(aK*ay.arrowButtonSpeed)}aJ=setTimeout(s,aI?ay.initialDelay:ay.arrowRepeatFreq);aI=false};s();aM=aN?"mouseout.jsp":"mouseup.jsp";aN=aN||b("html");aN.bind(aM,function(){aO.removeClass("jspActive");aJ&&clearTimeout(aJ);aJ=null;aN.unbind(aM)})}function p(){w();if(az){ap.bind("mousedown.jsp",function(aN){if(aN.originalTarget===c||aN.originalTarget==aN.currentTarget){var aL=b(this),aO=aL.offset(),aM=aN.pageY-aO.top-I,aJ,aI=true,s=function(){var aR=aL.offset(),aS=aN.pageY-aR.top-A/2,aP=v*ay.scrollPagePercent,aQ=i*aP/(Z-v);if(aM<0){if(I-aQ>aS){Q.scrollByY(-aP)}else{V(aS)}}else{if(aM>0){if(I+aQ<aS){Q.scrollByY(aP)}else{V(aS)}}else{aK();return}}aJ=setTimeout(s,aI?ay.initialDelay:ay.trackClickRepeatFreq);aI=false},aK=function(){aJ&&clearTimeout(aJ);aJ=null;b(document).unbind("mouseup.jsp",aK)};s();b(document).bind("mouseup.jsp",aK);return false}})}if(aE){G.bind("mousedown.jsp",function(aN){if(aN.originalTarget===c||aN.originalTarget==aN.currentTarget){var aL=b(this),aO=aL.offset(),aM=aN.pageX-aO.left-aa,aJ,aI=true,s=function(){var aR=aL.offset(),aS=aN.pageX-aR.left-at/2,aP=aj*ay.scrollPagePercent,aQ=j*aP/(T-aj);if(aM<0){if(aa-aQ>aS){Q.scrollByX(-aP)}else{W(aS)}}else{if(aM>0){if(aa+aQ<aS){Q.scrollByX(aP)}else{W(aS)}}else{aK();return}}aJ=setTimeout(s,aI?ay.initialDelay:ay.trackClickRepeatFreq);aI=false},aK=function(){aJ&&clearTimeout(aJ);aJ=null;b(document).unbind("mouseup.jsp",aK)};s();b(document).bind("mouseup.jsp",aK);return false}})}}function w(){if(G){G.unbind("mousedown.jsp")}if(ap){ap.unbind("mousedown.jsp")}}function aw(){b("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");if(au){au.removeClass("jspActive")}if(h){h.removeClass("jspActive")}}function V(s,aI){if(!az){return}if(s<0){s=0}else{if(s>i){s=i}}if(aI===c){aI=ay.animateScroll}if(aI){Q.animate(au,"top",s,ad)}else{au.css("top",s);ad(s)}}function ad(aI){if(aI===c){aI=au.position().top}al.scrollTop(0);I=aI;var aL=I===0,aJ=I==i,aK=aI/i,s=-aK*(Z-v);if(ai!=aL||aG!=aJ){ai=aL;aG=aJ;D.trigger("jsp-arrow-change",[ai,aG,P,k])}u(aL,aJ);Y.css("top",s);D.trigger("jsp-scroll-y",[-s,aL,aJ]).trigger("scroll")}function W(aI,s){if(!aE){return}if(aI<0){aI=0}else{if(aI>j){aI=j}}if(s===c){s=ay.animateScroll}if(s){Q.animate(h,"left",aI,ae)
}else{h.css("left",aI);ae(aI)}}function ae(aI){if(aI===c){aI=h.position().left}al.scrollTop(0);aa=aI;var aL=aa===0,aK=aa==j,aJ=aI/j,s=-aJ*(T-aj);if(P!=aL||k!=aK){P=aL;k=aK;D.trigger("jsp-arrow-change",[ai,aG,P,k])}r(aL,aK);Y.css("left",s);D.trigger("jsp-scroll-x",[-s,aL,aK]).trigger("scroll")}function u(aI,s){if(ay.showArrows){aq[aI?"addClass":"removeClass"]("jspDisabled");af[s?"addClass":"removeClass"]("jspDisabled")}}function r(aI,s){if(ay.showArrows){ax[aI?"addClass":"removeClass"]("jspDisabled");x[s?"addClass":"removeClass"]("jspDisabled")}}function M(s,aI){var aJ=s/(Z-v);V(aJ*i,aI)}function N(aI,s){var aJ=aI/(T-aj);W(aJ*j,s)}function ab(aV,aQ,aJ){var aN,aK,aL,s=0,aU=0,aI,aP,aO,aS,aR,aT;try{aN=b(aV)}catch(aM){return}aK=aN.outerHeight();aL=aN.outerWidth();al.scrollTop(0);al.scrollLeft(0);while(!aN.is(".jspPane")){s+=aN.position().top;aU+=aN.position().left;aN=aN.offsetParent();if(/^body|html$/i.test(aN[0].nodeName)){return}}aI=aA();aO=aI+v;if(s<aI||aQ){aR=s-ay.verticalGutter}else{if(s+aK>aO){aR=s-v+aK+ay.verticalGutter}}if(aR){M(aR,aJ)}aP=aC();aS=aP+aj;if(aU<aP||aQ){aT=aU-ay.horizontalGutter}else{if(aU+aL>aS){aT=aU-aj+aL+ay.horizontalGutter}}if(aT){N(aT,aJ)}}function aC(){return -Y.position().left}function aA(){return -Y.position().top}function K(){var s=Z-v;return(s>20)&&(s-aA()<10)}function B(){var s=T-aj;return(s>20)&&(s-aC()<10)}function ag(){al.unbind(ac).bind(ac,function(aL,aM,aK,aI){var aJ=aa,s=I;Q.scrollBy(aK*ay.mouseWheelSpeed,-aI*ay.mouseWheelSpeed,false);return aJ==aa&&s==I})}function n(){al.unbind(ac)}function aB(){return false}function J(){Y.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(s){ab(s.target,false)})}function E(){Y.find(":input,a").unbind("focus.jsp")}function S(){var s,aI,aK=[];aE&&aK.push(am[0]);az&&aK.push(U[0]);Y.focus(function(){D.focus()});D.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(aN){if(aN.target!==this&&!(aK.length&&b(aN.target).closest(aK).length)){return}var aM=aa,aL=I;switch(aN.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:s=aN.keyCode;aJ();break;case 35:M(Z-v);s=null;break;case 36:M(0);s=null;break}aI=aN.keyCode==s&&aM!=aa||aL!=I;return !aI}).bind("keypress.jsp",function(aL){if(aL.keyCode==s){aJ()}return !aI});if(ay.hideFocus){D.css("outline","none");if("hideFocus" in al[0]){D.attr("hideFocus",true)}}else{D.css("outline","");if("hideFocus" in al[0]){D.attr("hideFocus",false)}}function aJ(){var aM=aa,aL=I;switch(s){case 40:Q.scrollByY(ay.keyboardSpeed,false);break;case 38:Q.scrollByY(-ay.keyboardSpeed,false);break;case 34:case 32:Q.scrollByY(v*ay.scrollPagePercent,false);break;case 33:Q.scrollByY(-v*ay.scrollPagePercent,false);break;case 39:Q.scrollByX(ay.keyboardSpeed,false);break;case 37:Q.scrollByX(-ay.keyboardSpeed,false);break}aI=aM!=aa||aL!=I;return aI}}function R(){D.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")}function C(){if(location.hash&&location.hash.length>1){var aK,aI,aJ=escape(location.hash.substr(1));try{aK=b("#"+aJ+', a[name="'+aJ+'"]')}catch(s){return}if(aK.length&&Y.find(aJ)){if(al.scrollTop()===0){aI=setInterval(function(){if(al.scrollTop()>0){ab(aK,true);b(document).scrollTop(al.position().top);clearInterval(aI)}},50)}else{ab(aK,true);b(document).scrollTop(al.position().top)}}}}function m(){if(b(document.body).data("jspHijack")){return}b(document.body).data("jspHijack",true);b(document.body).delegate("a[href*=#]","click",function(s){var aI=this.href.substr(0,this.href.indexOf("#")),aK=location.href,aO,aP,aJ,aM,aL,aN;if(location.href.indexOf("#")!==-1){aK=location.href.substr(0,location.href.indexOf("#"))}if(aI!==aK){return}aO=escape(this.href.substr(this.href.indexOf("#")+1));aP;try{aP=b("#"+aO+', a[name="'+aO+'"]')}catch(aQ){return}if(!aP.length){return}aJ=aP.closest(".jspScrollable");aM=aJ.data("jsp");aM.scrollToElement(aP,true);if(aJ[0].scrollIntoView){aL=b(a).scrollTop();aN=aP.offset().top;if(aN<aL||aN>aL+b(a).height()){aJ[0].scrollIntoView()}}s.preventDefault()
})}function an(){var aJ,aI,aL,aK,aM,s=false;al.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(aN){var aO=aN.originalEvent.touches[0];aJ=aC();aI=aA();aL=aO.pageX;aK=aO.pageY;aM=false;s=true}).bind("touchmove.jsp",function(aQ){if(!s){return}var aP=aQ.originalEvent.touches[0],aO=aa,aN=I;Q.scrollTo(aJ+aL-aP.pageX,aI+aK-aP.pageY);aM=aM||Math.abs(aL-aP.pageX)>5||Math.abs(aK-aP.pageY)>5;return aO==aa&&aN==I}).bind("touchend.jsp",function(aN){s=false}).bind("click.jsp-touchclick",function(aN){if(aM){aM=false;return false}})}function g(){var s=aA(),aI=aC();D.removeClass("jspScrollable").unbind(".jsp");D.replaceWith(ao.append(Y.children()));ao.scrollTop(s);ao.scrollLeft(aI);if(av){clearInterval(av)}}b.extend(Q,{reinitialise:function(aI){aI=b.extend({},ay,aI);ar(aI)},scrollToElement:function(aJ,aI,s){ab(aJ,aI,s)},scrollTo:function(aJ,s,aI){N(aJ,aI);M(s,aI)},scrollToX:function(aI,s){N(aI,s)},scrollToY:function(s,aI){M(s,aI)},scrollToPercentX:function(aI,s){N(aI*(T-aj),s)},scrollToPercentY:function(aI,s){M(aI*(Z-v),s)},scrollBy:function(aI,s,aJ){Q.scrollByX(aI,aJ);Q.scrollByY(s,aJ)},scrollByX:function(s,aJ){var aI=aC()+Math[s<0?"floor":"ceil"](s),aK=aI/(T-aj);W(aK*j,aJ)},scrollByY:function(s,aJ){var aI=aA()+Math[s<0?"floor":"ceil"](s),aK=aI/(Z-v);V(aK*i,aJ)},positionDragX:function(s,aI){W(s,aI)},positionDragY:function(aI,s){V(aI,s)},animate:function(aI,aL,s,aK){var aJ={};aJ[aL]=s;aI.animate(aJ,{duration:ay.animateDuration,easing:ay.animateEase,queue:false,step:aK})},getContentPositionX:function(){return aC()},getContentPositionY:function(){return aA()},getContentWidth:function(){return T},getContentHeight:function(){return Z},getPercentScrolledX:function(){return aC()/(T-aj)},getPercentScrolledY:function(){return aA()/(Z-v)},getIsScrollableH:function(){return aE},getIsScrollableV:function(){return az},getContentPane:function(){return Y},scrollToBottom:function(s){V(i,s)},hijackInternalLinks:b.noop,destroy:function(){g()}});ar(O)}e=b.extend({},b.fn.jScrollPane.defaults,e);b.each(["mouseWheelSpeed","arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){e[this]=e[this]||e.speed});return this.each(function(){var f=b(this),g=f.data("jsp");if(g){g.reinitialise(e)}else{b("script",f).filter('[type="text/javascript"],:not([type])').remove();g=new d(f,e);f.data("jsp",g)}})};b.fn.jScrollPane.defaults={showArrows:false,maintainPosition:true,stickToBottom:false,stickToRight:false,clickOnTrack:true,autoReinitialise:false,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:c,animateScroll:false,animateDuration:300,animateEase:"linear",hijackInternalLinks:false,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:0,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:false,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:true,hideFocus:false,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:0.8}})(jQuery,this);
/* End jquery.jscrollpane.min.js */

/* Start jquery.dropkick-min.js */
/*
 * DropKick 1.3.1
 *
 * Highly customizable <select> lists
 * https://github.com/robdel12/DropKick
 *
 * Created by: Jamie Lottering <http://github.com/JamieLottering> <http://twitter.com/JamieLottering>
 *
 *
*/
(function(e,t,n){"use strict";var r=navigator.userAgent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/),i=!!r,s=i&&parseFloat(r[1])<7,o=navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i),u={},a=[],f={left:37,up:38,right:39,down:40,enter:13,tab:9,zero:48,z:90,last:221},l=['<div class="dk_container" id="dk_container_{{ id }}" tabindex="{{ tabindex }}">','<a class="dk_toggle">','<span class="dk_label">{{ label }}</span>',"</a>",'<div class="dk_options">','<ul class="dk_options_inner">',"</ul>","</div>","</div>"].join(""),c='<li class="{{ current }} {{ disabled }}"><a data-dk-dropdown-value="{{ value }}">{{ text }}</a></li>',h={startSpeed:400,theme:!1,changes:!1,syncReverse:!0,nativeMobile:!0},p=null,d=null,v=function(e,t,n){var r,i,s,o;r=e.attr("data-dk-dropdown-value");i=e.text();s=t.data("dropkick");o=s.$select;t.find(".dk_label").text(i);o.val(r).trigger("change");n=n||!1;s.settings.change&&!n&&!s.settings.syncReverse&&s.settings.change.call(o,r,i)},m=function(e){e.removeClass("dk_open");p=null},g=function(n){var r=n.find(".dk_toggle"),i=n.find(".dk_options").outerHeight(),s=e(t).height()-r.outerHeight()-r.offset().top+e(t).scrollTop(),o=r.offset().top-e(t).scrollTop();return i<o?i<s:!0},y=function(e,t,n){var r=e.find(".dk_options_inner"),i=t.prevAll("li").outerHeight()*t.prevAll("li").length,s=r.scrollTop(),o=r.height()+r.scrollTop()-t.outerHeight();(n&&n.type==="keydown"||i<s||i>o)&&r.scrollTop(i)},b=function(e,t){var n=g(e);e.find(".dk_options").css({top:n?e.find(".dk_toggle").outerHeight()-1:"",bottom:n?"":e.find(".dk_toggle").outerHeight()-1});p=e.toggleClass("dk_open");y(e,e.find(".dk_option_current"),t)},w=function(e,t,n){t.find(".dk_option_current").removeClass("dk_option_current");e.addClass("dk_option_current");y(t,e,n)},E=function(t,n){var r=t.keyCode,i=n.data("dropkick"),s=String.fromCharCode(r),o=n.find(".dk_options"),u=n.hasClass("dk_open"),a=o.find("li"),l=n.find(".dk_option_current"),c=a.first(),h=a.last(),p,d,g,y,E,S,x;switch(r){case f.enter:if(u){if(!l.hasClass("disabled")){v(l.find("a"),n);m(n)}}else b(n,t);t.preventDefault();break;case f.tab:if(u){v(l.find("a"),n);m(n)}break;case f.up:d=l.prev("li");u?d.length?w(d,n,t):w(h,n,t):b(n,t);t.preventDefault();break;case f.down:if(u){p=l.next("li").first();p.length?w(p,n,t):w(c,n,t)}else b(n,t);t.preventDefault();break;default:}if(r>=f.zero&&r<=f.z){g=(new Date).getTime();if(i.finder===null){i.finder=s.toUpperCase();i.timer=g}else if(g>parseInt(i.timer,10)+1e3){i.finder=s.toUpperCase();i.timer=g}else{i.finder=i.finder+s.toUpperCase();i.timer=g}y=a.find("a");for(E=0,S=y.length;E<S;E++){x=e(y[E]);if(x.html().toUpperCase().indexOf(i.finder)===0){v(x,n);w(x.parent(),n,t);break}}n.data("dropkick",i)}},S=function(t){return e.trim(t).length>0?t:!1},x=function(t,n){var r=t.replace("{{ id }}",n.id).replace("{{ label }}",n.label).replace("{{ tabindex }}",n.tabindex),i=[],s,o,u,a,f;if(n.options&&n.options.length)for(o=0,u=n.options.length;o<u;o++){a=e(n.options[o]);o===0&&a.attr("selected")!==undefined&&a.attr("disabled")!==undefined?f=null:f=c.replace("{{ value }}",a.val()).replace("{{ current }}",S(a.val())===n.value?"dk_option_current":"").replace("{{ disabled }}",a.attr("disabled")!==undefined?"disabled":"").replace("{{ text }}",a.html());i[i.length]=f}s=e(r);s.find(".dk_options_inner").html(i.join(""));return s};s||(n.documentElement.className=n.documentElement.className+" dk_fouc");u.init=function(t){t=e.extend({},h,t);return this.each(function(){var n=e(this),r=n.find(":selected").first(),i=n.find("option"),s=n.data("dropkick")||{},u=n.attr("id")||n.attr("name"),f=t.width||n.outerWidth(),c=n.attr("tabindex")||"0",h=!1,p,v;if(s.id)return n;s.settings=t;s.tabindex=c;s.id=u;s.$original=r;s.$select=n;s.value=S(n.val())||S(r.attr("value"));s.label=r.text();s.options=i;h=x(l,s);h.find(".dk_toggle").css({width:f+"px"});n.before(h).appendTo(h);h=e('div[id="dk_container_'+u+'"]').fadeIn(t.startSpeed);p=t.theme||"default";h.addClass("dk_theme_"+p);s.theme=p;s.$dk=h;n.data("dropkick",s);h.addClass(n.attr("class"));h.data("dropkick",s);a[a.length]=n;h.bind("focus.dropkick",function(){d=h.addClass("dk_focus")}).bind("blur.dropkick",function(){h.removeClass("dk_focus");d=null});o&&s.settings.nativeMobile&&h.addClass("dk_mobile");s.settings.syncReverse&&n.on("change",function(t){var r=n.val(),i=e('a[data-dk-dropdown-value="'+r+'"]',h),o=i.text();h.find(".dk_label").text(o);s.settings.change&&s.settings.change.call(n,r,o);w(i.parent(),h,t)});if(n.attr("form")||n.closest("form").length){v=n.attr("form")?e("#"+n.attr("form").replace(" ",", #")):n.closest("form");v.on("reset",function(){n.dropkick("reset")})}})};u.theme=function(t){var n=e(this).data("dropkick"),r=n.$dk,i="dk_theme_"+n.theme;r.removeClass(i).addClass("dk_theme_"+t);n.theme=t};u.reset=function(){return this.each(function(){var t=e(this).data("dropkick"),n=t.$dk,r=e('a[data-dk-dropdown-value="'+t.value+'"]',n);!t.$original.eq(0).prop("selected")&&t.$original.eq(0).prop("selected",!0);n.find(".dk_label").text(t.label);w(r.parent(),n)})};u.setValue=function(t){var n=e(this).data("dropkick").$dk,r=e('.dk_options a[data-dk-dropdown-value="'+t+'"]',n);if(r.length){v(r,n);w(r.parent(),n)}else console.warn("There is no option with this value in the <select>")};u.refresh=function(){return this.each(function(){var t=e(this).data("dropkick"),n=t.$select,r=t.$dk;t.settings.startSpeed=0;n.removeData("dropkick").insertAfter(r);r.remove();n.dropkick(t.settings)})};e.fn.dropkick=function(e){if(!s){if(u[e])return u[e].apply(this,Array.prototype.slice.call(arguments,1));if(typeof e=="object"||!e)return u.init.apply(this,arguments)}};e(function(){e(n).on(i?"mousedown":"click",".dk_options a",function(){var t=e(this),n=t.parents(".dk_container").first();if(!t.parent().hasClass("disabled")){v(t,n);w(t.parent(),n);m(n)}return!1});e(n).bind("keydown.dk_nav",function(e){var t=null;p?t=p:d&&!p&&(t=d);t&&E(e,t)});e(n).on("click",null,function(t){if(p&&e(t.target).closest(".dk_container").length===0)m(p);else if(e(t.target).is(".dk_toggle, .dk_label")){var n=e(t.target).parents(".dk_container").first();if(n.hasClass("dk_open"))m(n);else{p&&m(p);b(n,t)}return!1}});var r="onwheel"in t?"wheel":"onmousewheel"in n?"mousewheel":"MouseScrollEvent"in t?"DOMMouseScroll MozMousePixelScroll":!1;r&&e(n).on(r,".dk_options_inner",function(e){var t=e.originalEvent.wheelDelta||-e.originalEvent.deltaY||-e.originalEvent.detail;if(i){this.scrollTop-=Math.round(t/10);return!1}return t>0&&this.scrollTop<=0||t<0&&this.scrollTop>=this.scrollHeight-this.offsetHeight?!1:!0})})})(jQuery,window,document);
/* End jquery.dropkick-min.js */

/* STart jquery.actual.min.js */
/* Copyright 2012, Ben Lin (http://dreamerslab.com/)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 1.0.15
 *
 * Requires: jQuery >= 1.2.3
 */
(function(a){a.fn.addBack=a.fn.addBack||a.fn.andSelf;a.fn.extend({actual:function(b,l){if(!this[b]){throw'$.actual => The jQuery method "'+b+'" you called does not exist';}var f={absolute:false,clone:false,includeMargin:false};var i=a.extend(f,l);var e=this.eq(0);var h,j;if(i.clone===true){h=function(){var m="position: absolute !important; top: -1000 !important; ";e=e.clone().attr("style",m).appendTo("body");};j=function(){e.remove();};}else{var g=[];var d="";var c;h=function(){c=e.parents().addBack().filter(":hidden");d+="visibility: hidden !important; display: block !important; ";if(i.absolute===true){d+="position: absolute !important; ";}c.each(function(){var m=a(this);g.push(m.attr("style"));m.attr("style",d);});};j=function(){c.each(function(m){var o=a(this);var n=g[m];if(n===undefined){o.removeAttr("style");}else{o.attr("style",n);}});};}h();var k=/(outer)/.test(b)?e[b](i.includeMargin):e[b]();j();return k;}});})(jQuery);

/* End jquery.actual.min.js */

/*! Hammer.JS - v1.0.6dev - 2013-04-10
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2013 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */

(function(t,e){"use strict";function n(){if(!i.READY){i.event.determineEventTypes();for(var t in i.gestures)i.gestures.hasOwnProperty(t)&&i.detection.register(i.gestures[t]);i.event.onTouch(i.DOCUMENT,i.EVENT_MOVE,i.detection.detect),i.event.onTouch(i.DOCUMENT,i.EVENT_END,i.detection.detect),i.READY=!0}}var i=function(t,e){return new i.Instance(t,e||{})};i.defaults={stop_browser_behavior:{userSelect:"none",touchAction:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},i.HAS_POINTEREVENTS=navigator.pointerEnabled||navigator.msPointerEnabled,i.HAS_TOUCHEVENTS="ontouchstart"in t,i.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android/i,i.NO_MOUSEEVENTS=i.HAS_TOUCHEVENTS&&navigator.userAgent.match(i.MOBILE_REGEX),i.EVENT_TYPES={},i.DIRECTION_DOWN="down",i.DIRECTION_LEFT="left",i.DIRECTION_UP="up",i.DIRECTION_RIGHT="right",i.POINTER_MOUSE="mouse",i.POINTER_TOUCH="touch",i.POINTER_PEN="pen",i.EVENT_START="start",i.EVENT_MOVE="move",i.EVENT_END="end",i.DOCUMENT=document,i.plugins={},i.READY=!1,i.Instance=function(t,e){var r=this;return n(),this.element=t,this.enabled=!0,this.options=i.utils.extend(i.utils.extend({},i.defaults),e||{}),this.options.stop_browser_behavior&&i.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),i.event.onTouch(t,i.EVENT_START,function(t){r.enabled&&i.detection.startDetect(r,t)}),this},i.Instance.prototype={on:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.addEventListener(n[i],e,!1);return this},off:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.removeEventListener(n[i],e,!1);return this},trigger:function(t,e){var n=i.DOCUMENT.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e;var r=this.element;return i.utils.hasParent(e.target,r)&&(r=e.target),r.dispatchEvent(n),this},enable:function(t){return this.enabled=t,this}};var r=null,o=!1,s=!1;i.event={bindDom:function(t,e,n){for(var i=e.split(" "),r=0;i.length>r;r++)t.addEventListener(i[r],n,!1)},onTouch:function(t,e,n){var a=this;this.bindDom(t,i.EVENT_TYPES[e],function(c){var u=c.type.toLowerCase();if(!u.match(/mouse/)||!s){u.match(/touch/)||u.match(/pointerdown/)||u.match(/mouse/)&&1===c.which?o=!0:u.match(/mouse/)&&1!==c.which&&(o=!1),u.match(/touch|pointer/)&&(s=!0);var h=0;o&&(i.HAS_POINTEREVENTS&&e!=i.EVENT_END?h=i.PointerEvent.updatePointer(e,c):u.match(/touch/)?h=c.touches.length:s||(h=u.match(/up/)?0:1),h>0&&e==i.EVENT_END?e=i.EVENT_MOVE:h||(e=i.EVENT_END),h||null===r?r=c:c=r,n.call(i.detection,a.collectEventData(t,e,c)),i.HAS_POINTEREVENTS&&e==i.EVENT_END&&(h=i.PointerEvent.updatePointer(e,c))),h||(r=null,o=!1,s=!1,i.PointerEvent.reset())}})},determineEventTypes:function(){var t;t=i.HAS_POINTEREVENTS?i.PointerEvent.getEvents():i.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],i.EVENT_TYPES[i.EVENT_START]=t[0],i.EVENT_TYPES[i.EVENT_MOVE]=t[1],i.EVENT_TYPES[i.EVENT_END]=t[2]},getTouchList:function(t){return i.HAS_POINTEREVENTS?i.PointerEvent.getTouchList():t.touches?t.touches:[{identifier:1,pageX:t.pageX,pageY:t.pageY,target:t.target}]},collectEventData:function(t,e,n){var r=this.getTouchList(n,e),o=i.POINTER_TOUCH;return(n.type.match(/mouse/)||i.PointerEvent.matchType(i.POINTER_MOUSE,n))&&(o=i.POINTER_MOUSE),{center:i.utils.getCenter(r),timeStamp:(new Date).getTime(),target:n.target,touches:r,eventType:e,pointerType:o,srcEvent:n,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault&&this.srcEvent.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return i.detection.stopDetect()}}}},i.PointerEvent={pointers:{},getTouchList:function(){var t=this,e=[];return Object.keys(t.pointers).sort().forEach(function(n){e.push(t.pointers[n])}),e},updatePointer:function(t,e){return t==i.EVENT_END?this.pointers={}:(e.identifier=e.pointerId,this.pointers[e.pointerId]=e),Object.keys(this.pointers).length},matchType:function(t,e){if(!e.pointerType)return!1;var n={};return n[i.POINTER_MOUSE]=e.pointerType==e.MSPOINTER_TYPE_MOUSE||e.pointerType==i.POINTER_MOUSE,n[i.POINTER_TOUCH]=e.pointerType==e.MSPOINTER_TYPE_TOUCH||e.pointerType==i.POINTER_TOUCH,n[i.POINTER_PEN]=e.pointerType==e.MSPOINTER_TYPE_PEN||e.pointerType==i.POINTER_PEN,n[t]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},i.utils={extend:function(t,n,i){for(var r in n)t[r]!==e&&i||(t[r]=n[r]);return t},hasParent:function(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1},getCenter:function(t){for(var e=[],n=[],i=0,r=t.length;r>i;i++)e.push(t[i].pageX),n.push(t[i].pageY);return{pageX:(Math.min.apply(Math,e)+Math.max.apply(Math,e))/2,pageY:(Math.min.apply(Math,n)+Math.max.apply(Math,n))/2}},getVelocity:function(t,e,n){return{x:Math.abs(e/t)||0,y:Math.abs(n/t)||0}},getAngle:function(t,e){var n=e.pageY-t.pageY,i=e.pageX-t.pageX;return 180*Math.atan2(n,i)/Math.PI},getDirection:function(t,e){var n=Math.abs(t.pageX-e.pageX),r=Math.abs(t.pageY-e.pageY);return n>=r?t.pageX-e.pageX>0?i.DIRECTION_LEFT:i.DIRECTION_RIGHT:t.pageY-e.pageY>0?i.DIRECTION_UP:i.DIRECTION_DOWN},getDistance:function(t,e){var n=e.pageX-t.pageX,i=e.pageY-t.pageY;return Math.sqrt(n*n+i*i)},getScale:function(t,e){return t.length>=2&&e.length>=2?this.getDistance(e[0],e[1])/this.getDistance(t[0],t[1]):1},getRotation:function(t,e){return t.length>=2&&e.length>=2?this.getAngle(e[1],e[0])-this.getAngle(t[1],t[0]):0},isVertical:function(t){return t==i.DIRECTION_UP||t==i.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(t,e){var n,i=["webkit","khtml","moz","ms","o",""];if(e&&t.style){for(var r=0;i.length>r;r++)for(var o in e)e.hasOwnProperty(o)&&(n=o,i[r]&&(n=i[r]+n.substring(0,1).toUpperCase()+n.substring(1)),t.style[n]=e[o]);"none"==e.userSelect&&(t.onselectstart=function(){return!1})}}},i.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(t,e){this.current||(this.stopped=!1,this.current={inst:t,startEvent:i.utils.extend({},e),lastEvent:!1,name:""},this.detect(e))},detect:function(t){if(this.current&&!this.stopped){t=this.extendEventData(t);for(var e=this.current.inst.options,n=0,r=this.gestures.length;r>n;n++){var o=this.gestures[n];if(!this.stopped&&e[o.name]!==!1&&o.handler.call(o,t,this.current.inst)===!1){this.stopDetect();break}}return this.current&&(this.current.lastEvent=t),t.eventType==i.EVENT_END&&!t.touches.length-1&&this.stopDetect(),t}},stopDetect:function(){this.previous=i.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(t){var e=this.current.startEvent;if(e&&(t.touches.length!=e.touches.length||t.touches===e.touches)){e.touches=[];for(var n=0,r=t.touches.length;r>n;n++)e.touches.push(i.utils.extend({},t.touches[n]))}var o=t.timeStamp-e.timeStamp,s=t.center.pageX-e.center.pageX,a=t.center.pageY-e.center.pageY,c=i.utils.getVelocity(o,s,a);return i.utils.extend(t,{deltaTime:o,deltaX:s,deltaY:a,velocityX:c.x,velocityY:c.y,distance:i.utils.getDistance(e.center,t.center),angle:i.utils.getAngle(e.center,t.center),direction:i.utils.getDirection(e.center,t.center),scale:i.utils.getScale(e.touches,t.touches),rotation:i.utils.getRotation(e.touches,t.touches),startEvent:e}),t},register:function(t){var n=t.defaults||{};return n[t.name]===e&&(n[t.name]=!0),i.utils.extend(i.defaults,n,!0),t.index=t.index||1e3,this.gestures.push(t),this.gestures.sort(function(t,e){return t.index<e.index?-1:t.index>e.index?1:0}),this.gestures}},i.gestures=i.gestures||{},i.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(t,e){switch(t.eventType){case i.EVENT_START:clearTimeout(this.timer),i.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==i.detection.current.name&&e.trigger("hold",t)},e.options.hold_timeout);break;case i.EVENT_MOVE:t.distance>e.options.hold_threshold&&clearTimeout(this.timer);break;case i.EVENT_END:clearTimeout(this.timer)}}},i.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(t,e){if(t.eventType==i.EVENT_END){var n=i.detection.previous,r=!1;if(t.deltaTime>e.options.tap_max_touchtime||t.distance>e.options.tap_max_distance)return;n&&"tap"==n.name&&t.timeStamp-n.lastEvent.timeStamp<e.options.doubletap_interval&&t.distance<e.options.doubletap_distance&&(e.trigger("doubletap",t),r=!0),(!r||e.options.tap_always)&&(i.detection.current.name="tap",e.trigger(i.detection.current.name,t))}}},i.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_max_touches:1,swipe_velocity:.7},handler:function(t,e){if(t.eventType==i.EVENT_END){if(e.options.swipe_max_touches>0&&t.touches.length>e.options.swipe_max_touches)return;(t.velocityX>e.options.swipe_velocity||t.velocityY>e.options.swipe_velocity)&&(e.trigger(this.name,t),e.trigger(this.name+t.direction,t))}}},i.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,drag_max_touches:1,drag_block_horizontal:!1,drag_block_vertical:!1,drag_lock_to_axis:!1,drag_lock_min_distance:25},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(n.options.drag_max_touches>0&&t.touches.length>n.options.drag_max_touches))switch(t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:if(t.distance<n.options.drag_min_distance&&i.detection.current.name!=this.name)return;i.detection.current.name=this.name,(i.detection.current.lastEvent.drag_locked_to_axis||n.options.drag_lock_to_axis&&n.options.drag_lock_min_distance<=t.distance)&&(t.drag_locked_to_axis=!0);var r=i.detection.current.lastEvent.direction;t.drag_locked_to_axis&&r!==t.direction&&(t.direction=i.utils.isVertical(r)?0>t.deltaY?i.DIRECTION_UP:i.DIRECTION_DOWN:0>t.deltaX?i.DIRECTION_LEFT:i.DIRECTION_RIGHT),this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),n.trigger(this.name+t.direction,t),(n.options.drag_block_vertical&&i.utils.isVertical(t.direction)||n.options.drag_block_horizontal&&!i.utils.isVertical(t.direction))&&t.preventDefault();break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(2>t.touches.length))switch(n.options.transform_always_block&&t.preventDefault(),t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:var r=Math.abs(1-t.scale),o=Math.abs(t.rotation);if(n.options.transform_min_scale>r&&n.options.transform_min_rotation>o)return;i.detection.current.name=this.name,this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),o>n.options.transform_min_rotation&&n.trigger("rotate",t),r>n.options.transform_min_scale&&(n.trigger("pinch",t),n.trigger("pinch"+(1>t.scale?"in":"out"),t));break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(t,n){return n.options.prevent_mouseevents&&t.pointerType==i.POINTER_MOUSE?(t.stopDetect(),e):(n.options.prevent_default&&t.preventDefault(),t.eventType==i.EVENT_START&&n.trigger(this.name,t),e)}},i.gestures.Release={name:"release",index:1/0,handler:function(t,e){t.eventType==i.EVENT_END&&e.trigger(this.name,t)}},"object"==typeof module&&"object"==typeof module.exports?module.exports=i:(t.Hammer=i,"function"==typeof t.define&&t.define.amd&&t.define("hammer",[],function(){return i}))})(this),function(t,e){"use strict";t!==e&&(Hammer.event.bindDom=function(n,i,r){t(n).on(i,function(t){var n=t.originalEvent||t;n.pageX===e&&(n.pageX=t.pageX,n.pageY=t.pageY),n.target||(n.target=t.target),n.which===e&&(n.which=n.button),n.preventDefault||(n.preventDefault=t.preventDefault),n.stopPropagation||(n.stopPropagation=t.stopPropagation),r.call(this,n)})},Hammer.Instance.prototype.on=function(e,n){return t(this.element).on(e,n)},Hammer.Instance.prototype.off=function(e,n){return t(this.element).off(e,n)},Hammer.Instance.prototype.trigger=function(e,n){var i=t(this.element);return i.has(n.target).length&&(i=t(n.target)),i.trigger({type:e,gesture:n})},t.fn.hammer=function(e){return this.each(function(){var n=t(this),i=n.data("hammer");i?i&&e&&Hammer.utils.extend(i.options,e):n.data("hammer",new Hammer(this,e||{}))})})}(window.jQuery||window.Zepto);

/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.9
 *
 * Requires: jQuery 1.2.2+
 */
(function(d){"function"===typeof define&&define.amd?define(["jquery"],d):"object"===typeof exports?module.exports=d:d(jQuery)})(function(d){function m(a){var c=a||window.event,k=r.call(arguments,1),f=0,e=0,b=0,g=0;a=d.event.fix(c);a.type="mousewheel";"detail"in c&&(b=-1*c.detail);"wheelDelta"in c&&(b=c.wheelDelta);"wheelDeltaY"in c&&(b=c.wheelDeltaY);"wheelDeltaX"in c&&(e=-1*c.wheelDeltaX);"axis"in c&&c.axis===c.HORIZONTAL_AXIS&&(e=-1*b,b=0);f=0===b?e:b;"deltaY"in c&&(f=b=-1*c.deltaY);"deltaX"in c&& (e=c.deltaX,0===b&&(f=-1*e));if(0!==b||0!==e){1===c.deltaMode?(g=d.data(this,"mousewheel-line-height"),f*=g,b*=g,e*=g):2===c.deltaMode&&(g=d.data(this,"mousewheel-page-height"),f*=g,b*=g,e*=g);g=Math.max(Math.abs(b),Math.abs(e));if(!h||g<h)h=g,l.settings.adjustOldDeltas&&"mousewheel"===c.type&&0===g%120&&(h/=40);l.settings.adjustOldDeltas&&"mousewheel"===c.type&&0===g%120&&(f/=40,e/=40,b/=40);f=Math[1<=f?"floor":"ceil"](f/h);e=Math[1<=e?"floor":"ceil"](e/h);b=Math[1<=b?"floor":"ceil"](b/h);a.deltaX= e;a.deltaY=b;a.deltaFactor=h;a.deltaMode=0;k.unshift(a,f,e,b);n&&clearTimeout(n);n=setTimeout(s,200);return(d.event.dispatch||d.event.handle).apply(this,k)}}function s(){h=null}var p=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],k="onwheel"in document||9<=document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],r=Array.prototype.slice,n,h;if(d.event.fixHooks)for(var q=p.length;q;)d.event.fixHooks[p[--q]]=d.event.mouseHooks;var l=d.event.special.mousewheel= {version:"3.1.9",setup:function(){if(this.addEventListener)for(var a=k.length;a;)this.addEventListener(k[--a],m,!1);else this.onmousewheel=m;d.data(this,"mousewheel-line-height",l.getLineHeight(this));d.data(this,"mousewheel-page-height",l.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var a=k.length;a;)this.removeEventListener(k[--a],m,!1);else this.onmousewheel=null},getLineHeight:function(a){return parseInt(d(a)["offsetParent"in d.fn?"offsetParent":"parent"]().css("fontSize"), 10)},getPageHeight:function(a){return d(a).height()},settings:{adjustOldDeltas:!0}};d.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});



//$(TouchNSwipe.init);
///**
// * jQuery Validation Plugin 1.9.0
// *
// * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
// * http://docs.jquery.com/Plugins/Validation
// *
// * Copyright (c) 2006 - 2011 Jörn Zaefferer
// *
// * Dual licensed under the MIT and GPL licenses:
// *   http://www.opensource.org/licenses/mit-license.php
// *   http://www.gnu.org/licenses/gpl.html
// */
(function (c) {
    c.extend(c.fn, {
        validate: function (a) {
            if (this.length) {
                var b = c.data(this[0], "validator");
                if (b)return b;
                this.attr("novalidate", "novalidate");
                b = new c.validator(a, this[0]);
                c.data(this[0], "validator", b);
                if (b.settings.onsubmit) {
                    a = this.find("input, button");
                    a.filter(".cancel").click(function () {
                        b.cancelSubmit = true
                    });
                    b.settings.submitHandler && a.filter(":submit").click(function () {
                        b.submitButton = this
                    });
                    this.submit(function (d) {
                        function e() {
                            if (b.settings.submitHandler) {
                                if (b.submitButton)var f = c("<input type='hidden'/>").attr("name",
                                    b.submitButton.name).val(b.submitButton.value).appendTo(b.currentForm);
                                b.settings.submitHandler.call(b, b.currentForm);
                                b.submitButton && f.remove();
                                return false
                            }
                            return true
                        }

                        b.settings.debug && d.preventDefault();
                        if (b.cancelSubmit) {
                            b.cancelSubmit = false;
                            return e()
                        }
                        if (b.form()) {
                            if (b.pendingRequest) {
                                b.formSubmitted = true;
                                return false
                            }
                            return e()
                        } else {
                            b.focusInvalid();
                            return false
                        }
                    })
                }
                return b
            } else a && a.debug && window.console && console.warn("nothing selected, can't validate, returning nothing")
        }, valid: function () {
            if (c(this[0]).is("form"))return this.validate().form();
            else {
                var a = true, b = c(this[0].form).validate();
                this.each(function () {
                    a &= b.element(this)
                });
                return a
            }
        }, removeAttrs: function (a) {
            var b = {}, d = this;
            c.each(a.split(/\s/), function (e, f) {
                b[f] = d.attr(f);
                d.removeAttr(f)
            });
            return b
        }, rules: function (a, b) {
            var d = this[0];
            if (a) {
                var e = c.data(d.form, "validator").settings, f = e.rules, g = c.validator.staticRules(d);
                switch (a) {
                    case "add":
                        c.extend(g, c.validator.normalizeRule(b));
                        f[d.name] = g;
                        if (b.messages)e.messages[d.name] = c.extend(e.messages[d.name], b.messages);
                        break;
                    case "remove":
                        if (!b) {
                            delete f[d.name];
                            return g
                        }
                        var h = {};
                        c.each(b.split(/\s/), function (j, i) {
                            h[i] = g[i];
                            delete g[i]
                        });
                        return h
                }
            }
            d = c.validator.normalizeRules(c.extend({}, c.validator.metadataRules(d), c.validator.classRules(d), c.validator.attributeRules(d), c.validator.staticRules(d)), d);
            if (d.required) {
                e = d.required;
                delete d.required;
                d = c.extend({required: e}, d)
            }
            return d
        }
    });
    c.extend(c.expr[":"], {
        blank: function (a) {
            return !c.trim("" + a.value)
        }, filled: function (a) {
            return !!c.trim("" + a.value)
        }, unchecked: function (a) {
            return !a.checked
        }
    });
    c.validator = function (a,
                            b) {
        this.settings = c.extend(true, {}, c.validator.defaults, a);
        this.currentForm = b;
        this.init()
    };
    c.validator.format = function (a, b) {
        if (arguments.length == 1)return function () {
            var d = c.makeArray(arguments);
            d.unshift(a);
            return c.validator.format.apply(this, d)
        };
        if (arguments.length > 2 && b.constructor != Array)b = c.makeArray(arguments).slice(1);
        if (b.constructor != Array)b = [b];
        c.each(b, function (d, e) {
            a = a.replace(RegExp("\\{" + d + "\\}", "g"), e)
        });
        return a
    };
    c.extend(c.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: true,
            errorContainer: c([]),
            errorLabelContainer: c([]),
            onsubmit: true,
            ignore: ":hidden",
            ignoreTitle: false,
            onfocusin: function (a) {
                this.lastActive = a;
                if (this.settings.focusCleanup && !this.blockFocusCleanup) {
                    this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass);
                    this.addWrapper(this.errorsFor(a)).hide()
                }
            },
            onfocusout: function (a) {
                if (!this.checkable(a) && (a.name in this.submitted || !this.optional(a)))this.element(a)
            },
            onkeyup: function (a) {
                if (a.name in this.submitted || a == this.lastElement)this.element(a)
            },
            onclick: function (a) {
                if (a.name in this.submitted)this.element(a); else a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function (a, b, d) {
                a.type === "radio" ? this.findByName(a.name).addClass(b).removeClass(d) : c(a).addClass(b).removeClass(d)
            },
            unhighlight: function (a, b, d) {
                a.type === "radio" ? this.findByName(a.name).removeClass(b).addClass(d) : c(a).removeClass(b).addClass(d)
            }
        },
        setDefaults: function (a) {
            c.extend(c.validator.defaults,
                a)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            accept: "Please enter a value with a valid extension.",
            maxlength: c.validator.format("Please enter no more than {0} characters."),
            minlength: c.validator.format("Please enter at least {0} characters."),
            rangelength: c.validator.format("Please enter a value between {0} and {1} characters long."),
            range: c.validator.format("Please enter a value between {0} and {1}."),
            max: c.validator.format("Please enter a value less than or equal to {0}."),
            min: c.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: false,
        prototype: {
            init: function () {
                function a(e) {
                    var f = c.data(this[0].form, "validator"), g = "on" + e.type.replace(/^validate/,
                            "");
                    f.settings[g] && f.settings[g].call(f, this[0], e)
                }

                this.labelContainer = c(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || c(this.currentForm);
                this.containers = c(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var b = this.groups = {};
                c.each(this.settings.groups, function (e, f) {
                    c.each(f.split(/\s/), function (g, h) {
                        b[h] = e
                    })
                });
                var d =
                    this.settings.rules;
                c.each(d, function (e, f) {
                    d[e] = c.validator.normalizeRule(f)
                });
                c(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", a).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click",
                    a);
                this.settings.invalidHandler && c(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            }, form: function () {
                this.checkForm();
                c.extend(this.submitted, this.errorMap);
                this.invalid = c.extend({}, this.errorMap);
                this.valid() || c(this.currentForm).triggerHandler("invalid-form", [this]);
                this.showErrors();
                return this.valid()
            }, checkForm: function () {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++)this.check(b[a]);
                return this.valid()
            }, element: function (a) {
                this.lastElement =
                    a = this.validationTargetFor(this.clean(a));
                this.prepareElement(a);
                this.currentElements = c(a);
                var b = this.check(a);
                if (b)delete this.invalid[a.name]; else this.invalid[a.name] = true;
                if (!this.numberOfInvalids())this.toHide = this.toHide.add(this.containers);
                this.showErrors();
                return b
            }, showErrors: function (a) {
                if (a) {
                    c.extend(this.errorMap, a);
                    this.errorList = [];
                    for (var b in a)this.errorList.push({message: a[b], element: this.findByName(b)[0]});
                    this.successList = c.grep(this.successList, function (d) {
                        return !(d.name in a)
                    })
                }
                this.settings.showErrors ?
                    this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            }, resetForm: function () {
                c.fn.resetForm && c(this.currentForm).resetForm();
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass)
            }, numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            }, objectLength: function (a) {
                var b = 0, d;
                for (d in a)b++;
                return b
            }, hideErrors: function () {
                this.addWrapper(this.toHide).hide()
            }, valid: function () {
                return this.size() ==
                    0
            }, size: function () {
                return this.errorList.length
            }, focusInvalid: function () {
                if (this.settings.focusInvalid)try {
                    c(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (a) {
                }
            }, findLastActive: function () {
                var a = this.lastActive;
                return a && c.grep(this.errorList, function (b) {
                        return b.element.name == a.name
                    }).length == 1 && a
            }, elements: function () {
                var a = this, b = {};
                return c(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
                    !this.name &&
                    a.settings.debug && window.console && console.error("%o has no name assigned", this);
                    if (this.name in b || !a.objectLength(c(this).rules()))return false;
                    return b[this.name] = true
                })
            }, clean: function (a) {
                return c(a)[0]
            }, errors: function () {
                return c(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext)
            }, reset: function () {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = c([]);
                this.toHide = c([]);
                this.currentElements = c([])
            }, prepareForm: function () {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function (a) {
                this.reset();
                this.toHide = this.errorsFor(a)
            }, check: function (a) {
                a = this.validationTargetFor(this.clean(a));
                var b = c(a).rules(), d = false, e;
                for (e in b) {
                    var f = {method: e, parameters: b[e]};
                    try {
                        var g = c.validator.methods[e].call(this, a.value.replace(/\r/g, ""), a, f.parameters);
                        if (g == "dependency-mismatch")d = true; else {
                            d = false;
                            if (g == "pending") {
                                this.toHide = this.toHide.not(this.errorsFor(a));
                                return
                            }
                            if (!g) {
                                this.formatAndAdd(a, f);
                                return false
                            }
                        }
                    } catch (h) {
                        this.settings.debug && window.console && console.log("exception occured when checking element " +
                        a.id + ", check the '" + f.method + "' method", h);
                        throw h;
                    }
                }
                if (!d) {
                    this.objectLength(b) && this.successList.push(a);
                    return true
                }
            }, customMetaMessage: function (a, b) {
                if (c.metadata) {
                    var d = this.settings.meta ? c(a).metadata()[this.settings.meta] : c(a).metadata();
                    return d && d.messages && d.messages[b]
                }
            }, customMessage: function (a, b) {
                var d = this.settings.messages[a];
                return d && (d.constructor == String ? d : d[b])
            }, findDefined: function () {
                for (var a = 0; a < arguments.length; a++)if (arguments[a] !== undefined)return arguments[a]
            }, defaultMessage: function (a,
                                         b) {
                return this.findDefined(this.customMessage(a.name, b), this.customMetaMessage(a, b), !this.settings.ignoreTitle && a.title || undefined, c.validator.messages[b], "<strong>Warning: No message defined for " + a.name + "</strong>")
            }, formatAndAdd: function (a, b) {
                var d = this.defaultMessage(a, b.method), e = /\$?\{(\d+)\}/g;
                if (typeof d == "function")d = d.call(this, b.parameters, a); else if (e.test(d))d = jQuery.format(d.replace(e, "{$1}"), b.parameters);
                this.errorList.push({message: d, element: a});
                this.errorMap[a.name] = d;
                this.submitted[a.name] =
                    d
            }, addWrapper: function (a) {
                if (this.settings.wrapper)a = a.add(a.parent(this.settings.wrapper));
                return a
            }, defaultShowErrors: function () {
                for (var a = 0; this.errorList[a]; a++) {
                    var b = this.errorList[a];
                    this.settings.highlight && this.settings.highlight.call(this, b.element, this.settings.errorClass, this.settings.validClass);
                    this.showLabel(b.element, b.message)
                }
                if (this.errorList.length)this.toShow = this.toShow.add(this.containers);
                if (this.settings.success)for (a = 0; this.successList[a]; a++)this.showLabel(this.successList[a]);
                if (this.settings.unhighlight) {
                    a = 0;
                    for (b = this.validElements(); b[a]; a++)this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass)
                }
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            }, validElements: function () {
                return this.currentElements.not(this.invalidElements())
            }, invalidElements: function () {
                return c(this.errorList).map(function () {
                    return this.element
                })
            }, showLabel: function (a, b) {
                var d = this.errorsFor(a);
                if (d.length) {
                    d.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
                    d.attr("generated") && d.html(b)
                } else {
                    d = c("<" + this.settings.errorElement + "/>").attr({
                        "for": this.idOrName(a),
                        generated: true
                    }).addClass(this.settings.errorClass).html(b || "");
                    if (this.settings.wrapper)d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
                    this.labelContainer.append(d).length || (this.settings.errorPlacement ? this.settings.errorPlacement(d, c(a)) : d.insertAfter(a))
                }
                if (!b && this.settings.success) {
                    d.text("");
                    typeof this.settings.success == "string" ? d.addClass(this.settings.success) : this.settings.success(d)
                }
                this.toShow =
                    this.toShow.add(d)
            }, errorsFor: function (a) {
                var b = this.idOrName(a);
                return this.errors().filter(function () {
                    return c(this).attr("for") == b
                })
            }, idOrName: function (a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            }, validationTargetFor: function (a) {
                if (this.checkable(a))a = this.findByName(a.name).not(this.settings.ignore)[0];
                return a
            }, checkable: function (a) {
                return /radio|checkbox/i.test(a.type)
            }, findByName: function (a) {
                var b = this.currentForm;
                return c(document.getElementsByName(a)).map(function (d,
                                                                      e) {
                    return e.form == b && e.name == a && e || null
                })
            }, getLength: function (a, b) {
                switch (b.nodeName.toLowerCase()) {
                    case "select":
                        return c("option:selected", b).length;
                    case "input":
                        if (this.checkable(b))return this.findByName(b.name).filter(":checked").length
                }
                return a.length
            }, depend: function (a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : true
            }, dependTypes: {
                "boolean": function (a) {
                    return a
                }, string: function (a, b) {
                    return !!c(a, b.form).length
                }, "function": function (a, b) {
                    return a(b)
                }
            }, optional: function (a) {
                return !c.validator.methods.required.call(this,
                        c.trim(a.value), a) && "dependency-mismatch"
            }, startRequest: function (a) {
                if (!this.pending[a.name]) {
                    this.pendingRequest++;
                    this.pending[a.name] = true
                }
            }, stopRequest: function (a, b) {
                this.pendingRequest--;
                if (this.pendingRequest < 0)this.pendingRequest = 0;
                delete this.pending[a.name];
                if (b && this.pendingRequest == 0 && this.formSubmitted && this.form()) {
                    c(this.currentForm).submit();
                    this.formSubmitted = false
                } else if (!b && this.pendingRequest == 0 && this.formSubmitted) {
                    c(this.currentForm).triggerHandler("invalid-form", [this]);
                    this.formSubmitted =
                        false
                }
            }, previousValue: function (a) {
                return c.data(a, "previousValue") || c.data(a, "previousValue", {
                        old: null,
                        valid: true,
                        message: this.defaultMessage(a, "remote")
                    })
            }
        },
        classRuleSettings: {
            required: {required: true},
            email: {email: true},
            url: {url: true},
            date: {date: true},
            dateISO: {dateISO: true},
            dateDE: {dateDE: true},
            number: {number: true},
            numberDE: {numberDE: true},
            digits: {digits: true},
            creditcard: {creditcard: true}
        },
        addClassRules: function (a, b) {
            a.constructor == String ? this.classRuleSettings[a] = b : c.extend(this.classRuleSettings,
                a)
        },
        classRules: function (a) {
            var b = {};
            (a = c(a).attr("class")) && c.each(a.split(" "), function () {
                this in c.validator.classRuleSettings && c.extend(b, c.validator.classRuleSettings[this])
            });
            return b
        },
        attributeRules: function (a) {
            var b = {};
            a = c(a);
            for (var d in c.validator.methods) {
                var e;
                if (e = d === "required" && typeof c.fn.prop === "function" ? a.prop(d) : a.attr(d))b[d] = e; else if (a[0].getAttribute("type") === d)b[d] = true
            }
            b.maxlength && /-1|2147483647|524288/.test(b.maxlength) && delete b.maxlength;
            return b
        },
        metadataRules: function (a) {
            if (!c.metadata)return {};
            var b = c.data(a.form, "validator").settings.meta;
            return b ? c(a).metadata()[b] : c(a).metadata()
        },
        staticRules: function (a) {
            var b = {}, d = c.data(a.form, "validator");
            if (d.settings.rules)b = c.validator.normalizeRule(d.settings.rules[a.name]) || {};
            return b
        },
        normalizeRules: function (a, b) {
            c.each(a, function (d, e) {
                if (e === false)delete a[d]; else if (e.param || e.depends) {
                    var f = true;
                    switch (typeof e.depends) {
                        case "string":
                            f = !!c(e.depends, b.form).length;
                            break;
                        case "function":
                            f = e.depends.call(b, b)
                    }
                    if (f)a[d] = e.param !== undefined ?
                        e.param : true; else delete a[d]
                }
            });
            c.each(a, function (d, e) {
                a[d] = c.isFunction(e) ? e(b) : e
            });
            c.each(["minlength", "maxlength", "min", "max"], function () {
                if (a[this])a[this] = Number(a[this])
            });
            c.each(["rangelength", "range"], function () {
                if (a[this])a[this] = [Number(a[this][0]), Number(a[this][1])]
            });
            if (c.validator.autoCreateRanges) {
                if (a.min && a.max) {
                    a.range = [a.min, a.max];
                    delete a.min;
                    delete a.max
                }
                if (a.minlength && a.maxlength) {
                    a.rangelength = [a.minlength, a.maxlength];
                    delete a.minlength;
                    delete a.maxlength
                }
            }
            a.messages && delete a.messages;
            return a
        },
        normalizeRule: function (a) {
            if (typeof a == "string") {
                var b = {};
                c.each(a.split(/\s/), function () {
                    b[this] = true
                });
                a = b
            }
            return a
        },
        addMethod: function (a, b, d) {
            c.validator.methods[a] = b;
            c.validator.messages[a] = d != undefined ? d : c.validator.messages[a];
            b.length < 3 && c.validator.addClassRules(a, c.validator.normalizeRule(a))
        },
        methods: {
            required: function (a, b, d) {
                if (!this.depend(d, b))return "dependency-mismatch";
                switch (b.nodeName.toLowerCase()) {
                    case "select":
                        return (a = c(b).val()) && a.length > 0;
                    case "input":
                        if (this.checkable(b))return this.getLength(a,
                                b) > 0;
                    default:
                        return c.trim(a).length > 0
                }
            }, remote: function (a, b, d) {
                if (this.optional(b))return "dependency-mismatch";
                var e = this.previousValue(b);
                this.settings.messages[b.name] || (this.settings.messages[b.name] = {});
                e.originalMessage = this.settings.messages[b.name].remote;
                this.settings.messages[b.name].remote = e.message;
                d = typeof d == "string" && {url: d} || d;
                if (this.pending[b.name])return "pending";
                if (e.old === a)return e.valid;
                e.old = a;
                var f = this;
                this.startRequest(b);
                var g = {};
                g[b.name] = a;
                c.ajax(c.extend(true, {
                    url: d,
                    mode: "abort", port: "validate" + b.name, dataType: "json", data: g, success: function (h) {
                        f.settings.messages[b.name].remote = e.originalMessage;
                        var j = h === true;
                        if (j) {
                            var i = f.formSubmitted;
                            f.prepareElement(b);
                            f.formSubmitted = i;
                            f.successList.push(b);
                            f.showErrors()
                        } else {
                            i = {};
                            h = h || f.defaultMessage(b, "remote");
                            i[b.name] = e.message = c.isFunction(h) ? h(a) : h;
                            f.showErrors(i)
                        }
                        e.valid = j;
                        f.stopRequest(b, j)
                    }
                }, d));
                return "pending"
            }, minlength: function (a, b, d) {
                return this.optional(b) || this.getLength(c.trim(a), b) >= d
            }, maxlength: function (a,
                                    b, d) {
                return this.optional(b) || this.getLength(c.trim(a), b) <= d
            }, rangelength: function (a, b, d) {
                a = this.getLength(c.trim(a), b);
                return this.optional(b) || a >= d[0] && a <= d[1]
            }, min: function (a, b, d) {
                return this.optional(b) || a >= d
            }, max: function (a, b, d) {
                return this.optional(b) || a <= d
            }, range: function (a, b, d) {
                return this.optional(b) || a >= d[0] && a <= d[1]
            }, email: function (a, b) {
                return this.optional(b) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a.trim())
            },
            url: function (a, b) {
                return this.optional(b) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
            },
            date: function (a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a))
            }, dateISO: function (a, b) {
                return this.optional(b) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a)
            }, number: function (a, b) {
                return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a)
            }, digits: function (a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            }, creditcard: function (a, b) {
                if (this.optional(b))return "dependency-mismatch";
                if (/[^0-9 -]+/.test(a))return false;
                var d = 0, e = 0, f = false;
                a = a.replace(/\D/g, "");
                for (var g = a.length - 1; g >=
                0; g--) {
                    e = a.charAt(g);
                    e = parseInt(e, 10);
                    if (f)if ((e *= 2) > 9)e -= 9;
                    d += e;
                    f = !f
                }
                return d % 10 == 0
            }, accept: function (a, b, d) {
                d = typeof d == "string" ? d.replace(/,/g, "|") : "png|jpe?g|gif";
                return this.optional(b) || a.match(RegExp(".(" + d + ")$", "i"))
            }, equalTo: function (a, b, d) {
                d = c(d).unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                    c(b).valid()
                });
                return a == d.val()
            }
        }
    });
    c.format = c.validator.format
})(jQuery);
(function (c) {
    var a = {};
    if (c.ajaxPrefilter)c.ajaxPrefilter(function (d, e, f) {
        e = d.port;
        if (d.mode == "abort") {
            a[e] && a[e].abort();
            a[e] = f
        }
    }); else {
        var b = c.ajax;
        c.ajax = function (d) {
            var e = ("port"in d ? d : c.ajaxSettings).port;
            if (("mode"in d ? d : c.ajaxSettings).mode == "abort") {
                a[e] && a[e].abort();
                return a[e] = b.apply(this, arguments)
            }
            return b.apply(this, arguments)
        }
    }
})(jQuery);
(function (c) {
    !jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener && c.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        function d(e) {
            e = c.event.fix(e);
            e.type = b;
            return c.event.handle.call(this, e)
        }

        c.event.special[b] = {
            setup: function () {
                this.addEventListener(a, d, true)
            }, teardown: function () {
                this.removeEventListener(a, d, true)
            }, handler: function (e) {
                arguments[0] = c.event.fix(e);
                arguments[0].type = b;
                return c.event.handle.apply(this, arguments)
            }
        }
    });
    c.extend(c.fn, {
        validateDelegate: function (a,
                                    b, d) {
            return this.bind(b, function (e) {
                var f = c(e.target);
                if (f.is(a))return d.apply(f, arguments)
            })
        }
    })
})(jQuery);
/* Corporate social responsibility (csr) functions begin */

function set_price(skuid, quantity){
    if(!quantity){
        quantity = 1;
    }
    sale_price = parseFloat($("#"+skuid+"_price").html()) * quantity;
    member_contribution = round_value((parseFloat($("#member_contribution").val()) + sale_price));
    bb_contribution = round_value(((parseFloat($("#bb_csr_contribution").val()) * member_contribution)/100));
    final_contribution = round_value((member_contribution - bb_contribution));
    set_contribution(final_contribution, bb_contribution, member_contribution);
}

function update_price(skuid, quantity){
    if(!quantity){
        quantity = 1;
    }
    sale_price = parseFloat($("#"+skuid+"_price").html()) * quantity;
    member_contribution = round_value((parseFloat($("#member_contribution").val()) - sale_price));
    bb_contribution = round_value(((parseFloat($("#bb_csr_contribution").val()) * member_contribution)/100));
    final_contribution = round_value((member_contribution - bb_contribution));
    set_contribution(final_contribution, bb_contribution, member_contribution);
}

function set_contribution(final_contribution, bb_contribution, member_contribution){
    final_contribution = round_value(final_contribution);
    bb_contribution = round_value(bb_contribution);
    member_contribution = round_value(member_contribution);
    $("#final_contribution").val(final_contribution);
    $("#member_contribution").val(member_contribution);
    $("#running_total").html("Rs. "+final_contribution);
    $("#total_member").html("Rs. "+ member_contribution);
    $("#total_bb").html("Rs. "+ bb_contribution);
    set_wallet_contribution();
}

function set_selected_bundle(bundle_id){
    reset_csr_locals();
    $("#uiv2-checkout-delivery-address ul li").removeClass("uiv2-selected");
    $(".csr-bundle-change-qty").val('1');
    $("#"+bundle_id+"_bundleQty").addClass("uiv2-selected");
    $(".bundle-select").css('visibility','hidden');
    $("#"+bundle_id+"_selected").css("visibility", "visible");

    $("#campaignProducts").hide();
    $(".bundleContainer").hide();

    $("#"+bundle_id+"_bundleContainer").show();
    set_selected_bundle_price(bundle_id);

    // reset the master product set quantities
    $(".qty-change-csr").val("0");
    $(".item-total-price").html("0.0");

}

function show_customize_bundle(){
    $("#uiv2-checkout-delivery-address ul li").removeClass("uiv2-selected");
    $(".csr-bundle-change-qty").val('1');
    $(".bundle-select").css('visibility','hidden');
    $("#campaignProducts").show();
    $(".bundleContainer").hide();

    //reset totals
    window.scrollTo(0,$(".uiv2-griditems-sc").offset().top);
    set_contribution(0.0, 0.0, 0.0);
    reset_csr_locals();
}

function set_selected_bundle_price(bundle_id, bundle_quantity){
    final_contribution = 0.0;
    member_contribution = 0.0;
    bb_contribution = parseFloat($("#bb_csr_contribution").val());

    if(!bundle_quantity){
        bundle_quantity = 1;
    }
    $("#"+bundle_id+"_bundleContainer ol.uiv2-griditems-details-sc").each(function(){
        sale_price = parseFloat($(this).find("span.unit_price").html());
        quantity = parseFloat($(this).find("span.item_quantity").html());
        member_contribution = member_contribution + (parseFloat(sale_price * quantity) * bundle_quantity);
    });

    bb_contribution = (bb_contribution * member_contribution)/100;
    final_contribution = member_contribution - bb_contribution;
    set_contribution(final_contribution, bb_contribution, member_contribution);
}

function round_value(amount){
    return parseFloat(amount).toFixed(2);
}

function init_change_csr_qty(){
    $('.icon-increase-qty-csr').click(function() {
        skuid = $(this).prev().attr("id").split("_")[0];
        new_qty = parseInt($(this).prev().val()) + 1
        $(this).prev().val(new_qty);
        $("#"+skuid+"_finalQty").val(new_qty)

        set_price(skuid);

        sp = parseFloat($("#"+skuid+"_price").html());
        total = sp * new_qty;
        $("#"+skuid+"_totalPrice").html(round_value(total));
    });

    $('.icon-decrease-qty-csr').click(function() {
        if(parseInt($(this).next().val()) > 0){
            skuid = $(this).next().attr("id").split("_")[0];
            update_price(skuid, 1);
            new_qty = parseInt($(this).next().val()) - 1
            $(this).next().val(new_qty);
            $("#"+skuid+"_finalQty").val(new_qty);

            sp = parseFloat($("#"+skuid+"_price").html());
            total = sp * new_qty;
            $("#"+skuid+"_totalPrice").html(round_value(total));
        }
        if(parseInt($(this).next().val()) == 0){
            $("#"+skuid+"_finalQty").val('0');
        }
    });

    $(".qty-change-csr").focusout(function(){
        newQty = $(this).val();
        if(parseInt(newQty) != 0){
            if(!parseInt(newQty)){
                show_alert("Please enter a number");
                return;
            }
        }
        skuid = $(this).attr("id").split("_")[0];
        prevQty = $("#"+skuid+"_finalQty").val();
        update_price(skuid, prevQty);

        set_price(skuid, newQty);
        $("#"+skuid+"_finalQty").val(newQty);
        product_total_price = parseFloat($("#"+skuid+"_price").html()) * newQty;
        product_total_price = round_value(product_total_price);
        $("#"+skuid+"_totalPrice").html(product_total_price);
    });
}

function init_change_bundle_qty(){
    $('.icon-increase-qty-csr-bundle').click(function() {
        bundle_id = $(this).prev().attr("id").split("_")[0];
        new_qty = parseInt($(this).prev().val()) + 1
        $(this).prev().val(new_qty);
        add_bundle_selected_class(bundle_id);
        set_selected_bundle_price(bundle_id, new_qty)
    });

    $('.icon-decrease-qty-csr-bundle').click(function() {
        if(parseInt($(this).next().val()) > 1){
            bundle_id = $(this).next().attr("id").split("_")[0];
            new_qty = parseInt($(this).next().val()) - 1;
            $(this).next().val(new_qty);
            set_selected_bundle_price(bundle_id, new_qty);
            add_bundle_selected_class(bundle_id);
        }
        if(parseInt($(this).next().val()) == 1){
            set_selected_bundle_price(bundle_id, 1);
        }
    });

    $(".csr-bundle-change-qty").focusout(function(){
        newQty = $(this).val();
        if(!parseInt(newQty)){
            show_alert("Please enter a number greater than 0");
            return;
        }
        bundle_id = $(this).attr("id").split("_")[0];
        add_bundle_selected_class(bundle_id);
        set_selected_bundle_price(bundle_id, newQty);
    });
}

function get_selected_bundle(){
    selected_set = '';
    bundle_set = '';
    $(".campaignBundleSet").each(function(){
        if($(this).hasClass("uiv2-selected")){
            selected_set = $(this).attr("id").split("_")[0];
            bundle_no = $("#"+selected_set+"_totalBundleQty").val();
            bundle_set = selected_set + "_" + bundle_no;
        }
    });
    return bundle_set;
}

function get_selected_products(){
    prod_arr = [];
    $(".qty-change-csr").each(function(){
        skuid = $(this).attr("id").split('_')[0];
        sku_qty = $(this).val();
        var csr_sku = skuid + "_" + sku_qty;
        if(parseInt(sku_qty) > 0){
            prod_arr.push(csr_sku);
        }
    });
    return prod_arr;
}

function load_csr_locals(){
    if(typeof(Storage) !== "undefined"){
        products = localStorage.prod_arr;
        bundle_set = localStorage.bundle_set;
        $("#member_contribution").val('0');
        $("#final_contribution").val('0');
        $("#final-product-qty").val('0');
        if(bundle_set){
            set_id = bundle_set.split("_")[0];
            bundle_qty = bundle_set.split("_")[1];
            set_selected_bundle(set_id);
            $("#"+set_id+"_bundleQty").addClass('uiv2-selected');
            $("#"+set_id+"_totalBundleQty").val(bundle_qty);
            set_selected_bundle_price(set_id, bundle_qty);
        }
        if(products){
            if(products.length > 0){
                products = products.split(",");
                for(i=0; i< products.length; i++){
                   prod = products[i];
                   skuid = prod.split('_')[0];
                   qty = prod.split('_')[1];
                   $("#"+skuid+"_finalQty").val(qty);
                   $("#"+ skuid +"_qty").val(qty);
                   unit_price = parseFloat($("#"+ skuid +"_price").html()) * qty;
                   total_price = round_value(unit_price);
                   $("#"+ skuid +"_totalPrice").html(total_price);
                   set_price(skuid, qty);
                }
            }
        }
    }
    $("[name='payment_type']").each(function(){
        if($(this).val() == localStorage.payment_type){
            $(this).prop("checked",true);
        }
    });
}

function set_csr_locals() {
    prod_arr = get_selected_products();
    bundle_set = get_selected_bundle();
    if(typeof(Storage) !== "undefined") {
       localStorage.prod_arr = prod_arr;
       localStorage.bundle_set = bundle_set;
       localStorage.payment_type = $('input[name="payment_type"]:checked').val();
    }
}

function reset_csr_locals(){
    if(typeof(Storage) !== "undefined") {
       localStorage.prod_arr = [];
       localStorage.bundle_set = '';
        $("[name='payment_type']").each(function(){
            if($(this).val() == localStorage.payment_type){
                $(this).prop("checked",false);
            }
        });
        $("#member_contribution").val('0');
        $("#final_contribution").val('0');
    }
}

function login_member_for_csr(){
    set_csr_locals();
    location.href = "/auth/login/?next="+window.location.pathname;
}

function register_member(){
    first_name = $.trim($("#id_first_name").val());
    first_name = first_name.replace(/<\/?[^>]+(>|$)/g, "")
    last_name = $.trim($("#id_last_name").val());
    last_name = last_name.replace(/<\/?[^>]+(>|$)/g, "")
    email = $.trim($("#id_email").val());
    email = email.replace(/<\/?[^>]+(>|$)/g, "")
    campaign_id = $("#id_campaign").val();
    if(!campaign_id){
        return;
    }
    if(first_name && last_name && email){
        set_csr_locals();
        $('#shoplist-mask').show();
        show_loader();
        $.ajax({
            url:"/bb/csr/register-member/",
            type:'post',
            dataType: "json",
            data: { 'first_name': first_name, 'last_name': last_name, 'campaign_id':campaign_id, 'email': email},
            success: function(data) {
                if(data['success']){
                    location.href = data['campaign_url'];
                }
                else{
                    error = data['error'];
                    show_alert(error);
                    return;
                }
                hide_loader();
                $('#shoplist-mask').hide();
            }
        });
    }
    else{
        if(!first_name){
            $("#first_name_error").html("Please enter your first name");
        }
        if(!last_name){
            $("#last_name_error").html("Please enter your last name");
        }
        if(!email){
            $("#email_error").html("Please enter an email");
        }
    }
    hide_loader();
    $('#shoplist-mask').hide();
}

function add_bundle_selected_class(bundle_id){
    if(!$("#"+bundle_id+"_bundleQty").hasClass("uiv2-selected")){
        $("#uiv2-checkout-delivery-address ul li").removeClass("uiv2-selected");
        $("#"+bundle_id+"_bundleQty").addClass("uiv2-selected");
        $(".bundle-select").css('visibility','hidden');
        $("#"+bundle_id+"_selected").css("visibility", "visible");

        $("#campaignProducts").hide();
        $(".bundleContainer").hide();

        $("#"+bundle_id+"_bundleContainer").show();
        set_selected_bundle_price(bundle_id);

        // reset the master product set quantities
        $(".qty-change-csr").val("0");
        $(".item-total-price").html("0.0");

        $(".csr-bundle-change-qty").each(function(){
            if(parseInt(bundle_id) != $(this).attr('id').split("_")[0]){
                $(this).val('1');
            }
        });
        reset_csr_locals();
    }
}

function  set_wallet_contribution(){
    csr_amount = $("#csr_amount").html();
    if(csr_amount){
        final_contribution = $("#final_contribution").val();
        wallet_amount = parseFloat($("#total_wallet_amount").val());
        if(wallet_amount > final_contribution){
            $("#csr_amount").html(round_value(final_contribution));
            new_wallet_amount = wallet_amount - final_contribution;
            new_wallet_amount = round_value(new_wallet_amount);
            csr_remaining_amount = 0;
            $("#wallet_amount").html(new_wallet_amount);
            $("#uiv2-pay-remaining-amount-options").hide();
        }
        else{
            $("#csr_amount").html(round_value(wallet_amount));
            csr_remaining_amount = final_contribution - wallet_amount;
            $("#uiv2-pay-remaining-amount-options").show();
            $("#wallet_amount").html("0");
        }
        $("#csr_remaining_amount").html(round_value(csr_remaining_amount));
    }
}

/* Corporate social responsibility (csr) functions end */

function AppDownloadWeb(context) {
    this.number = $("#numberForSms");
    this.action = location.pathname;
    this.context = context;
    this.errorText = $("#notification_text");
    this.success_text = $("#success_text");

    var appDownload = this;

    this.sendRequest = function (url, type, data) {
        data['csrfmiddlewaretoken'] = csrf;
        $.ajax({
            url: url,
            type: type,
            data: data
        }).done(function (response) {
            appDownload.success_text.show();
            $(".inputDiv").css("margin-bottom", "10px");
        }).fail(function (response, message, error) {
            appDownload.errorText.show();
            appDownload.number.removeClass('send_sms_focus').addClass('send_sms_error');
            $(".inputDiv").css("margin-bottom", "10px");
        })
    };
    this.sendDownloadSms = function () {
        var data = {'action': this.action, 'number': this.number.val(), 'context': this.context};
        var mo_number = this.number.val()
        if (mo_number.length != 10){
            appDownload.success_text.hide();
            appDownload.errorText.show();
            return false;
        }
        else{
            this.sendRequest('/member/send_sms/', 'post', data);
            appDownload.errorText.hide();
            appDownload.success_text.hide();
            appDownload.number.removeClass('send_sms_error');
            appDownload.number.addClass('send_sms_focus');
        }
    };


}

function logAnalytics(action, label) {
    if (ganalytics) {
        ga('send', 'event', 'app_promotion', action, label, '1')
    }
    else {
        console.log('app_promotion,' + action + ' ' + label);
    }
}

function fb_login(page_type, referralCode){
    _gaq.push(['_trackEvent','Login', 'Login Action', 'Facebook Login' ]);
    var href = '/auth/fb/login/?sl=' + page_type;
    if (referralCode && typeof referralCode == 'string') {
        href += "&ref_code=" + encodeURIComponent(referralCode);
    }
    location.href = href;
}

function gplus_login(page_type, referralCode){
    _gaq.push(['_trackEvent','Login', 'Login Action', 'Google Login' ]);
    var href ="/auth/gplus/login/?sl=" + page_type;
    if (referralCode && typeof referralCode == 'string') {
        href += "&ref_code=" + encodeURIComponent(referralCode);
    }
    location.href = href;
}

function register_user(){
    _gaq.push(['_trackEvent','Login', 'Login Action', 'Register']);
    location.href = '/register/';
}

function reset_pwd(){
    _gaq.push(['_trackEvent','Login', 'Login Action', 'Reset Password']);
    location.href="/auth/reset-password/";
}

function cancel_register(){
    _gaq.push(['_trackEvent','Login', 'Login Action', 'Register']);
    location.href = '/';
}

function show_eligible_vouchers_popup(){
    uiv2_show_popup('uiv2-eligible-vouchers');
    $(".vouchers-eligible").jScrollPane();
}

//var state_changed = true;
var ShopFromPreviousOrder = {
    getSlotCloseTime: function(order_id, content){
       ShopFromPreviousOrder.sendRequest('/order/slot_close_time/', 'post', {'order_id': order_id}, content);
    },
    sendRequest: function (url, type, data, content) {
        data['csrfmiddlewaretoken'] = csrf;
        $.ajax({
            url: url,
            type: type,
            data: data
        }).done(function (response) {
            ShopFromPreviousOrder.updateUi(response);
            uiv2_show_popup(content);
        }).fail(function (error) {
            show_alert("Something went wrong. Please try again");
        })
    },
    updateUi : function(data){
        if(data['is_valid']) {
            $("#shop-from-previous-order").html(data['order_msg']);
        }
    },
    showPopUp:function(content, order_id){
        if (order_id) {
            //if ($.trim($('#shop-from-previous-order').html()).length == 0) {
                ShopFromPreviousOrder.getSlotCloseTime(order_id, content);
            //}
        }
        else {
            uiv2_show_popup(content);
        }
        window.scrollTo(0, 40);
    }
}

function show_voucher_tnc_note(voucher_code){
    $('#vouchers-tnc-'+voucher_code).toggle();
    $('.vouchers-eligible').jScrollPane({}).data('jsp').destroy();
    $(".vouchers-eligible").jScrollPane();

}


var ExpressOrderController = {
    sendRequest: function (url, type, data) {
        data['csrfmiddlewaretoken'] = csrf;
        $.ajax({
            url: url,
            type: type,
            data: data
        }).done(function (response) {
            ExpressOrderController.responseHandle(response)
        })
            .fail(function (error) {
                show_alert("Something went wrong please try again");
            })
    },
    expressEligible: function (cart_update) {
        //ExpressOrderController.sendRequest('/co/express_order/', 'post', {'cart_update':cart_update})
    },
    freeItemCheck: function () {
            //ExpressOrderController.sendRequest('/co/free_item_check/', 'post', {})
    },
    responseHandle: function (response) {
        if (response['ga_action']) {
            label = response['label']
            ExpressOrderController.logAnalytics(response['ga_category'], response['ga_action'], response['ga_label'], 1)
        }
        mixed = response['is_mixed']
        if (response.hasOwnProperty('error_code')) {
            var expressOrderUi = new ExpressOrderUi();
            var errorCodes = response.error_code;
            if (!(response.express)) {
                var errorMessages = response.message;
                expressOrderUi.hideExpress(errorCodes, errorMessages,response['flatpage'])
            }
            else {
               expressOrderUi.expressShow(response['address'], response['delivery_charge'])
            }
        }
    },
    logAnalytics: function(category, action, label, value){
        if (typeof(value) == 'undefined'){
            value = 1
        }
        if(ganalytics) {
            ga('send', 'event', category, action, label, value);
        }else{
            console.log(category, action, label, value);
        }
    }
}

function ExpressOrderUi() {
    this.$normalCheckout = $("#checkout_normal_button");
    this.$expressCheckout = $("#checkout_express_button");
    this.$expressErrorMessage = $("#express_info");
    this.$expressToggle = $("#express_toggle");
    this.$expressToggleLabel = $("#express_toggle_label");
    this.$expressError = $("#express_error_note");
    this.$addressNote = $("#address_note");
    this.$expressAddress = $("#address");
    this.$deliveryCharge = $("#final_delivery_charge");
    this.$deliveryNote = $("#delivery_note");
    this.$exdeliveryNote = $("#note");
    this.$normalDeliveyNote = $("#for_normal");
    this.$amtdeliveryCharge = $('#exd_delivery_charge');
    var expressOrderUi = this;
    this.displayError = function (message, page) {
        this.$expressError.show();
        this.$exdeliveryNote.text('Why am I not able to see Express Delivery option?');
        this.$expressErrorMessage.html('<p id="express_info" class="Exd_limit">' + message + '<a href=' + page + ' target="_blank"> Know more</a></p>');
        this.$expressErrorMessage.show();
    };
    this.hideError = function () {
        this.$expressError.hide();
        this.$expressErrorMessage.hide();
    };

    this.toggleExpress = function (flag, delivery_charge) {
        var classFlag = Boolean(flag);
        if (classFlag) {
            this.$normalCheckout.hide();
            this.$expressCheckout.show();
            this.$deliveryCharge.show();
            this.$expressError.show();
        }
        else {
            this.$normalCheckout.show();
            this.$deliveryCharge.hide();
            this.$expressError.hide();
            this.$expressCheckout.hide();
        }
        if (!delivery_charge) {
            this.$deliveryCharge.hide();
            this.$expressError.hide();
        }
    };
    this.expressShow = function (address, delivery_charge) {
        this.$addressNote.show();
        this.$expressAddress.text(address).show();
        this.$expressToggle.prop('checked', false);
        this.$expressToggleLabel.show();
        this.$expressToggle.show();
        this.$normalCheckout.hide();
        this.hideError();
        this.$expressCheckout.show();
        this.$deliveryCharge.show();
        this.$expressToggle.change(function () {
            expressOrderUi.toggleExpress(+!($(this).prop('checked')), delivery_charge);
        });
        if (delivery_charge) {
            this.$deliveryCharge.show();
            this.$expressError.show();
            this.$exdeliveryNote.text('# Express Delivery Charges ' + this.$amtdeliveryCharge.text() + ' per order').show();
        }else{
            this.$deliveryCharge.hide()
        }
    };
    this.hideExpress = function (errorCodes, errorMessages, page) {
        this.$expressToggleLabel.hide();
        this.$expressToggle.hide();
        this.$expressError.hide();
        if(!errorCodes){
            this.$normalDeliveyNote.hide();
        }
        this.$deliveryCharge.hide();
        this.toggleExpress(0);
        this.$expressError.hide();
        this.$addressNote.hide();
        $.each(errorCodes, function (index, value) {
            expressOrderUi.displayError(errorMessages[index], page)
        });
    }
}

function submit_register_form(){
    $('#id_csr_register_form').submit();
    set_csr_locals();
}
/*** -------------------BigBasket Menu Update -------------------- ***/


/*** ---------------------Bigbasket menu end ---------------------------- ***/
$(window).resize(function(){
    set_ftv_popup_height();
});

function set_ftv_popup_height(){
    var $window = $(window);
    var windowWidth = $window.width();
    var windowHeight = $window.height();
    if (windowWidth >= 1024) {
    var findHeight=$(".uiv2-landing-container").innerHeight();
    var popHeight = $(".uiv2-land-content-container").innerHeight();
    var finalHeight = (findHeight - popHeight) / 2;
    $(".uiv2-land-content-container").css("top",finalHeight);
    }
    else
    {
    $(".uiv2-land-content-container").css("top","auto");
    }
}

function save_other_city_ftv_info(){
    var oc_email = $('#oc-email').val();
    var oc_location = $('#oc-location').val();
    var oc_message = $('#oc-message').val();
    var valid = true;

    if( !validate_email(oc_email) ){
        //$('#oc-email-error').html('Please enter a valid email address');
        valid = false;
    }

    if( oc_location == "" || oc_location == null || oc_location == undefined ){
        //$('#oc-location-error').html('City is required');
        valid = false;
    }

    if( valid ) {
        $.ajax({
            url: make_req_url('/member/other-city-info/'),
            method: 'post',
            data: {'email': oc_email, 'location': oc_location, 'message': oc_message, 'name': $('#oc-name').val()},
            success: function(){
                set_city(1);
                $('.uiv2-landing-wrapper, #shoplist-mask').fadeOut();
            }
        })
    }
    else{
        set_city(1);
    }
}

function is_first_time(){
    return ( $.cookie('_bb_vid') == undefined && $('#id_show_visitor_popup').val() == "1")
}

function is_first_time_visitor(){
    return ( $.cookie('_bb_vid') == undefined && $.cookie('_ft_vid') == undefined )
}

function init_ftv_popup(){
    set_ftv_popup_height();

    $("#uiv2-ftv-button").on("click",function(){
        city_id = $("#ftv-city-selectboxdiv option:selected").val();
        if (city_id=="Others") {
            $("#uiv2-input-field").hide();
            $(".uiv2-explore-section").show();
        }
        else
        {
            set_city(city_id);
        }
    });

    $("#ftv-city-popup select").change(function () {
	   var str1 = "";
	   str1 = $(this).find(":selected").text();
	   $(".out").text(str1);
	}).trigger('change');

}

function
show_ftv_popup(city_id){
   //$('.uiv2-landing-outer, #shoplist-mask').fadeIn();
    //init_autoplaces_complete();
    //$('#ftv-city-selectboxdiv').val(city_id).trigger('change');
    //init_ftv_popup()
}

/*------------------ for sticky header and topbutton-------------*/

$(document).ready(function () {
//Click event for fixed header and top button

    if(loggedInUser == true){
        $.removeCookie('_bb_ftvid', {path:'/', domain: (window.location.host).replace('www', '')});
    }


    $(window).scroll(function () {
        var sticky = $('.uiv2-header-section-fixed-container'),
            scroll = $(window).scrollTop();

        if (scroll >= 170) {
            $("#facetsContainer").trigger("sticky_kit:recalc_and_tick");
            sticky.slideDown();
            $('.scrollToTopButton').fadeIn();
            sticky.addClass('fixed');
            $('#auto_search .uiv2-search').appendTo($('#sticky_search'));
            $('.uiv2-search-dropdown-block').hide()
        }
        else{
            sticky.slideUp();
            $('.scrollToTopButton').fadeOut();
            if(location.pathname=="/"){
                $('#basket_menu').show();
            }
            $('.uiv2-search-dropdown-block').hide()
            $('#sticky_search .uiv2-search').appendTo($('#auto_search'));
        }
    });
    //Click event to scroll to top
    $('.scrollToTopButton').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

});
/*--------------------------- js for sticky side bar -------------*/

(function () {
    var $, win;

    $ = this.jQuery || window.jQuery;

    win = $(window);

    $.fn.stick_in_parent = function (opts) {
        var elm, enable_bottoming, inner_scrolling, manual_spacer, offset_top, parent_selector, recalc_every, sticky_class, _fn, _i, _len;
        if (opts == null) {
            opts = {};
        }
        sticky_class = opts.sticky_class, inner_scrolling = opts.inner_scrolling, recalc_every = opts.recalc_every, parent_selector = opts.parent, offset_top = opts.offset_top, manual_spacer = opts.spacer, enable_bottoming = opts.bottoming;
        if (offset_top == null) {
            offset_top = 60;
        }
        if (parent_selector == null) {
            parent_selector = void 0;
        }
        if (inner_scrolling == null) {
            inner_scrolling = true;
        }
        if (sticky_class == null) {
            sticky_class = "is_stuck";
        }
        if (enable_bottoming == null) {
            enable_bottoming = true;
        }
        _fn = function (elm, padding_bottom, parent_top, parent_height, top, height, el_float, detached) {
            var bottomed, detach, fixed, last_pos, offset, parent, recalc, recalc_and_tick, recalc_counter, spacer, tick;
            if (elm.data("sticky_kit")) {
                return;
            }
            elm.data("sticky_kit", true);
            parent = elm.parent();
            if (parent_selector != null) {
                parent = parent.closest(parent_selector);
            }
            if (!parent.length) {
                throw "failed to find stick parent";
            }
            fixed = false;
            bottomed = false;
            spacer = manual_spacer != null ? manual_spacer && elm.closest(manual_spacer) : $("<div />");
            if (spacer) {
                spacer.css('position', elm.css('position'));
            }
            recalc = function () {
                var border_top, padding_top, restore;
                if (detached) {
                    return;
                }
                border_top = parseInt(parent.css("border-top-width"), 10);
                padding_top = parseInt(parent.css("padding-top"), 10);
                padding_bottom = parseInt(parent.css("padding-bottom"), 10);
                parent_top = parent.offset().top + border_top + padding_top;
                parent_height = parent.height();
                if (fixed) {
                    fixed = false;
                    bottomed = false;
                    if (manual_spacer == null) {
                        elm.insertAfter(spacer);
                        spacer.detach();
                    }
                    elm.css({
                        position: "",
                        top: "",
                        width: "",
                        bottom: ""
                    }).removeClass(sticky_class);
                    restore = true;
                }
                top = elm.offset().top - parseInt(elm.css("margin-top"), 10) - offset_top;
                height = elm.outerHeight(true);
                el_float = elm.css("float");
                if (spacer) {
                    spacer.css({
                        width: elm.outerWidth(true),
                        height: height,
                        display: elm.css("display"),
                        "vertical-align": elm.css("vertical-align"),
                        "float": el_float
                    });
                }
                if (restore) {
                    return tick();
                }
            };
            recalc();
            if (height === parent_height) {
                return;
            }
            last_pos = void 0;
            offset = offset_top;
            recalc_counter = recalc_every;
            tick = function () {
                var css, delta, scroll, will_bottom, win_height;
                if (detached) {
                    return;
                }
                if (recalc_counter != null) {
                    recalc_counter -= 1;
                    if (recalc_counter <= 0) {
                        recalc_counter = recalc_every;
                        recalc();
                    }
                }
                scroll = win.scrollTop();
                if (last_pos != null) {
                    delta = scroll - last_pos;
                }
                last_pos = scroll;
                if (fixed) {
                    if (enable_bottoming) {
                        will_bottom = scroll + height + offset > parent_height + parent_top;
                        if (bottomed && !will_bottom) {
                            bottomed = false;
                            elm.css({
                                position: "fixed",
                                bottom: "",
                                top: offset
                            }).trigger("sticky_kit:unbottom");
                        }
                    }
                    if (scroll < top) {
                        fixed = false;
                        offset = offset_top;
                        if (manual_spacer == null) {
                            if (el_float === "left" || el_float === "right") {
                                elm.insertAfter(spacer);
                            }
                            spacer.detach();
                        }
                        css = {
                            position: "",
                            width: "",
                            top: ""
                        };
                        elm.css(css).removeClass(sticky_class).trigger("sticky_kit:unstick");
                    }
                    if (inner_scrolling) {
                        win_height = win.height();
                        if (height + offset_top > win_height) {
                            if (!bottomed) {
                                offset -= delta;
                                offset = Math.max(win_height - height, offset);
                                offset = Math.min(offset_top, offset);
                                if (fixed) {
                                    elm.css({
                                        top: offset + "px"
                                    });
                                }
                            }
                        }
                    }
                } else {
                    if (scroll > top) {
                        fixed = true;
                        css = {
                            position: "fixed",
                            top: offset
                        };
                        css.width = elm.css("box-sizing") === "border-box" ? elm.outerWidth() + "px" : elm.width() + "px";
                        elm.css(css).addClass(sticky_class);
                        if (manual_spacer == null) {
                            elm.after(spacer);
                            if (el_float === "left" || el_float === "right") {
                                spacer.append(elm);
                            }
                        }
                        elm.trigger("sticky_kit:stick");
                    }
                }
                if (fixed && enable_bottoming) {
                    if (will_bottom == null) {
                        will_bottom = scroll + height + offset > parent_height + parent_top;
                    }
                    if (!bottomed && will_bottom) {
                        bottomed = true;
                        if (parent.css("position") === "static") {
                            parent.css({
                                position: "relative"
                            });
                        }
                        return elm.css({
                            position: "absolute",
                            bottom: padding_bottom,
                            top: "auto"
                        }).trigger("sticky_kit:bottom");
                    }
                }
            };
            recalc_and_tick = function () {
                recalc();
                return tick();
            };
            detach = function () {
                detached = true;
                win.off("touchmove", tick);
                win.off("scroll", tick);
                win.off("resize", recalc_and_tick);
                $(document.body).off("sticky_kit:recalc", recalc_and_tick);
                elm.off("sticky_kit:detach", detach);
                elm.removeData("sticky_kit");
                elm.css({
                    position: "",
                    bottom: "",
                    top: "",
                    width: ""
                });
                parent.position("position", "");
                if (fixed) {
                    if (manual_spacer == null) {
                        if (el_float === "left" || el_float === "right") {
                            elm.insertAfter(spacer);
                        }
                        spacer.remove();
                    }
                    return elm.removeClass(sticky_class);
                }
            };
            win.on("touchmove", tick);
            win.on("scroll", tick);
            win.on("resize", recalc_and_tick);
            $(document.body).on("sticky_kit:recalc", recalc_and_tick);
            elm.on("sticky_kit:detach", detach);
            return setTimeout(tick, 0);
        };
        for (_i = 0, _len = this.length; _i < _len; _i++) {
            elm = this[_i];
            _fn($(elm));
        }
        return this;
    };

}).call(this);

function init_autocomplete_areas(area_id, zipcode_id){

    var contact_area =  $('#' + area_id);

    area_autocomplete = contact_area.autocomplete({
        source: function (request, response) {
            var matches = $.map(auto_complete_areas, function (tag) {
                if (tag.toUpperCase().indexOf(request.term.toUpperCase()) === 0) {
                    return tag;
                }
            });
            response(matches);
        }
    });

    contact_area.focusout(function () {
        var area = $('#' + area_id).val();
        if (area != "") {
            $.ajax({
                url: '/member/get-pincode/?area=' + area,
                type: 'get',
                dataType: 'json',
                success: function (data) {
                    $('#' + zipcode_id).val(data['pincode']);
                }
            });
        }
    });

}

function construct_url(url){
    var port = window.location.port;
    port = port ? ':' + port : '';
    var urlComponents = [ window.location.protocol, '//', window.location.hostname, port, url];
    var url = urlComponents.join('');
    return url;
}

/* begin area zipcode autocomplete */

function init_zipcode_autocomplete(area_id, zipcode_id, city_id){
    var zip_autocomplete;
    var zip = $('#' + zipcode_id);
    zip_autocomplete = zip.autocomplete({
        source: function (request, response){
            var term = $.trim(zip.val());
            if(term.length > 4){
                var matches = $.map(zipcodes[city_id], function (tag) {
                    if (tag.indexOf(request.term.toUpperCase()) === 0){
                        return tag;
                    }
                });
                response(matches);
            }
            else{
                var matches = $.map(zipcodes, function (tag) {
                    if (tag.indexOf(request.term.toUpperCase()) === 0){
                        return tag;
                    }
                });
                response(matches.slice(0,10));
            }
        }
    });
    zip.focusout(function () {
        var zipcode = zip.val();
        if (zipcode != "") {
           get_zipcode_areas(zipcode, zipcode_id, area_id, city_id);
        }
        else{
            // hide area menu, and reset area form value if zipcode field is empty.
            $("#area_options").hide();
            $("#" + area_id).show();
            $("#" + area_id).val('');
            // Hide other area field
            $("#other_area_row").empty().hide();
        }
    });
    zip.on('keyup', function(){
        // remove any area error msg on zipcode keyup
        $("#" + area_id).parent().parent().find('span.uiv2-err-text').html('');
        $("#area_options").show();
    });
    $("#"+area_id).focusin(function(){
        var zipcode = zip.val();
        if (zipcode != "") {
           get_zipcode_areas(zipcode, zipcode_id, area_id, city_id);
        }
    });
}

function get_zipcode_areas(zipcode, zipcode_id, area_id, city_id){
   $.ajax({
        url: make_req_url('/member/get-zipcode-area/'),
        type: 'post',
        dataType: 'json',
        data: {'city_id': $("#id_city").val(), 'zipcode': zipcode},
        }).done(function (data) {
            if (data['success']) {
                set_area_dropdown(data['areas'], zipcode_id, area_id);
        }
   });
}

/*
function set_area_dropdown(areas, zipcode_id, area_id){
    // create area dropdown and set dropkick
    area_html = "<select class = 'uiv2-salutation' id='select_area_options'>";
    if(areas.length > 0){
        for(i=0; i< areas.length; i++){
            area_html += "<option value='"+ areas[i] + "'>"+ areas[i] +"</option>";
        }

        area_html += "<option value='Other'>Other</option></select>";
        $("#area_options").html(area_html);
        $("#complete-partial-address #area_options").html(area_html);

        $("#select_area_options").dropkick();
        $("#complete-partial-address #select_area_options").dropkick();

        $("#complete-partial-address #"+ area_id).hide();

        $("#complete-partial-address #" + area_id).val($("#complete-partial-address #select_area_options option:selected").val());


        // on area menu change - if other area is selected show other area  textbox
        init_other_areas(area_id);
        $("#id_other_area").val('');
        $("#other_area_row").hide();
    }
}
*/

function set_area_dropdown(areas, zipcode_id, area_id){
    // create area dropdown and set dropkick
    area_html = "<select class = 'uiv2-salutation' id='select_area_options'>";
    if(areas.length > 0){
        for(i=0; i< areas.length; i++){
            area_html += "<option value='"+ areas[i] + "'>"+ areas[i] +"</option>";
        }

        area_html += "<option value='Other'>Other</option></select>";
        $("#area_options").html(area_html);

        $("#select_area_options").dropkick();
        $("#"+ area_id).hide();

        $("#" + area_id).val($("#select_area_options option:selected").val());

        // on area menu change - if other area is selected show other area  textbox
        init_other_areas(area_id);
        $("#id_other_area").val('');
        $("#other_area_row").hide();
        set_dropkick_widthForAddressAreaDropdown();
    }
}

function  set_dropkick_widthForAddressAreaDropdown() {
    var options = $('.dk_options_inner li a');
    for (var i = 0; i < options.length; i++) {
        if (options[i].text != undefined) {
            $(options[i]).parents('div[class^="dk_container"]').addClass('parentchild-big');
        }
    }
}
function init_other_areas(area_id){
    $("#select_area_options").on("change", function(){
        area_val = $("#select_area_options option:selected").val();
        // set form value ( required in the django form )
        $("#" + area_id).val(area_val);
        if(area_val.toLowerCase() == "other"){
            $("#other_area_row").show();
            $("#id_other_area").show();
            $("#pindiv").css("margin-top","-32px");
        }
        else{
            $("#other_area_row").hide();
            $("#id_other_area").val('');
            $("#pindiv").css("margin-top","0px");
        }
    });
    $("#complete-partial-address #select_area_options").on("change", function(){
        area_val = $("#complete-partial-address #select_area_options option:selected").val();
        // set form value ( required in the django form )
        $("#" + area_id).val(area_val);
        if(area_val.toLowerCase() == "other"){
            $("#complete-partial-address #other_area_row").show();
            $("#complete-partial-address #id_other_area").show();
            $("#complete-partial-address #pindiv").css("margin-top","-32px");
        }
        else{
            $("#complete-partial-address #other_area_row").hide();
            $("#complete-partial-address #id_other_area").val('');
            $("#complete-partial-address #pindiv").css("margin-top","0px");
        }
    });
}

function init_area_autocomplete(area_id, pincode_id, city_id){
    var id_area = $('#'+area_id);
    id_area.autocomplete({
        source: function (request, response) {
            var matches = $.map(areas[city_id], function (tag) {
                if (tag.toUpperCase().indexOf(request.term.toUpperCase()) === 0) {
                    return tag;
                }
            });
            response(matches);
        }
    });
    id_area.focusout(function () {
        var area = id_area.val();
        if (area != "") {
            $.ajax({
                url: make_req_url('/member/get-pincode/?area=' + area),
                type: 'get',
                dataType: 'json'
            }).done(function (data) {
                if (data['success']) {
                    $('#'+ pincode_id).val(data['pincode']);
                }
            });
        }
    });
}

function reset_area_source(area_id, zipcode_id){
    var zip = $('#' + zipcode_id);
    var id_area = $('#'+area_id);

    //reset old values
    zip.val('');
    id_area.show();
    id_area.val('');
    $('#area_options').empty();
    $("#id_other_area").val('').hide();

    zip_autocomplete = zip.autocomplete({
        source: function (request, response){
            var term = $.trim(zip.val());
            if(term.length > 4){
                var matches = $.map(zipcodes[$("#id_city").val()], function (tag) {
                    if (tag.indexOf(request.term.toUpperCase()) === 0){
                        return tag;
                    }
                });
                response(matches);
            }
        }
    });

    id_area.autocomplete({
        source: function (request, response) {
            var matches = $.map(areas[$("#id_city").val()], function (tag) {
                if (tag.toUpperCase().indexOf(request.term.toUpperCase()) === 0) {
                    return tag;
                }
            });
            response(matches);
        }
    });
}

/* end area zipcode autocomplete */

function add_address_popup(){
    uiv2_show_popup('uiv2-new-address-form', false);
    set_new_address_click();
    setTimeout(function() {

        init_zipcode_autocomplete('id_contact_area','id_contact_zipcode',$("#id_city").val());
        init_area_autocomplete('id_contact_area', 'id_contact_zipcode', $("#id_city").val());

        if($("#id_contact_area").val() == "Other"){
            $("#id_contact_area").val('');
        }

        $('#id_city').on('change', function(){
            reset_area_source('id_contact_area','id_contact_zipcode', $(this).val());
        });

	}, 20);
}

function set_new_address_click() {
    var p = $('#id-add-new-address');
    $('.uiv2-background-shade').hide();
    p.unbind("click");
    p.click(function(){return add_new_address()})
}

function check_address_form_validity(){
    selected_area = $.trim($("#select_area_options option:selected").val());
    if(selected_area){
       other_area = $.trim($("#id_other_area").val());
       $("#id_area").val(selected_area);
    }
    return true;
}

function update_parent_child(sel){
    value = $(sel).val();
    selected_text = sel.options[sel.selectedIndex].innerHTML.replace(/\s+/g, '');
    var pc_list = value.split("-");
    if (pc_list[1] != pc_list[2]) {

        current_id = pc_list[0] + "_" + pc_list[1];
        $('#' + current_id).hide();

        selected_id = pc_list[0] + "_" + pc_list[2];
        selected_deck = $('#' + selected_id);

        selected_deck.show();

        $('select[name=' + selected_deck.find('select.parentchild').attr('name') + '] option').filter(function(){
           return this.text.replace(/\s+/g, '') == selected_text;
        }).attr('selected', true);


    }
}

$(function () {
     $(".uiv2-tab-refine-by a").click(function () {
        $(this).closest(".uiv2-tab-refine-by").fadeOut(300, function () {
            $(this).remove()
        })
    });
    $(".uiv2-tab-clear-all a").click(function () {
        $(this).closest(".uiv2-sku-tab-section").fadeOut(300, function () {
            $(this).remove()
        })
    });
});

function  set_dropkick_width() {
    var options = $('.dk_options_inner li a');
    for (var i =0; i < options.length; i++) {
        if (options[i].text != undefined) {
            if ((options[i].text.length > 32) && (options[i].text.length < 45)) {
                $(options[i]).parents('div[class^="dk_container"]').addClass('parentchild-big');
            }
            if (options[i].text.length > 45) {
                $(options[i]).parents('div[class^="dk_container"]').addClass('parentchild-biggest');
            }
            if (options[i].text.indexOf("Out of Stock") >= 0) {
                $(options[i]).addClass('linethrough');
            }
        }
    }
}

/* End dropkick.js */

var dropkick_change = {
    change : function(value, label) {
        var pc_list;
        if(!value || value === undefined || value === null){
            $(this).find('option').each(function(){
                if(!$(this).attr('disabled') && $(this).attr("selected")){
                    pc_list = $(this).val().split("-");
                }
            });
        }
        else{
            pc_list = value.split("-");
        }
        if(pc_list[0]=="more_combo"){
            var name = $('#multi_combo_name_'+ pc_list[1]).val();
            get_multi_combo_products(pc_list[1], name);
            $(".parentchild").dropkick('reset');
        }
        else if (pc_list[1] != pc_list[2]) {
            see_child(pc_list[0] + "_" + pc_list[1], pc_list[0] + "_" + pc_list[2]);
            $(".parentchild").dropkick('reset');
        }
    }
};

var dropkick_sort_change = {
    change : function(value, label) {
        $('.id_psort .dk_label').html(label.slice(0, label.length/2));
    }
};

function init_hashed_pagination(){

    //Setup backbone for pagination

    if( $('.pagination')[0] ) { // if pagination exists

        var PageRouter = Backbone.Router.extend({

            routes: {
                "!page=:page_num": "go_to_page",
                "promo/:promo_id/:criteriaset_id/:page_num/": "go_to_promo_page",
                "promo/:promo_id/:criteriaset_id/:page_num/prev_next": "go_to_promo_page_nextprev"
            },

            go_to_page: function(page_num){
                facets.show_page(page_num);
            },

            go_to_promo_page: function(promo_id, criteriaset_id, page_num) {

                get_promo_page(promo_id, criteriaset_id, page_num, '');

            },

            go_to_promo_page_nextprev: function(promo_id, criteriaset_id, page_num, prev_next) {

                if(prev_next == null) {
                    prev_next = "";
                }

                get_promo_page(promo_id, criteriaset_id, page_num, prev_next);
            }

        });

        // Initiate the router
        var page_router = new PageRouter;

        Backbone.history.start(); //Initialize backbone
    }
}

function search_cities(){
    cities = []
    var str = $('.uiv2-location-multicity-input').val().replace(/\s+/g," ");
    var q = str.replace(/^\s+|\s+$/g,'');
    $("#uiv2-change li").each(function(){
       cities.push($(this).text());
    });
    if (q.length == 0 ){
        $(".uiv2-change li").hide();
        for(var i=0; i< cities.length ; i++){
            city_name = cities[i].toLowerCase();
            $("#"+city_name+"_city").show();
            if(i==1) break;
        }
    }
    else{
        for(var i=0; i< cities.length ; i++){
            city_name = cities[i].toLowerCase();
            if(city_name.indexOf(q.toLowerCase()) == -1){
               $("#"+city_name+"_city").hide();
            }
            else{
                $("#"+city_name+"_city").show();
            }
        }
    }
}

function do_ajax(url, type, data) {
    data['csrfmiddlewaretoken'] = csrf;
    return $.ajax({
        url: url,
        type: type,
        data: data
    })
}

function refresh_impulse_menu(label) {
    //$('#impulse_buying_menu').hide()
    //$('#shoplist-mask').show()
    //show_loader()
    $.ajax({
        url: '/basket/impulse-buying/',
        type: 'get',
        success: function (resp) {
            $('#impulse_buying_menu').html(resp)
            $('#tabs')
                .tabs()
                .addClass('ui-tabs-vertical ui-helper-clearfix');
            if (label) {
                var anchor_tag = "#" + label
                var index = $('#tabs a[href=' + anchor_tag + ']').parent().index();
                $('#tabs').tabs("option", "active", index)
            }
            $(".parentchild").dropkick(dropkick_change);
            refresh();
        }
    }).done(function (resp){
        //$('#impulse_buying_menu').show();
        //$('#shoplist-mask').hide()
        //hide_loader()
    });
}

function add_impulse_item_to_cart(product_id, product_slug, label, price) {
    add_to_cart(product_id, 1, "impulse-buying")
    var qty = $('#p' + product_id + '_qty').val();
    var pdescription = label+"|"+product_id+"."+product_slug+"|"+price
    _gaq.push(['_trackEvent','add-to-cart', "impulse", pdescription, parseInt(qty)]);
    $(".impulse_deliveryInfo_"+product_id).remove();
    $(".mrp_box_"+product_id).css("margin-left", "15px");
    /* setTimeout(function () {
            refresh_impulse_menu(label = label);
    }, 1000);
    */
}

function initialize_carousel(){
    $('.carousel_slider').each(function (i, obj) {
        var hidden_children = $(obj).children(".impulse_child").length;
        var actual_elements = obj.children.length - hidden_children
        if (actual_elements > 4) {
            var car_id = "carouSlide_" +(i+1);
            var carousel_ele = $("#" + car_id);
            carousel_ele.carouFredSel({
                circular: false,
                infinite: false,
                auto: false,
                scroll: {
                    items: 1
                },
                items: {
                    minimum: 4,
                    visible: 4
                },
                prev: {
                    button: function () {
                        return $(this).parents('.image_carousel').find('.previous');
                    },
                    key: "left"
                },
                next: {
                    button: function () {
                        return $(this).parents('.image_carousel').find('.next');
                    },
                    key: "right"
                }
            });
        }
        else{
            $(obj).parents('.image_carousel').find('.previous').hide()
            $(obj).parents('.image_carousel').find('.next').hide()
        }

    });
}

function fund_wallet(is_validated){
    var member_valid = is_validated ? 'validated' : 'not validated'
    _gaq.push(['_trackEvent', 'fund-wallet', member_valid, '1', 1]);
}

var auto_complete_apartments = [];

function init_apartment_autocomplete(){

    var contact_apartment =  $('#id_contact_residential_complex');

     $('#id_contact_residential_complex').on('keyup', function(){
            var pincode = $('#id_contact_zipcode').val();
            var name = $.trim($('#id_contact_residential_complex').val());
            if (name != "" && name.length > 1) {
                $.ajax({
                    url: '/member/get-apartment/?pincode='+pincode +'&name='+name,
                    type: 'get',
                    dataType: 'json',
                }).done(function(data){
                                        auto_complete_apartments = data['apartments'];
                    apartment_autocomplete = $('#id_contact_residential_complex').autocomplete({
                        source: function (request, response) {
                        var matches = $.map(auto_complete_apartments, function (tag) {
                        if (tag.toUpperCase().indexOf(request.term.toUpperCase()) === 0) {
                            return tag;
                            }
                        });
                        response(matches);
                    }
                })
            });
     }});
}

function show_city_detail(addr){
    if($("#city_slot_detail_"+addr).is(":visible")){
        $("#city_slot_detail_"+addr).hide();
        $(".top-menu-li").removeClass("topmenu-city-li");
        return;
    }
    else{
        $(".changeCity-detail").hide();
        $(".top-menu-li").removeClass("topmenu-city-li");
        $("#city_slot_li_"+addr).addClass("topmenu-city-li");
        $("#city_slot_detail_"+addr).show();
    }
    make_slot_request = false;
    if(!$("#express_slot_"+addr).html() && !$("#normal_slot_"+addr).html()){
        make_slot_request = true;
    }
    if(make_slot_request){
        $.ajax({
            url: '/member/get-address-slots/',
            type: 'post',
            data: {'address_id': addr},
        }).done(function (json_data) {
            if(json_data['success']){
                if (json_data['darkstore_next_slot']){
                    $("#express_container_"+addr).show();
                    darkstore_next_slot = json_data['darkstore_next_slot']
                    $("#express_slot_"+addr).empty().html("Express Delivery: " + darkstore_next_slot);
                    $(".exp-slot_"+addr).prop("title", "Express Delivery: " + darkstore_next_slot);
                }
                else if (json_data['express_next_slot']){
                    $("#express_container_"+addr).show();
                    express_slot = json_data['express_next_slot'];
                    // express_slot contains display slot like:
                    // 'Standard Delivery: 30 Sep Tomorrow, 7:30 PM to 10:00 PM'
                    // So replacing Standard with Express
                    express_slot = express_slot.replace("Standard", "Express");
                    $("#express_slot_"+addr).empty().html(express_slot);
                    $(".exp-slot_"+addr).prop("title", express_slot);
                }
                if(json_data['normal_next_slot']){
                    $("#normal_container_"+addr).show()
                    normal_slot = json_data['normal_next_slot'];
                    $("#normal_slot_"+addr).empty().html(normal_slot);
                    $(".normal-slot_"+addr).prop("title", normal_slot);
                }
            }
        });
    }
}


function set_city_address_change(city_id, address_id) {
    var initialCity = $('#city_id').val();

    var n = $("#city_slot_li_" + address_id);
    var t = $.trim($(".uiv2-loc-wrapper span").html()).replace(/\s+/g, " ");
    new_city = $.trim(n.find("a").html()).replace(/\s+/g, " ");
    $("#uiv2-selection").html(new_city);
    n.html(t);
    set_city_fn = $("#id-multicity").attr('href');
    $("#id-multicity").attr('href', 'javascript:void(0)');
    set_city(city_id, address_id);
}

function send_vizury_tags(product_type, pdid, cartval) {
    cartval = typeof(cartval) == "undefined" ? 0 : cartval;
    window.vizLayer = {
        geo: "sg",
        account_id: "VIZVRM1948",
        vertical: "ecommerce",
        type: product_type,
        pid: pdid,
        cartval: cartval
    };
    (function () {
        try {
            var viz = document.createElement("script");
            viz.type = "text/javascript";
            viz.async = true;
            viz.src = ("https:" == document.location.protocol ? "https://in-tags.vizury.com" : "http://in-tags.vizury.com") + "/analyze/pixel.php?account_id=VIZVRM1948";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(viz, s);
            viz.onload = function () {
                try {
                    pixel.parse();
                } catch (i) {
                }
            };
            viz.onreadystatechange = function () {
                if (viz.readyState == "complete" || viz.readyState == "loaded") {
                    try {
                        pixel.parse();
                    } catch (i) {
                    }
                }
            };
        } catch (i) {
        }
    })();
}

function send_vizury_tags_order(product_type, pdid, orderid, order_price) {
    cartval = typeof(cartval) == "undefined" ? 0 : cartval;
    window.vizLayer = {
        geo: "sg",
        account_id: "VIZVRM1948",
        vertical: "ecommerce",
        type: product_type,
        pid: pdid,
        orderid: orderid,
        orderprice: order_price
    };
    (function () {
        try {
            var viz = document.createElement("script");
            viz.type = "text/javascript";
            viz.async = true;
            viz.src = ("https:" == document.location.protocol ? "https://in-tags.vizury.com" : "http://in-tags.vizury.com") + "/analyze/pixel.php?account_id=VIZVRM1948";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(viz, s);
            viz.onload = function () {
                try {
                    pixel.parse();
                } catch (i) {
                }
            };
            viz.onreadystatechange = function () {
                if (viz.readyState == "complete" || viz.readyState == "loaded") {
                    try {
                        pixel.parse();
                    } catch (i) {
                    }
                }
            };
        } catch (i) {
        }
    })();
}

function set_cartitem_mode(element_id, mode) {
    $("#" + element_id).val(mode);
}

function show_incomplete_address_popup(addr_id) {
    uiv2_show_popup('uiv2-new-address-form', false);
    set_new_address_click();
    init_zipcode_autocomplete('id_contact_area', 'id_contact_zipcode', $("#id_city").val());
    init_area_autocomplete('id_contact_area', 'id_contact_zipcode', $("#id_city").val());

    if ($("#id_contact_area").val() == "Other") {
        $("#id_contact_area").val('');
    }

    $('#id_city').on('change', function () {
        reset_area_source('id_contact_area', 'id_contact_zipcode', $(this).val());
    });

    phno = $("#contactnum_" + addr_id).val();
    if (phno && phno != -1000000000) {
        $("#id_contact_number").val(phno);
    }

    area = $("#addrarea_" + addr_id).val();
    $("#id_contact_area").val(area);

    zipcode = $("#postalcode_" + addr_id).val();
    if (zipcode != 0) {
        $("#id_contact_zipcode").val(zipcode);
    }
    city_slug = $("#cityslug_" + addr_id).val();

    city_id = $("#cityid_" + addr_id).val();

    $("#id_city option[value='" + city_id + "']").prop('selected', true);
    $("#id_city").hide();
    $("#id_city").parent().find("span.uiv2-field-required").before("<input type='text' class='temp-city' value='" + city_slug + "' readonly/>");
    //set address fields
    $("#add_address_detail").val('1');
    $("#add-address-id").val(addr_id);
    $("#address-title").html("Update Address");
    $("#address-button").html("UPDATE ADDRESS");
}

function reset_address_form() {
    $("#id_contact_area").val('');
    $("#id_contact_zipcode").val('');
    $("#id_city").show();
    $(".temp-city").remove();
    $("#add_address_detail").val('0');
    $("#add-address-id").val('');
    $("#address-title").html("Add Address");
    $("#address-button").html("ADD ADDRESS");
}
String.prototype.capitalize = function () {
    return this.toLowerCase().replace(/\b\w/g, function (m) {
        return m.toUpperCase();
    });
};

var BBUtils = {
    /**
     eg. range(0, 4) = [0,1,2,3]
     eg. range(0, 6, 1) = [0, 2, 4]
     @method range
     @param {int} start
     @param {int} stop
     @param {int} step

     */
    range: function (start, stop, step) {
        if (typeof stop == 'undefined') {
            stop = start;
            start = 0;
        }
        if (typeof step == 'undefined') {
            step = 1;
        }
        if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
            return [];
        }
        var result = [];
        for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
            result.push(i);
        }
        return result;
    },


    /**
     eg. chunkify([1,2,3,4,5,6,7,8], 3) = [[1,2,3], [4,5,6], [7,8]]
     @method chunkify
     @param {Array} array
     @param {int} chunk_size
     */
    chunkify: function (array, chunk_size) {
        var msg_chunks = [];
        for (var i = 0; i < array.length; i += chunk_size) {
            msg_chunks.push(array.slice(i, i + chunk_size));
        }
        return msg_chunks;
    },

    toInt: function (x) {
        return x > 0 ? Math.floor(x) : Math.ceil(x);
    },

    /**
     eg. join_on('helloworld', 3, '<br>') => 'hel<br>low<br>orl<br>d';
     @method join_on
     @param {Array/string} array
     @param {int} interval
     @param {string} join_char
     */
    join_on: function (array, interval, join_char) {
        if (array && array.length > interval) {
            var msg_chunks = this.chunkify(array, interval);
            return msg_chunks.join(join_char);
        }
        return array;
    },

    /**
     eg. column_major_chunks([1,2,3,4,5,6,7,8,9,10,11,12, 13], 3) =>  [[1, 4, 7, 10, 13], [2, 5, 8, 11], [3, 6, 9, 12]]
     @method column_major_chunks
     @param {Array/string} array
     @param {int} interval
     */
    column_major_chunks: function (array, interval) {
        var chunks = this.chunkify(array, interval);
        var transposed_array = [];
        for (var i = 0; i < chunks.length; i++) {
            for (var j = 0; j < chunks[i].length; j++) {
                if (!transposed_array[j]) {
                    transposed_array[j] = [];
                }
                transposed_array[j][i] = chunks[i][j];
            }
        }
        return transposed_array;
    },

    is_touch_device: function () {
        return "ontouchstart" in document.documentElement;
    },

    initLoginButton: function (login_url) {
        var currentRelativeUrl = window.location.pathname;
        var targetUrl = login_url;
        if (currentRelativeUrl) {
            targetUrl += "?next=" +
                encodeURIComponent(currentRelativeUrl + window.location.search);
        }
        window.location.href = targetUrl;
    },
    // https://gist.github.com/padolsey/527683
    ieVersion: (function () {
        var undef,
            v = 3,
            div = document.createElement('div'),
            all = div.getElementsByTagName('i');

        while (
            div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
                all[0]
            );
        return v > 4 ? v : undef;
    }()),

    showIEPopupIfApplicable: function () {
        if (this.ieVersion < 9 && !docCookie.hasItem('_bb_ie')) {
            $("#id_browser_support, .uiv2-background-shade").fadeIn('slow');
            docCookie.setItem('_bb_ie', 'shown', 15552000);
        }
    },
    /**
     eg. When var obj = {name="sid"}, then BBUtils.getObjPropertyName(obj, "sid") will return "name"
     * @param {Object} obj
     * @param {Object} propertyVal
     */
    getObjPropertyName: function (obj, propertyVal) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop) && obj[prop] === propertyVal) {
                return prop;
            }
        }
    }
};

Number.prototype.formatMoney = function (decPlaces, thouSeparator, decSeparator) {
    var n = this,
        decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
        decSeparator = decSeparator == undefined ? "." : decSeparator,
        thouSeparator = thouSeparator == undefined ? "," : thouSeparator,
        sign = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(decPlaces)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return sign + (j ? i.substr(0, j) + thouSeparator : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thouSeparator) + (decPlaces ? decSeparator + Math.abs(n - i).toFixed(decPlaces).slice(2) : "");
};

function show_store_popup(pd_id) {
    var is_combo_modal_open = $('#comboModal').is(':visible');
    if (is_combo_modal_open == true)
        return true;
    ele_id = "store_popup_" + pd_id;
    if (ele_id) {
        $.ajax({
            url: '/store/get-store-details/',
            type: 'post',
            data: {'pd_id': pd_id},
        }).done(function (json_data) {
            if (json_data['success']) {
                $("#" + ele_id).html(json_data['store_html']);
            }
        });
        var $popup_parent = $('#store_popup_' + pd_id);
        uiv2_show_popup(ele_id);
        var windowHeight = $(window).height();
        var top = $(window).scrollTop();
        if (!top) {
            top = 450;
        }
        $popup_parent.css("top", top - 320 + "px");
    }
}


function store_popup_close(pd_id) {
    ele_id = "store_popup_" + pd_id;
    $("#" + ele_id).hide();
    $(".uiv2-background-shade").hide();
}

function onZipcodeChange(data) {
    data["pincode"] = "";
    return data

}
var apartmentSelected = false;
function loadAreaAndZipCodeAutoComplete(id_contact_area, id_contact_zipcode, id_apartment, city, minLength, numberOfResults) {
    $idContactArea = $("#" + id_contact_area);
    $idContactZipcode = $("#" + id_contact_zipcode);
    $apartmentComplex = $("#" + id_apartment);

    var areaAutocomplete = new AutoComplete();

    areaAutocomplete.initializeAutoComplete($idContactZipcode, "remote", {
        "data": {"city_id": city, "type": "pincode", "fields": JSON.stringify(RETURN_FIELDS), "limit": SIZE},
        "type": "get", "url": USE_NODE ? NODE_URL : "/bb/get_zipcode/"
    }, "response.results", ["pincode"], ["pincode"], [], "", onZipcodeChange);
    areaAutocomplete.render(minLength, numberOfResults);

    var areaAutocomplete2 = new AutoComplete();

    areaAutocomplete2.initializeAutoComplete($idContactArea, "remote", {
        "data": {"city_id": city, "type": "area", "fields": JSON.stringify(RETURN_FIELDS), "limit": SIZE},
        "type": "get", "url": USE_NODE ? NODE_URL : "/bb/get_area_for_zipcodes/"
    }, "response.results", ["display_name"], ["display_name", "pincode"]);
    areaAutocomplete2.render(minLength, numberOfResults);

    var apartmentAutocomplete = new AutoComplete();

    apartmentAutocomplete.initializeAutoComplete($apartmentComplex, "remote", {
        "data": {"city_id": city, "type": "apartment", "fields": JSON.stringify(RETURN_FIELDS), "limit": SIZE},
        "type": "get", "url": USE_NODE ? NODE_URL : "/bb/get_area/"
    }, "response.results", ["display_name"], ["display_name", "pincode"], [], "", onZipcodeChange);
    apartmentAutocomplete.render(1, 25);

    $idContactZipcode.on('focusout', function () {
        events.emit('remoteDataSourceChange', {
            "data": {"city_id": $city}
        });
    });

    $apartmentComplex.on('typeahead:change', function () {
        apartmentSelected = false;
    });

    $idContactZipcode.on('typeahead:change', function (ev, suggestion) {
        //if(!$renderAgain){
            $idContactArea.typeahead('val', '').attr("readonly", false).val('');
            $("#other_area_row").hide();
        //}

        if ($renderAgain) {
            $renderAgain = false;
            areaAutocomplete2.render(1, 20);
        }
    });

    $apartmentComplex.on('typeahead:select typeahead:cursorchange typeahead:autocomplete', function (ev, suggestion) {

        if (suggestion.pincode == 0 || !suggestion.pincode) {
            suggestion.pincode = "";
        }
        $idContactArea.typeahead('val', '').attr("readonly", false).val('');
        if ($renderAgain) {
            $renderAgain = false;
            areaAutocomplete2.render(1, 20);
        }
        $("#other_area_row").hide()
        $idContactZipcode.val(suggestion.pincode).typeahead('val', suggestion.pincode);
        //if (suggestion.apartment_area != 0) {
        events.emit('remoteDataSourceChange', {
            "data": {"city_id": $city}
        });
        apartmentSelected = true;
        $idContactArea.val(suggestion.area).typeahead('val', suggestion.area);
        //}
        $("#id_location").val(JSON.stringify(suggestion));
    })
    $idContactArea.on('typeahead:select typeahead:cursorchange typeahead:autocomplete', function (ev, suggestion) {
        if (suggestion) {
            $("#other_area_row").hide();

            if (suggestion.other_area) {
                //$idContactArea.typeahead('destroy');
                $renderAgain = true;
                $idContactArea.attr("readonly", false).val(suggestion.display_name);
                $("#other_area_row").show();
                return true;
            }
            if (suggestion.pincode != 0) {
                $idContactZipcode.val(suggestion.pincode).typeahead('val', suggestion.pincode)
            }
            var loc = $("#id_location");
            var locData = null;
            try {
                locData = JSON.parse(loc.val());
            } catch (ex) {

            }
            if (locData) {
                if (locData["type"] === "apartment") {
                    suggestion["aptId"] = locData["id"]
                }
            }
            loc.val(JSON.stringify(suggestion));
            //if (apartmentSelected) {
            //    $apartmentComplex.typeahead('val', '');
            //}
        }
    });
    var city_id = $('#id_city');
    $city = city;
    city_id.val($city).trigger('change');

    city_id.on('change', function () {
        $city = $("#id_city").val();
        events.emit('remoteDataSourceChange', {
            "data": {"city_id": $city, "pincode": ""},
            "type": "get", "url": "/bb/get_zipcode/"
        });
        resetTheAutoSuggest();
        areaAutocomplete2.render(minLength, numberOfResults);
    });
}
function resetTheAutoSuggest() {
    $idContactZipcode.typeahead('val', '');
    $idContactArea.typeahead('val', '').attr("readonly", false).val('');
    $("#other_area_row").hide();
    $apartmentComplex.typeahead('val', '');
}

function updateEngagementStore(pid, quantity) {
    if (typeof angular !== 'undefined') {
        if(document.getElementById('engagementStoreMainContainer') !== null){
            var angularElm = angular.element(document.getElementById('engagementStoreMainContainer'));
            if (angularElm) {
                angularElm.scope().vm.updateEngagementStore(pid, quantity);
            }
        }
    }
}

function updateEngagementStoreFromCart() {
    if (typeof angular !== 'undefined') {
        if(document.getElementById('engagementStoreMainContainer') !== null){
            var angularElm = angular.element(document.getElementById('engagementStoreMainContainer'));
            if (angularElm) {
                angularElm.scope().vm.updateEngagementStoreFromCart();
            }
        }
    }
}


function broadCastToGetCart() {
    "use strict";
    if (typeof angular !== 'undefined') {
        if(document.getElementById('headercontroller') !== null){
            var angularElm = angular.element(document.getElementById('headercontroller'));
            if (angularElm) {
                angularElm.scope().vm.callBroadcastGetCart();
            }
        }
    }

}
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

var BasketUrlBuilder = function () {
    var addToCartUrl = make_req_url('/basket/add/');
    var delItemUrl = make_req_url('/basket/del-item/');
    var updateQtyUrl = make_req_url('/basket/qty-update/');
    var getCartUrl = make_req_url('');
    var emptyCartUrl = make_req_url('/basket/empty-basket/');
    var addListCartUrl = make_req_url('/msl/add-list-item-to-basket/');

    return {
        withNodeCartUrl: function () {
            addToCartUrl = '/basketService/add/';
            delItemUrl = '/basketService/del-item/';
            updateQtyUrl = '/basketService/update-qty/';
            getCartUrl = '';
            emptyCartUrl = '/basketService/empty-cart/';
            addListCartUrl = '/basketService/msl/add-list-item-to-basket/';
            return this;
        },
        build: function () {
            return {
                'addToCartUrl': addToCartUrl,
                'delItemUrl': delItemUrl,
                'updateQtyUrl': updateQtyUrl,
                'getCartUrl': getCartUrl,
                'emptyCartUrl': emptyCartUrl,
                'addListCartUrl': addListCartUrl
            };
        }
    };
}
//New Header js

/*! Main */
jQuery(document).ready(function($) {

    var windowurl = window.location.href;

    if (window.location.href.indexOf("/auth/signup/") != -1) {
        $('#signup-url, #user-sep').hide();
    }
    else if (window.location.href.indexOf("/auth/login/?nc=nb") != -1) {
        $('#signin-url, #user-sep').hide();
    }

    // Fixed navbar
    if($('#navbar-main').length){
    var navbar = $('#navbar-main'),
    distance = navbar.offset().top,
    $window = $(window);

    $window.scroll(function() {
        if ($window.scrollTop() >= distance) {
            navbar.removeClass('navbar-fixed-top').addClass('navbar-fixed-top');
            $("body").css("padding-top", "70px");
            $('.bb-logo .logo-img').removeClass('change-logo');
            $('.bb-logo .logo-img').addClass('icon');
            $('.sticky-nav, #sticky-nav').show();
            $('.bb-logo').css('max-width', '85px');
        } else {
            navbar.removeClass('navbar-fixed-top');
            $("body").css("padding-top", "0px");
            $('.bb-logo .logo-img').addClass('change-logo');
            $('.bb-logo .logo-img').removeClass('icon');
            $('.sticky-nav, #sticky-nav').hide();
            $('.bb-logo').css('max-width', '190px');
        }
    });
    }

});

window.UIV2LOD = true;
window.UIV2LODElm.dispatchEvent(window.UIV2LODEvnt);

// *!
//  * Bootstrap v3.3.7 (http://getbootstrap.com)
//  * Copyright 2011-2016 Twitter, Inc.
//  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
//  */

///*!
// * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=4bdaaa82e21e7f3b672e876cae179a8f)
// * Config saved to config.json and https://gist.github.com/4bdaaa82e21e7f3b672e876cae179a8f
// */
if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}
+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')
  }
}(jQuery);

/* ====
====================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.7'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (document !== e.target &&
            this.$element[0] !== e.target &&
            !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

  function getFieldsFromLocation(locationInfo){
      var locationType = locationInfo["type"];
      var areaId = null, apartmentId= null, location=null;
      switch (locationType){
          case "area":
              areaId = locationInfo["id"];
              apartmentId = locationInfo["aptId"];
              break;
          case "apartment":
              apartmentId = locationInfo["id"];
              location = locationInfo["location"];
              areaId = locationInfo["area_id"];
              break;
      }
      return {
          "areaId": areaId,
          "location": location,
          "apartmentId": apartmentId
      }
  }

  function getGpsLocation(formObj){
      if(!navigator.geolocation){
          return 0
      }
      var geoOptions = {
          timeout: 10 * 1000,
          enableHighAccuracy:true
      }
      var geoSuccess = function(position){
        $("#id_gps_lat").val(position.coords.latitude);
        $("#id_gps_lng").val(position.coords.longitude);
        $("#id_accuracy").val(position.coords.accuracy);
        formObj.submit();
      }
      var geoError = function(error){
          console.log(error)
          formObj.submit();
      }
      navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
  };

/* Include the following script without any changes */

// function initializeKapture(){

    /* Include the following script without any changes */
         function initializeKaptureSupport(){if("object"==typeof Kapchat)return initKapchat();var e=document.getElementsByTagName("head")[0],t=document.createElement("script");t.type="text/javascript",t.src="https://www.adjetter.com/static/assets/global/plugins/supportmessenger/js/kapturecustomersupport.v2.min.js",t.onload=initKapchat,e.appendChild(t)}if("undefined"==typeof jQuery){var headTag=document.getElementsByTagName("head")[0],jqTag=document.createElement("script");jqTag.type="text/javascript",jqTag.src="https://www.adjetter.com/static/assets/global/plugins/jquery.min.js",jqTag.onload=initializeKapture,headTag.appendChild(jqTag)}else initializeKaptureSupport();

        /* Initialize Kapchat */
        function initKapchat() {
            if(!get_cookie('_bb_mid')){
                return false;
            }
            var request = $.ajax({
                                url:"/get_kptur/",
                                method: "GET",
                            });
            request.done(function(data){
                "use strict";
                initialize(data.ency, data.kkye);
            });
            var initialize = function(ency, kkey) {
                Kapchat.initialize({
                    customercode: ency, // encrypted customer code
                    key: '183456e7b3122af0e470176ba2d207a4',
                    iv: kkey, // pseudo random string in hex format
                    context:'kapchat-widget-btn',
                    label: 'Customer Support',
                    widget: 'kp_widget_tk',
                    success: function() {
                        // your callback here (optional)
                    },
                    error: function(e) {
                        console.log(e);
                    }
                });
            };

        };
    // }

$("#id_submit_edit_form").on("click", function(){
    if ($("#id_salutation") == ""){
        alert("Salutation is required.");
        return false;
    }
    else if ($("#id_first_name") == ""){
        alert("First Name is required.");
        return false;
    }
    else if ($("#id_last_name") == ""){
        alert("Last Name is required.");
        return false;
    }
    else if ($("#id_email") == ""){
        alert("Email is required.");
        return false;
    }
    else if ($("input[name='dob']") == ""){
        alert("Date of birth is required.");
        return false;
    }
    else if ($("#id_mobile_no") == ""){
        alert("Mobile Number is required.");
        return false;
    }
    else
        return true;
})

function del_addr(address_id){
    // if(confirm("Do you want to delete the address")) {
        $.ajax({
            url: '/mapi/v3.4.0/deactivate-address/',
            type: 'POST',
            data: JSON.stringify([address_id])
        }).done(function (data) {
            var msg = "";
            data.response.status_list.forEach(function(status){
               if(Number(status.status) !== 0){
                   msg = msg + status.message + "\n" ;
               }
            });
            if(msg){
                msg.length = msg.length - 2;
                alert(msg);
            } else {
                window.location.reload();
            }
        })
    // }
}

function del_prompt(address_id){
    $("#address-delete-modal").show();
    $("#address-delete-confirm").data("address-id",address_id);
}


$("#address-delete-confirm").on("click",function (e){
    var address_id = $(this).data('address-id');
    if(address_id){
        del_addr(address_id);
    }
    $("#address-delete-confirm").data("address-id","");
    $("#address-delete-modal").hide();
});
$("#address-delete-cancel").on("click",function(e){
    $("#address-delete-confirm").data("address-id","");
    $("#address-delete-modal").hide();
});
$("#address-delete-modal").on("click",function(e){
    $("#address-delete-modal").hide();
    $("#address-delete-confirm").data("address-id","");
});

$("#address-delete-content").on("click",function(e){
    e.stopPropagation()
})
$(".icon.icon-delete-big.disable").hover(function(e){
    $(this).parent().find(".bubble-message-box").show();
},function(e){
    $(this).parent().find(".bubble-message-box").hide();
})
