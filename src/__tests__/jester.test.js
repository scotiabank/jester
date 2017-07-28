import { runSnapshotTests } from '../jester';

describe('jester', () => {
  describe('object snapshot', () => {
    runSnapshotTests({
      one: { two: 'three' },
      four: { five: { six: 'seven' } }
    });
  });
});
