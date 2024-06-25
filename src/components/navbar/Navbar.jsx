import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'




const Navbar = () => {
  return (
    
      <div className="navbar">
        <nav>
            <h1>Multibrand<span style={{color:"green", background:"none"}}>music</span></h1>
           
           
           <Link to={"/music"}><button className='buy-now' >Buy now</button></Link> 
        </nav>
      </div>
  )
}

export default Navbar
