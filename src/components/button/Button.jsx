import React from 'react'
import './Button.css'

const Button = () => {
  return (
    <div className='button'>
        <button className="animated-button">
			<div className="hidden-layer">
				<div className="line"></div>
				<div className="arrow"></div>
			</div>
			<div className="layer"></div>
			<span className="text">Learn More</span>
		</button>
    </div>
  )
}

export default Button