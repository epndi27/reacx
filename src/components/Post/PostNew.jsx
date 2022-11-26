import React, { useState, useEffect } from "react";
import "./Post.css";
import { Icon } from "@iconify/react";
import { User, Grid, Card, Text } from "@nextui-org/react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Menu } from '@mantine/core';
import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight } from '@tabler/icons';

function PostNew() {
  const url = "http://103.105.78.75/api/Forum/List";
  const [postdata, setPostdata] = useState([]);

  useEffect(() => {
    getDataPost();
  }, []);

  async function getDataPost()
  {
    let result = await fetch("http://103.105.78.75/api/Forum/List");
    result = await result.json();
    setPostdata(result.reverse())
    console.log(result);
    
  }

  return (
    <div >
      {postdata.map((item) => {
        return (
            <CardPost 
                key={item.IdPost} 
                idPost={item.IdPost}
                id={item.IdPengepost} 
                nama={item.NamaPengepost} 
                judul={item.JudulPost} 
                isi={item.IsiPost} 
                tgl={item.created_at} 
                image={item.img_path}
                 />
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
      <div className="Post" style={{gap: "2rem"}}>
        <div className="container">
            <Row>
                <Col sm={8}>
                <User style={{ margin: "10px", paddingLeft: "auto" }}  src={`http://103.105.78.75/${props.image}`} 
                name=<b>
                    {props.nama}
                </b>>
                    <User.Link color="#7a77ff" href="https://nextui.org/">
                    {props.tgl} (ini buat tipe user)
                    </User.Link>
                </User>
                </Col>
                <Col sm={4}>
                <Menu position="right-start" shadow="md" width={200}>
                    <Menu.Target>
                    <Icon className="float-end " style={{ marginTop: "10px", marginRight: "10px" }} icon="ci:more-vertical" color="#7a77ff" width="30" />
                    </Menu.Target>


                    <Menu.Dropdown>
                    <Menu.Item color="red" onClick={()=>deletePost(props.idPost)} icon={<IconTrash size={14} />}>Hapus post saya</Menu.Item>
                    </Menu.Dropdown>
                </Menu>
                </Col>
            </Row>
            {/* <Row>
                <Col sm>
                <div className="float-start">
                    <h4>{props.judul}</h4>
                    <span>{props.isi}</span>
                </div>
                </Col>
            </Row> */}

            <Row>
                <div className="content">
                    <h4>{props.judul}</h4>
                    <span>{props.isi}</span>
                    <img src={`http://103.105.78.75/${props.image}`} alt="" />

                    <div className="postReact">
                        <Icon icon="icon-park-solid:like" color="#7a77ff" height="30" />
                        {/* if not like <Icon icon="icon-park-outline:like" color="#7a77ff" height="30" /> */}

                        <Icon icon="bx:comment-detail" color="#7a77ff" height="30" onClick={handleShow} />

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
            </Row>
        </div>
      </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nama Pengoment</Form.Label>
              <Form.Control
                type="name"
                placeholder="Nama anda adalah..."
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Ketik komen anda disini..</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};


export default PostNew;