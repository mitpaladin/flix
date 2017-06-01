
import React from 'react';
import PropTypes from 'prop-types';

import MoviePropTypes from './PropTypes';

import MovieReviewBody from './ReviewBody';
import MovieReviewTitle from './ReviewTitle';

const MovieReview = ({ review, className }) => {
  return (
    <div className={className}>
      <MovieReviewTitle review={review} />
      <MovieReviewBody body={review.body} />
    </div>
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
