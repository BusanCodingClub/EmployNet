import { Link } from "react-router-dom";

export default function ChatList() {
  return (
    <section>
      {" "}
      <div className="divide-y divide-gray-200">
        {chats.map((chat) => (
          <Link
            to={`/chat/${chat.id}`}
            key={chat.id}
            className="block p-4 hover:bg-gray-100"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="mr-4 w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <div className="font-medium">{chat.user}</div>
                  <div className="text-sm text-gray-600">
                    {chat.lastMessage}
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-500">{chat.time}</div>
            </div>
          </Link>
        ))}
      </div>
      );
    </section>
  );
}
