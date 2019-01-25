export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_TIMEZONES':
      return [...action.payload];
    default:
      return state;
  }
};
