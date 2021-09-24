module.exports = {
  env: {
    es6: true
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    eqeqeq: 'off',
    'global-require': 0,
    'import/prefer-default-export': 'off',
    'import/order': 'off',
    'no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: false }
    ],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js']
      }
    ],
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    camelcase: 'off',
    'no-nested-ternary': 'off'
  }
};
