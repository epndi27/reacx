import React from 'react'
import InfoCard from '../InfoCard/InfoCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import "./ProfileLeft.css"

const ProfileLeft = () => {
  return (
   <div className="ProfileSide">
       <LogoSearch/>
       <InfoCard/>
   </div>
  )
}

export default ProfileLeft