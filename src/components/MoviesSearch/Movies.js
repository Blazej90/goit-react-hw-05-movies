import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import styles from './Movies.module.css';

const Movies = () => {
  const [localSearchResults, setLocalSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams] = useSearchParams();

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
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );
      setLocalSearchResults(response.data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <div className={styles.containerSearch}>
      <h2 className={styles.searchTitle}>Search Results for "{searchQuery}"</h2>
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

export default Movies;
