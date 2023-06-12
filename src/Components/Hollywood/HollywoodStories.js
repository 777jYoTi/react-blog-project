import React from 'react'
import HollywoodReusable from './HollywoodReusable'
const HollywoodStories = ({props}) => {
  const hollywoodObj=[
    {
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Black_Panther_Wakanda_Forever_poster.jpg/220px-Black_Panther_Wakanda_Forever_poster.jpg',
      title: 'BLACK PANTHER: WAKANDA FOREVER',
      description: 'The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T Challa.',
      date: '11 November 2022'
    },
    {
      img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQXDaxvXPpbQkUf2ifM7yg6b-AIsZT3o_hMf8nFLcttL-PVAM6r',
      title: 'AVATAR',
      description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
      date: '18 December 2009'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Black_Adam_%28film%29_poster.jpg',
        title: 'BLACK ADAM',
        description: 'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods--and imprisoned just as quickly--Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.',
        date: '21 October 2022'
    }
    
  ]
  return (
    <div>
      <h2 style={{textAlign:'center',marginTop:'20px'}}>Latest Hollywood Stories</h2>
          <hr style={{width:'5%',height:'2px',backgroundColor:'red'}}/>
      <div className='bollywoodContainer'>
      
          <div className='hcontainer'>
            <div className='holly-left'>
            <HollywoodReusable props={hollywoodObj} />
            </div>
            <div className='holly-right'>
 advertisement
</div>
          </div>
        
        </div>
    
    </div>

 
  )
}

export default HollywoodStories