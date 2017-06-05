
import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

import './FeaturedMoviesHeader.css';

const FeaturedMoviesHeader = ({ className, titleText }) => (
  <Header className={className}>{titleText}</Header>
);

FeaturedMoviesHeader.propTypes = {
  className: PropTypes.string,
  titleText: PropTypes.string,
};

FeaturedMoviesHeader.defaultProps = {
  className: "featured-movies__header",
  titleText: "Featured Movies",
};

export default FeaturedMoviesHeader;
