
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

import FeaturedMovieProps from './Props'

import './Image.css';

const FeaturedMovieImage = ({ className, movie }) => (
  <Link to={`/movies/${movie.id}`}>
    <Image className={className} alt={movie.name} src={movie.image} />
  </Link>
)

FeaturedMovieImage.propTypes = {
  className: PropTypes.string,
  movie: FeaturedMovieProps.isRequired,
};

FeaturedMovieImage.defaultProps = {
  className: 'featured-movie__image',
}

export default FeaturedMovieImage;
