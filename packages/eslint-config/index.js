'use strict'

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'standard',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12
  }
}
