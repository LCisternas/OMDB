import { PELICULAS_DEFAULT } from '../types/index';

const initialState = {
  peliculas: [],
};
// eslint-disable-next-line
export default function(state = initialState, action) {
  switch(action.type) {
    case PELICULAS_DEFAULT:
      return {
        ...state,
        peliculas: action.payload
      }
    default:
      return state
  }
}