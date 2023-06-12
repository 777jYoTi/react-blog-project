import React from 'react'
import Navbar from './Navbar'
import BollywoodStories from './Bollywood/BollywoodStories'
import TechnologyStories from './Technology/TechnologyStories'
import HollywoodStories from './Hollywood/HollywoodStories'
import FoodStories from './Food/FoodStories'
import FitnessStories from './Fitness/FitnessStories'
const Home = () => {
  
  return (
    <div>
        <Navbar/>
        <div className='flexrow'>
          <div>
          <img className='img1' style={{borderRadius:'10px'}} src='https://wallpapercave.com/wp/9VhZtYR.jpg'width='90%' height='400px' alt='404 error'></img>
          </div>
          <div className='flexcol'>
            <div>
            <img className='img2' style={{borderRadius:'10px',marginTop:'8px'}} src='https://wallpaperaccess.com/full/1534922.jpg'width='90%' height='190px' alt='404 error'></img>
            </div>
            <div>
            <img className='img3' style={{borderRadius:'10px',marginTop:'8px'}}  src='https://i.pinimg.com/736x/eb/f4/fb/ebf4fb1b6f50985dc653c7fd51ccad23--north-cascades-national-park-national-parks-usa.jpg' width='90%' height='190px' alt='404 error'></img>
            </div>
          </div>
        
      
        </div>
                 
        {/* technology */}
        <TechnologyStories props={true}/>
        {/* <TechnologyReusable/> */}
        {/* bollywood */}
        
        <BollywoodStories props={true}/>
        {/* hollywood */}
        <HollywoodStories props={true}/>
        {/* <HollywoodReusable/> */}
        {/* food */}
        <FoodStories props={true}/>   
        {/* <FoodReusable/> */}
        {/* fitness */}
        <FitnessStories props={true}/>
        {/* <FitnessReusable/> */}
        </div>
  )
}

export default Home