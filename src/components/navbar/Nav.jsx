import React from 'react';
import './Nav.css';


const Nav = () => {
  return (
    <div className='head'>
       <header>
        <nav  className='nav'>
          <ul>
            <li><a href="/">Home +</a>
              <ul className='ul-hover'>
                <li><a href="/category">Category</a></li>
                <li><a href="#">Entertainment  +</a>
                        <ul className='ul-hover'>
                          <li><a href="#">Music</a></li>
                          <li><a href="#">Video</a></li>
                          <li><a href="#">Games </a></li>
                        </ul>
                      </li>
               </ul>     
            </li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Shop +</a>
                   <ul className='ul-hover'>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="/category">Market</a></li>
                    <li><a href="#">Services</a></li>
                   </ul>
            </li>
            <li><a href="#">review</a></li>
            <li><a href="#">Gallery +</a>
                 <ul className='ul-hover'>
                    <li><a href="#">grid gallery</a></li>
                    <li><a href="#">flex gallery</a></li>
                 </ul>
            </li>
            <li><a href="/contact">contact</a></li>
          </ul>
          </nav>
       </header>
    </div>
  )
}

export default Nav
