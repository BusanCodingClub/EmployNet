import CenteredContainer from "../components/container";
import Navbar from "../components/navbar";
import ProjectUploadForm from "../components/ProjectUploadForm";

function ProjectCreate() {
  return (
    <CenteredContainer>
      <Navbar />
      <ProjectUploadForm isCreate={true} />
    </CenteredContainer>
  );
}

export default ProjectCreate;
