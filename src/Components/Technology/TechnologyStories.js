import React from 'react'
import TechnologyReusable from './TechnologyReusable'
const TechnologyStories = ({props}) => {
  const technologyObj=[
    {
      img: 'https://miro.medium.com/max/480/1*VKY-Ldkt-iHobItql7G_5w.png',
      title: 'ANGULAR',
      description: 'Angular is a TypeScript-based, free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
      developer: 'Google'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU',
      title: 'REACT',
      description: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.',
      developer: 'Meta and community'
    },
    {
        img: 'https://static.ebayinc.com/static/assets/Uploads/Stories/Articles/node.js.jpg',
        title: 'NODE-JS',
        description: 'Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.',
        developer: 'Microsoft Corporation, Ryan Dahl, OpenJS Foundation, Bryan Cantrill'
    }
    
  ]
  return (
    <div>
      <h2 style={{textAlign:'center',marginTop:'20px'}}>Latest Technology Stories</h2>
          <hr style={{width:'5%',height:'2px',backgroundColor:'red'}}/>
      <div className='bollywoodContainer'>
        <div className='parent'>
        <TechnologyReusable props={technologyObj} />
        </div>
    
    </div>
</div>
 
  )
}

export default TechnologyStories