import React from "react";
import { render } from "@testing-library/react";
import CookiesPopup from "../CookiesPopup";

describe("<CookiesPopup />", () => {
  test("should display cookie popup without error", async () => {
    render(<CookiesPopup />);
  });
});
