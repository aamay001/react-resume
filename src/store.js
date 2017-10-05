import {createStore, combineReducers } from 'redux';
import reducer from './reducer';
import { reducer as formReducer } from 'redux-form';

const mainReducer = combineReducers({
    reducer,
    formReducer
});

export default createStore(mainReducer);
