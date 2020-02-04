import React from "react";

import CookieImprintButton from "../CookieImprintButton";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Cookies from "js-cookie";

Enzyme.configure({ adapter: new Adapter() });

describe("<CookieImprintButton />", () => {
  test("should display a imprint button", async () => {
    const wrapper = mount(<CookieImprintButton />);
    wrapper.find("CookieButton").simulate("click");
  });

  test("handleDecline  should work", async () => {
    const wrapper = mount(<CookieImprintButton />);
    wrapper.find("CookieButton").simulate("click");
    expect(Cookies.getJSON()).toEqual({
      "cookie-msg-showed": true,
      "cookie-opt-out": true
    });
  });

  test("handleAccept should work", async () => {
    const wrapper = mount(<CookieImprintButton />);
    wrapper.find("CookieButton").simulate("click");
    expect(Cookies.getJSON()).toEqual({
      "cookie-msg-showed": true,
      "cookie-opt-in": true
    });
  });

  test("remove underscore should work", async () => {
    const wrapper = mount(<CookieImprintButton />);
    Cookies.set("_gat_UA-132860465-3", "1", {
      domain: "." + window.location.hostname
    });
    wrapper.find("CookieButton").simulate("click");
    expect(Cookies.getJSON()).toEqual({
      "cookie-msg-showed": true,
      "cookie-opt-out": true
    });
  });
});
