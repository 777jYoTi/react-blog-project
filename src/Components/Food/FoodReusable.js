import React from 'react'
import { Link } from 'react-router-dom';
import './Food.css'
const FoodReusable = ({props}) => {
  console.log(props.img);
  return (
    <>
    {props.map((data,i)=>
    <Link className='link' to={`/Food/${data.title}`} state={{data}}>
    <div className='fchild'>
  <div className='finner'>
  <center>
<div className='img'>
<img className='fimg' src={data.img}  alt="404"></img>
</div>

</center>
<div className='ftext'>
<h4 className='ftitle'>{data.title}</h4>
        <p className='fdescription'>{data.description}</p>
</div>
  </div>
  
        
</div>
    </Link>

    
    )}
        
    </>
  )
}

export default FoodReusable