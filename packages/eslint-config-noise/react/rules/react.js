'use strict';

const eslint = require('../../base/rules/eslint');
const { extendRules } = require('../../src/extend');

module.exports = {
  rules: {
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
          'componentDidCatch',
          'getSnapshotBeforeUpdate',
        ],
      },
    ],
    ...extendRules(eslint.rules, {
      'no-underscore-dangle': {
        allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'],
      },
    }),
  },
};
