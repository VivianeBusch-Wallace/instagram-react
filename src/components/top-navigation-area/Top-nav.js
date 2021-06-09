import React from "react";

const element = <FontAwesomeIcon icon={faCoffee} />;

function MainNav() {
  return (
    <div className="top-nav-container">
      <div className="logo-container">{element}</div>
      <div className="searchbar-container">This is searchbar</div>
      <div className="nav-menu-container"></div>
    </div>
  );
}

export default MainNav;
