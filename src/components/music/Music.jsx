import React, { useState } from 'react'
import './Music.css'
import {  FaCalendar, FaMusic } from 'react-icons/fa'
import Rotate2 from '../rotate/Rotate2'
import { Link } from 'react-router-dom'



// import { FaCalendar, FaFolder, FaTag } from 'react-icons/fa'
// import studio from '../../Assets/studio.jpg'

const Music = () => {
  const [data, setData]=useState(Categories)
  const filterResult=(catItem)=>{
     const result=Categories.filter((curData)=>{
      return curData.category===catItem;
     });
     setData(result)
  }
  return (
    <div className='home'>
      
            
             <Rotate2/>
             
    <ul>
      <li onClick={()=>setData(Categories)}>All</li>
      <li onClick={()=>filterResult('web')}> Christian Songs</li>
      <li onClick={()=>filterResult('print')}>HipHop songs</li>
      <li onClick={()=>filterResult('blue')}>Blues songs</li>
    </ul>
       
       <div className="box-movies-list">

    {data.map((values)=>{
          const {id, name, image, weblink, singer, date, season}=values;

        
          return(
              <>
               <div className='box-movie'>               
                    <div className="movie" key={id}>
                      <Link to={weblink}>
                      <img src={image} alt="" />
                      </Link>
                      <div >
                    <h3>{name}</h3>
                    <hr />
                    <p>{singer}</p>
                    
                  
                  <p> <FaMusic/> {season}</p>
                   
                   <p><FaCalendar/> {date}</p>
                    <hr />
                   <p>#5: Some things I'll never forget   </p>
                  </div>
                  </div>
             </div>
          
              </>
          )
      })}
      </div>
        
      
    </div>
  )
}

export default Music


export const Categories = [
  {
    id: 1,
    name: "When and Then",
    image: 'https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg?auto=compress&cs=tinysrgb&w=600',
    singer: "John Wick",
    category: "web",
    weblink:"https://product-kappa-beryl.vercel.app/",
    date: "12th, sept. 2023",
    season: "SEASON 1"
  },
  
  {
  id: 2,
  name: "Must Go High",
  image: 'https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=600',
  singer: "Michael",
  category: "blue",
  weblink:"https://new-ecommerce-sooty.vercel.app//"
},
{
  id: 3,
  name: "Social Media Application",
  image: 'https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=600',
  profession: "devop",
  category: "web",
 weblink:"https://my-react-beta.vercel.app/"
},
{
  id: 4,
  name: "Professional Website",
  image: 'https://images.pexels.com/photos/1876279/pexels-photo-1876279.jpeg?auto=compress&cs=tinysrgb&w=600',
  profession: "Web development",
  category: "web",
  weblink:"https://my-css-layout-project.vercel.app/"
},
{
  id: 5,
  name: "Company Website",
  image: 'Images/pexels-wendywei-1190297.jpg',
  profession: "Web development",
  category: "web",
  weblink:"https://multibrand-digital.vercel.app/"
},
{
  id: 6,
  name: "Music Web Application",
  image: 'Images/pexels-sebastian-ervi-866902-1763075.jpg',
  profession: "Web Aoolications",
  category: "web",
  weblink:"https://music-eight-rose.vercel.app/"
},

{
  id: 7,
  name: "Company / Product Branding",
  image: 'Images/pexels-joshsorenson-995301.jpg',
  profession: "Signage Branding",
  category: "print",
  weblink:"https://www.instagram.com/p/Cw9kaeiMzha/"
},
{
  id: 8,
  name: "Company Branding / Decoration",
  image: 'Images/pexels-ellis-1389429.jpg',
  profession: "Company Branding",
  category: "print",
  weblink:"https://www.instagram.com/p/CwnJNQesPXT/"
},
{
  id: 9,
  name: "Be the Best",
  image: 'Images/pexels-joshsorenson-995301 (1).jpg',
 singer: "jake",
  category: "print",
  weblink:"https://www.instagram.com/p/CwcWf6bAeEw/"
},
{
  id: 10,
  name: "Praise God",
  image: 'Images/pexels-pixabay-33597.jpg',
  sineger: "ann jen",
  category: "print",
  weblink:"https://www.instagram.com/p/C06cDWxM0IY/"
},
{
  id: 11,
  name: "Richard Jack",
  image: 'Images/pexels-ashutoshsonwani-1762578.jpg',
  singer: "Good Name ",
  category: "print",
  weblink:"https://www.instagram.com/p/C7Yjbb2MDr0/"
},
{
  id: 12,
  name: "Make Way",
  image: 'Images/pexels-ferarcosn-191240.jpg',
  singer: "John Brown",
  category: "print",
  weblink:"https://www.instagram.com/p/Clbw6WfsYJ9/"
},
{
  id: 12,
  name: "Joy Must Come",
  image: 'Images/pexels-foteros-352505.jpg',
  singer: "millie",
  category: "web",
  weblink:"https://music-eight-rose.vercel.app/"
},
]

