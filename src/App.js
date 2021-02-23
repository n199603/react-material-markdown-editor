import "./App.css";
import React, { Component } from "react";
import firebase from "firebase";
import Sidebar from "./Sidebar/sidebar";
import Editor from "./Editor/editor";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null,
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot((serverUpdate) => {
        const notes = serverUpdate.docs.map((_doc) => {
          const data = _doc.data();
          data["id"] = _doc.id;
          return data;
        });

        this.setState({
          notes,
        });
      });
  }

  render() {
    const { selectedNoteIndex, notes } = this.state;
    return (
      <div className="app-container">
        <Sidebar selectedNoteIndex={selectedNoteIndex} notes={notes}></Sidebar>
        <Editor></Editor>
      </div>
    );
  }
}

export default App;
