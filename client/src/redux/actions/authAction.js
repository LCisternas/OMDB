import {
  REGISTRO_EXITOSO
} from '../types/index';
import axiosClient from '../../config/axios';

/* Registrar nuevo usuario */
export function nuevoUsuario( info ) {
  return async (dispatch) => {
    try {
      const response = await axiosClient.post('/api/users/register', info)
      dispatch( registroExitoso(response.data) )
    } catch (error) {
      console.log(error)
    }
  }
}
const registroExitoso = res => ({
  type: REGISTRO_EXITOSO,
  payload: res
})
/* Registrar nuevo usuario */