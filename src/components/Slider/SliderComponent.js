import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './SliderComponent.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SliderComponent = ({ movies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <div className={styles.nextArrow}>&#10095;</div>,
    prevArrow: <div className={styles.prevArrow}>&#10094;</div>,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
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
};

export default SliderComponent;
