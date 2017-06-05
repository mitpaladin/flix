
import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'semantic-ui-react';

import { MovieDisplayProps } from './Movie/PropTypes'

import MovieItem from './MovieItem';

const MovieItemContainer = ({ className, movies }) => {
  const keyForMovie = (movie) => {
    const releasedInTimeZone = ' GMT-7'; // West Coast-ish
    const releaseDate = new Date(movie.released + releasedInTimeZone);

    return ([movie.name, releaseDate.getFullYear()].join('-'));
  };

  return (
    <Container className={className}>
      {movies.map((movie) => (
        <MovieItem key={keyForMovie(movie)} movie={movie} />
      ))}
    </Container>
  );
}

MovieItemContainer.propTypes = {
  className: PropTypes.string,
  movies: PropTypes.arrayOf(MovieDisplayProps).isRequired,
}

MovieItemContainer.defaultProps = {
  className: "movie-listings",
}

export default MovieItemContainer;
