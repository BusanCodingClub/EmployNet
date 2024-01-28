import Profile from "../components/profile/Profile";
import CenteredContainer from "../components/container";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { API_URL, axiosInstance } from "../stores/API";

const ProfilePage = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    axiosInstance.get(API_URL.USER_PROFILE).then((response) => {
      console.log(response.data);
      setUserInfo(response.data);
    });
  }, []);

  return (
    <CenteredContainer>
      <Navbar />
      <div>
        {userInfo ? (
          <Profile userData={userInfo} setChatStep={() => setChatStep(1)} />
        ) : null}
      </div>
    </CenteredContainer>
  );
};

export default ProfilePage;
