import React from "react";
import SideMenu from "./sidemenu/SideMenu";
import { images } from "../../constants";
import "./Toolbar.css";

const toolbar = ({ drawerToggleClickHandler }) => (
  <header className="toolbar">
    <nav className="toolbar_navigator">
      <div />

      <div className="toolbar_logo">
        <img src={images.logo} alt="logo" />
      </div>
      <div className="toggle-btn">
        <SideMenu click={drawerToggleClickHandler} />
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li className="btn-l-3">
            <a href="#">Login</a>
          </li>
          <li className="btn-r-3">
            <a href="#">Register</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
