import forEach from 'lodash/forEach';

const runSnapshotTest = (name, object) => {
  test(`renders ${name} correctly`, () => {
    expect(JSON.stringify(object, null, 2)).toMatchSnapshot();
  });
};

export const runSnapshotTests = (object) => forEach(
  object,
  (value, key) => runSnapshotTest(key, value)
);
