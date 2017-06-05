
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Image } from 'semantic-ui-react';

import { MovieDisplayProps } from './Movie/PropTypes'

/* FIXME: RAW DIV */
const MovieItem = ({ className, movie }) => {
  return (
    <div className={className}>
      <Link to={`/movies/${movie.id}`}>
        <Image alt={movie.name} src={movie.image} />
      </Link>
    </div>
  );
};

MovieItem.propTypes = {
  className: PropTypes.string,
  movie: MovieDisplayProps.isRequired,
}

MovieItem.defaultProps = {
  className: 'movie-image',
}

export default MovieItem;
