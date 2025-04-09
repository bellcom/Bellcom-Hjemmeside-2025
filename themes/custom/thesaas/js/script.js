(function ($, Drupal) {

  Drupal.behaviors.thesaasScript = {

    attach: function (context, settings) {

'use strict';

$(function() {


  /*
  |--------------------------------------------------------------------------
  | Configure your website
  |--------------------------------------------------------------------------
  |
  | We provided several configuration variables for your ease of development.
  | Read their complete description and modify them based on your need.
  |
  */

  thesaas.config({

    /*
    |--------------------------------------------------------------------------
    | Google API Key
    |--------------------------------------------------------------------------
    |
    | Here you may specify your Google API key if you need to use Google Maps
    | in your application
    |
    | https://developers.google.com/maps/documentation/javascript/get-api-key
    |
    */

    googleApiKey: 'AIzaSyDRBLFOTTh2NFM93HpUA4ZrA99yKnCAsto',

    /*
    |--------------------------------------------------------------------------
    | Google Analytics Tracking
    |--------------------------------------------------------------------------
    |
    | If you want to use Google Analytics, you can specify your Tracking ID in
    | this option. Your key would be a value like: UA-12345678-9
    |
    */

    googleAnalyticsId: '',

    /*
    |--------------------------------------------------------------------------
    | Smooth Scroll
    |--------------------------------------------------------------------------
    |
    | If true, the browser's scrollbar moves smoothly on scroll and gives your
    | visitor a better experience for scrolling.
    |
    */

    smoothScroll: true

  });





  /*
  |--------------------------------------------------------------------------
  | Custom Javascript code
  |--------------------------------------------------------------------------
  |
  | Now that you configured your website, you can write additional Javascript
  | code below this comment. You might want to add more plugins and initialize
  | them in this file.
  |
  */


});



    }

  };

/* Typed JS */
! function(t) {
    "use strict";
    var s = function(s, e) {
        this.el = t(s), this.options = t.extend({}, t.fn.typed.defaults, e), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = this.isInput ? !1 : this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
    };
    s.prototype = {
        constructor: s,
        init: function() {
            var t = this;
            t.timeout = setTimeout(function() {
                for (var s = 0; s < t.strings.length; ++s) t.sequence[s] = s;
                t.shuffle && (t.sequence = t.shuffleArray(t.sequence)), t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
            }, t.startDelay)
        },
        build: function() {
            var s = this;
            if (this.showCursor === !0 && (this.cursor = t('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.stringsElement) {
                this.strings = [], this.stringsElement.hide(), console.log(this.stringsElement.children());
                var e = this.stringsElement.children();
                t.each(e, function(e, i) {
                    s.strings.push(t(i).html())
                })
            }
            this.init()
        },
        typewrite: function(t, s) {
            if (this.stop !== !0) {
                var e = Math.round(70 * Math.random()) + this.typeSpeed,
                    i = this;
                i.timeout = setTimeout(function() {
                    var e = 0,
                        r = t.substr(s);
                    if ("^" === r.charAt(0)) {
                        var o = 1;
                        /^\^\d+/.test(r) && (r = /\d+/.exec(r)[0], o += r.length, e = parseInt(r)), t = t.substring(0, s) + t.substring(s + o)
                    }
                    if ("html" === i.contentType) {
                        var n = t.substr(s).charAt(0);
                        if ("<" === n || "&" === n) {
                            var a = "",
                                h = "";
                            for (h = "<" === n ? ">" : ";"; t.substr(s + 1).charAt(0) !== h && (a += t.substr(s).charAt(0), s++, !(s + 1 > t.length)););
                            s++, a += h
                        }
                    }
                    i.timeout = setTimeout(function() {
                        if (s === t.length) {
                            if (i.options.onStringTyped(i.arrayPos), i.arrayPos === i.strings.length - 1 && (i.options.callback(), i.curLoop++, i.loop === !1 || i.curLoop === i.loopCount)) return;
                            i.timeout = setTimeout(function() {
                                i.backspace(t, s)
                            }, i.backDelay)
                        } else {
                            0 === s && i.options.preStringTyped(i.arrayPos);
                            var e = t.substr(0, s + 1);
                            i.attr ? i.el.attr(i.attr, e) : i.isInput ? i.el.val(e) : "html" === i.contentType ? i.el.html(e) : i.el.text(e), s++, i.typewrite(t, s)
                        }
                    }, e)
                }, e)
            }
        },
        backspace: function(t, s) {
            if (this.stop !== !0) {
                var e = Math.round(70 * Math.random()) + this.backSpeed,
                    i = this;
                i.timeout = setTimeout(function() {
                    if ("html" === i.contentType && ">" === t.substr(s).charAt(0)) {
                        for (var e = "";
                            "<" !== t.substr(s - 1).charAt(0) && (e -= t.substr(s).charAt(0), s--, !(0 > s)););
                        s--, e += "<"
                    }
                    var r = t.substr(0, s);
                    i.attr ? i.el.attr(i.attr, r) : i.isInput ? i.el.val(r) : "html" === i.contentType ? i.el.html(r) : i.el.text(r), s > i.stopNum ? (s--, i.backspace(t, s)) : s <= i.stopNum && (i.arrayPos++, i.arrayPos === i.strings.length ? (i.arrayPos = 0, i.shuffle && (i.sequence = i.shuffleArray(i.sequence)), i.init()) : i.typewrite(i.strings[i.sequence[i.arrayPos]], s))
                }, e)
            }
        },
        shuffleArray: function(t) {
            var s, e, i = t.length;
            if (i)
                for (; --i;) e = Math.floor(Math.random() * (i + 1)), s = t[e], t[e] = t[i], t[i] = s;
            return t
        },
        reset: function() {
            var t = this;
            clearInterval(t.timeout);
            this.el.attr("id");
            this.el.empty(), "undefined" != typeof this.cursor && this.cursor.remove(), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, this.options.resetCallback()
        }
    }, t.fn.typed = function(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("typed"),
                o = "object" == typeof e && e;
            r && r.reset(), i.data("typed", r = new s(this, o)), "string" == typeof e && r[e]()
        })
    }, t.fn.typed.defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        shuffle: !1,
        backDelay: 500,
        loop: !1,
        loopCount: !1,
        showCursor: !0,
        cursorChar: "|",
        attr: null,
        contentType: "html",
        callback: function() {},
        preStringTyped: function() {},
        onStringTyped: function() {},
        resetCallback: function() {}
    }
}(window.jQuery);


! function(t, i) {
    function n(n, o) {
        function s() {
            this.x = Math.random() * n.width, this.y = Math.random() * n.height, this.vx = r.velocity - .5 * Math.random(), this.vy = r.velocity - .5 * Math.random(), this.radius = Math.random() * r.star.width
        }
        var e = t(n),
            h = n.getContext("2d"),
            a = {
                star: {
                    color: "rgba(224, 224, 224, .7)",
                    width: 1
                },
                line: {
                    color: "rgba(224, 224, 224, .7)",
                    width: .2
                },
                position: {
                    x: 0,
                    y: 0
                },
                width: i.innerWidth,
                height: i.innerHeight,
                velocity: .1,
                length: 100,
                distance: 100,
                radius: 150,
                stars: []
            },
            r = t.extend(!0, {}, a, o);
        s.prototype = {
            create: function() {
                h.beginPath(), h.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1), h.fill()
            },
            animate: function() {
                var t;
                for (t = 0; t < r.length; t++) {
                    var i = r.stars[t];
                    i.y < 0 || i.y > n.height ? (i.vx = i.vx, i.vy = -i.vy) : (i.x < 0 || i.x > n.width) && (i.vx = -i.vx, i.vy = i.vy), i.x += i.vx, i.y += i.vy
                }
            },
            line: function() {
                var t, i, n, o, s = r.length;
                for (n = 0; s > n; n++)
                    for (o = 0; s > o; o++) t = r.stars[n], i = r.stars[o], t.x - i.x < r.distance && t.y - i.y < r.distance && t.x - i.x > -r.distance && t.y - i.y > -r.distance && t.x - r.position.x < r.radius && t.y - r.position.y < r.radius && t.x - r.position.x > -r.radius && t.y - r.position.y > -r.radius && (h.beginPath(), h.moveTo(t.x, t.y), h.lineTo(i.x, i.y), h.stroke(), h.closePath())
            }
        }, this.createStars = function() {
            var t, i, o = r.length;
            for (h.clearRect(0, 0, n.width, n.height), i = 0; o > i; i++) r.stars.push(new s), t = r.stars[i], t.create();
            t.line(), t.animate()
        }, this.setCanvas = function() {
            n.width = r.width, n.height = r.height
        }, this.setContext = function() {
            h.fillStyle = r.star.color, h.strokeStyle = r.line.color, h.lineWidth = r.line.width
        }, this.setInitialPosition = function() {
            o && o.hasOwnProperty("position") || (r.position = {
                x: .5 * n.width,
                y: .5 * n.height
            })
        }, this.loop = function(t) {
            t(), i.requestAnimationFrame(function() {
                this.loop(t)
            }.bind(this))
        }, this.bind = function() {
            t(document).on("mousemove", function(t) {
                r.position.x = t.pageX - e.offset().left, r.position.y = t.pageY - e.offset().top
            })
        }, this.init = function() {
            this.setCanvas(), this.setContext(), this.setInitialPosition(), this.loop(this.createStars), this.bind()
        }
    }
    t.fn.constellation = function(t) {
        return this.each(function() {
            var i = new n(this, t);
            i.init()
        })
    }
}($, window);


})(jQuery, Drupal);

(function ($, Drupal) {
  Drupal.behaviors.preSelectSolution = {
    attach: function (context, settings) {
      // Use setTimeout to ensure the DOM is fully loaded
      setTimeout(function() {
        // Target the specific form by ID
        if ($('#contact-message-book-en-demo-form').length) {
          // Get the URL parameters
          const urlParams = new URLSearchParams(window.location.search);
          const solutionParam = urlParams.get('solution');

          // If we have a solution parameter
          if (solutionParam) {
            // Target the specific select field by ID
            const selectElement = $('#edit-field-solution');

            // If the select element exists and has an option with the value from the URL
            if (selectElement.length && selectElement.find('option[value="' + solutionParam + '"]').length) {
              // Set the selected option
              selectElement.val(solutionParam).trigger('change');
            }
          }
        }
      }, 500); // Small delay to ensure form is fully loaded
    }
  };
})(jQuery, Drupal);

