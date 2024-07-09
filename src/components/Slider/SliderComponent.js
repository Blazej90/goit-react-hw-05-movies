import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './SliderComponent.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SliderComponent = ({ movies, onSliderClose }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  console.log('Movies in slider:', movies);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.overlay} onClick={onSliderClose} />
      <button className={styles.closeButton} onClick={onSliderClose}>
        Close
      </button>
      <Slider {...settings}>
        {movies.map(movie => (
          <div key={movie.id} className={styles.sliderItem}>
            <Link to={`/movies/${movie.id}`} className={styles.movieLink}>
              <img
                className={styles.sliderImage}
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

SliderComponent.propTypes = {
  movies: PropTypes.array.isRequired,
  onSliderClose: PropTypes.func.isRequired,
};

export default SliderComponent;
