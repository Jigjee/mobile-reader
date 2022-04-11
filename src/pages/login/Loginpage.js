import React, { useState, useEffect, useRef } from "react";

import { images } from "../../constants";
import Modals from "../modal/Modals";
import Menu from "../menu/Menu";
import ReactModal from "react-modal";
import LoadPhoto from "../loadphoto/LoadPhoto";
import "./Loginpage.css";

const Loginpage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openLoadPhoto, setLoadPhoto] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenuLogin, setMenuLogin] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  const MODAL_STYLE = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      padding: 0,
      backgroundColor: "rgba(20, 20, 20, 0.5)",
    },
    content: {
      height: 750,
      margin: "45px -20px",
    },
  };
  return (
    <div className="container">
      <div className="header-con">
        <div className="logo">
          <img src={images.logo} alt="logo" />
        </div>
        <div className="hamberger">
          <img
            src={images.hamberger}
            alt="hamberger"
            onClick={() => {
              setMenuLogin(true);
            }}
          />
        </div>

        <div className="header-btn">
          <a href="#" className="btn-l">
            Login
          </a>
          <a href="#" className="btn-r">
            Register
          </a>
        </div>
      </div>

      {openMenuLogin && <Menu closeMenuLogin={setMenuLogin} />}

      <ReactModal
        isOpen={isOpen}
        contentLabel={"PodoModal"}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setIsOpen(false)}
        style={MODAL_STYLE}
      >
        <Modals closeModal={setIsOpen} />
      </ReactModal>
      {openLoadPhoto && <LoadPhoto closeLoadPhoto={setLoadPhoto} />}
      <div className="content-con">
        <div className="content-top">
          <img src={images.frame} alt="frame" />
        </div>

        <div className="content-btm">
          <h1>
            Passport OCR
            <br />
            Document Reader
          </h1>
          <p>
            Fast and accurate data extraction from identity documents <br />
            On-premise and cloud integration.
          </p>
        </div>
        <div className="content-btn">
          <button className="photo-btn">
            <img src={images.camera} alt="camera" />
          </button>
          <button
            className="load-btn"
            onClick={() => {
              setLoadPhoto(true);
            }}
          >
            <img src={images.upload} alt="upload" />
          </button>
          <div className="inform">
            <div className="inform-1">
              <input type="text" placeholder="   Use Image URL" />
              <button className="inform-btn" onClick={toggleModal}>
                <img src={images.slidebtn} alt="slidebtn" />
              </button>
            </div>
            <p>or drag & drop your image</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
