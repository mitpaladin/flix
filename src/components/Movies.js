
import React from 'react';

import { Container, Divider, Header } from 'semantic-ui-react';

import MovieData from '../MovieData';

import './Movies.css';

import MovieItemContainer from './MovieItemContainer';

const movies = new MovieData().get();

const Movies = () => (
  <Container className="all-movies">
    <Header>Movies</Header>
    <Divider vertical><hr /></Divider>
    <MovieItemContainer movies={movies} />
  </Container>
);

export default Movies;
