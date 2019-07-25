# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.2.0](https://github.com/enduranceinternational/bluebird/compare/v1.1.5...v1.2.0) (2019-07-25)


### Bug Fixes

* adjust root fonts for docz theme ([d02c364](https://github.com/enduranceinternational/bluebird/commit/d02c364))


### Features

* **bluebird:** installed stylelint-config ([fd53478](https://github.com/enduranceinternational/bluebird/commit/fd53478))
* **stylelint-config:** stylelint-config pkg added ([ab6b3c7](https://github.com/enduranceinternational/bluebird/commit/ab6b3c7))
* **stylelint-config:** updated `README.md` with installation ([e42b133](https://github.com/enduranceinternational/bluebird/commit/e42b133))
* **theme:** installed stylelint-config ([40be113](https://github.com/enduranceinternational/bluebird/commit/40be113))





## [1.1.5](https://github.com/enduranceinternational/bluebird/compare/v1.1.4...v1.1.5) (2019-07-12)


### Bug Fixes

* btn-outline updated on some views that have white backgrounds - EP16-217 ([7c86dd5](https://github.com/enduranceinternational/bluebird/commit/7c86dd5))
* moved `/*` to top for priority ([4194c91](https://github.com/enduranceinternational/bluebird/commit/4194c91))
* moved headers and redirects to build dir per netlify specs ([c2ec67b](https://github.com/enduranceinternational/bluebird/commit/c2ec67b))
* moved redirects to netlify.toml config file ([b407bee](https://github.com/enduranceinternational/bluebird/commit/b407bee))
* **bluebird:** patch icon fonts ([a3e567f](https://github.com/enduranceinternational/bluebird/commit/a3e567f))
* proxy issue with link redirection on netlify ([8e54e35](https://github.com/enduranceinternational/bluebird/commit/8e54e35))
* remove theme for fresh uaf import ([3b644b0](https://github.com/enduranceinternational/bluebird/commit/3b644b0))
* removed `!` after redirect ([bfa4e34](https://github.com/enduranceinternational/bluebird/commit/bfa4e34))
* **@eigi/main,@eigi/theme:** - btn-outline-default too light (matched disabled) - changed usage on office365 page to use btn-outline-primary - EP16-217 ([56efcf5](https://github.com/enduranceinternational/bluebird/commit/56efcf5))
* **@eigi/theme:** streamlined button outline variant borders vs fills to be consistent - EP16-217 ([cf7ce6a](https://github.com/enduranceinternational/bluebird/commit/cf7ce6a))
* **theme:** repair import from uaf-main ([d2ec4f6](https://github.com/enduranceinternational/bluebird/commit/d2ec4f6))





## [1.1.4](https://github.com/enduranceinternational/bluebird/compare/v1.1.3...v1.1.4) (2019-06-26)


### Bug Fixes

* **bluebird:** resolved dependencies for bluecons EP16-349 ([eb7947f](https://github.com/enduranceinternational/bluebird/commit/eb7947f))


### Features

* added commitlint to ensure proper linting of commits ([#9](https://github.com/enduranceinternational/bluebird/issues/9)) ([9a2d30f](https://github.com/enduranceinternational/bluebird/commit/9a2d30f))





## [1.1.3](https://github.com/enduranceinternational/bluebird/compare/v1.1.2...v1.1.3) (2019-06-26)


### Bug Fixes

* EP16-349 file: refs for root deps, reset root package version (it doesnt matter) ([1669cff](https://github.com/enduranceinternational/bluebird/commit/1669cff))
* **bluebird,theme:** removed registry field ([38ad8d5](https://github.com/enduranceinternational/bluebird/commit/38ad8d5))





## [1.1.2](https://github.com/enduranceinternational/bluebird/compare/v1.1.0...v1.1.2) (2019-06-26)


### Bug Fixes

* removed froz lockfile cmd from yarn to repair travis ci cfg ([f4658a8](https://github.com/enduranceinternational/bluebird/commit/f4658a8))
* root dependency versions ([28492e0](https://github.com/enduranceinternational/bluebird/commit/28492e0))





## [1.1.1](https://github.com/enduranceinternational/bluebird/compare/v1.1.0...v1.1.1) (2019-06-25)

**Note:** Version bump only for package @eigi/bluebird-ui-com





# Release Notes

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## Change Log

## 1.2.0 (May 29, 2019)

### Colors

- Fix redundant `brand-` color variables. We no longer support `$error`, `$warning`, `$success`, `$info`. Please use the Bootstrap inspired `$brand-` variants instead.
- Reorganized some color definitions.
- Updated some colors to match new UX specifications.

## 1.1.0 (May 27, 2019)

### Typography

- Fix h1, h2 to be mobile-first
- Updated typography to match new UX specifications including h1-h6 sizes, weights and line-heights
