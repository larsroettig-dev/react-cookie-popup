import React from "react";
import { render } from "@testing-library/react";
import CookiesPopup from "../CookiesPopup";
import CookiesBtn from "../CookiesBtn";
import CookiesImprintBtn from "../CookiesImprintBtn";

describe("<CookiesImprintBtn />", () => {
  test("should display cookie popup without error", async () => {
    render(<CookiesImprintBtn />);
  });
});
