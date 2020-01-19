import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import CookiesPopup from "./CookiesPopup";

declare type CookiesBtnClickCallback = () => void;

type CookiesBtnProps = {
  class: string;
  deleteCookies: boolean;
  clickCallback: CookiesBtnClickCallback;
};

function CookiesBtn(props: React.PropsWithChildren<CookiesBtnProps>) {
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

  function onClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (props.deleteCookies) {
      deleteAllCookies();
    }

    props.clickCallback();
  }

  return (
    <button onClick={onClick} className={props.class}>
      {props.children}
    </button>
  );
}

CookiesBtn.defaultProps = {
  class:
    "focus:outline-none py-1 px-2 md:py-2 md:px-3 w-24 mr-2 bg-gray-700 hover:bg-gray-600 text-white rounded w-full text-xl",
  deleteCookies: true,
  clickCallback: function() {}
};

export default CookiesBtn;
