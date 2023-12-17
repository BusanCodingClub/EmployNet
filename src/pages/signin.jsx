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
            EmployNet
          </h1>
          <form className="mb-0 mt-6 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <p className="text-center text-xl font-bold">로그인</p>
            <label htmlFor="email" className="block mt-4 font-semibold">
              이메일
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-b border-gray-200 p-4 pe-12 text-sm outline-none focus:border-indigo-200"
              placeholder="이메일을 입력해주세요"
            />
            <label htmlFor="pw" className="block mt-4 font-semibold">
              비밀번호
            </label>
            <input
              type="password"
              id="pw"
              className="w-full border-b border-gray-200 p-4 pe-12 text-sm outline-none focus:border-indigo-200"
              placeholder="비밀번호를 입력해주세요"
            />
            <button
              type="submit"
              className="block my-8 w-full bg-indigo-600 px-5 py-3 font-medium text-white"
            >
              로그인
            </button>
            <p className="text-center text-sm text-gray-500">
              계정이 없으신가요?
              <Link className="underline" to="/signup">
                회원가입 &rarr;
              </Link>
            </p>
          </form>
        </div>
      </div>
    </CenteredContainer>
  );
}

export default Signin;
