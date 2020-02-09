import React from "react";
function CookieButton(props) {
  function onClick() {
    props.clickCallback();
  }
  return React.createElement(
    "button",
    { onClick: onClick, className: props.class },
    props.children
  );
}
CookieButton.defaultProps = {
  class:
    "focus:outline-none py-1 px-2 md:py-2 md:px-3 w-24 mr-2 bg-gray-700 hover:bg-gray-600 text-white rounded w-full text-xl",
  clickCallback: function() {}
};
export default CookieButton;
//# sourceMappingURL=CookieButton.js.map
