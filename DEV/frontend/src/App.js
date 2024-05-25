import React, { useState } from 'react';
import logo from './pokedex.png';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (term) => {
    setIsLoading(true);
    const response = await fetch('/api/search', { // Use relative URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ searchTerm: term })
    });
    const data = await response.json();
    setResults(data);
    setIsLoading(false);
  };

  const handlePrevious = async () => {
    const previousId = Math.max(1, Number(searchTerm) - 1);
    setSearchTerm(String(previousId));
    await handleSearchSubmit(String(previousId));
  };
  
  const handleNext = async () => {
    const nextId = Number(searchTerm) + 1;
    setSearchTerm(String(nextId));
    await handleSearchSubmit(String(nextId));
  };

  return ( 
    <div className="App">
      <img src={logo} className="App-logo" alt="logo"/>
      <div>
        <input className="search-box" type="text" value={searchTerm} onChange={handleSearchChange} />
        <button className="search-button" onClick={() => handleSearchSubmit(searchTerm)} disabled={isLoading}>Search</button>
      </div>
      {results && results.status === '200' && (
        <div className='results'>
          <h3>Name: {results.name}</h3>
          <p>ID: {results.id}</p>
          {results.id ? <img className="pokemon-sprite" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${results.id}.png`} alt="Pokemon sprite" /> : null}
        </div>
      )}
      {results && results.status !== '200' && (
        <div className='results'>
          <h3>{results.message}</h3>
        </div>
      )}
      <div className='buttons'>
        <button onClick={handlePrevious} disabled={isLoading}>Previous</button>
        <button onClick={handleNext} disabled={isLoading}>Next</button>
      </div>
    </div>
  );
}

export default App;
