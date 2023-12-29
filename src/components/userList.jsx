import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  const tagViewLength = 3;

  const [moreButtonClick, setMoreButtonClick] = useState(false);
  return (
    <div className="border p-4 rounded-lg shadow flex flex-col items-center">
      <Link to={`/user-info/${user.id}`}>
        <div>
          <div className="w-24 h-24 mb-3 mx-auto rounded-full overflow-hidden bg-gray-100">
            <img
              src={user.profileImg}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="mt-2 text-xl font-semibold text-center">
            {user.name}
          </h2>
          <p className="text-sm text-gray-500 text-center my-2">
            {user.category}
          </p>
          <ul
            className="flex flex-row flex-wrap justify-center items-center gap-1"
            // style={{
            //   display: "flex",
            //   flexDirection: "row",
            //   justifyContent: "center",
            //   alignItems: "center",
            //   gap: "4px"
            // }}
          >
            {user.tagLine?.stacks && user.tagLine?.stacks.length
              ? user.tagLine.stacks.map((item, idx) => {
                  if (moreButtonClick) {
                    return (
                      <li
                        key={idx}
                        className="px-2 py-1 my-0.5 text-sm text-white bg-blue-500 rounded-full"
                      >
                        {item}
                      </li>
                    );
                  } else {
                    if (idx < tagViewLength) {
                      return (
                        <li
                          key={idx}
                          className="px-2 py-1 my-0.5 text-sm text-white bg-blue-500 rounded-full"
                        >
                          {item}
                        </li>
                      );
                    } else {
                      return;
                    }
                  }
                })
              : null}
            {!moreButtonClick && (
              <div
                className="flex px-4 py-1 bg-zinc-500 items-center text-white cursor-pointer text-sm leading-4 rounded-2xl"
                onClick={() => {
                  setMoreButtonClick((prev) => !prev);
                }}
              >
                MORE
              </div>
            )}
          </ul>

          <a
            href={user.ownLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-blue-500 hover:text-blue-700 mt-2.5"
          >
            Personal Link
          </a>
        </div>
      </Link>
    </div>
  );
};

const UserList = ({ users }) => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
