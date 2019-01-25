import { shallow } from 'enzyme';
import React from 'react';
import Header from '../../src/components/Header';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = shallow(<Header />);
    expect(tree).toMatchSnapshot();
  });
});
