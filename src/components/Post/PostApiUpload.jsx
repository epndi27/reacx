import React, { useState, useEffect } from "react";
import "./Post.css";
import { Icon } from "@iconify/react";
import { User } from "@nextui-org/react";

const PostApiUpload = () => {
    const url = "http://103.105.78.75/api/Profile/List";
    const [postprofile, setPostprofile] = useState([]);
  
    const getDataProfil = async () => {
      const response = await fetch(url);
      const dataProfil = await response.json();
      setPostprofile(dataProfil);
      console.log(postprofile);
    };
  
    useEffect(() => {
      getDataProfil();
    }, []);
  
    return (
      <div className="Post">
        {postprofile.map((item) => {
          return (
            <div className="">
              <CardPost 
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
  
  function CardPost(props) {
    return (
      <div className="Post">
        <div>
          <User src={`http://103.105.78.75/${props.image}`} name=<b>{props.nama}</b>>
            <User.Link color="#7a77ff" href="https://nextui.org/">
              {props.tgl} (ini buat tipe user)
            </User.Link>
          </User>
        </div>
  
        <img src={`http://103.105.78.75/${props.image}`} alt="" />
  
        <div className="Isipost">
          <h4>{props.judul}</h4>
          <span>{props.isi}</span>
        </div>
  
        <div className="postReact">
          <Icon icon="icon-park-solid:like" color="#7a77ff" height="30" />
          {/* if not like <Icon icon="icon-park-outline:like" color="#7a77ff" height="30" /> */}
  
          <Icon icon="bx:comment-detail" color="#7a77ff" height="30" />
  
          {/* <Icon icon="bx:comment-detail" color="#7a77ff" height="30" onClick={() => setModalOpened(true)} /> */}
          {/* <CommentModal
                modalOpened={modalOpened}
                setModalOpened={setModalOpened}
              /> */}
          <Icon icon="bxs:share-alt" color="#7a77ff" height="30" />
        </div>
  
        <span style={{ color: "var(--gray)", fontSize: "12px" }}>{props.id} likes (ini dari id user guys)</span>
  
        <div className="Comment">
          <span>
            <b>{props.nama}</b>
          </span>
          <span> {props.judul}</span>
        </div>
      </div>
    );
  }
  
  export default PostApiUpload;
