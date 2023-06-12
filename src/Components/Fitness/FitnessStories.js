import React from 'react'
import FitnessReusable from './FitnessReusable';
const FitnessStories = ({props}) => {
  const fitnessObj=[
    {
      img:'https://media1.popsugar-assets.com/files/thumbor/VAPe-sKElq1UEu9dg6UKo45UJtM/104x208:3315x3419/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/12/30/943/n/1922729/f2e892315e0a6e7e776859.71445957_/i/yoga-poses-to-get-strong-for-headstand.jpg',
      title:"HEAD STAND",
      para:"Headstand improves body awareness, circulation, and posture. It can help reduce swelling in your ankles and feet, boost energy, fight fatigue, and build confidence."
    },
    {
      img:'https://www.yogajournal.com/wp-content/uploads/2022/01/Forearm-Plank_Andrew-Clark.jpg',
      title:'ELBOW PLANK',
      para:'Plank pose is most commonly used as a transitional pose, moving the body from high to lower planes, and vice versa. It is used within the sun salutation (surya namaskara) sequences and vinyasa sequences, as the yogi steps back to plank and lowers into chatturanga. Plank pose is also known as a pose in its own right, and is often held for long periods of time to build strength, heat, and energy in the body. Because plank pose requires a certain extent of strength and endurance, it is an ideal pose to refocus and re-energize, and overcome from sluggish energy or ‘stuck’ emotions.'
    },
    {
      img:'https://global-uploads.webflow.com/5fe33d036237252135e3e74d/630cbacb4c81fd7eeb81e0cb_Chakrasana%20by%20cult.fit.webp',
      title:'CHAKRASANA POSE',
      para:'Chakrasana is a deep back-bending pose that is performed for spinal flexibility. The word Chakrasana comes from the words ‘chakra’ meaning wheel and ‘asana’ meaning posture. It is also known as Urdhva Dhanurasana, Bridge Pose, or the Full Wheel Pose, and is an advanced level pose. Chakrasana pose gets its name from the semi-circular position that your body assumes while performing this asana- that of a wheel.The Chakrasana yoga pose stretches the muscles in your chest, shoulders, hamstrings, spinal extensors, and hip flexors. '
    },
    {
      img:'https://www.artofliving.org/sites/www.artofliving.org/files/styles/facebook_thumb/public/unity2/blog_image/woman%20performing%20bow%20pose.jpeg?itok=qcH0TMLI',
      title:'DHANURASANA POSE',
      para:'Bow Pose (Dhanurasana) is an intermediate yoga pose similar to a backbend. It’s one of the 12 basic Hatha Yoga poses. By lifting your torso up and backward, the chest is opened and the back is deeply stretched. This pose is a great way to deeply stretch the back after a long day of hunching over.'
    },
    
    
  ]
  return (
    <div>
      <h2 style={{textAlign:'center',marginTop:'20px'}}>Latest Fitness Stories</h2>
          <hr style={{width:'5%',height:'2px',backgroundColor:'red'}}/>
      <div className='bollywoodContainer'>
        <div className='parent'>
      <FitnessReusable props={fitnessObj} />
        </div>
    
    </div>
</div>
 
  )
}

export default FitnessStories