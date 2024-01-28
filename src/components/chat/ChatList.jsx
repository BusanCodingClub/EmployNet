import { chatRooms } from "./mock";
import { faker } from "@faker-js/faker";

export default function ChatList() {
  return (
    <section className="absolute w-6/12">
      <div className="divide-y divide-gray-200">
        {chatRooms.map((chat) => (
          <div className="flex justify-between items-center" key={chat.id}>
            <div className="flex items-center">
              <div className="mr-4 w-10 h-10 bg-gray-300 rounded-full">
                <img src={faker.image.avatar()} alt="avatar" />
              </div>
              <div>
                <div className="font-medium">{chat.secondUser}</div>
                <div className="text-sm text-gray-600">
                  {chat.messages.at(-1).message}
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-500">{chat.createdAt}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
