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

const runSnapshotTest = (name, object) => {
  test(`renders ${name} correctly`, () => {
    expect(JSON.stringify(object, null, 2)).toMatchSnapshot();
  });
};

const buildComponentSnapshotTestRunner = (strategy) => {
  return (components) => forEach(
    components,
    (component, key) => runComponentSnapshotTest(key, component, strategy)
  );
};

const runSnapshotTests = (object) => forEach(
  object,
  (value, key) => runSnapshotTest(key, value)
);

export default {
  runDeepSnapshotTests: buildComponentSnapshotTestRunner(mount),
  runShallowSnapshotTests: buildComponentSnapshotTestRunner(shallow),
  runSnapshotTests
};
