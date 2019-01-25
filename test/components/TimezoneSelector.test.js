import { shallow } from 'enzyme';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { TimezoneSelector } from '../../src/components/TimezoneSelector';
import dateReducer from '../../src/store/reducers/date';
import timezonesReducer from '../../src/store/reducers/timezones';

describe('TimezoneSelector', () => {
  const reducers = combineReducers({
    date: dateReducer,
    timezones: timezonesReducer,
  });
  const store = createStore(reducers);

  it('renders correctly', () => {
    const selValue = 'Etc/GMT';
    const updateTimezones = jest.fn();
    const tree = shallow(<TimezoneSelector store={store} updateTimezones={updateTimezones} />);
    const selectElement = tree.find('#timezones-list');
    selectElement.simulate('change', { target: { value: selValue } });
    expect(updateTimezones).toHaveBeenCalledTimes(1);
    expect(updateTimezones).toHaveBeenCalledWith([selValue]);
  });
});
