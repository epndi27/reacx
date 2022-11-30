import React, { useState, useRef, useEffect } from "react";
// import { Editor } from '@tinymce/tinymce-react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./PostEditor.css";
import { Input, Grid, Avatar, Row } from "@nextui-org/react";
import { Icon } from '@iconify/react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Menu} from '@mantine/core';
import { IconUserCircle, IconSettings,IconLogout, IconUser } from '@tabler/icons';
import {Link} from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import foto from "../../img/billgates.jpg";



function PostEditor () {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [NamaPengepost, setName] = useState("");
  const [IdPengepost, setIdPengepost] = useState("");
  const [img_path, setFile] = useState("");
  const [JudulPost, setJudul] = useState("");
  const [IsiPost, setIsi] = useState("");
  const [Like, setLike] = useState("");
  const [TipePost, setTipe] = useState("");

  async function addPost(){
    console.warn(NamaPengepost, IdPengepost, img_path, JudulPost, IsiPost, Like, TipePost)
    const formData = new FormData();
    formData.append('img_path', img_path);
    formData.append('NamaPengepost', NamaPengepost);
    formData.append('IdPengepost', IdPengepost);
    formData.append('JudulPost', JudulPost);
    formData.append('IsiPost', IsiPost);
    formData.append('Like', Like);
    formData.append('TipePost', TipePost);
    let result = await fetch("http://103.105.78.75/api/Forum/Upload",{
      method: 'POST',
      body: formData
    });
    // alert("Post Terkirim")
    toast.success('Berhasil dikirim!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    setShow(false)
    
  }


  return (
    <>
      <div className="PostShare" >
        <Link to="/forum/profile">
          <Icon className="ProfDesktop" icon="healthicons:ui-user-profile" color="#cfcdcd" height="50"/>
        </Link>
        
        <Menu shadow="md" width={200} className="ProfMobile">

          <Menu.Target>
            <Icon icon="healthicons:ui-user-profile" color="#cfcdcd" height="70"/>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Application</Menu.Label>
            {/* <Link to={'/forum/profile'}>
              <Menu.Item icon={<IconUserCircle  size={14} />}>Profile</Menu.Item>
            </Link> */}
            <Menu.Item icon={<IconUserCircle  size={14} />}>Profile</Menu.Item>

            <Menu.Item icon={<IconSettings size={14} />}>Setting</Menu.Item>

            <Menu.Divider />
            <Menu.Item color="red" icon={<IconLogout size={14} />}>Log out my account</Menu.Item>
          </Menu.Dropdown>
        </Menu>

          <Grid.Container gap={2} css={{ color: "$text" }} onClick={handleShow}>
            <Row style={{ width: "100%" }}>
              <Grid style={{ width: "100%" }}>
                <Input 
                  readOnly 
                  size="xl" 
                  width="100%" 
                  initialValue="Tambahkan post Anda" 
                />
              </Grid>
              <Grid>
                <Avatar size="lg" squared icon={<Icon icon="carbon:add" color="#7a77ff" width="43" height="43" />} />
              </Grid>
            </Row>
          </Grid.Container>

    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambahkan Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" onChange={(e) => setName(e.target.value)} controlId="exampleForm.ControlInput1">
              <Form.Label>Nama Pengepost</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" onChange={(e) => setIdPengepost(e.target.value)} controlId="exampleForm.ControlInput1">
              <Form.Label>Id Pengepost</Form.Label>
              <Form.Control type="id" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" onChange={(e) => setJudul(e.target.value)} controlId="exampleForm.ControlInput1">
              <Form.Label>Judul Post</Form.Label>
              <Form.Control type="judul" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" onChange={(e) => setIsi(e.target.value)} controlId="exampleForm.ControlTextarea1">
              <Form.Label>Text Area</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" onChange={(e) => setTipe(e.target.value)} controlId="exampleForm.ControlInput1">
              <Form.Select aria-label="Default select example">
                <option>Tipe Post</option>
                <option value="Diskusi">Diskusi</option>
                <option value="Pertanyaan">Pertanyaan</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formFile" onChange={(e) => setFile(e.target.files[0])} className="mb-3">
              <Form.Label>Input file</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to={'/forum/profile'}>
            <Button variant="primary" onClick={addPost}>
              Save Changes
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default PostEditor;
