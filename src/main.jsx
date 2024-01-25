import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
