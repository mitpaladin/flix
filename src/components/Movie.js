
import React from 'react';
import PropTypes from 'prop-types';

import MovieData from '../MovieData';

import MovieContainer from './Movie/Container';
import MovieDetailContainer from './Movie/DetailContainer';
import MovieImage from './Movie/Image';
import MovieMetadata from './Movie/Metadata';
import MovieReviews from './Movie/Reviews';
import MovieTitle from './Movie/Title';

const Movie = ({ match: { params: { movieId } } }) => {
  const movie = new MovieData().find({ id: parseInt(movieId, 10) })[0];

  return (
    <MovieContainer>
      <MovieTitle name={movie.name} />
      <MovieDetailContainer>
        <MovieImage name={movie.name} image={movie.image} />
        <MovieMetadata movie={movie} />
      </MovieDetailContainer>
      <MovieReviews reviews={movie.reviews} />
    </MovieContainer>
  );
};

Movie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Movie;
