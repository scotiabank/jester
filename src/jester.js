import React from 'react';
import { mount, shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import forEach from 'lodash/forEach';

const getSimpleJsonTree = (Component, strategy) => {
  return toJSON(
    strategy(<Component>Snapshots Rock</Component>)
  );
};

const runSnapshotTest = (name, Component, strategy) => {
  test(`renders ${name} correctly`, () => {
    expect(getSimpleJsonTree(Component, strategy)).toMatchSnapshot();
  });
};

const buildSnapshotTestRunner = (strategy) => {
  return (components) => forEach(
    components,
    (component, key) => runSnapshotTest(key, component, strategy)
  );
};

export default {
  runDeepSnapshotTests: buildSnapshotTestRunner(mount),
  runShallowSnapshotTests: buildSnapshotTestRunner(shallow)
};
