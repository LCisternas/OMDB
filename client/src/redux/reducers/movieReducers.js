import { 
  PELICULAS_DEFAULT,
  OBTENER_PELICULA_ESPECIFICA,
  BUSCAR_PELICULA_ESPECIFICA,
  ID_PELICULA
} from '../types/index';

const initialState = {
  peliculas: [],
  peliculaEspecifica: '',
  idPelicula: ''
};
// eslint-disable-next-line
export default function(state = initialState, action) {
  switch(action.type) {
    case PELICULAS_DEFAULT:
      return {
        ...state,
        peliculas: action.payload
      }
    case OBTENER_PELICULA_ESPECIFICA:
      return {
        ...state,
        peliculaEspecifica: action.payload
      }
    case BUSCAR_PELICULA_ESPECIFICA:
      return {
        ...state,
        peliculas: action.payload
      }
    case ID_PELICULA:
      return {
        ...state,
        idPelicula: action.payload
      }  
    default:
      return state
  }
}