
import React from 'react';
import PropTypes from 'prop-types';

import MoviePropTypes from './PropTypes';

const MovieMetadata = ({ movie, className }) => {
  return (
    <div className={className}>
      <p><b>Director:</b> {movie.director}</p>
      <p><b>Release Date:</b> {movie.released}</p>
      <p><b>Description:</b> {movie.description} </p>
    </div>
  );
};

MovieMetadata.propTypes = {
  movie: MoviePropTypes.Movie.isRequired,
  className: PropTypes.string.isRequired,
};

MovieMetadata.defaultProps = {
  className: 'movie-information'
};

export default MovieMetadata;
