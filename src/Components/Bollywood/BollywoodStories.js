import React from 'react'
import BollywoodReusable from './BollywoodReusable';
const BollywoodStories = ({props}) => {
  const bollywoodObj=[
    {
      img:'https://m.media-amazon.com/images/M/MV5BOTQ5Nzc3NzAtMzZlMS00ZWJjLWIxMGMtNDU4ZTQ1NmNjMjc5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
      title:"KABHI KHUSHI KABHIE GHAM",
      para:"Yashvardhan Raichand is a snobbish man, he breaks ties with his elder son Rahul, for marrying a girl with lower social status. When his younger son Rohan returns home, he is upset to know that his brother no longer lives with them. Rohan decides to reunite his family and goes to London and finds Rahul. But, the question is will he be successful in convincing his egoistic father for a reunion?",
      year:'14 December 2001'
    },
    {
      img:'https://upload.wikimedia.org/wikipedia/en/9/95/Krrish_poster.jpg',
      title:'KRRISH',
      para:'Krrish is the story of a simple village boy Krishna (Hrithik Roshan) who lives with his grandmother (Rekha) having lost his parents to misfortune. Krishna meets Priya (Priyanka Chopra) when she comes with her group for a trek from Singapore. Having fallen in love with her, he rushes to Singapore on being called by Priya who is trying to save her job by getting Krishna to Singapore and having him pull unnaturally jaw-dropping stunts - something he does regularly in his village. But when he reaches Singapore, the biggest truth of his life uncovers itself, transforming him into ``Krrish``, a gallany superhero. What is it that alters his life to an extent as this?',
      year:'23 June 2006'
    },
    {
      img:'https://upload.wikimedia.org/wikipedia/en/9/90/Bang_Bang_%282014_Film%29.jpg',
      title:'BANG BANG',
      para:'A young bank receptionist gets mixed up with Rajveer Nanda, a man who has a mysterious background.',
      year:'2 October 2014'
    },
    {
      img:'https://m.media-amazon.com/images/M/MV5BYmRiMmZmZGMtNjFhNi00MTIwLTlkNjQtNGM4ZTEzOWFmZmIwXkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_FMjpg_UX1000_.jpg',
      title:'MUJHE DOSTHI KAROGE',
      para:'"What would you do if the one you loved was not actually the one you loved. What would you do if your best friend was in love with the one you love. What would you do if your best friends are sacrificing their love for you. Meet Raj (Hrithik Roshan), Pooja (Rani Mukerji) and Tina (Kareena Kapoor)- 3 best friends thrown into a situation that time, letters, love and separation have created for th',
      year:'9 August 2002'
    },
    {
      img:'https://s3images.zee5.com/wp-content/uploads/sites/7/2022/01/Untitled-design-2022-01-26T151639.382.jpg',
      title:'AGNEEPATH',
      para:'A young boys father is lynched before his eyes fifteen years later he returns home for revenge.',
      year:'26 January 2012'
    },
    {
      img:'https://pbs.twimg.com/media/Fd1D0-KaEAMU3Im?format=jpg&name=900x900',
      title:'VIKRAM VEDHA',
      para:'A tough police officer sets out to track down and kill an equally tough gangsters.',
      year:'30 September 2022'
    }
    
  ]
  return (
    <div>
      <h2 style={{textAlign:'center',marginTop:'20px'}}>Latest Bollywood Stories</h2>
          <hr style={{width:'5%',height:'2px',backgroundColor:'red'}}/>
      <div className='bollywoodContainer'>
        <div className='parent'>
        <BollywoodReusable props={bollywoodObj} />
        </div>
    
    </div>
</div>
 
  )
}

export default BollywoodStories