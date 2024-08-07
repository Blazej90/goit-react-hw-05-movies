import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
        );
        setCast(response.data.cast);
      } catch (error) {
        console.error('Error fetching cast:', error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul className={styles.containerCast}>
        {cast.map(actor => (
          <li key={actor.id} className={styles.castItem}>
            {actor.profile_path && (
              <img
                className={styles.actorImage}
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
              />
            )}
            {actor.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Cast;
