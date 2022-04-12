import React from "react";
import "./SideMenu.css";

const menuToggleButton = ({ click }) => (
  <button className="toggle-button" onClick={click}>
    <div className="toggle-button-line top" />
    <div className="toggle-button-line mid" />
    <div className="toggle-button-line bot" />
  </button>
);

export default menuToggleButton;
