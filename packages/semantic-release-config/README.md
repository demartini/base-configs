# @demartini/semantic-release-config <!-- omit in toc -->

[![npm package][npm-badge]][npm-link]
[![license MIT][license-badge]][license-link]
[![Demartini’s Code Style][style-badge]][style-link]

> Demartini’s shareable configuration for [`semantic-release`][semantic-release-link].

## Table of Contents <!-- omit in toc -->

- [Plugins](#plugins)
- [Installation](#installation)
- [Configuration](#configuration)
- [GitHub Actions](#github-actions)
- [Documentations](#documentations)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

## Plugins

This shareable configuration use the following plugins:

- [`@semantic-release/commit-analyzer`][sr-commit-analyzer-link]
- [`@semantic-release/release-notes-generator`][sr-release-notes-generator-link]
- [`@semantic-release/changelog`][sr-changelog-link]
- [`@semantic-release/npm`][sr-npm-link]
- [`@semantic-release/github`][sr-github-link]
- [`@semantic-release/git`][sr-git-link]

## Installation

Install `this config` as a _`devDependencies`_:

```sh
# npm
npm install @demartini/semantic-release-config --save-dev

# Yarn
yarn add @demartini/semantic-release-config --dev
```

After installing it, a _`.releaserc.json`_ file will be created automatically in the project's root folder with the following configuration:

```json
{
  "extends": ["@demartini/semantic-release-config"]
}
```

## Configuration

Ensure that your CI configuration has the following **_secret_** environment variables set:

- [`GH_TOKEN`][gh-token-link] with [`public_repo`][gh-scopes-link] access or `GITHUB_TOKEN`.
- [`NPM_TOKEN`][npm-token-link]

See each [plugin](#plugins) documentation for required installation and configuration steps.

## GitHub Actions

```yaml
name: Release

on:
  push:
    branches:
      - main

jobs:
  release:
    name: Release
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v2.3.4
        with:
          fetch-depth: 0

      - name: Setup Node.js Environment
        uses: actions/setup-node@v2.1.5
        with:
          always-auth: true
          node-version: 14
          registry-url: "https://registry.npmjs.org"

      - name: Install Dependencies with Caching
        uses: bahmutov/npm-install@v1.6.0

      - name: Release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
        run: yarn run semantic-release
```

## Documentations

Read the [semantic-release docs][semantic-release-docs-link] for more information.

## Contributing

If you are interested in helping contribute, please take a look at our [contribution guidelines][contributing-link] and open an [issue][issue-link] or [pull request][pull-request-link].

## Changelog

See [CHANGELOG][changelog-link] for a human-readable history of changes.

## License

Distributed under the MIT License. See [LICENSE][license-link] for more information.

[changelog-link]: ./CHANGELOG.md
[contributing-link]: https://github.com/demartini/.github/blob/main/CONTRIBUTING.md
[gh-scopes-link]: https://docs.github.com/en/developers/apps/scopes-for-oauth-apps#available-scopes
[gh-token-link]: https://github.com/settings/tokens/new?scopes=public_repo
[issue-link]: https://github.com/demartini/base-configs/issues
[license-badge]: https://img.shields.io/github/license/demartini/base-configs?style=flat-square&labelColor=292a44&color=663399
[license-link]: ./LICENSE
[npm-badge]: https://img.shields.io/npm/v/@demartini/semantic-release-config?style=flat-square&labelColor=292a44&color=663399
[npm-link]: https://www.npmjs.com/package/@demartini/semantic-release-config
[npm-token-link]: https://docs.npmjs.com/about-access-tokens
[pull-request-link]: https://github.com/demartini/base-configs/pulls
[semantic-release-docs-link]: https://semantic-release.gitbook.io/
[semantic-release-link]: https://github.com/semantic-release/semantic-release
[sr-changelog-link]: https://github.com/semantic-release/changelog
[sr-commit-analyzer-link]: https://github.com/semantic-release/commit-analyzer
[sr-git-link]: https://github.com/semantic-release/git
[sr-github-link]: https://github.com/semantic-release/github
[sr-npm-link]: https://github.com/semantic-release/npm
[sr-release-notes-generator-link]: https://github.com/semantic-release/release-notes-generator
[style-badge]: https://img.shields.io/badge/code_style-demartini%E2%80%99s-663399.svg?labelColor=292a44&style=flat-square
[style-link]: https://github.com/demartini/base-configs
