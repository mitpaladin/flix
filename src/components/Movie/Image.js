
import React from 'react';
import PropTypes from 'prop-types';

const MovieImage = ({ name, image, className }) => {
  return (
    <div className={className}>
      <img alt={name} src={image} />
    </div>
  );
};

MovieImage.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
};

MovieImage.defaultProps = {
  className: 'movie-image'
};

export default MovieImage;
