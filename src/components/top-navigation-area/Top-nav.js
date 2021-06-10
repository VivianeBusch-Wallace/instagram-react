import React from "react";

// import Beverage from "../Fontawesome";

// importing Fontawesome elements
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPaperPlane,
  faCompass,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
// import { faInstagram, faGoogle } from "@fortawesome/free-brands-svg-icons";
// << this only works now because of another installed package

function MainNav() {
  return (
    <div className="top-nav-container">
      <div className="logo-container"></div>
      <div className="searchbar-container">This is a searchbar</div>
      <div className="nav-menu-container">
        <a href="#Home" className="home-icon-link">
          <FontAwesomeIcon icon={faHome} />
        </a>
        <a href="#Messages" className="paper-plane-icon-link">
          <FontAwesomeIcon icon={faPaperPlane} />
        </a>
        <a href="#Explore" className="compass-icon-link">
          <FontAwesomeIcon icon={faCompass} />
        </a>
        <a href="#AccountActivity" className="heart-icon-link">
          <FontAwesomeIcon icon={faHeart} />
        </a>
        <a href="#User" className="user-profile-pic">
          User
        </a>
      </div>
      {/* <Beverage /> */}
    </div>
  );
}

export default MainNav;
