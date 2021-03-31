# @demartini/browserslist-config <!-- omit in toc -->

[![npm package][npm-badge]][npm-link]
[![license MIT][license-badge]][license-link]
[![Demartini’s Code Style][style-badge]][style-link]

> Demartini’s shareable configuration for [`Browserslist`][browserslist-link].

## Table of Contents <!-- omit in toc -->

- [Supported Browsers](#supported-browsers)
  - [Desktop Browsers](#desktop-browsers)
  - [Mobile Browsers](#mobile-browsers)
- [Installation](#installation)
- [Documentations](#documentations)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

## Supported Browsers

### Desktop Browsers

| [![Chrome][chrome-image]][browsers-badges-link] | [![Edge][edge-image]][browsers-badges-link] | [![Firefox][firefox-image]][browsers-badges-link] | [![Opera][opera-image]][browsers-badges-link] | [![Safari][safari-image]][browsers-badges-link] |
| :---------------------------------------------: | :-----------------------------------------: | :-----------------------------------------------: | :-------------------------------------------: | :---------------------------------------------: |
|                     Chrome                      |                    Edge                     |                      Firefox                      |                     Opera                     |                     Safari                      |
|                      >= 60                      |                   last 2                    |                       >= 60                       |                    last 2                     |                      >= 12                      |

### Mobile Browsers

| [![Android WebView][android-webview-image]][browsers-badges-link] | [![Chrome][chrome-image]][browsers-badges-link] | [![Firefox][firefox-image]][browsers-badges-link] | [![Opera Mini][opera-mini-image]][browsers-badges-link] | [![Safari iOS][safari-ios-image]][browsers-badges-link] | [![Samsung Internet][samsung-internet-image]][browsers-badges-link] | [![UC][uc-image]][browsers-badges-link] |
| :---------------------------------------------------------------: | :---------------------------------------------: | :-----------------------------------------------: | :-----------------------------------------------------: | :-----------------------------------------------------: | :-----------------------------------------------------------------: | :-------------------------------------: |
|                          Android WebView                          |                     Chrome                      |                      Firefox                      |                       Opera Mini                        |                       Safari iOS                        |                          Samsung Internet                           |                   UC                    |
|                              last 2                               |                     last 2                      |                      last 2                       |                         last 2                          |                          >= 12                          |                               last 2                                |                 last 2                  |

## Installation

Install `this config` as a _`devDependencies`_:

```sh
# npm
npm install @demartini/browserslist-config --save-dev

# Yarn
yarn add @demartini/browserslist-config --dev
```

After installing it, a _`.browserslistrc`_ file will be created automatically in the project's root folder with the following configuration:

```json
extends @demartini/browserslist-config
```

## Documentations

Read the [Browserslist docs][browserslist-docs-link] for more information.

## Contributing

If you are interested in helping contribute, please take a look at our [contribution guidelines][contributing-link] and open an [issue][issue-link] or [pull request][pull-request-link].

## Changelog

See [CHANGELOG][changelog-link] for a human-readable history of changes.

## License

Distributed under the MIT License. See [LICENSE][license-link] for more information.

[changelog-link]: ./CHANGELOG.md
[browserslist-docs-link]: https://github.com/browserslist/browserslist
[browserslist-link]: https://github.com/browserslist/browserslist
[contributing-link]: https://github.com/demartini/.github/blob/main/CONTRIBUTING.md
[issue-link]: https://github.com/demartini/base-configs/issues
[license-badge]: https://img.shields.io/github/license/demartini/base-configs?style=flat-square&labelColor=292a44&color=663399
[license-link]: ./LICENSE
[npm-badge]: https://img.shields.io/npm/v/@demartini/browserslist-config?style=flat-square&labelColor=292a44&color=663399
[npm-link]: https://www.npmjs.com/package/@demartini/browserslist-config
[pull-request-link]: https://github.com/demartini/base-configs/pulls
[style-badge]: https://img.shields.io/badge/code_style-demartini%E2%80%99s-663399.svg?labelColor=292a44&style=flat-square
[style-link]: https://github.com/demartini/base-configs

[browsers-badges-link]: https://github.com/alrra/browser-logos
[android-webview-image]: https://raw.githubusercontent.com/alrra/browser-logos/main/src/android-webview/android-webview_48x48.png
[chrome-image]: https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png
[edge-image]: https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png
[firefox-image]: https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png
[opera-image]: https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png
[opera-mini-image]: https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera-mini/opera-mini_48x48.png
[safari-image]: https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png
[safari-ios-image]: https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari-ios/safari-ios_48x48.png
[samsung-internet-image]: https://raw.githubusercontent.com/alrra/browser-logos/main/src/samsung-internet/samsung-internet_48x48.png
[uc-image]: https://raw.githubusercontent.com/alrra/browser-logos/main/src/uc/uc_48x48.png
