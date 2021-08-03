import React from "react";

function Main() {
  return (
    <section className="main">
      <div className="account-container">
        <div className="account-profile-pic-container">
          <img
            className="account-profile-pic"
            src="./images/insta-profile-pic.png"
            alt="account profile image"
          />
        </div>

        <div className="account-information-container">
          <div className="account-name-actions"></div>
          <div className="account-data"></div>
          <div className="account-bio"></div>
        </div>

        <div className="stories-container">
          <div className="story-container">
            <img
              className="story-image"
              alt="story image"
              src="./images/insta-profile-pic.png"
            />
            <h3 className="story-title">Newest Story</h3>
          </div>
          <div className="story-container">
            <img
              className="story-image"
              alt="story image"
              src="./images/insta-profile-pic.png"
            />
            <h3 className="story-title">Nova</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
