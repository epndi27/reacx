import React, { useState } from "react";
import './Post.css'
import { Icon } from '@iconify/react';
import { User } from "@nextui-org/react";
import CommentModal from "../CommentModal/CommentModal";


const Post = ({data}) => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="Post">
        <div>
          <User
            src={data.profile}
            name= <b>{data.name}</b>>
            <User.Link color="#7a77ff" href="https://nextui.org/">{data.usertype}</User.Link>
          </User>
        </div>


        <img src={data.imgpost} alt="" />

        <div className="detail">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>

        <div className="postReact">
            <Icon icon="icon-park-solid:like" color="#7a77ff" height="30" />
            {/* if not like <Icon icon="icon-park-outline:like" color="#7a77ff" height="30" /> */}
            
            <Icon icon="bx:comment-detail" color="#7a77ff" height="30" onClick={() => setModalOpened(true)} />
            <CommentModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
            />
            <Icon icon="bxs:share-alt" color="#7a77ff" height="30" />
        </div>


        <span style={{color: "var(--gray)", fontSize: '12px'}}>{data.likes} likes</span>

    </div>
  )
}

export default Post