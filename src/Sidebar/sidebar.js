import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import SidebarItem from "../SidebarItem/sidebarItem";

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addingNote: false,
      title: null,
    };
  }

  newNoteBtnClick = () => {
    console.log("New Note!");
  };

  render() {
    const { classes, notes, selectedNoteIndex } = this.props;
    const { addingNote } = this.state;

    return (
      <div className={classes.sidebarContainer}>
        {addingNote ? (
          <div>
            <input
              type="text"
              className={classes.newNoteInput}
              placeholder="note title"
              onKeyUp={(e) => this.updateTitle(e.target.value)}
            />
          </div>
        ) : null}
        <Button onClick={this.newNoteBtnClick} className={classes.newNoteBtn}>
          New Note
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Sidebar);
