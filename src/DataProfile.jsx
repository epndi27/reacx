import React, { useState , useEffect} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Profile from "../src/img/billgates.jpg";
import ForumPage from '../src/Pages/ForumPage/ForumPage'


const DataProfile = () => {
    const url = "http://103.105.78.75/api/Profile/List";
    const [postakun, setPostakun] = useState([]);

    const getDataAkun = async () => {
      const response = await fetch(url);
      const dataAkun = await response.json();
      setPostakun(dataAkun);
      console.log(postakun);

      // function handleUploadChange(e){
      //   console.log(e.target.files[0]);
      //   let uploaded = e.target.files[0];
      //   setImage(URL.createObjectURL(uploaded));
      // }
    };

    useEffect(() => {
      getDataAkun();
    }, []);

    return (
        <div className="Post">
        {postakun.map((item) => {
          return (
            <div className="">
              <CardDataProfile
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
    )
}

function CardDataProfile(props) {
    const AkunPage = true;

    return(
        <Section>
            <div className="container">
                <form method="">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                {/* <img src={Profile} alt="profil" style={{ width: "200px", height:"200px" }}/> */}
                                <img src={`http://103.105.78.75/${props.image}`} alt="profil" style={{ width: "200px", height:"200px" }}/>
                            </div>
                            
                        </div>

                        <div className="col-md-6">
                            <div className="profile-head">
                                <h4>Nama User : {props.nama}</h4>
                                <h6 className="col-md-4">Tipe : {props.Tipe}</h6>
                                
                                <ul className="nav nav-tabs" role="tablist" >
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" >About</a>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" >Timeline</a>
                                    </li> */}

                                </ul>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <Link to={'/ForumPage'}>
                                <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Kembali Ke Forum" />
                            </Link>
                        </div>
                    </div>

                    <div className="row">
                        {/* left side url */}

                            <div className="col-md-4 mt-3">
                                {/* <div className="profile-work">
                                    <p>WORK LINK</p>
                                    <a href="https://www.youtube.com/" target="_billgates">Youtube</a> <br />
                                    <a href="https://www.youtube.com/" target="_billgates">Youtube</a> <br />
                                    <a href="https://www.youtube.com/" target="_billgates">Youtube</a> <br />
                                    <a href="https://www.youtube.com/" target="_billgates">Youtube</a> <br />
                                </div> */}
                            </div>

                        {/* right side data toggle */}
                            
                            <div className="col-md-8 pl-5 profile-info">
                                <div className="tab-content profile-tab" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" >
                                        
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>ID User</label>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <p>{props.id}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Nama User</label>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <p>{props.nama}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Tipe User</label>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <p>{props.Tipe}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Kelamin</label>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <p>{props.Kelamin}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Profesi</label>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <p>{props.profesi}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                    </div>

                </form>

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

export default DataProfile