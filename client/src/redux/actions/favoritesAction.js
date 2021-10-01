import {
  AGREGAR_PELICULA,
  QUITAR_PELICULA
} from '../types/index';
import axiosClient from '../../config/axios';

/* Agregar una pelicula a favoritos */
export function peliculaFavorita( info ) {
  return async (dispatch) => {
    try {
      const response = await axiosClient.post('/api/favorites')
      console.log(response)
      dispatch( agregarPelicula( response.data ) )
    } catch (error) {
      console.log(error)
      dispatch( quitarPelicula() )
    }
  }
}
const agregarPelicula = ( info ) => ({
  type: AGREGAR_PELICULA,
  payload: info
})
const quitarPelicula = () => ({
  type: QUITAR_PELICULA
})
/* Agregar una pelicula a favoritos */