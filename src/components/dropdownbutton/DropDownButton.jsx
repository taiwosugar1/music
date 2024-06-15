// import React, { useState } from 'react';
// import './DropdownButton.css';

// // DropdownContent component to render the options inside the dropdown
// const DropdownContent = ({ options, handleOptionClick }) => (
//   <div className="dropdown-content">
//     {options.map((option, index) => (
//       <li key={index} onClick={() => handleOptionClick(option)}>
//         {option}
//       </li>
//     ))}
//   </div>
// );


// const DropdownButton = () => {
//   const [isOpen, setIsOpen] = useState(Array(6).fill(false)); // State for dropdown toggles

//   // Dropdown menu items data
//   const menuItems = [
//     { label: 'Home', options: ['/home', '/about', '/contact'] },
//     { label: 'Episodes', options: ['/episodes'] },
//     { label: 'Blog', options: ['/blog'] },
//     { label: 'Shop', options: ['/shops'] },
//     { label: 'Features', options: ['/features'] },
//     { label: 'Contact', options: ['/contact'] },
   
//   ];

//   // Toggle dropdown for a specific index
//   const toggleDropdown = (index) => {
//     const updatedOpenState = isOpen.map((item, i) => (i === index ? !item : false));
//     setIsOpen(updatedOpenState);
//   };

//   // Handle option click
//   const handleOptionClick = (option) => {
//     // Navigate to the selected option
//     console.log('Navigating to:', option);
//     // You can use react-router-dom to navigate here
//   };

//   return (
//     <div className="Mother-bgUl">
//       <ul className="bg-Ul">
//         {menuItems.map((menuItem, index) => (
//           <li key={index} onClick={() => toggleDropdown(index)} className="dropbtn">
//             {menuItem.label}
//             {isOpen[index] && (
//               <DropdownContent options={menuItem.options} handleOptionClick={handleOptionClick} />
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DropdownButton;