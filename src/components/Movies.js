
import React from 'react';
import { Link } from 'react-router-dom';

import movies from '../movies.json';

const Movies = () => (
  <div className="all-movies">
    <h2 className="movies-header">
      Movies
    </h2>

    <hr />

    {/* eslint-disable react/no-array-index-key */}
    {/* Normally a good idea; we don't (now) support reordering, etc. */}
    <div className="movie-listings">
      {movies.map((movie, i) => (
        <div key={i} className="movie-image">
          <Link to={`/movies/${movie.id}`}>
            <img alt={movie.name} src={movie.image} />
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default Movies;
