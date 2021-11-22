import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import trackerReducer from './tracker/tracker.js';

const reducers = combineReducers({
  trackerReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk),
);

export default store;