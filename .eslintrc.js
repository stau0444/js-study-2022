module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'prettier',
    'plugin:react/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    quotes: ['single', 'error'],
    'no-unused-vars': 'warn',
    'prettier/prettier': 'error',
    'no-console': 'off',
    'func-names': 'off', //arrow func 사용시 함수이름 사용 x
    'object-shorthand': 'off',
    'class-methods-use-this': 'off', //this 사용하지 않는 methods는 error
  },
};
