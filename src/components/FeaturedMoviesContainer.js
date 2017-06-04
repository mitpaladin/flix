
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

import FeaturedMovie from './FeaturedMovie';

import { MovieDisplayProps } from './Movie/PropTypes';

import './FeaturedMoviesContainer.css';

const FeaturedMoviesContainer = ({ className, featured }) => {
  const keyFor = (movie) => {
    return ([movie.name, movie.director].join('.'));
  };

  return (
    <Container className={className}>
      {featured.map((movie) => (
        <FeaturedMovie movie={movie} key={keyFor(movie)} />
      ))}
    </Container>
  );
};

FeaturedMoviesContainer.propTypes = {
  className: PropTypes.string,
  featured: PropTypes.arrayOf(MovieDisplayProps).isRequired,
};

FeaturedMoviesContainer.defaultProps = {
  className: "featured-movies",
};

export default FeaturedMoviesContainer;
