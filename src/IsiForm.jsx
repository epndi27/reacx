import React, { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import { Modal, Space, useMantineTheme } from "@mantine/core";
import styled from "styled-components";
import {Link} from "react-router-dom";

function IsiForm({}){
    const theme = useMantineTheme();
    const [nilai, setNilai] = useState("default");

    const handleChange = (e) => {
        setNilai(e.target.nilai);
     };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nilai);
     };

    const [NamaUser, setUserName] = useState("");
    const [ProfilePic_Path, setprofilePic] = useState("");

    const [TipeUser, setTipeUser] = useState("");
    const [Kelamin, setKelamin] = useState("");
    const [Profesi, setProfesi] = useState("");

    async function addIsi(){
        console.warn(NamaUser, ProfilePic_Path,)
        const formData = new FormData();
        formData.append('IdUser', 15656);
        formData.append('ProfilePic_Path', ProfilePic_Path);
        formData.append('NamaUser', NamaUser);
    
        formData.append('TipeUser', TipeUser);
        formData.append('Kelamin', Kelamin);
        formData.append('Profesi', Profesi);
    
        let result = await fetch("http://103.105.78.75/api/Profile/Upload",{
          method: 'POST',
          body: formData
        });
        
      }

      return (
            <Section>
                <div className="container">
                <form>
                <h3>Profile User</h3>
                <Form.Group hidden className="mb-3" onChange={(e) => setUserName(e.target.nilai)} controlId="exampleForm.ControlInput1">
                    <Form.Label>Id User</Form.Label>
                    <Form.Control type="email" placeholder="" />
                </Form.Group>

                <Row >
                <Form.Group as={Col} className="mb-3" onChange={(e) => setUserName(e.target.nilai)} controlId="exampleForm.ControlInput1">
                    <Form.Label>Nama User</Form.Label>
                    <Form.Control type="email" placeholder="" />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" onChange={(e) => setProfesi(e.target.nilai)} controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Profesi</Form.Label>
                    {/* <Form.Select aria-label="Default select example">
                        <option>Open this Profesi</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select> */}
                <   Form.Control type="email" placeholder="" />
                </Form.Group>
                </Row>

                <Row>
                <Form.Group as={Col} className="mb-3" onChange={(e) => setTipeUser(e.target.nilai)} controlId="exampleForm.ControlInput1">
                    <Form.Label>Tipe User </Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Open this Tipe User</option>
                        <option value="Beginer">Beginer</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </Form.Select>
                    {/* <Form.Control type="email" placeholder="" /> */}
                </Form.Group>
                <Form.Group as={Col} className="mb-3" onChange={(e) => setKelamin(e.target.nilai)} controlId="exampleForm.ControlInput1">
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

                <Form.Group controlId="formFile" onChange={(e) => setprofilePic(e.target.files[0])} className="mb-3">
                    <Form.Label>Profile Image</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                </form>
                <Link to={'/ForumPage'}>
                    <button style={{ marginLeft: "auto" }} onClick={addIsi} className="button infoButton">Upload</button>
                </Link>
                </div>
                
            </Section>
      );
}
const Section = styled.section`
  
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  
  .title {
    text-align: center;
    h2 {
      font-size: 3rem;
      margin-bottom: 1rem;
      font-family: 'Montserrat';
    }
    p {
      font-size: 20px;
      margin-bottom: 4rem;
      font-family: 'Montserrat';
    }
  }
  .container {
    background-color: #E8F3D6;
    padding: 5rem;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    .ellipse {
      height: 30rem;
      width: 30rem;
      background-color: #ae54c27d;
      border-radius: 100%;
      filter: blur(2000px);
      opacity: 0.5;
      position: absolute;
      bottom: -30%;
      left: -10%;
      z-index: 1;
    }
    `;
export default IsiForm;