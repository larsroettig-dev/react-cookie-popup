import React from "react";
import { storiesOf } from "@storybook/react";
import CookiesPopup from "../components/CookiesPopup";
import CookiesBtn from "../components/CookiesBtn";
import CookiesImprintBtn from "../components/CookiesImprintBtn";

storiesOf("CookiePopUp", module).add("fully styled demo", () => (
  <div className="bg-gray-900 flex items-center justify-center h-screen">
    <div className="bg-gray-900 flex items-center justify-center h-screen">
      <section className="bg-gray-300  border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Title
          </h1>
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6 mx-auto">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
              <CookiesBtn
                clickCallback={function() {
                  document.location.reload(true);
                }}
              >
                Delete All Cookie
              </CookiesBtn>
            </div>
          </div>
        </div>
      </section>

      <div className={"w-full z-40 mx-auto px-10 fixed bg-white-95 rounded"}>
        <CookiesPopup>
          <section>
            <h4 className="py-5 text-xl font-text-teal-800">
              HEY - ANOTHER MESSAGE. AND GUESS WHAT?
            </h4>

            <p>
              You were right. This website uses cookies, and I are obliged to
              inform you about:
            </p>

            <p>
              1. technically necessary cookies
              <br />
              2. "evil" tracking cookies from Google Analytics (IPs anonymized,
              of course) sometimes combined with "Optimize A/B Testing", so that
              we can adapt our website to your needs
            </p>

            <p>
              As long as you don't press "accept", I do not track you. Promise!
              <br />
              <br />
            </p>
          </section>
        </CookiesPopup>
      </div>
    </div>
  </div>
));

storiesOf("CookieBtn", module).add("fully styled demo", () => (
  <div className="bg-gray-900 flex items-center justify-center h-screen">
    <section className="bg-gray-300 border-b p-20 mx-20">
      <div className="container max-w-5xl mx-auto mx-20">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Delete All Cookies
        </h1>
        <p className={"p-10"} />
        <CookiesBtn
          deleteCookies={true}
          clickCallback={function() {
            alert("My CallBackFunction");
          }}
        >
          Delete All Cookies
        </CookiesBtn>
      </div>
    </section>
  </div>
));

storiesOf("CookiesImprintBtn", module).add("fully styled demo", () => (
  <div className="bg-gray-900 flex items-center justify-center h-screen">
    <section className="bg-gray-300 border-b p-20 mx-20">
      <div className="container max-w-5xl mx-auto mx-20">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 p-5 my-2">
          Imprint Demo
        </h1>
        <p className="text-xl m-5">
          {" "}
          You may delete these cookies again via your browser settings at any
          time.{" "}
        </p>
        <CookiesImprintBtn
          textAcceptButton={"Accept all Cookies"}
          textDeclineButton={"Decline all Cookies"}
        />
      </div>
    </section>
  </div>
));
