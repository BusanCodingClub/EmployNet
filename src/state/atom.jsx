import { atom } from "recoil";

const ProfileDataState = atom({
  key: "profile",
  default: [
    {
      id: "",
      name: "",
      category: "",
      career: "",
      tagLine: {
        stacks: [],
        미정01: [],
        미정02: [],
      },
      profileMent: [],
      profileImg: "",
      ownLink: "",
    },
  ],
});
export { ProfileDataState };
