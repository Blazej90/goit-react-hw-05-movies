import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './Movies.module.css';

const Movies = () => {
  const [localSearchResults, setLocalSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const queryParam = searchParams.get('query');
    setSearchQuery(queryParam || '');
    if (queryParam) {
      fetchMovies(queryParam);
    } else {
      setLocalSearchResults([]);
    }
  }, [searchParams]);

  const fetchMovies = async query => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=a067f81bd7a94c3876fea33a53d4c87a`
      );
      setLocalSearchResults(response.data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  const handleSearch = async () => {
    if (searchQuery) {
      setSearchParams({ query: searchQuery });
      fetchMovies(searchQuery);
    }
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.containerSearch}>
      <h1 className={styles.searchTitle}>Search Movies</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        className={styles.labelSearch}
      />
      <button onClick={handleSearch} className={styles.btnSearch}>
        Search
      </button>
      <ul className={styles.containerPosters}>
        {localSearchResults.map(movie => (
          <li key={movie.id} className={styles.posterItem}>
            <Link to={`/movies/${movie.id}`} className={styles.posterLink}>
              {movie.poster_path ? (
                <img
                  className={styles.posterImage}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <span className={styles.noPoster}>No poster</span>
              )}
              <span className={styles.posterTitle}>{movie.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Movies.propTypes = {
  query: PropTypes.string,
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};

export default Movies;
