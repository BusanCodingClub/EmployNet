const Profile_Dialog = () => {
  console.log("Profile_Dialog");
  return (
    <>
      <dialog className="dialog dialog--profile" id="dialogProfile">
        <div className="dialog__content">
          <div className="dialog__header">
            <button className="closeBtn" id="closeBtn">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="dialog__body">
            <div className="dialog__body__profile">
              <div className="dialog__body__profile__img">
                <img
                  src="https://avatars.githubusercontent.com/u/76954659?v=4"
                  alt="profile"
                />
              </div>
              <div className="dialog__body__profile__info">
                <div className="dialog__body__profile__info__name">김정환</div>
                <div className="dialog__body__profile__info__email">
                  <i className="fas fa-envelope"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};
export default Profile_Dialog;
