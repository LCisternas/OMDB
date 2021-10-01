import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asigandoID } from '../../redux/actions/moviesAction';
import style from './movies.module.css';

const SingularMovie = ({ oneMovie }) => {

  const { Title, Poster, Year, imdbID } = oneMovie;
  const history = useHistory();

  const dispatch = useDispatch();
  const setID = (movieID) => dispatch( asigandoID(movieID) )

  const redireccion = (title) => {
    history.push(`/viewmovie/${title}`)
    setID(imdbID)
  }

  return (
    <div className={style.singularMovie}>
      <div className={style.singularTitle}>
        <h1>{Title} <span>{Year}</span></h1>
      </div>
      <div className={style.singularImg}>
        {/* eslint-disable-next-line */}
        <a onClick={() => redireccion(Title)}><img src={Poster} alt='movie poster' /></a>
      </div>
      <div className={style.singularOptions}>
        <form>
        <button
          type='submit'
        >Agregar a favoritos</button>
        </form>
      </div>
    </div>
  );
}
 
export default SingularMovie;