import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import CookiesImprintBtn from "./CookiesImprintBtn";
import CookiesBtn from "./CookiesBtn";

type PopupProps = {
  class: string;
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
  expires: number;
  debug: boolean;
};

function CookiesPopup(props: React.PropsWithChildren<PopupProps>) {
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
    Cookies.set(props.cookieNameShowed, props.cookieValueShowed, {
      expires: props.expires
    });
    setPopUpCookie();
    setVisible(false);
  }

  if (!visible && !props.debug) {
    // should not render if it is not visible
    return null;
  }

  return (
    <div className={props.class} id={"cookie-popup"}>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-5">{props.children}</div>
        <div className="w-full md:w-1/2 p-5">
          <div className="flex flex-row-reverse">
            <div className="w-full md:w-1/2">
              <CookiesBtn
                class={props.classAcceptButton}
                deleteCookies={false}
                clickCallback={handleAccept}
              >
                {props.textAcceptButton}
              </CookiesBtn>
              <CookiesBtn
                class={props.classDeclineButton}
                deleteCookies={false}
                clickCallback={handleDecline}
              >
                {props.textDeclineButton}
              </CookiesBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CookiesPopup.defaultProps = {
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
  debug: false
};

export default CookiesPopup;
