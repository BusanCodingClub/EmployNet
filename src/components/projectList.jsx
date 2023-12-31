import data from "../stores/NEW_DATA.json";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { API_URL } from "../stores/API";

function ProjectList({ project }) {
  return (
    <div className="border p-4 rounded-lg shadow flex flex-col items-center">
      <Link to={`/${API_URL.PROJECTS}/${project.postId}`}>
        <p className="text-lg">{project.title}</p>
      </Link>
      <div className="flex">
        {project.teamMembersNeeded.map((v, idx) => {
          return (
            <div
              key={idx}
              className="rounded-lg text-blue-500 text-sm bg-gray-100 p-1 m-1"
            >
              {v}
            </div>
          );
        })}
      </div>
      <div className="flex">
        {project.techStack.map((v, idx) => {
          return (
            <div
              key={idx}
              className="rounded-lg text-white-100 text-sm bg-blue-200 p-1 m-1"
            >
              {v}
            </div>
          );
        })}
      </div>

      <div>
        <Link to={`/user-info/${project.author}`} className="flex-center">
          <img
            src={project.avatar}
            alt={project.postId}
            className="inline-block mr-1 w-6 h-6 border rounded-full"
          />
          <span className="author text-sm mr-1">{project.author}</span>
        </Link>
        {/* <img
                    src={project.avatar}
                    alt={project.postId}
                    className="inline-block mr-1 w-6 h-6 border rounded-full"
                />
                <span className="text-sm">{project.author}</span> */}
        <span className="text-sm text-gray-400">
          {" "}
          조회수{project.views} 좋아요{project.likes} 댓글수
          {project.comments.length}
        </span>
      </div>
    </div>
  );
}
export default ProjectList;
