import React, { useState, useRef, useEffect } from "react";
import axios from 'axios';
// import { Editor } from '@tinymce/tinymce-react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ProfileImage from "../../img/irene.jpg";
import "./PostEditor.css";
import { Textarea } from '@mantine/core';
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import {Link} from 'react-router-dom';


function PostShare () {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const [selectedFile, setSelectedFile] = useState();
  const [loadimage, setLoadImage] = useState([]);
  const [desc, setDesc] = useState("");

  useEffect(() => {
    loadList();
  }, []);
 
  const loadList = async () => {
    const result = await axios.get("http://127.0.0.1:8000/api/list");
    setLoadImage(result.data.reverse());
  };

  const handleSubmission = async (e) => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("desc", desc);
    await fetch("http://localhost:8000/api/upload", {
      method: "POST",
      body: formData,
    })
    .then((result)=>{
      loadList();
    })
    .catch(()=>{
      alert('Error in the Code');
    });
  };
 
  const deleteImage = (productId) =>
  {
    axios.get('http://127.0.0.1:8000/api/delete/'+productId)
    .then((result)=>{
      loadList();
    })
    .catch(()=>{
      alert('Error in the Code');
    });
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>

        <Textarea
            placeholder="Ketik disini..."
            autosize
            minRows={2}
            type="text"
            name="judul"
            onChange={(e) => setDesc(e.target.value)}
        />
        
        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)" }}
          onChange={(e) => setSelectedFile(e.target.files[0])}
          type="file"
          >
            <UilScenery />
            Photo
          </div>
          {/* <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>{" "}
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>{" "}
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Shedule
          </div> */}
          <button style={{ marginLeft: "auto" }} onClick={handleSubmission} className="button ps-button">Post</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
      {image && (

        <div className="previewImage">
          <UilTimes onClick={()=>setImage(null)}/>
          <img src={image.image} alt="" />
        </div>

      )}


      </div>
    </div>
  );
};

export default PostShare;
