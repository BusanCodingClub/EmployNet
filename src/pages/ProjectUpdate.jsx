import CenteredContainer from "../components/container";
import Navbar from "../components/navbar";
import ProjectUploadForm from "../components/ProjectUploadForm";

function ProjectUpdate() {
  return (
    <CenteredContainer>
      <Navbar />
      <ProjectUploadForm isCreate={false} />
    </CenteredContainer>
  );
}

export default ProjectUpdate;
