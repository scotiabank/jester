## jester

Jest helpers to reduce boilerplate.

## install

```js
npm install @scotia/jester
```

## usage

Provides methods that create and run tests for to compare json objects.

## api

#### #runSnapshotTests(Object : {})

Accepts any object and runs them through a simple snapshot test.

```js
import jester from '@scotia/jester';
describe('object snapshot', () => {
  jester.runSnapshotTests({
    one: { two: 'three' },
    four: { five: { six: 'seven' } }
  });
});
```

## development

#### Run tests

```bash
npm run test
npm run test:watch
```

#### Build

```bash
npm run build
```
