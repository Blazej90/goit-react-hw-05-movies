import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './Cast.module.css';

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=a067f81bd7a94c3876fea33a53d4c87a`
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
      <h1>Cast</h1>
      <ul>
        <div className={styles.containerCast}>
          {cast.map(actor => (
            <li key={actor.id} className={styles.containerCast}>
              {actor.name}
              {actor.profile_path && (
                <img
                  className={styles.actorImage}
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                />
              )}{' '}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Cast;
