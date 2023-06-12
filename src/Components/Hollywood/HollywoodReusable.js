import React from 'react'
import './Hollywood.css'
import { Link } from 'react-router-dom';
const HollywoodReusable = ({props}) => {
  console.log(props.img);
  return (
    <>
    {props.map((data,i)=>
    <Link className='link' to={`/Hollywood/${data.title}`} state={{data}}>
    <div className='child1'>
        <div className='img-left'>
        <img className='himg' src={data.img}  alt="404"></img>
        </div>
      <div className='htext'>
      <h4 className='title'>{data.title}</h4>
        <p className='description'>{data.description}</p>
        <p className='date'>{data.date}</p>
      </div>
      
      </div>
    </Link>
      
    
    )}
    
        
    </>
  )
}

export default HollywoodReusable