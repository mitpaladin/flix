
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';

import Movies from './Movies';

describe('<Movies />', () => {
  const initialEntries = ['/movies'];
  const wrapper = mount(
    <Router initialEntries={initialEntries}>
      <Movies />
    </Router>
  );

  it('generates a containing ".all-movies" div', () => {
    const matches = wrapper.find('div.all-movies');
    expect(matches).toHaveLength(1);
  });

  describe('has an ".all-movies" div that', () => {
    const allMovies = wrapper.find('div.all-movies').first();

    it('has three child elements', () => {
      expect(allMovies.children()).toHaveLength(3);
    });

    it('has a non-empty ".movies-header" H2 element as its first child', () => {
      const el = allMovies.childAt(0);
      expect(el.name()).toBe('h2');
      expect(el.prop('className')).toBe('movies-header');
      expect(el.text()).toBeTruthy();
    });

    it('has an HR as the second element', () => {
      const el = allMovies.childAt(1);
      expect(el.name()).toBe('hr');
    });

    it('has a ".movie-listings" div as its third child element', () => {
      const el = allMovies.childAt(2);
      expect(el.name()).toBe('div');
      expect(el.prop('className')).toBe('movie-listings');
    });

    describe('has a third child element that', () => {
      const movieListings = allMovies.childAt(2);

      it('has at least one "movie-image" div as child elements', () => {
        const matches = movieListings.children().find('div.movie-image');
        expect(matches.length).toBeGreaterThan(0);
      });

      it('has no child elements other than "movie-image" divs', () => {
        const others = movieListings.children().not('div.movie-image');
        expect(others).toHaveLength(0);
      });

      describe('for each "movie-image" div child element', () => {
        const listings = movieListings.children();

        it('has one child element', () => {
          const checker = (prevVal, item) => {
            return( prevVal && (item.children().length == 1));
          };
          const allValid = listings.reduce(checker, true);
          expect(allValid).toBe(true);
        });

        it('has a Link child element', () => {
          const checker = (prevVal, item) => {
            return( prevVal && (item.children().first().name() == 'Link'));
          };
          const allValid = listings.reduce(checker, true);
          expect(allValid).toBe(true);
        });

        describe('has a Link child element that', () => {
          it('has a "replace" prop with the value of {false}', () => {
            const checker = (prevVal, item) => {
              const actual = item.children().first().prop('replace');
              return(prevVal && (actual === false));
            };
            const allValid = listings.reduce(checker, true);
            expect(allValid).toBe(true);
          });

          it('has a "to" prop matching "/movies/:id" with numeric ID', () => {
            const checker = (prevVal, item) => {
              const childItem = item.children().first();
              const actual = /^\/movies\/\d+$/.test(childItem.prop('to'));
              return(prevVal && actual === true);
            };
            const allValid = listings.reduce(checker, true);
            expect(allValid).toBe(true);
          });

          it('has one child element', () => {
            const checker = (prevVal, item) => {
              const actual = item.children().first().children().length;
              return(prevVal && (actual === 1));
            };
            const allValid = listings.reduce(checker, true);
            expect(allValid).toBe(true);
            const el = listings.children().first();
            console.log(listings.children().first().html());
          });

          describe('has one child element that', () => {
            it('foo', () => {});
          }); // describe('has one child element that'
        }); // it('has a Link child element that' ...)
      }); // describe('for each "movie-image" div child element'
    }); // describe('has a third child element that' ...)
  }); // describe('has an ".all-movies" div that' ...)
});
