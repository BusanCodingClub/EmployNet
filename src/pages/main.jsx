import CenteredContainer from "../components/container";
import Navbar from "../components/navbar";

const Introduction = () => {
  return (
    <div
      style={{
        padding: "0 10px",
      }}
    >
      <h2>Welcome to Employnet</h2>
      <p>This is a platform to connect employers and job seekers.</p>
    </div>
  );
};

const MainPage = () => {
  return (
    <CenteredContainer>
      <Navbar />
      <Introduction />
    </CenteredContainer>
  );
};

export default MainPage;
