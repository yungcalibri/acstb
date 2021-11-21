module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:cypress/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "no-unused-vars": [
      1,
      { argsIgnorePattern: "^_", ignoreRestSiblings: true },
    ],
    "react/no-unescaped-entities": 0,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-closing-bracket-location": [
      1,
      {
        nonEmpty: "after-props",
        selfClosing: "line-aligned",
      },
    ],
    "cypress/no-unnecessary-waiting": 0,
  },

  overrides: [
    {
      files: "cypress/integration/examples/*",
      rules: {
        "no-unused-vars": 0,
      },
    },
  ],
};
