import React, { useState } from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/billgates.jpg";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal.jsx/ProfileModal";
import "./ProfileCard.css";

const ProfileCard = () => {
  const ProfilePage = true;
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div style={{ marginLeft: '12rem' }} >
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
      </div>

      <div className="ProfileName">
        <span>Bill Gates</span>
        <span>Advanced</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>10,890</span>
            <span>Likes</span>
          </div>
         

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>8</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
