
import { isWebUri } from 'valid-url';

import React from 'react';
import { mount } from 'enzyme';

import Movie from './Movie';

describe('<Movie ... />', () => {
  describe('when invoked with valid props including an existing ID', () => {
    /**
     * Note that there's no way at present to mock data, short of rewriting the
     * JSON data file hard-coded into the Movie component. We thus are limited
     * to using a known-tood `movieId` value, wrapped in `params`, further
     * wrapped in `match`. (Again, why TF are the extra layers needed, exactly?)
     *
     * Also note that when we talk about an "outermost" element, that use of
     * "outermost" is **relative to the React root**, which itself is wrapped in
     * *another* containing, attribute-free div just because.
     */
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

      it('its first child as a "movie-title" div', () => {
        const el = movieContainer.childAt(0);
        expect(el.name()).toBe('div');
        expect(el.prop('className')).toBe('movie-title');
      });

      describe('its first child containing', () => {
        const titleContainer = movieContainer.childAt(0);

        it('two children', () => {
          expect(titleContainer.children()).toHaveLength(2);
        });

        describe('a first child that', () => {
          const header = titleContainer.childAt(0);

          it('is an H2 element', () => {
            expect(header.name()).toBe('h2');
          });

          it('has non-empty text', () => {
            expect(header.text()).not.toHaveLength(0);
          });
        }); // describe('a first child that' ...)

        it('a second child that is an HR element', () => {
          const el = titleContainer.childAt(1);
          expect(el.name()).toBe('hr');
        });
      }); // describe('its first child containing' ...)

      it('its second child as a "movie-container" div', () => {
        const el = movieContainer.childAt(1);
        expect(el.name()).toBe('div');
        expect(el.prop('className')).toBe('movie-container');
      });

      describe('its second child containing', () => {
        const innerContainer = movieContainer.childAt(1);

        it('two children', () => {
          expect(innerContainer.children()).toHaveLength(2);
        });

        describe('a first child that', () => {
          const imageContainer = innerContainer.childAt(0);

          it('has one child', () => {
            expect(imageContainer.children()).toHaveLength(1);
          });

          describe('has one child that', () => {
            const imageEl = imageContainer.childAt(0);

            it('is an IMG element', () => {
              expect(imageEl.name()).toBe('img');
            });

            it('has an "alt" prop', () => {
              expect(imageEl.prop('alt')).not.toHaveLength(0);
            });

            it('has a "src" prop that is a valid HTTP(S) URI', () => {
              const src = imageEl.prop('src');
              expect(src).not.toHaveLength(0);
              expect(isWebUri(src)).toBeTruthy();
            });
          }); // describe('has one child that'
        }); // describe('a first child that' ...)

        describe('a second child that', () => {
          const movieInfoContainer = innerContainer.childAt(1);

          it('is a "movie-information" div', () => {
            expect(movieInfoContainer.name()).toBe('div');
            const expected = 'movie-information';
            expect(movieInfoContainer.prop('className')).toBe(expected);
          });

          it('has three children', () => {
            expect(movieInfoContainer.children()).toHaveLength(3);
          });

          describe('has a first child with text', () => {
            const directorText = movieInfoContainer.childAt(0).text();

            it('beginning with the text "Director:" followed by a name', () => {
              expect(directorText).toMatch(/^Director: \w.+\w$/);
            });
          }); // describe('has a first child with text' ...)

          describe('has a second child with text', () => {
            const releaseDateText = movieInfoContainer.childAt(1).text();

            it('beginning with the text "Release Date: "', () => {
              expect(releaseDateText).toMatch(/^Release Date: /);
            });

            it('ending with a valid date string', () => {
              const actual = releaseDateText.replace('Release Date: ', '');
              expect(Date.parse(actual)).toBeTruthy();
            });
          }); // describe('has a second child with text' ...)
        }); // describe('a second child that'
      }); // describe('its second child containing'

      it('its third child as a "movie-reviews" div', () => {
        const el = movieContainer.childAt(2);
        expect(el.name()).toBe('div');
        expect(el.prop('className')).toBe('movie-reviews');
      });

      describe('its third child containing', () => {
        const reviewsContainer = movieContainer.childAt(2);

        it('three children', () => {
          expect(reviewsContainer.children()).toHaveLength(3);
        });

        describe('a first child that', () => {
          const reviewsHeader = reviewsContainer.childAt(0);

          it('is an H2 element', () => {
            expect(reviewsHeader.name()).toBe('h2');
          });

          it('has non-empty text', () => {
            expect(reviewsHeader.text()).toBeTruthy(); // i.e., not null or empty
          });
        }); // describe('a first child that' ...)

        it('a second child that is an HR element', () => {
          const el = reviewsContainer.childAt(1);
          expect(el.name()).toBe('hr');
        });

        describe('a third child that is a "movie-review" div', () => {
          const el = reviewsContainer.childAt(2);
          expect(el.name()).toBe('div');
          expect(el.prop('className')).toBe('movie-review');
        });

        describe('a third child containing', () => {
          const reviewContainer = reviewsContainer.childAt(2);

          it('at least two child elements', () => {
            expect(reviewContainer.children().length).toBeGreaterThan(1);
          });

          describe('a first element that', () => {
            const headerEl = reviewContainer.childAt(0);

            it('contains text before the word "by"', () => {
              expect(headerEl.text()).toMatch(/^\w.+? by/);
            });

            describe('contains a child element that', () => {
              const authorEl = headerEl.childAt(0);

              it('is a "review-author" span', () => {
                expect(authorEl.name()).toBe('span');
                expect(authorEl.prop('className')).toBe('review-author');
              });

              it('contains the word "by", a space, and non-empty text', () => {
                expect(authorEl.text()).toMatch(/^by \w.+\w$/);
              });
            }); // describe('contains a child element that' ...)
          }); // describe('a first element that' ...)

          describe('a second element that', () => {
            const firstPara = reviewContainer.childAt(1);

            it('is a non-empty P element', () => {
              expect(firstPara.name()).toBe('p');
              expect(firstPara.text()).toBeTruthy();
            });
          }); // describe('a second element that' ...)
        }); // describe('a third child containing' ...)
      }); // describe('its third child containing' ...)
    }); // describe('generates a containing "movie" div with'
  }); // describe('when invoked with no props'
}); // describe('<Movie ... />'
