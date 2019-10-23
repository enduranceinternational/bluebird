# @eigi/bluebird-react

> NOTE: This repo contains components that implement user interactions from Bluebird.

## General

Components should be semantic UI components (e.g. no "CampaignList"... use non-business-specific descriptions of the interactions).

This leverages theme classes but does not directly pull in a theme. The application will need to pull in a theme and this library.

This project releases as a semantically versioned NPM module.

This is owned by Bluebird but can accept contributions in the form of pull requests from any team.

This project is starting with [react-bootstrap@0.32.4](https://5c507d49471426000887a6a7--react-bootstrap.netlify.com) as a base.

This gets pulled into applications directly in the place of `react-bootstrap`.

If you are adding 3rd party UI integrations this is where they should be added so all projects get access.

## Installation

Install with `yarn` using this one-line command.

```sh
$ yarn add react react-dom @eigi/bluebird-react
#  success Saved 4 new dependencies.
# ✨ Done
```

## Usage

Import `react` and the `@eigi/bluebird-react` component you need to begin using it in JSX.

```jsx
import React from 'react';
import { Button } from '@eigi/bluebird-react';

...
export const MyComponent = () => (
  <>
    <h1>Heading</h1>
    <Button>Click me</Button>
  </>
);
```

## Build, development and testing

Use the following commands to manage the project in a development environment. This is not generally required for usaged within your app, but rather if you are contributing to `@eigi/bluebird-react` as a developer.

| command              | summary                        |
| -------------------- | ------------------------------ |
| `yarn build`         | run a one-time build           |
| `yarn start`         | start the app in watch mode    |
| `yarn test`          | run the unit tests, use        |
| `yarn test:watch`    | run tests in watch mode        |
| `yarn test:coverage` | generate test coverage reports |

This repo uses [jest](https://jestjs.io/) for unit testing.
