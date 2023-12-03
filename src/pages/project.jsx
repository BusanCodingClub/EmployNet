import { Link } from "react-router-dom";
import CenteredContainer from "../components/container";
import Navbar from "../components/navbar";

function Project() {
  return (
    <CenteredContainer>
      <Navbar />
      <ul>
        <li>
          <Link to="/projects/detail">1번 게시글</Link>
        </li>
      </ul>
    </CenteredContainer>
  );
}

export default Project;
