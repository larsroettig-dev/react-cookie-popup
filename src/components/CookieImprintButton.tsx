import React, { useEffect, useState } from "react";
import CookieButton from "./CookieButton";
import Cookies from "js-cookie";

type CookiePopupProps = {
  classAcceptButton: string;
  classDeclineButton: string;
  textAcceptButton: string;
  textDeclineButton: string;
  cookieNameShowed: string;
  cookieNameAccept: string;
  cookieNameDecline: string;
  cookieValueShowed: string;
  cookieValueAccept: string;
  cookieValueDecline: string;
  shouldShowPopUp: boolean;
  expires: number;
};

function CookieImprintButton(props: React.PropsWithChildren<CookiePopupProps>) {
  const [acceptVisible, setAcceptVisible] = useState(false);

  useEffect(() => {
    if (Cookies.get(props.cookieNameAccept) === props.cookieValueAccept) {
      setAcceptVisible(false);
    } else {
      setAcceptVisible(true);
    }
  }, [props.cookieNameAccept, props.cookieValueAccept]);

  function setPopUpCookie() {
    if (!props.shouldShowPopUp) {
      Cookies.set(props.cookieNameShowed, props.cookieValueShowed, {
        expires: props.expires
      });
    }
  }

  function deleteAllCookies() {
    const domain = "." + window.location.hostname;
    Object.keys(Cookies.get()).forEach(function(cookieName) {
      if (cookieName.indexOf("_") !== -1) {
        Cookies.remove(cookieName, { domain: domain });
      } else {
        Cookies.remove(cookieName);
      }
    });
  }

  function handleAccept() {
    deleteAllCookies();
    setPopUpCookie();
    Cookies.set(props.cookieNameAccept, props.cookieValueAccept, {
      expires: props.expires
    });
    setAcceptVisible(false);
  }

  function handleDecline() {
    deleteAllCookies();
    setPopUpCookie();
    Cookies.set(props.cookieNameDecline, props.cookieValueDecline, {
      expires: props.expires
    });

    setAcceptVisible(true);
  }

  if (acceptVisible) {
    return (
      <CookieButton
        class={props.classAcceptButton}
        clickCallback={handleAccept}
      >
        {props.textAcceptButton}
      </CookieButton>
    );
  }

  return (
    <CookieButton
      class={props.classDeclineButton}
      clickCallback={handleDecline}
    >
      {props.textDeclineButton}
    </CookieButton>
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

export default CookieImprintButton;
