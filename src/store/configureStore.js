import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import auth from './reducers/auth';
import app from './reducers/app';
import modal from './reducers/modal';
import { alertReducer } from 'react-native-redux-alert'

const rootReducer = combineReducers({
  alertReducer,
  auth,
  app,
  modal,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
