import React from "react";
import CookiesPopupComponent from "../components/popup";
import { storiesOf } from "@storybook/react";

storiesOf("CookiePopUp", module).add("with active debug", () => (
  <CookiesPopupComponent debug={true}>
    <h1>Lorem ipsum dolor sit amet</h1>
    <p>
      Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
      labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
      accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
      sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
      amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
      ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
      accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
      sea takimata sanctus est Lorem ipsum dolor sit amet.
    </p>
  </CookiesPopupComponent>
));
