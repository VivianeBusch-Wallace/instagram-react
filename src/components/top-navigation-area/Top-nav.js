import React from "react";

import Beverage from "../Fontawesome";

// importing Fontawesome elements
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faPaperPlane,
  faCompass,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, google } from "@fortawesome/free-brands-svg-icons";
// << this DOES NOT WORK!

function MainNav() {
  return (
    <div className="top-nav-container">
      <div className="logo-container"></div>
      <div className="searchbar-container">This is searchbar</div>
      <div className="nav-menu-container">
        <FontAwesomeIcon icon={faHome} />
        {/* <FontAwesomeIcon icon={faInstagram} /> */}
        <FontAwesomeIcon icon={google} />
      </div>
      <Beverage />
    </div>
  );
}

export default MainNav;
