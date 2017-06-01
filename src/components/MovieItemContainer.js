
import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'semantic-ui-react';

import { MovieDisplayProps } from './Movie/PropTypes'

import MovieItem from './MovieItem';

const MovieItemContainer = (props) => {
  const keyForMovie = (movie) => {
    const releasedInTimeZone = ' GMT-7'; // West Coast-ish
    const releaseDate = new Date(movie.released + releasedInTimeZone);

    return ([movie.name, releaseDate.getFullYear()].join('-'));
  };

  return (
    <Container className={props.className}>
      {props.movies.map((movie) => (
        <MovieItem key={keyForMovie(movie)} movie={movie} />
      ))}
    </Container>
  );
}

MovieItemContainer.propTypes = {
  movies: PropTypes.arrayOf(MovieDisplayProps).isRequired,
  className: PropTypes.string,
}

MovieItemContainer.defaultProps = {
  className: "movie-listings",
}

export default MovieItemContainer;
