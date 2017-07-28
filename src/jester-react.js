import React from 'react';
import { mount, shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import forEach from 'lodash/forEach';

const getSimpleJsonTree = (Component, strategy) => {
  return toJSON(
    strategy(<Component>Snapshots Rock</Component>)
  );
};

const runComponentSnapshotTest = (name, Component, strategy) => {
  test(`renders ${name} correctly`, () => {
    expect(getSimpleJsonTree(Component, strategy)).toMatchSnapshot();
  });
};

const buildComponentSnapshotTestRunner = (strategy) => {
  return (components) => forEach(
    components,
    (component, key) => runComponentSnapshotTest(key, component, strategy)
  );
};

export default {
  runDeepSnapshotTests: buildComponentSnapshotTestRunner(mount),
  runShallowSnapshotTests: buildComponentSnapshotTestRunner(shallow)
};
