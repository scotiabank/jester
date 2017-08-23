module.exports = {
  'parser': 'babel-eslint',
  'extends': [
    '@scotia/eslint-config-scotiabank',
    'plugin:react/recommended'
  ],
  'plugins': [
    'react'
  ],
  'env': {
    'jest': true
  }
};
