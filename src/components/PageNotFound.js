
import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'semantic-ui-react';

import './PageNotFound.css';

const PageNotFound = ({ className }) => (
  <Container className={className}>
    We&apos;re sorry. This page doesn&apos;t exist!
  </Container>
);

PageNotFound.propTypes = {
  className: PropTypes.string,
}

PageNotFound.defaultProps = {
  className: 'page-not-found',
}

export default PageNotFound;
