import jester from './../index';
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
