import React, { Component, ReactChild } from "react";
import Cookies from "js-cookie";

type PopupState = {
  visible: boolean;
};

type PopupProps = {
  class: string;
  classAcceptButton: string;
  classDeclineButton: string;
  textAcceptButton: string;
  textDeclineButton: string;
  cookieNameShowed: string;
  cookieNameAccept: string;
  cookieNameDecline: string;
  cookieValueShowed: string;
  cookieValueAccept: string;
  cookieValueDecline: string;
  expires: number;
  debug: boolean;
  children?: ReactChild;
};

const initialState = () => {
  return {
    visible: false
  };
};

export class CookiesPopupComponent extends Component<
  PopupProps,
  PopupState,
  {}
> {
  static defaultProps = {
    debug: false,
    class: "container mx-auto px-10",
    classAcceptButton:
      "focus:outline-none py-1 px-2 md:py-2 md:px-3 w-24 mr-2 bg-green-700 hover:bg-green-600 text-white rounded w-full text-xl",
    classDeclineButton:
      "focus:outline-none py-1 px-2 md:py-2 md:px-3 w-24 bg-red-700 hover:bg-red-600 text-white rounded w-full text-xl mt-8 ",
    textAcceptButton: "Accept",
    textDeclineButton: "Deny",
    cookieNameShowed: "cookie-msg-showed",
    cookieNameAccept: "cookie-opt-in",
    cookieNameDecline: "cookie-opt-out",
    cookieValueShowed: "true",
    cookieValueAccept: "true",
    cookieValueDecline: "true",
    expires: 30
  };

  state = initialState();

  componentDidMount() {
    if (Cookies.get(this.props.cookieNameShowed) === undefined) {
      this.setState({ visible: true });
    }
  }

  handleAccept(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    Cookies.set(this.props.cookieNameShowed, this.props.cookieValueShowed, {
      expires: this.props.expires
    });
    Cookies.set(this.props.cookieNameAccept, this.props.cookieValueAccept, {
      expires: this.props.expires
    });
    this.setState({ visible: false });
  }

  handleDecline(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    Cookies.set(this.props.cookieNameShowed, this.props.cookieValueShowed, {
      expires: this.props.expires
    });
    Cookies.set(this.props.cookieNameDecline, this.props.cookieValueDecline, {
      expires: this.props.expires
    });
    this.setState({ visible: false });
  }

  render() {
    if (!this.state.visible && !this.props.debug) {
      // should not render if it is not visible
      return null;
    }

    return (
      <div className={this.props.class} id={"cookie-popup"}>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-5">{this.props.children}</div>
          <div className="w-full md:w-1/2 p-5">
            <div className="flex flex-row-reverse">
              <div className="w-full md:w-1/2">
                <button
                  className={this.props.classAcceptButton}
                  onClick={this.handleAccept.bind(this)}
                >
                  {this.props.textAcceptButton}
                </button>
                <button
                  className={this.props.classDeclineButton}
                  onClick={this.handleDecline.bind(this)}
                >
                  {this.props.textDeclineButton}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CookiesPopupComponent;
