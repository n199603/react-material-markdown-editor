import React, { Component } from "react";
import { ReactQuill } from "react-quill";
import _ from "lodash";
import BorderColorIcon from "@material-ui/icons/BorderItem";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class Editor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Hello from Editor Component</div>;
  }
}

export default withStyles(styles)(Editor);
