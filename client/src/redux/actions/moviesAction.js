import {
  PELICULAS_DEFAULT,
  OBTENER_PELICULA_ESPECIFICA,
  BUSCAR_PELICULA_ESPECIFICA
} from '../types/index';
import axiosClient from '../../config/axios';
import axios from 'axios';

/* Carga de peliculas inicial */
export function cargaDePeliculasDefault() {
  return async (dispatch) => {
    try {
      const options = ["rome", "war", "avengers", "toy", "london", "guns", "batman", "cars", "fast"];
      const search = options[Math.floor(Math.random() * options.length)]
      const result = await axios.get(`http://www.omdbapi.com/?s=${search}&apikey=c4ff2a47`);
      dispatch( peliculasDefault(result.data.Search) )
    } catch (error) {
      console.log(error)
    }
  } 
}
const peliculasDefault = ( peliculas ) => ({
  type: PELICULAS_DEFAULT,
  payload: peliculas
})
/* Carga de peliculas inicial */

/* Busqueda de un titulo en especifico */
export function buscarPelicula(tituloPelicula) {
  return async (dispatch) => {
    dispatch( asignarPelicula(tituloPelicula) )
  }
}
const asignarPelicula = (pelicula) => ({
  type: OBTENER_PELICULA_ESPECIFICA,
  payload: pelicula
})

export function busquedaExitosa(pelicula) {
  return async (dispatch) => {
    dispatch( peliculaEncontrada(pelicula) )
  }
}
const peliculaEncontrada = (pelicula) => ({
  type: BUSCAR_PELICULA_ESPECIFICA,
  payload: pelicula
})
/* Busqueda de un titulo en especifico */