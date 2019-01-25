import { shallow } from 'enzyme';
import React from 'react';
import { TimezonesOutput } from '../../src/components/TimezonesOutput';

describe('TimezonesOutput', () => {
  it('renders correctly', () => {
    const operationDate = '2019-01-24T15:18:22+02:00';
    const timezones = ['Etc/Greenwich', 'Etc/UTC', 'Etc/GMT+6'];
    const tree = shallow(<TimezonesOutput operationDate={operationDate} timezones={timezones} />);
    expect(tree).toMatchSnapshot();
  });
});
