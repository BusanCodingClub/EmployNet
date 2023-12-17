import { Link } from "react-router-dom";
import CenteredContainer from "../components/container";
import Navbar from "../components/navbar";

function Project() {
  return (
    <CenteredContainer>
      <Navbar />
      <ul>
        <li className="mb-0 mt-6 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
          <Link to="/projects/detail">1번 게시글</Link>
        </li>
      </ul>
    </CenteredContainer>
  );
}

export default Project;
