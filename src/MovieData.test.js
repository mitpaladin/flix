
import MovieData from './MovieData';

const EXPECTED_MOVIEDATA_LENGTH = 9;

describe('MovieData', () => {
  it('can be initialised without parameters', () => {
    new MovieData();
  });

  const obj = new MovieData();

  describe('has a .find method that returns', () => {
    it('an Array', () => {
      const actual = obj.find();
      expect(Array.prototype.isPrototypeOf(actual)).toBe(true);
    });

    describe('an Array containing', () => {
      describe('nothing, if', () => {
        let target = {};

        afterEach(() => {
          const actual = obj.find(target);
          expect(actual).toHaveLength(0);
        });

        it('the target property name was valid but no match found', () => {
          target = { id: 27182818 }
        });

        it('the target property was invalid', () => {
          target = { bogus: true };
        });

        // we don't match against image URLs
        it('the "image" property was searched for', () => {
          const name = 'Psycho';
          // As of the writing of this test, the correct image URL for 'Psycho'.
          const image = "http://resizing.flixster.com/WamrRnIpmtmZcVABJ-" +
            "ezTHtNcgI=/320x480/v1.bTsxMTE3Nzc5NztqOzE3NDMxOzIwNDg7ODAwOzEyMDA";
          target = { image, name };
        });
      }); // describe('nothing, if'

      const testTitle = 'an object with the specified value if a unique ' +
        'value was specified'
      it(testTitle, () => {
        const name = 'Reservoir Dogs';
        const actual = obj.find({ name });
        expect(actual).toHaveLength(1);
        expect(actual[0].name).toBe(name);
      });
    }); // describe('an Array containing'
  }); // describe('has a .find method that returns'

  describe('has a .get method that returns', () => {
    it('all movies when called without a parameter value', () => {
      expect(obj.get()).toHaveLength(EXPECTED_MOVIEDATA_LENGTH);
    });

    it('no movies when called with a parameter value of zero', () => {
      expect(obj.get(0)).toHaveLength(0);
    });

    it('the specified number when called with a valid parameter value', () => {
      const actualLength = 6;
      expect(obj.get(actualLength)).toHaveLength(actualLength);
    });

    it('all movies when called with a param exceeding the actual count', () => {
      expect(obj.get(274)).toHaveLength(EXPECTED_MOVIEDATA_LENGTH);
    });
  }); // describe('has a .get method that returns'

  it('is a frozen object', () => {
    expect(Object.isFrozen(obj)).toBe(true);
  });
}); // describe('MovieData' ...)
