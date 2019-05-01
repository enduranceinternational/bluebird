# Bluebird Design System

The Bluebird Design is the new home our universal component library, including globally used elements (like toasts, loaders, etc.) and atomic styles.

## Dependencies

- `@uaf/theme` (Bootstrap 3)

## Roadmap

- Q1: Pull in more items out of styles/components like toasts, loaders, switches, sliders, etc.

## Changelog

- February 2019: init

## Overriding Bootstrap

Looking to override bootstrap styles? Add your overrides in the overrides directory by matching your stylesheet to the sheet in the bootstrap-sass project, then link it up in `_bootstrap-custom.scss`.

### `bootstrap-sass/overrides`

The overrides directory contains partials intended to be consumed by `../bootstrap-custom` which override specific Bootstrap classes.

It is best practice to model these overrides against the original Bootstrap source to help ensure we are covering all use-cases such as `:hover` `:active` and other unique states that might be neglected. [Reference: bootstrap-sass source](https://github.com/twbs/bootstrap-sass/tree/master/assets/stylesheets/bootstrap)

## Support

This package is maintained by [Bluebird](mailto:bluebird@endurance.com) and [Team 418](mailto:418-team@endurance.com).
