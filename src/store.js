import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducers';
import {createLogger} from 'redux-logger';
import {autoRehydrate} from 'redux-persist';

export default createStore(
  reducer,
  undefined,
  compose(
  applyMiddleware(...[createLogger()]),
  autoRehydrate()
  )
);
