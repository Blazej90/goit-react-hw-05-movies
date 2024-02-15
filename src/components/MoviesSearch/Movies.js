import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './Movies.module.css';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=a067f81bd7a94c3876fea33a53d4c87a`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <div className={styles.containerSearch}>
      <h1>Search Movies</h1>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        className={styles.labelSearch}
      />
      <button onClick={handleSearch} className={styles.btnSearch}>
        {' '}
        Search
      </button>
      <ul className={styles.containerPosters}>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              {movie.title}
              {movie.poster_path && (
                <img
                  className={styles.posterImage}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              )}{' '}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Movies.propTypes = {
  query: PropTypes.string.isRequired,
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};

export default Movies;
