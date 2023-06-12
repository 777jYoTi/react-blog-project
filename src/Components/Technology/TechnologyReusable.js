import React from 'react'
import './Technology.css'
import { Link } from 'react-router-dom';
const TechnologyReusable = ({props}) => {
  console.log(props.img);
  return (
    <>
    {props.map((data,i)=>
    <Link className='link' to={`/Technology/${data.title}`} state={{data}}>
    <div className='tchild'>
  <div className='inner'>
  <center>
<div className='img'>
<img className='timg' src={data.img}  alt="404"></img>
</div>

</center>
<div className='text'>
<h4 className='title'>{data.title}</h4>
        <p className='description'>{data.description}</p>
        <p className='date'>Developer: {data.developer}</p>
</div>
  </div>
  
        
</div>
    </Link>

    
    )}
        
    </>
  )
}

export default TechnologyReusable