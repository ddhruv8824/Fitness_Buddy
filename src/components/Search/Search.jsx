import React, { useState } from 'react';
import './Search.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 1, name: 'All', icon: '🏋️' },
    { id: 2, name: 'Back', icon: '💪' },
    { id: 3, name: 'Cardio', icon: '🏃' },
    { id: 4, name: 'Chest', icon: '👊' },
   
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality here
    console.log('Searching for:', searchTerm);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="search-container">
      <h1>Awesome Exercises You<br />Should Know</h1>
      
      <div className="search-form">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search Exercises"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="categories">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category-card ${activeCategory === category.name ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category.name)}
          >
            <div className="category-icon">
              <span className="gym-icon"></span>
              <span className="grid-icon">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
               
              </span>
            </div>
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>

      <div className="navigation-arrows">
        <button className="arrow-btn left">←</button>
        <button className="arrow-btn right">→</button>
      </div>
    </div>
  );
};

export default Search;