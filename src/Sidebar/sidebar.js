import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import SidebarItem from "../SidebarItem/sidebarItem";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Hello from Sidebar Component</div>;
  }
}

export default withStyles(styles)(Sidebar);
