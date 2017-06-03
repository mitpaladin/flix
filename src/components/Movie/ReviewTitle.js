
import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'semantic-ui-react';

import { MoviePropTypes } from './PropTypes';

import './ReviewTitle.css';

const MovieReviewTitleAttribution = (props) => {
  return (
    <span className={props.className}>by {props.author}</span>
  );
};

MovieReviewTitleAttribution.propTypes = {
  author: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

const MovieReviewTitle = (props) => {
  return (
    <Container className={props.className}>
      {props.review.title}&nbsp;
      <MovieReviewTitleAttribution
        author={props.review.author}
        className={props.authorClassName}
      />
    </Container>
  );
};

MovieReviewTitle.propTypes = {
  review: MoviePropTypes.Review.isRequired,
  className: PropTypes.string,
  authorClassName: PropTypes.string,
};

MovieReviewTitle.defaultProps = {
  className: 'review-title',
  authorClassName: 'review-author',
}

export default MovieReviewTitle;
