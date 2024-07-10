import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import SliderComponent from '../Slider/SliderComponent';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

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

  return (
    <div>
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
