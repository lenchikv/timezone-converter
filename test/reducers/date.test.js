import { random } from 'lodash';
import reducer from '../../src/store/reducers/date';

function getPayload() {
  return {
    id: random(0, 10 ** 16),
    basisDate: '2019-01-01',
    currentTimeZone: 'Europe/Kiev',
  };
}

describe('DateReducer', () => {
  describe('SET_DATE', () => {
    test('set the date', () => {
      const payload = getPayload();
      const action = { type: 'SET_DATE', payload };
      const newState = reducer({}, action);
      expect(newState).toEqual(payload);
    });
  });
});
