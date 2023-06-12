import React from 'react'
import './Fitness.css'
import { Link } from 'react-router-dom';
const FitnessReusable = ({props}) => {
  console.log(props.img);
  return (
    <>
    {props.map((data,i)=>
    <Link className='link' to={`/Fitness/${data.title}`} state={{data}}>
    <div className='fchild'>
  <div className='finner'>
  <center>
<div className='img'>
<img className='fimg' src={data.img}  alt="404"></img>
</div>

</center>
<div className='ftext'>
<h4 className='ftitle'>{data.title}</h4>
        <p className='fdescription'>{data.para}</p>
</div>
  </div>
  
        
</div>
    </Link>

    
    )}
        
    </>
  )
}

export default FitnessReusable