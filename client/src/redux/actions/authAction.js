import {
  REGISTRO_EXITOSO,
  OBTENER_USUARIO_EXITO,
  OBTENER_USUARIO_FALLIDO,
  LOGIN_EXITOSO,
  LOGIN_FALLIDO
} from '../types/index';
import axiosClient from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

/* Registrar nuevo usuario */
export function nuevoUsuario( info ) {
  return async (dispatch) => {
    try {
      const response = await axiosClient.post('/api/users/register', info)
      // console.log(response.data)
      dispatch( registroExitoso(response.data) )
      // autenticacion()
    } catch (error) {
      console.log(error)
    }
  }
}
const registroExitoso = (res) => ({
  type: REGISTRO_EXITOSO,
  payload: res
})
/* Registrar nuevo usuario */

/* Autenticacion de usuario */
export function autenticacion() {
  return async (dispatch) => {
    const token = localStorage.getItem('token');
    if(token) {
      tokenAuth(token)
    }
    try {
      const response = await axiosClient.get('/api/auth');
      console.log(response.data)
      dispatch( obtenerUsuarioExitoso( response.data ) );
    } catch (error) {
      console.log(error);
      dispatch( obtenerUsuarioFallido() )
    }
  }
}
const obtenerUsuarioExitoso = (info) => ({
  type: OBTENER_USUARIO_EXITO,
  payload: info
})
const obtenerUsuarioFallido = () => ({
  type: OBTENER_USUARIO_FALLIDO
})
/* Autenticacion de usuario */

/* Login usuario */
export function login( info ) {
  return async (dispatch) => {
    try {
      const response = await axiosClient.post('/api/auth', info);
      console.log(response.data)
      dispatch( loginExitoso( response.data ) )
    } catch (error) {
      console.log(error);
      dispatch( loginFallido() )
    }
  }
}

const loginExitoso = ( info ) => ({
  type: LOGIN_EXITOSO,
  payload: info
})
const loginFallido = () => ({
  type: LOGIN_FALLIDO
})
/* Login usuario */

/* Cerrar sesión usuario */
export function logout() {
  return async (dispatch) => {
    try {
      
    } catch (error) {
      
    }
  }
}
/* Cerrar sesión usuario */