<h1>Flix - A Tutorial with a Lesson</h1>

<h1>Contents</h1>

- [Introduction](#introduction)
  * [The Objective of the Exercise](#the-objective-of-the-exercise)
- [Possible Future Enhancements](#possible-future-enhancements)
  * [Testing](#testing)
  * [Linting](#linting)
  * [Data Source](#data-source)
  * [Design Language, or CSS Framework](#design-language-or-css-framework)
  * [Docker](#docker)
- [License](#license)

# Introduction

This repo documents [my](https://jdickey.github.io) working through [a tutorial](https://www.sigient.com/blog/movie-listings-application-with-react-router-v-4) on [React Router v4](https://reacttraining.com/react-router/) which was produced in January, 2017 &mdash; three months before the actual [4.0.0 release](https://github.com/ReactTraining/react-router/releases/tag/v4.0.0) shipped. "How is this possible", you ask? Through the blessing of long and arduous alpha- and beta-release development cycles. "Why doesn't the tutorial match what was actually shipped &mdash; to the point you were [ready to give up in disgust](https://github.com/jdickey/flix/commit/1d79b7d)", you ask? Through the curse of long and arduous alpha- and beta-release development cycles.

The whole *point* of "long and arduous" development cycles is that things break, and are expected to; often spectacularly. Such was the case with React Router v4; components were rearchitected, renamed, added, and removed; component properties were renamed, added, and removed; things are in a state of seemingly chaotic flux (as opposed to [Flux](https://facebook.github.io/react/blog/2014/05/06/flux.html)) until the core team agrees that it's ready for release, or gives up on getting it any closer. React Router v4 is, no doubt, a better piece of software because of this; however, there are *numerous* tutorials and "how to" blog posts written against (often very) early pre-release versions, where the authors failed to go back and update after the final package (that they're supposedly teaching people to use) is released. In a craft where such folklore, passed on through search engines, is a primary means of self-education, Hilarity Ensues.

## The Objective of the Exercise

The original purpose for going through [the tutorial](https://www.sigient.com/blog/movie-listings-application-with-react-router-v-4) driving this repo to its current state (as of Commit [87b8b50](https://github.com/jdickey/flix/commit/87b8b50)) was so that [I](https://jdickey.github.io) could understand how routing worked in the context of distributed components; i.e., a `Link` from one component to another which had `Route`s and `Link`s to yet other components.

Was the objective achieved? Only in the narrowest, most ritualistic sense. Folklore rather than documentation (see the commit message for Commit [`23e0424`](https://github.com/jdickey/flix/commit/23e0424)) led to a practice that, when replicated, apparently achieves the purpose.

Several questions remain unanswered, however. The `PropTypes` for the `Movie` component is nested to a baroque level:

```javascript
Movie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
```

We're interested in the `movieId` value. For an app hosted at `http://localhost:3000`, a valid URL for (`movieId` with a value of 1) would be `http://localhost:3000/movies/1`. Why do we need *two* wrappers around the `movieId` as shown above? (The tutorial as written only used one, `params`). What is the meaning of `match`? For that matter, where is the name `params` specified as being required for the object wrapped by `match`?

What we have here is a demonstration of one component (`App`) that associates paths following a pattern `/movies/:movieId` with the `Movie` component, and multiple others (`Movies` and `FeaturedMovies`) with `Link`s matching the pattern specified in `App`. From this, we can *presume* that, say, a `Movie` component could link to a hypothetical `Director` component, which in turn would have `Link`s to all the `Movie`s of a particular director. So long as the links were made using `Link` components whose `to` parameter followed a pattern matching a `Route` someplace, it *should* just [Do The Right Thing](http://www.imdb.com/title/tt0097216/). Why, you ask? Pure [Fscking Magic](http://fm.urbanup.com/1117130). Cargo-culting shall commence, and that's *always* bad news, because if you don't understand why something works, you can't understand why it eventually *stops* working until you find a new cargo cult to join.

`tl;dr` No, [not exactly](https://youtu.be/EuOHHA0KTww).

# Possible Future Enhancements

Each of these, with the exception of testing, can be argued as beyond the scope of the original tutorial, but would make interesting and/or useful enhancements to the state of the application in its [current state](https://github.com/jdickey/flix/commit/87b8b50). None of these was included, or even hinted at, in the [original tutorial](https://www.sigient.com/blog/movie-listings-application-with-react-router-v-4), which I tend to view as failings in that tutorial rather than "bling" to "weigh down" the development cycle. It should be noted that the tutorial made no use of Git, or any other version control system, despite the facts that **a)** no responsible developer starts a modern project without using source control, and **b)** as a tutorial, *especially* as a tutorial of bleeding-edge, not-yet-finalised technical tools, it is to be *expected* that the student will discover errors made at times and wish to go back to the last known-good build. Without source control, that can be highly problematic.

## Testing

Test coverage, as of Commit [87b8b50](https://github.com/jdickey/flix/commit/87b8b50), is predictably sub-minimal:

```
$ yarn coverage -- --color=false
yarn coverage v0.24.5
$ npm test -- --coverage --collectCoverageFrom=src/**/*.js --collectCoverageFrom=!src/index.js --collectCoverageFrom=!src/service-worker-registration.js --color=false

> flix@0.1.0 test /Users/jeffdickey/src/script/flix
> react-scripts test --env=jsdom "--coverage" "--collectCoverageFrom=src/**/*.js" "--collectCoverageFrom=!src/index.js" "--collectCoverageFrom=!src/service-worker-registration.js" "--color=false"


 RUNS  ...App.test.js


 RUNS  ...App.test.js


 RUNS  ...App.test.js


 RUNS  ...App.test.js

Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.169s
Ran all test suites.
-------------------|----------|----------|----------|----------|----------------|
File               |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-------------------|----------|----------|----------|----------|----------------|
All files          |    63.16 |      100 |       40 |    63.16 |                |
 src               |      100 |      100 |      100 |      100 |                |
  App.js           |      100 |      100 |      100 |      100 |                |
 src/components    |    61.11 |      100 |    33.33 |    61.11 |                |
  FeaturedMovie.js |      100 |      100 |      100 |      100 |                |
  Home.js          |      100 |      100 |      100 |      100 |                |
  Movie.js         |    33.33 |      100 |        0 |    33.33 |      7,8,11,37 |
  Movies.js        |    33.33 |      100 |        0 |    33.33 |           7,16 |
  PageNotFound.js  |       50 |      100 |        0 |       50 |              5 |
-------------------|----------|----------|----------|----------|----------------|
Done in 3.62s.
```
Aside from the value of tests as confidence-builders when making further changes (proving that nothing unexpectedly broke as a result of those changes), they also tend to reduce the severity of cargo-cult programming simply by serving as an aid to [rubber-duck debugging](https://en.wikipedia.org/wiki/Rubber_duck_debugging). Therefore, prior to undertaking any of the other possible future enhancements detailled below, getting test coverage up to 100% except for well-known, defined areas (see the `--collectCoverageFrom` option values in the `coverage` script definition in `package.json`) is *urgently* recommended.

__Patch requests *will not* be merged without test coverage of the new or modified code.__

## Linting

Another standard tool is a *linter,* which checks for correctness and style.[ESLint](http://eslint.org) is he most widely used at present, with configurations for the two most widely-used styles ([AirBNB](https://github.com/airbnb/javascript) and the self-styled [Javascript Standard Style](https://standardjs.com)), as well as plugins for all sorts of things. In any configuration, ESLint will report dozens (nearly a hundred) errors against the [now-current commit](https://github.com/jdickey/flix/commit/87b8b50). These should probably be fixed, and linting added to a standard continuous-integration setup to ensure that no new errors are introduced.

## Data Source

[Presently](https://github.com/jdickey/flix/commit/87b8b50), the movie data is [read](https://github.com/jdickey/flix/blob/87b8b50/src/components/Home.js#L3) from a [JSON file](https://github.com/jdickey/flix/blob/87b8b50/src/movies.json). This is obviously, at best, an expedient hack. At minimum, reading from a "remote service" using something like [`typicode/json-server`](https://github.com/typicode/json-server) would let us use React lifecycle hooks to load data in a manner more closely approximating real-world usage. A somewhat more enterprising PR might implement an abstraction for the data source that is invoked by the component hook, so that the component itself no longer knows or cares where the data is actually coming from, only that it can get it.

## Design Language, or CSS Framework

Having the markup, and the components encapsulating the markup, use one of the popular "design language" CSS frameworks, such as [Semantic UI](https://semantic-ui.com), [Twitter Bootstrap](http://getbootstrap.com), or [Google Material Design](https://material.io/guidelines/material-design/introduction.html). All three have [React](http://react.semantic-ui.com/introduction) [component](https://react-bootstrap.github.io) [sets](http://www.material-ui.com/) available, with varying levels of maturity, that make integrating styling into React apps more natural and less error-prone than dealing with raw HTML styling directly. After extensive experience with Bootstrap, [my](https://jdickey.github.io) current preference is for Semantic UI and their relatively mature, comprehensive React component set, but PRs using either of the others, or ones I don't yet know about, would be entertained.

## Docker

It would be interesting, and relatively straightforward, to spin up a `Dockerfile` to run the app (and/or the app tests) in a Docker image. Among other things, this would serve as a "self-hosting CI setup" by proving that no unknown/undocumented dependencies on the development system are required for the app and its tests to run correctly. Additionally, in line wiht the [*Data Source*](#data-source) item above, running the data source in a separate Docker container orchestrated by `docker-compose` or equivalent would give more confidence in the separation of the details of the data source from the app itself.

# License

This repository contains code directly adapted from that published in a [tutorial](https://www.sigient.com/blog/movie-listings-application-with-react-router-v-4) whose only (boilerplate) copyright notice at the time this repository was published reads *COPYRIGHT 2017 BY SIGIENT. ALL RIGHTS RESERVED.*

[IANAL](https://en.wikipedia.org/wiki/IANAL); *however,* the nature of the work in which the original code was published (a tutorial) would seem to a layman to imply that this would likely be regarded as [fair use](https://en.wikipedia.org/wiki/Berne_Convention#Fair_uses) under the *Berne Convention for the Protection of Literary and Artistic Works* and its successor treaties. Should I receive notification from the [author of the original work](https://github.com/taylorqj) that this infringes on his work, I will alter or remove it as directed.

My own code additions and changes are Copyright &copy; 2017, Jeff Dickey, and licensed under the [MIT License](https://opensource.org/licenses/MIT). With respect to any future contributions to this repository, copyright is presumed to be held by the original contributors and also licensed under the same terms as the repository as a whole (currently MIT). Future contributors also agree to be bound by the [Contributor Covenant](http://contributor-covenant.org/), Version 1.4 or later, as found in the enclosed [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md) file.
