import React from "react";
import "./LoadPhoto.css";
import { images } from "../../constants";

const LoadPhoto = ({ closeLoadPhoto }) => {
  return (
    <div className="container">
      <div className="load-con">
        <button className="closebtn1" onClick={() => closeLoadPhoto(false)}>
          &times;
        </button>
        <div className="warning"></div>
        <div className="area">
          <h1>!</h1>
        </div>
        <div className="text-load">
          <h3>Cannot Load Photo</h3>
          <p>There was an error loading this photo, Please try again.</p>
        </div>
      </div>
    </div>
  );
};

export default LoadPhoto;
