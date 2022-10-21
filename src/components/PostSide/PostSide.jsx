import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'
import './PostSide.css'
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PostApi from '../Post/PostApi';
import ImageUpload from './ImageUpload';
import ImageGallery from './ImageGallery';

function PostSide () {


  return (
   <div className="PostSide">
      <ImageGallery/>
      {/* <PostApi/> */}
       {/* <PostShare/>
       <Posts/> */}
   </div>
  )
}

export default PostSide