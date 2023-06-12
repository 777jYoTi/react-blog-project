import React from 'react'
import FitnessStories from './Fitness/FitnessStories'
import Navbar from './Navbar'
const Fitness = () => {
  return (
    <div>
        <Navbar/>
        <FitnessStories props={true}/>
    </div>
  )
}

export default Fitness