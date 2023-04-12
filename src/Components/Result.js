import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import Service from '../Service';

import  './style.css'
const Result = () => {
  let {state}= useLocation();
const [planets] = useState([])
const [vehicles] = useState([])
const [loading, setloading] = useState(true)
const [output, setoutput] = useState({planet_name:" ", status:"success"})
const [stats, setstatus] = useState(false)
let par=state[0]
let varr=state[1]
let token=state[2]

  useEffect(() => {
    for(let i=0;i<4;i++)
  { 
    planets[i]=(par[i].name)
    vehicles[i]=(varr[i].name)
  }
Service.Result( planets,vehicles,token).then((response)=>{  setoutput(response.data); console.log(response.data) ; setTimeout(()=> setloading(false),4000)} ).catch((error)=> console.log(error))

  if(output.status==="success"){
setstatus(true)}
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      
    <div className='scene '>
      <div className='text-light  ' style={{display: loading? 'none':'block'}} > { stats ?  (<h5 className='fs-1'>  Found her at planet <p className='display-1 text-center fw-bold'>{output.planet_name}</p>  </h5> ): (<p className='fs-2'>She escaped.. Better luck next time!!</p> )}</div>
      <div className='rocket ' style={{display: loading? 'block':'none'}}>
    <img className='sh' src='./Images/space-shuttle.png' alt='rocket'/>
    </div>
    </div></div>
  )
}

export default Result