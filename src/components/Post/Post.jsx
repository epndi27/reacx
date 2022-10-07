import React from 'react'
import './Post.css'
import { Icon } from '@iconify/react';


const Post = ({data}) => {
  return (
    <div className="Post">
        <img src={data.img} alt="" />


        <div className="postReact">
            <Icon icon="icon-park-solid:like" color="#7a77ff" height="30" />
            {/* if not like <Icon icon="icon-park-outline:like" color="#7a77ff" height="30" /> */}
            
            <Icon icon="bx:comment-detail" color="#7a77ff" height="30" />
            <Icon icon="bxs:share-alt" color="#7a77ff" height="30" />
        </div>


        <span style={{color: "var(--gray)", fontSize: '12px'}}>{data.likes} likes</span>

        <div className="detail">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>
    </div>
  )
}

export default Post