# @eigi/bluebird-react

> NOTE:

This repo contains components that implement user interactions from the UX design system.

Components should be semantic UI components (e.g. no “CampaignList”… use non-business specific descriptions of the interactions).

This leverages theme classes but does not directly pull in a theme. The application will need to pull in a theme and this library.

This project releases as a semantically versioned NPM module.

This is owned by UX Dev but can accept contributions in the form of pull requests from any team.

This project is starting with Reactstrap as a base.

This gets pulled into applications directly in the place of Reactstrap.

If you are adding 3rd party UI integrations this is where they should be added so all projects get access.

## Testing

This repo uses [jest](https://jestjs.io/) and [enzyme](https://airbnb.io/enzyme/) for unit testing.
To run the unit tests, use `npm run test`.
`npm run test:watch` will run tests in watch mode.
`npm run test:coverage` will generate test coverage reports.
