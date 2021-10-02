import {
  MIS_PELICULAS
} from '../types/index';

const initialState = {
  favoritesMovies : []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case MIS_PELICULAS:
      return {
        ...state,
        favoritesMovies: action.payload
      }
    default:
      return state
  }
}