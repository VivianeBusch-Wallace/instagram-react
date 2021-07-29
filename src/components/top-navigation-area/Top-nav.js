import React from "react";

// importing Fontawesome elements
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPaperPlane,
  faCompass,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

function MainNav() {
  return (
    <div className="top-nav-container">
      <div className="logo-container">InstagramLogo</div>
      <div className="searchbar-container">
        <input type="text" placeholder="Search" className="searchbar" />
      </div>
      <div className="nav-menu-container">
        <a href="#Home" className="home-icon-link">
          <FontAwesomeIcon icon={faHome} className="fi home-icon" />
        </a>
        <a href="#Messages" className="paper-plane-icon-link">
          <FontAwesomeIcon icon={faPaperPlane} className="fi messages-icon" />
        </a>
        <a href="#Explore" className="compass-icon-link">
          <FontAwesomeIcon icon={faCompass} className="fi explore-icon" />
        </a>
        <a href="#AccountActivity" className="heart-icon-link">
          <FontAwesomeIcon icon={faHeart} className="fi activity-icon" />
        </a>
        <a href="#User" className="user-profile-pic">
          UserIcon
          <img
            src="./images/insta-profile-pic-cropped.png"
            alt="user-profile-pic"
            className="user-profile-pic"
          />
        </a>
      </div>
    </div>
  );
}

export default MainNav;
