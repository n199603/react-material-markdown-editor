import React, { Component } from "react";
import ReactQuill from "react-quill";
import _ from "lodash";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      titile: "",
      id: "",
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.editorContainer}>
        <ReactQuill></ReactQuill>
      </div>
    );
  }
}

export default withStyles(styles)(Editor);
