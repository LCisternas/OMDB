import {
  REGISTRO_EXITOSO,
  OBTENER_USUARIO_EXITO,
  OBTENER_USUARIO_FALLIDO
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





// const autenticacion = async () => {
//   const token = localStorage.getItem('token');
//   if(token) {
//     tokenAuth(token)
//   }
//   try {
//     const response = await axiosClient.get('/api/auth');
//     console.log('desde action' ,response.data)
//     obtenerUsuarioExitoso(response.data);
//   } catch (error) {
//     console.log(error)
//     obtenerUsuarioFallido()
//   }
  // return async (dispatch) => {
  //   try {
  //     const response = await axiosClient.get('/api/auth');
  //     console.log(response.data)
  //     dispatch( obtenerUsuarioExitoso(response.data) )
  //   } catch (error) {
  //     console.log(error)
  //     dispatch( obtenerUsuarioFallido() )
  //   }
  // }
// }
const obtenerUsuarioExitoso = (info) => ({
  type: OBTENER_USUARIO_EXITO,
  payload: info
})
const obtenerUsuarioFallido = () => ({
  type: OBTENER_USUARIO_FALLIDO
})
/* Autenticacion de usuario */