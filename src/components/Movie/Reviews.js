
import React from 'react';
import PropTypes from 'prop-types';

import { Container, Divider, Header } from 'semantic-ui-react';

import MovieReview from './Review';
import { MoviePropTypes } from './PropTypes';

import './Reviews.css';

const MovieReviews = (props) => {
  const keyFor = (review) => {
    return([review.title, review.author].join('-'));
  };

  const items = props.reviews.map((review) => {
    return(
      <MovieReview key={keyFor(review)} review={review} />
    );
  });

  return (
    <Container className={props.className}>
      <Header>Reviews</Header>
      <Divider section><hr /></Divider>
      {items}
    </Container>
  );
};

MovieReviews.propTypes = {
  className: PropTypes.string,
  reviews: PropTypes.arrayOf(MoviePropTypes.Review).isRequired,
}

MovieReviews.defaultProps = {
  className: "movie-reviews",
}

export default MovieReviews;
