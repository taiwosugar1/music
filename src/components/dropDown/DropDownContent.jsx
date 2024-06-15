import React from 'react';
import './DropdownContent.css';

const DropdownContent = ({ options, handleOptionClick }) => (
  <div className="dropdown-content">
    {options.map((option, index) => (
      <li key={index} onClick={() => handleOptionClick(option)}>{option}</li>
    ))}
  </div>
);

export default DropdownContent;