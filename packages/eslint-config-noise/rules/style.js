'use strict';

module.exports = {
  rules: {
    // Require camel case names
    camelcase: [
      'error',
      {
        ignoreDestructuring: false,
        ignoreGlobals: true,
        ignoreImports: true,
        properties: 'never',
      },
    ],

    // Enforces consistent naming when capturing the current execution context
    'consistent-this': ['error', 'DEPRECATED_RENAMED_THIS'],

    // Requires function names to match the name of the variable or property to
    // which they are assigned
    // https://eslint.org/docs/rules/func-name-matching
    'func-name-matching': [
      'error',
      'always',
      { considerPropertyDescriptor: true, includeCommonJSModuleExports: false },
    ],

    // Require function expressions to have a name
    // https://eslint.org/docs/rules/func-names
    'func-names': ['error', 'as-needed'],

    // Require or disallow newlines around directives
    // https://eslint.org/docs/rules/lines-around-directive
    'lines-around-directive': ['error', { after: 'always', before: 'always' }],

    // Require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: false },
    ],

    // Require a capital letter for constructors
    'new-cap': [
      'error',
      {
        capIsNew: false,
        capIsNewExceptions: [
          'Immutable.Map',
          'Immutable.Set',
          'Immutable.List',
        ],
        newIsCap: true,
        newIsCapExceptions: [],
      },
    ],

    // Disallow use of the Array constructor
    'no-array-constructor': 'error',

    // Disallow use of bitwise operators
    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'error',

    // Disallow use of the continue statement
    // https://eslint.org/docs/rules/no-continue
    'no-continue': 'error',

    // Disallow if as the only statement in an else block
    // https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'off', // NOTE: We use unicorn/no-lonely-if

    // Disallow use of chained assignment expressions
    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': ['error'],

    // Disallow negated conditions
    // https://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'error',

    // Disallow use of the Object constructor
    'no-new-object': 'error',

    // Disallow use of unary operators, ++ and --
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'error',

    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': ['error', 'SequenceExpression'],

    // Disallow dangling underscores in identifiers
    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_id', '_', '__'],
        allowAfterSuper: true,
        allowAfterThis: true,
        allowFunctionParams: true,
        enforceInMethodNames: true,
      },
    ],

    // Disallow the use of Boolean literals in conditional expressions
    // Also, prefer `a || b` over `a ? a : b`
    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // Allow just one var statement per function
    'one-var': ['error', 'never'],

    // Require assignment operator shorthand where possible or prohibit it entirely
    // https://eslint.org/docs/rules/operator-assignment
    'operator-assignment': ['error', 'always'],

    // Require using arrow functions for callbacks
    // https://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],

    // Disallow the use of `Math.pow` in favor of the `**` operator
    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    'prefer-exponentiation-operator': 'error',

    // Prefer use of an object spread over Object.assign
    // https://eslint.org/docs/rules/prefer-object-spread
    'prefer-object-spread': 'error',

    // Requires object keys to be sorted
    // https://eslint.org/docs/rules/sort-keys
    'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

    // Require or disallow a space immediately following the // or /* in a comment
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [
      'error',
      'always',
      {
        block: {
          balanced: true,
          exceptions: ['-', '+'],
          markers: ['=', '!', ':', '::'],
        },
        line: { exceptions: ['-', '+'], markers: ['=', '!', '/'] },
      },
    ],
  },
};
