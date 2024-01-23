const CenteredContainer = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        //alignItems: "center",
        margin: "0 auto",
        padding: "0",
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* <div
        style={{
          minHeight: "100vh",
          maxWidth: "100vw",
          width: "100%",
          margin: "0 auto",
          backgroundColor: "#fff",
        }}
      > */}
      {children}
      {/* </div> */}
    </div>
  );
};

export default CenteredContainer;
