import {
  PELICULAS_DEFAULT
} from '../types/index';
import axiosClient from '../../config/axios';
import axios from 'axios';

export function cargaDePeliculasDefault() {
  return async (dispatch) => {
    try {
      const result = await axios.get('http://www.omdbapi.com/?s=avengers&apikey=c4ff2a47');
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