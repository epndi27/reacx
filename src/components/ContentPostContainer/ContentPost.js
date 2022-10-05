import React from 'react'
import "./contentpost.css";
import { Button} from "@nextui-org/react";
import { Textarea, Grid } from "@nextui-org/react";
import imageIcon from "../Images/gallery.png"
import emojiIcon from "../Images/cat-face.png"
import VideoIcon from "../Images/video.png"
import profileimage from "../Images/Profile.png"
export default function ContentPost() {
  return (
    <div>
      <div className='ContentUploadContainer'>
        <Grid.Container gap={2.5} css={{ mt: "10px" }}>
          <Grid>
            <Textarea style={{height: "375px", width: "520px"}} placeholder="Default Textarea" />
          </Grid>
          <Grid css={{ mb: "20px" }}>
            <Button style={{ justifyContent: 'flex-end', marginLeft:"400px", paddingLeft:"20px" , paddingTop:"6px" , paddingBottom:"6px"}} flat color="secondary" auto>
              Post
            </Button>
          </Grid>
        </Grid.Container>
      </div>
    </div>
    // <div>
    //   <div className='ContentUploadContainer'>
    //     <div style={{ display: "flex", alignItems: "center", padding: 10 }}>
    //       <img src={`${profileimage}`} className="profileimage" alt="" />
    //       <input type="text" className='contentWritingpart' placeholder='Write your real thought.....' />
    //     </div>
    //     <div style={{ display: 'flex', marginLeft: '10px', marginBottom: '10px' }}>
    //       <div>
    //         <img src={`${imageIcon}`} className="icons" alt="" />
    //         <img src={`${emojiIcon}`} className="icons" alt="" />
    //         <img src={`${VideoIcon}`} className="icons" alt="" />
    //         <Button style={{ justifyContent: 'flex-end', marginLeft:"280px" , paddingLeft:"20px" , paddingRight:"20px" , paddingTop:"6px" , paddingBottom:"6px"}} flat color="secondary" auto>
    //           Post
    //         </Button>
    //         {/* <button style={{ justifyContent: 'flex-end', marginLeft:"280px" , paddingLeft:"20px" , paddingRight:"20px" , paddingTop:"6px" , paddingBottom:"6px" , border:"none" , backgroundColor:"black" , color:"white" , borderRadius:"5px" , cursor:"pointer"}}>Post</button> */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}
