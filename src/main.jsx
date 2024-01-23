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
import PreviewDesign from "./pages/PreviewDesign";

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
    path: "/people",
    element: <ProfilePage />,
  },
  {
    path: "/projects/:postId",
    element: <PostDetail />,
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
  {
    path: "/previewdesign",
    element: <PreviewDesign />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
