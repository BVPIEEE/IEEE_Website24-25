import React from 'react'
import Heading from '../components/Heading'
import Core from '../components/Core'
import TopLeaders from '../components/TopLeaders'

const Team = () => {
  return (
    <>
    <div className="pt-16"></div>
    <Heading heading="Meet the Team" quote="IEEE BVCOE: Igniting innovation, fostering collaboration, and shaping the future of technology" />
    <TopLeaders />
    <Core /> 
    </>
    
  )
}

export default Team