import React, { useState } from 'react';
import './Search.css'
import Categories from '../category/Categories';
import { FaSearch } from 'react-icons/fa';

function ProductSearch() {
  const [showSearch, setShowSearch] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  
  // const dummyProducts = [
  //   { id: 1, name: 'Product A', category: 'Category 1' },
  //   { id: 2, name: 'Product B', category: 'Category 2' },
  //   { id: 3, name: 'Product C', category: 'Category 1' },
  
  // ];

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // Perform search logic here based on searchTerm
    // For demonstration, filtering products based on name
    const filteredResults = Categories.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
    setShowResults(true);
  };

  return (
    <div className='search'>
      <button onClick={() => setShowSearch(!showSearch)}>
        {showSearch ? 'Hide Search' : 'Show Search'}
      </button>
      {showSearch && (
        <div className='search-input'>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchInputChange}
            placeholder="Search for a product..."
          />
          <FaSearch onClick={handleSearch} className='fasearch'/>
        </div>
      )}
      <br />
      <button className='show-result' onClick={() => setShowResults(!showResults)}>
        {showResults ? 'Hide Results' : 'Show Results'}
      </button>
      {showResults && (
        <div className='search-results'>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((result, index) => (
              <div className='results-of-search'  key={index}>
               <h4>{result.title}</h4>  
                <img src={result.image}  alt="" />
               <p>{result.description} </p>
               <p>${result.price}</p>
               </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProductSearch