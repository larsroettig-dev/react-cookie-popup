import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Cookies from "js-cookie";

import CookiePopup from "../CookiePopup";

Enzyme.configure({ adapter: new Adapter() });

describe("<CookiePopup/>", () => {
  test("should display a popup without an error", async () => {
    let cookiePopup = mount(
      <CookiePopup>
        <h1>Simple Pop Up</h1>
      </CookiePopup>
    );
    expect(cookiePopup.text()).toContain("Simple Pop Up");
  });

  test("should not display a popup", async () => {
    Cookies.set("no_display_cookie", "true");
    let cookiePopup = mount(
      <CookiePopup cookieNameShowed={"no_display_cookie"}>
        <h1>Simple Pop Up</h1>
      </CookiePopup>
    );
    expect(cookiePopup.text()).toEqual("");
  });

  test("handleAccept", async () => {
    let cookiePopup = mount(
      <CookiePopup cookieNameShowed={"handleAccept"}>
        <h1>Simple Pop Up</h1>
      </CookiePopup>
    );
    cookiePopup.find(".bg-green-700").simulate("click");
    expect(cookiePopup.prop("visible")).toBeFalsy();
  });

  test("handleDecline", async () => {
    let cookiePopup = mount(
      <CookiePopup cookieNameShowed={"handleDecline"}>
        <h1>Simple Pop Up</h1>
      </CookiePopup>
    );
    cookiePopup.find(".bg-red-700").simulate("click");
    expect(cookiePopup.prop("visible")).toBeFalsy();
  });
});
