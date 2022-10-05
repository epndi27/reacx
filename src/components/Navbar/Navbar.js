import React from 'react'
import "./navbar.css";
import { Navbar, Text, Avatar, Dropdown, Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon.js";
import rpcLogo from "../Images/rpc.png" 
import { Link } from 'react-router-dom';

export default function App() {
  return (
      <Navbar isBordered variant="sticky">
        <Navbar.Brand css={{ mr: "$4" }}>
          <img src={`${rpcLogo}`} className="rpcLogo" alt="" />
        </Navbar.Brand>
        <Navbar.Content
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}
        >
          <Navbar.Item
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
          >
            <Input
              clearable
              contentLeft={
                <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
              }
              contentLeftStyling={false}
              css={{
                w: "100%",
                "@xsMax": {
                  mw: "300px",
                },
                "& .nextui-input-content--left": {
                  h: "100%",
                  ml: "$4",
                  dflex: "center",
                },
              }}
              placeholder="Search..."
            />
          </Navbar.Item>
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="primary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" href="{`${Profileimage}`}" css={{ height: "$18" }}>
              <Link to="/Profile/6123123b2b31n23">
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item key="edit_profle">Edit Profile</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
      </Navbar>
  );
}


// import React from 'react'
// import "./navbar.css";
// import searchIcon from "../Images/search.png";
// import Notifications from "../Images/bell.png";
// import Message from "../Images/message.png";
// import Profileimage from "../Images/Profile.png"
// import rpcLogo from "../Images/rpc.png" 
// import { Link } from 'react-router-dom';
// export default function Navbar() {
//   return (
//     <div className='mainNavbar'>
//           <div>
//                     <img src={`${rpcLogo}`} className="rpcLogo" alt="" />
//           </div>
//           <div>
//                     <div className='searchInputContainer'>
//                               <img src={`${searchIcon}`} className="searchIcon" alt="" />
//                               <input type="text" className='searchInput' placeholder='search your friends' name="" id="" />
//                     </div>
//           </div>
//           <div className='IconsContainer'>
//                     <img src={`${Notifications}`} className="Icons" alt="" />
//                     <img src={`${Message}`} className="Icons" alt="" />
//                     <Link to="/Profile/6123123b2b31n23">
//                     <div style={{display:'flex' , alignItems:'center'}}>
//                               <img src={`${Profileimage}`} className="ProfileImage" alt="" />
//                               <p style={{marginLeft:'5px'}}>Suman</p>
//                     </div>
//                     </Link>
//           </div>
//     </div>
//   )
// }
