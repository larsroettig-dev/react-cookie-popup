import React from "react";
import PopupComponent from "./components/popup";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div className="bg-gray-900 flex items-center justify-center h-screen">
        <section className="bg-gray-300  border-b py-8">
          <div className="container max-w-5xl mx-auto m-8">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              Title
            </h1>
            <div className="flex flex-wrap">
              <div className="w-5/6 sm:w-1/2 p-6">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Lorem ipsum dolor sit amet
                </h3>
                <p className="text-gray-600 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className={"w-full z-40 mx-auto px-10 fixed bg-white-95 rounded"}>
          <PopupComponent>
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
                2. "evil" tracking cookies from Google Analytics (IPs
                anonymized, of course) sometimes combined with "Optimize A/B
                Testing", so that we can adapt our website to your needs
              </p>

              <p>
                As long as you don't press "accept", I do not track you.
                Promise!
                <br />
                <br />
              </p>
            </section>
          </PopupComponent>
        </div>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
