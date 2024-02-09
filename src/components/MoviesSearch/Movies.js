import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=a067f81bd7a94c3876fea33a53d4c87a`
      );
      const data = await response.json();
      setSearchResults(data.results); // Aktualizacja wyników wyszukiwania
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            {/* Przekierowanie do strony z detalami filmu po kliknięciu na tytuł */}
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
