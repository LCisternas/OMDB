import { combineReducers } from 'redux';
import movieReducers from './movieReducers';
import authReducer from './authReducer';

export default combineReducers({
  movies: movieReducers,
  auth: authReducer
})