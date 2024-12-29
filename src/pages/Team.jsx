import React from 'react'
import TeamCarousel from '../components/TeamCoursel'
import Heading from '../components/Heading'

const Team = () => {
  return (
    <>
    <div className="pt-16"></div>
    <Heading heading="Meet the Team" quote="IEEE BVCOE: Igniting innovation, fostering collaboration, and shaping the future of technology" />
    <TeamCarousel />
    </>
    
  )
}

export default Team