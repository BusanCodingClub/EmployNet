import data from "../stores/NEW_DATA.json";
import CenteredContainer from "../components/container";

function PostDetail() {
  const { projects } = data;
  const postId = "p1";
  const post = projects.find((item) => item.postId === postId);

  const teamMemberString = post.teamMembersNeeded.join(", ");
  const techStackString = post.techStack.join(", ");

  return (
    <CenteredContainer>
      <div className="detail-wrap  mx-auto w-4/5 h-full pt-10 text-gray-800">
        <header className="detail-header border-b-2 border-gray-300 pb-2">
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

        <section className="detail-section border-b-2 border-gray-500">
          <div className="projectInfoWrap p-5 bg-gray-200">
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
            <span text-xs>연락 링크</span>
            <a href={post.contactMethod}>{post.contactMethod}</a>
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
            <form action={`/edit/${post.postId}`} method="GET">
              <button className="inline-block text-sm px-2 py-1 mr-1 bg-gray-600 text-white rounded border-0">
                수정
              </button>
            </form>

            <form action={`/delete/${post.postId}`} method="POST">
              <button
                type="submit"
                className="inline-block text-sm px-2 py-1 mr-1 bg-gray-600 text-white rounded border-0"
              >
                삭제
              </button>
            </form>

            <form action="/write" method="GET">
              <button className="inline-block text-sm px-2 py-1 bg-gray-700 text-white rounded border-0">
                글작성
              </button>
            </form>
          </div>
        </footer>
      </div>
    </CenteredContainer>
  );
}

export default PostDetail;
