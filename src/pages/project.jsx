import { useEffect, useState } from "react";
import CenteredContainer from "../components/container";
import Navbar from "../components/navbar";
import ProjectList from "../components/projectList";
import { API_URL, axiosInstance } from "../stores/API";

function Project() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axiosInstance.get(API_URL.PROJECTS).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  return (
    <CenteredContainer>
      <Navbar />
      <div className="container mx-auto p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data ? data.projects.map((item) => {
            return <ProjectList project={item} key={item.postId} />
          }): null}
        </div>
      </div>
      <div>

      </div>

    </CenteredContainer>
  );
}

export default Project;
