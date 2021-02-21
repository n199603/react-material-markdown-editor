const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "calc(100% - 35px)",
    position: "absolute",
    left: "0",
    width: "300px",
    boxShadow: "0px 0px 2px black",
  },
  titleInput: {
    height: "50px",
    width: "100%",
    boxSizing: "border-box",
    border: "none",
    padding: "5px",
    fontSize: "24px",
    color: "#6b6567",
    borderBottom: "1px solid #ebe3dd",
    marginLeft: "2rem",
    "&:focus": {
      outline: "none",
    },
  },
  editIcon: {
    position: "absolute",
    right: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#b6b3b3",
  },
  editorContainer: {
    height: "100%",
    boxSizing: "border-box",
  },
  editorContainerHeader: {
    display: "flex",
    position: "relative",
  },
});

export default styles;
