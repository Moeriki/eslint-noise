'use strict';

module.exports = {
  extends: [
    ...[
      './rules/plugin-import',
      './rules/plugin-jsx-a11y',
      './rules/plugin-react',
      './rules/plugin-react-hooks',
      './rules/react',
    ].map(require.resolve),
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
};
