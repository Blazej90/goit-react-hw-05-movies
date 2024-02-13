import React from 'react';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import Home from './HomePage/Home';
import Movies from './MoviesSearch/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './MovieReviews/Reviews';

import styles from './App.module.css';

export const App = () => {
  return (
    <div>
      <header>
        <NavLink exact to="/" activeClassName="activeLink">
          Home
        </NavLink>
        <NavLink to="/movies" activeClassName="activeLink">
          Movies
        </NavLink>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
};

export default App;
