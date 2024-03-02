// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import PropTypes from 'prop-types';
// import styles from './Home.module.css';

// const Home = () => {
//   const [trendingMovies, setTrendingMovies] = useState([]);

//   useEffect(() => {
//     const fetchTrendingMovies = async () => {
//       try {
//         const response = await axios.get(
//           'https://api.themoviedb.org/3/trending/movie/day?api_key=a067f81bd7a94c3876fea33a53d4c87a'
//         );
//         setTrendingMovies(response.data.results);
//       } catch (error) {
//         console.error('Error fetching trending movies:', error);
//       }
//     };

//     fetchTrendingMovies();
//   }, []);

//   return (
//     <div>
//       <h1>Trending today</h1>
//       <ul className={styles.containerList}>
//         {trendingMovies.map(movie => (
//           <li key={movie.id} className={styles.containerMovies}>
//             <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// Home.propTypes = {
//   trendingMovies: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//     })
//   ),
// };

// export default Home;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

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
      <h2 className={styles.titleTrending}>Trending Movies</h2>
      <ul className={styles.containerPosters}>
        {trendingMovies.map(movie => (
          <li key={movie.id} className={styles.posterItem}>
            <Link to={`/movies/${movie.id}`}>
              <img
                className={styles.posterImage}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
