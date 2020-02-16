"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function CookieButton(props) {
  function onClick() {
    props.clickCallback();
  }
  return react_1.default.createElement(
    "button",
    { onClick: onClick, className: props.rootClass },
    props.children
  );
}
CookieButton.defaultProps = {
  rootClass:
    "focus:outline-none py-1 px-2 md:py-2 md:px-3 w-24 mr-2 bg-gray-700 hover:bg-gray-600 text-white rounded w-full text-xl",
  clickCallback: function() {}
};
exports.default = CookieButton;
//# sourceMappingURL=CookieButton.js.map
