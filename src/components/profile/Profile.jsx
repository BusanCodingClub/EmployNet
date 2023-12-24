import React from "react";

import { useState } from "react";

import TagLine from "./TagLine";
import TabMenu from "./TabMenu";

function Profile({ userData }) {
  //props
  const tempID = "user01";
  const tempData = userData.find((obj) => obj.id === tempID);

  //tagline
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
      profileCateGory:
        "text-center text-base leading-4 mb-3 md:text-left lg:leading-4",
      profileLink:
        "text-base text-center text-sky-600 mb-6 font-bold cursor-pointer leading-4 md:text-left",
      stackListArea: "flex flex-wrap",
      moreBtn:
        "px-4 py-1 bg-blue-400 text-white cursor-pointer text-sm leading-4 rounded-2xl",
      moreBtnNone: "hidden",
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

  return (
    <div className={styleClass.wrapper}>
      <section className={profileTop.totalSection}>
        <div className={profileTop.profileImg}>
          <img src={tempData.profileImg} alt="profile_img"></img>
        </div>
        <div className={profileTop.profileInfoSection}>
          <p className={profileTop.profileName}>{tempData.name}</p>
          <p className={profileTop.profileCateGory}>{tempData.cateGory}</p>
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
            <div
              className={
                moreBtnClick ? profileTop.moreBtnNone : profileTop.moreBtn
              }
              onClick={() => {
                setMoreBtnClick((prev) => {
                  return !prev;
                });
                //console.log(moreBtnClick);
              }}
            >
              더보기
            </div>
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

export default Profile;
