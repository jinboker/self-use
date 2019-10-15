const { strictEslint } = require('@umijs/fabric');

const { rules } = strictEslint;

module.exports = {
  ...strictEslint,
  rules: {
    ...rules,
    'semi': 'off',
    'arrow-parens': 'off',
    'max-len': [2, 120],
    'import/named': 0,
    'import/no-named-as-default': 'off',
    'arrow-body-style': 0,
    'space-before-function-paren': 0,

    'no-console': 'off',
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'no-unused-expressions': ['error', { allowShortCircuit: true }],

    // react 相关
    'react/sort-comp': 0,
    'react/jsx-no-bind':0,
    'react/no-unused-state': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-boolean-value': ['error', 'always'],
    'react/no-access-state-in-setstate': 0,

    // ts 相关
    '@typescript-eslint/semi': 'error',
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
