import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ListItem from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";

class SidebarItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Hello from SidebarItem Component</div>;
  }
}

export default withStyles(styles)(SidebarItem);
