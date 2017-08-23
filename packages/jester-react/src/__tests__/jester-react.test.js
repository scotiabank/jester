/* eslint-disable react/prop-types */

import React from 'react';
import jester from 'index';

const Header = ({ children }) => (
  <header>{ children }</header>
);

const Paragraph = ({ children }) => (
  <p>{ children }</p>
);

describe('jester', () => {
  describe('deep', () => {
    jester.runDeepSnapshotTests({
      Header,
      Paragraph
    });
  });

  describe('shallow', () => {
    jester.runShallowSnapshotTests({
      Header,
      Paragraph
    });
  });
});
