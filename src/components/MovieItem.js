
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Image } from 'semantic-ui-react';

import { MovieDisplayProps } from './Movie/PropTypes'

/* FIXME: RAW DIV */
const MovieItem = (props) => {
  return (
    <div className={props.className}>
      <Link to={`/movies/${props.movie.id}`}>
        <Image alt={props.movie.name} src={props.movie.image} />
      </Link>
    </div>
  );
};

MovieItem.propTypes = {
  movie: MovieDisplayProps.isRequired,
  className: PropTypes.string,
}

MovieItem.defaultProps = {
  className: 'movie-image',
}

export default MovieItem;
