import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import dateReducer from '../reducers/date';
import timezonesReducer from '../reducers/timezones';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

export default () => {
  const store = createStore(
    combineReducers({
      date: dateReducer,
      timezones: timezonesReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );

  return store;
};
