# jester

Jester DRYs up your Jest + React snapshot code.

##usage

Jester provides methods which will create and run unit tests for you.

####jester.runSimpleSnapshotTests(Object : Collection<StyledComponent>)

Accepts a collection of [Styled Components](https://github.com/styled-components/styled-components)
then creates and runs simple snapshots tests for each component in the collection.

```js
import jester from 'jester'
import styled from 'styled-components';

const Header = styled.h1`
  font-size: 1.8em;
  font-weight: normal;
`;

const BoldHeader = styled.h1`
  font-size: 1.8m;
  font-weight: bold;
`;

describe('jester', () => {
  jester.runSimpleSnapshotTests({
    Header,
    BoldHeader
  });
});
```
## development

#### Run tests

```bash
npm run test
```

#### Build

```bash
npm run build
```


