module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parser: 'babel-eslint',
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "react/jsx-filename-extension": 0,
    "linebreak-style": "off",
    "react/jsx-no-useless-fragment": "off",
    "react/prefer-stateless-function": "off",
    "react/state-in-constructor": "off",
    "no-unused-vars": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-duplicates": "off",
    "no-const-assign": "off",
    "react/forbid-prop-types": "off",
  },
};
