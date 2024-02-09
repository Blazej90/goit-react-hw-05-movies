import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Cast from '../Cast/Cast';
import Reviews from '../MovieReviews/Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [castVisible, setCastVisible] = useState(false);
  const [reviewsVisible, setReviewsVisible] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=a067f81bd7a94c3876fea33a53d4c87a`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const toggleCastVisibility = () => {
    setCastVisible(!castVisible);
  };

  const toggleReviewsVisibility = () => {
    setReviewsVisible(!reviewsVisible);
  };

  if (!movieDetails) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <p>{movieDetails.overview}</p>

      <button onClick={toggleCastVisibility}>Cast</button>
      {castVisible && <Cast />}

      <button onClick={toggleReviewsVisibility}>Reviews</button>
      {reviewsVisible && <Reviews />}
    </div>
  );
};

export default MovieDetails;
