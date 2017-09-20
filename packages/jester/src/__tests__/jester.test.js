import jester from '../index';

describe('jester', () => {
  describe('object snapshot', () => {
    jester.runSnapshotTests({
      one: { two: 'three' },
      four: { five: { six: 'seven' } }
    });
  });
});
