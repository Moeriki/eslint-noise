'use strict';

module.exports = {
  plugins: ['@typescript-eslint'],
  rules: {
    // TypeScript's `noFallthroughCasesInSwitch` option is more robust
    'default-case': 'off',
    // 'tsc' already handles this
    'no-dupe-class-members': 'off',
    'no-undef': 'off',

    // plugin rules

    '@typescript-eslint/adjacent-overload-signatures': 'error',

    // Bans `// @ts-<directive>` comments from being used
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
    '@typescript-eslint/ban-ts-comment': 'error',

    '@typescript-eslint/ban-types': 'error',

    '@typescript-eslint/consistent-type-assertions': 'warn',

    '@typescript-eslint/explicit-function-return-type': 'error',

    // Enforces naming conventions for everything across a codebase
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
    camelcase: 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'default', format: ['camelCase'] },
      { selector: 'function', format: ['camelCase', 'PascalCase'] },
      { selector: 'class', format: ['PascalCase'] },
      { selector: 'variable', format: ['camelCase', 'UPPER_CASE'] },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['camelCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
      { selector: 'typeLike', format: ['PascalCase'] },
    ],

    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',

    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'error',

    '@typescript-eslint/no-empty-interface': 'error',

    '@typescript-eslint/no-explicit-any': 'warn',

    '@typescript-eslint/no-inferrable-types': 'error',

    '@typescript-eslint/no-misused-new': 'error',

    '@typescript-eslint/no-namespace': 'error',

    '@typescript-eslint/no-non-null-assertion': 'warn',

    // Disallows using a non-null assertion after an optional chain expression
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

    '@typescript-eslint/no-this-alias': 'error',

    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { args: 'none', ignoreRestSiblings: true },
    ],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, typedefs: false },
    ],

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    // Prevents conditionals where the type is always truthy or always falsy
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
    '@typescript-eslint/no-unnecessary-condition': [
      'error',
      { allowConstantLoopConditions: true },
    ],

    '@typescript-eslint/no-var-requires': 'error',

    '@typescript-eslint/prefer-namespace-keyword': 'error',

    '@typescript-eslint/prefer-nullish-coalescing': 'error',

    '@typescript-eslint/prefer-optional-chain': 'error',

    // Enforce template literal expressions to be of string type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      { allowBoolean: true, allowNumber: true, allowNullish: true },
    ],

    // Restricts the types allowed in boolean expressions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
    '@typescript-eslint/strict-boolean-expressions': 'error',

    '@typescript-eslint/triple-slash-reference': 'error',
  },
};
