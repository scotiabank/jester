# jester

Jester DRYs up your Jest + React snapshot code.

## usage

Provides methods that create and run tests for you.

## api

#### #runSimpleSnapshotTests(Object : Collection&lt;Component&gt;)

Accepts a collection of components and runs them through a simple snapshot test.

```js
import jester from 'jester'

const Header = ({ children }) => (
  <header>{ children }</header>
);

const Paragraph = ({ children }) => (
  <p>{ children }</p>
);

describe('jester', () => {
  jester.runSimpleSnapshotTests({
    Header,
    Paragraph
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
