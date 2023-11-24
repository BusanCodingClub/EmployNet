import Profile from "../components/profile/Profile";
import { PROFILE_USER_DATA } from "../stores/mockData";
import CenteredContainer from "../components/container";
import Navbar from "../components/navbar";

const ProfilePage = () => {
  return (
    <CenteredContainer>
      <Navbar />
      <div>
        <h1>Profile Page</h1>
        <Profile userData={PROFILE_USER_DATA} />
      </div>
    </CenteredContainer>
  );
};

export default ProfilePage;
