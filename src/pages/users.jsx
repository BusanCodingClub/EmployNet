
import React from 'react';
import UserList from '../components/userList';
import { USERS_DATA } from '../stores/mockData';
import CenteredContainer from '../components/container';
import Navbar from '../components/navbar';

const UsersPage = () => {
    return (

        <CenteredContainer>
            <Navbar />
            <div>
                <h1>User Page</h1>
                <UserList users={USERS_DATA} />
            </div>
        </CenteredContainer>

    );
};

export default UsersPage;
