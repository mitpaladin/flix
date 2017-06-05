
import React from 'react';
import { mount } from 'enzyme';

import MoviesData from '../movies.json';

import Movie from './Movie';

const MOVIE_ID = '1';
const MovieFixture = MoviesData.movies[MOVIE_ID - 1];

describe('<Movie ... />', () => {
  describe('when invoked with valid props including an existing ID', () => {
    const wrapper = mount(<Movie match={{ params: { movieId: '1' } }} />);

    it('generates a containing "movie" div', () => {
      const matches = wrapper.find('div.movie');
      expect(matches.exists()).toBeTruthy();
    });

    describe('generates a containing "movie" div with', () => {
      const movieContainer = wrapper.find('div.movie').first();

      it('three children', () => {
        expect(movieContainer.children()).toHaveLength(3);
      });

      it('its first child as a MovieTitle component', () => {
        const el = movieContainer.childAt(0);
        expect(el.name()).toBe('MovieTitle');
        expect(el.prop('name')).toEqual(MovieFixture.name);
      });

      it('its second child as a "MovieDetailContainer" component', () => {
        const el = movieContainer.childAt(1);
        expect(el.name()).toBe('MovieDetailContainer');
        expect(Object.keys(el.props())).toEqual(['children', 'className']);
      });

      it('its third child as a "MovieReviews" component', () => {
        const el = movieContainer.childAt(2);
        const expectedReview = MovieFixture.reviews;

        expect(el.name()).toBe('MovieReviews');
        expect(el.prop('reviews')).toEqual(expectedReview);
      });
    }); // describe('generates a containing "movie" div with'
  }); // describe('when invoked with no props'
}); // describe('<Movie ... />'
