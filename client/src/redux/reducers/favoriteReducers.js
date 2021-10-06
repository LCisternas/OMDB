import {
  MIS_PELICULAS,
  PELICULA_AGREGADA,
  QUITANDO_MOVIES
} from '../types/index';

const initialState = {
  favoritesMovies : [],
  peliculaAgregada: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case QUITANDO_MOVIES:
      return {
        ...state,
        favoritesMovies: []
      }
    case PELICULA_AGREGADA:
      return {
        ...state,
        peliculaAgregada: action.payload
      }
    case MIS_PELICULAS:
      return {
        ...state,
        favoritesMovies: action.payload
      }
    default:
      return state
  }
}