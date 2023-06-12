import React from 'react'
import FoodReusable from './FoodReusable';
const FoodStories = ({props}) => {
  const foodObj=[
    {
      img: 'https://pristineorganics.com/wp-content/uploads/2019/06/03-1-1-1.jpg',
      title: 'MILLETS',
      description: 'Generally, millets are small-grained, annual, warm-weather cereals belonging to the grass family. They are highly tolerant of drought and other extreme weather conditions and have a similar nutrient content to other major cereals.'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHEjlalMuVUPtZIcnic7HtYyKymdG72gQYB8c7Ld-fzvwty9stQdO6B8BaLLKWojy0SwI&usqp=CAU',
      title: `PROTEIN BAR`,
      description: 'When you’re working out later in the day, have a small snack about an hour before you get started. A sports bar that has 200 calories or less is a good option.Look for a bar with low-fiber content, ideally 3 grams or less. Too much fiber before a workout can upset your stomach.'
    },
    {
      img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/grilled-broccoli-1648146826.jpeg',
      title: 'BROCCOLI',
      description: 'Broccoli is a rich source of vitamins, minerals, and antioxidants. Antioxidants can help prevent the development of various conditions.'
    },
    {
      img: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/271/271157/bananas-chopped-up-in-a-bowl.jpg',
      title: 'BANANA',
      description: 'Don’t have much time before you head to the gym? Eat an apple or a banana 5 or 10 minutes before your workout for some quick, natural energy.'
    }
    
    
  ]
  return (
    <div>
      <h2 style={{textAlign:'center',marginTop:'20px'}}>Latest Fitness Stories</h2>
          <hr style={{width:'5%',height:'2px',backgroundColor:'red'}}/>
      <div className='bollywoodContainer'>
        <div className='parent'>
      <FoodReusable props={foodObj} />
        </div>
    
    </div>
</div>
 
  )
}

export default FoodStories