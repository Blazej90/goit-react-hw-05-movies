import React, { Suspense } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './App.module.css';

const Home = React.lazy(() => import('./HomePage/Home'));
const Movies = React.lazy(() => import('./MoviesSearch/Movies'));
const MovieDetails = React.lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = React.lazy(() => import('./Cast/Cast'));
const Reviews = React.lazy(() => import('./MovieReviews/Reviews'));

const App = ({ children }) => {
  return (
    <div>
      <header>
        <NavLink to="/" className={styles.activeLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={styles.activeLink}>
          Movies
        </NavLink>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
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
