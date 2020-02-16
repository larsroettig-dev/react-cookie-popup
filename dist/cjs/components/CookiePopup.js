"use strict";
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var js_cookie_1 = __importDefault(require("js-cookie"));
var CookieButton_1 = __importDefault(require("./CookieButton"));
function CookiePopup(props) {
  var _a = react_1.useState(false),
    visible = _a[0],
    setVisible = _a[1];
  react_1.useEffect(
    function() {
      if (js_cookie_1.default.get(props.cookieNameShowed) === undefined) {
        setVisible(true);
      }
    },
    [props.cookieNameShowed]
  );
  function setPopUpCookie() {
    js_cookie_1.default.set(props.cookieNameShowed, props.cookieValueShowed, {
      expires: props.expires
    });
  }
  function handleAccept() {
    js_cookie_1.default.set(props.cookieNameAccept, props.cookieValueAccept, {
      expires: props.expires
    });
    setPopUpCookie();
    setVisible(false);
  }
  function handleDecline() {
    js_cookie_1.default.set(props.cookieNameDecline, props.cookieValueDecline, {
      expires: props.expires
    });
    setPopUpCookie();
    setVisible(false);
  }
  if (!visible && !props.debug) {
    return null;
  }
  return react_1.default.createElement(
    "div",
    { className: props.rootClass, id: "cookie-popup" },
    react_1.default.createElement(
      "div",
      { className: "flex flex-wrap" },
      react_1.default.createElement(
        "div",
        { className: "w-full md:w-1/2 p-5" },
        props.children
      ),
      react_1.default.createElement(
        "div",
        { className: "w-full md:w-1/2 p-5" },
        react_1.default.createElement(
          "div",
          { className: "flex flex-row-reverse" },
          react_1.default.createElement(
            "div",
            { className: "w-full md:w-1/2" },
            react_1.default.createElement(
              CookieButton_1.default,
              {
                rootClass: props.classAcceptButton,
                clickCallback: handleAccept
              },
              props.textAcceptButton
            ),
            react_1.default.createElement(
              CookieButton_1.default,
              {
                rootClass: props.classDeclineButton,
                clickCallback: handleDecline
              },
              props.textDeclineButton
            )
          )
        )
      )
    )
  );
}
CookiePopup.defaultProps = {
  rootClass: "container mx-auto px-10",
  classAcceptButton:
    "focus:outline-none py-1 px-2 md:py-2 md:px-3 w-24 mr-2 bg-green-700 hover:bg-green-600 text-white rounded w-full text-xl",
  classDeclineButton:
    "focus:outline-none py-1 px-2 md:py-2 md:px-3 w-24 mt-8 bg-red-700 hover:bg-red-600 text-white rounded w-full text-xl",
  textAcceptButton: "Accept",
  textDeclineButton: "Deny",
  cookieNameShowed: "cookie-msg-showed",
  cookieNameAccept: "cookie-opt-in",
  cookieNameDecline: "cookie-opt-out",
  cookieValueShowed: "true",
  cookieValueAccept: "true",
  cookieValueDecline: "true",
  expires: 30,
  debug: false
};
exports.default = CookiePopup;
//# sourceMappingURL=CookiePopup.js.map
