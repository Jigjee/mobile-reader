import React from "react";
import "./SideDrawer.css";

const sideDrawer = ({ show }) => {
  let drawerClasses = ["side-drawer"];

  if (show) {
    drawerClasses = ["side-drawer", "open"];
  }
  //TODO: Implement list of options here when in mobile mode
  return <nav className={drawerClasses.join(" ")} />;
};
export default sideDrawer;
