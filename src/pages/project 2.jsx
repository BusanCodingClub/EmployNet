import CenteredContainer from "../components/container";
import Navbar from "../components/navbar";

function Project() {
  return (
    <CenteredContainer>
      <Navbar />
      <ul>
        <li>
          <a href="/projects/detail">1번 게시글</a>
        </li>
      </ul>
    </CenteredContainer>
  );
}

export default Project;
