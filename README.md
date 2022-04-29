## Description
Typescript + Redux + Thunk

- Bible verses are taken from World English Bible (default)

## API-reference:
- https://bible-api.com

## Update:
[dev-esv] branch
- In App.tsx:
  dispatch(GetEsvVerse("Genesis+1:1"))
  - Able to GET crossway API with authorization key
- Modified .gitignore