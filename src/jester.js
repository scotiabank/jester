import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import forEach from 'lodash/forEach';

const getSimpleJsonTree = (Component) => {
  return toJSON(
    mount(<Component>Snapshots Rock</Component>)
  );
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
