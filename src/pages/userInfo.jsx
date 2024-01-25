import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UserProfile from "../components/UserProfile";
import CenteredContainer from "../components/container";
import Navbar from "../components/navbar";
import { API_URL, axiosInstance } from "../stores/API";
import { useSetRecoilState } from "recoil";
import { ProfileDataState } from "../state/atom";

const UserInfo = () => {
  const { userId } = useParams();
  console.log("userId: ", userId);

  const [userData, setUserData] = useState(null);
  const setProfiledata = useSetRecoilState(ProfileDataState);
  useEffect(() => {
    axiosInstance
      .get(`${API_URL.USER_INFO}/${userId}`)
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
        setProfiledata(response.data);
      })
      .catch((error) => {
        console.log("UserInfo", error);
      });
  }, [userId]);

  console.log(userData);

  if (!userData) {
    return <div>loading...</div>;
  }

  return (
    <CenteredContainer>
      <Navbar />
      <div>
        {userData ? (
          <UserProfile userData={userData} />
        ) : (
          <div>유저정보없음</div>
        )}
        {/* {userData ? <div>{userData.id}</div> : <div>유저정보없음</div>} */}
      </div>
    </CenteredContainer>
  );
};

export default UserInfo;
