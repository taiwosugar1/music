import React from 'react';
import './Background.css'

import { FaCalendar, FaFolder, FaInstagram, FaMoon,  FaSearch,  FaShoppingBag, FaTag, FaTwitter, FaYoutube } from "react-icons/fa";
import studio from '../../Assets/studio.jpg'
import backgroundVideo from '../../Assets/backgroundVideo.mp4'

import Nav from '../navbar/Nav';
import Button from '../button/Button';
import { Link } from 'react-router-dom';
import Rotate from '../rotate/Rotate';



const Background = () => {
   
  return (
    <div>
      
      <div className="background-video">
      <video autoPlay muted loop playsInline>
      
        <source src={backgroundVideo} type="video/mp4" />
        
      </video>
     

      <div className='overlay'>
      <div className="navlink-mother">
      <div className="homeNav">
      
       
          <div  className='Mother-bgUl'>
            <h1 style={{color:"white", fontSize:"30px", margin:"5px"}}>
               <Rotate/>
            </h1>
            </div>
          <div  className='Mother-bgUl mother-animation-button'>
         
          <FaInstagram  className='bgUl  '/>
            <FaTwitter className='bgUl'/>
            <FaYoutube  className='bgUl'/>
            <FaMoon  className='bgUl'/>
            
            </div>
          <div className='Mother-bgUl link-nav'>
             <Nav className='bgUl'/>
          </div>

          <div className='Mother-bgUl mother-animation-button '>
            <div className='stick'></div>

            <FaShoppingBag  className='bgUl'/>
           <Link to={'/about'}> <Button className='bgUl'/></Link>
            <FaSearch className='bgUl'/>
          </div>
         
          
        </div>
        
      </div>
      
      <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      
      <div className='hero'>
        <h3 >FEATURED PODCAST EPISODE</h3>
        <h1>#13: The joy of putting ideas into<br/>reality and pen to paper</h1>
        <div className='tags' >
            <FaFolder style={{margin:"10px", fontSize:"12px"}}/>
            <p>SEASON 1</p>
            <div className="datch"></div>
            <FaCalendar style={{margin:"10px", fontSize:"12px"}}/>
            <p>SEP 3, 2023</p>
            <div className="datch"></div>
            <FaTag style={{margin:"10px", fontSize:"12px"}}/>
            <p>CLOTHES, TRAVEL, SOLO</p>
        </div>
        <p>Vince Smith met bandmates Jim Kelly and Nancy Gibbs at a Set a bloody nose. Together they formed Aftershock.</p>

        </div>
      <div className='heroBox'> 
        <img src={studio} alt="" />
      </div>
      </div>
      </div>
      
    </div>
    </div>
  )
}

export default Background
