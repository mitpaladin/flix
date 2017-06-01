
import React from 'react';
import PropTypes from 'prop-types';

import { MoviePropTypes } from './PropTypes';

const MovieReviewTitleAttribution = ({ author }) => {
  return (
    <span className="review-author">by {author}</span>
  );
};

MovieReviewTitleAttribution.propTypes = {
  author: PropTypes.string.isRequired,
};

const MovieReviewTitle = ({ review }) => {
  return (
    <h3>
      {review.title} <MovieReviewTitleAttribution author={review.author} />
    </h3>
  );
};

MovieReviewTitle.propTypes = {
  review: MoviePropTypes.Review.isRequired,
};

export default MovieReviewTitle;
