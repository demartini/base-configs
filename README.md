# @demartini/base-configs <!-- omit in toc -->

[![license MIT][license-badge]][license-link]
[![Demartini’s Code Style][style-badge]][style-link]

> A collection of base configs for code quality and linting tools.

## Table of Contents <!-- omit in toc -->

- [About](#about)
- [Usage](#usage)
- [Available Configurations](#available-configurations)
- [Badge](#badge)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

## About

This Monorepo provides a collection of shareable configurations for building, linting, testing, formatting, and releasing tools to make configurations consistent across projects and provide an easy configuration mechanism.

## Usage

Check the _`README`_ of each package in the [`packages`][packages-link] directory for specific usage instructions.

## Available Configurations

| Tool                                      | Package                                                                  | Version                                                                               |
| ----------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| [Browserslist][browserslist-link]         | [@demartini/browserslist-config](./packages/browserslist-config)         | [![@demartini/browserslist-config][browserslist-badge]][browserslist-npm]             |
| [CommitLint][commitlint-link]             | [@demartini/commitlint-config](./packages/commitlint-config)             | [![@demartini/commitlint-config][commitlint-badge]][commitlint-npm]                   |
| [ESLint][eslint-link]                     | [@demartini/eslint-config](./packages/eslint-config)                     | [![@demartini/eslint-config][eslint-badge]][eslint-npm]                               |
| [MarkdownLint][markdownlint-link]         | [@demartini/markdownlint-config](./packages/markdownlint-config)         | [![@demartini/markdownlint-config][markdownlint-badge]][markdownlint-npm]             |
| [Prettier][prettier-link]                 | [@demartini/prettier-config](./packages/prettier-config)                 | [![@demartini/prettier-config][prettier-badge]][prettier-npm]                         |
| [semantic-release][semantic-release-link] | [@demartini/semantic-release-config](./packages/semantic-release-config) | [![@demartini/semantic-release-config][semantic-release-badge]][semantic-release-npm] |
| [stylelint][stylelint-link]               | [@demartini/stylelint-config](./packages/stylelint-config)               | [![@demartini/stylelint-config][stylelint-badge]][stylelint-npm]                      |

## Badge

Show the world that you are using Demartini’s code style in your project by including the badge in your readme.

[![Demartini’s Code Style](https://img.shields.io/badge/code_style-demartini%E2%80%99s-663399.svg?labelColor=292a44&style=flat-square)](https://github.com/demartini/base-configs)

```md
[![Demartini’s Code Style](https://img.shields.io/badge/code_style-demartini%E2%80%99s-663399.svg?labelColor=292a44&style=flat-square)](https://github.com/demartini/base-configs)
```

## Contributing

If you are interested in helping contribute, please take a look at our [contribution guidelines][contributing-link] and open an [issue][issue-link] or [pull request][pull-request-link].

## Changelog

See [CHANGELOG][changelog-link] for a human-readable history of changes.

## License

Distributed under the MIT License. See [LICENSE][license-link] for more information.

[changelog-link]: ./CHANGELOG.md
[contributing-link]: https://github.com/demartini/.github/blob/main/CONTRIBUTING.md
[issue-link]: https://github.com/demartini/base-configs/issues
[license-badge]: https://img.shields.io/github/license/demartini/base-configs?style=flat-square&labelColor=292a44&color=663399
[license-link]: ./LICENSE
[packages-link]: ./packages
[pull-request-link]: https://github.com/demartini/base-configs/pulls
[style-badge]: https://img.shields.io/badge/code_style-demartini%E2%80%99s-663399.svg?labelColor=292a44&style=flat-square
[style-link]: https://github.com/demartini/base-configs

[browserslist-badge]: https://img.shields.io/npm/v/@demartini/browserslist-config?style=flat-square&labelColor=292a44&color=663399
[browserslist-link]: https://github.com/browserslist/browserslist
[browserslist-npm]: https://www.npmjs.com/package/@demartini/browserslist-config

[commitlint-badge]: https://img.shields.io/npm/v/@demartini/commitlint-config?style=flat-square&labelColor=292a44&color=663399
[commitlint-link]: https://github.com/conventional-changelog/commitlint
[commitlint-npm]: https://www.npmjs.com/package/@demartini/commitlint-config

[eslint-badge]: https://img.shields.io/npm/v/@demartini/eslint-config?style=flat-square&labelColor=292a44&color=663399
[eslint-link]: https://github.com/eslint/eslint
[eslint-npm]: https://www.npmjs.com/package/@demartini/eslint-config

[markdownlint-badge]: https://img.shields.io/npm/v/@demartini/markdownlint-config?style=flat-square&labelColor=292a44&color=663399
[markdownlint-link]: https://github.com/DavidAnson/markdownlint
[markdownlint-npm]: https://www.npmjs.com/package/@demartini/markdownlint-config

[prettier-badge]: https://img.shields.io/npm/v/@demartini/prettier-config?style=flat-square&labelColor=292a44&color=663399
[prettier-link]: https://github.com/prettier/prettier
[prettier-npm]: https://www.npmjs.com/package/@demartini/prettier-config

[semantic-release-badge]: https://img.shields.io/npm/v/@demartini/semantic-release-config?style=flat-square&labelColor=292a44&color=663399
[semantic-release-link]: https://github.com/semantic-release/semantic-release
[semantic-release-npm]: https://www.npmjs.com/package/@demartini/semantic-release-config

[stylelint-badge]: https://img.shields.io/npm/v/@demartini/stylelint-config?style=flat-square&labelColor=292a44&color=663399
[stylelint-link]: https://github.com/stylelint/stylelint
[stylelint-npm]: https://www.npmjs.com/package/@demartini/stylelint-config
