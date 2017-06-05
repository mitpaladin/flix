<h1>Flix - A Tutorial with a Lesson</h1>

<h1>Contents</h1>

- [Introduction](#introduction)
  * [The Objective of the Exercise](#the-objective-of-the-exercise)
- [Beyond the Tutorial](#beyond-the-tutorial)
  * [Test Coverage](#test-coverage)
  * [Linting](#linting)
  * [Data Source](#data-source)
  * [Docker (for the Data Source)](#docker-for-the-data-source)
  * [Design Language, or CSS Framework](#design-language-or-css-framework)
    + [CSS Preprocessing](#css-preprocessing)
- [Possible Future Enhancements](#possible-future-enhancements)
  * [Docker (for the app server and tests)](#docker-for-the-app-server-and-tests)
  * [Competent Modern Styling](#competent-modern-styling)
- [Contributions](#contributions)
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

# Beyond the Tutorial

We've embarked on a series of enhancements that go beyond the narrowest focus of repairing the code from the original tutorial, to include things that we'd expect in any production-quality application (even a personal side project). In doing so, we repeatedly experience situations where, had these tools or techniques been integrated properly into the original tutorial, the result would have been easier (and likely faster) to develop, easier for new people (like the readers of a tutorial) to come up to speed on, and easier to maintain in the face of toolchain changes.

The first such enhancement is obviously the use of source control (here, via Git), without which you would not be reading this document. Among other benefits, it encourages *incremental, reversible* change; if you've made a hash of the latest bit of effort, simply revert to your most recent known-good commit and try again. If your tools change in ways that break existing APIs, source control enables you to clearly document and communicate what's broken and what changes were needed to get everything working again. It boggles our minds, as experienced software developers, to consider how anyone could embark on even a toy project since the early 1990s without some form or degree of source control, yet even twenty-five years on, it still happens.

## Test Coverage

Continuing on, how do you know what the "most recent known-good commit" is, or even that something you've changed broke something else? Through your tests. The tutorial used [Create React App](https://github.com/facebookincubator/create-react-app) (referred to as simply *CRA*) to generate the original app [scaffold](https://en.wikipedia.org/wiki/Scaffold_(programming)). CRA creates a single `App.test.js` test file with a single (initially passing) smoke test; as with the scaffolded tests in, say, [Ruby on Rails](http://guides.rubyonrails.org/testing.html#rails-sets-up-for-testing-from-the-word-go), a single test is meant as encouragement for the developer to write more. Unlike earlier versions of Rails scaffolding, CRA's tests, as generated, pass.

The go-to tool for code coverage in JavaScript is [Istanbul](https://istanbul.js.org/); it has many wrappers and repackagings, including the `react-scripts` packaged within *Create React App*. To *run* test coverage, we've added a new `coverage` script to `package.json` that runs the command line

```
npm test -- --coverage --collectCoverageFrom=src/**/*.js --collectCoverageFrom=!src/index.js --collectCoverageFrom=!src/service-worker-registration.js
```

The command-line options (passed to `react-scripts test` by dint of their separation from `npm test` by the `--` separator) should be fairly self-explanatory. We exclude `src/index.js` from coverage (on the grounds that, as boilerplate, it's too simple/invariant to test), as well as `src/service-worker-registration.js` (which is generated and used by CRA, but which we never touch nor knowingly depend on).

Coverage is therefore improved from "all code required to render the default landing page" to "all code".

Doing this in literal, explicit detail yields some spectacularly brittle tests, particularly in `src/component/Movie.test.js`; a test-first development style would almost certainly have yielded a tree of smaller components used by `Movie`. This would, among other benefits, enable a more incremental approach to a future implementation of a [design language](#design-language-or-css-framework). Without such a granular set of small components, such an endeavour becomes a Big Bang Rewrite; any progress is seen only after a relatively large effort, increasing the pressure to abandon the rewrite and just use the existing, brittle code. In a production system, this is a prime cause of eventually unsustainable [technical debt](https://www.martinfowler.com/bliki/TechnicalDebt.html).

Henceforth, _pull requests **will not** be merged without test coverage of the new or modified code._

## Linting

Another standard tool is a *linter,* which checks for correctness and style. [ESLint](http://eslint.org) is he most widely used at present, with configurations for the two most widely-used styles ([AirBNB](https://github.com/airbnb/javascript) and the self-styled [Javascript Standard Style](https://standardjs.com)), as well as plugins for all sorts of things. In any configuration, ESLint with the plugins we've identified as immediately useful (see Issue [#4](https://github.com/jdickey/flix/issues/4)) reported several *hundred* errors against the [last commit](https://github.com/jdickey/flix/commit/87b8b50) merged to `master` before linting. Fixing these and adding linting to our standard continuous-integration setup helps to ensure that no new errors, indicating code smells and likely bugs, are introduced.

## Data Source

As of the closure of Issue [#6](https://github.com/jdickey/flix/issues/6), all access to movie data from component code uses the new `MovieData` object, with its `find` and `get` functions. This removes the knowledge of where that data is coming from from several components, each of which were previously accessing it directly from a JSON file.

`MovieData` itself uses a `MovieLoader` object to actually load the data; this is so that the knowledge of whether data is loaded from a JSON file or a server via an HTTP request is separate from the implementation of those `find` and `get` functions. Why do we still read a JSON file, even sometimes? To deal with a limitation of our current (and otherwise generally excellent) [continuous-integration service](https://codeship.com/), where we only have access to a single "pipeline" (thread of execution) to run our CI. This in turn means that we can't read data from an external service when running tests in CI, because we can't start the service's server without blocking our CI thread (and preventing it from ever completing). We've extracted into `MovieLoader` so that that file can be excluded from code coverage statistics, since it can never be 100% covered (we're either running in CI mode or we aren't).

`MovieLoader` as well uses an easy-to-use but dangerous-in-production "fetch" library, [`ForbesLindesay/sync-request`](https://github.com/ForbesLindesay/sync-request), whose README (in big H1-level text) explains why you shouldn't use it for production applications:

> Synchronous web requests are the number one cause of browser crashes.

For our present needs, however, it Works Just Fine.

## Docker (for the Data Source)

As mentioned previously, we now use the (excellent) [`typicode/json-server`](https://github.com/typicode/json-server) package, which does just what it says on the tin with a ton of [useful features](https://github.com/typicode/json-server/blob/master/README.md) and [third-party tools](https://github.com/typicode/json-server/blob/master/README.md#third-party-tools). One of the latter is a [Dockerfile for `json-server`](https://github.com/clue/docker-json-server) that Just Works.

To run our data server in a Docker container, exposing its JSON API via port 3456, simply run `yarn run movies-docker`. To run the server using a different port, run something like `MOVIES_PORT=8765 yarn run movies-docker-port`. Then also set a `MOVIES_PORT=8765` environment variable when running `yarn test`, `yarn coverage`, or `yarn start` so that the client can find your relocated server.

## Design Language, or CSS Framework

Having the markup, and the components encapsulating the markup, use a popular "design language" CSS framework such as [Semantic UI](https://semantic-ui.com),  via its [React](http://react.semantic-ui.com/introduction) component set, makes integrating styling into React apps more natural and less error-prone than dealing with raw HTML styling directly. After extensive experience with Bootstrap, our current preference is for Semantic UI and their relatively mature, comprehensive React component set. PRs using [Twitter Bootstrap](https://getbootstrap.com/), [Material Design](https://material.io/), [Zurb Foundation](http://foundation.zurb.com/), or others would be entertained.

### CSS Preprocessing

Ordinary CSS is brittle, clunky, verbose, and often seemingly needlessly confusing. This is perhaps not surprising once one realises that it originated from the same mindset that thought that XML was going to take over the world. Few people who've maintained a CSS codebase for any length of time are proud of their efforts (beyond the effort required to get them to work).

[Sass](http://www.sass-lang.com/), particularly its SCSS variant, is a popular, mature language that compiles to vanilla CSS. It adds extensions such as variables, nesting and mixins. It has useful functions that support writing clear, readily-understandable code without relying on inscrutable constants. (Quick: if you encountered the colour `#e29d1d`, would you be able to even approximately visualise it? How about if you read `wheat.darken(33%)`?) Most developers of our acquaintance, including this writer, consider themselves very poor designers, typically after having done battle with CSS. With *S*CSS, at least maintaining consistency becomes practical.

Adding SCSS to the project was tedious but straightforward, and [well-documented](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc) in the *Create React App* README. The procedure will produce vanilla CSS output files in the same directory as the SCSS source; e.g., a `src/foo/bar/baz.scss` file will compile to `src/foo/bar/baz.css`, and *the latter* is what should be [imported](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-stylesheet) into JavaScript using Webpack.

This also included the previously-documented "Possible Future Enhancement" of *Competent Modern Styling*. This meant that styling used by a single component, say `DashboardCupholder.js`, was to be extracted into a standalone file (here, `DashboardCupholder.scss`), with styling behaviour shared among multiple components further extracted into SCSS [mixins](http://sass-lang.com/guide#topic-6). Further, effort should be undertaken for font-related sizing as well as padding and margins, to be expressed in [`rem`s](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size?v=example#Rems) rather than `em`s or pixels. (Yes, we are aware that standards define a `px` as not necessarily a one-hardware-pixel by one-hardware-pixel area, but that's another bit of historical folklore to add to the cognitive load of understanding markup.)

# Possible Future Enhancements

These also can be argued as beyond the scope of the original tutorial, but would make interesting and/or useful enhancements to the state of the application [when initial requirements had been completed](https://github.com/jdickey/flix/commit/87b8b50). None of these was included, or even hinted at, in the [original tutorial](https://www.sigient.com/blog/movie-listings-application-with-react-router-v-4), which I tend to view as failings in that tutorial rather than "bling" to "weigh down" the development cycle. It should be noted that the tutorial made no use of Git, or any other version control system, despite the facts that **a)** no responsible developer starts a modern project without using source control, and **b)** as a tutorial, *especially* as a tutorial of bleeding-edge, not-yet-finalised technical tools, it is to be *expected* that the student will discover errors made at times and wish to go back to the last known-good build. Without source control, that can be highly problematic.

## Docker (for the app server and tests)

It would be extremely straightforward to spin up a `Dockerfile` to run the app (and/or the app tests) in a Docker image, particularly since we've already spun up [Docker for the data source](#docker-for-the-data-source). Among other things, this would serve as a "self-hosting CI setup" by proving, without relying on an external commercial service, that no unknown/undocumented dependencies on the development system are required for the app and its tests to run correctly. Orchestration of what would then be two containers coule be achieved using `docker-compose` or equivalent.

Using Docker for other development-support tasks that ordinarily require a terminal window or tab to be dedicated, such as the `watch-css` script, would be a nice feature as well.

# Contributions

* [Charles Du](https://github.com/mitpaladin) contributed materially to the progress of this development, specifically to [Commit `23e0424`](https://github.com/jdickey/flix/commit/23e0424), which solved the problem of how to pass a parameter to a component invoked via a pattern-matching Route.

# License

This repository contains code directly adapted from that published in a [tutorial](https://www.sigient.com/blog/movie-listings-application-with-react-router-v-4) whose only (boilerplate) copyright notice at the time this repository was published reads *COPYRIGHT 2017 BY SIGIENT. ALL RIGHTS RESERVED.*

[IANAL](https://en.wikipedia.org/wiki/IANAL); *however,* the nature of the work in which the original code was published (a tutorial) would seem to a layman to imply that this would likely be regarded as [fair use](https://en.wikipedia.org/wiki/Berne_Convention#Fair_uses) under the *Berne Convention for the Protection of Literary and Artistic Works* and its successor treaties. Should I receive notification from the [author of the original work](https://github.com/taylorqj) that this infringes on his work, I will alter or remove it as directed.

My own code additions and changes are Copyright &copy; 2017, Jeff Dickey, and licensed under the [MIT License](https://opensource.org/licenses/MIT). With respect to any future contributions to this repository, copyright is presumed to be held by the original contributors and also licensed under the same terms as the repository as a whole (currently MIT). Future contributors also agree to be bound by the [Contributor Covenant](http://contributor-covenant.org/), Version 1.4 or later, as found in the enclosed [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md) file.
