import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import CookiesButton from "./CookieButton";
function CookiePopup(props) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (Cookies.get(props.cookieNameShowed) === undefined) {
      setVisible(true);
    }
  }, [props.cookieNameShowed]);
  function setPopUpCookie() {
    Cookies.set(props.cookieNameShowed, props.cookieValueShowed, {
      expires: props.expires
    });
  }
  function handleAccept() {
    Cookies.set(props.cookieNameAccept, props.cookieValueAccept, {
      expires: props.expires
    });
    setPopUpCookie();
    setVisible(false);
  }
  function handleDecline() {
    Cookies.set(props.cookieNameDecline, props.cookieValueDecline, {
      expires: props.expires
    });
    setPopUpCookie();
    setVisible(false);
  }
  if (!visible && !props.debug) {
    return null;
  }
  return React.createElement(
    "div",
    { className: props.rootClass, id: "cookie-popup" },
    React.createElement(
      "div",
      { className: "flex flex-wrap" },
      React.createElement(
        "div",
        { className: "w-full md:w-1/2 p-5" },
        props.children
      ),
      React.createElement(
        "div",
        { className: "w-full md:w-1/2 p-5" },
        React.createElement(
          "div",
          { className: "flex flex-row-reverse" },
          React.createElement(
            "div",
            { className: "w-full md:w-1/2" },
            React.createElement(
              CookiesButton,
              {
                rootClass: props.classAcceptButton,
                clickCallback: handleAccept
              },
              props.textAcceptButton
            ),
            React.createElement(
              CookiesButton,
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
export default CookiePopup;
//# sourceMappingURL=CookiePopup.js.map
