tslint-to-eslint-config sample
===

This is minimum sample for tslint-to-eslint-config.

## setup

```
npm ci
```

## scripts

### npm run convert

This runs `npx tslint-to-eslint-config --config .eslintrc.json --tslint ./tslint.json`.
This generates `.eslintrc.json` the original of which is `tslint.json`.

### npm run tslint
This runs `npx tslint index.ts`. Running tslint to lint `index.ts`.

### npm run eslint
This runs `npx eslint index.ts --config ./.eslintrc.json`. Running eslint to lint `index.ts`.
