import React from 'react';
import List from './List.js';
import renderer from 'react-test-renderer';

describe('List', () => {
  test('renders correctly', () => {
    const list = ["todo 1", "todo 2"]
    const tree = renderer
      .create(<List list={list}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
