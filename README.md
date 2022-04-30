## Description
Typescript + Redux + Thunk

- Bible verses are taken from World English Bible (default)

## API-reference:
- https://bible-api.com

- https://api.esv.org/docs/passage-text/
GET Numbers 12, Verses 3 - 5
eg. https://api.esv.org/v3/passage/text/?q=Numbers+12:3-5

## Update:
To use Crossway's ESV API:
- Implemented EsvReducer.ts
- App.tsx: dispatch with book+chapter+verses when `currentVerses` state updates

