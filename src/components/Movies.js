
import React from 'react';
import PropTypes from 'prop-types';

import { Container, Divider, Header } from 'semantic-ui-react';

import MovieData from '../MovieData';

import './Movies.css';

import MovieItemContainer from './MovieItemContainer';

const movies = new MovieData().get();

const Movies = ({ className }) => (
  <Container className={className}>
    <Header>Movies</Header>
    <Divider vertical><hr /></Divider>
    <MovieItemContainer movies={movies} />
  </Container>
);

Movies.propTypes = {
  className: PropTypes.string,
};

Movies.defaultProps = {
  className: "all-movies",
};

export default Movies;
