import React from "react";
import "./HeaderBanner.css";
import headerimg from "../../images/header.svg";
const HeaderBanner = () => {
  return (
    <div className="layout">
      <div className="Header-banner-container ">
        <div className="banner-Content">
          <div className="left">
            <h3>Build your library</h3>
            <br />
            <h6>Buy two selected books and get one for free</h6>
            <a href="#">
              <button type="button">View all </button>
            </a>
          </div>
          <div className="right">
            <img className="headerimg" src={headerimg} alt="headerimg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
