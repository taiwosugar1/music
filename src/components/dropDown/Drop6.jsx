import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DropdownButton.css'

const Drop6 = () => {
  // Existing code...
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownStates, setDropdownStates] = useState([false, false, false]); // Initialize dropdown states

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleAllDropdowns = () => {
    setDropdownStates(prevStates => prevStates.map(state => !state));
  };

  return (
    <div className="dropdownparent">
      {/* Existing code... */}
      <button className="dropbtn" onClick={toggleDropdown}>Contact</button>
      {isOpen && (
        
          <div className="dropdown">
            <button className="dropbtn" onClick={() => setDropdownStates(prevStates => [!prevStates[0], prevStates[1], prevStates[2]])}>Drop 1</button>
            {dropdownStates[0] && (
              <div className="dropdown-content">
                {/* Content for Drop 1 */}
               
                <Link to="/contact"><span className='option'>Link 1</span></Link>
         <Link to="/contact"><span className='option'>Link 2</span></Link>
         <Link to="/contact"><span className='option'>Link 3</span></Link>
                
              </div>
            )}
          
          <div className="dropdown">
            <button className="dropbtn" onClick={() => setDropdownStates(prevStates => [prevStates[0], !prevStates[1], prevStates[2]])}>Drop 2</button>
            {dropdownStates[1] && (
              <div className="dropdown-content">
                {/* Content for Drop 2 */}
               
                
                  <li>Item A</li>
                  <li>Item B</li>
                  <li>Item C</li>
              
              </div>
            )}
          </div>
          <div className="dropdown">
            <button className="dropbtn" onClick={() => setDropdownStates(prevStates => [prevStates[0], prevStates[1], !prevStates[2]])}>Drop 3</button>
            {dropdownStates[2] && (
              <div className="dropdown-content">
                {/* Content for Drop 3 */}
               
              
                  <span>Option 1</span>
                  <span>Option 2</span>
                  <span>Option 3</span>
                
              </div>
            )}
          </div>
          {/* Add more dropdowns as needed */}
          <button className="dropbtn" onClick={toggleAllDropdowns}>View All</button>
          
        </div>
      )}
    </div>
  );
}

export default Drop6;