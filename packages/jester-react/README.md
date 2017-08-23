# jester-react

Jester DRYs up your Jest + React snapshot code.

## usage

Provides methods that create and run tests for you using enzyme test rendering.

## api

#### #runShallowSnapshotTests(Object : Collection&lt;Component&gt;)

Accepts a collection of components and runs them through a shallow snapshot test. The test creates a snapshot based on enzyme shallow.

```js
import jester from '@scotia/jester-react';

const Header = ({ children }) => <header>{children}</header>;

const Paragraph = ({ children }) => <p>{children}</p>;

describe('shallow', () => {
  jester.runShallowSnapshotTests({
    Header,
    Paragraph
  });
});
```

#### #runDeepSnapshotTests(Object : Collection&lt;Component&gt;)

Accepts a collection of components and runs them through a deep snapshot test. The test creates a snapshot based on enzyme mount.

```js
import jester from '@scotia/jester-react';

const Header = ({ children }) => <header>{children}</header>;

const Paragraph = ({ children }) => <p>{children}</p>;

describe('deep', () => {
  jester.runDeepSnapshotTests({
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

