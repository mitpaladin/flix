
import React from 'react';
import { mount } from 'enzyme';

import PageNotFound from './PageNotFound';

/* eslint-disable no-undef */ /* for describe, expect, it. WhyTH? */

describe('<PageNotFound />', () => {
  const wrapper = mount(<PageNotFound />);
  const content = wrapper.find('.page-not-found');
  const expectedText = "We're sorry. This page doesn't exist!";

  it('renders a single component', () => {
    expect(wrapper.length).toEqual(1);
  });

  describe('renders a single component containing', () => {
    it('no child components', () => {
      expect(wrapper.children().length).toEqual(0);
    });

    it('has a ".page-not-found" CSS class HTML element', () => {
      expect(content.length).toEqual(1);
    });

    it('has a ".page-not-found" element with the correct text', () => {
      expect(content.text()).toEqual(expectedText);
    });
  }); // describe('renders a single component containing' ...)
}); // describe('<PageNotFound />' ...)
