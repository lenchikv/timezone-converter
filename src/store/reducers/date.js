export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_DATE':
      return { ...action.payload };
    case 'UPDATE_BASIS_DATE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
