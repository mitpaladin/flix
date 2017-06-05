
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
  className: PropTypes.string,
  movie: FeaturedMovieProps.isRequired,
};

FeaturedMovie.defaultProps = {
  className: 'featured-movie',
}

export default FeaturedMovie;
