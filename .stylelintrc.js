module.exports = {
  plugins: ["stylelint-high-performance-animation"],
  extends: ["stylelint-config-idiomatic-css", "stylelint-a11y/recommended"],
  rules: {
    "plugin/no-low-performance-animation-properties": true,
  },
};
