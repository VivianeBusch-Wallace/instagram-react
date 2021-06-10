// imports
import React from "react";
import ReactDOM from "react-dom";
// ReactDOM.render(element, document.body);
// importing fontawesome
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

// library.add(fab, faCheckSquare, faCoffee);
import { Beverage } from "./components/Fontawesome";

// importing top navigation
import MainNav from "./components/top-navigation-area/Top-nav";
// importing Main
import Main from "./components/main/Main";
// importing Footer
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Beverage />
      {/* <div>
        <FontAwesomeIcon icon="check-square" />
        Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
      </div>
      <FontAwesomeIcon icon="coffee" />
      <FontAwesomeIcon icon={["fas", "coffee"]} />
      <FontAwesomeIcon icon={["far", "coffee"]} />
      <FontAwesomeIcon icon={faCoffee} /> */}

      <MainNav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
