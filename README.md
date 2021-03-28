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

| Tool                          | Package                                                      | Version                                                             |
| ----------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------- |
| [CommitLint][commitlint-link] | [@demartini/commitlint-config](./packages/commitlint-config) | [![@demartini/commitlint-config][commitlint-badge]][commitlint-npm] |
| [MarkdownLint][markdownlint-link] | [@demartini/markdownlint-config](./packages/markdownlint-config) | [![@demartini/markdownlint-config][markdownlint-badge]][markdownlint-npm] |

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

[commitlint-badge]: https://img.shields.io/npm/v/@demartini/commitlint-config?style=flat-square&labelColor=292a44&color=663399
[commitlint-link]: https://github.com/conventional-changelog/commitlint
[commitlint-npm]: https://www.npmjs.com/package/@demartini/commitlint-config

[markdownlint-badge]: https://img.shields.io/npm/v/@demartini/markdownlint-config?style=flat-square&labelColor=292a44&color=663399
[markdownlint-link]: https://github.com/DavidAnson/markdownlint
[markdownlint-npm]: https://www.npmjs.com/package/@demartini/markdownlint-config
