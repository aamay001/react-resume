/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable global-require */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { constants } from './config';

const { ENVIRONMENT: { DEVELOPMENT, CURRENT } } = constants;
const middleware = [];

if (CURRENT === DEVELOPMENT) {
  console.log(CURRENT);
  const { createLogger } = require('redux-logger');
  middleware.push(createLogger());
}

middleware.push(thunk);

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, enhancer);

export default store;
