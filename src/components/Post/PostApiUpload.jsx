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
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function deletePost(id)
  {
    let result = await fetch("http://103.105.78.75/api/Forum/Delete/"+id, {
      method: 'GET'
    });
    result = await result.json();
    console.warn(result)
    window.location.reload()
  }
  
    return (
      <>
      
      </>
    );
  }
  
  export default PostApiUpload;
