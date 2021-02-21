const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "calc(100% - 35px)",
    position: "absolute",
    left: "0",
    width: "300px",
    boxShadow: "0px 0px 2px black",
  },
  newChatBtn: {
    borderRadius: "0px",
  },
  unreadMessage: {
    color: "red",
    position: "absolute",
    top: "0",
    right: "5px",
  },
  newNoteBtn: {
    width: "100%",
    borderRadius: "0px",
    color: "#f0a27b",
    padding: "1rem",
    justifyContent: "start",
  },
  newNoteBorder: {
    display: "inline-block",
    borderTop: "1px solid #f0eee9",
    marginLeft: ".8rem",
    marginRight: ".8rem",
    width: "calc(100% - 1.6rem)",
  },
  newNoteBtnIcon: {
    marginRight: "10px",
    fontSize: "1.2rem",
  },
  sidebarContainer: {
    marginTop: "0px",
    width: "300px",
    height: "100%",
    boxSizing: "border-box",
    float: "left",
    overflowY: "scroll",
    overflowX: "hidden",
    backgroundColor: "#fffcfa",
    borderTopLeftRadius: "0.3rem",
    borderBottomLeftRadius: "0.3rem",
  },
  sidebarTitle: {
    fontSize: ".9rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingTop: "2rem",
    color: "#d3d0ce",
  },
  newNoteInput: {
    width: "100%",
    margin: "0px",
    outline: "none",
    border: "none",
    padding: "1rem",
    fontSize: "1rem",
    boxSizing: "border-box",
    "&:focus": {
      outline: "none",
    },
    "&::placeholder": {
      color: "#d3d0ce",
    },
  },
  newNoteSubmitBtn: {
    width: "100%",
    borderRadius: "0px",
    color: "#f0a27b",
    backgroundColor: "#fff",
    justifyContent: "start",
    padding: "1rem",
  },
});

export default styles;
