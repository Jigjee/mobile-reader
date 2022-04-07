import React from "react";
import { useState } from "react";
import { images } from "../../constants";
import "./Modals.css";

const Modals = ({ closeModal }) => {
  const [toggleState, setToggleState] = useState(1);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="tabs-con">
        <div className="tabs-content">
          <button className="closebtn" onClick={() => closeModal(false)}>
            &times;
          </button>
          <div className="icon">
            <div className={click ? "menu active" : "menu"}>
              <div>
                <img
                  className="menu-link"
                  src={images.icon1}
                  alt="refresh"
                  onClick={closeMobileMenu}
                />
              </div>
              <div>
                <img
                  className="menu-link"
                  src={images.icon2}
                  alt="assignment"
                  onClick={closeMobileMenu}
                />
              </div>
              <div>
                <img
                  className="menu-link"
                  src={images.icon3}
                  alt="download"
                  onClick={closeMobileMenu}
                />
              </div>
              <div>
                <img
                  className="menu-link"
                  src={images.icon4}
                  alt="zip"
                  onClick={closeMobileMenu}
                />
              </div>
              <div>
                <img
                  className="menu-link"
                  src={images.icon5}
                  alt="assignment"
                  onClick={closeMobileMenu}
                />
              </div>
            </div>
            <div className="mobile-menu" onClick={handleClick}>
              {click ? (
                <img className="menu-link" src={images.icon5} />
              ) : (
                <img className="menu-link" src={images.othbtn} />
              )}
            </div>
          </div>
          <div className="bloc-tabs">
            <div className="tabs-bar">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Result
              </button>
              <button
                href="#"
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Response
              </button>
            </div>
          </div>

          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <div className="result-con">
                <div className="result-con-l">
                  <div className="con-l-1">
                    <table className="table-1">
                      <thead>
                        <tr>
                          <th>Processing time : </th>
                          <th>0.256s</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Upload/Download : </td>
                          <td className="child">1.637s</td>
                        </tr>
                        <tr>
                          <td>Total time : </td>
                          <td className="child">1.893s </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="con-l-2">
                    <div>
                      <h1>Portrait</h1>
                      <img className="face" src={images.face2} alt="face" />
                    </div>
                  </div>
                  <div className="con-l-3">
                    <h1>Cropped image</h1>
                    <img
                      className="crop-img"
                      src={images.passport2}
                      alt="passport5"
                    />
                  </div>
                </div>
                <div className="result-con-r">
                  <div className="res_content">
                    <h4>Personal Information</h4>
                    <div className="content-r">
                      <label for="title" className="form-label">
                        Title
                      </label>
                      <select name="title" className="box-drop-1">
                        <option>Mr.</option>
                        <option>Ms.</option>
                        <option>Mrs.</option>
                      </select>
                    </div>
                    <div className="content-r">
                      <label for="firstname" className="form-label">
                        First Name
                      </label>
                      <input type="text" placeholder="KARA" className="box-r" />
                    </div>
                    <div className="content-r">
                      <label for="lastname" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="YUN EN"
                        className="box-r"
                      />
                    </div>
                    <div className="content-r">
                      <label for="dateofbirth" className="form-label">
                        Date of Birth
                      </label>
                      <input
                        type="text"
                        placeholder="30 MAY 1997"
                        className="box-r"
                      />
                    </div>
                    <div className="content-r">
                      <label for="nationality" className="form-label">
                        Nationality
                      </label>
                      <select name="nationality" className="box-drop">
                        <option>SINGAPORE</option>
                        <option>INDONESIA</option>
                        <option>THAILAND</option>
                      </select>
                    </div>
                    <div className="content-r">
                      <label for="passno." className="form-label">
                        Passport No.
                      </label>
                      <input
                        type="text"
                        placeholder="K00000000E"
                        className="box-r"
                      />
                    </div>
                    <div className="content-r">
                      <label for="expdate" className="form-label">
                        Passport Expiration Date
                      </label>
                      <input
                        type="text"
                        placeholder="30 OCT 2022"
                        className="box-r"
                      />
                    </div>
                    <div className="content-r">
                      <label for="country" className="form-label">
                        Country
                      </label>
                      <select name="nationality" className="box-drop">
                        <option>SINGAPORE</option>
                        <option>INDONESIA</option>
                        <option>THAILAND</option>
                      </select>
                    </div>
                    <div className="content-r">
                      <label for="email" className="form-label">
                        E-mail Address
                      </label>
                      <input
                        type="email"
                        placeholder="E-mail Address"
                        className="box-r"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
