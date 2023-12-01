import { Link } from "react-router-dom";

import CenteredContainer from "../components/container";
import Navbar from "../components/navbar";

function Signup() {
  return (
    <CenteredContainer>
      <Navbar />
      <div className="mx-auto max-w-sreen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl font-sans">
            Welcome to EmployNet
          </h1>
          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Get a job easily on EmployNet
          </p>
          <form className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <p className="text-center text-xl font-bold">Sign Up</p>
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-b border-gray-200 p-4 pe-12 text-sm outline-none focus:border-indigo-200"
              placeholder="Enter Email"
            />
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border-b border-gray-200 p-4 pe-12 text-sm outline-none focus:border-indigo-200"
              placeholder="Enter Name"
            />
            <label htmlFor="category" className="font-semibold">
              Category
            </label>
            <select
              id="category"
              className="w-full p-2 border border-gray-200 text-gray-400 text-sm rounded-lg outline-none focus:border-indigo-200"
            >
              <option defaultValue="">Choose a category</option>
              <option value="dv">developer</option>
              <option value="ds">designer</option>
              <option value="pm">product manager</option>
            </select>
            <label htmlFor="pw" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              id="pw"
              className="w-full border-b border-gray-200 p-4 pe-12 text-sm outline-none focus:border-indigo-200"
              placeholder="Enter password"
            />
            <input
              type="password"
              id="pwConfirm"
              className="w-full border-b border-gray-200 p-4 pe-12 text-sm outline-none focus:border-indigo-200"
              placeholder="Enter confirm password"
            />
          </form>
          <button
            type="submit"
            className="block w-full bg-indigo-600 px-5 py-3 font-medium text-white"
          >
            Sign Up
          </button>
          <p className="text-center text-sm text-gray-500">
            Already have account ?
            <Link className="underline" to="/signin">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </CenteredContainer>
  );
}

export default Signup;
