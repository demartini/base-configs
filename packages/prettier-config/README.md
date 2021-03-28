# @demartini/prettier-config <!-- omit in toc -->

[![npm package][npm-badge]][npm-link]
[![license MIT][license-badge]][license-link]
[![Demartini’s Code Style][style-badge]][style-link]

> Demartini’s shareable configuration for [`Prettier`][prettier-link].

## Table of Contents <!-- omit in toc -->

- [Installation](#installation)
- [Documentations](#documentations)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

## Installation

Install `this config` as a _`devDependencies`_:

```sh
# npm
npm install @demartini/prettier-config --save-dev

# Yarn
yarn add @demartini/prettier-config --dev
```

After installing it, a _`.prettierrc.json`_ file will be created automatically in the project's root folder with the following configuration:

```json
"@demartini/prettier-config"
```

> Note: This method does **not** offer a way to _extend_ the configuration to overwrite some properties from the shared configuration. If you need to do that, import the file in a _`.prettierrc.js`_ file and export the modifications, e.g:
>
> ```js
> module.exports = {
>   ...require('@demartini/prettier-config'),
>
>   // Add custom options bellow:
>   semi: true
> }
> ```

## Documentations

Read the [Prettier docs][prettier-docs-link] for more information.

## Contributing

If you are interested in helping contribute, please take a look at our [contribution guidelines][contributing-link] and open an [issue][issue-link] or [pull request][pull-request-link].

## Changelog

See [CHANGELOG][changelog-link] for a human-readable history of changes.

## License

Distributed under the MIT License. See [LICENSE][license-link] for more information.

[changelog-link]: ./CHANGELOG.md
[prettier-docs-link]: https://prettier.io
[prettier-link]: https://github.com/prettier/prettier
[contributing-link]: https://github.com/demartini/.github/blob/main/CONTRIBUTING.md
[issue-link]: https://github.com/demartini/base-configs/issues
[license-badge]: https://img.shields.io/github/license/demartini/base-configs?style=flat-square&labelColor=292a44&color=663399
[license-link]: ./LICENSE
[npm-badge]: https://img.shields.io/npm/v/@demartini/prettier-config?style=flat-square&labelColor=292a44&color=663399
[npm-link]: https://www.npmjs.com/package/@demartini/prettier-config
[pull-request-link]: https://github.com/demartini/base-configs/pulls
[style-badge]: https://img.shields.io/badge/code_style-demartini%E2%80%99s-663399.svg?labelColor=292a44&style=flat-square
[style-link]: https://github.com/demartini/base-configs
