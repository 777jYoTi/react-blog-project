import React from 'react'
import HollywoodStories from './Hollywood/HollywoodStories'
import Navbar from './Navbar'
const Hollywood = () => {
  return (
    <div>
        <Navbar/>
        <HollywoodStories props={true}/>
    </div>
  )
}

export default Hollywood