
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

/* eslint-disable no-undef */ /* for describe, expect, it. WhyTH? */

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
