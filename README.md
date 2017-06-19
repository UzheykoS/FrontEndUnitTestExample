# FrontEndUnitTestExample
Setup for front end unit testing.

This is an implementation of [TodoMVC](http://todomvc.com/) built using:

- [React & ReactDOM](http://facebook.github.io/react/) 15.4.2
- [Redux](https://github.com/rackt/redux) 3.6.0
- [TypeScript](http://www.typescriptlang.org/) 2.3.4

It is adapted from the [redux TodoMVC example](https://github.com/rackt/redux/tree/master/examples/todomvc).

## Getting Started

Install dependencies:

```
npm install
```

## Running development server

Run webpack dev server (for assets):

```
npm start
```

Visit [http://localhost:3000/](http://localhost:3000/).

## Building assets (index.html and bundle.js) for dev or prod

```
npm run webpack-dev
npm run webpack-prod
```

Visit [https://localhost:8080/webpack-dev-server/](https://localhost:8080/webpack-dev-server/).

### Testing

To run tests, use:

```
npm test
```

### Info

Project includes package.json with all necessary dependencies and configuration files for webpack build, webpack test build, typescript and karma test runner. Project also includes example tests for react-redux todo mvc app and test configuration for reporting.

List of npm packages needed to run application:

1. React, React-DOM, react-addons-test-utils: version 15.4.2
2. Redux and corresponding packages (react-redux, redux-actions, redux-thunk etc)
3. Webpack: version 2.6.1 and webpack loaders and plugins
4. Typescript: version 2.3.4
5. Babel-cli, babel-core, babel-loader, babel-polyfill, babel-preset-es2015

List of npm packages needed to run test:

1. Mocha – test framework https://mochajs.org/  (test syntax – describe, it, xit, beforeAll etc)
2. Chai – assertion library http://chaijs.com/api/  (expect/should, assert)
3. Karma – test runner https://karma-runner.github.io/1.0/index.html
4. Sinon – test spies, stubs and mocks for JS http://sinonjs.org/  , more examples at  https://gist.github.com/yoavniran/1e3b0162e1545055429e 
5. Enzyme – test utility for React http://airbnb.io/enzyme/index.html , API and examples at http://airbnb.io/enzyme/GLOSSARY.html
6. Reporters: junit for test results publishing to TFS; coverage, remap-coverage, sourcemap and istanbul-instrumenter-loader for webpack needed to calculate test coverage and publish info to TFS.

### Notes
```
webpack.config.js - a webpack config file for running application.
webpack.config.karma.js - a webpack config file for running tests.
karma.conf.js - karma test runner config.
tests.webpack.js - file for setting up which source files and tests to include and where to find them.
```

### Link to Github

[FrontEndUnitTestExample](https://github.com/UzheykoS/FrontEndUnitTestExample.git)
