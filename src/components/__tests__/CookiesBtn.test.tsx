import React from "react";
import { render } from "@testing-library/react";
import CookiesPopup from "../CookiesPopup";
import CookiesBtn from "../CookiesBtn";

describe("<CookiesBtn />", () => {
  test("should display cookie popup without error", async () => {
    render(<CookiesBtn />);
  });
});
