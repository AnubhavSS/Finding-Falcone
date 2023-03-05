import React, { useState,useEffect } from 'react'
import Service from '../Service'
import CardItem from './CardItem'
import Time from './Time'
import VehicleItem from './VehicleItem'


const Home = () => {
  const [Planets, setPlanets] = useState([])
 const [Parr,setParr] = useState([])
 const[Varr,setVarr]=useState([])
 const [Vehicles, setVehicles] = useState([])
  const [time, settime] = useState(0)
  const [Token, setToken] = useState(null)
  

  const images=['./Images/jupiter.png','./Images/mars.png','./Images/planet.png','./Images/uranus.png','./Images/mercury.png','./Images/neptune.png']
  useEffect(() => {
    Service.getPlanets().then((response)=>{setPlanets(response.data); })
                                  .catch((error)=> console.log(error))

     Service.getVehicles().then((response)=>{setVehicles(response.data);  })
                                  .catch((error)=> console.log(error))

       Service.getToken().then((response)=>{setToken(response.data.token);  }).catch((error)=>console.log(error))                           

  }, [])


  const vimg=['./Images/space-ship.png','./Images/space.png','./Images/spaceship.png','./Images/rocket.png']
 
  let vspeed=0; let pdistance=0;let t=0; 

  const planetSelect=(item)=>{  if(Parr.includes(item)) { alert("Already added can't add Again")}
  else if(Parr.length===4 ){alert("Added 4 item can't add more")}
     else{
      pdistance=item.distance
   Parr.push(item)
   setParr(Parr)
   }
     }


const vehicleSelect=(value)=>{
   if(Varr.length===4 ){alert("Added 4 item can't add more")}
   else if(Vehicles[Vehicles.indexOf(value)].total_no===0){
     Parr.pop()
    alert("No units availabe now")
   }
     else{
      (Vehicles[Vehicles.indexOf(value)].total_no-=1)
     
      setVehicles(Vehicles)
      vspeed=value.speed
  
   Varr.push(value)
   setVarr(Varr)
  
   t=time+(pdistance/vspeed)
   settime(t)
    }
}




     /************************************************************ */
  return (
    
    <div className='IMG' >
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
      After the recent Falicornian war, King Shan has exiled Queen Al Falcone for 15 years. However, if he finds her before the 15 years are up, she has to go into exile for another 15 years!
King Shan has received intelligence that Al Falcone is hiding in one of six neighbouring planets. King Shan has to choose the planets to search, and the vehicles to use in Finding Falcone. 
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
      {/* For Planets */ }
      <h2 className='text-center text-white'>Planets</h2>
      <div className="row mx-2">
        { 
             Planets.map( (planets)=>{
              let index= Planets.indexOf(planets)
    return  <div className="col-md-2" key={planets.name}>
   <CardItem  planetSelect={planetSelect} img={images[index]} planets={planets}/>
  </div>
})}
</div>

    {/* For Vehicles */ }
<h2 className='text-center text-white'>Vehicles</h2>
<div className="row mx-auto ">
        { 
             Vehicles.map( (vehicles)=>{
              let index= Vehicles.indexOf(vehicles)
    return  <div className="col-md-2 " key={vehicles.name}>
   <VehicleItem img={vimg[index]} vehicles={vehicles} vehicleSelect={vehicleSelect} />
  </div>
})}
</div>
        <Time time={time} Parr={Parr}  Varr={Varr} Token={Token} /> 

    </div>
  )
}

export default Home