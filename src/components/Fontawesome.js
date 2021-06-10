// import ReactDOM from "react-dom";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// library.add(faCheckSquare, faCoffee);

export const Beverage = () => (
  <div>
    <FontAwesomeIcon icon="check-square" />
    <FontAwesomeIcon icon={faCheckSquare} />
    Your <FontAwesomeIcon icon={faCoffee} /> is hot and ready!
  </div>
);
