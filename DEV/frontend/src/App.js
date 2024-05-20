import React, { useState } from 'react';
// how to import the Pokedex image from the public folder
import logo from './pokedex.png';

import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    console.log(`Searching for ${searchTerm}`);
    // Here you can add the logic to perform the search
  };

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo"/>
      <div className="search-box">
        <input type="text" value={searchTerm} onChange={handleSearchChange} />
        <button onClick={handleSearchSubmit}>Search</button>
      </div>
    </div>
  );
}

export default App;
