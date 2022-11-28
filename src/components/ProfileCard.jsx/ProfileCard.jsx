import React, { useState , useEffect} from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/billgates.jpg";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal.jsx/ProfileModal";
import "./ProfileCard.css";

const ProfileCard = () => {
    const url = "http://103.105.78.75/api/Profile/List";
    const [postprofile, setPostprofile] = useState([]);

    const getDataProfil = async () => {
      const response = await fetch(url);
      const dataProfil = await response.json();
      setPostprofile(dataProfil);
      console.log(postprofile);

      // function handleUploadChange(e){
      //   console.log(e.target.files[0]);
      //   let uploaded = e.target.files[0];
      //   setImage(URL.createObjectURL(uploaded));
      // }
    };

    useEffect(() => {
      getDataProfil();
    }, []);
  
    return (
      <div className="Post">
        {postprofile.map((item) => {
          return (
            <div className="">
              <CardProfile 
                  key={item.IdProfile} 
                  id={item.IdUser} 
                  nama={item.NamaUser} 
                  Tipe={item.TipeUser} 
                  Kelamin={item.Kelamin} 
                  profesi={item.Profesi}
                  tgl={item.created_at} 
                  tglupdate={item.updated_at}
                  image={item.ProfilePic_Path}
                   />
            </div>
          );
        })}
      </div>
    ); 
};

function CardProfile(props) {
  const ProfilePage = true;
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img 
        width="90px"
        height="80px"
        src={`http://103.105.78.75/${props.image}`} alt="" />
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
        <span>{props.nama}</span>
        <span>Tipe User : {props.Tipe}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>Kelamin</span>
            <span>{props.Kelamin}</span>
          </div>
         

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>Profesi </span>
                <span>{props.profesi}</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
}

export default ProfileCard;
