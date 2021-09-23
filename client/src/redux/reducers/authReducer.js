import {

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
    default: 
      return state
  }
}