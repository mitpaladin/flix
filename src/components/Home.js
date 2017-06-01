
import React from 'react';

import { Container, Divider, Header } from 'semantic-ui-react';

import MovieData from '../MovieData';

import FeaturedMovie from './FeaturedMovie';

const Home = () => {
  const keyFor = (movie) => {
    return ([movie.name, movie.director].join('.'));
  };

  const featured = new MovieData().get(4);

  return (
    <Container>
      <Header as="h2" className="featured-movies__header">
        Featured Movies
      </Header>

      <Divider vertical><hr /></Divider>

      <Container className="featured-movies">
        {featured.map((movie) => (
          <FeaturedMovie movie={movie} key={keyFor(movie)} />
        ))}
      </Container>
    </Container>
  );
};

export default Home;
