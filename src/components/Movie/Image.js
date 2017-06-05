
import React from 'react';
import PropTypes from 'prop-types';

import { Image } from 'semantic-ui-react';

const MovieImage = ({ className, image, name }) => {
  return (<Image src={image} alt={name} className={className} />);
};

MovieImage.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

MovieImage.defaultProps = {
  className: 'movie-image'
};

export default MovieImage;
