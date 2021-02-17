import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9C_3fhTQU53dbcKtynFlAwuJ4hnbseuU",
  authDomain: "react-material-markdown-editor.firebaseapp.com",
  projectId: "react-material-markdown-editor",
  storageBucket: "react-material-markdown-editor.appspot.com",
  messagingSenderId: "504712026566",
  appId: "1:504712026566:web:5a6471f8838772d73efac7",
  measurementId: "G-F45CBZGZ01",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
