import React from "react";
import { useState } from "react";
import { Loginpage } from "./pages";
import Modal from "react-modal";

Modal.setAppElement("#root");

const App = () => {
  return (
    <div className="App">
      <Loginpage />
    </div>
  );
};

export default App;
