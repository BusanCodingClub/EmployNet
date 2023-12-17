// import data from "../stores/NEW_DATA.json";
import { useParams } from "react-router-dom";
import CenteredContainer from "../components/container";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { API_URL, axiosInstance } from "../stores/API";

function PostDetail() {
  const { postId } = useParams();
  console.log("postId", postId);

  const [post, setPost] = useState(null);

  // const { projects } = data;
  // const postId = "p1";
  // const post = projects.find((item) => item.postId === postId);

  // const teamMemberString = post.teamMembersNeeded.join(", ");
  // const techStackString = post.techStack.join(", ");

  const [teamMemberString, setTeamMemberString] = useState("");
  const [techStackString, setTechStackString] = useState("");

  useEffect(() => {
    axiosInstance.get(`${API_URL.PROJECTS}/${postId}`).then((response) => {
      console.log(response.data);
      setPost(response.data);

      setTeamMemberString(response.data.teamMembersNeeded.join(", "));
      setTechStackString(response.data.techStack.join(", "));
    }).catch((error) => {
      console.log("PostDetail", error);
    })
  }, []);

  if (!post) {
    return <div>loading...</div>;
  }

  return (
    <CenteredContainer>
      <Navbar />
      <div className="p-5">
        <header className="detail-header pb-2">
          <span className="text-xs text-secondary">{post.category}</span>
          <h4 className="text-2xl font-bold mb-1">{post.title}</h4>
          <div className="post-info text-sm flex justify-between">
            <div className="left flex items-center text-secondary">
              <a href="/user/_id" className="flex items-center">
                <img
                  src={post.avatar}
                  alt={post.postId}
                  className="inline-block mr-1 w-6 h-6 border rounded-full"
                />
                <span className="author">{post.author}</span>
              </a>

              <span className="mx-2 font-light">|</span>
              <span>{post.createdDate}</span>
            </div>
            <div className="right flex text-secondary">
              <span>조회수 {post.views}</span>
              <span className="mx-2 font-light">|</span>
              <span>좋아요 {post.likes}</span>
              {/* <span>{post.viewCounts[0].views}</span> */}
              {/* Views {getViewCount(data.postId)} */}
            </div>
          </div>
        </header>

        <section className="detail-section border-b-2 ">
          <div className="projectInfoWrap p-5 bg-gray-50 ">
            <div className="bg-white p-3 rounded-lg">
              <ul className="w-full flex flex-wrap text-sm">
                <li className="w-full sm:w-1/2 px-4 py-1">
                  <strong className="w-1/3 inline-block">모집마감일</strong>
                  <span className="w-2/3 inline-block">
                    {post.modifiedDate}
                  </span>
                </li>
                <li className="w-full sm:w-1/2 px-4 py-1">
                  <strong className="w-1/3 inline-block">진행방식</strong>
                  <span className="w-2/3 inline-block">
                    {post.executionMethod}
                  </span>
                </li>
                <li className="w-full sm:w-1/2 px-4 py-1">
                  <strong className="w-1/3 inline-block">모집유형</strong>
                  <span className="w-2/3 inline-block">{teamMemberString}</span>
                </li>
                <li className="w-full sm:w-1/2 px-4 py-1">
                  <strong className="w-1/3 inline-block">스택</strong>
                  <span>{techStackString}</span>
                </li>
                <li className="w-full sm:w-1/2 px-4 py-1">
                  <strong className="w-1/3 inline-block">예상기간</strong>
                  <span className="w-2/3 inline-block">
                    {post.expectedDurationMonths}개월
                  </span>
                </li>
                <li className="w-full sm:w-1/2 px-4 py-1">
                  <strong className="w-1/3 inline-block">모집인원</strong>
                  <span className="w-2/3 inline-block">
                    {post.recruitmentSlots}명
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="content p-5 mb-40 text-sm"
          />
          <div className="flex-col">
            <span className="text-xs">
              연락 링크 <a href={post.contactMethod}>{post.contactMethod}</a>
            </span>
          </div>
          {/* <a
          href={`/like/${post.postId}`}
          className="like_btn inline-block mt-2 px-2 py-1 border border-gray-500 rounded"
        >
          👍 {getLikeCount(data.postId)}
        </a> */}
        </section>

        <footer className="detail-footer px-1 flex justify-between items-center mt-3">
          <a
            href="/projects"
            className="back-to-list inline-block text-sm px-2 py-1 border border-gray-500 rounded"
          >
            전체글
          </a>

          <div className="flex">
            <button className="inline-block text-sm px-2 py-1 mr-1 bg-gray-400 text-white rounded border-0">
              수정
            </button>

            <button
              type="submit"
              className="inline-block text-sm px-2 py-1 mr-1 bg-gray-400 text-white rounded border-0"
            >
              삭제
            </button>

            <button className="relative inline-block text-sm font-semibold px-2 py-1 bg-gray-800 text-white rounded border-0">
              글작성
            </button>
          </div>
        </footer>
        {/* 댓글 부분 */}
        <div className="comment-wrap flex-column px-3 py-7 mx-auto mt-5 text-gray-800 bg-gray-50">
          {/* 남이 남긴 코멘트 */}
          <div className="userComment mb-3">
            <a href="/user/_id" className="profile flex-center">
              <img
                src={post.avatar}
                alt={post.postId}
                className="inline-block mr-1 w-6 h-6 border rounded-full"
              />
              <span className="author text-sm">
                {/* {post.author} */}
                {"박땡땡"}
              </span>
            </a>
            <div className="max-w-xs mt-2 ml-2 p-2 border-box border rounded-xl rounded-tl-none bg-white text-sm">
              {"저도 참여하고 싶어요."}
            </div>
          </div>

          {/* 내가 남긴 코멘트 */}
          <div className="userAuthorComment flex flex-col items-end">
            <a href="/user/_id" className="profile flex-center">
              <img
                src={post.avatar}
                alt={post.postId}
                className="inline-block mr-1 h-6 border rounded-full"
              />
              <span className="author text-sm">{post.author}</span>
            </a>
            <div className="max-w-xs mt-2 mr-2 p-2 border-box rounded-xl rounded-tr-none bg-blue-100 text-sm">
              {"연락링크를 통해 연락해주세요."}
            </div>
          </div>
        </div>

        {/* 댓글 작성 부분 */}
        <div className="comment-wrap flex mx-auto py-2 h-full border-t">
          <input type="text" className="border rounded-lg p-2 flex-1 text-sm" />
          <button className="text-white text-xs ml-2">작성</button>
        </div>
      </div>
    </CenteredContainer>
  );
}

export default PostDetail;
