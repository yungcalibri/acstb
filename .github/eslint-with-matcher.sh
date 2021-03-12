echo "::add-matcher::./.github/match-eslint-compact.json"
yarn run eslint --cache --format compact ./
echo "::remove-matcher owner=eslint-compact"
