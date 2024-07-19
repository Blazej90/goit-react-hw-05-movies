import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import SliderComponent from '../Slider/SliderComponent';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/trending/movie/day?api_key=a067f81bd7a94c3876fea33a53d4c87a'
        );
        if (response.ok) {
          const data = await response.json();
          setTrendingMovies(data.results);
        } else {
          throw new Error('Failed to fetch trending movies');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrendingMovies();
  }, []);

  const handleSearch = () => {
    if (searchQuery) {
      navigate(`/movies?query=${searchQuery}`);
    }
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <div className={styles.containerSearch}>
        <div className={styles.searchLabel}>
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Find the movie..."
            className={styles.labelSearch}
          />
          <button onClick={handleSearch} className={styles.btnSearch}>
            Search
          </button>
        </div>
      </div>

      <SliderComponent movies={trendingMovies} />

      <h2 className={styles.titleTrending}>Trending Movies</h2>
      <ul className={styles.containerPosters}>
        {trendingMovies.map(movie => (
          <li key={movie.id} className={styles.posterItem}>
            <Link to={`/movies/${movie.id}`} className={styles.posterLink}>
              <img
                className={styles.posterImage}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <span className={styles.movieTitle}>{movie.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
