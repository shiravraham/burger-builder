import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = props => {
  let classesli = [classes.SideDrawer, classes.Close];
  if (props.show) {
    classesli = [classes.SideDrawer, classes.Open];
  }

  return (
    <div>
      <Backdrop show={props.show} clicked={props.closed}></Backdrop>
      <div className={classesli.join(" ")}>
        <div className={classes.Logo}>
          <Logo></Logo>
        </div>
        <nav>
          <NavigationItems></NavigationItems>
        </nav>
      </div>
    </div>
  );
};

export default sideDrawer;
