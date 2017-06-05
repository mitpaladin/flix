
import React from 'react';
import { Container, Divider } from 'semantic-ui-react';

import MovieData from '../MovieData';

import FeaturedMoviesContainer from './FeaturedMoviesContainer';
import FeaturedMoviesHeader from './FeaturedMoviesHeader';

const Home = () => {

  const count = 4;

  const featured = new MovieData().get(count);

  return (
    <Container>
      <FeaturedMoviesHeader />
      <Divider vertical><hr /></Divider>
      <FeaturedMoviesContainer featured={featured} />
    </Container>
  );
};

export default Home;
