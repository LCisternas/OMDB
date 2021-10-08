import {
  REGISTRO_EXITOSO,
  OBTENER_USUARIO_EXITO,
  OBTENER_USUARIO_FALLIDO,
  LOGIN_EXITOSO,
  LOGIN_FALLIDO,
  CERRAR_SESION
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
      dispatch( cerrarSesion() )
    } catch (error) {
      console.log(error)
    }
  }
}
const cerrarSesion = () => ({
  type: CERRAR_SESION
})
/* Cerrar sesión usuario */

/* Actualizar email de usuario */
export function actualizarEmail( info ) {
  return async (dispatch) => {
    try {
      const response = await axiosClient.put('/api/auth', info)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
}
/* Actualizar email de usuario */

/* Actualizar contraseña de usuario */
export function actualizarContraseña(info) {
  return async (dispatch) => {
    try {
      const response = await axiosClient.put('/api/auth/pass', info)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
}
/* Actualizar contraseña de usuario */

/* Eliminar cuenta de usuario */

/* Eliminar cuenta de usuario */