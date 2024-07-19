import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=keywords`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) return <div>Loading...</div>;

  const handleGoBack = () => {
    window.history.back();
  };

  const handleLinkClick = section => {
    setActiveSection(prev => (prev === section ? null : section));
  };

  return (
    <div className={styles.containerMovieDetails}>
      <button onClick={handleGoBack} className={styles.btnGoBack}>
        Go back
      </button>
      <h1>{movieDetails.title}</h1>
      <div className={styles.containerPoster}>
        {movieDetails.poster_path && (
          <img
            className={styles.posterImage}
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
        )}
        <p className={styles.description}>{movieDetails.overview}</p>
      </div>
      <div className={styles.containerInformation}>
        <h3>Additional information</h3>
        <div className={styles.castAndReviews}>
          <Link
            to={`/movies/${movieId}/cast`}
            className={`${styles.linkCast} ${
              activeSection === 'cast' ? styles.activeLink : ''
            }`}
            onClick={() => handleLinkClick('cast')}
          >
            Cast
          </Link>
          <Link
            to={`/movies/${movieId}/reviews`}
            className={`${styles.linkReviews} ${
              activeSection === 'reviews' ? styles.activeLink : ''
            }`}
            onClick={() => handleLinkClick('reviews')}
          >
            Reviews
          </Link>
        </div>
      </div>
      {activeSection === 'cast' && <Outlet />}
      {activeSection === 'reviews' && <Outlet />}
    </div>
  );
};

export default MovieDetails;
