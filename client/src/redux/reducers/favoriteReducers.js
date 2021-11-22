import {
  MIS_PELICULAS,
  PELICULA_AGREGADA,
  QUITANDO_MOVIES,
  QUITAR_PELICULA
} from '../types/index';

const initialState = {
  favoritesMovies : [],
  peliculaAgregada: null
}
// eslint-disable-next-line
export default function(state = initialState, action) {
  switch(action.type) {
    case QUITAR_PELICULA: {
      return {
        ...state,
        favoritesMovies: state.favoritesMovies.filter(movie => movie.movieID !== action.payload.movieID)
      }
    }
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