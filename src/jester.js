import React from 'react';
import renderer from 'react-test-renderer';
import forEach from 'lodash/forEach';

const getSimpleJsonTree = (Component) => {
  return renderer.create(
    <Component>Snapshots Rock</Component>
  ).toJSON();
};

const runSimpleSnapshotTest = (name, Component) => {
  test(`renders ${name} correctly`, () => {
    expect(getSimpleJsonTree(Component)).toMatchSnapshot();
  });
};

const runSimpleSnapshotTests = (components) => forEach(
  components,
  (component, key) => runSimpleSnapshotTest(key, component)
);

export default {
  runSimpleSnapshotTests
};
