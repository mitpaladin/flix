
import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'semantic-ui-react';

import { MoviePropTypes } from './PropTypes';

import MovieReviewBody from './ReviewBody';
import MovieReviewTitle from './ReviewTitle';

const MovieReview = ({ className, review }) => {
  return (
    <Container className={className}>
      <MovieReviewTitle review={review} />
      <MovieReviewBody body={review.body} />
    </Container>
  );
};

MovieReview.propTypes = {
  className: PropTypes.string,
  review: MoviePropTypes.Review.isRequired,
};

MovieReview.defaultProps = {
  className: "movie-review",
};

export default MovieReview;
