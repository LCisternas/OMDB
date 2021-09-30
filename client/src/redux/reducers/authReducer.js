import {
  REGISTRO_EXITOSO,
  OBTENER_USUARIO_EXITO,
  OBTENER_USUARIO_FALLIDO
} from '../types/index';

const initialState = {
  token: localStorage.getItem('token'),
  autenticado: null,
  user: null,
  msg: null,
  charching: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case REGISTRO_EXITOSO:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        autenticado: true,
        msg: null
      }
    case OBTENER_USUARIO_EXITO:
      return {
        ...state,
        autenticado: true,
        user: action.payload
      }
    case OBTENER_USUARIO_FALLIDO:
    localStorage.removeItem('token')  
    return {
      ...state,
      token: null,
      autenticado: null,
      user: null
      }    
    default: 
      return state
  }
}