import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'
import './ForumPage.css'


const ForumPage = () => {
  return (
    <div className="ForumPage">
        <ProfileSide/>
        <PostSide/>
        <RightSide/>
        
    </div>
  )
}

export default ForumPage