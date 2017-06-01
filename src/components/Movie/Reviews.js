
import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import MovieReview from './Review';
import MoviePropTypes from './PropTypes';


const MovieReviews = ({ reviews }) => {
  const keyFor = (review) => {
    return([review.title, review.author].join('-'));
  };

  const items = reviews.map((review) => {
    return(
      <MovieReview key={keyFor(review)} review={review} />
    );
  });

  return (
    <Container className="movie-reviews">
      <h2>Reviews</h2>
      <hr />
      {items}
    </Container>
  );
};

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(MoviePropTypes.Review).isRequired,
}

export default MovieReviews;