import React, { Suspense } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './App.module.css';
import Home from './HomePage/Home';
import Movies from './MoviesSearch/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './MovieReviews/Reviews';

const App = ({ children }) => {
  return (
    <div>
      <header>
        <NavLink exact="true" to="/" className={styles.activeLink}>
          Home
        </NavLink>
        <NavLink exact="true" to="/movies" className={styles.activeLink}>
          Movies
        </NavLink>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
