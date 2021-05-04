module.exports = {
  plugins: ["stylelint-high-performance-animation"],
  extends: [
    "stylelint-config-standard",
    "stylelint-a11y/recommended",
    "stylelint-config-prettier",
  ],
  rules: {
    "plugin/no-low-performance-animation-properties": true,
    "value-keyword-case": undefined,
    "no-duplicate-selectors": undefined,
    "custom-property-empty-line-before": undefined,
    "declaration-empty-line-before": undefined,
    "selector-type-no-unknown": undefined,
  },
};
