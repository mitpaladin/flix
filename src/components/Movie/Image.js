
import React from 'react';
import PropTypes from 'prop-types';

import { Image } from 'semantic-ui-react';

const MovieImage = ({ name, image, className }) => {
  return (<Image src={image} alt={name} className={className} />);
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
