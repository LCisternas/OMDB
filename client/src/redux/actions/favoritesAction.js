import {
  MIS_PELICULAS,
  QUITAR_PELICULA
} from '../types/index';
import axiosClient from '../../config/axios';

/* Agregar pelicula favorita a base de datos */
export function peliculaFavorita( info ) {
  return async (dispatch) => {
    try {
      const response = await axiosClient.post('/api/favorites', info)
      // console.log(response.data.newFavMovie)
      // dispatch( agregarPelicula( response.data.newFavMovie ) )
    } catch (error) {
      console.log(error)
    }
  }
}
// const agregarPelicula = ( info ) => ({
//   type: AGREGAR_PELICULA,
//   payload: info
// })
/* Agregar pelicula favorita a base de datos */

/* Obtener todas las peliculas favoritas del usuario */
export function misFavoritas() {
  return async (dispatch) => {
    try {
      const response = await axiosClient.get('/api/favorites')
      // console.log(response.data.listaPeliculas)
      dispatch( todasMisFavoritas(response.data.listaPeliculas) )
    } catch (error) {
      console.log(error)
    }
  }
}
const todasMisFavoritas = ( info ) => ({
  type: MIS_PELICULAS,
  payload: info
})
/* Obtener todas las peliculas favoritas del usuario */