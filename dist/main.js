!(function(e) {
  var t = {};
  function o(n) {
    if (t[n]) return t[n].exports;
    var c = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(c.exports, c, c.exports, o), (c.l = !0), c.exports;
  }
  (o.m = e),
    (o.c = t),
    (o.d = function(e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (o.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function(e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var c in e)
          o.d(
            n,
            c,
            function(t) {
              return e[t];
            }.bind(null, c)
          );
      return n;
    }),
    (o.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = ""),
    o((o.s = 3));
})([
  function(e, t, o) {
    "use strict";
    var n =
      (this && this.__importDefault) ||
      function(e) {
        return e && e.__esModule ? e : { default: e };
      };
    Object.defineProperty(t, "__esModule", { value: !0 });
    const c = n(o(1));
    function r(e) {
      return c.default.createElement(
        "button",
        {
          onClick: function() {
            e.clickCallback();
          },
          className: e.class
        },
        e.children
      );
    }
    (r.defaultProps = {
      class:
        "focus:outline-none py-1 px-2 md:py-2 md:px-3 w-24 mr-2 bg-gray-700 hover:bg-gray-600 text-white rounded w-full text-xl",
      clickCallback: function() {}
    }),
      (t.default = r);
  },
  function(e, t) {
    e.exports = React;
  },
  function(e, t, o) {
    var n, c;
    /*!
     * JavaScript Cookie v2.2.1
     * https://github.com/js-cookie/js-cookie
     *
     * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
     * Released under the MIT license
     */ !(function(r) {
      if (
        (void 0 ===
          (c = "function" == typeof (n = r) ? n.call(t, o, t, e) : n) ||
          (e.exports = c),
        !0,
        (e.exports = r()),
        !!0)
      ) {
        var i = window.Cookies,
          u = (window.Cookies = r());
        u.noConflict = function() {
          return (window.Cookies = i), u;
        };
      }
    })(function() {
      function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
          var o = arguments[e];
          for (var n in o) t[n] = o[n];
        }
        return t;
      }
      function t(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
      }
      return (function o(n) {
        function c() {}
        function r(t, o, r) {
          if ("undefined" != typeof document) {
            "number" == typeof (r = e({ path: "/" }, c.defaults, r)).expires &&
              (r.expires = new Date(1 * new Date() + 864e5 * r.expires)),
              (r.expires = r.expires ? r.expires.toUTCString() : "");
            try {
              var i = JSON.stringify(o);
              /^[\{\[]/.test(i) && (o = i);
            } catch (e) {}
            (o = n.write
              ? n.write(o, t)
              : encodeURIComponent(String(o)).replace(
                  /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                  decodeURIComponent
                )),
              (t = encodeURIComponent(String(t))
                .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                .replace(/[\(\)]/g, escape));
            var u = "";
            for (var l in r)
              r[l] &&
                ((u += "; " + l),
                !0 !== r[l] && (u += "=" + r[l].split(";")[0]));
            return (document.cookie = t + "=" + o + u);
          }
        }
        function i(e, o) {
          if ("undefined" != typeof document) {
            for (
              var c = {},
                r = document.cookie ? document.cookie.split("; ") : [],
                i = 0;
              i < r.length;
              i++
            ) {
              var u = r[i].split("="),
                l = u.slice(1).join("=");
              o || '"' !== l.charAt(0) || (l = l.slice(1, -1));
              try {
                var a = t(u[0]);
                if (((l = (n.read || n)(l, a) || t(l)), o))
                  try {
                    l = JSON.parse(l);
                  } catch (e) {}
                if (((c[a] = l), e === a)) break;
              } catch (e) {}
            }
            return e ? c[e] : c;
          }
        }
        return (
          (c.set = r),
          (c.get = function(e) {
            return i(e, !1);
          }),
          (c.getJSON = function(e) {
            return i(e, !0);
          }),
          (c.remove = function(t, o) {
            r(t, "", e(o, { expires: -1 }));
          }),
          (c.defaults = {}),
          (c.withConverter = o),
          c
        );
      })(function() {});
    });
  },
  function(e, t, o) {
    "use strict";
    function n(e) {
      for (var o in e) t.hasOwnProperty(o) || (t[o] = e[o]);
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      n(o(0)),
      n(o(4)),
      n(o(5));
  },
  function(e, t, o) {
    "use strict";
    var n =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var o in e) Object.hasOwnProperty.call(e, o) && (t[o] = e[o]);
          return (t.default = e), t;
        },
      c =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    const r = n(o(1)),
      i = c(o(0)),
      u = c(o(2));
    function l(e) {
      const [t, o] = r.useState(!1);
      function n() {
        e.shouldShowPopUp ||
          u.default.set(e.cookieNameShowed, e.cookieValueShowed, {
            expires: e.expires
          });
      }
      function c() {
        const e = "." + window.location.hostname;
        Object.keys(u.default.get()).forEach(function(t) {
          -1 !== t.indexOf("_")
            ? u.default.remove(t, { domain: e })
            : u.default.remove(t);
        });
      }
      return (
        r.useEffect(() => {
          u.default.get(e.cookieNameAccept) === e.cookieValueAccept
            ? o(!1)
            : o(!0);
        }, [e.cookieNameAccept, e.cookieValueAccept]),
        t
          ? r.default.createElement(
              i.default,
              {
                class: e.classAcceptButton,
                clickCallback: function() {
                  c(),
                    n(),
                    u.default.set(e.cookieNameAccept, e.cookieValueAccept, {
                      expires: e.expires
                    }),
                    o(!1);
                }
              },
              e.textAcceptButton
            )
          : r.default.createElement(
              i.default,
              {
                class: e.classDeclineButton,
                clickCallback: function() {
                  c(),
                    n(),
                    u.default.set(e.cookieNameDecline, e.cookieValueDecline, {
                      expires: e.expires
                    }),
                    o(!0);
                }
              },
              e.textDeclineButton
            )
      );
    }
    (l.defaultProps = {
      classAcceptButton:
        "focus:outline-none py-1 px-2 md:py-2 md:px-3 w-24 mr-2 bg-green-700 hover:bg-green-600 text-white rounded w-full text-xl  mt-8",
      classDeclineButton:
        "focus:outline-none py-1 px-2 md:py-2 md:px-3 w-24 bg-red-700 hover:bg-red-600 text-white rounded w-full text-xl mt-8 ",
      textAcceptButton: "Accept",
      textDeclineButton: "Deny",
      cookieNameShowed: "cookie-msg-showed",
      cookieNameAccept: "cookie-opt-in",
      cookieNameDecline: "cookie-opt-out",
      cookieValueShowed: "true",
      cookieValueAccept: "true",
      cookieValueDecline: "true",
      shouldShowPopUp: !1,
      expires: 30
    }),
      (t.default = l);
  },
  function(e, t, o) {
    "use strict";
    var n =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var o in e) Object.hasOwnProperty.call(e, o) && (t[o] = e[o]);
          return (t.default = e), t;
        },
      c =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    const r = n(o(1)),
      i = c(o(2)),
      u = c(o(0));
    function l(e) {
      const [t, o] = r.useState(!1);
      function n() {
        i.default.set(e.cookieNameShowed, e.cookieValueShowed, {
          expires: e.expires
        });
      }
      return (
        r.useEffect(() => {
          void 0 === i.default.get(e.cookieNameShowed) && o(!0);
        }, [e.cookieNameShowed]),
        t || e.debug
          ? r.default.createElement(
              "div",
              { className: e.class, id: "cookie-popup" },
              r.default.createElement(
                "div",
                { className: "flex flex-wrap" },
                r.default.createElement(
                  "div",
                  { className: "w-full md:w-1/2 p-5" },
                  e.children
                ),
                r.default.createElement(
                  "div",
                  { className: "w-full md:w-1/2 p-5" },
                  r.default.createElement(
                    "div",
                    { className: "flex flex-row-reverse" },
                    r.default.createElement(
                      "div",
                      { className: "w-full md:w-1/2" },
                      r.default.createElement(
                        u.default,
                        {
                          class: e.classAcceptButton,
                          clickCallback: function() {
                            i.default.set(
                              e.cookieNameAccept,
                              e.cookieValueAccept,
                              { expires: e.expires }
                            ),
                              n(),
                              o(!1);
                          }
                        },
                        e.textAcceptButton
                      ),
                      r.default.createElement(
                        u.default,
                        {
                          class: e.classDeclineButton,
                          clickCallback: function() {
                            i.default.set(
                              e.cookieNameShowed,
                              e.cookieValueShowed,
                              { expires: e.expires }
                            ),
                              n(),
                              o(!1);
                          }
                        },
                        e.textDeclineButton
                      )
                    )
                  )
                )
              )
            )
          : null
      );
    }
    (l.defaultProps = {
      class: "container mx-auto px-10",
      classAcceptButton:
        "focus:outline-none py-1 px-2 md:py-2 md:px-3 w-24 mr-2 bg-green-700 hover:bg-green-600 text-white rounded w-full text-xl",
      classDeclineButton:
        "focus:outline-none py-1 px-2 md:py-2 md:px-3 w-24 bg-red-700 hover:bg-red-600 text-white rounded w-full text-xl mt-8 ",
      textAcceptButton: "Accept",
      textDeclineButton: "Deny",
      cookieNameShowed: "cookie-msg-showed",
      cookieNameAccept: "cookie-opt-in",
      cookieNameDecline: "cookie-opt-out",
      cookieValueShowed: "true",
      cookieValueAccept: "true",
      cookieValueDecline: "true",
      expires: 30,
      debug: !1
    }),
      (t.default = l);
  }
]);
//# sourceMappingURL=main.js.map
