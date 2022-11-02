import React, { useState, useEffect } from "react";
import './Post.css'
import { Icon } from '@iconify/react';
import { User } from "@nextui-org/react";
import CommentModal from "../CommentModal/CommentModal";
import axios from "axios";


function ShowData(){
    const [data, setData]=useState([]);
    useEffect( async ()=>{
        let result = await fetch("http://localhost:8000/api/Forum/List");
        result = await result.json();
        setData(result)
    },[])
    console.warn("result", data)

    return(
        <div className="Post">
            <div>
                {
                    data.map((item)=>
                     
                    )
                }
            </div>
    </div>
    )
}

export default ShowData