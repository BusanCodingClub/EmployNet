import { Link } from "react-router-dom";

import CenteredContainer from "../components/container";
import Navbar from "../components/navbar";

function Signin() {
  return (
    <CenteredContainer>
      <Navbar />
      <div className="mx-auto max-w-sreen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Welcome back to EmployNet
          </h1>
          <form className="mb-0 mt-6 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <p className="text-center text-xl font-bold">Sign In</p>
            <label htmlFor="email" className="block mt-4 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-b border-gray-200 p-4 pe-12 text-sm outline-none focus:border-indigo-200"
              placeholder="Enter Email"
            />
            <label htmlFor="pw" className="block mt-4 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="pw"
              className="w-full border-b border-gray-200 p-4 pe-12 text-sm outline-none focus:border-indigo-200"
              placeholder="Enter password"
            />
            <button
              type="submit"
              className="block my-8 w-full bg-indigo-600 px-5 py-3 font-medium text-white"
            >
              Sign In
            </button>
            <p className="text-center text-sm text-gray-500">
              Already have account ?
              <Link className="underline" to="/signup">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </CenteredContainer>
  );
}

export default Signin;
