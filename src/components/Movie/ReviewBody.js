
import React from 'react';
import PropTypes from 'prop-types';

const MovieReviewBody = ({ body }) => {
  return (<p>{body}</p>);
};

MovieReviewBody.propTypes = {
  body: PropTypes.string.isRequired,
};

export default MovieReviewBody;
