import { combineReducers } from 'redux';
import movieReducers from './movieReducers';
import authReducer from './authReducer';
import favoriteReducers from './favoriteReducers';

export default combineReducers({
  movies: movieReducers,
  auth: authReducer,
  favorites: favoriteReducers
})