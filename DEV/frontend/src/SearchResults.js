import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function SearchResults() {
  const [results, setResults] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q');

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch(`http://localhost:5000/search?q=${query}`);
      const data = await response.json();
      setResults(data);
    };

    fetchResults();
  }, [query]);

  return (
    <div>
      {results && results.map(result => (
        <div key={result.id}>
            <h2>{result.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;