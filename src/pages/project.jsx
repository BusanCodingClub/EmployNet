import { Link } from "react-router-dom";
import CenteredContainer from "../components/container";
import Navbar from "../components/navbar";
import data from "../stores/NEW_DATA.json";
import ProjectList from "../components/ProjectList";
import { USERS_DATA } from '../stores/mockData';

function Project() {
  return (
    <CenteredContainer>
      <Navbar />
      <h1>Project Page</h1>
      {/* <ul>
        <li>
          <Link to="/projects/detail">1번 게시글</Link>
        </li>
      </ul> */}
      <div className="container mx-auto p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.projects.map((item,idx)=>{
            return <ProjectList project={item} />
          })}
        </div>
      </div>
      <div>
      
      </div>
      
    </CenteredContainer>
  );
}

export default Project;
