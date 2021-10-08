import {
  REGISTRO_EXITOSO,
  OBTENER_USUARIO_EXITO,
  OBTENER_USUARIO_FALLIDO,
  LOGIN_EXITOSO,
  LOGIN_FALLIDO,
  CERRAR_SESION,
  ELIMINAR_CUENTA
} from '../types/index';

const initialState = {
  token: localStorage.getItem('token'),
  autenticado: null,
  user: {user:{
    _id: null
  }},
  msg: null,
  charching: null
}
// eslint-disable-next-line
export default function(state = initialState, action) {
  switch(action.type) {
    case ELIMINAR_CUENTA:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        autenticado: null,
        user: {user:{
          _id: null
        }}
      }
    case CERRAR_SESION:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        autenticado: null,
        user: {user:{
          _id: null
        }}
      }
    case LOGIN_EXITOSO:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
      }
    case LOGIN_FALLIDO:
      localStorage.removeItem('token');
      return {
        token: null,
        autenticado: null,
        user: null
      } 
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