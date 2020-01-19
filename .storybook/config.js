import { configure } from "@storybook/react";
import "./css/main.css";

function loadStories() {
  require("../src/stories");
}

configure(loadStories, module);
