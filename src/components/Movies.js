
import React from 'react';
import { Link } from 'react-router-dom';

import MovieData from '../MovieData';

const movies = new MovieData().get();

const keyForMovie = (movie) => {
  const releaseDate = new Date(movie.released + ' GMT-7'); // West Coast-ish
  return ([movie.name, releaseDate.getFullYear()].join('-'));
};

const Movies = () => (
  <div className="all-movies">
    <h2 className="movies-header">
      Movies
    </h2>

    <hr />

    <div className="movie-listings">
      {movies.map((movie) => (
        <div key={keyForMovie(movie)} className="movie-image">
          <Link to={`/movies/${movie.id}`}>
            <img alt={movie.name} src={movie.image} />
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default Movies;
