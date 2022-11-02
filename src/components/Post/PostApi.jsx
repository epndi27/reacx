import React, { useState, useEffect } from "react";
import './Post.css'
import { Icon } from '@iconify/react';
import { User } from "@nextui-org/react";
import CommentModal from "../CommentModal/CommentModal";
import axios from "axios";
import { IoRemove } from "react-icons/io5";


const PostApi = () => {
    const url = 'http://103.105.78.75/api/Forum/List';
    const [postdata, setPostdata] = useState([]);
    

    const getDataPost = async()=> {
        const response = await fetch(url);
        const dataPost = await response.json();
        setPostdata(dataPost);
        console.log(postdata);
    }

    useEffect( ()=> {
        getDataPost();
    })

    return(
        <div className="Post">
            { postdata.map( (item)=>{
                return(
                    <div className="">
                        <CardPost
                        key={item.IdPost}
                        id={item.IdPengepost}
                        nama={item.NamaPengepost}
                        judul={item.JudulPost}
                        isi={item.IsiPost}
                        like={item.Like}
                        image={item.img_path}
                        />
                    </div>
                )
            })}
        </div>
    )
}

function CardPost(props){
    return(
        <div className="Post">
        <div>
          <User
            src={"http://103.105.78.75/${props.image}"}
            name= <b>{props.nama}</b>>
            <User.Link color="#7a77ff" href="https://nextui.org/">{props.id}</User.Link>
          </User>
        </div>


        <img src={"props.image"} alt="" />

        <div className="Isipost">
            <h4>{props.judul}</h4>
            <span>{props.isi}</span>
        </div>

        <div className="postReact">
            <Icon icon="icon-park-solid:like" color="#7a77ff" height="30" />
            {/* if not like <Icon icon="icon-park-outline:like" color="#7a77ff" height="30" /> */}

            <Icon icon="bx:comment-detail" color="#7a77ff" height="30" />
            
            {/* <Icon icon="bx:comment-detail" color="#7a77ff" height="30" onClick={() => setModalOpened(true)} /> */}
            {/* <CommentModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
            /> */}
            <Icon icon="bxs:share-alt" color="#7a77ff" height="30" />
        </div>

        <span style={{color: "var(--gray)", fontSize: '12px'}}>{props.like} likes</span>

        <div className="Comment">
          <span><b>{props.nama}</b></span>
          <span> {props.judul}</span>
        </div>

    </div>
    )
}

export default PostApi