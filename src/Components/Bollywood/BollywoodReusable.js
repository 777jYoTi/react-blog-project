import React from 'react'
import './Bollywood.css'
import { Link } from 'react-router-dom';
const BollywoodReusable = ({props}) => {
  console.log(props.img);
  return (
    <>
    {props.map((data,i)=>
    <Link className="link" to={`/Bollywood/${data.title}`} state={{data}}>
    <div className='child'>
  <div className='inner'>
  <center>
<div className='img'>
<img className='bimg' src={data.img}  alt="404"></img>
</div>

</center>
<div className='text'>
<h4 className='title'>{data.title}</h4>
        <p className='description'>{data.para}</p>
        <p className='date'>{data.year}</p>
</div>
  </div>
  
        
</div></Link>

    
    )}
        
    </>
  )
}

export default BollywoodReusable