import React from "react";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = props => (
  <div>
    <Toolbar />
    <div>SideDrawer</div>
    <main className={classes.Content}>{props.children}</main>
  </div>
);

export default Layout;
