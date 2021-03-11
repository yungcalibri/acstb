module.exports = {
  "*.js": ["prettier --write", "eslint --cache --fix"],
  "*.css": ["prettier --write", "stylelint --cache --fix"],
};
