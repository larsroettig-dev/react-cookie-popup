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
var CookieButton_1 = __importDefault(require("./CookieButton"));
var js_cookie_1 = __importDefault(require("js-cookie"));
function CookieImprintButton(props) {
  var _a = react_1.useState(false),
    acceptVisible = _a[0],
    setAcceptVisible = _a[1];
  react_1.useEffect(
    function() {
      if (
        js_cookie_1.default.get(props.cookieNameAccept) ===
        props.cookieValueAccept
      ) {
        setAcceptVisible(false);
      } else {
        setAcceptVisible(true);
      }
    },
    [props.cookieNameAccept, props.cookieValueAccept]
  );
  function setPopUpCookie() {
    if (!props.shouldShowPopUp) {
      js_cookie_1.default.set(props.cookieNameShowed, props.cookieValueShowed, {
        expires: props.expires
      });
    }
  }
  function deleteAllCookies() {
    var domain = "." + window.location.hostname;
    Object.keys(js_cookie_1.default.get()).forEach(function(cookieName) {
      if (cookieName.indexOf("_") !== -1) {
        js_cookie_1.default.remove(cookieName, { domain: domain });
      } else {
        js_cookie_1.default.remove(cookieName);
      }
    });
  }
  function handleAccept() {
    deleteAllCookies();
    setPopUpCookie();
    js_cookie_1.default.set(props.cookieNameAccept, props.cookieValueAccept, {
      expires: props.expires
    });
    setAcceptVisible(false);
  }
  function handleDecline() {
    deleteAllCookies();
    setPopUpCookie();
    js_cookie_1.default.set(props.cookieNameDecline, props.cookieValueDecline, {
      expires: props.expires
    });
    setAcceptVisible(true);
  }
  if (acceptVisible) {
    return react_1.default.createElement(
      CookieButton_1.default,
      { class: props.classAcceptButton, clickCallback: handleAccept },
      props.textAcceptButton
    );
  }
  return react_1.default.createElement(
    CookieButton_1.default,
    { class: props.classDeclineButton, clickCallback: handleDecline },
    props.textDeclineButton
  );
}
CookieImprintButton.defaultProps = {
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
  shouldShowPopUp: false,
  expires: 30
};
exports.default = CookieImprintButton;
//# sourceMappingURL=CookieImprintButton.js.map
