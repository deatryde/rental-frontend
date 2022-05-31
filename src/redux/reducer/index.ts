import { combineReducers } from 'redux';
import authReducer from './auth';
import httpReducer from './http';

export const rootReducer = combineReducers({
  auth: authReducer,
  http: httpReducer,
});
