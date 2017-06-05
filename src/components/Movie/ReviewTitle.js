
import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'semantic-ui-react';

import { MoviePropTypes } from './PropTypes';

import './ReviewTitle.css';

const MovieReviewTitleAttribution = ({ author, className }) => {
  return (
    <span className={className}>by {author}</span>
  );
};

MovieReviewTitleAttribution.propTypes = {
  author: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

const MovieReviewTitle = ({ authorClassName, className, review }) => {
  return (
    <Container className={className}>
      {review.title}&nbsp;
      <MovieReviewTitleAttribution
        author={review.author}
        className={authorClassName}
      />
    </Container>
  );
};

MovieReviewTitle.propTypes = {
  authorClassName: PropTypes.string,
  className: PropTypes.string,
  review: MoviePropTypes.Review.isRequired,
};

MovieReviewTitle.defaultProps = {
  authorClassName: 'review-author',
  className: 'review-title',
}

export default MovieReviewTitle;
