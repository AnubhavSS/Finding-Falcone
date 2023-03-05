import React from 'react'
import  './style.css'
const VehicleItem = ({vehicles,img,vehicleSelect}) => {
  return (
    <div >
 <button className='my-2 btn bt  ' onClick={()=>vehicleSelect(vehicles)} >
         <div className="card my-2 lh-1  text-white bg-secondary mb-3 " style={{width: "18rem"}}>
  <img src={img} alt="vehicle  " className="card-img-top rounded mx-auto d-block" style={{width:"100px"}} />
  <div className="card-body  ">
    <h5 className='card-title'>{vehicles.name}</h5>
    <p className="card-text ">Units= {vehicles.total_no}</p>
    <p className="card-text">Max Distance= {vehicles.max_distance}megamiles</p>
    <p className="card-text">Speed= {vehicles.speed}miles/hrs</p>
  </div>
  </div>
  </button>

    </div>
  )
}

export default VehicleItem