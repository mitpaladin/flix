
import React from 'react';
import PropTypes from 'prop-types';

import MoviePropTypes from './PropTypes';

import MovieReviewTitle from './ReviewTitle';

const MovieReview = ({ review, className }) => {
  return (
    <div className={className}>
      <MovieReviewTitle review={review} />
      <p>{review.body}</p>
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
