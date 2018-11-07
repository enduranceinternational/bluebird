# User Apps Frontend UI Library

> Bluerock component library and style guide

## Overview

We would like all members of Product Delivery to be able to view a visual, coded out style guide representing the current truth in our codebase regarding UI components that are reusable across our apps.

## Strategy

In another story, we have a team working to upgrade the {{uaf-main}} repo to support Docz for component documentation. While they are in motion, we will be creating a parallel project:

* Set up a new project using Create React App 2

* Install Docz

* Investigate ways to import components from uaf-main to be visualized in the style guide project

** Note: Might require a parallel branch in uaf-main where we add the .mdx files

* Deploy project to a web service such as Heroku that is viewable by any member of Utah Product Development

## Acceptance criteria

Visual styleguide website viewable by any member of Utah product delivery that outlines our key shareable components, and allows development teams to easily extend and add to this.

### Extra credit or future iteration

Monitors uaf-main {{master}} branch for changes and recompiles and deploys with updated documentation

## Component documentation roadmap

* Bootstrap components (current UI Library)

* Other commonly used UI Library components

* Most shared custom app components

## Technical

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
