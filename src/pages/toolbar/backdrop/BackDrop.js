import React from "react";
import "./BackDrop.css";

const backdrop = ({ click }) => (
  <div className="backdrop" onClick={click}>
    <ul className="backdrop-btn">
      <li className="btn-l-4">
        <a href="#">Login</a>
      </li>
      <li className="btn-r-4">
        <a href="#">Register</a>
      </li>
    </ul>
    <p>Login & Register</p>
  </div>
);

export default backdrop;
