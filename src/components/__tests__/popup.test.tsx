import React from "react";
import { render } from "@testing-library/react";
import CookiesPopupComponent from "../popup";

describe("<CookiesPopupComponent />", () => {
  test("should display cookie popup without error", async () => {
    render(<CookiesPopupComponent />);
  });
});
