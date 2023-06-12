import React from 'react'
import Navbar from './Navbar'
import TechnologyStories from './Technology/TechnologyStories'
const Technology = () => {
  return (
    <div>
        <Navbar/>
        <TechnologyStories props={true}/>
    </div>
  )
}

export default Technology