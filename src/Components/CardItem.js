import React from 'react'
import  './style.css'
const CardItem = ({planets,img,planetSelect}) => {

  const select=(item)=>{
      planetSelect(item)
  }

  return (
    <div>
        <button className='my-2 btn  b ' onClick={()=>select(planets)} >
         <div className="card my-2 text-white bg-secondary mb-3" style={{width: "18rem"}}>
  <img src={img} alt='planets' className="card-img-top rounded mx-auto d-block" style={{width:"100px"}} />
  <div className="card-body ">
    <h5 className='card-title'>{planets.name}</h5>
    <p className="card-text">Distance= {planets.distance} miles</p>
  </div>
  </div>
  </button>
    </div>
  )
}

export default CardItem