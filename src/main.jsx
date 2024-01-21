import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainPage from "./pages/main";
import UsersPage from "./pages/users";
import ProfilePage from "./pages/ProfilePage";
import PostDetail from "./pages/postDetail";
import Project from "./pages/project";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import UserInfo from "./pages/userInfo";
import ProjectCreate from "./pages/ProjectCreate";
import ProjectUpdate from "./pages/ProjectUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
  {
    path: "/about",
    element: <h1>About Page</h1>,
  },
  {
    path: "/projects",
    element: <Project />,
  },
  {
    path: "/projects/create",
    element: <ProjectCreate />,
  },
  {
    path: "/projects/:postId",
    element: <PostDetail />,
  },
  {
    path: "/projects/:postId/update",
    element: <ProjectUpdate />,
  },
  {
    path: "/people",
    element: <ProfilePage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/user-info/:userId",
    element: <UserInfo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
