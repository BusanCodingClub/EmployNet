import { useRecoilValue } from "recoil";
import { ProfileDataState } from "../state/atom";

const Profile_Dialog = ({ isopen, dialogData }) => {
  const ProfileData = useRecoilValue(ProfileDataState);
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
                            htmlFor="price"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Name
                          </label>
                          <div className="relative rounded-md shadow-sm">
                            <input
                              type="text"
                              name="Text"
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
                            htmlFor="price"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Category
                          </label>
                          <div className="relative rounded-md shadow-sm">
                            <input
                              type="text"
                              name="Text"
                              id="Name"
                              className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                              placeholder={ProfileData.category}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="text-start">
                          <label
                            htmlFor="price"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Carrer
                          </label>
                          <div className="relative rounded-md shadow-sm">
                            <input
                              type="text"
                              name="Text"
                              id="Name"
                              className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                              placeholder={ProfileData.career}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="text-start">
                          <label
                            htmlFor="price"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            OwnLink
                          </label>
                          <div className="relative rounded-md shadow-sm">
                            <input
                              type="text"
                              name="Text"
                              id="Name"
                              className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                              placeholder={ProfileData.ownLink}
                            />
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
