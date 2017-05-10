module.exports = {
  'parser': 'babel-eslint',
  'extends': [
    'standard',
    'plugin:react/recommended'
  ],
  'plugins': [
    'standard',
    'promise',
    'react'
  ],
  'env': {
    'jest': true
  },
  'rules': {
    'semi': [2, 'always'],
    'object-curly-spacing': [2, 'always'],
    'array-bracket-spacing': [2, 'always'],
    'space-before-function-paren': [2, 'never']
  }
};
