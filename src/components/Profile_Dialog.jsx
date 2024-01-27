import { useRecoilState } from "recoil";
import { ProfileDataState } from "../state/atom";

const Profile_Dialog = ({ isopen, dialogData }) => {
  const [ProfileData, SetProfileData] = useRecoilState(ProfileDataState);

  const dialogOpen = () => {
    dialogData(false);
  };
  console.log(ProfileData);
  return (
    <>
      {isopen && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal={isopen}
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        className="text-base font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        프로필 수정
                      </h3>
                      <div className="mt-2">
                        <div className="text-start">
                          <label
                            htmlFor="Image"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Image
                          </label>
                        </div>
                        <input
                          className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                          id="file_input"
                          type="file"
                        ></input>
                      </div>
                      <div className="mt-2">
                        <div className="text-start">
                          <label
                            htmlFor="Name"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Name
                          </label>
                          <div className="relative rounded-md shadow-sm">
                            <input
                              type="text"
                              name="Name"
                              id="Name"
                              className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                              placeholder={ProfileData.name}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="text-start">
                          <label
                            htmlFor="Category"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Category
                          </label>
                          <div className="relative rounded-md shadow-sm">
                            <select
                              id="Category"
                              className="block bg-white w-full rounded-md border-0 py-2.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                            >
                              <option selected>{ProfileData.category}</option>
                              <option value="FE">웹 개발자(FE)</option>
                              <option value="BE">웹 개발자(BE)</option>
                              <option value="FULL">풀스택 개발자</option>
                              <option value="DEV">데브옵스 엔지니어</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="text-start">
                          <label
                            htmlFor="Carrer"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Carrer
                          </label>
                          <div className="relative rounded-md shadow-sm">
                            <select
                              id="Carrer"
                              className="block bg-white w-full rounded-md border-0 py-2.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                            >
                              <option selected>{ProfileData.career}</option>
                              <option value="1">1년</option>
                              <option value="2">2년</option>
                              <option value="3">3년</option>
                              <option value="4">4년</option>
                              <option value="5">5년이상</option>
                              <option value="10">10년이상</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="text-start">
                          <label
                            htmlFor="OwnLink"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            OwnLink
                          </label>
                          <div className="relative rounded-md shadow-sm">
                            <input
                              type="text"
                              name="OwnLink"
                              id="Name"
                              className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                              placeholder={ProfileData.ownLink}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="text-start">
                          <label
                            htmlFor="ProfileMent"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            ProfileMent
                          </label>
                          <div className="relative rounded-md shadow-sm">
                            <textarea
                              id="ProfileMent"
                              rows="4"
                              className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder={ProfileData.profileMent}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="text-start">
                          <label
                            htmlFor="Stack"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Stack
                          </label>
                          <div className="relative rounded-md shadow-sm">
                            <input
                              type="text"
                              className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                              placeholder="Stack"
                              onKeyUp={(e) => {
                                if (e.key === "Enter") {
                                  SetProfileData({
                                    ...ProfileData,
                                    tagLine: {
                                      ...ProfileData.tagLine,
                                      stacks: [
                                        ...ProfileData.tagLine.stacks,
                                        e.target.value,
                                      ],
                                    },
                                  });
                                  e.target.value = "";
                                }
                              }}
                            />
                          </div>
                          <div>
                            {ProfileData.tagLine.stacks.map((item, index) => {
                              return (
                                <span
                                  key={index}
                                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2"
                                >
                                  {item}
                                  <button
                                    className="ml-1 px-1 py-0"
                                    onClick={() => {
                                      SetProfileData({
                                        ...ProfileData,
                                        tagLine: {
                                          ...ProfileData.tagLine,
                                          stacks: [
                                            ...ProfileData.tagLine.stacks.filter(
                                              (idx) => {
                                                return idx !== index;
                                              }
                                            ),
                                          ],
                                        },
                                      });
                                    }}
                                  >
                                    X
                                  </button>
                                  {/* 아직 여기 데이터 삭제는 미제 */}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                    onClick={dialogOpen}
                  >
                    Complete
                  </button>
                  <button
                    type="button"
                    onClick={dialogOpen}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Profile_Dialog;
