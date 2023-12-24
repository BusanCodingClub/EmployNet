import React from "react";
import { Link } from "react-router-dom";

const maxLength = 4;

const UserCard = ({ user }) => (
  <div className="border p-4 rounded-lg shadow flex flex-col items-center">
    <Link to={`/user-info/${user.id}`}>
      <div>
        <div className="w-24 h-24 mb-3 rounded-full overflow-hidden bg-gray-100">
          <img
            src={user.profileImg}
            alt={user.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="text-sm text-gray-500">{user.category}</p>
        <div
          className="flex flex-row justify-center items-center gap-1"
        // style={{
        //   display: "flex",
        //   flexDirection: "row",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   gap: "4px"
        // }}
        >
          {user.tagLine?.stacks && user.tagLine?.stacks.length
            ? user.tagLine.stacks.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1 my-2 text-sm text-white bg-blue-500 rounded-full"
              >
                {item}
              </span>
            ))
            : null}
        </div>

        <a
          href={user.ownLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 mt-2"
        >
          Personal Link
        </a>
      </div>
    </Link>
  </div>
);

const UserList = ({ users }) => (
  <div className="container mx-auto p-6">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  </div>
);

export default UserList;
