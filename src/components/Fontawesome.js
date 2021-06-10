// import ReactDOM from "react-dom";
import React from "react";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

// library.add(faCheckSquare, faCoffee);

const Beverage = () => (
  <div>
    <FontAwesomeIcon icon={faCheckSquare} />
    Your <FontAwesomeIcon icon={faCoffee} /> is hot and ready!
  </div>
);
export default Beverage;
