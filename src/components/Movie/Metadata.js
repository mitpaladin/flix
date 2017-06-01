
import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'semantic-ui-react';

import { MoviePropTypes } from './PropTypes';

/* Oddly enough, Semantic UI has no direct analogue to a definition list; the
   closest they come is where their Item can contain a [Header](https://semantic-ui.com/elements/list#header),
   which isn't the same at all if you think about it. Pffft. */

const MovieMetadata = ({ movie, className }) => {
  return (
    <Container className={className}>
      <dl>
        <dt>Director</dt>
        <dd>{movie.director}</dd>
        <dt>Release Date</dt>
        <dd>{movie.released}</dd>
        <dt>Description</dt>
        <dd>{movie.description}</dd>
      </dl>
    </Container>
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
