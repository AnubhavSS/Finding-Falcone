import React from 'react'
import { Link } from 'react-router-dom';
import  './style.css'
const Time = (props) => {
  

    
  return (
    <div >
      <div className=" mx-auto card text-center " style={{width: "25rem"}}>
  <div className="card-body">
    <h5 className="card-title fs-1">Time Taken: {props.time} hrs</h5>
    <hr className="hr hr-blurry" />
    {  props.Parr.map(item=>  {
    
   return <h6 className="card-subtitle font-monospace " key={item.name.toString()}>
   {item.name } {'<---->'} {props.Varr[props.Parr.indexOf(item)].name} </h6>;
    
    })}

  </div>
</div>
<Link to={ (props.Parr.length!==4 || props.Varr.length!==4 )?'/': '/result'} state={  [props.Parr ,props.Varr,props.Token]  }><div className='text-center my-2'> <button className='btn btn-primary ' >Find</button></div></Link>
</div>
    
  )
  }

export default Time