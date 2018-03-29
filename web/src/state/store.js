import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

// eslint-disable-next-line no-underscore-dangle
const devtoolsInstalled = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = process.env.NODE_ENV !== 'production' && devtoolsInstalled
  // eslint-disable-next-line no-underscore-dangle
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;
export const storeFactory = (state = {}) => createStore(
  combineReducers(reducers),
  state,
  composeEnhancers(applyMiddleware(thunk)),
);

export default storeFactory();
