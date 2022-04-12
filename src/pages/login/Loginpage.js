import React, { useState, useEffect, useRef } from "react";

import { images } from "../../constants";
import Modals from "../modal/Modals";
import Toolbar from "../toolbar/Toolbar";
import SideMenu from "../toolbar/sidemenu/SideMenu";
import SideDrawer from "../toolbar/sidemenu/SideDrawer";
import BackDrop from "../toolbar/backdrop/BackDrop";
import ReactModal from "react-modal";
import LoadPhoto from "../loadphoto/LoadPhoto";
import "./Loginpage.css";

const Loginpage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openLoadPhoto, setLoadPhoto] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((s) => !s);
  };

  const backDropClickHandler = () => {
    setSideDrawerOpen(false);
  };

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
      <div style={{ height: "100%" }}>
        <Toolbar drawerToggleClickHandler={drawerToggleClickHandler} />

        <SideDrawer show={sideDrawerOpen} />
        {sideDrawerOpen && <BackDrop click={backDropClickHandler} />}
      </div>

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
