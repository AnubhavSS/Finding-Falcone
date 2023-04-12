/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeadFoot = () => {
  const navigate=useNavigate()
  const Reload=()=>{
    navigate('/')
    window.location.reload()
  }

  return (
    <div>
     <nav className="navbar   navbar-dark bg-dark">
  <div className="container-fluid ">
    
    <a className="navbar-brand ">Finding Falcone</a>
    <button className='btn btn-danger' onClick={()=>alert( "Rules :Select Planets and Vehicles Respectively i.e Select planet and then SpaceShip you want to use. Example: Donlon - SpaceShip  Sapir - Space pod  ")} >Rules</button>
      <button className="btn btn-warning btn-sm"  onClick={()=>Reload()} >Reset</button>
    
  </div>
</nav>


{/*footer*/}
<div><footer className="p-1 bg-dark text-white fixed-bottom" >
    <div className="text-center p-2" >
      © 2023 Copyright: Anubhav Singh
    </div>
  </footer>
  </div>
    </div>
  )
}

export default HeadFoot
