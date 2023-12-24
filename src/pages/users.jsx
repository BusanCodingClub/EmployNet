import { useEffect, useState } from "react";
import UserList from "../components/userList";
import CenteredContainer from "../components/container";
import Navbar from "../components/navbar";
import { API_URL, axiosInstance } from "../stores/API";

const UsersPage = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axiosInstance.get(API_URL.USERS).then((response) => {
      console.log(response.data);
      setUsers(response.data.users);
    });
  }, []);

  return (
    <CenteredContainer>
      <Navbar />
      <div>{users ? <UserList users={users} /> : null}</div>
    </CenteredContainer>
  );
};

export default UsersPage;
