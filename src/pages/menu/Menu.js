import React from "react";
import "./Menu.css";

const Menu = ({ closeMenuLogin }) => {
  return (
    <div className="container">
      <div className="menu-con">
        <div className="closebtn-1">
          <button onClick={() => closeMenuLogin(false)}>X</button>
        </div>
        <ul className="menu-con-btn">
          <li>
            <button href="#" className="btn-l-1">
              Login
            </button>
          </li>
          <li>
            <button href="#" className="btn-r-2">
              Register
            </button>
          </li>
        </ul>
        <p>login & Register</p>
      </div>
    </div>
  );
};

export default Menu;
