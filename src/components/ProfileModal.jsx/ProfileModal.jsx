import { Modal, Space, useMantineTheme } from "@mantine/core";
import React, { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";



function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();
  const [value, setValue] = useState("default");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  const [NamaUser, setUserName] = useState("");
  const [ProfilePic_Path, setProfilePic] = useState("");

  const [TipeUser, setTipeUser] = useState("");
  const [Kelamin, setKelamin] = useState("");
  const [Profesi, setProfesi] = useState("");

  async function addProfile(){
    console.warn(NamaUser, ProfilePic_Path,)
    const formData = new FormData();
    formData.append('IdUser', 132323);
    formData.append('ProfilePic_Path', ProfilePic_Path);
    formData.append('NamaUser', NamaUser);

    formData.append('TipeUser', TipeUser);
    formData.append('Kelamin', Kelamin);
    formData.append('Profesi', Profesi);

    let result = await fetch("http://103.105.78.75/api/Profile/Update",{
      method: 'POST',
      body: formData
    });
    
  }

  return ( 
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="lg"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Profile User</h3>
        <Form>
        <Form.Group hidden className="mb-3" onChange={(e) => setUserName(e.target.value)} controlId="exampleForm.ControlInput1">
          <Form.Label>Id User</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>

        <Row >
        <Form.Group as={Col} className="mb-3" onChange={(e) => setUserName(e.target.value)} controlId="exampleForm.ControlInput1">
          <Form.Label>Nama User</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>

        <Form.Group as={Col} className="mb-3" onChange={(e) => setProfesi(e.target.value)} controlId="exampleForm.ControlTextarea1">
          <Form.Label>Profesi</Form.Label>
          {/* <Form.Select aria-label="Default select example">
            <option>Open this Profesi</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select> */}
          <Form.Control type="email" placeholder="" />
        </Form.Group>
        </Row>
        
        <Row>
        <Form.Group as={Col} className="mb-3" onChange={(e) => setTipeUser(e.target.value)} controlId="exampleForm.ControlInput1">
          <Form.Label>Tipe User </Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Open this Tipe User</option>
            <option value="Beginer">Beginer</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </Form.Select>
          {/* <Form.Control type="email" placeholder="" /> */}
        </Form.Group>
        <Form.Group as={Col} className="mb-3" onChange={(e) => setKelamin(e.target.value)} controlId="exampleForm.ControlInput1">
          <Form.Label>Kelamin</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Open this Kelamin</option>
            <option value="Pria">Pria</option>
            <option value="Wanita">Wanita</option>
            <option value="Waria">Waria</option>
          </Form.Select>
          {/* <Form.Control type="email" placeholder="" /> */}
        </Form.Group>
        </Row>

        <Form.Group controlId="formFile" onChange={(e) => setProfilePic(e.target.files[0])} className="mb-3">
          <Form.Label>Profile Image</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

      </Form>

        {/* <div>
          <input
            type="text"
            className="infoInput"
            name="Name"
            placeholder="Nama"
          />

          <input
            type="text"
            className="infoInput"
            name="Profesi"
            placeholder="Profesi"
          />
        </div>

        <div>
          <select className="infoInput" defaultValue={value} onChange={handleChange}>
            <option value="default" >
              Pilih Tipe User : 
            </option>
            <option value="beginner">Beginner</option>
            <option value="beginner">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div >
          <select className="infoInput" defaultValue={value} onChange={handleChange}>
            <option value="default" disabled hidden>
              Kelamin
            </option>
            <option value="beginner">Laki-Laki</option>
            <option value="beginner">Perempuan</option>
          </select>
        </div>

        <div>
            Profile Image 
            <input type="file" name='profileImg'/>
            <Space h="xs" />
            Cover Image
            <input type="file" name="coverImg" />
        </div> */}
        
      </form>
      <button style={{ marginLeft: "auto" }} onClick={addProfile} className="button infoButton">Update</button>
    </Modal>
  );
}

export default ProfileModal;
