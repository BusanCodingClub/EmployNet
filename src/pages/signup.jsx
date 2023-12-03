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
            EmployNet
          </h1>
          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            EmployNet에서 직업을 구해보세요
          </p>
          <form className="mb-0 mt-6 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <p className="text-center text-xl font-bold">회원가입</p>
            <label htmlFor="email" className="block mt-4 font-semibold">
              이메일
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-b border-gray-200 p-4 pe-12 text-sm outline-none focus:border-indigo-200"
              placeholder="이메일을 입력해주세요"
            />
            <label htmlFor="name" className="block font-semibold mt-4">
              이름
            </label>
            <input
              type="text"
              id="name"
              className="w-full border-b border-gray-200 p-4 pe-12 text-sm outline-none focus:border-indigo-200"
              placeholder="이름을 입력해주세요"
            />
            <label htmlFor="category" className="block my-4 font-semibold">
              카테고리
            </label>
            <select
              id="category"
              className="w-full p-2 border border-gray-200 text-gray-400 text-sm rounded-lg outline-none focus:border-indigo-200"
            >
              <option defaultValue="">카테고리를 선택해주세요</option>
              <option value="dv">개발자</option>
              <option value="ds">디자이너</option>
              <option value="pm">기획자</option>
            </select>
            <label htmlFor="pw" className="block mt-4 font-semibold">
              비밀번호
            </label>
            <input
              type="password"
              id="pw"
              className="w-full border-b border-gray-200 p-4 pe-12 text-sm outline-none focus:border-indigo-200"
              placeholder="비밀번호를 입력해주세요"
            />
            <input
              type="password"
              id="pwConfirm"
              className="w-full border-b border-gray-200 p-4 pe-12 text-sm outline-none focus:border-indigo-200"
              placeholder="비밀번호 확인을 입력해주세요"
            />
            <button
              type="submit"
              className="block my-8 w-full bg-indigo-600 px-5 py-3 font-medium text-white"
            >
              회원가입
            </button>
            <p className="text-center text-sm text-gray-500">
              이미 계정이 있으신가요?
              <Link className="underline" to="/signin">
                로그인 &rarr;
              </Link>
            </p>
          </form>
        </div>
      </div>
    </CenteredContainer>
  );
}

export default Signup;
