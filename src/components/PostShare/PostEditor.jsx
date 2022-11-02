import React, { useState, useRef, useEffect } from "react";
import axios from 'axios';
// import { Editor } from '@tinymce/tinymce-react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ProfileImage from "../../img/irene.jpg";
import "./PostShare.css";
import { Textarea, FileButton, Button, Group, Text } from '@mantine/core';
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import {Link} from 'react-router-dom';
import { CFormInput } from '@coreui/react'

import Form from 'react-bootstrap/Form';


function PostEditor () {
  // const [image, setImage] = useState(null);
  // const imageRef = useRef();

  // const [selectedFile, setSelectedFile] = useState();
  // const [loadimage, setLoadImage] = useState([]);
  // const [desc, setDesc] = useState("");

  const [NamaPengepost, setName] = useState("");
  const [IdPengepost, setIdPengepost] = useState("");
  const [file, setFile] = useState("");
  const [JudulPost, setJudul] = useState("");
  const [IsiPost, setIsi] = useState("");
  const [Like, setLike] = useState("");

  async function addPost(){
    console.warn(NamaPengepost, IdPengepost, file, JudulPost, IsiPost, Like)
    const formData = new FormData();
    formData.append('file', file);
    formData.append('NamaPengepost', NamaPengepost);
    formData.append('IdPengepost', IdPengepost);
    formData.append('JudulPost', JudulPost);
    formData.append('IsiPost', IsiPost);
    formData.append('Like', Like);
    let result = await fetch("http://103.105.78.75/api/Forum/Upload",{
      method: 'POST',
      body: formData
    });
    alert("Post Terkirim")
  
  }

  // useEffect(() => {
  //   loadList();
  // }, []);
 
  // const loadList = async () => {
  //   const result = await axios.get("http://103.105.78.75/api/Cpu/All");
  //   setLoadImage(result.data.reverse());
  // };

  // const handleSubmission = async (e) => {
  //   const formData = new FormData();
  //   formData.append("file", selectedFile);
  //   formData.append("desc", desc);
  //   await fetch("http://localhost:8000/api/upload", {
  //     method: "POST",
  //     body: formData,
  //   })
  //   .then((result)=>{
  //     loadList();
  //   })
  //   .catch(()=>{
  //     alert('Error in the Code');
  //   });
  // };
 
  // const deleteImage = (productId) =>
  // {
  //   axios.get('http://127.0.0.1:8000/api/delete/'+productId)
  //   .then((result)=>{
  //     loadList();
  //   })
  //   .catch(()=>{
  //     alert('Error in the Code');
  //   });
  // };

  // const onImageChange = (event) => {
  //   if (event.target.files && event.target.files[0]) {
  //     let img = event.target.files[0];
  //     setImage({
  //       image: URL.createObjectURL(img),
  //     });
  //   }
  // };
  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>

      <Form>
        <Form.Group className="mb-3" onChange={(e) => setName(e.target.value)} controlId="exampleForm.ControlInput1">
          <Form.Label>Nama Pengepost</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" onChange={(e) => setIdPengepost(e.target.value)} controlId="exampleForm.ControlInput1">
          <Form.Label>Id Pengepost</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" onChange={(e) => setJudul(e.target.value)} controlId="exampleForm.ControlInput1">
          <Form.Label>Judul Post</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" onChange={(e) => setIsi(e.target.value)} controlId="exampleForm.ControlTextarea1">
          <Form.Label>Text Area</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" onChange={(e) => setLike(e.target.value)} controlId="exampleForm.ControlInput1">
          <Form.Label>Jumlah Like</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>
        <Form.Group controlId="formFile" onChange={(e) => setFile(e.target.files[0])} className="mb-3">
          <Form.Label>Input file</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

      </Form>

        {/* <Textarea
            placeholder="Judul post..."
            autosize
            minRows={1}
            type="text"
            name="judul"
            onChange={(e) => setJudul(e.target.value)}
        />

        <Textarea
            placeholder="Ketik disini..."
            autosize
            minRows={2}
            type="text"
            name="isi"
            onChange={(e) => setIsi(e.target.value)}
        />

        <CFormInput type="file" id="formFile" /> */}
        
        <div className="postOptions">
          
          {/* <div className="option" style={{ color: "var(--photo)" }}
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          >
            <UilScenery />
            Photo
          </div> */}
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
          <button style={{ marginLeft: "auto" }} onClick={addPost} className="button ps-button">Post</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
            />
          </div>
        </div>


      </div>
    </div>
  );
};

export default PostEditor;
