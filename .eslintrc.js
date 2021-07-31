module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': 'off',
    'max-len': 'off',
    'dot-notation': 'off',
    'import/extensions': 'off',
    'arrow-parens': ['error', 'as-needed'],
    semi: ['error', 'never'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': 'off'
  }
}
