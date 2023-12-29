import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { PROFILE_USER_DATA } from "./mockData";
import mock_project_data from "./NEW_DATA.json";

const BASE_URL = "http://localhost:8000/api/";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

const API_URL = {
  LOGIN: "login",
  LOGOUT: "logout",
  USER_INFO: "user-info",
  USER_PROFILE: "user-profile",
  PROJECTS: "projects",
  USERS: "users",
};

const axiosMock = new AxiosMockAdapter(axiosInstance, {
  delayResponse: 100,
  onNoMatch: "throwException",
});

axiosMock.onPost(API_URL.LOGIN).reply(200, {
  access_token: "test_token",
  token_type: "bearer",
  expires_in: 3600,
});
axiosMock.onPost(API_URL.LOGOUT).reply(200, {
  message: "Successfully logged out",
});

axiosMock.onGet(API_URL.USER_PROFILE).reply(200, PROFILE_USER_DATA);

axiosMock.onGet(API_URL.USERS).reply(200, {
  users: PROFILE_USER_DATA,
});

axiosMock.onGet(API_URL.PROJECTS).reply(200, {
  projects: mock_project_data.projects,
});

// get id as params
const project_detail_url = new RegExp(`${API_URL.PROJECTS}/*`);

axiosMock.onGet(project_detail_url).reply(function (config) {
  console.log("axiosMock", config.url);
  // the actual id can be grabbed from config.url
  const id = config.url.split("/").pop();
  const project = mock_project_data.projects.find(
    (project) => project.postId == id
  );

  return [200, project];
});

//유저 상세정보 페이지
const user_info_url = new RegExp(`${API_URL.USER_INFO}/*`);

axiosMock.onGet(user_info_url).reply(function (config) {
  console.log("axiosMock", config.url);

  const id = config.url.split("/").pop();
  const userData = PROFILE_USER_DATA;
  const user_data = userData.find((user_data) => user_data.id == id);
  return [200, user_data];
});

export { axiosInstance, API_URL };
