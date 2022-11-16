// import React, { Component } from "react"
// import axios from 'axios';
// // import React, { useState } from "react";
// import Cover from "../../img/cover.jpg";
// import Profile from "../../img/irene.jpg";
// import { UilPen } from "@iconscout/react-unicons";
// import ProfileModal from "../ProfileModal.jsx/ProfileModal";
// import "./ProfileCard.css";
// // import qs from 'querystring'  

// const api = 'http://103.105.78.75/api/Profile/List'

// class ProfileCard extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             profil:[],
//             response:'',
//             display:"none",
//         }
//     }

//     componentDidMount(){
//         axios.get(api).then(res => {
//           this.setState({
//             profil: res.data
//           })
//         } )
//     }

//     render() {
//         return (
//             <><>
//                     {this.state.profil.map((profil) => {
//                         return (
//                           <div className="ProfileCard">
//                         <div className="ProfileImages">
//                           <img src={Cover} alt="" />
//                           <img src={profil.ProfilePic_Path} key={profil.IdProfile}/>
//                         </div>
                  
//                         <div style={{ marginLeft: '12rem' }} >
//                             <UilPen
//                               width="2rem"
//                               height="1.2rem"
//                               //onClick={() => setModalOpened(true)}
//                             />
//                             {/* <ProfileModal
//                               modalOpened={modalOpened}
//                               setModalOpened={setModalOpened}
//                             /> */}
//                         </div>
                  
//                         <div className="ProfileName">
//                           <span>Irene</span>
//                           <span>Advanced</span>
//                         </div>
                  
//                         <div className="followStatus">
//                           <hr />
//                           <div>
//                             <div className="follow">
//                               <span>6,890</span>
//                               <span>Likes</span>
//                             </div>
//                             {/* {ProfilePage && (
//                               <>
//                                 <div className="vl"></div>
//                                 <div className="follow">
//                                   <span>3</span>
//                                   <span>Posts</span>
//                                 </div>
//                               </>
//                             )} */}
//                           </div>
//                           <hr />
//                         </div>
//                         {/* {ProfilePage ? "" : <span>My Profile</span>} */}
//                       </div>
//                         );
//                     })}
//                 </></>
//         );
//     }
// }

// export default ProfileCard;

