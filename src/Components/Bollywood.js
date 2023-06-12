import React from 'react'
import BollywoodStories from './Bollywood/BollywoodStories'
import Navbar from './Navbar'
const Bollywood = () => {
  return (
    <div>
        <Navbar/>
        <BollywoodStories props={true}/>  
    </div>
  )
}

export default Bollywood