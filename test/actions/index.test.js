import * as Actions from '../../src/store/actions';

describe('Actions', () => {
  describe('setTimezones', () => {
    test('returns correct action', () => {
      const payload = { foo: 'bar' };
      expect(Actions.setTimezones(payload)).toHaveProperty('type', 'SET_TIMEZONES');
      expect(Actions.setTimezones(payload)).toHaveProperty('payload', payload);
    });
  });
});
