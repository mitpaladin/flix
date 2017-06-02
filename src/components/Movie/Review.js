
import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'semantic-ui-react';

import { MoviePropTypes } from './PropTypes';

import MovieReviewBody from './ReviewBody';
import MovieReviewTitle from './ReviewTitle';

const MovieReview = ({ review, className }) => {
  return (
    <Container className={className}>
      <MovieReviewTitle review={review} />
      <MovieReviewBody body={review.body} />
    </Container>
  );
};

MovieReview.propTypes = {
  review: MoviePropTypes.Review.isRequired,
  className: PropTypes.string,
};

MovieReview.defaultProps = {
  className: "movie-review",
};

export default MovieReview;
