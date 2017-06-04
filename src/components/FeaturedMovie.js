
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

import FeaturedMovieProps from './FeaturedMovie/Props'
import FeaturedMovieImage from './FeaturedMovie/Image'
import FeaturedMovieInfo from './FeaturedMovie/Info'

import './FeaturedMovie.css';

const FeaturedMovie = ({ className, movie }) => (
  <Container className={className}>
    <FeaturedMovieImage movie={movie} />
    <FeaturedMovieInfo movie={movie} />
  </Container>
);

FeaturedMovie.propTypes = {
  movie: FeaturedMovieProps.isRequired,
  className: PropTypes.string,
};

FeaturedMovie.defaultProps = {
  className: 'featured-movie',
}

export default FeaturedMovie;
