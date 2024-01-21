import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useDetectClose from "../hooks/useDetectClose.js";

import DropDown from "./DropDown.jsx";
import Editor from "./Editor";

import { API_URL, axiosInstance } from "../stores/API.js";

function ProjectUploadForm({ isCreate }) {
  const navigate = useNavigate();
  const { postId } = useParams();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [techStack, setTechStack] = useState([]);
  const [teamMembersNeeded, setTeamMembersNeeded] = useState([]);
  const [recruitmentSlots, setRecruitmentSlots] = useState(0);
  const [executionMethod, setExecutionMethod] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [expectedDurationMonths, setExpectedDurationMonths] = useState(0);
  const [recruitmentDeadline, setRecruitmentDeadline] = useState("");
  const [content, setContent] = useState("");

  const categoryRef = useRef();
  const techStackRef = useRef();
  const teamMembersNeededRef = useRef();
  const executionMethodRef = useRef();

  const [categoryIsOpen, setCategoryIsOpen] = useDetectClose(
    categoryRef,
    false
  );
  const [techStackIsOpen, setTechStackIsOpen] = useDetectClose(
    techStackRef,
    false
  );
  const [teamMembersNeededIsOpen, setTeamMembersNeededIsOpen] = useDetectClose(
    teamMembersNeededRef,
    false
  );
  const [executionMethodIsOpen, setExecutionMethodIsOpen] = useDetectClose(
    executionMethodRef,
    false
  );

  const categoryList = ["사이드프로젝트", "스터디", "프로젝트"];
  const techStackList = ["리액트", "자바스크립트", "자바", "C", "C++"];
  const teamMembersNeededList = ["개발자", "기획자", "디자이너"];
  const executionMethodList = ["온라인", "오프라인"];

  const blackTextClasses =
    "text-left w-full p-2 border-2 rounded-lg focus:border-[#646cff] outline-none";
  const grayTextClasses =
    "text-left w-full p-2 border-2 rounded-lg text-gray-400 focus:border-[#646cff] outline-none";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !(
        title &&
        category &&
        techStack &&
        teamMembersNeeded &&
        recruitmentSlots &&
        executionMethod &&
        expectedDurationMonths &&
        recruitmentDeadline &&
        content
      )
    ) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return alert("모든 값을 입력해주세요");
    }
    if (isCreate) {
      const body = {
        title,
        category,
        techStack,
        teamMembersNeeded,
        recruitmentSlots,
        executionMethod,
        expectedDurationMonths,
        recruitmentDeadline,
        content,
      };
      axiosInstance.post(API_URL.PROJECTS_CREATE, body).then((res) => {
        alert(res.data.message);
        navigate("/projects");
      });
    } else {
      const body = {
        title,
        category,
        techStack,
        teamMembersNeeded,
        recruitmentSlots,
        executionMethod,
        expectedDurationMonths,
        recruitmentDeadline,
        content,
        postId,
      };
      axiosInstance.post(API_URL.PROJECTS_UPDATE, body).then((res) => {
        alert(res.data.message);
        navigate(`/projects/${postId}`);
      });
    }
  };

  useEffect(() => {
    if (!isCreate) {
      axiosInstance.get(`${API_URL.PROJECTS}/${postId}`).then((res) => {
        setTitle(res.data.title);
        setCategory(res.data.category);
        setTechStack(res.data.techStack);
        setTeamMembersNeeded(res.data.teamMembersNeeded);
        setRecruitmentSlots(res.data.recruitmentSlots);
        setExecutionMethod(res.data.executionMethod);
        setContactMethod(res.data.contactMethod);
        setExpectedDurationMonths(res.data.expectedDurationMonths);
        setRecruitmentDeadline(res.data.recruitmentDeadline);
        setContent(res.data.content);
      });
    }
  }, []);

  return (
    <form method="post">
      <section className="px-8 pt-4">
        <h2 className="font-bold text-xl">프로젝트 제목을 입력해주세요</h2>
        <hr className="my-2 border-2 rounded-lg border-[#646cff]" />
        <label className="py-2 block font-bold" htmlFor="title">
          제목
        </label>
        <input
          id="title"
          type="text"
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          minLength={2}
          className="w-full p-2 border-2 rounded-lg focus:border-[#646cff] outline-none"
        ></input>
      </section>
      <section className="px-8 pt-4">
        <h2 className="font-bold text-xl">프로젝트 상세 정보를 입력해주세요</h2>
        <hr className="my-2 border-2 rounded-lg border-[#646cff]" />
        <div className="sm:flex">
          <div className="w-full relative sm:pr-2 sm:w-1/2" ref={categoryRef}>
            <label className="py-2 block font-bold" htmlFor="category">
              카테고리
            </label>
            <input
              id="category"
              type="button"
              value={category ? category : "카테고리를 선택해주세요"}
              onClick={() => setCategoryIsOpen(!categoryIsOpen)}
              className={category ? blackTextClasses : grayTextClasses}
            ></input>
            {categoryIsOpen && (
              <DropDown
                list={categoryList}
                isArray={false}
                isOpen={categoryIsOpen}
                setIsOpen={setCategoryIsOpen}
                value={category}
                setValue={setCategory}
              />
            )}
          </div>
          <div className="w-full relative sm:pl-2 sm:w-1/2" ref={techStackRef}>
            <label className="py-2 block font-bold" htmlFor="techStack">
              기술 스택
            </label>
            <input
              id="techStack"
              type="button"
              value={
                techStack.length !== 0
                  ? techStack.toString()
                  : "기술 스택을 선택해주세요"
              }
              onClick={() => setTechStackIsOpen(!techStackIsOpen)}
              className={
                techStack.length !== 0 ? blackTextClasses : grayTextClasses
              }
            ></input>
            {techStackIsOpen && (
              <DropDown
                list={techStackList}
                isArray={true}
                isOpen={techStackIsOpen}
                setIsOpen={setTechStackIsOpen}
                value={techStack}
                setValue={setTechStack}
              />
            )}
          </div>
        </div>
        <div className="sm:flex">
          <div
            className="w-full relative sm:pr-2 sm:w-1/2"
            ref={teamMembersNeededRef}
          >
            <label className="py-2 block font-bold" htmlFor="teamMembersNeeded">
              필요한 멤버
            </label>
            <input
              id="teamMembersNeeded"
              type="button"
              value={
                teamMembersNeeded.length !== 0
                  ? teamMembersNeeded.toString()
                  : "필요한 멤버를 선택해주세요"
              }
              onClick={() =>
                setTeamMembersNeededIsOpen(!teamMembersNeededIsOpen)
              }
              className={
                teamMembersNeeded.length !== 0
                  ? blackTextClasses
                  : grayTextClasses
              }
            ></input>
            {teamMembersNeededIsOpen && (
              <DropDown
                list={teamMembersNeededList}
                isArray={true}
                isOpen={teamMembersNeededIsOpen}
                setIsOpen={setTeamMembersNeededIsOpen}
                value={teamMembersNeeded}
                setValue={setTeamMembersNeeded}
              />
            )}
          </div>
          <div className="w-full sm:pl-2 sm:w-1/2">
            <label className="py-2 block font-bold" htmlFor="recruitmentSlots">
              모집 인원
            </label>
            <input
              id="recruitmentSlots"
              type="number"
              placeholder="모집 인원을 입력해주세요"
              value={recruitmentSlots !== 0 ? recruitmentSlots : ""}
              onChange={(e) => setRecruitmentSlots(e.currentTarget.value)}
              className="w-full p-2 border-2 rounded-lg focus:border-[#646cff] outline-none"
            ></input>
          </div>
        </div>
        <div className="sm:flex">
          <div
            className="w-full pr-2 relative sm:pr-2 sm:w-1/2"
            ref={executionMethodRef}
          >
            <label className="py-2 block font-bold" htmlFor="executionMethod">
              진행 방식
            </label>
            <input
              id="executionMethod"
              type="button"
              value={
                executionMethod ? executionMethod : "진행 방식을 선택해주세요"
              }
              onClick={() => setExecutionMethodIsOpen(!executionMethodIsOpen)}
              className={executionMethod ? blackTextClasses : grayTextClasses}
            ></input>
            {executionMethodIsOpen && (
              <DropDown
                list={executionMethodList}
                isArray={false}
                isOpen={executionMethodIsOpen}
                setIsOpen={setExecutionMethodIsOpen}
                value={executionMethod}
                setValue={setExecutionMethod}
              />
            )}
          </div>
          <div className="w-full sm:pl-2 sm:w-1/2">
            <label className="py-2 block font-bold" htmlFor="contactMethod">
              연락 방법
            </label>
            <input
              id="contactMethod"
              type="url"
              value={contactMethod}
              onChange={(e) => setContactMethod(e.currentTarget.value)}
              placeholder="연락 방법 링크를 입력해주세요"
              className="w-full p-2 border-2 rounded-lg focus:border-[#646cff] outline-none"
            ></input>
          </div>
        </div>
        <div className="sm:flex">
          <div className="w-full pr-2 sm:pr-2 sm:w-1/2">
            <label
              className="py-2 block font-bold"
              htmlFor="expectedDurationMonths"
            >
              예상 기간
            </label>
            <input
              id="expectedDurationMonths"
              type="number"
              value={expectedDurationMonths !== 0 ? expectedDurationMonths : ""}
              onChange={(e) => setExpectedDurationMonths(e.currentTarget.value)}
              placeholder="예상 기간을 입력해주세요"
              className="w-full p-2 border-2 rounded-lg focus:border-[#646cff] outline-none"
            ></input>
          </div>
          <div className="w-full sm:pl-2 sm:w-1/2">
            <label
              className="py-2 block font-bold"
              htmlFor="recruitmentDeadline"
            >
              모집 마감일
            </label>
            <input
              id="recruitmentDeadline"
              type="date"
              value={recruitmentDeadline}
              onChange={(e) => setRecruitmentDeadline(e.currentTarget.value)}
              placeholder="모집 마감일을 선택해주세요"
              className={
                recruitmentDeadline ? blackTextClasses : grayTextClasses
              }
            ></input>
          </div>
        </div>
      </section>
      <section className="px-8 pt-4">
        <h2 className="font-bold text-xl">프로젝트를 설명해주세요</h2>
        <hr className="my-2 mb-4 border-2 rounded-lg border-[#646cff]" />
        <Editor content={content} setContent={setContent} />
      </section>
      <section className="px-8 pt-4 float-right">
        <button onClick={() => history.back()} className="bg-gray-300">
          취소
        </button>
        <button
          onClick={(e) => handleSubmit(e)}
          className="text-white bg-[#646cff] ml-2"
        >
          등록
        </button>
      </section>
    </form>
  );
}

export default ProjectUploadForm;
