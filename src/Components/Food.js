import React from 'react'
import FoodStories from './Food/FoodStories'
import Navbar from './Navbar'
const Food = () => {
  return (
    <div>
        <Navbar/>
        <FoodStories props={true}/>    
    </div>
  )
}

export default Food