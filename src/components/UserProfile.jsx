import { useState } from "react";
import TagLine from "./profile/TagLine";
import TabMenu from "./profile/TabMenu";
import Profile_Dialog from "./Profile_Dialog";

export default function UserProfile({ userData }) {
  //props

  const tempData = userData;
  const viewLength = 3;
  //htmlData
  const tabMenus = [
    {
      id: "menu01",
      content: "정보",
    },
    {
      id: "menu02",
      content: "기술",
    },
  ];

  //state
  const [menuActive, setMenuActive] = useState(0);
  const [moreBtnClick, setMoreBtnClick] = useState(false);

  //tailWindClass
  const styleClass = {
    wrapper: "pt-12 px-5 xl:container xl:mx-auto",
    profileTop: {
      totalSection:
        "flex flex-col [&>div]:flex-none items-center px-6 py-8 bg-gray-100 md:flex-row",
      profileImg:
        "overflow-hidden rounded-full w-28 h-28 mx-auto [&>img]:w-full [&>img]:align-bottom md:w-32 md:h-32 md:ml-0 md:mr-5",
      profileInfoSection:
        "tracking-tight md:flex md:flex-nowrap md:flex-col md:justify-center",
      profileName:
        "text-center text-lg font-bold mt-3.5 mb-1.5 leading-4 md:text-left md:mt-0 md:mb-2.5 lg:text-xl lg:leading-4",
      profileCategory:
        "text-center text-base leading-4 mb-3 md:text-left lg:leading-4",
      profileLink: "text-base text-sky-600 font-bold cursor-pointer leading-4",
      stackListArea: "flex flex-wrap mt-6",
      moreBtn:
        "px-4 py-1 bg-blue-400 text-white cursor-pointer text-sm leading-4 rounded-2xl",
    },
    profileBottom: {
      totalSection: "my-5 md:my-7",
      tapMenuArea:
        "flex border-b border-solid border-gray-200 [&>li:last-child]: mr-0",
      introSection: "[&>p]: tracking-tight",
      introSubTitle:
        "font-bold mt-5 mb-4 text-lg leading-4 lg:mt-7 lg:mb-5.5 lg:leading-4",
      introText: "text-sm leading-4 lg:text-base lg:leading-4",
      stackListArea: "flex flex-wrap",
    },
  };

  //distruction
  const {
    tagLine: { stacks },
  } = tempData;
  const { profileTop, profileBottom } = styleClass;

  const [isopen, setIsopen] = useState(false);

  const dialogData = (isopen) => {
    setIsopen(isopen);
  };

  return (
    <div className={styleClass.wrapper}>
      <div className="text-right mb-1">
        <button
          className="text-sm font-bold text-white rounded-md bg-[#00a8e8] hover:opacity-30 border-none focus:border-none focus:outline-none active:opacity-100"
          onClick={() => {
            setIsopen(true);
          }}
        >
          수정
        </button>

        <Profile_Dialog isopen={isopen} dialogData={dialogData} />
      </div>
      <section className={profileTop.totalSection}>
        <div className={profileTop.profileImg}>
          <img src={tempData.profileImg} alt="profile_img"></img>
        </div>
        {/* profile layout */}
        <div className={profileTop.profileInfoSection}>
          <div className="grid grid-cols-2 items-center w-fit gap-2">
            <p className="font-bold text-xl">{tempData.name}</p>
          </div>
          <p className={profileTop.profileCategory}>{tempData.category}</p>
          <p
            onClick={() =>
              window.open(tempData.ownLink, "_blank", "noopener", "norefeerer")
            }
            className={profileTop.profileLink}
          >
            {tempData.ownLink}
          </p>
          <ul className={profileTop.stackListArea}>
            {moreBtnClick
              ? stacks.map((stack, idx) => {
                  return <TagLine key={stack + idx} content={stack} />;
                })
              : stacks.map((stack, idx) => {
                  if (idx < viewLength) {
                    return <TagLine key={stack + idx} content={stack} />;
                  } else {
                    return;
                  }
                })}
            {!moreBtnClick && (
              <div
                className={profileTop.moreBtn}
                onClick={() => {
                  setMoreBtnClick((prev) => {
                    return !prev;
                  });
                }}
              >
                더보기
              </div>
            )}
          </ul>
        </div>
      </section>
      <div className={profileBottom.totalSection}>
        <ul className={profileBottom.tapMenuArea}>
          {tabMenus.map((menu, idx) => {
            return (
              <TabMenu
                key={menu.id}
                idx={idx}
                activeState={menuActive}
                content={menu.content}
              />
            );
          })}
        </ul>
        <section className={profileBottom.introSection}>
          <h2 className={profileBottom.introSubTitle}>소개</h2>
          <p className={profileBottom.introText}>{tempData.profileMent}</p>
          <h2 className={profileBottom.introSubTitle}>경력</h2>
          <p className={profileBottom.introText}>{tempData.career}</p>
        </section>
        <section className={profileBottom.introSection}>
          <h2 className={profileBottom.introSubTitle}>기술</h2>
          <ul className={profileBottom.stackListArea}>
            {stacks.map((stack, idx) => {
              return <TagLine key={stack + idx} content={stack} />;
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}
