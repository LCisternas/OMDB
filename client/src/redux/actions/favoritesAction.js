import {
  MIS_PELICULAS,
  QUITAR_PELICULA,
  PELICULA_AGREGADA,
  QUITANDO_MOVIES
} from '../types/index';
import axiosClient from '../../config/axios';

/* Agregar pelicula favorita a base de datos */
export function peliculaFavorita( info ) {
  return async (dispatch) => {
    try {
      const response = await axiosClient.post('/api/favorites', info)
      console.log(response.data.newFavMovie)
      dispatch( agregarPelicula( response.data.newFavMovie ) )
    } catch (error) {
      console.log(error)
    }
  }
}
const agregarPelicula = ( info ) => ({
  type: PELICULA_AGREGADA,
  payload: info
})
/* Agregar pelicula favorita a base de datos */

/* Obtener todas las peliculas favoritas del usuario */
export function misFavoritas(info) {
  return async (dispatch) => {
    try {
      const response = await axiosClient.get('/api/favorites', { params: { info } })
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

/* Borrando esta de peliculas de Redux */
export function logoutMovies() {
  return async (dispatch) => {
    try {
      dispatch( elimandoEstadoRedux() )
    } catch (error) {
      console.log(error)
    }
  }
}
const elimandoEstadoRedux = () => ({
  type: QUITANDO_MOVIES,
})
/* Borrando esta de peliculas de Redux */

/* Eliminar pelicula de la base de datos */
export function eliminandoPelicula(info) {
  return async (dispatch) => {
    try {
      const response = await axiosClient.delete('/api/favorites', { params: { info } })
      console.log(response.data.movie)
      dispatch( peliculaEliminada(response.data.movie) )
    } catch (error) {
      console.log(error)
    }
  }
}
const peliculaEliminada = (info) => ({
  type: QUITAR_PELICULA,
  payload: info
})
/* Eliminar pelicula de la base de datos */