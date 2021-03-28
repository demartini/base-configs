'use strict'

module.exports = {
  arrowParens: 'avoid',
  proseWrap: 'never',
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  overrides: [
    {
      files: ['*.css', '*.scss'],
      options: {
        singleQuote: false
      }
    }
  ]
}
